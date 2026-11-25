/* Gói kiến thức tương tác (giáo trình nhiều chương có hình vẽ, trắc nghiệm, tra thuật ngữ).
   Các trang trong gói cần tải đầy đủ thay vì chuyển trang kiểu SPA, để script của gói chạy lại.
   Thêm gói mới: thêm đường dẫn gốc của gói vào danh sách GOI. */
(function(){
  "use strict";
  var GOI = ["/kien-thuc/flow-cytometry/giao-trinh"];
  function isGoi(path){
    path = (path || "").replace(/\.html$/, "").replace(/\/index$/, "/");
    return GOI.some(function(p){ return path === p || path.indexOf(p + "/") === 0; });
  }
  window.addEventListener("click", function(ev){
    var a = ev.target && ev.target.closest && ev.target.closest("a[href]");
    if(!a) return;
    var u; try { u = new URL(a.href, location.href); } catch(e) { return; }
    if(u.origin !== location.origin) return;
    if(isGoi(u.pathname) || isGoi(location.pathname)) a.setAttribute("data-router-ignore", "");
  }, true);
  document.addEventListener("nav", function(){
    if(!isGoi(location.pathname) || window.FB_LOADED === location.pathname) return;
    var k = "goi-reload:" + location.pathname, t = 0;
    try { t = +sessionStorage.getItem(k) || 0; sessionStorage.setItem(k, Date.now()); } catch(e) {}
    if(Date.now() - t > 10000) location.reload();
  });
})();
