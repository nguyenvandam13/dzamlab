# Hướng dẫn phong cách viết — DzamLab

Mọi bài viết trên dzamlab.org (trừ Điểm tin) đều theo hướng dẫn này. Claude phải đọc file này trước khi viết hoặc sửa bất kỳ bài nào.

## Quy trình

1. Anh Dam đưa ý tưởng (vài dòng).
2. Claude viết bản nháp trên một nhánh riêng, mở Pull Request.
3. Anh Dam duyệt, góp ý → Claude sửa.
4. Anh Dam bấm **Merge** → bài tự xuất bản. Không bài nào (ngoài Điểm tin) được đăng mà chưa Merge.

## Giọng văn: "người đi trước kể lại"

- Viết như một người có kinh nghiệm hướng dẫn đồng nghiệp trẻ: gần gũi, rõ ràng, không giảng giải hàn lâm.
- **Đi từ tình huống trước, lý thuyết sau.** Mở bài bằng một hiện tượng/vấn đề người làm xét nghiệm thật sự gặp, rồi mới giải thích bản chất.
- Chỉ ra chỗ **dễ hiểu sai**, chỗ **dễ làm sai**, và **mẹo thực hành**.
- Câu ngắn. Mỗi đoạn một ý. Ưu tiên ví dụ cụ thể hơn định nghĩa trừu tượng.
- Xưng hô: dùng "chúng ta" / "bạn". Không xưng "tôi" kể chuyện cá nhân.

## Điều cấm

- **Không bịa trải nghiệm.** Không viết "lần tôi lắp máy ở viện X…" hay gán bất kỳ câu chuyện nào cho anh Dam. Khi cần ví dụ, dùng *tình huống điển hình* và nói rõ đó là tình huống minh hoạ.
- Không bịa số liệu, trích dẫn, số hiệu văn bản. Không chắc → không viết, hoặc ghi rõ "cần kiểm tra".
- Không đưa dữ liệu bệnh nhân, dữ liệu khách hàng/bệnh viện, thông tin nội bộ công ty.
- Không chép nguyên văn từ sách, bài báo, tài liệu hãng. Diễn đạt lại bằng lời mình và dẫn nguồn.

## Khung bài chuẩn (mục Kiến thức, Lộ trình)

1. **Vấn đề** — tình huống mở đầu, 2–4 câu.
2. **Hiểu bản chất** — giải thích cơ chế.
3. **Làm thế nào** — các bước/cách làm thực tế.
4. **Sai lầm hay gặp** — danh sách ngắn.
5. **Tóm tắt** — đúng 3 ý.
6. **Nguồn tham khảo**.

## Khung bài mục Pháp lý

- Đầu bài luôn có khung miễn trừ (xem mẫu).
- Thông tin văn bản: số hiệu, cơ quan ban hành, ngày ban hành, ngày hiệu lực, **tình trạng hiệu lực**, văn bản thay thế/bị thay thế, link văn bản gốc.
- Sau đó: "Điều này có nghĩa gì với người làm thực tế" — viết theo giọng trải nghiệm.

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
