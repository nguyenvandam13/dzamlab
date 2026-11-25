"""Chuyển bản tin hằng ngày (daily-digest-YYYY-MM-DD.html) thành trang Điểm tin.

Cách dùng:
    python tools/diem-tin/convert.py <thư-mục-digest> [--date YYYY-MM-DD] [--force]

- Không có --date: chuyển mọi tệp daily-digest-YYYY-MM-DD.html trong thư mục.
- Đầu ra: content/diem-tin/YYYY/YYYY-MM-DD.md (bỏ qua tệp đã có, trừ khi --force).
- Chỉ lấy phần tiếng Việt của mỗi tin, kèm link nguồn và ô số liệu.
- Bỏ: tab "Báo cáo đánh giá", phần đánh giá/ghi chú cá nhân, biểu đồ,
  mục "Kiến thức tài chính doanh nghiệp" (giáo trình, không phải tin).
"""

from __future__ import annotations

import argparse
import html
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT_ROOT = REPO / "content" / "diem-tin"

# id mục trong HTML -> tiêu đề mục trên web (theo thứ tự hiển thị)
SECTIONS = {
    "ai": "Công nghệ & AI",
    "finance": "Tài chính & thị trường",
    "bio": "Y sinh học",
    "world": "Thế giới",
    "science": "Khoa học cơ bản",
    "lab": "Ứng dụng phòng xét nghiệm",
}
SKIP_SECTIONS = {"finlit"}  # giáo trình tài chính, không phải tin

DEPTH_VI = {"Brief": "Tin ngắn", "Analysis": "Phân tích", "Deep dive": "Chuyên sâu"}

FNAME = re.compile(r"daily-digest-(\d{4})-(\d{2})-(\d{2})\.html$")


def esc_md(text: str) -> str:
    """Thoát các ký tự có nghĩa đặc biệt trong Markdown của Quartz."""
    text = text.replace("\\", "\\\\")
    text = text.replace("$", "\\$")  # tránh bị hiểu là công thức LaTeX
    text = text.replace("==", "=​=")  # tránh highlight kiểu Obsidian
    text = text.replace("[[", "[​[")
    text = text.replace("<", "&lt;")
    return text


class InlineMd(HTMLParser):
    """Chuyển một đoạn HTML đơn giản (p, b, i, a, ul/li, br) sang Markdown."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.out: list[str] = []
        self.href: list[str | None] = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("svg", "script", "style") or "lang" in (a.get("class") or "").split():
            self.skip += 1
            return
        if self.skip:
            return
        if tag in ("b", "strong"):
            self.out.append("**")
        elif tag in ("i", "em"):
            self.out.append("*")
        elif tag == "a":
            self.href.append(a.get("href"))
            self.out.append("[")
        elif tag in ("p", "div", "ul", "ol"):
            self.out.append("\n\n")
        elif tag == "li":
            self.out.append("\n- ")
        elif tag == "br":
            self.out.append("\n\n")

    def handle_endtag(self, tag):
        if tag in ("svg", "script", "style") and self.skip:
            self.skip -= 1
            return
        if self.skip:
            if tag == "div":
                self.skip -= 1
            return
        if tag in ("b", "strong"):
            self.out.append("**")
        elif tag in ("i", "em"):
            self.out.append("*")
        elif tag == "a":
            href = self.href.pop() if self.href else None
            self.out.append(f"]({href})" if href and href.startswith("http") else "]")
        elif tag in ("p", "ul", "ol"):
            self.out.append("\n\n")

    def handle_data(self, data):
        if not self.skip:
            self.out.append(esc_md(re.sub(r"\s+", " ", data)))

    def result(self) -> str:
        s = "".join(self.out)
        s = re.sub(r"\*\*\s*\*\*", "", s)
        s = re.sub(r"[ \t]+\n", "\n", s)
        s = re.sub(r"\n[ \t]+", "\n", s)
        s = re.sub(r"\n{3,}", "\n\n", s)
        return s.strip()


def to_md(fragment: str) -> str:
    p = InlineMd()
    p.feed(fragment)
    p.close()
    return p.result()


def plain(fragment: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def balanced_div(src: str, start: int) -> str:
    """Trả về khối <div ...>...</div> bắt đầu tại vị trí start (đếm div lồng nhau)."""
    depth = 0
    for m in re.finditer(r"<(/?)div\b[^>]*>", src[start:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return src[start : start + m.end()]
    return src[start:]


def parse_card(card: str) -> dict | None:
    attr = lambda name: html.unescape(m.group(1)) if (m := re.search(rf'{name}="([^"]*)"', card)) else ""
    h3 = re.search(r"<h3>(.*?)</h3>", card, re.S)
    if not h3:
        return None
    link = re.search(r'<a[^>]*href="([^"]+)"', h3.group(1))
    title = plain(h3.group(1)) or attr("data-title")
    vi_start = card.find('class="col vi"')
    if vi_start < 0:
        return None
    vi_div = balanced_div(card, card.rfind("<div", 0, vi_start))
    body = to_md(vi_div)
    stats = []
    for sc in re.finditer(r'<div class="statcell[^"]*"><div class="n">(.*?)</div><div class="l">(.*?)</div>', card, re.S):
        stats.append((esc_md(plain(sc.group(1))), esc_md(plain(sc.group(2)))))
    return {
        "title": esc_md(title),
        "url": html.unescape(link.group(1)) if link else "",
        "journal": esc_md(attr("data-journal")),
        "author": esc_md(attr("data-author")),
        "depth": DEPTH_VI.get(attr("data-depth"), attr("data-depth")),
        "body": body,
        "stats": stats,
    }


def parse_digest(src: str) -> list[tuple[str, list[dict]]]:
    digest = src.split('id="report"')[0]
    sections = []
    for m in re.finditer(r'<section class="topic" id="([a-z]+)"(.*?)</section>', digest, re.S):
        sid, inner = m.group(1), m.group(2)
        if sid in SKIP_SECTIONS:
            continue
        name = SECTIONS.get(sid)
        if not name:
            vh = re.search(r'<p class="vi-head">(.*?)</p>', inner, re.S)
            name = plain(vh.group(1)).split("·")[0].strip() if vh else sid
        cards = []
        for cm in re.finditer(r'<div class="card"', inner):
            c = parse_card(balanced_div(inner, cm.start()))
            if c and c["url"]:  # quy tắc cứng: mỗi tin phải có link nguồn
                cards.append(c)
        sections.append((sid, name, cards))
    order = list(SECTIONS)
    sections.sort(key=lambda s: order.index(s[0]) if s[0] in order else len(order))
    return [(name, cards) for _, name, cards in sections]


def render(y: str, mo: str, d: str, sections) -> str:
    n = sum(len(c) for _, c in sections)
    names = [name for name, cards in sections if cards]
    desc = f"{n} tin: " + ", ".join(x.lower() if i else x for i, x in enumerate(names)) + "."
    lines = [
        "---",
        f"title: Điểm tin {d}/{mo}/{y}",
        f'description: "{desc}"',
        "tags: [diem-tin]",
        f"date: {y}-{mo}-{d}",
        "---",
        "",
        "> [!info] Điểm tin do AI tổng hợp tự động. Vui lòng kiểm tra nguồn gốc trước khi sử dụng.",
        "",
    ]
    for name, cards in sections:
        lines += [f"## {name}", ""]
        if not cards:
            lines += ["Không có tin đáng chú ý.", ""]
            continue
        for c in cards:
            lines += [f"### [{c['title']}]({c['url']})", ""]
            meta = " · ".join(x for x in (c["journal"], c["author"], c["depth"]) if x)
            if meta:
                lines += [f"*{meta}*", ""]
            lines += [c["body"], ""]
            for num, label in c["stats"]:
                lines.append(f"- **{num}**: {label}")
            if c["stats"]:
                lines.append("")
    return "\n".join(lines).rstrip() + "\n"


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
        sections = parse_digest(f.read_text(encoding="utf-8"))
        if not any(cards for _, cards in sections):
            print(f"Bỏ qua {f.name}: không đọc được tin nào", file=sys.stderr)
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(render(y, mo, d, sections), encoding="utf-8", newline="\n")
        done += 1
        print(out.relative_to(REPO).as_posix())
    print(f"Đã ghi {done} tệp.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
