/* Sinh tự động (tools/convert.py). Cầu nối giữa giáo trình gốc và site Quartz:
   - FB_PAGE: tên trang gốc (ch05.html…) mà các script của giáo trình dùng để biết đang ở chương nào.
   - FB_URL: đổi liên kết kiểu gốc "ch05.html#muc" sang URL thật trên dzamlab.org. */
(function(){
  "use strict";
  var me = document.currentScript;
  var MAP = /*MAP*/{};
  window.FB_PAGE = (me && me.getAttribute("data-page")) || "index.html";
  window.FB_LOADED = location.pathname;
  var LOGICAL = /^(ch\d\d[a-d]?|index)\.html(#|$)/;
  window.FB_URL = function(h){
    var m = /^([^#]*)(#.*)?$/.exec(h || ""), p = m[1], hs = m[2] || "";
    if(!p || p === window.FB_PAGE) return hs || "#";
    return MAP[p] ? MAP[p] + hs : h;
  };
  function fix(a){ var h = a.getAttribute("href"); if(h && LOGICAL.test(h)) a.setAttribute("href", window.FB_URL(h)); }
  function fixAll(){ Array.prototype.forEach.call(document.querySelectorAll("a[href]"), function(a){ if(!a.classList.contains("gs-r")) fix(a); }); }
  document.addEventListener("DOMContentLoaded", function(){ setTimeout(fixAll, 0); });
  window.addEventListener("click", function(ev){
    var a = ev.target && ev.target.closest && ev.target.closest("a[href]");
    if(a && !a.classList.contains("gs-r")) fix(a);
  }, true);
})();
