(function(){
"use strict";
var CH = [
  {f:"index.html", n:"00", t:"Trang chủ và lộ trình", p:""},
  {f:"ch01.html", n:"01", t:"Nguyên lý flow cytometry", p:"Phần I · Nền tảng và thiết bị"},
  {f:"ch02.html", n:"02", t:"Navios EX: phần cứng, phần mềm, vận hành", p:""},
  {f:"ch03.html", n:"03", t:"QC, chuẩn hóa và bảo trì", p:""},
  {f:"ch04.html", n:"04", t:"Bù màu chuyên sâu", p:""},
  {f:"ch05.html", n:"05", t:"Kaluza C toàn tập", p:""},
  {f:"ch06.html", n:"06", t:"Thiết kế panel và thẩm định", p:""},
  {f:"ch07.html", n:"07", t:"Tiền phân tích và xử lý mẫu", p:""},
  {f:"ch08a.html", n:"08A", t:"Nền tảng 1: Tế bào máu và tạo máu", p:"Nền tảng sinh học · đọc trước 08"},
  {f:"ch08b.html", n:"08B", t:"Nền tảng 2: Miễn dịch, lympho và kháng thể", p:""},
  {f:"ch08c.html", n:"08C", t:"Nền tảng 3: Kháng nguyên, CD và cách flow nhìn thấy", p:""},
  {f:"ch08d.html", n:"08D", t:"Tra cứu marker: CD, HLA theo tế bào và giai đoạn", p:""},
  {f:"ch08.html", n:"08", t:"Tạo máu bình thường và đường trưởng thành", p:"Phần II · Bệnh học và kiểu hình"},
  {f:"ch09.html", n:"09", t:"Phân loại WHO-HAEM5 và ICC 2022", p:""},
  {f:"ch10.html", n:"10", t:"AML và leukemia cấp dòng không rõ", p:""},
  {f:"ch11.html", n:"11", t:"MDS, CMML và tân sinh tủy mạn", p:""},
  {f:"ch12.html", n:"12", t:"B-ALL, T-ALL và lymphoma nguyên bào", p:""},
  {f:"ch13.html", n:"13", t:"Tân sinh tế bào B trưởng thành", p:""},
  {f:"ch14.html", n:"14", t:"Tân sinh tương bào", p:""},
  {f:"ch15.html", n:"15", t:"Tân sinh T và NK trưởng thành", p:""},
  {f:"ch16.html", n:"16", t:"TBNK, CD4 và đếm CD34", p:"Phần III · Ứng dụng đặc biệt"},
  {f:"ch17.html", n:"17", t:"PNH độ nhạy cao", p:""},
  {f:"ch18.html", n:"18", t:"MRD: bệnh tồn dư đo được", p:""},
  {f:"ch19.html", n:"19", t:"Ngân hàng case lâm sàng", p:"Phần IV · Thực hành"},
  {f:"ch20.html", n:"20", t:"Viết báo cáo và làm việc với bác sĩ", p:""},
  {f:"ch21.html", n:"21", t:"Atlas bẫy và xử lý sự cố", p:""},
  {f:"ch22.html", n:"22", t:"Tra cứu CD marker và thuật ngữ", p:""},
  {f:"ch23.html", n:"23", t:"Ngân hàng câu hỏi và tài liệu tham khảo", p:""},
  {f:"ch24.html", n:"24", t:"Phụ lục: SOP, triển khai, đào tạo", p:"Phụ lục"}
];
window.FB_CHAPTERS = CH;
function cur(){ return window.FB_PAGE || "index.html"; }
function el(t, a, h){ var e = document.createElement(t); if(a) for(var k in a) e.setAttribute(k, a[k]); if(h !== undefined) e.innerHTML = h; return e; }

function buildNav(){
  var c = cur();
  var nav = document.getElementById("toc"); if(nav){
  nav.innerHTML = "";
  nav.appendChild(el("a", {"class":"brand", href:"index.html"}, "Flow cytometry lâm sàng trên Navios EX và Kaluza C"));
  nav.appendChild(el("div", {"class":"sub"}, "Giáo trình tự học chuyên sâu · 11/2026"));
  var btn = el("button", {"class":"menu-btn", type:"button", id:"menuBtn"}, "Hiện/ẩn mục lục");
  btn.addEventListener("click", function(){ nav.classList.toggle("collapsed"); });
  nav.appendChild(btn);
  if(window.matchMedia && window.matchMedia("(max-width: 920px)").matches) nav.classList.add("collapsed");
  var ol = null;
  CH.forEach(function(ch){
    if(ch.p || !ol){ if(ch.p) nav.appendChild(el("div", {"class":"part"}, ch.p)); ol = el("ol"); nav.appendChild(ol); }
    var li = el("li"); var a = el("a", {href: ch.f}, '<span class="n">' + ch.n + '</span><span>' + ch.t + '</span>');
    if(ch.f === c){ a.classList.add("cur"); a.setAttribute("aria-current", "page"); }
    li.appendChild(a);
    if(ch.f === c){
      var hs = document.querySelectorAll("main h2[id]");
      if(hs.length){ var ul = el("ul", {"class":"onpage"}); Array.prototype.forEach.call(hs, function(h){ var l = el("li"); l.appendChild(el("a", {href:"#" + h.id}, h.textContent.replace(/^\s*\d+[A-Z]?(\.\d+)*\s*/, ""))); ul.appendChild(l); }); li.appendChild(ul); }
    }
    ol.appendChild(li);
  });
  }
  // pager
  var main = document.querySelector("article"); if(!main) return;
  var i = -1; CH.forEach(function(ch, k){ if(ch.f === c) i = k; });
  if(i < 0) return;
  var pg = el("div", {"class":"pager"});
  if(i > 0) pg.appendChild(el("a", {href: CH[i-1].f}, "<small>← Chương trước</small>" + CH[i-1].n + " · " + CH[i-1].t)); else pg.appendChild(el("span"));
  if(i < CH.length - 1) pg.appendChild(el("a", {href: CH[i+1].f, style:"text-align:right"}, "<small>Chương sau →</small>" + CH[i+1].n + " · " + CH[i+1].t));
  var ft = main.querySelector(".ftb-end") || main.querySelector("footer"); if(ft) ft.parentNode.insertBefore(pg, ft); else main.appendChild(pg);
}

// ---------- plotting ----------
function css(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function col(c){ if(!c) return css("--muted"); if(c.charAt(0) === "#") return c; return css("--" + c) || c; }
function rng(seed){ var s = seed >>> 0; return function(){ s = (s + 0x6D2B79F5) >>> 0; var t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function gauss(r){ var u = 0, v = 0; while(u === 0) u = r(); while(v === 0) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
var LAB = { log:["10⁻¹","10⁰","10¹","10²","10³"], lin:["0","256","512","768","1023"], logicle:["0","10²","10³","10⁴","10⁵"], pct:["0","25","50","75","100"] };
function frame(ctx, cw, ch, pad, xl, yl, lx, ly){
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = css("--plot-bg"); ctx.fillRect(0, 0, cw, ch);
  ctx.strokeStyle = css("--plot-grid"); ctx.lineWidth = 1;
  ctx.font = "11px " + css("--f-mono"); ctx.fillStyle = css("--muted");
  var pw = cw - pad.l - pad.r, ph = ch - pad.t - pad.b;
  for(var i = 0; i < 5; i++){
    var f = i / 4, x = pad.l + f * pw, y = pad.t + ph - f * ph;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ph); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + pw, y); ctx.stroke();
    ctx.textAlign = "center"; if(lx) ctx.fillText(lx[i], x, pad.t + ph + 15);
    ctx.textAlign = "right"; if(ly) ctx.fillText(ly[i], pad.l - 5, y + 4);
  }
  ctx.strokeStyle = css("--line"); ctx.strokeRect(pad.l, pad.t, pw, ph);
  ctx.fillStyle = css("--ink"); ctx.font = "12px " + css("--f-body");
  ctx.textAlign = "center"; ctx.fillText(xl, pad.l + pw / 2, ch - 6);
  ctx.save(); ctx.translate(13, pad.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(yl, 0, 0); ctx.restore();
  return {pw: pw, ph: ph};
}
function drawSpec(cv, s, hl){
  var ctx = cv.getContext("2d"), cw = cv.width, ch = cv.height, pad = {l:52, r:12, t:12, b:40};
  var lx = s.xl || LAB[s.xs || "log"], ly = s.yl || LAB[s.ys || "log"];
  if(s.type === "hist") ly = ["", "", "", "", ""];
  var g = frame(ctx, cw, ch, pad, s.x || "", s.type === "hist" ? "Số tế bào" : (s.y || ""), lx, ly);
  var r = rng(s.seed || 7);
  function X(v){ return pad.l + v * g.pw; } function Y(v){ return pad.t + g.ph - v * g.ph; }
  if(s.type === "hist"){
    var bins = 128, H = [];
    s.pops.forEach(function(p){ var h = new Array(bins).fill(0); for(var i = 0; i < p.n; i++){ var v = p.x + p.sx * gauss(r); var b = Math.floor(v * bins); if(b >= 0 && b < bins) h[b]++; } H.push(h); });
    var mx = 1; H.forEach(function(h){ h.forEach(function(v){ if(v > mx) mx = v; }); });
    H.forEach(function(h, k){ var p = s.pops[k]; ctx.strokeStyle = col(p.c); ctx.fillStyle = col(p.c); ctx.globalAlpha = .25; ctx.beginPath(); ctx.moveTo(X(0), Y(0)); h.forEach(function(v, i){ ctx.lineTo(X((i + .5) / bins), Y(v / mx * .92)); }); ctx.lineTo(X(1), Y(0)); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1; ctx.lineWidth = 1.5; ctx.beginPath(); h.forEach(function(v, i){ var xx = X((i + .5) / bins), yy = Y(v / mx * .92); if(i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }); ctx.stroke(); });
  } else {
    s.pops.forEach(function(p){
      var dim = hl && hl !== p.l;
      ctx.fillStyle = dim ? css("--plot-grid") : col(p.c);
      var rho = p.rho || 0;
      for(var i = 0; i < p.n; i++){
        var a = gauss(r), b = gauss(r), x, y;
        if(p.line){ var t = r(); x = p.line[0] + (p.line[2] - p.line[0]) * t + p.sx * a; y = p.line[1] + (p.line[3] - p.line[1]) * t + p.sy * b; }
        else { x = p.x + p.sx * a; y = p.y + p.sy * (rho * a + Math.sqrt(1 - rho * rho) * b); }
        if(x < 0) x = p.clip ? 0.002 : -1; if(y < 0) y = p.clip ? 0.002 : -1;
        if(x < 0 || x > 1 || y < 0 || y > 1) continue;
        ctx.fillRect(X(x), Y(y), s.dot || 2, s.dot || 2);
      }
    });
  }
  (s.gates || []).forEach(function(gt){
    ctx.strokeStyle = col(gt.c || "ink"); ctx.lineWidth = 1.4; ctx.setLineDash(gt.dash ? [5, 4] : []);
    ctx.beginPath();
    if(gt.rect){ ctx.rect(X(gt.rect[0]), Y(gt.rect[3]), X(gt.rect[1]) - X(gt.rect[0]), Y(gt.rect[2]) - Y(gt.rect[3])); }
    else if(gt.poly){ gt.poly.forEach(function(pt, i){ if(i) ctx.lineTo(X(pt[0]), Y(pt[1])); else ctx.moveTo(X(pt[0]), Y(pt[1])); }); ctx.closePath(); }
    else if(gt.vline !== undefined){ ctx.moveTo(X(gt.vline), Y(0)); ctx.lineTo(X(gt.vline), Y(1)); }
    else if(gt.hline !== undefined){ ctx.moveTo(X(0), Y(gt.hline)); ctx.lineTo(X(1), Y(gt.hline)); }
    ctx.stroke(); ctx.setLineDash([]);
    if(gt.l){ ctx.fillStyle = col(gt.c || "ink"); ctx.font = "600 11px " + css("--f-mono"); ctx.textAlign = "left"; var p0 = gt.rect ? [gt.rect[0], gt.rect[3]] : gt.poly ? gt.poly[0] : [gt.vline || 0, gt.hline || 1]; ctx.fillText(gt.l, X(gt.lx !== undefined ? gt.lx : p0[0]) + 3, Y(gt.ly !== undefined ? gt.ly : p0[1]) + 12); }
  });
  ctx.font = "600 11.5px " + css("--f-body"); ctx.textAlign = "left";
  s.pops.forEach(function(p){ if(!p.l || p.nolab) return; var dim = hl && hl !== p.l; ctx.fillStyle = dim ? css("--muted") : col(p.c); var lxp = p.lx !== undefined ? p.lx : (p.line ? p.line[2] : p.x + p.sx * 1.7), lyp = p.ly !== undefined ? p.ly : (p.line ? p.line[3] : (s.type === "hist" ? .95 : p.y)); ctx.fillText(p.l, X(lxp), Y(lyp)); });
  if(s.note){ ctx.fillStyle = css("--muted"); ctx.font = "10.5px " + css("--f-mono"); ctx.textAlign = "right"; ctx.fillText(s.note, cw - pad.r - 4, pad.t + 13); }
}
var plots = [];
function initPlots(){
  Array.prototype.forEach.call(document.querySelectorAll("canvas.plot"), function(cv){
    try{ var s = JSON.parse(cv.getAttribute("data-spec")); if(!cv.getAttribute("width")){ cv.width = 520; cv.height = 400; } plots.push({cv:cv, s:s}); }catch(e){ console.error("plot spec", e, cv); }
  });
}
function drawPlots(){ plots.forEach(function(p){ drawSpec(p.cv, p.s, p.hl); }); }
window.FB_plot = {draw: drawSpec, items: plots, redraw: drawPlots};

// legend-click highlighting
function initLegends(){
  Array.prototype.forEach.call(document.querySelectorAll("[data-legend-for]"), function(box){
    var id = box.getAttribute("data-legend-for"), item = null;
    plots.forEach(function(p){ if(p.cv.id === id) item = p; });
    if(!item) return;
    var info = box.querySelector(".legend-info");
    Array.prototype.forEach.call(box.querySelectorAll("button[data-pop]"), function(b){
      b.addEventListener("click", function(){
        var k = b.getAttribute("data-pop"); item.hl = item.hl === k ? null : k; drawSpec(item.cv, item.s, item.hl);
        Array.prototype.forEach.call(box.querySelectorAll("button[data-pop]"), function(x){ x.style.borderColor = x.getAttribute("data-pop") === item.hl ? "var(--accent)" : "var(--line)"; });
        if(info) info.textContent = item.hl ? (b.getAttribute("data-desc") || "") : "Bấm tên một quần thể để làm nổi.";
      });
    });
  });
}

// ---------- quiz ----------
function initQuiz(){
  Array.prototype.forEach.call(document.querySelectorAll(".quiz[data-src]"), function(box){
    var src = document.getElementById(box.getAttribute("data-src")); if(!src) return;
    var Q; try{ Q = JSON.parse(src.textContent); }catch(e){ console.error(e); return; }
    var score = 0, done = 0, sc = el("p", {"class":"score"}, "Điểm: 0 / " + Q.length);
    box.appendChild(sc);
    Q.forEach(function(it, i){
      var d = el("div", {"class":"q"}); d.appendChild(el("p", null, (i + 1) + ". " + it.q));
      var os = el("div", {"class":"opts"}), fb = el("div", {"class":"fb"}), fin = false;
      it.o.forEach(function(t, j){
        var b = el("button", {type:"button", "class":"opt", id: box.getAttribute("data-src") + "-q" + i + "-" + j}); b.textContent = t;
        b.addEventListener("click", function(){ if(fin) return; fin = true; done++;
          if(j === it.a){ b.classList.add("right"); score++; fb.textContent = "Đúng. " + it.e; } else { b.classList.add("wrong"); os.children[it.a].classList.add("right"); fb.textContent = "Chưa đúng. " + it.e; }
          fb.classList.add("show"); sc.textContent = "Điểm: " + score + " / " + Q.length + (done === Q.length ? " · hoàn thành" : ""); });
        os.appendChild(b);
      });
      d.appendChild(os); d.appendChild(fb); box.appendChild(d);
    });
  });
}

// ---------- number helpers ----------
function fmt(n, d){ d = d || 0; return Number(n).toLocaleString("vi-VN", {maximumFractionDigits: d, minimumFractionDigits: d}); }
function sup(n){ var m = {"-":"⁻","0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹"}; return String(n).split("").map(function(c){ return m[c] || c; }).join(""); }
function sci(x){ if(!(x > 0)) return "–"; var e = Math.floor(Math.log10(x)); var m = x / Math.pow(10, e); return fmt(m, 1) + " × 10" + sup(e); }
window.FB_fmt = {fmt: fmt, sci: sci};

// ---------- compensation simulator ----------
function initComp(){
  var cc = document.getElementById("compCanvas"); if(!cc) return;
  var cs = document.getElementById("compSlider"), bs = document.getElementById("brightSlider"), ns = document.getElementById("noiseSlider");
  var SPILL = 0.147, TOP = 1e5, W = 60;
  function tr(v){ return Math.asinh(v / W) / Math.asinh(TOP / W); }
  function draw(){
    var comp = parseFloat(cs.value) / 100, bright = parseFloat(bs.value), k = ns ? parseFloat(ns.value) : 1.6;
    document.getElementById("compOut").textContent = fmt(parseFloat(cs.value), 1) + "%";
    document.getElementById("brightOut").textContent = fmt(bright);
    if(ns) document.getElementById("noiseOut").textContent = fmt(k, 1);
    var ctx = cc.getContext("2d"), cw = cc.width, ch = cc.height, pad = {l:52, r:12, t:12, b:40};
    var g = frame(ctx, cw, ch, pad, "FL1 FITC (logicle)", "FL2 PE sau bù (logicle)", LAB.logicle, LAB.logicle);
    function px(v){ return pad.l + tr(v) * g.pw; } function py(v){ return pad.t + g.ph - tr(v) * g.ph; }
    // reposition gridlines to real logicle values
    var r = rng(7), neg = [], pos = [];
    function dot(x, y, c){ var X = px(x), Y = py(y); if(Y > pad.t + g.ph) Y = pad.t + g.ph - 1; if(Y < pad.t) return; ctx.fillStyle = c; ctx.fillRect(X, Y, 2, 2); }
    var nc = css("--muted"), pc = css("--b488");
    for(var i = 0; i < 1500; i++){ var f1 = 30 * Math.exp(.35 * gauss(r)) + gauss(r) * 6, f2t = 30 * Math.exp(.35 * gauss(r)), f2 = f2t + SPILL * f1 + gauss(r) * Math.sqrt(Math.max(f2t + SPILL * f1, 1)) * 1.2, c2 = f2 - comp * f1; neg.push(c2); dot(f1, c2, nc); }
    for(var j = 0; j < 1500; j++){ var g1 = bright * Math.exp(.28 * gauss(r)), g2t = 30 * Math.exp(.35 * gauss(r)), sp = SPILL * g1, gg = g2t + sp + gauss(r) * Math.sqrt(sp + g2t) * k, d2 = gg - comp * g1; pos.push(d2); dot(g1, d2, pc); }
    function med(a){ var s = a.slice().sort(function(x, y){ return x - y; }); return s[Math.floor(s.length / 2)]; }
    function rsd(a){ var s = a.slice().sort(function(x, y){ return x - y; }); return (s[Math.floor(s.length * .8413)] - s[Math.floor(s.length * .1587)]) / 2; }
    var mn = med(neg), mp = med(pos), diff = mp - mn, st = document.getElementById("compStatus"), tol = .004 * bright + 4;
    if(diff > tol){ st.className = "pill bad"; st.textContent = "Thiếu bù: đám FITC+ kéo chéo lên"; }
    else if(diff < -tol){ st.className = "pill warn"; st.textContent = "Bù quá: đám FITC+ bị ép xuống dưới đám âm"; }
    else { st.className = "pill ok"; st.textContent = "Bù đúng: median PE hai đám bằng nhau"; }
    document.getElementById("compStats").innerHTML = "Median FL2 đám âm: " + fmt(mn) + "<br>Median FL2 đám FITC+: " + fmt(mp) + "<br>rSD FL2 đám âm: " + fmt(rsd(neg)) + "<br>rSD FL2 đám FITC+: " + fmt(rsd(pos)) + "<br>Tỷ số rSD (độ loe): " + fmt(rsd(pos) / rsd(neg), 1) + "×";
  }
  [cs, bs, ns].forEach(function(x){ if(x) x.addEventListener("input", draw); });
  window.FB_compDraw = draw; draw();
}


// ---------- scale / compensation / gain simulator (chương 1) ----------
function initScale(){
  var cv = document.getElementById("scaleCanvas"); if(!cv) return;
  var sel = document.getElementById("scaleSel"), cs = document.getElementById("scaleComp"), gs = document.getElementById("scaleGain");
  var SP = 0.15, MAXV = 1000;
  // dữ liệu gốc cố định (đơn vị ở gain ×1)
  var r = rng(11), pops = [], k;
  function mk(n, f, col, key){ var a = []; for(var i = 0; i < n; i++){ var fit = Math.max(0.05, f * Math.exp(0.22 * gauss(r)) + 0.25 * gauss(r)); var pet = 0.5 * Math.exp(0.3 * gauss(r)); var spill = SP * fit; var pe = pet + spill + 0.32 * Math.sqrt(spill + pet) * gauss(r) + 0.12 * gauss(r); a.push([fit, pe]); } pops.push({a: a, c: col, k: key}); }
  mk(1400, 0.6, "--muted", "neg"); mk(700, 8, "--accent", "dim"); mk(900, 150, "--b488", "bright");
  var W = 1, LO = -10;
  var T = {
    lin: {f: function(v){ return v / MAXV; }, t: [[0,"0"],[250,"250"],[500,"500"],[750,"750"],[1000,"1 000"]]},
    log: {f: function(v){ return (Math.log10(Math.max(v, 0.1)) + 1) / 4; }, t: [[0.1,"0,1"],[1,"1"],[10,"10"],[100,"100"],[1000,"1 000"]]},
    logicle: {f: function(v){ var a = Math.asinh(LO / W), b = Math.asinh(MAXV / W); return (Math.asinh(v / W) - a) / (b - a); }, t: [[-10,"−10"],[0,"0"],[10,"10"],[100,"100"],[1000,"1 000"]]}
  };
  function med(a){ var s = a.slice().sort(function(x, y){ return x - y; }); return s[Math.floor(s.length / 2)]; }
  function draw(){
    var sc = T[sel.value], comp = parseFloat(cs.value) / 100, g = parseFloat(gs.value);
    document.getElementById("scaleCompOut").textContent = fmt(parseFloat(cs.value), 1) + "%";
    var ctx = cv.getContext("2d"), cw = cv.width, chh = cv.height, pad = {l: 56, r: 14, t: 14, b: 44}, pw = cw - pad.l - pad.r, ph = chh - pad.t - pad.b;
    ctx.clearRect(0, 0, cw, chh); ctx.fillStyle = css("--plot-bg"); ctx.fillRect(0, 0, cw, chh);
    ctx.font = "11px " + css("--f-mono"); ctx.strokeStyle = css("--plot-grid"); ctx.fillStyle = css("--muted"); ctx.lineWidth = 1;
    sc.t.forEach(function(t){ var f = sc.f(t[0]), x = pad.l + f * pw, y = pad.t + ph - f * ph;
      ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ph); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + pw, y); ctx.stroke();
      ctx.textAlign = f > 0.97 ? "right" : "center"; ctx.fillText(t[1], f > 0.97 ? x + 2 : x, pad.t + ph + 15); ctx.textAlign = "right"; ctx.fillText(t[1], pad.l - 6, y + 4); });
    ctx.fillStyle = css("--ink"); ctx.font = "12px " + css("--f-body"); ctx.textAlign = "center";
    ctx.fillText("FITC (CD8)", pad.l + pw / 2, chh - 8);
    ctx.save(); ctx.translate(14, pad.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.fillText("PE sau bù", 0, 0); ctx.restore();
    function X(v){ return pad.l + Math.min(1, Math.max(0, sc.f(v))) * pw; } function Y(v){ return pad.t + ph - Math.min(1, Math.max(0, sc.f(v))) * ph; }
    var res = {}, clip = 0, pinned = 0, nb = 0;
    pops.forEach(function(p){ var pes = [], fits = []; ctx.fillStyle = css(p.c);
      p.a.forEach(function(d){ var fr = d[0] * g, pr = d[1] * g; var fm = Math.min(fr, MAXV), pm = Math.min(pr, MAXV); if(fr > MAXV){ clip++; } var pc = pm - comp * fm; pes.push(pc); fits.push(fm);
        if(sel.value === "log" && pc <= 0.1) pinned++; if(p.k === "bright") nb++;
        ctx.fillRect(X(fm) - 1, Y(pc) - 1, 2, 2); });
      res[p.k] = {pe: med(pes), fit: med(fits)}; });
    var y0 = Y(res.neg.pe), y1 = Y(res.bright.pe);
    ctx.setLineDash([6, 5]); ctx.strokeStyle = css("--ink"); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(pad.l, y0); ctx.lineTo(pad.l + pw, y0); ctx.stroke(); ctx.setLineDash([]);
    var xb = X(res.bright.fit); ctx.strokeStyle = css("--b488"); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(xb - 40, y1); ctx.lineTo(xb + 40, y1); ctx.stroke();
    var diff = res.bright.pe - res.neg.pe, st = document.getElementById("scaleStatus"), tol = 0.6 * g;
    if(clip > nb * 0.05){ st.className = "pill bad"; st.textContent = "Bão hòa: " + fmt(clip / nb * 100) + "% FITC sáng chạm kịch trục, bù sai"; }
    else if(diff > tol){ st.className = "pill bad"; st.textContent = "Thiếu bù: trung vị PE quần thể sáng cao hơn mốc"; }
    else if(diff < -tol){ st.className = "pill warn"; st.textContent = "Thừa bù: trung vị PE quần thể sáng thấp hơn mốc"; }
    else { st.className = "pill ok"; st.textContent = "Bù đúng: hai trung vị PE bằng nhau"; }
    document.getElementById("scaleStats").innerHTML = "Trung vị PE quần thể âm: " + fmt(res.neg.pe, 2) + "<br>Trung vị PE quần thể FITC sáng: " + fmt(res.bright.pe, 2) + "<br>Trung vị FITC quần thể sáng: " + fmt(res.bright.fit, 0) + (sel.value === "log" ? "<br>Sự kiện ≤0,1 bị ép vào mép dưới: " + fmt(pinned) : "") + (diff > tol && clip <= nb * 0.05 ? "<br>Ước lượng cần thêm ≈ " + fmt(diff / (res.bright.fit - res.neg.pe) * 100, 1) + "% bù" : "");
  }
  [sel, cs, gs].forEach(function(x){ x.addEventListener("input", draw); x.addEventListener("change", draw); });
  window.FB_scaleDraw = draw; draw();
}
// ---------- ABC calculator ----------
function initABC(){
  if(!document.getElementById("abcResult")) return;
  var ids = ["abcP1","abcM1","abcP2","abcM2","abcP3","abcM3","abcP4","abcM4","abcS","abcB"];
  bind(ids, function(){
    var xs = [], ys = [], out = document.getElementById("abcResult");
    for(var i = 1; i <= 4; i++){ var p = v("abcP" + i), m = v("abcM" + i); if(p > 0 && m > 0){ xs.push(Math.log10(m)); ys.push(Math.log10(p)); } }
    if(xs.length < 2){ out.textContent = "Cần ít nhất 2 mức hạt có PE/hạt và MFI lớn hơn 0."; return; }
    var n = xs.length, mx = xs.reduce(function(a, b){ return a + b; }) / n, my = ys.reduce(function(a, b){ return a + b; }) / n, sxy = 0, sxx = 0, syy = 0;
    for(var j = 0; j < n; j++){ sxy += (xs[j] - mx) * (ys[j] - my); sxx += (xs[j] - mx) * (xs[j] - mx); syy += (ys[j] - my) * (ys[j] - my); }
    var b = sxy / sxx, a = my - b * mx, r2 = sxy * sxy / (sxx * syy);
    function conv(m){ return m > 0 ? Math.pow(10, a + b * Math.log10(m)) : 0; }
    var s = v("abcS"), bg = v("abcB"), abc = conv(s) - conv(bg);
    var lo = Math.pow(10, Math.min.apply(null, xs)), hi = Math.pow(10, Math.max.apply(null, xs));
    var m = "Đường chuẩn: log₁₀(PE) = " + fmt(a, 3) + " + " + fmt(b, 3) + " × log₁₀(MFI)<br>r² = " + fmt(r2, 4) + (r2 < 0.98 ? " <span style='color:var(--bad)'>(thấp: kiểm tra lại hạt)</span>" : "") + "<br>PE tương đương của mẫu: " + fmt(conv(s)) + "<br>PE tương đương của nền: " + fmt(conv(bg));
    m += "<p style='margin:8px 0'><b style='color:var(--ink);font-size:1.05rem'>ABC ≈ " + fmt(abc) + " kháng thể/tế bào</b></p>";
    if(s < lo || s > hi) m += "<span style='color:var(--warn)'>MFI mẫu nằm ngoài khoảng hạt chuẩn (" + fmt(lo, 1) + "–" + fmt(hi, 1) + "): kết quả ngoại suy, kém tin cậy.</span><br>";
    m += "<span class='stat'>Nếu đây là mHLA-DR (quy trình PE 1:1 chuẩn hóa): " + (abc >= 15000 ? "≥15 000, trên ngưỡng dưới của bình thường" : abc > 8000 ? "8 000–15 000, giảm" : "≤8 000, mức liệt miễn dịch nặng theo tổng quan 2023") + ".</span>";
    out.innerHTML = m;
  });
}

// ---------- shared mini-canvas helpers ----------
function miniAxes(cv, pad, xt, yt, xl, yl){
  var ctx = cv.getContext("2d"), W = cv.width, H = cv.height, pw = W - pad.l - pad.r, ph = H - pad.t - pad.b;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = css("--plot-bg"); ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = css("--plot-grid"); ctx.fillStyle = css("--muted"); ctx.lineWidth = 1; ctx.font = "11px " + css("--f-mono");
  (xt || []).forEach(function(t){ var x = pad.l + t[0] * pw; ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ph); ctx.stroke(); ctx.textAlign = t[0] > .97 ? "right" : "center"; ctx.fillText(t[1], t[0] > .97 ? x + 2 : x, pad.t + ph + 15); });
  (yt || []).forEach(function(t){ var y = pad.t + ph - t[0] * ph; ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + pw, y); ctx.stroke(); ctx.textAlign = "right"; ctx.fillText(t[1], pad.l - 6, y + 4); });
  ctx.fillStyle = css("--ink"); ctx.font = "12px " + css("--f-body"); ctx.textAlign = "center"; ctx.fillText(xl, pad.l + pw / 2, H - 6);
  if(yl){ ctx.save(); ctx.translate(13, pad.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(yl, 0, 0); ctx.restore(); }
  return {ctx: ctx, pw: pw, ph: ph, X: function(f){ return pad.l + Math.min(1, Math.max(0, f)) * pw; }, Y: function(f){ return pad.t + ph - Math.min(1, Math.max(0, f)) * ph; }};
}
function qtl(a, q){ var s = a.slice().sort(function(x, y){ return x - y; }); return s[Math.min(s.length - 1, Math.max(0, Math.floor(q * s.length)))]; }
function LGC(v){ var W = 1, LO = -10, MX = 1000; return (Math.asinh(v / W) - Math.asinh(LO / W)) / (Math.asinh(MX / W) - Math.asinh(LO / W)); }
var LGC_T = [[-10,"−10"],[0,"0"],[10,"10"],[100,"100"],[1000,"1 000"]].map(function(t){ return [LGC(t[0]), t[1]]; });

// ---------- 1.11 dương hay âm ----------
function initPosLab(){
  var cv = document.getElementById("posCanvas"); if(!cv) return;
  var fl = document.getElementById("posFluor"), den = document.getElementById("posDen"), sp = document.getElementById("posSpread");
  var F = {PE: {b: 1.0, s: 0.35}, FITC: {b: 0.35, s: 0.45}, KrO: {b: 0.12, s: 1.1}};
  function draw(){
    var f = F[fl.value], d = Math.round(Math.pow(10, parseFloat(den.value))), extra = sp.checked ? 3.2 : 0, r = rng(5);
    document.getElementById("posDenOut").textContent = fmt(d) + " vị trí/tế bào";
    var neg = [], pos = [];
    for(var i = 0; i < 4000; i++){ var af = 0.5 * Math.exp(0.25 * gauss(r)); neg.push(af + (f.s + extra) * gauss(r)); }
    for(var j = 0; j < 4000; j++){ var sig = d / 100 * f.b * Math.exp(0.3 * gauss(r)), af2 = 0.5 * Math.exp(0.25 * gauss(r)); pos.push(sig + af2 + 0.3 * Math.sqrt(sig) * gauss(r) + (f.s + extra) * gauss(r)); }
    var thr = qtl(neg, 0.995), mN = qtl(neg, .5), mP = qtl(pos, .5), sdN = (qtl(neg, .84) - qtl(neg, .16)) / 2;
    var pc = pos.filter(function(x){ return x > thr; }).length / pos.length * 100;
    var g = miniAxes(cv, {l: 48, r: 14, t: 14, b: 40}, LGC_T, [], "Cường độ kênh đang xét (logicle)", "Số tế bào"), ctx = g.ctx, bins = 120;
    function hist(a){ var h = new Array(bins).fill(0); a.forEach(function(x){ var b = Math.floor(LGC(x) * bins); if(b >= 0 && b < bins) h[b]++; }); return h; }
    var hN = hist(neg), hP = hist(pos), mx = Math.max.apply(null, hN.concat(hP));
    [[hN, "--muted"], [hP, "--b488"]].forEach(function(o){ ctx.strokeStyle = css(o[1]); ctx.fillStyle = css(o[1]); ctx.globalAlpha = .25; ctx.beginPath(); ctx.moveTo(g.X(0), g.Y(0)); o[0].forEach(function(v, i){ ctx.lineTo(g.X((i + .5) / bins), g.Y(v / mx * .9)); }); ctx.lineTo(g.X(1), g.Y(0)); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1; ctx.lineWidth = 1.6; ctx.beginPath(); o[0].forEach(function(v, i){ var x = g.X((i + .5) / bins), y = g.Y(v / mx * .9); if(i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); });
    var tx = g.X(LGC(thr)); ctx.setLineDash([6, 4]); ctx.strokeStyle = css("--r638"); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(tx, 14); ctx.lineTo(tx, 14 + g.ph); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = css("--r638"); ctx.font = "11px " + css("--f-body"); ctx.textAlign = "left"; ctx.fillText("ngưỡng = mép trên quần thể âm", tx + 5, 28);
    var st = document.getElementById("posStatus");
    if(pc > 95){ st.className = "pill ok"; st.textContent = "Tách rõ: dương đồng nhất"; }
    else if(pc > 20){ st.className = "pill warn"; st.textContent = "Tách một phần: trông như “dương một phần”"; }
    else { st.className = "pill bad"; st.textContent = "Gần như không tách: trông như âm"; }
    document.getElementById("posStats").innerHTML = "Ngưỡng (99,5% quần thể âm): " + fmt(thr, 1) + "<br>% tế bào trên ngưỡng: <b>" + fmt(pc, 1) + "%</b><br>Median quần thể âm: " + fmt(mN, 2) + "<br>Median quần thể dương: " + fmt(mP, 1) + "<br>Stain index ≈ " + fmt((mP - mN) / (2 * sdN), 1) + "<br><span style='color:var(--muted)'>Thực tế 100% tế bào xanh đều mang kháng nguyên.</span>";
  }
  [fl, den, sp].forEach(function(x){ x.addEventListener("input", draw); x.addEventListener("change", draw); });
  window.FB_extraList = (window.FB_extraList || []).concat([draw]); draw();
}

// ---------- 1.12 discriminator ----------
function initDiscLab(){
  var cv = document.getElementById("discCanvas"); if(!cv) return;
  var sl = document.getElementById("discThr"), r = rng(23), ev = [];
  function add(n, fx, sx, fy, sy, k){ for(var i = 0; i < n; i++) ev.push([Math.max(1, fx + sx * gauss(r)), Math.max(1, fy + sy * gauss(r)), k]); }
  add(1800, 28, 16, 18, 12, "debris"); add(1200, 165, 24, 42, 10, "ly"); add(300, 270, 26, 125, 20, "mo"); add(1500, 310, 32, 330, 55, "gr");
  var G = {x0: 95, x1: 235, y0: 8, y1: 90};
  function draw(){
    var t = +sl.value; document.getElementById("discOut").textContent = t;
    var g = miniAxes(cv, {l: 48, r: 14, t: 14, b: 40}, [[0,"0"],[.25,"256"],[.5,"512"],[.75,"768"],[1,"1023"]], [[0,"0"],[.25,"256"],[.5,"512"],[.75,"768"],[1,"1023"]], "FS INT (tuyến tính)", "SS INT"), ctx = g.ctx;
    var C = {debris: "--muted", ly: "--b488", mo: "--ok", gr: "--warn"}, rec = 0, lyIn = 0, lyLost = 0, deb = 0, lyAll = 0;
    ev.forEach(function(e){ if(e[2] === "ly") lyAll++; if(e[0] < t){ if(e[2] === "ly") lyLost++; return; } rec++; if(e[2] === "debris") deb++;
      if(e[0] >= G.x0 && e[0] <= G.x1 && e[1] >= G.y0 && e[1] <= G.y1) lyIn++;
      ctx.fillStyle = css(C[e[2]]); ctx.fillRect(g.X(e[0] / 1023) - 1, g.Y(e[1] / 1023) - 1, 2, 2); });
    ctx.fillStyle = css("--r638"); ctx.globalAlpha = .08; ctx.fillRect(g.X(0), 14, g.X(t / 1023) - g.X(0), g.ph); ctx.globalAlpha = 1;
    ctx.strokeStyle = css("--r638"); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(g.X(t / 1023), 14); ctx.lineTo(g.X(t / 1023), 14 + g.ph); ctx.stroke();
    ctx.fillStyle = css("--r638"); ctx.font = "11px " + css("--f-body"); ctx.textAlign = "left"; ctx.fillText("discriminator: không ghi vào file", g.X(t / 1023) + 5, 28);
    ctx.setLineDash([5, 4]); ctx.strokeStyle = css("--b488"); ctx.lineWidth = 1.5; ctx.strokeRect(g.X(G.x0 / 1023), g.Y(G.y1 / 1023), g.X(G.x1 / 1023) - g.X(G.x0 / 1023), g.Y(G.y0 / 1023) - g.Y(G.y1 / 1023)); ctx.setLineDash([]);
    ctx.fillStyle = css("--b488"); ctx.fillText("cổng lympho", g.X(G.x0 / 1023) + 3, g.Y(G.y1 / 1023) - 5);
    var st = document.getElementById("discStatus");
    if(lyLost > lyAll * 0.02){ st.className = "pill bad"; st.textContent = "Quá cao: mất " + fmt(lyLost / lyAll * 100, 1) + "% lympho, không lấy lại được"; }
    else if(deb > rec * 0.2){ st.className = "pill warn"; st.textContent = "Quá thấp: mảnh vụn chiếm " + fmt(deb / rec * 100) + "% file"; }
    else { st.className = "pill ok"; st.textContent = "Hợp lý: giữ lympho, bỏ phần lớn mảnh vụn"; }
    document.getElementById("discStats").innerHTML = "Sự kiện ghi vào file: " + fmt(rec) + "<br>Mảnh vụn trong file: " + fmt(deb) + "<br>Lympho trong cổng: " + fmt(lyIn) + "<br>Lympho bị mất do ngưỡng: <b>" + fmt(lyLost) + "</b><br>Lympho % Total: " + fmt(lyIn / rec * 100, 1) + "%";
  }
  sl.addEventListener("input", draw); window.FB_extraList = (window.FB_extraList || []).concat([draw]); draw();
}

// ---------- 1.12 TIME ----------
function initTimeLab(){
  var cv = document.getElementById("timeCanvas"); if(!cv) return;
  var cb = document.getElementById("timeGate"), r = rng(31), ev = [];
  for(var i = 0; i < 5000; i++){ var t = r() * 100; if(t > 55 && t < 58.5) continue; var bad = t >= 58.5 && t < 63, k = r(), y, kind;
    if(k < .08){ y = .50; kind = "bl"; } else if(k < .45){ y = .80; kind = "ly"; } else { y = .66; kind = "gr"; }
    y += (bad ? -0.13 + 0.07 * gauss(r) : 0) + 0.025 * gauss(r); ev.push([t, y, kind, bad]); }
  function draw(){
    var on = cb.checked, g = miniAxes(cv, {l: 48, r: 14, t: 14, b: 40}, [[0,"0"],[.25,"25"],[.5,"50"],[.75,"75"],[1,"100"]], [[.5,"mờ"],[.8,"sáng"]], "TIME (% thời gian thu)", "CD45"), ctx = g.ctx;
    var tot = 0, bl = 0, inDim = 0;
    ev.forEach(function(e){ var ex = on && e[0] >= 55 && e[0] < 63; ctx.fillStyle = ex ? css("--plot-grid") : css(e[2] === "bl" ? "--r638" : e[2] === "ly" ? "--b488" : "--warn"); ctx.fillRect(g.X(e[0] / 100) - 1, g.Y(e[1]) - 1, 2, 2);
      if(ex) return; tot++; if(e[1] > .43 && e[1] < .57) inDim++; });
    ctx.strokeStyle = css("--r638"); ctx.setLineDash([4, 4]); ctx.strokeRect(g.X(.545), 16, g.X(.635) - g.X(.545), g.ph - 4); ctx.setLineDash([]);
    ctx.fillStyle = css("--r638"); ctx.font = "11px " + css("--f-body"); ctx.textAlign = "center"; ctx.fillText(on ? "đã loại bằng cổng TIME" : "bọt khí → gián đoạn, tín hiệu tụt", g.X(.59), 30);
    ctx.setLineDash([6, 4]); ctx.strokeStyle = css("--muted"); [.43, .57].forEach(function(yy){ ctx.beginPath(); ctx.moveTo(g.X(0), g.Y(yy)); ctx.lineTo(g.X(1), g.Y(yy)); ctx.stroke(); }); ctx.setLineDash([]);
    document.getElementById("timeStats").innerHTML = "Sự kiện dùng để phân tích: " + fmt(tot) + "<br>Sự kiện trong vùng CD45 mờ: " + fmt(inDim) + "<br>% vùng CD45 mờ (“blast”): <b>" + fmt(inDim / tot * 100, 1) + "%</b><br><span style='color:var(--muted)'>Giá trị thật: khoảng 8%.</span>";
  }
  cb.addEventListener("change", draw); window.FB_extraList = (window.FB_extraList || []).concat([draw]); draw();
}

// ---------- 1.13 đuôi phân bố ----------
function initTailLab(){
  var cv = document.getElementById("tailCanvas"); if(!cv) return;
  var sl = document.getElementById("tailPct");
  function draw(){
    var p = +sl.value, r = rng(41), a = [], N = 10000, nt = Math.round(N * p / 100);
    document.getElementById("tailOut").textContent = fmt(p, 1) + "%";
    for(var i = 0; i < N - nt; i++) a.push(500 + 15 * gauss(r));
    for(var j = 0; j < nt; j++){ a.push(j % 2 ? Math.min(1023, 1000 + 15 * gauss(r)) : 60 + r() * 380); }
    var n = a.length, mean = a.reduce(function(s, x){ return s + x; }, 0) / n, sd = Math.sqrt(a.reduce(function(s, x){ return s + (x - mean) * (x - mean); }, 0) / (n - 1)), med = qtl(a, .5);
    var bins = 256, h = new Array(bins).fill(0); a.forEach(function(x){ var b = Math.floor(x / 1024 * bins); if(b >= 0 && b < bins) h[b]++; });
    var mi = 0; h.forEach(function(v, i){ if(v > h[mi]) mi = i; }); var half = h[mi] / 2, lo = mi, hi = mi; while(lo > 0 && h[lo] > half) lo--; while(hi < bins - 1 && h[hi] > half) hi++;
    var fw = (hi - lo) * 1024 / bins, mode = (mi + .5) * 1024 / bins, hp = fw / 2.354 / mode * 100;
    var g = miniAxes(cv, {l: 48, r: 14, t: 14, b: 40}, [[0,"0"],[.25,"256"],[.5,"512"],[.75,"768"],[1,"1023"]], [], "Kênh hạt QC (tuyến tính)", "Số hạt"), ctx = g.ctx, mx = Math.max.apply(null, h) * 1.05, cap = mx;
    ctx.fillStyle = css("--accent"); h.forEach(function(v, i){ var hh = Math.max(v / cap, v > 0 ? 0.006 : 0); ctx.fillRect(g.X(i / bins), g.Y(hh), Math.max(1, g.pw / bins - .5), g.Y(0) - g.Y(hh)); });
    function vl(x, c, l, dy){ ctx.strokeStyle = css(c); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(g.X(x / 1024), 14); ctx.lineTo(g.X(x / 1024), 14 + g.ph); ctx.stroke(); ctx.fillStyle = css(c); ctx.font = "11px " + css("--f-body"); ctx.textAlign = "left"; ctx.fillText(l, g.X(x / 1024) + 4, 26 + dy); }
    vl(med, "--ok", "Median", 0); vl(mean, "--r638", "Mean", 16);
    document.getElementById("tailStats").innerHTML = "Mean: " + fmt(mean, 1) + "<br>Median: " + fmt(med, 1) + "<br>CV (theo SD toàn bộ): <b>" + fmt(sd / mean * 100, 1) + "%</b><br>HPCV (nửa trên đỉnh): <b>" + fmt(hp, 1) + "%</b>";
  }
  sl.addEventListener("input", draw); window.FB_extraList = (window.FB_extraList || []).concat([draw]); draw();
}

// ---------- 1.13 Poisson ----------
function initPoisson(){
  if(!document.getElementById("poiResult")) return;
  bind(["poiN", "poiTot"], function(){
    var n = v("poiN"), N = v("poiTot"), out = document.getElementById("poiResult");
    if(!(n >= 0) || !(N > 0)){ out.textContent = "Nhập số sự kiện và tổng số tế bào."; return; }
    var f = n / N * 100, cv = n > 0 ? 100 / Math.sqrt(n) : NaN, lo = Math.max(0, n - 2 * Math.sqrt(n)) / N * 100, hi = (n + 2 * Math.sqrt(n)) / N * 100;
    var st = n < 20 ? "<span style='color:var(--bad)'>Dưới 20 sự kiện: dưới LOD, không báo dương</span>" : n < 50 ? "<span style='color:var(--warn)'>20–49 sự kiện: phát hiện được, chỉ là ước lượng</span>" : "<span style='color:var(--ok)'>≥50 sự kiện: định lượng được</span>";
    out.innerHTML = "Tần suất: <b>" + fmt(f, 4) + "%</b><br>CV đếm ≈ 1/√n = " + (n > 0 ? fmt(cv, 1) + "%" : "—") + "<br>Khoảng gần đúng (±2 CV): " + fmt(lo, 4) + "% – " + fmt(hi, 4) + "%<br>LOD lần chạy (20 / N): " + fmt(20 / N * 100, 4) + "% · LLOQ (50 / N): " + fmt(50 / N * 100, 4) + "%<br>" + st;
  });
  bind(["poiF", "poiCV"], function(){
    var f = v("poiF") / 100, c = v("poiCV") / 100, out = document.getElementById("poiPlan");
    if(!(f > 0) || !(c > 0)){ out.textContent = ""; return; }
    var N = 1 / (c * c * f); out.innerHTML = "Cần thu khoảng <b>" + fmt(N) + "</b> tế bào trong cổng mẫu số (N = 1 / (CV² × f)), tức khoảng " + fmt(1 / (c * c)) + " sự kiện quần thể đích.";
  });
}
// ---------- bảng thống kê bấm được ----------
function initWalk(){
  Array.prototype.forEach.call(document.querySelectorAll("table.walk tr.r"), function(tr){
    tr.setAttribute("tabindex", "0");
    function tog(){ var x = tr.nextElementSibling; if(x && x.classList.contains("x")){ x.classList.toggle("open"); tr.classList.toggle("on"); } }
    tr.addEventListener("click", tog); tr.addEventListener("keydown", function(e){ if(e.key === "Enter" || e.key === " "){ e.preventDefault(); tog(); } });
  });
}

// ---------- calculators ----------
function bind(ids, fn){ ids.forEach(function(id){ var e = document.getElementById(id); if(e) e.addEventListener("input", fn); }); fn(); }
function v(id){ var e = document.getElementById(id); return e ? +e.value : NaN; }
function initCalcs(){
  if(document.getElementById("fcResult")) bind(["fcCells","fcBeads","fcConc","fcLym"], function(){
    var c = v("fcCells"), b = v("fcBeads"), k = v("fcConc"), ly = v("fcLym"), out = document.getElementById("fcResult");
    if(!(b > 0)){ out.textContent = "Nhập số hạt lớn hơn 0."; return; }
    var val = c / b * k, m = "Số tuyệt đối: <b style='color:var(--ink)'>" + fmt(val) + " tế bào/µL</b>";
    if(ly > 0) m += "<br>Tỷ lệ trên lympho: " + fmt(c / ly * 100, 1) + "%";
    if(b < 1000) m += "<br><span style='color:var(--bad)'>Hạt dưới 1 000 sự kiện: chưa đủ để báo số tuyệt đối theo LSA.</span>";
    if(ly > 0 && ly < 6000) m += "<br><span style='color:var(--warn)'>Lympho dưới 6 000 sự kiện: dưới khuyến cáo của LSA.</span>";
    out.innerHTML = m;
  });
  if(document.getElementById("cd34Result")) bind(["cd34Ev","cd34Beads","cd34Conc","cd34Wbc","cd34Vol","cd34Kg"], function(){
    var e = v("cd34Ev"), b = v("cd34Beads"), k = v("cd34Conc"), w = v("cd34Wbc"), vol = v("cd34Vol"), kg = v("cd34Kg"), out = document.getElementById("cd34Result");
    if(!(b > 0)){ out.textContent = "Nhập số hạt lớn hơn 0."; return; }
    var conc = e / b * k, m = "CD34+ sống: <b style='color:var(--ink)'>" + fmt(conc, 1) + " tế bào/µL</b>";
    if(w > 0) m += "<br>% CD34 trên bạch cầu: " + fmt(conc / (w * 1000) * 100, 2) + "%";
    if(vol > 0 && kg > 0){ var tot = conc * vol * 1000; m += "<br>Tổng CD34 trong túi: " + sci(tot) + "<br>Liều: <b style='color:var(--ink)'>" + fmt(tot / kg / 1e6, 2) + " × 10⁶/kg</b>"; }
    if(e < 100) m += "<br><span style='color:var(--warn)'>Dưới 100 sự kiện CD34+: độ chính xác thấp, cần thu thêm.</span>";
    out.innerHTML = m;
  });
  if(document.getElementById("mrdResult")) bind(["mrdTotal","mrdCluster","mrdTarget","mrdLod","mrdLoq"], function(){
    var N = v("mrdTotal"), c = v("mrdCluster"), t = parseFloat(document.getElementById("mrdTarget").value), L = v("mrdLod") || 20, Q = v("mrdLoq") || 50, out = document.getElementById("mrdResult");
    if(!(N > 0)){ out.textContent = "Nhập tổng số tế bào lớn hơn 0."; return; }
    var lod = L / N, loq = Q / N, lvl = c / N, verdict, cls;
    if(c >= Q){ verdict = "Dương tính, định lượng được: " + sci(lvl) + " (" + fmt(lvl * 100, 4) + "%)"; cls = "bad"; }
    else if(c >= L){ verdict = "Phát hiện, dưới ngưỡng định lượng: báo < " + sci(loq); cls = "warn"; }
    else { verdict = "Không phát hiện, với độ nhạy " + sci(lod); cls = "ok"; }
    var cv = c > 0 ? 100 / Math.sqrt(c) : null;
    out.innerHTML = "<p style='margin:0 0 8px'><span class='pill " + cls + "'>" + verdict + "</span></p><div class='stat'>LOD lần chạy: " + sci(lod) + "<br>LLOQ lần chạy: " + sci(loq) + "<br>" + (cv ? "CV đếm Poisson ≈ " + fmt(cv) + "%<br>" : "") + "Để đạt " + sci(t) + ": cần " + fmt(Math.ceil(L / t)) + " tế bào (phát hiện), " + fmt(Math.ceil(Q / t)) + " tế bào (định lượng)</div>" + (lod > t ? "<p style='margin:8px 0 0;color:var(--bad);font-size:.86rem'>Số tế bào thu chưa đủ cho độ nhạy mục tiêu.</p>" : "");
  });
  if(document.getElementById("pnhResult")) bind(["pnhGran","pnhGranNeg","pnhMono","pnhMonoNeg","pnhRbc","pnhT2","pnhT3"], function(){
    var g = v("pnhGran"), gn = v("pnhGranNeg"), m = v("pnhMono"), mn = v("pnhMonoNeg"), rb = v("pnhRbc"), t2 = v("pnhT2"), t3 = v("pnhT3"), out = document.getElementById("pnhResult");
    var s = "";
    if(g > 0) s += "Dòng PNH bạch cầu hạt: <b style='color:var(--ink)'>" + fmt(gn / g * 100, 3) + "%</b>" + (gn < 20 ? " <span style='color:var(--warn)'>(dưới 20 sự kiện: chưa đủ để kết luận)</span>" : "") + "<br>Độ nhạy lần chạy (20 sự kiện): " + fmt(20 / g * 100, 4) + "%<br>";
    if(m > 0) s += "Dòng PNH mono: <b style='color:var(--ink)'>" + fmt(mn / m * 100, 3) + "%</b><br>";
    if(rb > 0) s += "Hồng cầu Type II: " + fmt(t2 / rb * 100, 3) + "% · Type III: " + fmt(t3 / rb * 100, 3) + "% · Tổng: <b style='color:var(--ink)'>" + fmt((t2 + t3) / rb * 100, 3) + "%</b>";
    out.innerHTML = s;
  });
  if(document.getElementById("ogataResult")) bind(["og1","og2","og3","og4"], function(){
    var a = v("og1"), b = v("og2"), c = v("og3"), d = v("og4"), sc = 0, why = [];
    if(a >= 2){ sc++; why.push("CD34+ dòng tủy ≥2%"); }
    if(b <= 5){ sc++; why.push("tiền B ≤5% trong CD34+"); }
    if(c <= 4 || c >= 7.5){ sc++; why.push("tỷ số CD45 lympho/blast ngoài 4–7,5"); }
    if(d <= 6){ sc++; why.push("tỷ số SSC hạt/lympho ≤6"); }
    document.getElementById("ogataResult").innerHTML = "Điểm Ogata: <b style='color:var(--ink)'>" + sc + " / 4</b>" + (sc >= 2 ? " <span class='pill warn'>≥2: gợi ý MDS</span>" : " <span class='pill ok'>&lt;2</span>") + (why.length ? "<br><span class='stat'>" + why.join(" · ") + "</span>" : "");
  });
}

// ---------- glossary filter ----------
function initFilter(){
  Array.prototype.forEach.call(document.querySelectorAll("input.search[data-target]"), function(inp){
    var tgt = document.getElementById(inp.getAttribute("data-target")); if(!tgt) return;
    inp.addEventListener("input", function(){
      var fd = window.FB_fold || function(x){ return x.toLowerCase(); };
      var q = fd(inp.value.trim());
      Array.prototype.forEach.call(tgt.querySelectorAll("tbody tr"), function(tr){ tr.style.display = !q || fd(tr.textContent).indexOf(q) >= 0 ? "" : "none"; });
    });
  });
  function cdHash(){ try{ var h = location.hash || "", cin = document.getElementById("cdSearch"); if(h.indexOf("#cd-") === 0 && cin){ cin.value = decodeURIComponent(h.slice(4)); cin.dispatchEvent(new Event("input")); var t = document.getElementById("cd"); if(t) t.scrollIntoView(); } }catch(e){} }
  cdHash(); window.addEventListener("hashchange", cdHash);
}

function redrawAll(){ drawPlots(); if(window.FB_compDraw) window.FB_compDraw(); if(window.FB_scaleDraw) window.FB_scaleDraw(); (window.FB_extraList || []).forEach(function(f){ f(); }); if(window.FB_extra) window.FB_extra(); }
window.addEventListener("beforeprint", function(){ Array.prototype.forEach.call(document.querySelectorAll("details"), function(d){ d.setAttribute("open",""); }); });
document.addEventListener("DOMContentLoaded", function(){
  buildNav(); initPlots(); initLegends(); initQuiz(); initComp(); initScale(); initABC(); initPosLab(); initDiscLab(); initTimeLab(); initTailLab(); initPoisson(); initWalk(); initCalcs(); initFilter();
  redrawAll();
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(redrawAll);
  try{ window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", redrawAll); }catch(e){}
  try{ new MutationObserver(redrawAll).observe(document.documentElement, {attributes:true, attributeFilter:["data-theme","saved-theme"]}); }catch(e){}
  if(document.fonts){}
});
})();
