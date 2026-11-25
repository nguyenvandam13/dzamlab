/* Tìm kiếm thuật ngữ toàn giáo trình, chú giải viết tắt trong bài, mở hộp thuật ngữ theo liên kết. */
(function(){
"use strict";
var G = window.FB_GLOSS || [], CDS = window.FB_CD || [], MKS = window.FB_MK || [];
function fold(s){ return (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase(); }
window.FB_fold = fold;
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
function cur(){ return window.FB_PAGE || "index.html"; }
function curN(){ var m = cur().match(/^ch(\d\d)[a-z]?\.html$/); return m ? +m[1] : 0; }
function href(e){ return e.c ? "ch" + e.c + ".html#g-" + e.id : "ch22.html#gi-" + e.id; }
function cdHref(t){ return "ch22.html#cd-" + (t.split(" ")[0].replace(/[^A-Za-z0-9-]/g, "") || "CD"); }
function whereTxt(e){
  if(!e.c) return "Chỉ mục thuật ngữ, chương 22";
  var t = "Gặp lần đầu: chương " + e.c.toUpperCase() + (e.sn ? " · mục " + e.sn : "") + (e.st ? " " + e.st : "");
  if(e.u && e.u.length > 1) t += " · dùng ở " + e.u.length + " chương";
  return t;
}
G.forEach(function(e){ e._t = fold(e.t); e._k = e.k.map(fold); e._f = fold(e.f); e._d = fold(e.d); });
CDS.forEach(function(c){ c._t = fold(c.t); c._x = fold(c.n + " " + c.m + " " + c.cl); });
MKS.forEach(function(c){ c._t = fold(c.t); c._x = fold(c.alt + " " + c.fn + " " + c.n + " " + c.st + " " + c.m); });

// ---------- tìm kiếm ----------
var panel, back, pin, body, sel = -1, ftLoading = false;
function buildPanel(){
  back = document.createElement("div"); back.id = "gsBack"; document.body.appendChild(back);
  panel = document.createElement("div"); panel.id = "gsPanel"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Tìm thuật ngữ");
  panel.innerHTML = '<div class="gs-head"><input type="search" id="gsInput" placeholder="Gõ thuật ngữ, viết tắt, CD marker, cụm từ… (có dấu hoặc không dấu)" aria-label="Tìm trong giáo trình" autocomplete="off"><button type="button" id="gsClose">Đóng (Esc)</button></div><div class="gs-body" id="gsBody"></div>';
  document.body.appendChild(panel);
  pin = panel.querySelector("#gsInput"); body = panel.querySelector("#gsBody");
  back.addEventListener("click", closeP); panel.querySelector("#gsClose").addEventListener("click", closeP);
  pin.addEventListener("input", function(){ run(pin.value); });
  pin.addEventListener("keydown", function(ev){
    var rs = body.querySelectorAll("a.gs-r");
    if(ev.key === "ArrowDown"){ ev.preventDefault(); sel = Math.min(rs.length - 1, sel + 1); mark(rs); }
    else if(ev.key === "ArrowUp"){ ev.preventDefault(); sel = Math.max(0, sel - 1); mark(rs); }
    else if(ev.key === "Enter"){ var a = rs[sel >= 0 ? sel : 0]; if(a){ ev.preventDefault(); go(a.getAttribute("href")); } }
    else if(ev.key === "Escape"){ closeP(); }
  });
  body.addEventListener("click", function(ev){ var a = ev.target.closest("a.gs-r"); if(a){ ev.preventDefault(); go(a.getAttribute("href")); } });
}
function mark(rs){ Array.prototype.forEach.call(rs, function(a, i){ a.classList.toggle("sel", i === sel); if(i === sel) a.scrollIntoView({block:"nearest"}); }); }
function go(h){
  closeP();
  var p = h.split("#")[0];
  if(p === cur() || p === ""){ location.hash = "#" + h.split("#")[1]; showHash(); }
  else location.href = window.FB_URL ? window.FB_URL(h) : h;
}
function openP(q){
  if(!panel) buildPanel();
  panel.classList.add("open"); back.classList.add("open");
  pin.value = q || pin.value || ""; pin.focus(); pin.select(); run(pin.value);
}
function closeP(){ if(panel){ panel.classList.remove("open"); back.classList.remove("open"); if(pin) pin.blur(); } }
function hl(text, fq){
  if(!fq) return esc(text);
  var ft = fold(text), i = ft.indexOf(fq);
  if(i < 0 || ft.length !== text.length) return esc(text);
  return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + fq.length)) + "</mark>" + esc(text.slice(i + fq.length));
}
function scoreE(e, q){
  var s = 0;
  if(e._t === q || e._k.indexOf(q) >= 0) s = 100;
  else if(e._t.indexOf(q) === 0 || e._k.some(function(k){ return k.indexOf(q) === 0; })) s = 80;
  else if(e._t.indexOf(q) >= 0 || e._k.some(function(k){ return k.indexOf(q) >= 0; })) s = 60;
  else if(e._f.indexOf(q) >= 0) s = 40;
  else if(e._d.indexOf(q) >= 0) s = 20;
  return s;
}
function run(raw){
  sel = -1;
  var q = fold(raw.trim());
  if(q.length < 1){ body.innerHTML = '<div class="gs-empty">Tra được: thuật ngữ và viết tắt (ví dụ “spillover”, “LLOQ”, “bu mau”), CD marker (“CD34”), và mọi cụm từ trong nội dung các chương. Mũi tên lên/xuống để chọn, Enter để mở.</div>'; return; }
  var html = "", cdFirst = /^c?cd\d/.test(q), cdHtml = "";
  var gl = G.map(function(e){ return [scoreE(e, q), e]; }).filter(function(x){ return x[0] > 0; }).sort(function(a, b){ return b[0] - a[0] || a[1].t.length - b[1].t.length; }).slice(0, 25);
  if(gl.length){
    html += '<div class="gs-sec">Thuật ngữ và viết tắt (' + gl.length + ')</div>';
    gl.forEach(function(x){ var e = x[1];
      html += '<a class="gs-r" href="' + href(e) + '"><div><span class="t">' + hl(e.t, q) + '</span>' + (e.f ? '<span class="f">' + hl(e.f, q) + '</span>' : '') + '</div><div class="d">' + hl(e.d, q) + '</div><div class="w">' + esc(whereTxt(e)) + '</div></a>';
    });
  }
  var cd = CDS.map(function(c){ var s = c._t === q ? 100 : c._t.indexOf(q) === 0 ? 70 : c._x.indexOf(q) >= 0 ? 20 : 0; return [s, c]; }).filter(function(x){ return x[0] > 0; }).sort(function(a, b){ return b[0] - a[0] || a[1].t.length - b[1].t.length; }).slice(0, 10);
  if(cd.length){
    cdHtml += '<div class="gs-sec">CD marker (chương 22)</div>';
    cd.forEach(function(x){ var c = x[1];
      cdHtml += '<a class="gs-r" href="' + cdHref(c.t) + '"><div><span class="t">' + hl(c.t, q) + '</span><span class="f">' + esc(c.cl && c.cl !== "—" ? "ClearLLab: " + c.cl : "") + '</span></div><div class="d">Bình thường: ' + hl(c.n, q) + '. Ý nghĩa: ' + hl(c.m, q) + '</div></a>';
    });
  }
  var mk = MKS.map(function(c){ var s = c._t === q ? 100 : c._t.indexOf(q) === 0 ? 80 : c._t.indexOf(q) >= 0 ? 60 : c._x.indexOf(q) >= 0 ? 20 : 0; return [s, c]; }).filter(function(x){ return x[0] > 0; }).sort(function(a, b){ return b[0] - a[0] || a[1].t.length - b[1].t.length; }).slice(0, 8);
  if(mk.length){
    cdHtml += '<div class="gs-sec">Tra cứu marker: chức năng, tế bào, giai đoạn (chương 08D)</div>';
    mk.forEach(function(x){ var c = x[1];
      cdHtml += '<a class="gs-r" href="ch08d.html#' + c.id + '"><div><span class="t">' + hl(c.t, q) + '</span><span class="f">' + hl(c.alt, q) + '</span></div><div class="d">' + hl(c.fn, q) + '. Có ở: ' + hl(c.n, q) + '</div><div class="w">Giai đoạn: ' + esc(c.st) + '</div></a>';
    });
  }
  html = cdFirst ? cdHtml + html : html + cdHtml;
  html += '<div id="gsFt"></div>';
  body.innerHTML = html;
  if(q.length >= 2) fulltext(q);
}
function fulltext(q){
  if(!window.FB_FT){
    var box = document.getElementById("gsFt"); if(box) box.innerHTML = '<div class="gs-sec">Trong nội dung</div><div class="gs-empty">Đang tải chỉ mục nội dung…</div>';
    if(!ftLoading){ ftLoading = true; var s = document.createElement("script"); s.src = "/kien-thuc/flow-cytometry/giao-trinh/assets/fulltext.js"; s.onload = function(){ prepFT(); if(pin) run(pin.value); }; document.head.appendChild(s); }
    return;
  }
  var res = [];
  window.FB_FT.forEach(function(r){
    var i = r._x.indexOf(q); if(i < 0) return;
    var n = 0, j = i; while(j >= 0 && n < 50){ n++; j = r._x.indexOf(q, j + q.length); }
    res.push([n, r, i]);
  });
  res.sort(function(a, b){ return b[0] - a[0]; });
  var box = document.getElementById("gsFt"); if(!box) return;
  if(!res.length){ box.innerHTML = '<div class="gs-sec">Trong nội dung</div><div class="gs-empty">Không thấy trong nội dung các chương.</div>'; return; }
  var h = '<div class="gs-sec">Trong nội dung (' + res.length + ' mục)</div>';
  res.slice(0, 30).forEach(function(x){
    var r = x[1], i = x[2], a = Math.max(0, i - 70), b = Math.min(r.x.length, i + q.length + 90);
    var snip = (a > 0 ? "…" : "") + esc(r.x.slice(a, i)) + "<mark>" + esc(r.x.slice(i, i + q.length)) + "</mark>" + esc(r.x.slice(i + q.length, b)) + (b < r.x.length ? "…" : "");
    h += '<a class="gs-r" href="ch' + r.c + '.html' + (r.s ? "#" + r.s : "") + '"><div><span class="t">Chương ' + r.c.toUpperCase() + (r.sn ? " · " + esc(r.sn) : "") + '</span><span class="f">' + esc(r.st) + ' · ' + x[0] + (x[0] >= 50 ? "+" : "") + ' lần</span></div><div class="d">' + snip + '</div></a>';
  });
  box.innerHTML = h;
}
function prepFT(){ (window.FB_FT || []).forEach(function(r){ r._x = fold(r.x); if(r._x.length !== r.x.length){ r.x = r._x; } }); }

function initSearch(){
  var nav = document.getElementById("ftb-search"); if(!nav) return;
  var w = document.createElement("div"); w.className = "gsearch";
  w.innerHTML = '<input type="search" placeholder="Tìm thuật ngữ, viết tắt…" aria-label="Tìm thuật ngữ trong giáo trình"><div class="hint">Phím tắt: / · gõ không dấu cũng được · Ctrl+K là ô tìm kiếm của cả trang</div>';
  var sub = nav.querySelector(".sub"); if(sub && sub.nextSibling) nav.insertBefore(w, sub.nextSibling); else nav.insertBefore(w, nav.firstChild);
  var inp = w.querySelector("input");
  inp.addEventListener("focus", function(){ openP(inp.value); inp.blur(); });
  inp.addEventListener("input", function(){ openP(inp.value); });
  document.addEventListener("keydown", function(ev){
    var t = ev.target, typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    if((ev.key === "/" && !typing)){ ev.preventDefault(); openP(""); }
    else if(ev.key === "Escape") { closeP(); hideTip(); }
  });
}

// ---------- mở hộp thuật ngữ theo liên kết #g-… ----------
function showHash(){
  var h = decodeURIComponent(location.hash || ""); if(!/^#(g|gi)-/.test(h)) return;
  var row = document.getElementById(h.slice(1)); if(!row) return;
  var d = row.closest("details"); if(d) d.open = true;
  var flt = row.closest(".gb, .tbl-wrap");
  Array.prototype.forEach.call(document.querySelectorAll("tr.hl"), function(r){ r.classList.remove("hl"); });
  row.style.display = ""; row.classList.add("hl");
  setTimeout(function(){ row.scrollIntoView({block:"center"}); }, 30);
}
window.addEventListener("hashchange", showHash);

// ---------- chú giải viết tắt trong bài ----------
var tip, tipTimer;
function hideTip(){ if(tip) tip.style.display = "none"; }
function showTip(el){
  var gid = el.getAttribute("data-g"), e = byId[gid];
  if(!e && gid.indexOf("cd:") === 0){ var c = CDS[+gid.slice(3)]; if(!c) return;
    e = { t: c.t, f: "CD marker" + (c.cl && c.cl !== "—" ? " · ClearLLab: " + c.cl : ""), d: "Bình thường: " + c.n + ". Ý nghĩa: " + c.m, cdlink: cdHref(c.t) }; }
  if(!e) return;
  if(!tip){ tip = document.createElement("div"); tip.id = "gtip"; document.body.appendChild(tip);
    tip.addEventListener("mouseenter", function(){ clearTimeout(tipTimer); }); tip.addEventListener("mouseleave", function(){ tipTimer = setTimeout(hideTip, 250); }); }
  tip.innerHTML = '<div class="t">' + esc(e.t) + '</div>' + (e.f ? '<div class="f">' + esc(e.f) + '</div>' : '') + '<div>' + esc(e.d) + '</div><div style="margin-top:6px"><a href="' + (e.cdlink || href(e)) + '">' + esc(e.cdlink ? "Xem từ điển marker, chương 22" : e.c ? "Xem ở bảng thuật ngữ chương " + e.c.toUpperCase() : "Xem chỉ mục chương 22") + ' →</a></div>';
  tip.style.display = "block";
  var r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
  var x = Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - tw - 10);
  var y = window.scrollY + r.bottom + 6;
  if(r.bottom + th + 12 > window.innerHeight) y = window.scrollY + r.top - th - 6;
  tip.style.left = Math.max(window.scrollX + 6, x) + "px"; tip.style.top = y + "px";
}
var byId = {};
G.forEach(function(e){ byId[e.id] = e; });
function initTips(){
  var n = curN(); if(!n || n === 22 || n === 23) return;
  var main = document.querySelector("article"); if(!main) return;
  var map = {}, keys = [];
  G.forEach(function(e){
    if(e.fr && +e.fr.slice(2) > n) return;
    (e.a || []).forEach(function(a){ if(!map[a]){ map[a] = e.id; keys.push(a); } });
  });
  var cdmap = {};
  CDS.forEach(function(c, i){ var m = c.t.match(/^(c?CD\d+[a-z]?)/); if(m && !cdmap[m[1]]){ cdmap[m[1]] = i; if(!map[m[1]]){ map[m[1]] = "cd:" + i; keys.push(m[1]); } } });
  if(!keys.length) return;
  keys.sort(function(a, b){ return b.length - a.length; });
  var re = new RegExp("(^|[^\\w\\-À-ỹ])(" + keys.map(function(k){ return k.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }).join("|") + ")(?![\\wÀ-ỹ])", "g");
  var SKIP = /^(H1|H2|H3|H4|A|CODE|SCRIPT|STYLE|BUTTON|LABEL|SUMMARY|THEAD|CANVAS|FIGURE|SVG|INPUT|SELECT|TEXTAREA|OUTPUT|FOOTER|HEADER|KBD)$/;
  var seen = {};
  var walker = document.createTreeWalker(main, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, { acceptNode: function(nd){
    if(nd.nodeType === 1){
      if(SKIP.test(nd.tagName) || nd.classList.contains("glossbox") || nd.classList.contains("formula") || nd.classList.contains("pager") || nd.classList.contains("fig") || nd.classList.contains("kh-t")) return nd.tagName === "H2" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_SKIP;
    }
    return NodeFilter.FILTER_ACCEPT;
  }});
  var texts = [], nd;
  while((nd = walker.nextNode())){
    if(nd.nodeType === 1){ if(nd.tagName === "H2") texts.push("H2"); continue; }
    if(nd.nodeValue && /[A-Z]/.test(nd.nodeValue)) texts.push(nd);
  }
  texts.forEach(function(t){
    if(t === "H2"){ seen = {}; return; }
    var s = t.nodeValue, m, last = 0, frag = null; re.lastIndex = 0;
    while((m = re.exec(s))){
      var k = m[2], id = map[k];
      if(seen[id]) continue;
      seen[id] = 1;
      if(!frag) frag = document.createDocumentFragment();
      var st = m.index + m[1].length;
      frag.appendChild(document.createTextNode(s.slice(last, st)));
      var sp = document.createElement("span"); sp.className = "gterm"; sp.setAttribute("data-g", id); sp.setAttribute("tabindex", "0"); sp.textContent = k;
      frag.appendChild(sp); last = st + k.length;
    }
    if(frag){ frag.appendChild(document.createTextNode(s.slice(last))); t.parentNode.replaceChild(frag, t); }
  });
  main.addEventListener("mouseover", function(ev){ var el = ev.target.closest && ev.target.closest("span.gterm"); if(el){ clearTimeout(tipTimer); showTip(el); } });
  main.addEventListener("mouseout", function(ev){ var el = ev.target.closest && ev.target.closest("span.gterm"); if(el){ tipTimer = setTimeout(hideTip, 300); } });
  main.addEventListener("click", function(ev){ var el = ev.target.closest && ev.target.closest("span.gterm"); if(el){ clearTimeout(tipTimer); showTip(el); } });
  main.addEventListener("focusin", function(ev){ var el = ev.target.closest && ev.target.closest("span.gterm"); if(el) showTip(el); });
  document.addEventListener("click", function(ev){ if(tip && !ev.target.closest("#gtip") && !ev.target.closest("span.gterm")) hideTip(); });
}

document.addEventListener("DOMContentLoaded", function(){
  try{ initSearch(); }catch(e){ console.error(e); }
  try{ initTips(); }catch(e){ console.error(e); }
  showHash();
});
})();
