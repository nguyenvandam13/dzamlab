"""Chép và chỉnh assets của giáo trình Flow cho Quartz.

- JS gốc giữ nguyên logic; chỉ vá chỗ phụ thuộc tên file (chXX.html), thẻ <main>,
  mục lục #toc, phím tắt Ctrl+K (trùng ô tìm kiếm của site) và thuộc tính theme.
- CSS được giới hạn phạm vi vào các trang của gói (body[data-slug^=...]) và nối
  biến màu với giao diện sáng/tối của Quartz.
Cách dùng: python3 assets.py <thư mục HTML nguồn> <repo>
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))

SRC, REPO = sys.argv[1], sys.argv[2]
A_IN = os.path.join(SRC, "assets")
PKG = "kien-thuc/flow-cytometry/giao-trinh"
A_OUT = os.path.join(REPO, "content", PKG, "assets")
SCOPE = f'body[data-slug^="{PKG}/"]'
os.makedirs(A_OUT, exist_ok=True)


def rd(n):
    return open(os.path.join(A_IN, n), encoding="utf8").read()


def wr(n, s):
    with open(os.path.join(A_OUT, n), "w", encoding="utf8") as f:
        f.write(s)


def sub1(s, old, new):
    assert s.count(old) == 1, (old, s.count(old))
    return s.replace(old, new)


CUR = 'function cur(){ return window.FB_PAGE || "index.html"; }'

# ---------- app.js ----------
s = rd("app.js")
s = sub1(s, 'function cur(){ var p = location.pathname.split("/").pop() || "index.html"; return p; }', CUR)
s = sub1(s, '  var nav = document.getElementById("toc"); if(!nav) return;\n  var c = cur();\n',
         '  var c = cur();\n  var nav = document.getElementById("toc"); if(nav){\n')
s = sub1(s, '  // pager\n', '  }\n  // pager\n')
s = sub1(s, 'var main = document.querySelector("main"); if(!main) return;\n  var i = -1;',
         'var main = document.querySelector("article"); if(!main) return;\n  var i = -1;')
s = sub1(s, 'var ft = main.querySelector("footer"); if(ft) main.insertBefore(pg, ft); else main.appendChild(pg);',
         'var ft = main.querySelector(".ftb-end") || main.querySelector("footer"); if(ft) ft.parentNode.insertBefore(pg, ft); else main.appendChild(pg);')
s = s.replace('attributeFilter:["data-theme"]', 'attributeFilter:["data-theme","saved-theme"]')
wr("app.js", s)

# ---------- figs.js ----------
s = rd("figs.js")
s = sub1(s, 'var chap = (location.pathname.split("/").pop() || "")', 'var chap = (window.FB_PAGE || "")')
s = s.replace('attributeFilter: ["data-theme"]', 'attributeFilter: ["data-theme", "saved-theme"]')
wr("figs.js", s)

# ---------- gloss-ui.js ----------
s = rd("gloss-ui.js")
s = sub1(s, 'function cur(){ return location.pathname.split("/").pop() || "index.html"; }', CUR)
s = sub1(s, '  else location.href = h;', '  else location.href = window.FB_URL ? window.FB_URL(h) : h;')
s = sub1(s, 'var nav = document.getElementById("toc"); if(!nav) return;\n  var w = document.createElement("div"); w.className = "gsearch";',
         'var nav = document.getElementById("ftb-search"); if(!nav) return;\n  var w = document.createElement("div"); w.className = "gsearch";')
s = sub1(s, ' || ((ev.ctrlKey || ev.metaKey) && (ev.key === "k" || ev.key === "K"))', '')
s = sub1(s, 'Phím tắt: / hoặc Ctrl+K · gõ không dấu cũng được', 'Phím tắt: / · gõ không dấu cũng được · Ctrl+K là ô tìm kiếm của cả trang')
s = sub1(s, '  var main = document.querySelector("main"); if(!main) return;\n  var map = {}',
         '  var main = document.querySelector("article"); if(!main) return;\n  var map = {}')
s = sub1(s, 's.src = "assets/fulltext.js"', 's.src = "/' + PKG + '/assets/fulltext.js"')
wr("gloss-ui.js", s)

# Chỉ mục tìm kiếm: đổi các câu nói về giao diện gốc giống convert.py
for n in ("glossary.js", "fulltext.js"):
    t = rd(n)
    t = t.replace("ở đầu mục lục (phím tắt / hoặc Ctrl + K )", "ở đầu mỗi chương (phím tắt / )")
    t = t.replace("ở đầu mục lục", "ở đầu chương")
    t = t.replace(" trong thư mục Navios của anh:", " của Beckman Coulter:")
    t = t.replace(" (bản lưu trong thư mục Navios)", "").replace(" (thư mục Navios)", "")
    t = t.replace(" trong thư mục Navios.", " được dùng làm nguồn.")
    t = t.replace("Mục lục bên trái luôn hiện, kèm danh sách mục của chương đang đọc.", "Cây mục lục bên trái liệt kê các phần và chương theo thứ tự đọc.")
    wr(n, t)

# ---------- style.css ----------
css = rd("style.css")
css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)


def blocks(t):
    """Tách CSS cấp ngoài cùng thành [(prelude, body)]."""
    out, i, n = [], 0, len(t)
    while i < n:
        j = t.find("{", i)
        if j < 0:
            break
        pre = t[i:j].strip()
        d, k = 1, j + 1
        while d:
            if t[k] == "{": d += 1
            elif t[k] == "}": d -= 1
            k += 1
        out.append((pre, t[j + 1:k - 1]))
        i = k
    return out


DROP = re.compile(r"^(\*|html|body|a|a:focus-visible|button:focus-visible|input:focus-visible|select:focus-visible|"
                  r"summary:focus-visible|\.layout.*|nav#toc.*|main|header\.chap|h[1-4]|h2 \.sn|\.prose p|main > p|"
                  r"\.menu-btn.*|nav#toc\.collapsed.*)$")


def scope_sel(sel):
    keep = []
    for part in sel.split(","):
        p = part.strip()
        if not p or DROP.match(p):
            continue
        p = re.sub(r"(^|[\s>+~])main(?=[\s>.:#\[]|$)", r"\1article", p)
        keep.append(f"{SCOPE} {p}")
    return ",".join(keep)


LIGHT = ("--bg:#faf8f8; --surface:#ffffff; --ink:#2b2b2b; --muted:#5f5f5f; --line:#e5e5e5;"
         "--accent:#0f5c6e; --accent-soft:#e1eef0;")
DARK = ("--bg:#161618; --surface:#1f1f22; --ink:#ebebec; --muted:#a5a5a8; --line:#393639;"
        "--accent:#7bb3c4; --accent-soft:#1f3238;")
FONTS = ('--f-display:"Be Vietnam Pro", system-ui, sans-serif; --f-body:"Be Vietnam Pro", system-ui, sans-serif;'
         '--f-mono:"IBM Plex Mono", Consolas, monospace;')


def process(bs, in_media=False):
    out = []
    for pre, body in bs:
        if pre.startswith("@media") or pre.startswith("@supports"):
            if "prefers-color-scheme" in pre:
                continue  # Quartz quyết định sáng/tối qua saved-theme
            inner = process(blocks(body), True)
            if inner.strip():
                out.append(f"{pre}{{{inner}}}")
        elif pre.startswith("@page") or pre.startswith("@font-face") or pre.startswith("@keyframes"):
            if not pre.startswith("@page"):
                out.append(f"{pre}{{{body}}}")
        elif pre == ":root":
            out.append(":root{" + body + LIGHT + FONTS + "}")
        elif pre == ':root[data-theme="dark"]':
            out.append(':root[saved-theme="dark"]{' + body + DARK + "}")
        else:
            sel = scope_sel(pre)
            if sel:
                out.append(f"{sel}{{{body}}}")
    return "\n".join(out)


extra = f"""
/* Bổ sung cho Quartz */
{SCOPE} .ftb-top{{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;margin:0 0 6px}}
{SCOPE} #ftb-search .gsearch{{min-width:260px}}
{SCOPE} #ftb-search .gsearch input{{width:100%;padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--surface);color:var(--ink);font:inherit;font-size:.9rem}}
{SCOPE} #ftb-search .gsearch .hint{{font-size:.72rem;color:var(--muted);margin-top:3px}}
{SCOPE} article > p.lead{{font-size:1.06rem;color:var(--muted)}}
"""
wr("style.css", "/* Sinh tự động từ assets/style.css của giáo trình gốc (tools/assets.py). */\n" + process(blocks(css)) + extra)
print("assets ok")
