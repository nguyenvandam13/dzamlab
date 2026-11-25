# Hướng dẫn Điểm tin hằng ngày

Điểm tin lấy từ bản tin hằng ngày mà anh Dam đã có sẵn trên máy (thư mục `E:\F. A.I\A. Daily digest`, tệp `daily-digest-YYYY-MM-DD.html`, do tác vụ hẹn giờ trên máy tạo mỗi sáng). Không tự viết tin mới cho Điểm tin: chỉ chuyển bản tin đã có sang trang web, giữ nguyên giao diện song ngữ của bản gốc.

## Nội dung đưa lên

Giữ nguyên giao diện và nội dung phần "Bản tin" của tệp gốc: đầu trang, thanh mục lục, các nhóm chủ đề (kể cả "Kiến thức tài chính doanh nghiệp" khi có), từng thẻ tin với hai cột tiếng Anh và tiếng Việt, biểu tượng, ô số liệu, biểu đồ và hộp giải thích. Kiểu dáng nằm ở `content/diem-tin/assets/digest.css`.

Không đưa lên: tab "Báo cáo đánh giá", thanh đánh giá sao và ghi chú, nút đọc to, nút tải hình, script, các tệp feedback và báo cáo tuần.

## Quy tắc cứng

- Không sửa nội dung tin: trang web phải giống bản tin gốc.
- Mỗi tin trong bản gốc đã có link nguồn; nếu bản gốc lỗi thiếu tin hoặc trống, không đăng ngày đó và báo lại.

## Cách chuyển

```bash
python tools/diem-tin/convert.py "E:/F. A.I/A. Daily digest" --date YYYY-MM-DD
```

Bỏ `--date` để chuyển mọi bản chưa có trên web. Tệp đã có sẽ không bị ghi đè, trừ khi thêm `--force` (dùng khi đổi công cụ chuyển và cần tạo lại các trang cũ).

## Quy trình đăng

Tạo nhánh `diem-tin/YYYY-MM-DD`, chạy lệnh trên, kiểm tra `npx quartz build`, rồi mở Pull Request để anh Dam duyệt. Không push thẳng lên `main`.

## Định dạng file

Đường dẫn: `content/diem-tin/YYYY/YYYY-MM-DD.md`, do `convert.py` tạo: phần frontmatter (title "Điểm tin DD/MM/YYYY", description, tags `[diem-tin]`, date), dòng nạp `digest.css`, khung thông báo "Điểm tin do AI tổng hợp tự động…", rồi toàn bộ HTML của bản tin trong `<div class="dz-digest">`. Khối HTML không được có dòng trống, vì Markdown sẽ cắt khối tại đó.
