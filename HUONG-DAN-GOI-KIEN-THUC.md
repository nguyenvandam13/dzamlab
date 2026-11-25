# Hướng dẫn gói kiến thức — DzamLab

Mục `content/kien-thuc/` chia theo **nhóm ứng dụng xét nghiệm**. Mỗi nhóm là một **gói** độc lập (flow cytometry, sau này giải phẫu bệnh, hóa sinh, miễn dịch…).

## Cấu trúc một gói

```
content/kien-thuc/<goi>/
  index.md                    trang gói: phạm vi, lối vào giáo trình, danh sách bài chuyên đề
  <bai-chuyen-de>.md          bài lẻ, theo HUONG-DAN-VIET.md và templates/kien-thuc.md
  giao-trinh/                 (nếu có) giáo trình nhiều chương
    index.md                  trang giáo trình: giới thiệu, lộ trình đọc
    1-<ten-phan>/index.md     mỗi phần là một thư mục; số đầu tên quyết định thứ tự
    1-<ten-phan>/chuong-01.md
    2-<ten-phan>/…
    assets/                   CSS/JS riêng của giáo trình (nếu có phần tương tác)
```

- **Thứ tự đọc**: cây mục lục xếp các mục có tên bắt đầu bằng số theo số đó (cấu hình `sortFn` của explorer trong `quartz.config.yaml`); mục khác xếp theo tiêu đề. Đặt tên thư mục phần là `1-…`, `2-…` để giữ đúng thứ tự.
- **Tiêu đề chương**: `"<số chương> · <tên chương>"`, ví dụ `"05 · Kaluza C toàn tập"`.
- Đã xuất bản thì không đổi tên file/thư mục (đổi tên làm hỏng liên kết).
- Thêm gói mới: tạo thư mục, viết `index.md` của gói, thêm một dòng vào bảng "Các gói hiện có" trong `content/kien-thuc/index.md`.

## Giáo trình có phần tương tác (hình vẽ, trắc nghiệm, tra thuật ngữ)

Giáo trình Flow được viết trước dưới dạng HTML có JavaScript. Để giữ nguyên tính năng:

1. Văn xuôi được chuyển sang Markdown; hình, bảng, khung học tập, trắc nghiệm giữ dạng HTML trong file `.md`.
2. Script của giáo trình nằm trong `giao-trinh/assets/`. Mỗi chương nạp chúng ở cuối trang.
3. Các trang trong gói cần **tải trang đầy đủ** (không chuyển trang kiểu SPA) để script chạy lại. Việc này do `quartz/static/goi-kien-thuc.js` đảm nhận (được nạp từ `quartz/components/Head.tsx`). **Gói tương tác mới phải thêm đường dẫn gốc vào danh sách `GOI` trong file đó.** Gói chỉ có Markdown thuần thì không cần.

### Cập nhật giáo trình Flow từ bản HTML gốc

Bản gốc nằm trên OneDrive: `A. Tài liệu/2. Tài liệu UD xét nghiệm/1. FLOWCYTOMETRY/GiaoTrinh-Flow/`. Khi bản gốc thay đổi, chạy lại bộ chuyển đổi (ghi đè toàn bộ thư mục giáo trình):

```bash
pip install beautifulsoup4 lxml markdownify
python3 tools/giao-trinh-flow/convert.py <thư mục GiaoTrinh-Flow> .
python3 tools/giao-trinh-flow/assets.py  <thư mục GiaoTrinh-Flow> .
npx quartz build
```

- `convert.py`: chuyển `index.html`, `chXX.html` thành Markdown; đổi liên kết `chXX.html#muc` sang URL trên site; viết lại đoạn mở đầu của các chương trong bảng `LEAD`; sửa các câu nói về giao diện cũ trong bảng `TEXT_FIX`.
- `assets.py`: chép JS/CSS, vá các chỗ phụ thuộc tên file, thẻ `<main>`, phím tắt và chế độ sáng/tối; giới hạn CSS vào trang của gói.
- Thêm chương mới vào giáo trình gốc thì khai báo nó trong `PARTS` của `convert.py`.

Không sửa tay các file trong `content/kien-thuc/flow-cytometry/giao-trinh/` — lần chuyển đổi sau sẽ ghi đè. Sửa nội dung ở bản HTML gốc rồi chạy lại.
