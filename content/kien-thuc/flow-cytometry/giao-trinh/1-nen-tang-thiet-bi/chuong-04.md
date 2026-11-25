---
title: "04 · Bù màu chuyên sâu"
description: "Bù màu là chủ đề mà người làm ứng dụng bị hỏi nhiều nhất và cũng dễ trả lời sai nhất."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "04"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần I · Chương 04</div><div id="ftb-search"></div></div>

<p class="lead">Bù màu là chủ đề mà người làm ứng dụng bị hỏi nhiều nhất và cũng dễ trả lời sai nhất. Chương này đi từ phép toán, sang quy tắc chọn đối chứng, sang cách Navios và Kaluza C tạo ma trận, rồi tới cách nhận biết bù sai trên dữ liệu bệnh nhân. Phần thao tác Kaluza được biên soạn từ IFU Kaluza C (C10993AH) chương 6.</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">8 mục mới · 69 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><div class="tbl-wrap" id="gtab-ch04"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-ma-tran-spillover"><td>Ma trận spillover</td><td><span class="full">spillover matrix, S.</span> Bảng các hệ số spillover giữa mọi cặp chất nhuộm và đầu dò. Trong Kaluza, ô “FL2 − %FL1” là phần trăm tín hiệu của chất nhuộm FL1 rơi vào đầu dò FL2.</td><td class="at"><a href="#toan" title="Phép toán của bù màu">4.1</a></td></tr><tr id="g-vector-tu-huynh-quang"><td>Vector tự huỳnh quang</td><td><span class="full">autofluorescence vector, AF.</span> Mức tự huỳnh quang của từng đầu dò (đo trên ống không nhuộm), được trừ trước khi bù và cộng lại sau bù để giữ đúng mức nền.</td><td class="at"><a href="#toan" title="Phép toán của bù màu">4.1</a></td></tr><tr id="g-ma-tran-nghich-dao"><td>Ma trận nghịch đảo</td><td><span class="full">inverse matrix, S⁻¹.</span> Ma trận “làm ngược” phép trộn của ma trận S: nhân S⁻¹ với tín hiệu đo được thì thu lại tín hiệu thật của từng chất nhuộm. Phần mềm tự tính.</td><td class="at"><a href="#toan" title="Phép toán của bù màu">4.1</a></td></tr><tr id="g-he-so-bu"><td>Hệ số bù</td><td><span class="full">compensation coefficient.</span> Con số dùng để trừ ngược spillover. Với 2 màu gần bằng hệ số spillover; với nhiều màu được tính từ ma trận nghịch đảo.</td><td class="at"><a href="#toan" title="Phép toán của bù màu">4.1</a></td></tr><tr id="g-rsd"><td>rSD</td><td><span class="full">robust SD, độ lệch chuẩn bền.</span> Độ lệch chuẩn ước lượng từ phần giữa phân bố (dựa trên phân vị), ít bị đuôi ảnh hưởng; dùng đo độ loe.</td><td class="at"><a href="#mophong" title="Mô phỏng: thiếu bù, bù đúng, bù quá và độ loe">4.2</a></td></tr><tr id="g-ssm"><td>SSM</td><td><span class="full">Spillover Spreading Matrix, ma trận độ loe.</span> Bảng định lượng độ loe: mỗi ô cho biết SD tăng thêm trên kênh nhận cho mỗi đơn vị căn bậc hai tín hiệu kênh gốc (Nguyen 2013).</td><td class="at"><a href="#spread" title="Độ loe sau bù (spillover spreading)">4.3</a></td></tr><tr id="g-data-set"><td>Data set</td><td><span class="full">bộ dữ liệu.</span> Một file LMD/FCS (hoặc nhiều file gộp) đang phân tích trong Kaluza.</td><td class="at"><a href="#navios" title="Bù màu trên Navios EX">4.6</a></td></tr><tr id="g-generate-compensation"><td>Generate Compensation</td><td><span class="full">chức năng tạo ma trận bù của Kaluza.</span> Công cụ của Kaluza C đọc các ống đơn màu, tìm quần thể dương và âm, rồi tính ma trận spillover.</td><td class="at"><a href="#kaluza" title="Bù màu trong Kaluza C: chi tiết thao tác">4.7</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="apc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apc" title="allophycocyanin: Protein huỳnh quang kích thích bằng laser 638 nm, phát đỏ (~660 nm), đo ở FL6. Rất sáng.">APC</a><a data-g="apc-a700" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apc-a700" title="APC-Alexa Fluor 700: Tandem APC với Alexa Fluor 700, laser đỏ, đo ở FL7.">APC-A700</a><a data-g="apc-a750" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apc-a750" title="APC-Alexa Fluor 750: Tandem APC với Alexa Fluor 750, laser đỏ, đo ở FL8; tương đương APC-H7, APC-Cy7.">APC-A750</a><a data-g="autosetup" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-autosetup" title="quy trình cài đặt tự động của Navios: Bộ protocol và wizard chỉnh điện áp cho hạt Flow-Set Pro rơi vào vùng đích, tạo ma trận bù và kiểm chứng cài đặt.">AutoSetup</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="bu-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bu-mau" title="compensation: Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.">Bù màu</a><a data-g="chat-nhuom-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-huynh-quang" title="fluorochrome: Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.">Chất nhuộm huỳnh quang</a><a data-g="chat-nhuom-tandem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-tandem" title="tandem dye: Hai chất nhuộm ghép đôi (ví dụ PE với Cy7): chất thứ nhất hấp thụ laser rồi chuyển năng lượng sang chất thứ hai để phát ở bước sóng xa hơn. Dễ phân rã do ánh sáng, nhiệt và chất cố định.">Chất nhuộm tandem</a><a data-g="chung-sinh-hoc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-chung-sinh-hoc" title="biological control, ví dụ IMMUNO-TROL: Mẫu tế bào đã ổn định có giá trị gán sẵn, chạy như mẫu bệnh nhân để kiểm tra toàn bộ quy trình nhuộm, ly giải, thu và phân tích.">Chứng sinh học</a><a data-g="chuoi-nhe-kappa-lambda" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chuoi-nhe-kappa-lambda" title="κ / λ light chain: Mỗi tế bào B chỉ dùng một loại chuỗi nhẹ. Quần thể B bình thường có cả hai (đa dòng, κ:λ ≈ 1–2); chỉ một loại là đơn dòng.">Chuỗi nhẹ kappa / lambda</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="co-dinh-lam-tham" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-co-dinh-lam-tham" title="fixation / permeabilization: Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.">Cố định / làm thấm</a><a data-g="composite" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-composite" title="Composite Protocol: Chức năng ghép nhiều data set (tối đa 32 ống) vào một protocol để phân tích panel nhiều ống trên một màn hình.">Composite</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="dau-do" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dau-do" title="detector: Bộ phận biến ánh sáng thành tín hiệu điện (photodiode hoặc PMT). Mỗi đầu dò huỳnh quang trên Navios được đặt tên FL1 đến FL10.">Đầu dò</a><a data-g="decade" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-decade" title="một bậc mười: Một khoảng trên thang log mà giá trị tăng 10 lần, ví dụ 1→10 hoặc 100→1 000.">Decade</a><a data-g="dien-ap-pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dien-ap-pmt" title="PMT voltage: Mức điện áp đặt cho ống nhân quang; tăng điện áp làm tín hiệu cả kênh sáng hơn (dịch sang phải), đồng thời làm thay đổi giá trị spillover vào kênh đó.">Điện áp PMT</a><a data-g="doi-chung-don-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-doi-chung-don-mau" title="single-stain control: Ống hoặc hạt chỉ nhuộm một chất nhuộm, dùng để đo spillover của chất nhuộm đó sang mọi đầu dò khi tạo ma trận bù.">Đối chứng đơn màu</a><a data-g="doi-chung-noi-tai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doi-chung-noi-tai" title="internal control: Tế bào bình thường có sẵn trong cùng mẫu, cùng ống, dùng làm mốc so sánh cường độ hoặc kiểm tra bù.">Đối chứng nội tại</a><a data-g="ecd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ecd" title="Energy Coupled Dye, PE-Texas Red: Tandem PE với Texas Red, phát ~615 nm, đo ở FL3. Tương đương PE-CF594.">ECD</a><a data-g="fcs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fcs" title="Flow Cytometry Standard: Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.">FCS</a><a data-g="fitc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fitc" title="fluorescein isothiocyanate: Chất nhuộm kích thích bằng laser 488 nm, phát xanh lá (~520 nm), đo ở FL1. Độ sáng trung bình, giá rẻ, ít phân rã.">FITC</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="fmo" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fmo" title="Fluorescence Minus One, đối chứng thiếu một màu: Ống có đủ mọi kháng thể của panel trừ một màu; cho biết ranh giới âm thật của kênh thiếu, có tính cả độ loe từ các màu còn lại.">FMO</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="hat-bu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hat-bu" title="compensation beads: Hạt bắt kháng thể dùng làm đối chứng đơn màu: mỗi hạt gắn một kháng thể đúng chất nhuộm, cho quần thể dương rất sáng và quần thể âm rõ.">Hạt bù</a><a data-g="he-so-spillover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-he-so-spillover" title="spillover coefficient, s: Một ô của ma trận spillover: phần (thường ghi bằng %) tín hiệu của một chất nhuộm rơi vào một đầu dò khác.">Hệ số spillover</a><a data-g="histogram" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-histogram" title="biểu đồ một tham số: Biểu đồ đếm số sự kiện theo cường độ của một kênh.">Histogram</a><a data-g="ifu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ifu" title="Instructions for Use, hướng dẫn sử dụng: Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.">IFU</a><a data-g="isotype" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-isotype" title="kháng thể đối chứng cùng lớp: Kháng thể cùng lớp, cùng chất nhuộm nhưng không gắn đặc hiệu. Không dùng để đặt ngưỡng dương/âm trong flow lâm sàng.">Isotype</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="kenh-goc-kenh-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kenh-goc-kenh-nhan" title="primary / receiving channel: Kênh gốc: đầu dò dành cho chất nhuộm đang xét. Kênh nhận: đầu dò khác bị tín hiệu của chất nhuộm đó lọt sang.">Kênh gốc / kênh nhận</a><a data-g="khang-nguyen-khang-the" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-khang-nguyen-khang-the" title="antigen / antibody: Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.">Kháng nguyên / kháng thể</a><a data-g="kieu-hinh-mien-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kieu-hinh-mien-dich" title="immunophenotype: Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.">Kiểu hình miễn dịch</a><a data-g="kro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kro" title="Krome Orange: Chất nhuộm của Beckman kích thích bằng laser 405 nm, phát ~528 nm, đo ở FL10. Khá mờ, nên dùng cho CD45 (kháng nguyên rất nhiều). Tương đương BV510, V500.">KrO</a><a data-g="listcomp-quickcomp" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-listcomp-quickcomp" title="công cụ bù sau thu của Navios: Các tiện ích của phần mềm Navios EX để tạo hoặc áp ma trận bù cho file đã thu.">ListComp / QuickCOMP</a><a data-g="lmd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lmd" title="List Mode Data: Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.">LMD</a><a data-g="logicle" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-logicle" title="biexponential, thang hai hàm mũ: Thang lai: gần 0 gần như tuyến tính (hiển thị được giá trị âm sau bù), ở giá trị cao giống log. Thang mặc định nên dùng cho dữ liệu đã bù.">Logicle</a><a data-g="ly-giai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ly-giai" title="lysis: Phá hồng cầu bằng dung dịch (NH4Cl, VersaLyse…) để còn lại bạch cầu. Có kiểu không rửa (lyse/no-wash) và có rửa (stain/lyse/wash).">Ly giải</a><a data-g="ma-tai-lieu-beckman" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-ma-tai-lieu-beckman" title="B73085AF, C10993AH, C29335AA, B86351AA, A45429AG: Mã IFU dùng trong giáo trình: B73085AF (Navios EX), C10993AH (Kaluza C), C29335AA (addendum RUO Kaluza C), B86351AA (addendum Lymphocyte Subset Application), A45429AG (DI - Instrument Manager).">Mã tài liệu Beckman</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mau-so" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mau-so" title="denominator: Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.">Mẫu số</a><a data-g="mean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mean" title="trung bình số học: Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.">Mean</a><a data-g="mfi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mfi" title="Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị: Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.">MFI</a><a data-g="moc-am-moc-duong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-moc-am-moc-duong" title="đối chứng nội tại: Quần thể tế bào bình thường trong cùng ống, đã biết chắc âm hoặc dương với marker, dùng làm chuẩn để nói một quần thể khác là âm, mờ hay sáng.">Mốc âm / mốc dương</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pb" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pb" title="Pacific Blue: Chất nhuộm kích thích bằng laser tím 405 nm, phát ~455 nm, đo ở FL9. Tương đương BV421, V450.">PB</a><a data-g="pc5-pc5-5" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc5-pc5-5" title="PE-Cy5 / PE-Cy5.5: Tandem PE với cyanine 5 hoặc 5.5, phát ~670–700 nm, đo ở FL4.">PC5 / PC5.5</a><a data-g="pc7" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc7" title="PE-Cy7: Tandem PE với cyanine 7, phát ~770 nm, đo ở FL5. Dễ phân rã do ánh sáng và chất cố định.">PC7</a><a data-g="pe" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pe" title="phycoerythrin: Protein huỳnh quang lấy từ tảo đỏ, kích thích 488 nm, phát vàng cam (~575 nm), đo ở FL2. Một trong những chất nhuộm sáng nhất.">PE</a><a data-g="phan-ra-tandem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-phan-ra-tandem" title="tandem degradation: Liên kết trong chất nhuộm tandem bị hỏng nên phần tín hiệu phát ở chất cho (PE, APC) tăng lên; làm sai ma trận bù và gây quần thể dương giả.">Phân rã tandem</a><a data-g="poisson" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-poisson" title="phân bố Poisson: Quy luật của phép đếm sự kiện hiếm ngẫu nhiên: nếu đếm được n sự kiện thì SD ≈ √n và CV ≈ 1/√n.">Poisson</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="sop" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-sop" title="Standard Operating Procedure, quy trình thao tác chuẩn: Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.">SOP</a><a data-g="spillover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-spillover" title="phần tín hiệu lọt sang kênh khác: Tỷ lệ ánh sáng của một chất nhuộm rơi vào đầu dò dành cho chất nhuộm khác, vì phổ phát xạ rộng hơn cửa sổ kính lọc. Ghi bằng phần trăm.">Spillover</a><a data-g="spreading" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-spreading" title="độ loe sau bù (spillover spreading): Quần thể dương sáng ở một màu bị trải rộng ra trên kênh nhận sau bù, do dao động thống kê của photon. Không sửa được bằng chỉnh bù.">Spreading</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="thang-log" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-log" title="logarithmic scale: Trục trong đó mỗi khoảng bằng nhau ứng với giá trị nhân thêm 10 lần (decade). Tách tốt quần thể mờ và sáng nhưng không vẽ được giá trị ≤ 0.">Thang log</a><a data-g="thang-tuyen-tinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-tuyen-tinh" title="linear scale: Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.">Thang tuyến tính</a><a data-g="thieu-bu-bu-qua" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thieu-bu-bu-qua" title="under- / over-compensation: Thiếu bù: còn sót tín hiệu lọt sang, quần thể âm trông như dương mờ. Bù quá: trừ quá tay, trung vị quần thể dương thấp hơn mốc âm.">Thiếu bù / bù quá</a><a data-g="thu-the-fc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thu-the-fc" title="Fc receptor: Thụ thể trên mono, đại thực bào, bạch cầu hạt, bám vào đuôi Fc của kháng thể, gây nhuộm không đặc hiệu.">Thụ thể Fc</a><a data-g="trung-vi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-trung-vi" title="median: Giá trị nằm giữa khi xếp các tế bào theo cường độ: một nửa cao hơn, một nửa thấp hơn. Không bị đuôi và giá trị âm sau bù kéo lệch, nên dùng để đánh giá bù và báo MFI.">Trung vị</a><a data-g="tu-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tu-huynh-quang" title="autofluorescence, AF: Ánh sáng tế bào tự phát ra khi không nhuộm, do các phân tử nội sinh (flavin, NADH). Bạch cầu hạt và mono có tự huỳnh quang cao hơn lympho.">Tự huỳnh quang</a><a data-g="xac-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-xac-nhan" title="verification: Kiểm tra một xét nghiệm IVD dùng đúng chỉ định vẫn đạt hiệu năng nhà sản xuất công bố khi chạy tại phòng xét nghiệm.">Xác nhận</a><a data-g="xung" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-xung" title="pulse: Tín hiệu điện nhô lên rồi hạ xuống khi một tế bào đi qua laser; máy đo diện tích, chiều cao và độ rộng của xung.">Xung</a></div></div></details>

<div id="toan" class="ftb-anchor"></div>

## 4.1 Phép toán của bù màu

Bài toán của bù màu nói bằng lời như sau. Mỗi chất nhuộm có một đầu dò “nhà” của nó (FITC ở FL1, PE ở FL2…). Nhưng phổ phát xạ của chất nhuộm rộng hơn cửa sổ kính lọc, nên một phần ánh sáng của nó rơi vào đầu dò của chất nhuộm khác (spillover, mục 1.5). Máy chỉ ghi được **tổng ánh sáng tới từng đầu dò**; nó không biết phần nào của chất nhuộm nào. Bù màu là phép tính ngược: từ những gì đầu dò đo được, tìm lại tín hiệu thật của từng chất nhuộm.

Để viết bài toán thành công thức, cần đặt tên cho từng đại lượng. Đọc bảng ký hiệu dưới đây trước, rồi mới đọc công thức.

<div class="kyhieu">
<div class="kh-t">Ký hiệu dùng trong mục 4.1</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Ký hiệu</th><th>Đọc là</th><th>Nghĩa</th><th>Ví dụ</th></tr></thead>
<tbody>
<tr><td class="sym">i</td><td>“i”</td><td>Số thứ tự của <b>chất nhuộm</b>. Trên Navios EX 10 màu, i chạy từ 1 đến 10; chất nhuộm i có đầu dò nhà là FL<i>i</i>.</td><td>i = 1 là FITC, i = 2 là PE</td></tr>
<tr><td class="sym">j</td><td>“j”</td><td>Số thứ tự của <b>đầu dò</b> (FL1 đến FL10).</td><td>j = 2 là đầu dò FL2</td></tr>
<tr><td class="sym">T<sub>i</sub></td><td>“T i” (T của <i>True</i>)</td><td><b>Tín hiệu thật</b> của chất nhuộm i trên tế bào. Đây là thứ cần tìm.</td><td>T<sub>FITC</sub> = 1 000</td></tr>
<tr><td class="sym">O<sub>j</sub></td><td>“O j” (O của <i>Observed</i>)</td><td><b>Tín hiệu đo được</b> ở đầu dò j, tức con số máy thật sự ghi vào file trước khi bù.</td><td>O<sub>FL2</sub> = 150</td></tr>
<tr><td class="sym">s<sub>ij</sub></td><td>“s i j”</td><td><b>Hệ số spillover</b>: phần tín hiệu của chất nhuộm i rơi vào đầu dò j, viết dạng thập phân (14,7% = 0,147). Quy ước s<sub>ii</sub> = 1: mọi hệ số được tính so với lượng tín hiệu mà đầu dò nhà nhận.</td><td>s<sub>FITC→FL2</sub> = 0,147</td></tr>
<tr><td class="sym">AF<sub>j</sub></td><td>“A F j”</td><td><b>Tự huỳnh quang</b> (autofluorescence) của tế bào ghi được ở đầu dò j, có ngay cả khi tế bào không nhuộm.</td><td>AF<sub>FL2</sub> ≈ 0,5</td></tr>
<tr><td class="sym">Σ<sub>i</sub></td><td>“tổng theo i” (sigma)</td><td>Cộng các số hạng đứng sau, cho i lần lượt từ 1 đến 10.</td><td>Σ<sub>i</sub> x<sub>i</sub> = x<sub>1</sub> + x<sub>2</sub> + … + x<sub>10</sub></td></tr>
<tr><td class="sym">S</td><td>“ma trận S”</td><td><b>Ma trận spillover</b>: bảng 10 hàng × 10 cột chứa mọi hệ số s<sub>ij</sub>; hàng là đầu dò nhận (j), cột là chất nhuộm gốc (i), đường chéo bằng 1.</td><td>Bảng bù trong Kaluza</td></tr>
<tr><td class="sym">O, T, AF</td><td>viết không có chỉ số</td><td><b>Vector</b>: một cột gồm 10 con số, mỗi số ứng với một đầu dò (O, AF) hoặc một chất nhuộm (T). Viết gọn để không phải viết 10 phương trình.</td><td>O = (O<sub>FL1</sub>, …, O<sub>FL10</sub>)</td></tr>
<tr><td class="sym">S·T</td><td>“S nhân T”</td><td>Phép nhân ma trận với vector: mỗi hàng của S nhân lần lượt với T rồi cộng lại. Kết quả chính là Σ<sub>i</sub> s<sub>ij</sub> × T<sub>i</sub> cho mọi j.</td><td></td></tr>
<tr><td class="sym">S⁻¹</td><td>“S nghịch đảo”</td><td><b>Ma trận nghịch đảo</b> của S: ma trận “gỡ trộn”, làm ngược đúng điều S đã làm. Nhân S⁻¹ với S thì như không làm gì. Phần mềm tự tính; người dùng không cần tính tay.</td><td></td></tr>
<tr><td class="sym">⇒</td><td>“suy ra”</td><td>Từ biểu thức bên trái biến đổi được biểu thức bên phải.</td><td></td></tr>
</tbody>
</table></div>
</div>

**Bước 1. Viết điều máy đo được.** Mỗi đầu dò nhận tổng đóng góp của mọi chất nhuộm, cộng thêm tự huỳnh quang:

<div class="formula">O<sub>j</sub> = Σ<sub>i</sub> s<sub>ij</sub> × T<sub>i</sub> + AF<sub>j</sub></div>

<p class="docthanh"><b>Đọc thành lời:</b> tín hiệu đo ở đầu dò j bằng tín hiệu thật của từng chất nhuộm nhân với phần của nó lọt vào đầu dò j, cộng tất cả lại, rồi cộng tự huỳnh quang ở đầu dò j. Ví dụ với đầu dò FL2: O<sub>FL2</sub> = 0,147 × T<sub>FITC</sub> + 1 × T<sub>PE</sub> + s<sub>ECD→FL2</sub> × T<sub>ECD</sub> + … + AF<sub>FL2</sub>.</p>

**Bước 2. Viết gọn 10 phương trình thành một.** Có 10 đầu dò nên có 10 phương trình như trên. Dùng ma trận và vector, cả 10 phương trình viết thành:

<div class="formula">O = S·T + AF</div>

**Bước 3. Giải ngược để tìm tín hiệu thật.** Chuyển AF sang trái rồi nhân hai vế với S⁻¹:

<div class="formula">T = S⁻¹·(O − AF)</div>

<p class="docthanh"><b>Đọc thành lời:</b> lấy tín hiệu đo được trừ tự huỳnh quang, rồi “gỡ trộn” bằng ma trận nghịch đảo, sẽ được tín hiệu thật của từng chất nhuộm. Đây chính là việc phần mềm làm mỗi khi bật bù màu; giá trị hiển thị sau bù là T.</p>

### Ví dụ hai màu: FITC và PE

Chỉ có FITC (đầu dò nhà FL1) và PE (đầu dò nhà FL2). Đo trên ống đơn màu thấy 14,7% tín hiệu FITC rơi vào FL2 (sFITC→FL2 = 0,147) và 1,5% tín hiệu PE rơi vào FL1 (sPE→FL1 = 0,015). Bỏ qua AF cho gọn, Bước 1 cho hai phương trình:

<div class="formula">O<sub>FL1</sub> = T<sub>FITC</sub> + 0,015 × T<sub>PE</sub><br/>O<sub>FL2</sub> = 0,147 × T<sub>FITC</sub> + T<sub>PE</sub></div>

Giải hệ hai phương trình hai ẩn (thế phương trình này vào phương trình kia) được:

<div class="formula">T<sub>PE</sub> = (O<sub>FL2</sub> − 0,147 × O<sub>FL1</sub>) ÷ (1 − 0,147 × 0,015) = (O<sub>FL2</sub> − 0,147 × O<sub>FL1</sub>) ÷ 0,9978<br/>T<sub>FITC</sub> = (O<sub>FL1</sub> − 0,015 × O<sub>FL2</sub>) ÷ 0,9978</div>

Mẫu số 0,9978 gần bằng 1, nên với hai màu, “trừ từng cặp” (TPE ≈ OFL2 − 0,147 × OFL1) đã gần đúng. Với 10 màu, mỗi đầu dò nhận phần lọt từ nhiều chất nhuộm cùng lúc, và các chất nhuộm đó lại lọt sang nhau. Các hệ số phụ thuộc lẫn nhau: thay một ô làm thay đổi kết quả ở các ô khác, và phép trừ từng cặp không còn đúng. Vì vậy phần mềm hiện đại lưu **ma trận spillover** (S) và tự tính S⁻¹, thay vì yêu cầu người dùng nhập “hệ số bù” trực tiếp.

**Cách Kaluza C hiển thị S.** Kaluza ghi ma trận theo quy ước `FL# (hàng) − %FL# (cột)`: hàng là đầu dò nhận (j), cột là chất nhuộm gốc, gọi theo đầu dò nhà của nó (i). Ô `FL2 − %FL1 = 14,7` nghĩa là đầu dò FL2 nhận 14,7% tín hiệu của chất nhuộm có nhà ở FL1, tức sFITC→FL2 = 0,147.

**Vector tự huỳnh quang (autofluorescence vector)** là AF trong công thức: được trừ đi trước khi bù rồi cộng lại sau. Nhờ vậy tế bào được bù như thể không có tự huỳnh quang, sau đó giữ nguyên mức nền thật. Với file LMD từ một số máy Beckman, Kaluza mặc định vector là 0,0309; bằng 0 nếu ma trận tạo không có ống không nhuộm hoặc file từ máy hãng khác.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Bù màu như lọc tiếng vọng giữa hai phòng</div>
<p>Hai người nói chuyện ở hai phòng cạnh nhau, tường mỏng: micro phòng A thu thêm 15% giọng phòng B. Nếu biết chính xác tỷ lệ 15% và biết giọng phòng B to bao nhiêu (đo bằng micro phòng B), có thể trừ đi phần vọng sang. Bù màu là đúng phép trừ đó, làm cùng lúc cho mọi cặp đầu dò.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Bù một tế bào bằng tay</div>
<p>Tế bào CD8-FITC, không có PE. Đo được O<sub>FL1</sub> = 1 000, O<sub>FL2</sub> = 150. Ma trận ghi FL2 − %FL1 = 14,7%, tức s<sub>FITC→FL2</sub> = 0,147.</p>
<div class="formula">T<sub>PE</sub> ≈ O<sub>FL2</sub> − 0,147 × O<sub>FL1</sub> = 150 − 0,147 × 1 000 = 3</div>
<p>(Tính đủ với mẫu số 0,9978 thì T<sub>PE</sub> = 3,0; khác biệt không đáng kể.) 3 nằm ngang mức tự huỳnh quang của tế bào âm: tế bào này PE âm, đúng như thực tế. Nếu ma trận chỉ ghi 10%, T<sub>PE</sub> = 150 − 100 = 50, tế bào hiện như PE dương mờ: thiếu bù.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Spillover và “hệ số bù”</div>
<p>Spillover là phần trăm tín hiệu lọt sang (đặc tính của chất nhuộm, kính lọc và điện áp). Hệ số bù là phép tính để trừ ngược lại. Với 2 màu hai con số gần như nhau; với 10 màu, các hệ số phụ thuộc lẫn nhau nên phần mềm lưu ma trận spillover và tự tính ngược. Trong Kaluza, ô “FL2 − %FL1” là spillover.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "matrix"}'><figcaption>Bù màu là giải hệ phương trình tuyến tính O = S·T + AF (giá trị minh họa).</figcaption></figure>

<div id="mophong" class="ftb-anchor"></div>

## 4.2 Mô phỏng: thiếu bù, bù đúng, bù quá và độ loe

<div class="lab" id="comp-lab">
<div class="labhead"><h4>FITC → PE, spillover thật 14,7%</h4><span class="stat">dữ liệu mô phỏng · thang logicle</span></div>
<div class="labgrid">
<canvas aria-label="Biểu đồ FL1 FITC so với FL2 PE" height="460" id="compCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label for="compSlider">Giá trị FL2 − %FL1 <output id="compOut">0,0%</output></label><input id="compSlider" max="30" min="0" step="0.1" type="range" value="0"/></div>
<div class="ctl"><label for="brightSlider">Độ sáng quần thể FITC+ <output id="brightOut">5 000</output></label><input id="brightSlider" max="40000" min="500" step="100" type="range" value="5000"/></div>
<div class="ctl"><label for="noiseSlider">Sai số photon trên FL2 (k) <output id="noiseOut">1,6</output></label><input id="noiseSlider" max="4" min="0.2" step="0.1" type="range" value="1.6"/></div>
<div><span class="pill bad" id="compStatus">Thiếu bù</span></div>
<div class="stat" id="compStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<p><b>Bài tập 1.</b> Kéo về 14,7%: median FL2 hai đám bằng nhau, đó là định nghĩa bù đúng. <b>Bài tập 2.</b> Giữ 14,7%, tăng độ sáng FITC lên 40 000: đám FITC+ loe rộng theo trục PE, tỷ số rSD tăng vọt, dù median vẫn đúng. <b>Bài tập 3.</b> Tăng k (mô phỏng kênh nhận có hiệu suất thu photon kém): độ loe tăng. Không thao tác bù nào làm hẹp được đám đã loe.</p>
</div>
</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Ba câu hỏi khi kéo thanh bù</div>
<ol><li>Trung vị FL2 của đám FITC+ đã bằng trung vị đám âm chưa? Đó là định nghĩa bù đúng.</li><li>Đám FITC+ có rộng hơn đám âm không? Rộng là bình thường (độ loe), không sửa bằng bù.</li><li>Nếu chỉnh tiếp, đám có hẹp lại không? Không bao giờ. Tăng bù chỉ kéo cả đám xuống.</li></ol>
<p>Phần mô phỏng ở chương 1 (mục 1.9) cho thấy thêm cùng dữ liệu này trông thế nào trên thang log.</p></div>

<div id="spread" class="ftb-anchor"></div>

## 4.3 Độ loe sau bù (spillover spreading)

Tín hiệu quang học là số photon, có sai số đếm Poisson tỷ lệ với căn bậc hai số photon. Khi một tế bào FITC sáng gửi nhiều photon sang FL2, phép bù trừ đúng phần trung bình, nhưng sai số ngẫu nhiên của phần photon đó vẫn ở lại. Kết quả: quần thể dương với màu gốc bị **loe ra trên kênh nhận** sau bù. Roederer (2001) chứng minh rằng bù màu không tạo thêm sai số mà chỉ làm lộ sai số đã có; và việc bù quá không làm hẹp được độ loe.

Hệ quả thực hành, rất quan trọng khi thiết kế và đọc panel:

- Một quần thể có thể **trông như dương mờ** trên kênh nhận chỉ vì loe. Ví dụ tế bào CD45 rất sáng trên Krome Orange có thể loe sang kênh nhận gần đó. Đánh giá bằng median, so với quần thể âm có cùng độ sáng màu gốc.
- **Kênh nhận nhiều loe sẽ kém nhạy** với kháng nguyên mờ. Không đặt marker mờ quan trọng vào kênh nhận loe từ một marker rất sáng trên cùng tế bào.
- Độ loe định lượng bằng **ma trận spillover spreading (SSM)** (Nguyen và cộng sự, 2013): mỗi ô cho biết độ lệch chuẩn tăng thêm trên kênh nhận cho mỗi đơn vị căn bậc hai tín hiệu kênh gốc. Kaluza không tính SSM trực tiếp, nhưng có thể ước lượng bằng cách so rSD quần thể dương và âm trên ống đơn màu, như phần mô phỏng ở trên.
- Một giá trị spillover lớn chưa chắc gây loe nhiều: spillover phụ thuộc điện áp kênh nhận, còn độ loe phụ thuộc số photon và hiệu suất thu. Đổi điện áp làm thay đổi con số spillover nhưng không đổi độ loe.

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Độ loe tăng theo căn bậc hai độ sáng</div>
<p>Ký hiệu: <b>√x</b> là căn bậc hai của x (√100 = 10). Ánh sáng tới đầu dò là các photon rời rạc; theo thống kê Poisson (mục 1.13), nếu trung bình nhận x photon thì số photon dao động khoảng ±√x giữa các tế bào. Phép bù trừ đúng phần trung bình nhưng không trừ được phần dao động này, nên phần dao động còn lại thành độ loe.</p>
<p>Spillover FITC → PE 15%. Quần thể FITC 1 000 gửi 150 đơn vị sang PE; độ dao động photon khoảng √150 ≈ 12. Quần thể FITC 10 000 gửi 1 500 đơn vị; dao động khoảng √1 500 ≈ 39. Sáng gấp 10 lần nhưng loe chỉ gấp khoảng 3,2 lần (√10). Dù vậy, 39 đơn vị đủ để che một kháng nguyên PE mờ có MFI 20 trên cùng tế bào.</p></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Loe như tiếng ồn nền khi có người hét bên cạnh</div>
<p>Trừ được giọng trung bình của người hét (bù màu), nhưng những dao động lên xuống của giọng họ thì không trừ hết. Người nói thì thầm (kháng nguyên mờ) đứng cạnh người hét sẽ khó nghe, dù micro tốt đến đâu. Vì vậy thiết kế panel tránh đặt marker mờ quan trọng vào kênh nhận loe từ một marker rất sáng trên cùng tế bào.</p></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "FL1 FITC (logicle)", "y": "FL2 PE sau bù (logicle)", "pops": [{"n": 900, "x": 0.2, "sx": 0.05, "y": 0.2, "sy": 0.05, "c": "muted", "l": "Âm"}, {"n": 400, "x": 0.5, "sx": 0.04, "y": 0.2, "sy": 0.06, "c": "b488", "l": "FITC trung bình"}, {"n": 400, "x": 0.85, "sx": 0.035, "y": 0.22, "sy": 0.12, "c": "r638", "l": "FITC rất sáng: loe"}], "seed": 806, "note": "mô phỏng", "xs": "logicle", "ys": "logicle"}' height="420" width="560"></canvas><figcaption>Bù đúng nhưng quần thể càng sáng càng loe trên kênh nhận (spreading error).</figcaption></figure>

<div id="capdon" class="ftb-anchor"></div>

## 4.4 Các cặp lọt chính trên Navios EX 10 màu

<div class="tbl-wrap"><table>
<thead><tr><th>Màu gốc → kênh nhận</th><th>Mức lọt (định tính)</th><th>Cơ chế</th><th>Lưu ý thiết kế</th></tr></thead>
<tbody>
<tr><td>FITC → PE (FL2)</td><td>Trung bình</td><td>Đuôi phát xạ FITC</td><td>Kinh điển, dễ bù; kappa FITC/lambda PE của ClearLLab cần kiểm tra cẩn thận</td></tr>
<tr><td>PE → ECD (FL3)</td><td>Cao</td><td>Phổ PE chồng lấn rộng 614 nm</td><td>Marker trên ECD cần sáng hoặc không đồng biểu hiện mạnh với marker PE</td></tr>
<tr><td>ECD → PC5.5 (FL4)</td><td>Trung bình–cao</td><td>Đuôi Texas Red</td><td></td></tr>
<tr><td>PC5.5 → PC7 (FL5)</td><td>Trung bình–cao</td><td>Đuôi Cy5.5</td><td></td></tr>
<tr><td>PC5.5 / PC7 → APC, APC-A700 (đỏ)</td><td>Có thể đáng kể</td><td>Cy5/Cy5.5/Cy7 bị kích thích chéo bởi 638 nm</td><td>Lọt giữa laser; cần ống đơn màu cho đủ</td></tr>
<tr><td>APC → APC-A700 (FL7)</td><td>Cao</td><td>Phổ APC chồng lên 725 nm</td><td>Quen thuộc trên mọi máy 3 laser</td></tr>
<tr><td>APC-A700 → APC-A750 (FL8)</td><td>Trung bình–cao</td><td></td><td></td></tr>
<tr><td>Pacific Blue → Krome Orange (FL10)</td><td>Trung bình</td><td>Đuôi Pacific Blue</td><td>CD19 PB / CD45 KrO trong ClearLLab: CD45 sáng nên ít ảnh hưởng</td></tr>
<tr><td>PE tandem phân rã → PE</td><td>Bất thường</td><td>Phân tử nhận hỏng</td><td>Spillover PC7→FL2 tăng bất thường gợi ý tandem hỏng</td></tr>
</tbody>
</table></div>

<p class="src">Mức lọt định tính dựa trên phổ chất nhuộm và cấu hình kính lọc; giá trị thực phụ thuộc điện áp và lô, luôn lấy từ ma trận của chính máy.</p>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“CD200 dương mờ trên tế bào T, có đúng không?”</div>
<p>Trong ống B của ClearLLab, CD5 nằm ở PC5.5 và CD200 ở PC7. Tế bào T có CD5 rất sáng, nên PC5.5 lọt và loe sang PC7. Kiểm tra:</p>
<ol><li>So trung vị PC7 của T (CD5 sáng) với lympho âm CD5 (NK) trên logicle.</li><li>Nếu trung vị cao hơn rõ: thiếu bù PC5.5 → PC7, hoặc tandem PC7 thoái biến.</li><li>Nếu trung vị bằng nhau nhưng đám rộng: độ loe, không phải CD200 dương.</li></ol></div>

<figure class="fig" data-fig='{"t": "spec", "dyes": ["APC", "APC-A700", "APC-A750", "PC5.5", "PC7"], "filters": ["FL6", "FL7", "FL8"], "lasers": [638], "from": 600, "note": "laser 638", "hl": "APC"}'><figcaption>Phổ (minh họa) trên laser đỏ: APC lọt mạnh sang cửa sổ FL7; tandem PC5.5/PC7 bị kích thích chéo bởi 638 nm.</figcaption></figure>

<div id="quytac" class="ftb-anchor"></div>

## 4.5 Bốn quy tắc của đối chứng bù màu

<ol class="steps">
<li><div><b>Cùng chất nhuộm, cùng lô với tandem.</b> FITC trên hạt và FITC trên tế bào có cùng phổ; nhưng PC7 lô này khác PC7 lô khác. Đối chứng tandem phải dùng đúng lô (hoặc đúng thuốc thử) như trong panel.</div></li>
<li><div><b>Quần thể dương sáng bằng hoặc sáng hơn tế bào cần đo.</b> Hệ số tính từ đối chứng mờ sẽ kém chính xác ở vùng sáng.</div></li>
<li><div><b>Quần thể dương và âm có cùng tự huỳnh quang.</b> Không dùng hạt trơn làm âm cho tế bào dương, hay lympho làm âm cho bạch cầu hạt dương (cách “universal negative”). Phương pháp Positive-Negative của Kaluza tính trên quần thể âm và dương trong cùng một ống.</div></li>
<li><div><b>Đủ sự kiện</b> để median ổn định, nhất là trên quần thể dương.</div></li>
</ol>

<div class="grid2">
<div class="card"><h4>Hạt bù màu (beads)</h4><p>Ưu: luôn sáng, phân bố hẹp, có ngay cho mọi kháng thể (hạt bắt kháng thể chuột), không cần mẫu tế bào. Nhược: tự huỳnh quang khác tế bào; một số tandem gắn hạt khác gắn tế bào. ClearLLab có Compensation Beads dùng với Compensation Kit (10 ống đơn màu).</p></div>
<div class="card"><h4>Tế bào nhuộm đơn màu</h4><p>Ưu: đúng nền tự huỳnh quang, đúng điều kiện ly giải/cố định. Nhược: một số kháng nguyên cho quần thể dương mờ hoặc ít. Cyto-Comp Cells, máu toàn phần nhuộm QuickCOMP 2 hoặc 4 là các lựa chọn của Beckman cho AutoSetup.</p></div>
</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Quần thể dương trên đối chứng phải đủ sáng</div>
<p>Đối chứng đơn màu dùng hạt có FITC = 200, trong khi tế bào bệnh nhân có FITC tới 5 000. Hệ số tính từ hạt 200 có sai số nhỏ, khi nhân lên 5 000 thì sai số phóng to 25 lần; một lệch 0,3% thành sai 15 đơn vị PE, đủ để tạo dương giả mờ. Quy tắc: quần thể dương trên đối chứng phải sáng bằng hoặc hơn tế bào cần đo.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Cùng chất nhuộm", "cùng lô với tandem", "accent"], ["Đủ sáng", "≥ tế bào cần đo", "warn"], ["Cùng nền", "âm và dương cùng tự huỳnh quang", "b488"], ["Đủ sự kiện", "median ổn định", "v405"]], "per": 4, "h": 80}'><figcaption>Bốn quy tắc của đối chứng bù màu.</figcaption></figure>

<div id="navios" class="ftb-anchor"></div>

## 4.6 Bù màu trên Navios EX

Có ba con đường:

- **AutoSetup**: Application Definition Wizard tạo các protocol đơn màu `_FL01` đến `_FLnn` và `_VERIFY`. AutoSetup II Wizard chạy các ống đơn màu, tính ma trận, ghi vào file Settings của ứng dụng. Tham số bù phải nằm trong 16 tham số đầu tiên của Base Protocol.
- **Ma trận tay** trong thẻ Compensation của Cytometer Control (0–100%, bước 0,1), dùng cho chỉnh nhỏ.
- **Bù sau thu** bằng LMD QuickCOMP (thanh trượt), ListComp hoặc nhập ma trận từ Kaluza C (lưu dạng `*.PRO`, chỉ khi data set xuất phát từ Navios).

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">AutoSetup bù màu như chụp ảnh từng màu riêng</div>
<p>Mỗi ống đơn màu (_FL01, _FL02…) chỉ có một chất nhuộm, nên mọi tín hiệu ở các kênh khác chính là phần lọt sang. Máy đo phần lọt đó cho từng màu, ghép thành ma trận và lưu vào file Settings. Ống _VERIFY dùng để kiểm tra lại ma trận trên một ống nhiều màu.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["AutoSetup", "ống _FL01… _VERIFY", "accent"], ["Ma trận tay", "Cytometer Control", "b488"], ["Sau thu", "LMD QuickCOMP, ListComp", "warn"], ["Từ Kaluza", "lưu *.PRO", "v405"]], "per": 4}'><figcaption>Bốn con đường bù màu trên Navios EX.</figcaption></figure>

<div id="kaluza" class="ftb-anchor"></div>

## 4.7 Bù màu trong Kaluza C: chi tiết thao tác

### Compensation pane

Pane gồm ma trận spillover cho mọi kênh huỳnh quang của data set và (nếu bật) cột vector tự huỳnh quang ở bên trái. Công cụ: chỉnh bù, lưu file bù, nhập file bù, xóa về 0, hiện vector tự huỳnh quang, và tùy chọn *Apply fluorescence parameter resolution to compensation algorithm*.

<div class="tbl-wrap"><table>
<thead><tr><th>Thao tác</th><th>Cách làm</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>Sửa một ô</td><td>Bấm vào ô (tô xanh), gõ giá trị, Enter</td><td>0–100% chữ đen; ngoài khoảng chữ vàng; dưới −500% hoặc trên 500% chữ đỏ và bị hủy</td></tr>
<tr><td>Thanh trượt trên biểu đồ</td><td>Thẻ Gates &amp; Tools → biểu tượng Compensation; kéo thanh trên trục</td><td>Chỉ 0–100%; mũi tên hai đầu: 0,1%; bấm vào thanh: 1%</td></tr>
<tr><td>Lưu</td><td>Save Compensation As → <code>*.compensation</code> hoặc <code>*.txt</code>; chọn <code>*.PRO</code> để dùng trên Navios</td><td>Có thể dùng cho data set khác cùng bộ kênh</td></tr>
<tr><td>Nhập</td><td>Import compensation file → chọn file</td><td></td></tr>
<tr><td>Xóa</td><td>Clear spillover and autofluorescence</td><td>Đặt mọi giá trị về 0</td></tr>
<tr><td>Vector tự huỳnh quang tay</td><td>Histogram kênh đó; cổng tuyến tính quanh quần thể âm (decade 1); lấy X-Med; <code>X-Med / 1024 × 100</code>; nhập vào cột AF</td><td>Tốt nhất dùng file không nhuộm; nếu không có thì dùng quần thể âm</td></tr>
<tr><td>Kênh không hiện trong ma trận</td><td>Parameters pane: trường Type không được là Unknown</td><td></td></tr>
</tbody>
</table></div>

<div class="callout warn"><b class="t">Tùy chọn “Apply fluorescence parameter resolution to compensation algorithm”</b>Mặc định bật (trừ file NovoCyte) và dùng thuật toán chuẩn của Kaluza, có tính đến dải giá trị của tham số. Nếu file FCS có dải khác nhau giữa các tham số (thường gặp với máy hãng khác), kết quả có thể khác phần mềm khác; khi đó cân nhắc bỏ chọn để thống nhất. Với file LMD Navios giữ mặc định.</div>

### Generate Compensation: ba thuật toán

<div class="tbl-wrap"><table>
<thead><tr><th>Thuật toán</th><th>Cách tính theo IFU</th><th>Giả định</th><th>Khi dùng</th></tr></thead>
<tbody>
<tr><td>Positives Only</td><td>Tỷ số trung bình số học của quần thể dương trên kênh không có chất nhuộm / kênh có chất nhuộm</td><td>Quần thể âm ở tâm 0</td><td>Hạt có nền thấp</td></tr>
<tr><td>Positives with Autofluorescence Subtraction</td><td>Như trên, trừ tự huỳnh quang trước; lấy từ ống không nhuộm nếu có, nếu không coi âm nằm giữa decade 1</td><td>Tự huỳnh quang đồng nhất</td><td>Tế bào đơn màu kèm ống không nhuộm</td></tr>
<tr><td>Positive-Negative</td><td>Độ dốc đường nối tâm (median) cổng sáng và cổng mờ trong từng ống đơn màu; cổng sáng và mờ liên kết mặc định</td><td>Ống có cả tế bào không bắt màu</td><td>Máu toàn phần nhuộm đơn màu; phù hợp quy tắc cùng nền tự huỳnh quang</td></tr>
</tbody>
</table></div>

<ol class="steps">
<li><div>Menu ứng dụng → <code>New → Compensation</code>: tạo Compensation Composite (mặc định 6 ô, tối đa 32 data set).</div></li>
<li><div>Kéo các file đơn màu vào ô <code>&lt;drop Data Set here&gt;</code>; tùy chọn thêm file không nhuộm và một file đủ màu để kiểm chứng (Verification).</div></li>
<li><div>Gán vai trò cho từng file hoặc bấm <i>Detect Controls</i>; luôn rà lại; mỗi vai trò chọn một lần; file khác bộ kênh bị báo lỗi và phải thay.</div></li>
<li><div>Chọn Method và chạy. Kaluza tạo một sheet cho mỗi vai trò: khung thông tin cách tính, biểu đồ FS×SS có cổng liên kết giữa các sheet, các biểu đồ và cổng theo thuật toán.</div></li>
<li><div>Sửa cổng nếu cần; ma trận cập nhật theo thời gian thực. Cổng mặc định không có sự kiện làm thống kê N/A và biểu đồ trống: kéo cổng FS×SS vào đúng quần thể.</div></li>
<li><div>Xem sheet Verification (dùng thang logicle; các biểu đồ theo cài đặt Add All Plots). Tinh chỉnh tay nếu cần. Lưu ý: sau khi chỉnh tay, sửa cổng trên sheet huỳnh quang sẽ tính lại toàn bộ ma trận; có nút tính lại để xóa chỉnh tay.</div></li>
<li><div>Lưu file bù hoặc lưu cả Composite Analysis để tái sử dụng. Muốn quay lại màn hình Generate: Undo đến khi màn hình hiện lại, hoặc xóa mọi sheet (Clear Protocol).</div></li>
</ol>

<div class="callout"><b class="t">Trong Composite Protocol</b>Pane Compensation có danh sách thả xuống để chọn data set. Hai nút riêng: <i>Link compensation for all Data Sets</i> (các ống dùng chung một ma trận, sửa một nơi áp mọi nơi) và <i>Copy compensation to other Data Sets</i> (sao chép một lần). Với ClearLLab 4 ống từ cùng một lần chạy, Link là cách an toàn.</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Chỉnh một ô bù trong Kaluza mà không làm hỏng ô khác</div>
<ol><li>Mở Compensation pane, ghi lại (hoặc lưu file) ma trận gốc trước khi sửa.</li><li>Chọn plot hai kênh cần chỉnh, thang logicle, cổng trên quần thể dương sáng của màu gốc và quần thể âm.</li><li>Hiện Median kênh nhận cho hai cổng. Chỉnh đúng ô “kênh nhận − %kênh gốc” cho tới khi hai trung vị bằng nhau.</li><li>Kiểm tra lại các plot khác có dùng hai kênh đó, vì trong ma trận 10 màu một ô thay đổi có thể ảnh hưởng ô khác.</li><li>Lưu thành file bù mới, đặt tên có ngày và lô.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["New → Compensation", "Composite tối đa 32 file", "accent"], ["Thả file", "đơn màu, không nhuộm, đủ màu", "b488"], ["Gán vai trò", "Detect Controls", "v405"], ["Chọn thuật toán", "3 phương pháp", "warn"], ["Chỉnh cổng", "ma trận cập nhật ngay", "r638"], ["Kiểm chứng, lưu", "Verification, *.compensation", "ok"]], "per": 3, "snake": true}'><figcaption>Quy trình Generate Compensation trong Kaluza C.</figcaption></figure>

<div id="logicle" class="ftb-anchor"></div>

## 4.8 Thang logicle trong Kaluza

<ol class="steps">
<li><div>Rê chuột lên tên tham số trên trục, tên biến thành liên kết; bấm vào.</div></li>
<li><div>Trong danh sách, chọn tham số và chọn kiểu thang Logicle.</div></li>
<li><div>Trục xuất hiện thanh trượt; kéo để mở rộng vùng âm cho tới khi quần thể âm hiện hình chuông đầy đủ, không bị cắt ở trục.</div></li>
</ol>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Kéo thanh logicle không thay đổi dữ liệu</div>
<p>Thanh trượt logicle chỉ đổi độ rộng vùng tuyến tính quanh 0, tức là đổi cây thước. Dữ liệu, thống kê và kết quả bù không đổi. Nếu kéo mà “thấy bù đúng hơn”, đó là ảo giác của thước; phải kiểm tra bằng trung vị.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "scales"}'><figcaption>Mở rộng vùng âm bằng thanh trượt logicle cho tới khi quần thể âm có hình chuông đầy đủ.</figcaption></figure>

<div id="nhanbiet" class="ftb-anchor"></div>

## 4.9 Nhận biết bù sai trên dữ liệu bệnh nhân

<div class="tbl-wrap"><table>
<thead><tr><th>Dấu hiệu</th><th>Có thể do</th><th>Kiểm tra</th></tr></thead>
<tbody>
<tr><td>Quần thể nghiêng chéo, nhất là ở góc 45° trên log-log</td><td>Thiếu bù</td><td>So median kênh nhận của quần thể dương và âm với màu gốc</td></tr>
<tr><td>Quần thể bị ép xuống dưới mức âm, “lõm” ở phần sáng</td><td>Bù quá</td><td>Xem trên logicle; kiểm tra tandem</td></tr>
<tr><td>Quần thể có đuôi chéo chỉ ở phần rất sáng</td><td>Phi tuyến đầu dò, bão hòa</td><td>Giảm điện áp, kiểm tra quần thể có chạm đỉnh thang</td></tr>
<tr><td>Chỉ một ống trong panel bù sai</td><td>Ống đó dùng lô tandem khác hoặc ma trận không link</td><td>Kiểm tra Link compensation; lô thuốc thử</td></tr>
<tr><td>Mono dương giả trên nhiều kênh tandem</td><td>Tandem phân rã hoặc mono bắt tandem qua thụ thể Fc (đặc biệt PC5/PC7)</td><td>So với ống không có marker đó (FMO), dùng Fc block nếu SOP cho phép</td></tr>
<tr><td>Spillover PC7 → FL2 tăng dần qua các lần tạo ma trận</td><td>Lô PC7 cũ đi, phân rã do ánh sáng/nhiệt</td><td>Bảo quản tối, lạnh; thay lô</td></tr>
</tbody>
</table></div>

<div class="plots">
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD5 PC5.5","y":"CD200 PC7","xs":"logicle","ys":"logicle","seed":11,"pops":[{"n":900,"x":0.18,"sx":0.05,"y":0.18,"sy":0.05,"c":"muted","l":"Âm"},{"n":900,"line":[0.45,0.32,0.82,0.62],"sx":0.03,"sy":0.035,"c":"r638","l":"CD5+ thiếu bù","lx":0.5,"ly":0.72}],"note":"thiếu bù PC5.5→PC7"}'></canvas><figcaption>Thiếu bù PC5.5 → PC7: tế bào T CD5 sáng trông như CD200 dương mờ, càng sáng càng “dương”. Dễ đọc nhầm trong ống B ClearLLab.</figcaption></figure>
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD5 PC5.5","y":"CD200 PC7","xs":"logicle","ys":"logicle","seed":11,"pops":[{"n":900,"x":0.18,"sx":0.05,"y":0.18,"sy":0.05,"c":"muted","l":"Âm"},{"n":900,"x":0.72,"sx":0.045,"y":0.19,"sy":0.075,"c":"b488","l":"CD5+ bù đúng (loe)","lx":0.45,"ly":0.40}],"note":"bù đúng"}'></canvas><figcaption>Bù đúng: median CD200 của tế bào T bằng quần thể âm, nhưng loe rộng hơn. Đây không phải CD200 dương.</figcaption></figure>
</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Ba nhóm tế bào làm đối chứng nội tại trong một mẫu máu</div>
<ul><li><b>T và NK</b>: CD3+ và CD3− trên cùng ống; so kênh B (CD19, CD20) giữa hai nhóm, cả hai đều phải âm như nhau.</li><li><b>Bạch cầu hạt</b>: âm với hầu hết marker lympho, nhưng tự huỳnh quang cao hơn. So với bạch cầu hạt khác, không so với lympho.</li><li><b>B bình thường</b>: kappa và lambda phải ra hai đám cân đối; một đám nghiêng chéo là dấu hiệu bù kappa FITC / lambda PE.</li></ul></div>

<div class="learn vidu"><div class="lh" data-k="Đọc từng ô">Kiểm tra bù màu của một mẫu máu bằng bảng trung vị</div><p>Mẫu máu bình thường chạy ống T ClearLLab. Với mỗi cặp kênh, so trung vị kênh nhận của quần thể dương sáng (màu gốc) với quần thể âm cùng loại tế bào, trên thang logicle. <b>Bấm vào từng dòng</b> để xem cách tính và cách hiểu.</p><div class="tbl-wrap"><table class="walk"><thead><tr><th>Cặp (gốc → nhận)</th><th>Quần thể dương sáng</th><th>Median kênh nhận</th><th>Mốc âm</th><th>Median mốc âm</th></tr></thead><tbody><tr class="r"><td>FITC → PE (CD4 → CD2)</td><td class="num">—</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr><tr class="x"><td colspan="5">CD2 có trên mọi T nên không dùng được cặp này để kiểm tra bù: không có quần thể “CD4 sáng nhưng CD2 âm”. Chọn cặp mà quần thể dương ở kênh gốc thật sự âm ở kênh nhận.</td></tr><tr class="r"><td>PC5.5 → PC7 (CD5 → CD34)</td><td>T CD5 sáng</td><td class="num">0,7</td><td>NK (CD5 âm)</td><td class="num">0,6</td></tr><tr class="x"><td colspan="5">Chênh 0,1: trong sai số. Bù PC5.5 → PC7 đúng. Nhớ: so T với NK, cùng là lympho.</td></tr><tr class="r"><td>APC → APC-A700 (CD7 → CD8)</td><td>T CD4+ CD7 sáng</td><td class="num">3,9</td><td>T CD4+ CD7 âm hoặc B</td><td class="num">0,5</td></tr><tr class="x"><td colspan="5">Trung vị cao hơn mốc âm 3,4: <b>thiếu bù</b> APC → APC-A700. Ước lượng phần trăm cần thêm ≈ (chênh lệch median ở kênh nhận) ÷ (median CD7 của quần thể sáng − median CD7 của mốc âm), cùng công thức và ký hiệu ở mục 1.9; ở đây chênh lệch median là 3,4. Nếu CD7 sáng là 240 và mốc âm 0,8: 3,4 ÷ 239 ≈ 0,014 = 1,4%. Tăng ô FL7 − %FL6 thêm khoảng 1,4% rồi kiểm tra lại.</td></tr><tr class="r"><td>PC7 → APC-A750 (CD34 → CD3)</td><td class="num">—</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr><tr class="x"><td colspan="5">Máu bình thường gần như không có tế bào CD34 sáng, nên không kiểm tra được cặp này trên mẫu máu. Dùng hạt bù, hoặc mẫu có blast CD34+ đã biết.</td></tr><tr class="r"><td>PE → ECD (CD2 → CD56)</td><td>T CD2 sáng, CD56 âm</td><td class="num">0,7</td><td>B (CD2 âm, CD56 âm)</td><td class="num">0,6</td></tr><tr class="x"><td colspan="5">Chênh 0,1: bù PE → ECD đúng. Lưu ý chọn T CD56 âm; T-NK CD56+ sẽ làm sai phép so sánh.</td></tr></tbody></table></div><p class="src">Số liệu minh họa. Cặp kênh theo ống T ClearLLab trong bảng 6.3; trên mẫu thật, kiểm tra theo bảng phân bổ kênh của đúng lô.</p></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Trắc nghiệm nhanh</div><div class="quiz" data-src="q_ch04"></div><script id="q_ch04" type="application/json">[{"q": "Muốn kiểm tra bù FITC → PE, cần quần thể nào?", "o": ["Bất kỳ quần thể FITC sáng nào", "Quần thể FITC sáng nhưng thật sự âm PE, và mốc âm cùng loại tế bào", "Chỉ hạt bù", "Quần thể âm cả hai màu"], "a": 1, "e": "Quần thể dương ở kênh gốc phải âm ở kênh nhận thì mới thấy phần spillover còn sót."}, {"q": "Trung vị kênh nhận của quần thể dương cao hơn mốc âm 3,4; quần thể dương có median kênh gốc 240, mốc âm 0,8. Cần tăng bù khoảng bao nhiêu?", "o": ["0,14%", "1,4%", "14%", "3,4%"], "a": 1, "e": "3,4 ÷ (240 − 0,8) ≈ 1,4%."}, {"q": "Vì sao không so T CD5 sáng với bạch cầu hạt để kiểm tra bù PC5.5 → PC7?", "o": ["Bạch cầu hạt không có CD5", "Tự huỳnh quang bạch cầu hạt cao hơn lympho, dễ kết luận sai", "Bạch cầu hạt không vào cổng", "Không có lý do"], "a": 1, "e": "So cùng loại tế bào: lympho với lympho."}]</script></div>

<div id="fmo" class="ftb-anchor"></div>

## 4.10 Đối chứng FMO và đối chứng nội tại

**FMO (fluorescence minus one)** là ống có đủ mọi màu trừ một; cho biết ranh giới âm thật của kênh đó khi có độ loe từ các màu khác. Trong lâm sàng hiếm khi chạy FMO cho mọi kênh; thay vào đó dựa vào **đối chứng nội tại**: quần thể bình thường trong cùng ống biết chắc âm hoặc dương với marker đó. Ví dụ: tế bào T là đối chứng âm cho CD19 và dương cho CD5; bạch cầu hạt là đối chứng dương cho CD10, CD16, CD11b; lympho là âm cho CD33. Đối chứng isotype không còn được khuyến cáo để đặt ngưỡng dương tính trong miễn dịch kiểu hình lâm sàng đa màu.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">FMO là ảnh chụp “mọi thứ trừ một”</div>
<p>Ống FMO có đủ mọi màu trừ đúng một. Nó trả lời câu hỏi: nếu tế bào không có marker này, tín hiệu ở kênh này cao tới đâu do loe từ các màu khác? Ranh giới âm thật thường cao hơn ranh giới của ống không nhuộm, nhất là ở kênh nhận nhiều loe như PC7, APC-A700.</p></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "CD38 APC-A700", "y": "CD34 APC", "pops": [{"n": 1200, "x": 0.25, "sx": 0.06, "y": 0.16, "sy": 0.07, "c": "muted", "l": "FMO: không CD34"}, {"n": 30, "x": 0.25, "sx": 0.04, "y": 0.7, "sy": 0.04, "c": "muted", "l": "", "nolab": true}], "seed": 741, "note": "mô phỏng", "ys": "logicle", "xs": "logicle", "gates": [{"hline": 0.3, "c": "r638", "l": "ranh giới âm theo FMO"}]}' height="420" width="560"></canvas><figcaption>Ống FMO cho biết giới hạn trên thật của quần thể âm khi có loe từ các màu khác.</figcaption></figure>

<div id="khinao" class="ftb-anchor"></div>

## 4.11 Khi nào phải tạo lại ma trận

<ul class="tight">
<li>Đổi lô bất kỳ thuốc thử tandem (ECD, PC5.5, PC7, APC-A700, APC-A750) hoặc lô panel trộn sẵn.</li>
<li>Sau bảo trì quang học: thay kính lọc, căn chỉnh laser, thay laser.</li>
<li>Điện áp sau AutoSetup thay đổi lớn so với lúc tạo ma trận (spillover phụ thuộc điện áp).</li>
<li>Thấy dấu hiệu bù sai trên chứng sinh học hoặc trên mẫu bệnh nhân.</li>
<li>Định kỳ theo SOP, ví dụ hằng tháng, kể cả khi không có thay đổi.</li>
</ul>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Lần trước làm ma trận rồi, sao phải làm lại?”</div>
<p>Spillover phụ thuộc lô tandem và điện áp. Đổi lô PC7 hoặc lô ClearLLab, thay kính lọc, căn chỉnh laser, hay điện áp sau AutoSetup lệch nhiều so với lúc tạo ma trận, đều làm ma trận cũ không còn đúng. Kiểm tra nhanh: chạy ống _VERIFY hoặc mẫu bình thường, so trung vị quần thể dương và âm trên vài cặp quan trọng.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Đổi lô tandem", "ECD, PC5.5, PC7, A700, A750", "bad"], ["Bảo trì quang học", "kính lọc, laser", "warn"], ["Điện áp thay đổi lớn", "sau AutoSetup", "b488"], ["Dấu hiệu bù sai", "trên chứng hoặc bệnh nhân", "r638"], ["Định kỳ", "theo SOP", "accent"]], "per": 5, "h": 90}'><figcaption>Khi nào phải tạo lại ma trận bù.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 4.12 Hỏi bác sĩ

<details class="ans"><summary>“Ô FL7 − %FL6 là 45%, có phải máy kém không?”</summary><p>Không. APC phát xạ rộng sang 725 nm nên spillover APC → APC-A700 cao trên mọi máy có cấu hình tương tự, và con số còn phụ thuộc điện áp FL7. Điều quan trọng là độ loe và liệu marker trên FL7 có bị che. Trong ClearLLab, các cặp trên cùng laser đỏ được bố trí để giảm xung đột trên cùng tế bào.</p></details>

<details class="ans"><summary>“Có nên tự chỉnh bù bằng mắt cho từng bệnh nhân?”</summary><p>Không nên thường quy. Ma trận đúng được tạo từ đối chứng và áp cho mọi mẫu. Chỉnh bằng mắt trên mẫu bệnh nhân dễ “bù cho đẹp” và xóa mất biểu hiện thật (ví dụ đồng biểu hiện mờ). Chỉ chỉnh khi có lý do kỹ thuật được ghi lại (lô tandem khác, mẫu cố định), và lưu vết thay đổi.</p></details>

<details class="ans"><summary>“Sao bù đúng rồi mà quần thể vẫn không vuông vức?”</summary><p>Vì độ loe do thống kê photon. Hình dạng “loe hình nêm” trên kênh nhận là bình thường. Tiêu chí bù đúng là median của quần thể dương bằng median của quần thể âm trên kênh nhận, không phải hình dạng chữ nhật.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Ô FL7 − %FL6 trong ma trận là 45%. Có phải máy kém?</summary><p>Không. APC phát xạ rộng sang vùng APC-A700, nên spillover lớn là đặc tính vật lý; con số còn phụ thuộc điện áp FL7. Điều cần quan tâm là độ loe và liệu marker trên FL7 có bị che.</p></details><details class="ans"><summary>Đám CD8-FITC rộng theo trục PE gấp ba lần đám âm nhưng trung vị bằng nhau. Cần làm gì?</summary><p>Không cần chỉnh bù: đó là độ loe. Chỉ cần lưu ý khi đọc marker PE mờ trên tế bào CD8 sáng.</p></details><details class="ans"><summary>Khi nào ma trận bù tạo bằng hạt không dùng được cho tế bào?</summary><p>Khi tandem trên hạt và trong panel khác lô, hoặc hạt mờ hơn tế bào cần đo. Với chất nhuộm không phải tandem, phổ trên hạt và trên tế bào như nhau.</p></details></div>

<figure class="fig" data-fig='{"t": "tree", "root": "Quần thể trông nghiêng chéo trên kênh nhận", "b": [["Median dương &gt; âm", "Thiếu bù|Kiểm tra lô, tạo lại ma trận", "bad"], ["Median bằng nhau, loe rộng", "Spreading: bình thường|Không chỉnh bù", "ok"], ["Median dương &lt; âm", "Bù quá|Xem trên logicle", "warn"]]}'><figcaption>Phân biệt thiếu bù, bù quá và độ loe.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch04.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
