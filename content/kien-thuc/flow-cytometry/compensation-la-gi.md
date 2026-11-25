---
title: 'Compensation trong flow cytometry: vì sao quần thể bị "kéo xiên"?'
description: Hiểu bản chất hiện tượng tràn phổ huỳnh quang và cách bù trừ (compensation) đúng trong thực hành.
tags: [flow-cytometry, compensation]
trang-thai: 🌿 đang viết
cap-nhat: 2026-11-25
---

Giả sử bạn vừa nhuộm một mẫu máu với hai kháng thể: CD3 gắn FITC và CD4 gắn PE. Lên dot plot, bạn chờ đợi những đám tế bào gọn gàng nằm ở các góc. Nhưng không. Đám tế bào T CD4 âm tính lại nằm **xiên xiên** đi lên, như thể chúng "hơi dương tính" với PE.

Kháng thể không sai. Mẫu không sai. Máy cũng không hỏng.

Vậy chuyện gì đang xảy ra?

**Ánh sáng không chịu ở yên trong làn của mình**

Mỗi chất huỳnh quang khi được kích thích sẽ phát ra ánh sáng. Nhưng nó không phát ra một màu duy nhất, mà phát ra cả một dải màu – mạnh nhất ở một vùng, rồi nhạt dần sang hai bên.

FITC phát mạnh nhất ở vùng xanh lá. Nhưng cái "đuôi" ánh sáng của nó kéo dài sang tận vùng màu cam… đúng chỗ đầu dò PE đang lắng nghe.

Có thể hình dung thế này: hai người ngồi hai phòng cạnh nhau, mỗi người nghe một kênh radio. Người phòng bên mở loa quá to, và bạn nghe lẫn cả tiếng của họ. Người phòng bên mở càng to thì bạn nghe lẫn càng nhiều.

Đó chính là **tràn phổ** (spillover). Đầu dò PE nhận được tín hiệu thật của PE, *cộng thêm* một phần tín hiệu của FITC. Tế bào nào sáng FITC càng mạnh thì phần "nghe lẫn" sang PE càng lớn. Vì thế quần thể không dịch chuyển đều lên trên, mà bị kéo xiên theo một đường chéo.

**Compensation làm gì?**

Compensation thực chất là một phép trừ. Không hơn.

Nếu biết rằng cứ 100 đơn vị tín hiệu FITC thì có khoảng 15 đơn vị lọt sang kênh PE (con số chỉ để minh hoạ), máy sẽ lấy tín hiệu ở kênh PE của mỗi tế bào trừ đi 15% tín hiệu FITC của chính tế bào đó. Làm như vậy cho mọi cặp kênh trong panel, ta có một **ma trận compensation**.

Câu hỏi là: con số 15% đó lấy từ đâu ra?

Từ **mẫu chứng nhuộm đơn** (single-stain control) – mỗi ống chỉ nhuộm đúng một chất huỳnh quang. Khi chỉ có FITC trong ống, mọi tín hiệu xuất hiện ở kênh PE đều là tín hiệu "lọt sang". Đo nó, ta có hệ số.

Một điểm hay bị hiểu sai: compensation **không xoá tín hiệu thật**. Nó chỉ gỡ đi phần tín hiệu mượn từ kênh khác.

**Vậy phải làm sao cho đúng?**

Vài nguyên tắc, nghe đơn giản nhưng hay bị bỏ qua:

- *Mỗi chất huỳnh quang một ống chứng đơn*, cộng thêm một mẫu không nhuộm làm mốc âm tính.
- *Chứng phải sáng ít nhất bằng mẫu thật.* Chứng mờ thì hệ số tính ra sẽ lệch ở vùng tín hiệu cao – đúng chỗ ta cần chính xác nhất.
- *Dùng đúng chất huỳnh quang như trong mẫu.* Với tandem dye (PE-Cy7, APC-Cy7…), mỗi lô có thể có phổ hơi khác nhau, nên chứng phải cùng lô.
- *Cài điện thế (voltage) trước, rồi mới chạy chứng.* Đổi điện thế sau khi đã tính compensation thì phải tính lại từ đầu.
- *Kiểm tra bằng trung vị, không bằng mắt.* Sau khi bù, trung vị của quần thể dương tính và âm tính ở kênh bị tràn phải gần bằng nhau.

**Những chỗ hay hiểu sai**

*"Chỉnh đến khi đám tế bào trông vuông vức là được."* Đây có lẽ là thói quen phổ biến nhất. Mắt người rất dễ bị đánh lừa bởi thang log. Chỉnh theo cảm giác thường dẫn tới bù quá tay (overcompensation): quần thể bị kéo chúi xuống dưới trục, thậm chí ra vùng âm.

*"Sau khi bù mà quần thể vẫn xoè rộng, chắc là bù chưa đủ."* Không hẳn. Phép trừ nào cũng mang theo sai số của cả hai kênh. Quần thể sáng sẽ xoè rộng ra ở kênh bên cạnh sau khi bù – đó là **độ trải** (spread), một hệ quả tự nhiên. Tăng hệ số lên không sửa được nó, chỉ làm sai thêm.

*"Ma trận đã làm rồi, dùng mãi."* Đổi điện thế, đổi lô thuốc nhuộm tandem, hay sau một lần bảo trì quang học – đều là lúc cần làm lại.

**Bài học:**

- Tràn phổ là chuyện vật lý, không phải lỗi. Compensation là phép trừ để gỡ nó ra.
- Hệ số đúng đến từ chứng nhuộm đơn đủ sáng, đúng chất huỳnh quang, đúng điện thế.
- Tin con số trung vị, đừng tin cảm giác của mắt.

## Nguồn tham khảo

- Roederer M. *Spectral compensation for flow cytometry: visualization artifacts, limitations, and caveats.* Cytometry, 2001.
- Maecker HT, Trotter J. *Flow cytometry controls, instrument setup, and the determination of positivity.* Cytometry A, 2006.

---

*Biên soạn cùng AI · Dam duyệt*
