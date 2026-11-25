# Hướng dẫn Điểm tin hằng ngày

Điểm tin do Claude tự tổng hợp và **tự xuất bản** mỗi sáng (ngày làm việc). Anh Dam là người đọc.

## Phạm vi chủ đề

1. Thiết bị chẩn đoán in vitro (IVD) & ngành xét nghiệm — thế giới và Việt Nam
2. Chính sách, văn bản pháp luật y tế Việt Nam (đặc biệt trang thiết bị y tế)
3. Công nghệ phòng xét nghiệm, tự động hoá, flow cytometry, chất lượng (QC/QA)
4. AI trong y khoa và xét nghiệm

## Quy tắc cứng

- Mỗi tin **bắt buộc có link nguồn gốc**. Không tìm được nguồn tin cậy → bỏ tin.
- Ưu tiên nguồn gốc: cơ quan nhà nước (Bộ Y tế, Cổng thông tin Chính phủ, FDA, EMA…), hãng, tạp chí chuyên ngành, báo chính thống.
- **Tóm tắt bằng lời mình**, 2–4 câu mỗi tin. Không chép nguyên văn.
- Văn bản pháp luật mới: **chỉ báo tin + link**, không diễn giải nội dung pháp lý.
- Chỉ đưa tin trong vòng ~48 giờ gần nhất. Không có tin đáng đưa ở một mục → ghi "Không có tin đáng chú ý".
- 5–10 tin mỗi ngày, xếp theo mức độ quan trọng.

## Định dạng file

Đường dẫn: `content/diem-tin/YYYY/YYYY-MM-DD.md`

```markdown
---
title: Điểm tin DD/MM/YYYY
description: Tóm tắt 1 câu các tin chính trong ngày
tags: [diem-tin]
---

> [!info] Điểm tin do AI tổng hợp tự động. Vui lòng kiểm tra nguồn gốc trước khi sử dụng.

## Tiêu điểm
Một tin quan trọng nhất, 3–4 câu.

## IVD & xét nghiệm
- **Tiêu đề ngắn** — tóm tắt. ([Nguồn](link))

## Chính sách & pháp lý
...

## Công nghệ & chất lượng
...

## AI trong y khoa
...
```
