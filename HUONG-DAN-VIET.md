# Hướng dẫn phong cách viết — DzamLab

Mọi bài viết trên dzamlab.org (trừ Điểm tin) đều theo hướng dẫn này. Claude phải đọc file này trước khi viết hoặc sửa bất kỳ bài nào.

## Quy trình

1. Anh Dam đưa ý tưởng (vài dòng).
2. Claude viết bản nháp trên một nhánh riêng, mở Pull Request.
3. Anh Dam duyệt, góp ý → Claude sửa.
4. Anh Dam bấm **Merge** → bài tự xuất bản. Không bài nào (ngoài Điểm tin) được đăng mà chưa Merge.

## Giọng văn: khoa học, trang trọng, dễ tiếp cận

Văn phong học thuật tiếng Việt chuẩn mực — chính xác, khách quan, có dẫn chứng — nhưng vẫn **đi từ vấn đề thực tế** để người làm nghề dễ tiếp cận. (Tham khảo cách tổ chức lập luận của GS. Nguyễn Văn Tuấn: đặt vấn đề cụ thể, so sánh số liệu, kết luận thành nguyên tắc; nhưng **giọng văn trang trọng hơn**, không dùng khẩu ngữ.)

### Đặt vấn đề
- Mở bài bằng **một hiện tượng/vấn đề quan sát được trong thực hành**, trình bày khách quan, sau đó nêu rõ câu hỏi bài viết sẽ trả lời.
- Không mở bằng định nghĩa sách giáo khoa; không mở bằng giai thoại.

### Ngôn ngữ
- Văn phong trang trọng, khách quan. Không dùng khẩu ngữ, từ địa phương, câu cảm thán, emoji, dấu "…".
- Ngôi trình bày: **khách quan/phi ngôi** ("cần lưu ý rằng…", "kết quả cho thấy…"); khi cần, dùng "chúng ta". Không xưng "tôi", không gọi người đọc là "bạn".
- Thuật ngữ: dùng thuật ngữ tiếng Việt chuẩn (Hán–Việt) kèm thuật ngữ tiếng Anh trong ngoặc ở lần xuất hiện đầu, ví dụ "tràn phổ (spillover)". Sau đó dùng nhất quán.
- Câu rõ ràng, mỗi đoạn một luận điểm.

### Độ chặt chẽ khoa học
- Định nghĩa khái niệm trước khi dùng. Khi có cơ sở định lượng, trình bày **công thức** (LaTeX) và giải thích từng ký hiệu.
- Phân biệt rõ **sự kiện đã được chứng minh**, **khuyến cáo/đồng thuận chuyên môn** và **kinh nghiệm thực hành**.
- Mọi khẳng định quan trọng phải có **trích dẫn** (tác giả, năm) dẫn tới danh mục tài liệu cuối bài.
- Số liệu minh hoạ phải ghi rõ là minh hoạ.
- Dùng từ rào đón đúng mức khi bằng chứng chưa chắc chắn.

### Phép so sánh
- Được dùng **một** phép so sánh trực quan cho khái niệm khó, trình bày ngắn gọn, sau đó quay lại ngôn ngữ chuyên môn.

### Kết bài
- Mục **"Điểm cần ghi nhớ"**: 3–5 nguyên tắc ngắn gọn, áp dụng được.

## Điều cấm

- **Không bịa trải nghiệm.** Claude chỉ được kể chuyện cá nhân ("hôm qua tôi…", "lần ở viện X…") khi **anh Dam cung cấp câu chuyện đó** trong ý tưởng bài. Bài viết mặc định không kể chuyện cá nhân; dùng *tình huống điển hình* ("Một tình huống thường gặp là…").
- Không bịa số liệu, trích dẫn, số hiệu văn bản. Không chắc → không viết, hoặc ghi rõ "cần kiểm tra".
- Không đưa dữ liệu bệnh nhân, dữ liệu khách hàng/bệnh viện, thông tin nội bộ công ty.
- Không chép nguyên văn từ sách, bài báo, tài liệu hãng. Diễn đạt lại bằng lời mình và dẫn nguồn.

## Cấu trúc bài (mục Kiến thức, Lộ trình)

1. **Đặt vấn đề** — hiện tượng thực tế và câu hỏi của bài.
2. **Cơ sở lý thuyết** — định nghĩa, cơ chế, công thức nếu có.
3. **Áp dụng trong thực hành** — quy trình, yêu cầu kỹ thuật.
4. **Các sai lầm thường gặp** — phân tích nguyên nhân.
5. **Điểm cần ghi nhớ** — 3–5 nguyên tắc.
6. **Tài liệu tham khảo** — định dạng: Tác giả. Tên bài. Tạp chí. Năm;Tập:Trang.

## Khung bài mục Pháp lý

- Đầu bài luôn có khung miễn trừ (xem mẫu).
- Thông tin văn bản: số hiệu, cơ quan ban hành, ngày ban hành, ngày hiệu lực, **tình trạng hiệu lực**, văn bản thay thế/bị thay thế, link văn bản gốc.
- Sau đó: "Điều này có nghĩa gì với người làm thực tế" — viết theo giọng trải nghiệm.

## Liên kết nội bộ (wikilink)

- Lần đầu nhắc tới một khái niệm đã có bài riêng trên site, gắn wikilink tới bài đó: `[[compensation-la-gi|bù trừ huỳnh quang]]`. Chỉ gắn ở lần xuất hiện đầu, không gắn lặp lại.
- Liên kết tới trang chủ đề (`index.md`) phải ghi đủ đường dẫn: `[[kien-thuc/flow-cytometry/index|Flow cytometry]]`.
- Mỗi bài mới phải được liệt kê trong trang `index.md` của chủ đề chứa nó, để bài không đứng riêng trên đồ thị kiến thức.
- Không để liên kết tới bài chưa tồn tại trong bài sắp xuất bản.
- Xem thêm `HUONG-DAN-OBSIDIAN.md`.

## Thuật ngữ

- Giữ thuật ngữ chuyên môn tiếng Anh (gating, compensation, IQC…); lần đầu xuất hiện trong bài kèm giải thích tiếng Việt.
- Viết hoa, viết tắt nhất quán trong toàn site.

## Thông tin đầu bài (frontmatter) bắt buộc

```yaml
title: Tên bài
description: Một câu mô tả
tags: [flow-cytometry]
trang-thai: 🌱 mầm | 🌿 đang viết | 🌳 hoàn thiện
cap-nhat: YYYY-MM-DD
```

## Cuối bài

Luôn kết thúc bằng dòng: *Biên soạn cùng AI · Dam duyệt*

## Tên file / đường dẫn

Chữ thường, không dấu, nối bằng gạch ngang: `compensation-la-gi.md`. Đã xuất bản thì không đổi tên.
