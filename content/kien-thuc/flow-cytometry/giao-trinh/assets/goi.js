/* Sinh tự động (tools/convert.py). Cầu nối giữa giáo trình gốc và site Quartz:
   - FB_PAGE: tên trang gốc (ch05.html…) mà các script của giáo trình dùng để biết đang ở chương nào.
   - FB_URL: đổi liên kết kiểu gốc "ch05.html#muc" sang URL thật trên dzamlab.org. */
(function(){
  "use strict";
  var me = document.currentScript;
  var MAP = {"index.html": "/kien-thuc/flow-cytometry/giao-trinh/", "ch01.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01", "ch02.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02", "ch03.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03", "ch04.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-04", "ch05.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05", "ch06.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06", "ch07.html": "/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07", "ch08a.html": "/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a", "ch08b.html": "/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b", "ch08c.html": "/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08c", "ch08d.html": "/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08d", "ch08.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-08", "ch09.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09", "ch10.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-10", "ch11.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-11", "ch12.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-12", "ch13.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-13", "ch14.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-14", "ch15.html": "/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-15", "ch16.html": "/kien-thuc/flow-cytometry/giao-trinh/4-ung-dung-dac-biet/chuong-16", "ch17.html": "/kien-thuc/flow-cytometry/giao-trinh/4-ung-dung-dac-biet/chuong-17", "ch18.html": "/kien-thuc/flow-cytometry/giao-trinh/4-ung-dung-dac-biet/chuong-18", "ch19.html": "/kien-thuc/flow-cytometry/giao-trinh/5-thuc-hanh/chuong-19", "ch20.html": "/kien-thuc/flow-cytometry/giao-trinh/5-thuc-hanh/chuong-20", "ch21.html": "/kien-thuc/flow-cytometry/giao-trinh/5-thuc-hanh/chuong-21", "ch22.html": "/kien-thuc/flow-cytometry/giao-trinh/5-thuc-hanh/chuong-22", "ch23.html": "/kien-thuc/flow-cytometry/giao-trinh/5-thuc-hanh/chuong-23", "ch24.html": "/kien-thuc/flow-cytometry/giao-trinh/6-phu-luc/chuong-24"};
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
