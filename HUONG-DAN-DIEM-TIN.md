# Hướng dẫn Điểm tin hằng ngày

Điểm tin do tác vụ hẹn giờ trên cloud tự tìm và viết mỗi sáng, không cần máy của anh Dam. Tác vụ tìm tin thật trên web, viết một bản tin `daily-digest-YYYY-MM-DD.html` song ngữ theo đúng giao diện các bản trước, đặt vào một thư mục riêng rồi chạy `convert.py` để tạo trang.

Nếu anh Dam có sẵn bản tin trên máy (thư mục `E:\F. A.I\A. Daily digest`) và phiên chạy đọc được tệp đó, thì dùng bản đó thay vì tự viết.

## Nội dung đưa lên

Bản tin gồm đúng các phần như các bản trước: đầu trang, thanh mục lục, các nhóm chủ đề (kể cả "Kiến thức tài chính doanh nghiệp" khi có), từng thẻ tin với hai cột tiếng Anh và tiếng Việt, biểu tượng, ô số liệu, biểu đồ và hộp giải thích. Kiểu dáng nằm ở `content/diem-tin/assets/digest.css`.

Không đưa lên: tab "Báo cáo đánh giá", thanh đánh giá sao và ghi chú, nút đọc to, nút tải hình, script, các tệp feedback và báo cáo tuần.

## Quy tắc cứng

- Chỉ đưa tin có thật, đăng trong khoảng 1–3 ngày gần nhất, từ nguồn uy tín (Reuters, AP, Bloomberg, FT, các tạp chí Nature/Science/NEJM/Lancet…). Mở từng bài để kiểm tra số liệu; không bịa chi tiết.
- Mỗi tin phải có link nguồn đã mở được. Khi chỉ đọc được bản đăng lại (Yahoo Finance, Investing.com…), ghi rõ ở huy hiệu nguồn, ví dụ "Reuters (via Yahoo Finance)".
- Không lặp tin đã đăng ở các ngày trước; chỉ nhắc lại khi có diễn biến mới.
- Mỗi mục 1–2 tin; mỗi tin có tiêu đề tiếng Anh, hai cột tiếng Anh và tiếng Việt cùng nội dung, ô số liệu, và hộp "Giải thích nhanh" khi cần.
- Mục "Kiến thức tài chính doanh nghiệp" theo lịch giáo trình (Thứ Ba/Năm/Bảy); ngày khác bỏ mục này.
- Nếu không tìm đủ tin xác minh được, không đăng ngày đó và báo lại.

## Cách chuyển

```bash
python tools/diem-tin/convert.py "<thư mục chứa daily-digest-YYYY-MM-DD.html>" --date YYYY-MM-DD
```

Bỏ `--date` để chuyển mọi bản chưa có trên web. Tệp đã có sẽ không bị ghi đè, trừ khi thêm `--force` (dùng khi đổi công cụ chuyển và cần tạo lại các trang cũ).

## Quy trình đăng

Tạo nhánh `diem-tin/YYYY-MM-DD`, viết bản tin, chạy lệnh trên, kiểm tra `npx quartz build`, rồi mở Pull Request để anh Dam duyệt. Không push thẳng lên `main`.

## Định dạng file

Đường dẫn: `content/diem-tin/YYYY/YYYY-MM-DD.md`, do `convert.py` tạo: phần frontmatter (title "Điểm tin DD/MM/YYYY", description, tags `[diem-tin]`, date), dòng nạp `digest.css`, khung thông báo "Điểm tin do AI tổng hợp tự động…", rồi toàn bộ HTML của bản tin trong `<div class="dz-digest">`. Khối HTML không được có dòng trống, vì Markdown sẽ cắt khối tại đó.
