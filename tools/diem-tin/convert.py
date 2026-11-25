"""Chuyển bản tin hằng ngày (daily-digest-YYYY-MM-DD.html) thành trang Điểm tin.

Cách dùng:
    python tools/diem-tin/convert.py <thư-mục-digest> [--date YYYY-MM-DD] [--force]

- Không có --date: chuyển mọi tệp daily-digest-YYYY-MM-DD.html trong thư mục.
- Đầu ra: content/diem-tin/YYYY/YYYY-MM-DD.md (bỏ qua tệp đã có, trừ khi --force).
- Giữ nguyên giao diện bản gốc: song ngữ Anh–Việt, biểu tượng, biểu đồ, ô số liệu,
  hộp giải thích. Kiểu dáng nằm ở content/diem-tin/assets/digest.css.
- Bỏ những phần chỉ dùng trên máy: tab "Báo cáo đánh giá", thanh đánh giá sao và
  ghi chú, nút đọc to, nút tải hình, script.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT_ROOT = REPO / "content" / "diem-tin"
CSS_HREF = "/diem-tin/assets/digest.css"

SECTION_VI = {
    "ai": "công nghệ & AI",
    "finance": "tài chính",
    "bio": "y sinh học",
    "world": "thế giới",
    "science": "khoa học cơ bản",
    "lab": "ứng dụng phòng xét nghiệm",
    "finlit": "kiến thức tài chính doanh nghiệp",
    "quantum": "mạch lượng tử",
}

FNAME = re.compile(r"daily-digest-(\d{4})-(\d{2})-(\d{2})\.html$")


def block(src: str, start: int, tag: str) -> tuple[int, int]:
    """Vị trí (đầu, cuối) của phần tử <tag> bắt đầu tại start, có tính lồng nhau."""
    depth = 0
    for m in re.finditer(rf"<(/?){tag}\b[^>]*>", src[start:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return start, start + m.end()
    return start, len(src)


def extract(src: str, open_re: str, tag: str) -> str:
    m = re.search(open_re, src)
    if not m:
        return ""
    a, b = block(src, m.start(), tag)
    return src[a:b]


def remove_all(src: str, open_re: str, tag: str) -> str:
    while (m := re.search(open_re, src)):
        a, b = block(src, m.start(), tag)
        src = src[:a] + src[b:]
    return src


def svg_text_fill(src: str) -> str:
    """Đổi thuộc tính fill của <text> trong SVG thành style để không bị CSS của Quartz ghi đè."""

    def fix(m: re.Match) -> str:
        tag = m.group(0)
        f = re.search(r'\sfill="([^"]+)"', tag)
        if not f or "style=" in tag:
            return tag
        return tag.replace(f.group(0), f' style="fill:{f.group(1)}"', 1)

    return re.sub(r"<text\b[^>]*>", fix, src)


def clean(digest: str) -> str:
    s = re.sub(r"<!--.*?-->", "", digest, flags=re.S)
    s = re.sub(r"<script\b.*?</script>", "", s, flags=re.S)
    for cls in ("fb", "viz-bar", "viz-actions", "tabs"):
        s = remove_all(s, rf'<div class="{cls}"', "div")
    s = re.sub(r"<button\b.*?</button>", "", s, flags=re.S)
    s = re.sub(r'\s(?:data-(?:topic|journal|author|depth|title))="[^"]*"', "", s)
    s = re.sub(r'target="_blank"(?! rel)', 'target="_blank" rel="noopener"', s)
    s = s.replace('<nav class="toc">', '<nav class="dz-toc">')  # .toc trùng tên với mục lục của Quartz
    s = svg_text_fill(s)
    # Markdown kết thúc khối HTML ở dòng trống: gộp thành các dòng liền nhau, bỏ thụt lề
    lines = [ln.strip() for ln in s.splitlines()]
    return "\n".join(ln for ln in lines if ln)


def parse(src: str) -> tuple[str, list[str], int]:
    hero = extract(src, r'<header class="hero"', "header")
    digest = extract(src, r'<div id="digest"', "div")
    if not digest:
        digest = src.split('id="report"')[0]
    sids = re.findall(r'<section class="topic" id="([a-z]+)"', digest)
    n = len(re.findall(r'<div class="card"', digest))
    body = clean(hero + "\n" + digest)
    return body, sids, n


def render(y: str, mo: str, d: str, body: str, sids: list[str], n: int) -> str:
    names = [SECTION_VI.get(s, s) for s in sids]
    desc = f"{n} tin song ngữ Anh–Việt: " + ", ".join(names) + "."
    return "\n".join(
        [
            "---",
            f"title: Điểm tin {d}/{mo}/{y}",
            f'description: "{desc}"',
            "tags: [diem-tin]",
            f"date: {y}-{mo}-{d}",
            "---",
            "",
            f'<link rel="stylesheet" href="{CSS_HREF}">',
            "",
            "> [!info] Điểm tin do AI tổng hợp tự động. Vui lòng kiểm tra nguồn gốc trước khi sử dụng.",
            "",
            '<div class="dz-digest">',
            body,
            "</div>",
            "",
        ]
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("src", type=Path)
    ap.add_argument("--date", help="chỉ chuyển một ngày YYYY-MM-DD")
    ap.add_argument("--force", action="store_true", help="ghi đè tệp đã có")
    a = ap.parse_args()

    files = sorted(a.src.glob("daily-digest-*.html"))
    if a.date:
        files = [f for f in files if f.name == f"daily-digest-{a.date}.html"]
    done = 0
    for f in files:
        m = FNAME.search(f.name)
        if not m:
            continue
        y, mo, d = m.groups()
        out = OUT_ROOT / y / f"{y}-{mo}-{d}.md"
        if out.exists() and not a.force:
            continue
        body, sids, n = parse(f.read_text(encoding="utf-8"))
        if not n:
            print(f"Skip {f.name}: no items found", file=sys.stderr)
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(render(y, mo, d, body, sids, n), encoding="utf-8", newline="\n")
        done += 1
        print(out.relative_to(REPO).as_posix())
    print(f"Wrote {done} files.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
