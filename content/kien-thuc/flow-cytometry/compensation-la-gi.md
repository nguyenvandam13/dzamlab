---
title: "Bù trừ huỳnh quang (compensation) trong flow cytometry: cơ sở lý thuyết và thực hành"
description: Cơ chế tràn phổ huỳnh quang, nguyên lý toán học của bù trừ và các yêu cầu kỹ thuật đối với mẫu chứng nhuộm đơn.
tags: [flow-cytometry, compensation]
trang-thai: 🌿 đang viết
cap-nhat: 2026-11-25
---

## 1. Đặt vấn đề

Trong phân tích tế bào dòng chảy đa màu, một hiện tượng thường gặp là quần thể tế bào âm tính với một dấu ấn lại hiển thị tín hiệu dương tính giả ở kênh tương ứng. Chẳng hạn, khi nhuộm đồng thời CD3-FITC và CD4-PE, quần thể tế bào T CD4⁻ có thể phân bố theo một đường chéo hướng lên trên trục PE thay vì nằm gọn trong vùng âm tính.

Hiện tượng này không xuất phát từ sai sót của kháng thể hay mẫu bệnh phẩm, mà là hệ quả của **tràn phổ huỳnh quang** (spectral spillover) chưa được hiệu chỉnh thích hợp. Bài viết trình bày cơ chế của hiện tượng, nguyên lý của phương pháp bù trừ (compensation) và các yêu cầu kỹ thuật để thực hiện bù trừ chính xác.

## 2. Cơ sở lý thuyết

### 2.1. Phổ phát xạ và hiện tượng tràn phổ

Mỗi chất huỳnh quang (fluorochrome) khi được kích thích sẽ phát xạ trên một **dải bước sóng liên tục**, có cực đại tại một bước sóng đặc trưng và giảm dần về hai phía. Trong khi đó, mỗi đầu dò của máy chỉ thu nhận ánh sáng qua một bộ lọc băng thông nhất định.

Do phổ phát xạ của các chất huỳnh quang chồng lấn nhau, một phần ánh sáng do chất huỳnh quang A phát ra sẽ đi qua bộ lọc của đầu dò dành cho chất huỳnh quang B. Ví dụ, FITC có cực đại phát xạ ở khoảng 520 nm, nhưng phần đuôi phổ kéo dài tới vùng 575 nm – vùng thu nhận của kênh PE (Roederer, 2001).

Có thể hình dung hiện tượng này như hai phòng thu âm liền kề: âm thanh từ phòng bên cạnh lọt qua vách ngăn với một tỉ lệ cố định, và nguồn âm càng lớn thì lượng âm lọt sang càng nhiều.

Điểm quan trọng là phần tín hiệu tràn **tỉ lệ thuận** với cường độ tín hiệu gốc. Đây là lý do quần thể bị lệch theo một đường chéo chứ không tịnh tiến đồng đều.

### 2.2. Mô hình toán học

Với một panel gồm $n$ chất huỳnh quang, tín hiệu đo được tại các đầu dò có thể biểu diễn dưới dạng:

$$
\mathbf{O} = \mathbf{T} \cdot \mathbf{S}
$$

trong đó:

- $\mathbf{O}$ là vectơ tín hiệu quan sát được (observed) tại $n$ đầu dò;
- $\mathbf{T}$ là vectơ tín hiệu thực (true) của $n$ chất huỳnh quang;
- $\mathbf{S}$ là **ma trận tràn phổ** (spillover matrix) kích thước $n \times n$, với phần tử $s_{ij}$ là tỉ lệ tín hiệu của chất huỳnh quang $i$ được ghi nhận tại đầu dò $j$. Các phần tử trên đường chéo chính bằng 1.

Bù trừ là phép tính ngược để ước lượng tín hiệu thực:

$$
\mathbf{T} = \mathbf{O} \cdot \mathbf{S}^{-1}
$$

Ma trận $\mathbf{S}^{-1}$ được gọi là **ma trận bù trừ** (compensation matrix). Như vậy, bù trừ không loại bỏ tín hiệu thực mà chỉ tách phần tín hiệu do các chất huỳnh quang khác đóng góp.

### 2.3. Xác định hệ số tràn phổ

Các hệ số $s_{ij}$ được xác định từ **mẫu chứng nhuộm đơn** (single-stain control): mỗi mẫu chỉ chứa một chất huỳnh quang. Khi đó, toàn bộ tín hiệu ghi nhận tại các đầu dò khác đều là tín hiệu tràn, và hệ số được tính từ hiệu số trung vị cường độ huỳnh quang giữa quần thể dương tính và âm tính (Maecker và Trotter, 2006).

## 3. Áp dụng trong thực hành

Để ma trận bù trừ có giá trị, mẫu chứng nhuộm đơn cần đáp ứng các yêu cầu sau:

1. **Đầy đủ**: mỗi chất huỳnh quang trong panel có một mẫu chứng riêng, kèm một quần thể âm tính làm mốc (mẫu không nhuộm hoặc quần thể âm tính nội tại).
2. **Đủ sáng**: quần thể dương tính trong mẫu chứng phải có cường độ tối thiểu tương đương tín hiệu cao nhất dự kiến trong mẫu thật. Mẫu chứng mờ làm giảm độ chính xác của hệ số ở vùng tín hiệu cao.
3. **Đồng nhất chất huỳnh quang**: mẫu chứng phải dùng đúng chất huỳnh quang như trong mẫu. Đối với chất huỳnh quang song hợp (tandem dye) như PE-Cy7 hay APC-Cy7, phổ phát xạ có thể khác nhau giữa các lô, do đó mẫu chứng cần cùng lô với thuốc thử sử dụng.
4. **Đồng nhất điều kiện máy**: điện thế đầu dò (detector voltage) phải được cố định trước khi chạy mẫu chứng. Mọi thay đổi điện thế sau đó đòi hỏi tính lại ma trận.
5. **Kiểm tra định lượng**: sau bù trừ, trung vị cường độ huỳnh quang của quần thể dương tính và âm tính tại kênh nhận tràn phải xấp xỉ bằng nhau.

## 4. Các sai lầm thường gặp

**Hiệu chỉnh thủ công dựa trên đánh giá trực quan.** Việc điều chỉnh hệ số cho đến khi quần thể "trông vuông vức" trên biểu đồ thang logarit dễ dẫn đến bù trừ quá mức (overcompensation), biểu hiện bằng quần thể bị lệch xuống dưới mốc âm tính. Đánh giá cần dựa trên trung vị, không dựa trên hình dạng quần thể.

**Nhầm lẫn giữa độ trải tràn phổ và lỗi bù trừ.** Sau khi bù trừ chính xác, quần thể có tín hiệu cao vẫn có thể phân tán rộng tại kênh nhận tràn. Hiện tượng này, gọi là **độ trải tràn phổ** (spillover spreading), phát sinh từ sai số đo lường (chủ yếu do thống kê photon) được truyền qua phép trừ, và không thể khắc phục bằng cách tăng hệ số bù trừ (Nguyen và cs., 2013). Biện pháp phù hợp là thiết kế panel hợp lý: tránh ghép dấu ấn đồng biểu hiện vào các cặp kênh có độ trải lớn.

**Sử dụng một ma trận cố định trong thời gian dài.** Ma trận bù trừ cần được xác định lại khi thay đổi điện thế đầu dò, thay đổi lô chất huỳnh quang song hợp, hoặc sau bảo dưỡng hệ quang học.

## 5. Điểm cần ghi nhớ

1. Tràn phổ là hệ quả vật lý tất yếu của sự chồng lấn phổ phát xạ, không phải lỗi kỹ thuật.
2. Bù trừ là phép biến đổi tuyến tính ($\mathbf{T} = \mathbf{O} \cdot \mathbf{S}^{-1}$) nhằm tách tín hiệu tràn, không làm mất tín hiệu thực.
3. Độ chính xác của bù trừ phụ thuộc hoàn toàn vào chất lượng mẫu chứng nhuộm đơn: đủ sáng, đúng chất huỳnh quang, đúng điều kiện máy.
4. Đánh giá kết quả bù trừ bằng trung vị cường độ huỳnh quang, không bằng quan sát trực quan.
5. Độ trải tràn phổ là giới hạn nội tại, cần xử lý ở khâu thiết kế panel.

## Tài liệu tham khảo

1. Roederer M. Spectral compensation for flow cytometry: visualization artifacts, limitations, and caveats. *Cytometry*. 2001;45(3):194–205.
2. Maecker HT, Trotter J. Flow cytometry controls, instrument setup, and the determination of positivity. *Cytometry A*. 2006;69(9):1037–1042.
3. Nguyen R, Perfetto S, Mahnke YD, Chattopadhyay P, Roederer M. Quantifying spillover spreading for comparing instrument performance and aiding in multicolor panel design. *Cytometry A*. 2013;83(3):306–315.

---

*Biên soạn cùng AI · Dam duyệt*
