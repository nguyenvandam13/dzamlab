# Hướng dẫn Điểm tin hằng ngày

Điểm tin lấy từ bản tin hằng ngày mà anh Dam đã có sẵn trên máy (thư mục `E:\F. A.I\A. Daily digest`, tệp `daily-digest-YYYY-MM-DD.html`, do tác vụ hẹn giờ trên máy tạo mỗi sáng). Không tự viết tin mới cho Điểm tin: chỉ chuyển bản tin đã có sang trang web.

## Phạm vi chủ đề

Sáu nhóm, theo đúng bản tin gốc:

1. Công nghệ & AI
2. Tài chính & thị trường
3. Y sinh học
4. Thế giới
5. Khoa học cơ bản
6. Ứng dụng phòng xét nghiệm

Mục "Kiến thức tài chính doanh nghiệp" trong bản tin là giáo trình, không phải tin, nên không đưa vào Điểm tin.

## Quy tắc cứng

- Mỗi tin **bắt buộc có link nguồn gốc**. Tin không có link thì bỏ.
- Chỉ đưa phần **tiếng Việt** của tin, kèm tên báo/tạp chí, tác giả, mức độ (tin ngắn, phân tích, chuyên sâu) và các ô số liệu.
- Không đưa tab "Báo cáo đánh giá", đánh giá sao, ghi chú cá nhân, tệp feedback.

## Cách chuyển

```bash
python tools/diem-tin/convert.py "E:/F. A.I/A. Daily digest" --date YYYY-MM-DD
```

Bỏ `--date` để chuyển mọi bản chưa có trên web. Tệp đã có sẽ không bị ghi đè, trừ khi thêm `--force`.

## Quy trình đăng

Tạo nhánh `diem-tin/YYYY-MM-DD`, chạy lệnh trên, kiểm tra `npx quartz build`, rồi mở Pull Request để anh Dam duyệt. Không push thẳng lên `main`.

## Định dạng file

Đường dẫn: `content/diem-tin/YYYY/YYYY-MM-DD.md`, do `convert.py` tạo:

```markdown
---
title: Điểm tin DD/MM/YYYY
description: "12 tin: Công nghệ & AI, tài chính & thị trường, ..."
tags: [diem-tin]
date: YYYY-MM-DD
---

> [!info] Điểm tin do AI tổng hợp tự động. Vui lòng kiểm tra nguồn gốc trước khi sử dụng.

## Công nghệ & AI

### [Tiêu đề gốc của tin](link nguồn)

*Tên báo · Tác giả · Phân tích*

Đoạn tóm tắt tiếng Việt.

- **Số liệu**: ý nghĩa
```
