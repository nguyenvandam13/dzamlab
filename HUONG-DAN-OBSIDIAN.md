# Hướng dẫn dùng Obsidian với DzamLab

Thư mục `content/` của kho này là một **vault Obsidian** dùng được ngay. Quartz (bộ dựng trang dzamlab.org) đọc đúng cú pháp Obsidian: wikilink `[[...]]`, callout `> [!note]`, công thức LaTeX, thẻ (tags) và Canvas. Những gì thấy trong Obsidian là những gì người đọc sẽ thấy trên web.

## 1. Thiết lập lần đầu (khoảng 10 phút)

1. Cài [Obsidian](https://obsidian.md) và [GitHub Desktop](https://desktop.github.com).
2. Trong GitHub Desktop: **File → Clone repository** → chọn `nguyenvandam13/dzamlab`.
3. Trong Obsidian: **Open folder as vault** → chọn thư mục **`content`** bên trong kho vừa clone (không chọn thư mục gốc của kho, vì thư mục gốc chứa mã nguồn Quartz).
4. Khi Obsidian hỏi có tin tưởng vault không, chọn **Trust**.

Cấu hình chung đã được lưu sẵn trong `content/.obsidian/`, nên không cần chỉnh gì thêm:

| Thiết lập                        | Giá trị                                                  | Lý do                                                          |
| -------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| Định dạng liên kết               | Wikilink, đường dẫn ngắn nhất                            | Khớp với `markdownLinkResolution: shortest` của Quartz         |
| Tự cập nhật liên kết khi đổi tên | Bật                                                      | Tránh liên kết gãy (dù vậy, bài đã xuất bản thì không đổi tên) |
| Thư mục mẫu bài                  | `templates/`                                             | Quartz bỏ qua thư mục này khi dựng trang                       |
| Thư mục ảnh đính kèm             | `assets/`                                                | Ảnh dán vào bài tự lưu ở đây                                   |
| Kiểu thuộc tính                  | `cap-nhat` là ngày, `tags` là thẻ                        | Nhập frontmatter bằng ô chọn thay vì gõ tay                    |
| Plugin lõi                       | Templates, Graph, Backlinks, Canvas, Outline, Properties | Không cần plugin cộng đồng                                     |

## 2. Viết bài mới

1. Trong GitHub Desktop: **Current branch → New branch**, đặt tên theo bài, ví dụ `bai-gating-co-ban`. **Không viết trên nhánh `main`.**
2. Trong Obsidian: tạo file mới trong đúng thư mục (ví dụ `kien-thuc/flow-cytometry/`), tên file chữ thường, không dấu, nối bằng gạch ngang.
3. Bấm `Ctrl/Cmd + P` → **Templates: Insert template** → chọn `kien-thuc` hoặc `phap-ly`. Ngày `cap-nhat` được điền tự động.
4. Viết theo [HUONG-DAN-VIET.md](HUONG-DAN-VIET.md).
5. Trong GitHub Desktop: viết mô tả ngắn → **Commit** → **Push origin** → **Create Pull Request**.
6. Duyệt bản xem trước trên Pull Request, rồi bấm **Merge** để xuất bản.

Cách khác: ghi ý tưởng vào Obsidian rồi nhờ Claude soạn bản nháp. Claude vẫn làm trên nhánh riêng và mở Pull Request như cũ.

> Không dùng plugin Obsidian Git ở chế độ tự động commit/push: plugin này mặc định đẩy thẳng lên `main`, bỏ qua bước duyệt.

## 3. Liên kết kiến thức (phần quan trọng nhất)

Mỗi wikilink giữa hai bài tạo ra một cạnh trong **đồ thị kiến thức** và một mục trong **Backlinks** ở cuối trang web. Người học nhờ đó đi theo mạch khái niệm thay vì đọc từng bài rời.

- Liên kết tới bài: `[[compensation-la-gi]]`, hoặc kèm chữ hiển thị: `[[compensation-la-gi|bù trừ huỳnh quang]]`.
- Liên kết tới trang chủ đề (file `index.md`) cần ghi đủ đường dẫn, vì có nhiều file cùng tên `index`: `[[kien-thuc/flow-cytometry/index|Flow cytometry]]`.
- Liên kết tới một mục trong bài: `[[compensation-la-gi#3. Áp dụng trong thực hành]]`.
- Liên kết tới bài chưa có: vẫn viết được. Obsidian hiện liên kết mờ, nhắc rằng đây là bài cần viết. Trên web, liên kết này chưa dẫn tới đâu, nên chỉ để lại khi bài sắp được viết.
- Nhúng ảnh: kéo thả ảnh vào bài; Obsidian lưu vào `assets/` và chèn `![[ten-anh.png]]`.

Kiểm tra mạch liên kết bằng **Graph view** (`Ctrl/Cmd + G`): bài nào đứng riêng, không nối với bài nào, là bài cần thêm liên kết.

## 4. Lộ trình học bằng Canvas

Mục Lộ trình có thể vẽ dạng sơ đồ: tạo file **New canvas** trong `lo-trinh/`, kéo các bài (từ thanh bên) vào khung, nối mũi tên theo thứ tự học. Quartz xuất file `.canvas` thành một trang sơ đồ trên web, bấm vào từng ô để mở bài.

## 5. Ghi chú cá nhân, không xuất bản

Thư mục `content/private/` dành cho ghi chú học tập riêng, tài liệu đang đọc, bản nháp thô. Thư mục này:

- không được Quartz đưa lên web (`ignorePatterns: private`),
- không được đưa lên GitHub (có trong `content/.gitignore`). Kho dzamlab là kho **công khai**, nên đây là điều kiện bắt buộc.

Hệ quả: `private/` chỉ có trên máy đang dùng. Muốn đồng bộ sang máy khác thì dùng dịch vụ riêng (iCloud, OneDrive, Obsidian Sync), không qua GitHub.

Khi một ghi chú cá nhân đã đủ chín, chuyển nó sang thư mục công khai (ví dụ `kien-thuc/`), áp mẫu bài và mở Pull Request như mục 2.
