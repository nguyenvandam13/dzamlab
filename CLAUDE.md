# DzamLab — dzamlab.org

Trang kiến thức cá nhân của anh Dam, xây bằng Quartz 5, chạy trên Cloudflare Pages.

- Nội dung nằm trong `content/`: `kien-thuc/`, `lo-trinh/`, `phap-ly/`, `diem-tin/`.
- Viết bài (trừ Điểm tin): đọc và tuân thủ `HUONG-DAN-VIET.md`. Luôn làm trên nhánh mới + mở Pull Request; không push thẳng lên `main`.
- Điểm tin: đọc và tuân thủ `HUONG-DAN-DIEM-TIN.md`; được phép commit thẳng lên `main`.
- Mẫu bài: `content/templates/` (Quartz bỏ qua thư mục này). Trong mẫu, `{{date}}` là chỗ để Obsidian điền ngày; khi Claude dùng mẫu thì thay bằng ngày thật.
- `content/` là vault Obsidian: xem `HUONG-DAN-OBSIDIAN.md`. Dùng wikilink giữa các bài theo mục "Liên kết nội bộ" trong `HUONG-DAN-VIET.md`. Không đọc hoặc đưa lên kho bất kỳ file nào trong `content/private/`.
- Kiểm tra build trước khi mở PR: `npx quartz build`.
