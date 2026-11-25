"""Chuyển giáo trình Flow (HTML) thành gói Markdown cho Quartz (dzamlab.org).

Cách dùng: python3 tools/giao-trinh-flow/convert.py <thư mục HTML nguồn> <thư mục repo dzamlab>
Có thể chạy lại khi giáo trình gốc thay đổi: các file sinh ra bị ghi đè.
"""
import json, os, re, sys, html
from bs4 import BeautifulSoup, NavigableString, Comment
from markdownify import MarkdownConverter

SRC, REPO = sys.argv[1], sys.argv[2]
PKG_DIR = "kien-thuc/flow-cytometry/giao-trinh"
BASE = "/" + PKG_DIR
OUT = os.path.join(REPO, "content", PKG_DIR)
TODAY = "2026-11-25"

# Phần (thư mục) theo thứ tự đọc. Số đầu tên thư mục quyết định thứ tự trong cây mục lục.
PARTS = [
    ("1-nen-tang-thiet-bi", "Phần I · Nền tảng và thiết bị",
     "Vật lý của tín hiệu, máy Navios EX, QC, bù màu, Kaluza C, thiết kế panel và tiền phân tích.",
     ["01", "02", "03", "04", "05", "06", "07"]),
    ("2-nen-tang-sinh-hoc", "Nền tảng sinh học (đọc trước chương 08)",
     "Tế bào máu, miễn dịch, kháng nguyên CD và tra cứu marker: phần nền cho người chưa học huyết học.",
     ["08a", "08b", "08c", "08d"]),
    ("3-benh-hoc-kieu-hinh", "Phần II · Bệnh học và kiểu hình",
     "Tạo máu bình thường, phân loại WHO-HAEM5 và ICC 2022, kiểu hình từng nhóm bệnh.",
     ["08", "09", "10", "11", "12", "13", "14", "15"]),
    ("4-ung-dung-dac-biet", "Phần III · Ứng dụng đặc biệt",
     "TBNK, CD4, CD34, PNH độ nhạy cao và MRD.",
     ["16", "17", "18"]),
    ("5-thuc-hanh", "Phần IV · Thực hành",
     "Ngân hàng case, viết báo cáo, atlas bẫy, tra cứu thuật ngữ, câu hỏi và tài liệu tham khảo.",
     ["19", "20", "21", "22", "23"]),
    ("6-phu-luc", "Phụ lục",
     "SOP, triển khai và đào tạo.",
     ["24"]),
]
PART_OF = {c: p for p, _, _, cs in PARTS for c in cs}
ORDER = [c for _, _, _, cs in PARTS for c in cs]


def url_of(logical):
    """'ch05.html#x' | 'index.html' -> URL thật trên site."""
    m = re.match(r"^(ch(\d\d[a-d]?)\.html|index\.html)?(#.*)?$", logical)
    if not m:
        return None
    page, code, hash_ = m.group(1), m.group(2), m.group(3) or ""
    if not page:
        return hash_
    if code:
        return f"{BASE}/{PART_OF[code]}/chuong-{code}{hash_}"
    return f"{BASE}/{hash_}" if hash_ else f"{BASE}/"


class MD(MarkdownConverter):
    def escape(self, text, parent_tags=None):
        text = super().escape(text, parent_tags)
        # Ký tự có nghĩa riêng trong Quartz (LaTeX, highlight, wikilink, tag Obsidian)
        text = text.replace("$", r"\$").replace("==", r"\=\=").replace("[[", r"\[\[")
        text = re.sub(r"(^|\s)#(?=\S)", r"\1\\#", text)
        return text


def md(node):
    return MD(heading_style="ATX", bullets="-", escape_misc=False).convert(str(node)).strip()


def fix_links(soup):
    for a in soup.find_all("a", href=True):
        u = url_of(a["href"])
        if u is not None and u != a["href"] and not a["href"].startswith("#"):
            a["href"] = u


def raw(node):
    """Khối HTML giữ nguyên; bỏ dòng trống để Markdown không cắt khối."""
    s = str(node)
    s = re.sub(r"\n[ \t]*(?=\n)", "", s)
    s = re.sub(r"\n{2,}", "\n", s)
    return s


def heading(tag):
    level = int(tag.name[1])
    # neo id gốc (#tongquan…) đặt thành khối riêng trước tiêu đề để liên kết cũ vẫn chạy
    anchor = f'<div id="{tag["id"]}" class="ftb-anchor"></div>\n\n' if tag.get("id") else ""
    sn = tag.find("span", class_="sn")
    num = sn.get_text(strip=True) if sn else ""
    if sn:
        sn.extract()
    text = tag.get_text(" ", strip=True)
    text = MD().escape(text)
    return anchor + "#" * level + " " + (num + " " if num else "") + text


def yq(s):
    return json.dumps(s, ensure_ascii=False)


# Đoạn mở đầu viết lại theo HUONG-DAN-VIET (đi từ vấn đề thực tế); các chương khác giữ nguyên.
LEAD = {
    "02": "Nhiều sai lệch trên dữ liệu flow không bắt nguồn từ hỏng hóc phần cứng mà từ cài đặt và thao tác vận hành hằng ngày: protocol dựng sai, worklist thiếu hệ số hạt đếm, bỏ bước khởi động. Chương này mô tả cấu tạo, mục đích sử dụng, cấu trúc protocol/panel/worklist, các chế độ chạy mẫu, khởi động và tắt máy, và những cài đặt ảnh hưởng trực tiếp tới chất lượng dữ liệu. Nội dung biên soạn từ IFU Navios EX (PN B73085AF, 08/2021); thông số cụ thể luôn đối chiếu lại với IFU bản đang dùng tại phòng xét nghiệm.",
    "05": "Cùng một file LMD có thể cho hai kết quả khác nhau khi hai người dựng protocol phân tích khác nhau trên Kaluza C. Mục tiêu của chương: dựng được một protocol phân tích hoàn chỉnh cho panel 10 màu, hiểu từng loại biểu đồ và cổng, dùng Composite, Batch, QC Report, công thức và xuất LIS. Cuối chương có quy trình dựng protocol ClearLLab từ đầu. Nội dung biên soạn từ IFU Kaluza C (PN C10993AH, 04/2025) và addendum RUO (C29335AA).",
    "06": "Một panel có đủ marker vẫn có thể bỏ sót quần thể bất thường nếu kháng nguyên mật độ thấp được gắn với chất nhuộm mờ, hoặc nếu panel được đưa vào sử dụng khi chưa thẩm định. Phần đầu chương trình bày nguyên tắc chọn marker và chất nhuộm, so sánh ba triết lý panel (Bethesda 2006, EuroFlow, ClearLLab) và cách thiết kế ống bổ sung trên Navios EX. Phần sau trình bày thẩm định theo bộ hướng dẫn ICSH/ICCS 2013 (5 phần), áp dụng cho panel IVD (xác nhận, verification) và xét nghiệm phòng tự phát triển (thẩm định, validation).",
    "16": "Đếm phân nhóm lympho, CD4 và tế bào gốc CD34 là các xét nghiệm định lượng thường quy nhất của phòng flow, và sai số ở đây ảnh hưởng trực tiếp tới quyết định lâm sàng như theo dõi điều trị HIV hay chọn thời điểm thu gom tế bào gốc. Phần đầu chương dựa trên addendum Lymphocyte Subset Application (B86351AA) cho phần mềm tetra trên Navios EX. Phần sau trình bày đếm CD34 theo hướng dẫn ISHAGE, áp dụng với bộ Stem-Kit của Beckman Coulter.",
}

# Câu nói về giao diện của bản HTML gốc, đổi cho đúng với site.
TEXT_FIX = [
    (r"ở đầu mục lục \(phím tắt <kbd>/</kbd> hoặc <kbd>Ctrl</kbd>\+<kbd>K</kbd>\)",
     "ở đầu mỗi chương (phím tắt <kbd>/</kbd>; còn <kbd>Ctrl</kbd>+<kbd>K</kbd> là ô tìm kiếm chung của cả trang)"),
    (r"ở đầu mục lục", "ở đầu chương"),
    (r"Tài liệu của Beckman Coulter \(thư mục Navios\)", "Tài liệu của Beckman Coulter"),
    (r"Năm tài liệu Beckman Coulter trong thư mục Navios\.", "Năm tài liệu Beckman Coulter được dùng làm nguồn."),
    (r"từ 5 tài liệu trong thư mục Navios của anh:", "từ 5 tài liệu của Beckman Coulter:"),
    (r"Mục lục bên trái luôn hiện, kèm danh sách mục của chương đang đọc\. Có thể in từng chương ra A4 bằng trình duyệt \(bản lưu trong thư mục Navios\), giao diện in đã được tối ưu\.",
     "Cây mục lục bên trái liệt kê các phần và chương theo thứ tự đọc; khung “Mục lục” bên phải liệt kê các mục của chương đang đọc; cuối mỗi chương có liên kết sang chương trước và chương sau. Có thể in từng chương ra A4 bằng trình duyệt."),
]


def convert(fname, code):
    src = open(os.path.join(SRC, fname), encoding="utf8").read()
    for pat, rep in TEXT_FIX:
        src = re.sub(pat, rep, src)
    for k in ("thư mục Navios", "của anh"):
        assert k not in src, (fname, k)
    soup = BeautifulSoup(src, "lxml")
    for c in soup.find_all(string=lambda t: isinstance(t, Comment)):
        c.extract()
    main = soup.find("main")
    fix_links(main)
    header = main.find("header", class_="chap")
    h1 = header.find("h1").get_text(" ", strip=True)
    eyebrow = header.find(class_="eyebrow")
    lead = header.find(class_="lead")
    if code in LEAD:
        lead.string = LEAD[code]
    desc = lead.get_text(" ", strip=True) if lead else h1
    sents = [x for x in re.split(r"(?<=[.!?])\s", desc) if x]
    first = next((x for x in sents if not x.startswith("Biên soạn")), sents[0])
    desc = first if len(first) <= 220 else first[:217].rsplit(" ", 1)[0] + "…"

    page = fname
    parts = ['<span id="top"></span>']
    parts.append(f'<link rel="stylesheet" href="{BASE}/assets/style.css">')
    top = '<div class="ftb-top">'
    if eyebrow:
        top += str(eyebrow)
    top += '<div id="ftb-search"></div></div>'
    parts.append(top)
    if lead:
        parts.append(raw(lead))

    for ch in list(main.children):
        if isinstance(ch, NavigableString):
            if ch.strip():
                parts.append(MD().escape(ch.strip()))
            continue
        if ch is header:
            continue
        if ch.name in ("h2", "h3", "h4"):
            parts.append(heading(ch))
        elif ch.name == "div" and ch.get("class") == ["prose"]:
            parts.append(md(ch.decode_contents()))
        else:
            parts.append(raw(ch))

    scripts = [f'<script src="{BASE}/assets/goi.js" data-page="{page}"></script>']
    for js in ("glossary.js", "app.js", "figs.js", "gloss-ui.js"):
        scripts.append(f'<script src="{BASE}/assets/{js}"></script>')
    parts.append("\n".join(scripts))
    parts.append("*Biên soạn cùng AI · Dam duyệt*")

    if code:
        title = f"{code.upper()} · {h1}"
    else:
        title = h1
    fm = ["---", f"title: {yq(title)}", f"description: {yq(desc)}",
          "tags: [flow-cytometry, giao-trinh-navios]",
          "trang-thai: 🌳 hoàn thiện", f"cap-nhat: {TODAY}"]
    if code:
        fm.append(f"chuong: {yq(code.upper())}")
    fm.append("---")
    body = "\n\n".join(p for p in parts if p)
    if code:
        path = os.path.join(OUT, PART_OF[code], f"chuong-{code}.md")
    else:
        path = os.path.join(OUT, "index.md")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf8") as f:
        f.write("\n".join(fm) + "\n\n" + body + "\n")
    return path, title


def part_indexes(titles):
    for slug, title, desc, codes in PARTS:
        lines = ["---", f"title: {yq(title)}", f"description: {yq(desc)}",
                 "tags: [flow-cytometry, giao-trinh-navios]", "---", "", desc, ""]
        for c in codes:
            lines.append(f"- [{titles[c]}]({BASE}/{slug}/chuong-{c})")
        lines += ["", f"[← Về trang giáo trình]({BASE}/)", ""]
        with open(os.path.join(OUT, slug, "index.md"), "w", encoding="utf8") as f:
            f.write("\n".join(lines))


if __name__ == "__main__":
    titles = {}
    convert("index.html", None)
    for c in ORDER:
        _, t = convert(f"ch{c}.html", c)
        titles[c] = t
    part_indexes(titles)
    # goi.js: cầu nối giữa tên trang gốc (chXX.html) và URL trên site
    m = {"index.html": f"{BASE}/"}
    for c in ORDER:
        m[f"ch{c}.html"] = f"{BASE}/{PART_OF[c]}/chuong-{c}"
    tpl = open(os.path.join(os.path.dirname(__file__), "goi.template.js"), encoding="utf8").read()
    os.makedirs(os.path.join(OUT, "assets"), exist_ok=True)
    with open(os.path.join(OUT, "assets", "goi.js"), "w", encoding="utf8") as f:
        f.write(tpl.replace("/*MAP*/{}", json.dumps(m, ensure_ascii=False)))
    print("ok", len(titles) + 1, "trang")
