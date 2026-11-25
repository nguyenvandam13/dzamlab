---
title: 'Compensation trong flow cytometry: vì sao quần thể bị "kéo xiên"?'
description: Hiểu bản chất hiện tượng tràn phổ huỳnh quang và cách bù trừ (compensation) đúng trong thực hành.
tags: [flow-cytometry, compensation]
trang-thai: 🌿 đang viết
cap-nhat: 2026-11-25
---

## Vấn đề

Tình huống minh hoạ: bạn nhuộm mẫu máu với CD3-FITC và CD4-PE. Lên dot plot FITC – PE, thay vì thấy các đám tế bào gọn gàng nằm ở các góc, bạn thấy quần thể CD3+CD4− bị **kéo xiên lên trên**, như thể nó "dương tính một ít" với PE. Kháng thể không sai, mẫu không sai. Vậy chuyện gì đang xảy ra?

Câu trả lời gần như luôn là: **tràn phổ huỳnh quang** (spillover), và compensation chưa đúng.

## Hiểu bản chất

Mỗi chất huỳnh quang phát xạ ánh sáng trong một **dải bước sóng**, không phải một vạch duy nhất. FITC phát mạnh nhất quanh vùng xanh lá, nhưng "đuôi" phổ của nó kéo sang cả vùng cam – nơi đầu dò PE đang lắng nghe.

Hệ quả: đầu dò PE nhận được **tín hiệu thật của PE + một phần tín hiệu của FITC**. Tế bào càng sáng FITC thì phần "tràn" sang PE càng lớn. Đó là lý do quần thể bị kéo xiên theo một đường chéo, chứ không dịch chuyển đều.

**Compensation** là phép trừ toán học: với mỗi tế bào, máy trừ đi một tỉ lệ cố định của tín hiệu FITC khỏi kênh PE (và ngược lại, cho mọi cặp kênh). Tỉ lệ này được xác định từ **mẫu chứng nhuộm đơn** (single-stain control).

Điểm mấu chốt dễ hiểu sai: compensation **không làm mất tín hiệu thật**, nó chỉ gỡ phần tín hiệu "mượn" từ kênh khác.

## Làm thế nào

1. **Chuẩn bị chứng nhuộm đơn cho từng chất huỳnh quang** trong panel, kèm một mẫu không nhuộm (hoặc quần thể âm tính).
2. **Chứng phải sáng ít nhất bằng mẫu thật.** Nếu quần thể dương tính trong chứng mờ hơn mẫu, hệ số tính ra sẽ không chính xác ở vùng tín hiệu cao.
3. **Dùng đúng chất huỳnh quang như trong mẫu**, nhất là với tandem dye (PE-Cy7, APC-Cy7…): mỗi lô tandem có thể có phổ khác nhau, nên chứng phải cùng lô.
4. **Cài đặt điện thế (voltage/gain) trước, rồi mới chạy chứng.** Đổi điện thế sau khi tính compensation thì phải tính lại.
5. Để phần mềm tính ma trận compensation, sau đó **kiểm tra lại bằng mắt**: trung vị (median) của quần thể dương tính và âm tính ở kênh bị tràn phải gần bằng nhau.

## Sai lầm hay gặp

- **Chỉnh compensation "bằng mắt" cho đến khi đám tế bào trông vuông vức.** Cách này dễ dẫn đến bù quá tay (overcompensation) – quần thể bị kéo xuống dưới trục.
- **Nhầm độ trải rộng (spread) với lỗi compensation.** Sau khi bù đúng, quần thể sáng vẫn có thể "xoè" rộng ở kênh bên cạnh. Đó là hệ quả tự nhiên của phép trừ, không sửa được bằng cách tăng hệ số.
- **Dùng một ma trận cho mọi lần chạy** dù đã đổi điện thế, đổi lô thuốc nhuộm tandem, hoặc sau bảo trì quang học.
- **Bỏ qua chứng không nhuộm**, nên không có mốc âm tính chuẩn.

## Tóm tắt

1. Tràn phổ là hiện tượng vật lý tất yếu; compensation là phép trừ để gỡ phần tín hiệu tràn.
2. Hệ số đúng đến từ chứng nhuộm đơn đủ sáng, cùng chất huỳnh quang và cùng điện thế với mẫu.
3. Kiểm tra bằng trung vị, không chỉnh theo cảm giác; độ xoè sau bù là bình thường.

## Nguồn tham khảo

- Roederer M. *Spectral compensation for flow cytometry: visualization artifacts, limitations, and caveats.* Cytometry, 2001.
- Maecker HT, Trotter J. *Flow cytometry controls, instrument setup, and the determination of positivity.* Cytometry A, 2006.

---

*Biên soạn cùng AI · Dam duyệt*
