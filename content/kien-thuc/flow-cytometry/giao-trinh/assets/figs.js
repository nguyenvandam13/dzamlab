/* Bộ vẽ hình minh họa SVG cho giáo trình. Mỗi <figure class="fig" data-fig='{json}'> được vẽ thành SVG theo theme. */
(function(){
"use strict";
var NS = "http://www.w3.org/2000/svg";
function css(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function C(c){ if(!c) return css("--accent"); if(c.charAt(0) === "#") return c; return css("--" + c) || c; }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function wrap(t, n){ t = String(t); var w = t.split(" "), L = [], cur = ""; w.forEach(function(x){ if((cur + " " + x).trim().length > n && cur){ L.push(cur); cur = x; } else cur = (cur + " " + x).trim(); }); if(cur) L.push(cur); return L.length ? L : [""]; }
function txt(x, y, t, o){ o = o || {}; var lines = Array.isArray(t) ? t : wrap(t, o.wrap || 999); var lh = o.lh || 15; var y0 = y - (lines.length - 1) * lh / 2 * (o.vc === false ? 0 : 1);
  return '<text x="' + x + '" y="' + y0 + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.fs || 12) + '" font-family="' + (o.mono ? css("--f-mono") : css("--f-body")) + '" font-weight="' + (o.fw || 400) + '" fill="' + (o.fill || css("--ink")) + '" dominant-baseline="middle">' + lines.map(function(l, i){ return '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(l) + '</tspan>'; }).join("") + '</text>'; }
function rect(x, y, w, h, o){ o = o || {}; return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r === undefined ? 8 : o.r) + '" fill="' + (o.fill || css("--surface")) + '" stroke="' + (o.stroke || css("--line")) + '" stroke-width="' + (o.sw || 1.2) + '"' + (o.dash ? ' stroke-dasharray="5 4"' : '') + (o.op ? ' fill-opacity="' + o.op + '"' : '') + '/>'; }
function line(x1, y1, x2, y2, o){ o = o || {}; return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (o.c || css("--muted")) + '" stroke-width="' + (o.w || 1.5) + '"' + (o.dash ? ' stroke-dasharray="5 4"' : '') + (o.arrow ? ' marker-end="url(#ah)"' : '') + '/>'; }
function defs(){ return '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--muted") + '"/></marker></defs>'; }
function svg(w, h, body){ return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" role="img" xmlns="' + NS + '" style="display:block;background:' + css("--plot-bg") + ';border:1px solid ' + css("--line") + ';border-radius:8px">' + defs() + body + '</svg>'; }
function tint(c, a){ return '<rect/>' && c; }

var R = {};

/* flow: n=[[title, sub, color]], dir h|v, per = nodes per row */
R.flow = function(s){
  var n = s.n, v = s.dir === "v";
  if(v){ var W = 760, bw = 560, x = (W - bw) / 2, y = 14, out = "", hs = [];
    n.forEach(function(d){ var L = wrap(d[0], 60).length + (d[1] ? wrap(d[1], 78).length : 0); hs.push(18 + L * 16); });
    var H = hs.reduce(function(a, b){ return a + b + 26; }, 14);
    n.forEach(function(d, i){ var h = hs[i]; out += rect(x, y, bw, h, {stroke: C(d[2]), sw: 1.6}); out += '<rect x="' + x + '" y="' + y + '" width="6" height="' + h + '" rx="3" fill="' + C(d[2]) + '"/>';
      var t1 = wrap(d[0], 60), t2 = d[1] ? wrap(d[1], 78) : []; var yy = y + 18;
      out += txt(x + 22, yy, t1, {a: "start", fw: 600, vc: false}); yy += t1.length * 16;
      if(t2.length) out += txt(x + 22, yy, t2, {a: "start", fs: 11.5, fill: css("--muted"), vc: false});
      if(i < n.length - 1) out += line(W / 2, y + h + 2, W / 2, y + h + 22, {arrow: true});
      y += h + 26; });
    return svg(W, H, out); }
  var per = s.per || Math.min(n.length, 4), W = 760, gap = 34, bw = (W - 24 - gap * (per - 1)) / per, rows = Math.ceil(n.length / per), bh = s.h || 86, H = rows * (bh + 30) + 10, out = "";
  n.forEach(function(d, i){ var r = Math.floor(i / per), k = i % per; if(r % 2 === 1 && s.snake) k = per - 1 - k;
    var x = 12 + k * (bw + gap), y = 14 + r * (bh + 30);
    out += rect(x, y, bw, bh, {stroke: C(d[2]), sw: 1.6}); out += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="5" rx="2" fill="' + C(d[2]) + '"/>';
    var t1 = wrap(d[0], Math.floor(bw / 7.6)), t2 = d[1] ? wrap(d[1], Math.floor(bw / 6.6)) : [];
    var tot = t1.length * 15 + t2.length * 14; var yy = y + bh / 2 - tot / 2 + 8;
    out += txt(x + bw / 2, yy, t1, {fw: 600, vc: false}); if(t2.length) out += txt(x + bw / 2, yy + t1.length * 15, t2, {fs: 11, fill: css("--muted"), lh: 14, vc: false});
    if(i < n.length - 1){ var r2 = Math.floor((i + 1) / per);
      if(r2 === r){ var nx = s.snake && r % 2 ? x - 4 : x + bw + 4, ex = s.snake && r % 2 ? x - gap + 4 : x + bw + gap - 4; out += line(nx, y + bh / 2, ex, y + bh / 2, {arrow: true}); }
      else { out += line(x + bw / 2, y + bh + 3, x + bw / 2, y + bh + 27, {arrow: true}); } } });
  return svg(W, H, out);
};

/* tree: root, b=[[label, "leaf|leaf", color]] */
R.tree = function(s){
  var b = s.b, W = 760, n = b.length, cw = (W - 20) / n, maxL = 0;
  b.forEach(function(x){ var L = (x[1] || "").split("|").filter(Boolean); var c = 0; L.forEach(function(l){ c += wrap(l, Math.floor(cw / 7)).length; }); if(c > maxL) maxL = c; });
  var H = 150 + maxL * 15 + 40, out = "";
  var rl = wrap(s.root, 70); out += rect(W / 2 - 230, 10, 460, 18 + rl.length * 15, {stroke: C("accent"), sw: 1.8, fill: css("--accent-soft")}); out += txt(W / 2, 19 + rl.length * 7.5, rl, {fw: 600});
  var ry = 28 + rl.length * 15;
  b.forEach(function(x, i){ var cx = 10 + cw * i + cw / 2; out += line(W / 2, ry, cx, 78, {arrow: true});
    var lb = wrap(x[0], Math.floor(cw / 7.2)); out += rect(cx - cw / 2 + 6, 80, cw - 12, 14 + lb.length * 15, {stroke: C(x[2]), sw: 1.6}); out += txt(cx, 87 + lb.length * 7.5, lb, {fw: 600, fill: C(x[2])});
    var y = 104 + lb.length * 15; (x[1] || "").split("|").filter(Boolean).forEach(function(l){ var ll = wrap(l, Math.floor(cw / 7)); out += txt(cx, y + (ll.length - 1) * 7.5, ll, {fs: 11.5}); y += ll.length * 15 + 4; }); });
  return svg(W, H, out);
};

/* bars: items=[[label, value, color]], unit, max, th=[[v,label]] */
R.bars = function(s){
  var it = s.items, W = 760, lw = s.lw || 230, top = 14, bh = 24, gap = 10, H = top + it.length * (bh + gap) + 34, mx = s.max || Math.max.apply(null, it.map(function(d){ return d[1]; })) * 1.1, aw = W - lw - 70, out = "";
  function X(v){ return lw + v / mx * aw; }
  for(var g = 0; g <= 4; g++){ var gv = mx * g / 4, gx = X(gv); out += line(gx, top - 4, gx, H - 26, {c: css("--plot-grid"), w: 1}); out += txt(gx, H - 14, (function(v){ v = String(+v.toFixed(s.dp || 0)).replace(".", ","); return s.fmt ? s.fmt.replace("{}", v) : v; })(gv) + (s.unit || ""), {fs: 10.5, mono: true, fill: css("--muted")}); }
  it.forEach(function(d, i){ var y = top + i * (bh + gap); out += txt(lw - 10, y + bh / 2, d[0], {a: "end", fs: 12}); out += '<rect x="' + lw + '" y="' + y + '" width="' + Math.max(1, X(d[1]) - lw) + '" height="' + bh + '" rx="4" fill="' + C(d[2]) + '" fill-opacity=".85"/>'; out += txt(X(d[1]) + 6, y + bh / 2, (d[3] || (String(d[1]).replace(".", ",") + (s.unit || ""))), {a: "start", fs: 11.5, mono: true}); });
  (s.th || []).forEach(function(t){ var x = X(t[0]); out += line(x, top - 6, x, H - 26, {c: C(t[2] || "bad"), dash: true, w: 1.5}); out += txt(x + 4, top + 2, t[1], {a: "start", fs: 11, fill: C(t[2] || "bad"), fw: 600}); });
  return svg(W, H, out);
};

/* heat: cols, rows=[[name,[v..]]], v: 0 âm,1 mờ,2 dương,3 sáng, -1 không xét, 0.5 ± */
R.heat = function(s){
  var cols = s.cols, rows = s.rows, lw = s.lw || 170, cw = Math.min(90, (760 - lw - 12) / cols.length), W = 760, ch = 26, H = 44 + rows.length * ch + 30, out = "";
  var lab = {"-1": "", "0": "−", "0.5": "±", "1": "mờ", "2": "+", "3": "++"};
  cols.forEach(function(c, j){ out += txt(lw + cw * j + cw / 2, 26, wrap(c, 9), {fs: 10.5, fw: 600, lh: 12}); });
  rows.forEach(function(r, i){ var y = 44 + i * ch; out += txt(lw - 8, y + ch / 2, r[0], {a: "end", fs: 11.5, fw: 500});
    r[1].forEach(function(v, j){ var x = lw + cw * j, op = v < 0 ? 0 : [0.04, 0.28, 0.55, 0.92][Math.round(v * 2) / 2 === 0.5 ? 1 : Math.min(3, Math.round(v))] ; if(v === 0.5) op = 0.18;
      out += '<rect x="' + (x + 1.5) + '" y="' + (y + 1.5) + '" width="' + (cw - 3) + '" height="' + (ch - 3) + '" rx="4" fill="' + C(s.c || "accent") + '" fill-opacity="' + op + '" stroke="' + css("--line") + '"/>';
      out += txt(x + cw / 2, y + ch / 2, lab[String(v)] || "", {fs: 11, fw: 600, fill: v >= 2 ? "#fff" : css("--ink"), mono: true}); }); });
  var ly = H - 14, items = [["−", 0.04], ["±", 0.18], ["mờ", 0.28], ["+", 0.55], ["++ sáng", 0.92]], lx = lw;
  items.forEach(function(it){ out += '<rect x="' + lx + '" y="' + (ly - 8) + '" width="16" height="16" rx="3" fill="' + C(s.c || "accent") + '" fill-opacity="' + it[1] + '" stroke="' + css("--line") + '"/>' + txt(lx + 22, ly, it[0], {a: "start", fs: 11}); lx += 78; });
  return svg(W, H, out);
};

/* spec: emission spectra with filter bands */
var DYE = {FITC:[520,18,"b488"], PE:[576,16,"b488"], ECD:[615,18,"b488"], "PC5.5":[695,22,"b488"], PC5:[667,18,"b488"], PC7:[778,26,"b488"], APC:[660,17,"r638"], "APC-A700":[719,18,"r638"], "APC-A750":[775,24,"r638"], PB:[455,18,"v405"], KrO:[528,22,"v405"], "7-AAD":[647,30,"b488"]};
var FILT = {FL1:[505,545], FL2:[560,590], FL3:[604,624], FL4:[680,710], FL5:[755,800], FL6:[650,670], FL7:[715,735], FL8:[755,800], FL9:[425,475], FL10:[530,570]};
R.spec = function(s){
  var W = 760, H = 270, L = 50, Rr = 14, T = 16, B = 40, x0 = s.from || 400, x1 = s.to || 800, out = "";
  function X(nm){ return L + (nm - x0) / (x1 - x0) * (W - L - Rr); } function Y(v){ return T + (1 - v) * (H - T - B); }
  (s.filters || []).forEach(function(f){ var b = FILT[f]; out += '<rect x="' + X(b[0]) + '" y="' + T + '" width="' + (X(b[1]) - X(b[0])) + '" height="' + (H - T - B) + '" fill="' + css("--muted") + '" fill-opacity=".14"/>' + txt((X(b[0]) + X(b[1])) / 2, T + 10, f, {fs: 10.5, mono: true, fill: css("--muted")}); });
  for(var nm = x0; nm <= x1; nm += 50){ out += line(X(nm), H - B, X(nm), H - B + 4, {w: 1}); out += txt(X(nm), H - B + 16, nm, {fs: 10.5, mono: true, fill: css("--muted")}); }
  out += txt((L + W) / 2, H - 6, "Bước sóng (nm)", {fs: 11.5}); out += line(L, H - B, W - Rr, H - B, {w: 1});
  (s.lasers || []).forEach(function(l){ var c = l === 405 ? "v405" : l === 488 ? "b488" : "r638"; out += line(X(l), T, X(l), H - B, {c: C(c), w: 2.5}); out += txt(X(l) + 4, T + 24, l + " nm", {a: "start", fs: 10.5, fill: C(c), fw: 600}); });
  s.dyes.forEach(function(d){ var p = DYE[d]; if(!p) return; var path = "", pk = p[0], wd = p[1];
    for(var nm = x0; nm <= x1; nm += 2){ var z = (nm - pk) / (nm < pk ? wd * 0.8 : wd * 1.7); var v = Math.exp(-z * z / 2) * (d === s.hl || !s.hl ? 0.92 : 0.6); path += (path ? "L" : "M") + X(nm).toFixed(1) + "," + Y(v).toFixed(1); }
    out += '<path d="' + path + '" fill="none" stroke="' + C(p[2]) + '" stroke-width="' + (d === s.hl ? 3 : 1.8) + '"' + (s.hl && d !== s.hl ? ' stroke-opacity=".55"' : '') + '/>'; out += txt(X(pk), Y(0.97), d, {fs: 11, fw: 600, fill: C(p[2])}); });
  if(s.note) out += txt(W - Rr - 4, T + 10, s.note, {a: "end", fs: 10.5, fill: css("--muted"), mono: true});
  return svg(W, H, out);
};

/* pulse */
R.pulse = function(s){
  var W = 760, H = 250, out = "", base = 200;
  function pulse(cx, w, h, col, shade){ var p = "M" + (cx - w * 1.6) + "," + base; for(var t = -1.6; t <= 1.6; t += 0.05){ p += " L" + (cx + t * w).toFixed(1) + "," + (base - h * Math.exp(-t * t * 2.2)).toFixed(1); } if(shade) out += '<path d="' + p + ' Z" fill="' + C(col) + '" fill-opacity=".18"/>'; out += '<path d="' + p + '" fill="none" stroke="' + C(col) + '" stroke-width="2.2"/>'; }
  out += line(30, base, W - 20, base, {w: 1}); out += txt(W - 24, base + 16, "thời gian", {a: "end", fs: 11, fill: css("--muted")});
  if(s.mode === "doublet"){
    pulse(200, 34, 130, "b488", true); out += txt(200, 40, "Singlet", {fw: 600, fill: C("b488")});
    var p = "M" + (500 - 80) + "," + base; for(var t = -2.6; t <= 2.6; t += 0.05){ var v = Math.exp(-Math.pow(t + 0.8, 2) * 2.2) + Math.exp(-Math.pow(t - 0.8, 2) * 2.2); p += " L" + (500 + t * 34).toFixed(1) + "," + (base - 130 * Math.min(v, 1.25)).toFixed(1); }
    out += '<path d="' + p + ' Z" fill="' + C("r638") + '" fill-opacity=".18"/><path d="' + p + '" fill="none" stroke="' + C("r638") + '" stroke-width="2.2"/>' + txt(500, 40, "Doublet: INT gần gấp đôi, PEAK tăng ít, TOF dài", {fw: 600, fill: C("r638")});
    out += line(420, base + 20, 580, base + 20, {c: C("r638")}) + txt(500, base + 34, "TOF dài", {fs: 11, fill: C("r638")}); out += line(150, base + 20, 250, base + 20, {c: C("b488")}) + txt(200, base + 34, "TOF", {fs: 11, fill: C("b488")});
  } else {
    pulse(380, 60, 140, "b488", true);
    out += line(380, base, 380, base - 140, {c: C("r638"), dash: true}) + txt(392, base - 150, "PEAK = chiều cao", {a: "start", fs: 12, fw: 600, fill: C("r638")});
    out += txt(380, base - 40, "INT = diện tích", {fs: 12, fw: 600, fill: C("b488")});
    out += line(328, base + 18, 432, base + 18, {c: C("v405"), w: 2}) + txt(380, base + 32, "TOF = độ rộng xung", {fs: 12, fw: 600, fill: C("v405")});
    out += '<ellipse cx="120" cy="120" rx="22" ry="60" fill="' + C("b488") + '" fill-opacity=".18" stroke="' + C("b488") + '"/>' + txt(120, 196, "chùm laser", {fs: 11, fill: css("--muted")}) + '<circle cx="120" cy="110" r="13" fill="' + css("--surface") + '" stroke="' + css("--ink") + '"/>' + txt(120, 34, "tế bào đi qua", {fs: 11, fill: css("--muted")}) + line(120, 46, 120, 92, {arrow: true});
  }
  return svg(W, H, out);
};

/* scale: zones=[[from,to,label,color]], marks=[[v,label,color]] */
R.scale = function(s){
  var W = 760, L = 30, Rr = 30, y = 90, H = 160, mn = s.min || 0, mx = s.max || 100, out = "";
  function X(v){ if(s.log){ return L + (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)) * (W - L - Rr); } return L + (v - mn) / (mx - mn) * (W - L - Rr); }
  (s.zones || []).forEach(function(z, i){ var x = X(z[0]), w = X(z[1]) - x; out += '<rect x="' + x + '" y="' + (y - 22) + '" width="' + w + '" height="44" fill="' + C(z[3]) + '" fill-opacity=".22" stroke="' + C(z[3]) + '"/>' + txt(x + w / 2, y, wrap(z[2], Math.max(8, Math.floor(w / 7))), {fs: 11.5, fw: 600, lh: 13}); });
  out += line(L, y + 26, W - Rr, y + 26, {w: 1});
  (s.ticks || []).forEach(function(t){ out += line(X(t[0]), y + 26, X(t[0]), y + 31, {w: 1}) + txt(X(t[0]), y + 43, t[1], {fs: 10.5, mono: true, fill: css("--muted")}); });
  (s.marks || []).forEach(function(m, i){ var x = X(m[0]), up = i % 2 === 0; out += line(x, y - 28, x, up ? 30 : y + 50, {c: C(m[2] || "bad"), w: 2}); out += txt(x, up ? 20 : y + 62, m[1], {fs: 11, fw: 600, fill: C(m[2] || "bad")}); });
  if(s.unit) out += txt(W - Rr, y + 58, s.unit, {a: "end", fs: 11, fill: css("--muted")});
  return svg(W, H + 10, out);
};


/* axes: rows=[[name,"lin"|"log",min,max,ticks]], pts=[[v,label,color]] — cùng giá trị trên nhiều thang */
R.axes = function(s){
  var W = 760, L = 40, Rr = 40, rh = 142, H = s.rows.length * rh + 6, out = "";
  s.rows.forEach(function(r, ri){
    var y = ri * rh + 104, lg = r[1] === "log", mn = r[2], mx = r[3];
    function X(v){ if(lg){ v = Math.max(v, mn); return L + (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)) * (W - L - Rr); } return L + (v - mn) / (mx - mn) * (W - L - Rr); }
    function ch(v){ return lg ? Math.min(1023, Math.round((Math.log10(Math.max(v, mn)) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)) * 1024)) : Math.round((v - mn) / (mx - mn) * 1023); }
    out += txt(L, ri * rh + 16, r[0], {a: "start", fw: 700, fs: 12.5});
    out += line(L, y, W - Rr, y, {w: 2});
    (r[4] || []).forEach(function(t){ out += line(X(t[0]), y, X(t[0]), y + 6, {w: 1}) + txt(X(t[0]), y + 18, t[1], {fs: 10.5, mono: true, fill: css("--muted")}); });
    var xs = s.pts.map(function(pt){ return X(pt[0]); }), grp = [], g = -1, lastX = -999;
    xs.forEach(function(x){ if(x - lastX >= 150){ g++; grp[g] = []; } grp[g].push(x); lastX = x; });
    var lv = [], k = 0; grp.forEach(function(G){ G.forEach(function(x, j){ lv[k++] = G.length - 1 - j; }); });
    s.pts.forEach(function(pt, pi){ var x = xs[pi], lvl = lv[pi];
      var ly = y - 18 - lvl * 19;
      out += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + C(pt[2]) + '" stroke="' + css("--plot-bg") + '" stroke-width="1.5"/>';
      out += line(x, y - 7, x, ly + 6, {c: C(pt[2]), w: 1});
      out += txt(x + 4, ly, pt[1] + " · kênh ~" + ch(pt[0]), {a: "start", fs: 11, fw: 600, fill: C(pt[2])}); });
  });
  return svg(W, H, out);
};

/* time: items=[[when,label,color]] */
R.time = function(s){
  var it = s.items, W = 760, L = 95, Rr = 95, y = 110, H = 220, out = "";
  out += line(L - 20, y, W - Rr + 20, y, {w: 2, arrow: true});
  it.forEach(function(d, i){ var x = L + i * (W - L - Rr) / Math.max(1, it.length - 1), up = i % 2 === 0;
    out += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + C(d[2]) + '"/>' + txt(x, y + (up ? -20 : 22), d[0], {fs: 11.5, fw: 600, mono: true});
    out += txt(x, y + (up ? -58 : 60), wrap(d[1], 22), {fs: 11.5, lh: 14}); });
  return svg(W, H, out);
};

/* cycle */
R.cycle = function(s){
  var n = s.n, W = 760, H = 340, cx = 380, cy = 170, rr = 120, out = "";
  out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="none" stroke="' + css("--line") + '" stroke-width="2" stroke-dasharray="6 5"/>';
  if(s.center) out += txt(cx, cy, wrap(s.center, 18), {fw: 700, fs: 13, fill: C("accent")});
  n.forEach(function(d, i){ var a = -Math.PI / 2 + i * 2 * Math.PI / n.length, x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a); var lb = wrap(d[0], 20);
    out += rect(x - 92, y - 10 - lb.length * 8, 184, 20 + lb.length * 16, {stroke: C(d[1]), sw: 1.6}) + txt(x, y, lb, {fs: 11.5, fw: 600, lh: 15});
    var a2 = a + Math.PI / n.length, ax = cx + (rr + 2) * Math.cos(a2), ay = cy + (rr + 2) * Math.sin(a2); out += '<path d="M' + (ax - 6 * Math.sin(a2) - 0) + ',' + (ay) + ' l0,0" />' + '<circle cx="' + ax + '" cy="' + ay + '" r="4" fill="' + css("--muted") + '"/>'; });
  return svg(W, H, out);
};

/* cmp: panels=[[title,[points],color]] */
R.cmp = function(s){
  var p = s.p, W = 760, n = p.length, pw = (W - 24 - (n - 1) * 16) / n, maxh = 0, blocks = [];
  p.forEach(function(d){ var pts = d[1].map(function(t){ return wrap(t, Math.floor(pw / 7.2) - 3); }); var h = 50 + pts.reduce(function(a, b){ return a + b.length * 15 + 6; }, 0); blocks.push(pts); if(h > maxh) maxh = h; });
  var H = maxh + 24, out = "";
  p.forEach(function(d, i){ var x = 12 + i * (pw + 16); out += rect(x, 12, pw, maxh, {stroke: C(d[2]), sw: 1.6}); out += '<rect x="' + x + '" y="12" width="' + pw + '" height="34" rx="8" fill="' + C(d[2]) + '" fill-opacity=".16"/>' + txt(x + pw / 2, 29, wrap(d[0], Math.floor(pw / 7.5)), {fw: 700, fill: C(d[2]), lh: 13});
    var y = 62; blocks[i].forEach(function(L){ out += '<circle cx="' + (x + 16) + '" cy="' + (y) + '" r="3" fill="' + C(d[2]) + '"/>' + txt(x + 26, y, L, {a: "start", fs: 11.5, vc: false, lh: 15}); y += L.length * 15 + 6; }); });
  return svg(W, H, out);
};

/* cards: items=[[title, sub, color]], per */
R.cards = function(s){
  var it = s.items, per = s.per || 4, W = 760, gap = 12, cw = (W - 24 - gap * (per - 1)) / per, ch = s.h || 76, rows = Math.ceil(it.length / per), H = 12 + rows * (ch + gap), out = "";
  it.forEach(function(d, i){ var r = Math.floor(i / per), k = i % per, x = 12 + k * (cw + gap), y = 12 + r * (ch + gap);
    out += rect(x, y, cw, ch, {stroke: C(d[2]), sw: 1.4}) + '<rect x="' + x + '" y="' + y + '" width="5" height="' + ch + '" rx="2" fill="' + C(d[2]) + '"/>';
    var t1 = wrap(d[0], Math.floor(cw / 7.6)), t2 = d[1] ? wrap(d[1], Math.floor(cw / 6.6)) : []; var tot = t1.length * 15 + t2.length * 13.5, yy = y + ch / 2 - tot / 2 + 8;
    out += txt(x + cw / 2 + 2, yy, t1, {fw: 600, fs: 12, vc: false}); if(t2.length) out += txt(x + cw / 2 + 2, yy + t1.length * 15, t2, {fs: 10.8, fill: css("--muted"), lh: 13.5, vc: false}); });
  return svg(W, H, out);
};

/* line chart: series=[[name,[[x,y]...],color]], xl, yl, logx, logy */
R.line = function(s){
  var W = 760, H = 300, L = 60, Rr = 20, T = 20, B = 46, out = "", xs = [], ys = [];
  s.series.forEach(function(se){ se[1].forEach(function(p){ xs.push(p[0]); ys.push(p[1]); }); });
  var xmn = s.xmin !== undefined ? s.xmin : Math.min.apply(null, xs), xmx = s.xmax || Math.max.apply(null, xs), ymn = s.ymin !== undefined ? s.ymin : 0, ymx = s.ymax || Math.max.apply(null, ys) * 1.1;
  function f(v, mn, mx, lg){ return lg ? (Math.log10(v) - Math.log10(mn)) / (Math.log10(mx) - Math.log10(mn)) : (v - mn) / (mx - mn); }
  function X(v){ return L + f(v, xmn, xmx, s.logx) * (W - L - Rr); } function Y(v){ return T + (1 - f(v, ymn, ymx, s.logy)) * (H - T - B); }
  (s.xt || []).forEach(function(t){ out += line(X(t[0]), T, X(t[0]), H - B, {c: css("--plot-grid"), w: 1}) + txt(X(t[0]), H - B + 15, t[1], {fs: 10.5, mono: true, fill: css("--muted")}); });
  (s.yt || []).forEach(function(t){ out += line(L, Y(t[0]), W - Rr, Y(t[0]), {c: css("--plot-grid"), w: 1}) + txt(L - 6, Y(t[0]), t[1], {a: "end", fs: 10.5, mono: true, fill: css("--muted")}); });
  out += '<rect x="' + L + '" y="' + T + '" width="' + (W - L - Rr) + '" height="' + (H - T - B) + '" fill="none" stroke="' + css("--line") + '"/>';
  (s.hl || []).forEach(function(h){ out += line(L, Y(h[0]), W - Rr, Y(h[0]), {c: C(h[2] || "bad"), dash: true}) + txt(W - Rr - 4, Y(h[0]) - 8, h[1], {a: "end", fs: 11, fw: 600, fill: C(h[2] || "bad")}); });
  (s.vl || []).forEach(function(h){ out += line(X(h[0]), T, X(h[0]), H - B, {c: C(h[2] || "bad"), dash: true}) + txt(X(h[0]) + 4, T + 12, h[1], {a: "start", fs: 11, fw: 600, fill: C(h[2] || "bad")}); });
  s.series.forEach(function(se){ var p = se[1].map(function(q, i){ return (i ? "L" : "M") + X(q[0]).toFixed(1) + "," + Y(q[1]).toFixed(1); }).join(""); out += '<path d="' + p + '" fill="none" stroke="' + C(se[2]) + '" stroke-width="2.4"/>'; if(se[1].length < 40) se[1].forEach(function(q){ out += '<circle cx="' + X(q[0]) + '" cy="' + Y(q[1]) + '" r="3.2" fill="' + C(se[2]) + '"/>'; }); var lp = se[1][se[1].length - 1]; if(se[0]) out += txt(X(lp[0]) - 4, Y(lp[1]) - 12, se[0], {a: "end", fs: 11.5, fw: 600, fill: C(se[2])}); });
  out += txt((L + W - Rr) / 2, H - 8, s.xl || "", {fs: 11.5}); out += '<text x="16" y="' + (T + (H - T - B) / 2) + '" transform="rotate(-90 16 ' + (T + (H - T - B) / 2) + ')" text-anchor="middle" font-size="11.5" font-family="' + css("--f-body") + '" fill="' + css("--ink") + '">' + esc(s.yl || "") + '</text>';
  return svg(W, H, out);
};

/* schematic drawings */
var S = {};
S.system = function(){ var out = "", W = 760, H = 230;
  [["Fluidics","Hội tụ thủy động, ống mẫu, IsoFlow","accent",20],["Optics","3 laser, kính lưỡng sắc, kính băng thông","b488",270],["Electronics","PMT, xung INT/PEAK/TOF, ADC, LMD","v405",520]].forEach(function(b){ out += rect(b[3], 50, 220, 110, {stroke: C(b[2]), sw: 2}) + txt(b[3] + 110, 82, b[0], {fw: 700, fs: 15, fill: C(b[2])}) + txt(b[3] + 110, 122, wrap(b[1], 28), {fs: 11.5}); });
  out += line(242, 105, 268, 105, {arrow: true, w: 2}) + line(492, 105, 518, 105, {arrow: true, w: 2}) + txt(380, 196, "Mỗi tế bào → 1 sự kiện với nhiều tham số (FS, SS, FL1–FL10, TIME)", {fs: 12, fw: 600}); return svg(W, H, out); };
S.focus = function(){ var out = "", W = 760, H = 280;
  out += '<path d="M220,20 L320,150 L320,270 M540,20 L440,150 L440,270" fill="none" stroke="' + css("--ink") + '" stroke-width="2.4"/>';
  out += '<path d="M380,20 L380,60" stroke="' + C("r638") + '" stroke-width="10"/><path d="M380,60 C380,100 380,120 380,150 L380,270" stroke="' + C("r638") + '" stroke-width="3"/>';
  for(var i = 0; i < 6; i++) out += '<circle cx="380" cy="' + (160 + i * 18) + '" r="5" fill="' + css("--surface") + '" stroke="' + C("r638") + '" stroke-width="1.6"/>';
  out += '<ellipse cx="380" cy="215" rx="70" ry="6" fill="' + C("b488") + '" fill-opacity=".45"/>' + txt(470, 215, "chùm laser elip", {a: "start", fs: 12, fill: C("b488"), fw: 600});
  out += txt(250, 100, "Sheath (IsoFlow)", {fs: 12, fill: C("accent"), fw: 600}) + txt(520, 100, "Sheath", {fs: 12, fill: C("accent"), fw: 600}) + txt(380, 12, "Mẫu", {fs: 12, fill: C("r638"), fw: 600}) + txt(180, 220, wrap("Lõi mẫu bị ép mảnh, tế bào đi từng chiếc qua tâm chùm tia", 26), {fs: 11.5});
  return svg(W, H, out); };
S.beams = function(){ var out = "", W = 760, H = 270; out += line(380, 10, 380, 260, {c: css("--ink"), w: 2}) + txt(392, 20, "dòng tế bào ↓", {a: "start", fs: 11, fill: css("--muted")});
  [["405 nm · 6 × 150 µm","v405",70,75],["488 nm · 8 × 80 µm","b488",135,40],["638 nm · 11 × 160 µm","r638",200,80]].forEach(function(b){ out += '<ellipse cx="380" cy="' + b[2] + '" rx="' + b[3] * 1.6 + '" ry="' + 9 + '" fill="' + C(b[1]) + '" fill-opacity=".35" stroke="' + C(b[1]) + '"/>' + txt(380 + b[3] * 1.6 + 14, b[2], b[0], {a: "start", fs: 12, fw: 600, fill: C(b[1])}); });
  out += line(150, 70, 150, 135, {arrow: true}) + line(150, 135, 150, 200, {arrow: true}) + txt(110, 104, "90 µm", {fs: 11, mono: true}) + txt(110, 168, "90 µm", {fs: 11, mono: true}) + txt(380, 250, "Thứ tự trên hình minh họa; khoảng cách theo spec IFU, kích thước không theo tỷ lệ", {fs: 10.5, fill: css("--muted")}); return svg(W, H, out); };
S.scatter = function(){ var out = "", W = 760, H = 260; out += line(40, 130, 330, 130, {c: C("b488"), w: 4}) + txt(120, 116, "Laser 488 nm", {fs: 12, fill: C("b488"), fw: 600}) + '<circle cx="340" cy="130" r="22" fill="' + css("--surface") + '" stroke="' + css("--ink") + '" stroke-width="2"/>' + txt(340, 130, "tế bào", {fs: 10});
  out += '<path d="M362,130 L700,95 L700,165 Z" fill="' + C("accent") + '" fill-opacity=".18" stroke="' + C("accent") + '"/>' + txt(640, 130, "FS: góc nhỏ (1–19°) ≈ kích thước", {a: "end", fs: 12, fw: 600, fill: C("accent")});
  out += line(340, 108, 340, 20, {c: C("warn"), w: 3, arrow: true}) + txt(352, 40, "SS 90° ≈ độ hạt", {a: "start", fs: 12, fw: 600, fill: C("warn")}) + line(340, 152, 340, 240, {c: C("v405"), w: 2, dash: true, arrow: true}) + txt(352, 225, "Huỳnh quang phát mọi hướng, thu ở 90°", {a: "start", fs: 12, fill: C("v405"), fw: 600}); return svg(W, H, out); };
S.stokes = function(){ var out = "", W = 760, H = 250, L = 50, B = 40;
  function X(n){ return L + (n - 400) / 300 * (W - 70); } function Y(v){ return 40 + (1 - v) * (H - 80); }
  var a = "", e = ""; for(var n = 400; n <= 700; n += 2){ var za = (n - 495) / 22, ze = (n - 520) / (n < 520 ? 16 : 30); a += (a ? "L" : "M") + X(n) + "," + Y(Math.exp(-za * za / 2)); e += (e ? "L" : "M") + X(n) + "," + Y(Math.exp(-ze * ze / 2)); }
  out += '<path d="' + a + '" fill="none" stroke="' + C("b488") + '" stroke-width="2.4" stroke-dasharray="6 4"/><path d="' + e + '" fill="none" stroke="' + C("ok") + '" stroke-width="2.6"/>';
  out += txt(X(470), Y(1.02), "Hấp thụ FITC", {fs: 12, fw: 600, fill: C("b488")}) + txt(X(575), Y(0.7), "Phát xạ FITC", {fs: 12, fw: 600, fill: C("ok")}) + line(X(495), Y(1.08), X(520), Y(1.08), {arrow: true, c: C("r638"), w: 2}) + txt(X(560), Y(1.08), "độ dịch Stokes", {fs: 11.5, fill: C("r638"), fw: 600});
  for(var t = 400; t <= 700; t += 50) out += txt(X(t), H - 14, t + " nm", {fs: 10.5, mono: true, fill: css("--muted")}); return svg(W, H, out); };
S.tandem = function(){ var out = "", W = 760, H = 210;
  out += '<circle cx="230" cy="100" r="54" fill="' + C("warn") + '" fill-opacity=".2" stroke="' + C("warn") + '" stroke-width="2"/>' + txt(230, 100, "PE (cho)", {fw: 700}) + '<circle cx="470" cy="100" r="40" fill="' + C("r638") + '" fill-opacity=".2" stroke="' + C("r638") + '" stroke-width="2"/>' + txt(470, 100, "Cy7 (nhận)", {fw: 700});
  out += line(60, 100, 172, 100, {c: C("b488"), w: 3, arrow: true}) + txt(110, 84, "488 nm", {fs: 11.5, fill: C("b488"), fw: 600}) + line(286, 100, 428, 100, {c: C("ok"), w: 2.5, arrow: true}) + txt(357, 84, "FRET", {fs: 12, fw: 700, fill: C("ok")}) + line(512, 100, 700, 100, {c: C("r638"), w: 3, arrow: true}) + txt(620, 84, "~780 nm → FL5", {fs: 11.5, fill: C("r638"), fw: 600});
  out += line(230, 156, 230, 196, {c: C("bad"), dash: true, arrow: true}) + txt(420, 186, "Tandem hỏng: phát ở ~575 nm → lọt vào FL2 (PE), dương giả", {fs: 11.5, fill: C("bad"), fw: 600}); return svg(W, H, out); };
S.optics = function(){ var out = "", W = 760, H = 250; var d = [["595 DC SP","FL1 525/40","FITC"],["595 DC SP","FL2 575/30","PE"],["655 DC SP","FL3 614/20","ECD"],["730 DC SP","FL4 695/30","PC5.5"],["","FL5 755 LP","PC7"]];
  out += line(20, 130, 730, 130, {c: C("b488"), w: 3}) + txt(60, 116, "ánh sáng thu từ laser 488", {a: "start", fs: 11, fill: C("b488"), fw: 600});
  d.forEach(function(x, i){ var cx = 140 + i * 130; if(x[0]) out += '<line x1="' + (cx - 16) + '" y1="146" x2="' + (cx + 16) + '" y2="114" stroke="' + C("accent") + '" stroke-width="4"/>' + txt(cx, 162, x[0], {fs: 10, mono: true, fill: C("accent")});
    out += line(cx, 112, cx, 64, {arrow: true}) + rect(cx - 52, 18, 104, 44, {stroke: C("v405"), sw: 1.6}) + txt(cx, 32, "PMT " + x[1].split(" ")[0], {fs: 11, fw: 700}) + txt(cx, 50, x[1].split(" ").slice(1).join(" ") + " · " + x[2], {fs: 10.5, fill: css("--muted")}); });
  out += txt(380, 222, "Sơ đồ đơn giản hóa thứ tự tách màu trên laser xanh; vị trí kính thực tế theo Figure 3.5 của IFU", {fs: 10.5, fill: css("--muted")}); return svg(W, H, out); };
S.pmt = function(){ var out = "", W = 760, H = 220; out += rect(60, 60, 600, 100, {stroke: css("--ink"), sw: 1.5, r: 40}) + line(10, 110, 70, 110, {c: C("ok"), w: 3, arrow: true}) + txt(36, 94, "photon", {fs: 11, fill: C("ok")});
  out += '<rect x="80" y="80" width="10" height="60" fill="' + C("warn") + '"/>' + txt(85, 178, "photocathode", {fs: 10.5});
  for(var i = 0; i < 7; i++){ var x = 140 + i * 66, y = i % 2 ? 130 : 90; out += '<rect x="' + x + '" y="' + (y - 6) + '" width="34" height="12" rx="3" fill="' + C("accent") + '"/>'; if(i < 6) out += line(x + 34, y, x + 66, i % 2 ? 90 : 130, {c: C("v405"), arrow: true}); }
  out += txt(380, 40, "Dynode nhân electron; hệ số nhân tăng theo điện áp (Navios: 250–1000 V)", {fs: 12, fw: 600}) + txt(640, 178, "anode → xung điện", {fs: 10.5}); return svg(W, H, out); };
S.lmd = function(){ var cols = ["Sự kiện","FS INT","FS PEAK","SS INT","FL1 INT","FL2 INT","…","FL10 INT","TIME"], rows = [["1","412","388","130","22","5","…","812","0,001"],["2","398","371","720","35","8","…","402","0,001"],["3","780","402","145","18","640","…","798","0,002"],["…","…","…","…","…","…","…","…","…"]]; var W = 760, cw = 84, out = "";
  cols.forEach(function(c, j){ out += rect(4 + j * cw, 14, cw - 2, 28, {fill: css("--accent-soft"), r: 3}) + txt(4 + j * cw + cw / 2, 28, c, {fs: 10.5, fw: 600}); });
  rows.forEach(function(r, i){ r.forEach(function(v, j){ out += rect(4 + j * cw, 46 + i * 28, cw - 2, 26, {r: 3}) + txt(4 + j * cw + cw / 2, 59 + i * 28, v, {fs: 11, mono: true, fill: i === 2 ? C("r638") : css("--ink")}); }); });
  out += txt(380, 182, "File LMD/FCS: mỗi dòng là một tế bào, mỗi cột là một tham số; header lưu cytosettings, ma trận bù, công suất laser", {fs: 11}); return svg(W, 200, out); };
S.scales = function(){ var out = "", W = 760, H = 220; out += txt(380, 18, "Cùng một quần thể âm sau bù trên hai thang", {fw: 600});
  out += line(60, 90, 700, 90, {w: 1}) + txt(40, 90, "Log", {a: "end", fs: 11.5, fw: 600}); for(var i = 0; i < 120; i++){ out += '<rect x="' + (60 + Math.random() * 4) + '" y="' + (60 + Math.random() * 26) + '" width="2" height="2" fill="' + C("r638") + '"/>'; } for(i = 0; i < 80; i++) out += '<rect x="' + (64 + Math.random() * 60) + '" y="' + (60 + Math.random() * 26) + '" width="2" height="2" fill="' + C("r638") + '"/>'; out += txt(220, 74, "dồn sát trục → tưởng bù quá", {a: "start", fs: 11.5, fill: C("r638")});
  out += line(60, 180, 700, 180, {w: 1}) + txt(40, 180, "Logicle", {a: "end", fs: 11.5, fw: 600}); for(i = 0; i < 200; i++){ var z = (Math.random() + Math.random() + Math.random() - 1.5) * 50; out += '<rect x="' + (170 + z) + '" y="' + (150 + Math.random() * 26) + '" width="2" height="2" fill="' + C("b488") + '"/>'; } out += line(170, 140, 170, 186, {c: C("muted"), dash: true}) + txt(170, 200, "0", {fs: 11, mono: true}) + txt(260, 160, "hình chuông quanh 0 → đánh giá đúng", {a: "start", fs: 11.5, fill: C("b488")}); return svg(W, H, out); };
S.matrix = function(){ var out = "", W = 760, H = 210; function m(x, y, lab, vals, col){ out += txt(x + 60, y - 12, lab, {fw: 700, fill: C(col)}); vals.forEach(function(r, i){ r.forEach(function(v, j){ out += rect(x + j * 40, y + i * 34, 38, 32, {r: 4, stroke: C(col)}) + txt(x + j * 40 + 19, y + i * 34 + 16, v, {fs: 11, mono: true}); }); }); }
  m(40, 50, "O (đo được)", [["FL1"],["FL2"],["FL3"]], "warn"); out += txt(110, 100, "=", {fs: 22});
  m(140, 50, "S (spillover)", [["1","1,5","0"],["14,7","1","0,5"],["2","25","1"]], "accent"); out += txt(282, 100, "×", {fs: 22});
  m(300, 50, "T (thật)", [["FITC"],["PE"],["ECD"]], "b488"); out += txt(420, 100, "⇒", {fs: 22}); out += txt(600, 100, wrap("T = S⁻¹ × (O − AF). Kaluza lưu S (%) và tự nghịch đảo.", 30), {fs: 12, fw: 600}); out += txt(380, 186, "Giá trị S minh họa (%); hàng = kênh nhận, cột = chất nhuộm gây lọt", {fs: 10.5, fill: css("--muted")}); return svg(W, H, out); };
S.workspace = function(){ var out = "", W = 760, H = 300; out += rect(10, 10, 740, 280, {r: 6}) + rect(10, 10, 740, 34, {fill: css("--accent-soft"), r: 6}) + txt(380, 27, "Ribbon: Plots & Tables · Gates & Tools · Edit · Page Layout", {fs: 11.5, fw: 600});
  out += rect(16, 50, 160, 234, {r: 4, stroke: C("b488")}) + txt(96, 66, "Analysis List", {fs: 11.5, fw: 700, fill: C("b488")}); ["Data set · protocol","BM_B.LMD · CLL10C","BM_T.LMD · CLL10C","Composite (4)"].forEach(function(t, i){ out += txt(96, 92 + i * 22, t, {fs: 10.5, mono: true}); });
  out += rect(184, 50, 400, 234, {r: 4, stroke: C("warn")}) + txt(384, 66, "Sheet: biểu đồ, cổng, bảng", {fs: 11.5, fw: 700, fill: C("warn")}); for(var i = 0; i < 4; i++){ out += rect(194 + (i % 2) * 192, 80 + Math.floor(i / 2) * 100, 182, 92, {r: 3}); }
  out += rect(592, 50, 152, 234, {r: 4, stroke: C("v405")}) + txt(668, 66, "Attributes pane", {fs: 11.5, fw: 700, fill: C("v405")}); ["Parameters","Compensation","Color Precedence","Protocol Options"].forEach(function(t, i){ out += rect(600, 80 + i * 48, 136, 40, {r: 4}) + txt(668, 100 + i * 48, t, {fs: 11}); }); return svg(W, H, out); };
S.radar = function(){ var out = "", W = 760, H = 300, cx = 380, cy = 150, r = 120; var ax = ["CD10","CD34","CD20","CD38","CD45","CD58","CD81"];
  ax.forEach(function(a, i){ var t = -Math.PI / 2 + i * 2 * Math.PI / ax.length; out += line(cx, cy, cx + r * Math.cos(t), cy + r * Math.sin(t), {c: css("--line")}) + txt(cx + (r + 22) * Math.cos(t), cy + (r + 14) * Math.sin(t), a, {fs: 11.5, fw: 600, mono: true}); });
  for(var i = 0; i < 160; i++){ var x = cx - 50 + (Math.random() - 0.5) * 60, y = cy + 20 + (Math.random() - 0.5) * 50; out += '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="' + C("#d13ab0") + '"/>'; }
  for(i = 0; i < 70; i++){ var x2 = cx + 55 + (Math.random() - 0.5) * 28, y2 = cy - 50 + (Math.random() - 0.5) * 26; out += '<circle cx="' + x2 + '" cy="' + y2 + '" r="1.8" fill="' + C("r638") + '"/>'; }
  out += txt(cx - 120, cy + 70, "hematogone", {fs: 11.5, fill: "#d13ab0", fw: 600}) + txt(cx + 150, cy - 80, "blast MRD", {fs: 11.5, fill: C("r638"), fw: 600}); return svg(W, H, out); };
S.boolean = function(){ var out = "", W = 760, H = 200; [["A AND B",0],["A OR B",1],["A AND (NOT B)",2]].forEach(function(b){ var x = 130 + b[1] * 250;
  var fa = b[1] === 1 || b[1] === 2 ? 0.45 : 0.08, fb = b[1] === 1 ? 0.45 : 0.08; out += '<circle cx="' + (x - 30) + '" cy="96" r="52" fill="' + C("b488") + '" fill-opacity="' + fa + '" stroke="' + C("b488") + '"/><circle cx="' + (x + 30) + '" cy="96" r="52" fill="' + C("warn") + '" fill-opacity="' + fb + '" stroke="' + C("warn") + '"/>';
  if(b[1] === 0) out += '<path d="M' + x + ',52 A52,52 0 0,1 ' + x + ',140 A52,52 0 0,1 ' + x + ',52" fill="' + C("accent") + '" fill-opacity=".6"/>';
  if(b[1] === 2) out += '<path d="M' + x + ',52 A52,52 0 0,1 ' + x + ',140 A52,52 0 0,1 ' + x + ',52" fill="' + css("--plot-bg") + '"/>';
  out += txt(x, 178, b[0], {fw: 700, mono: true}) + txt(x - 58, 96, "A", {fw: 700}) + txt(x + 58, 96, "B", {fw: 700}); }); return svg(W, H, out); };
S.carousel = function(){ var out = "", W = 760, H = 300, cx = 250, cy = 150; out += '<circle cx="' + cx + '" cy="' + cy + '" r="120" fill="' + css("--surface") + '" stroke="' + css("--ink") + '" stroke-width="2"/>';
  for(var i = 0; i < 32; i++){ var t = -Math.PI / 2 + i * 2 * Math.PI / 32; var c = i < 4 ? "warn" : i < 8 ? "b488" : i < 20 ? "accent" : "line"; out += '<circle cx="' + (cx + 100 * Math.cos(t)) + '" cy="' + (cy + 100 * Math.sin(t)) + '" r="8" fill="' + C(c) + '" fill-opacity="' + (c === "line" ? 0.3 : 0.8) + '"/>'; }
  out += txt(cx, cy, "MCL · 32 vị trí", {fw: 700}); [["warn","1–4: Flow-Check Pro, Flow-Set Pro, ống AutoSetup"],["b488","5–8: chứng sinh học"],["accent","9–20: mẫu bệnh nhân theo worklist"],["line","còn trống"]].forEach(function(l, i){ out += '<circle cx="430" cy="' + (90 + i * 36) + '" r="8" fill="' + C(l[0]) + '"/>' + txt(446, 90 + i * 36, l[1], {a: "start", fs: 11.5}); }); return svg(W, H, out); };

R.schem = function(s){ return (S[s.k] || function(){ return svg(760, 60, txt(380, 30, "?")); })(s); };

function render(){
  var chap = (window.FB_PAGE || "").replace(".html", "").replace("ch", "");
  var k = 0;
  Array.prototype.forEach.call(document.querySelectorAll("figure.fig, figure.plot"), function(fg){ k++; var cap = fg.querySelector("figcaption"); if(cap && !cap.getAttribute("data-n")){ cap.setAttribute("data-n", "1"); cap.innerHTML = "<b>Hình " + (chap && chap !== "index" ? +chap + "." : "") + k + ".</b> " + cap.innerHTML; } });
  Array.prototype.forEach.call(document.querySelectorAll("figure.fig[data-fig]"), function(fg){
    var box = fg.querySelector(".svgbox"); if(!box){ box = document.createElement("div"); box.className = "svgbox"; fg.insertBefore(box, fg.firstChild); }
    try{ var s = JSON.parse(fg.getAttribute("data-fig")); box.innerHTML = (R[s.t] || R.cards)(s); }catch(e){ console.error("fig", e, fg.getAttribute("data-fig")); }
  });
}
window.FB_figs = render;
document.addEventListener("DOMContentLoaded", function(){ render(); if(document.fonts && document.fonts.ready) document.fonts.ready.then(render);
  try{ window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", render); }catch(e){}
  try{ new MutationObserver(render).observe(document.documentElement, {attributes: true, attributeFilter: ["data-theme", "saved-theme"]}); }catch(e){} });
})();
