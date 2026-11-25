---
title: "16 · Lympho T/B/NK, CD4 và đếm tế bào gốc CD34"
description: "Đếm phân nhóm lympho, CD4 và tế bào gốc CD34 là các xét nghiệm định lượng thường quy nhất của phòng flow, và sai số ở đây ảnh hưởng trực tiếp tới quyết định lâm sàng như theo dõi điều trị HIV hay chọn thời điểm thu…"
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "16"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần III · Chương 16</div><div id="ftb-search"></div></div>

<p class="lead">Đếm phân nhóm lympho, CD4 và tế bào gốc CD34 là các xét nghiệm định lượng thường quy nhất của phòng flow, và sai số ở đây ảnh hưởng trực tiếp tới quyết định lâm sàng như theo dõi điều trị HIV hay chọn thời điểm thu gom tế bào gốc. Phần đầu chương dựa trên addendum Lymphocyte Subset Application (B86351AA) cho phần mềm tetra trên Navios EX. Phần sau trình bày đếm CD34 theo hướng dẫn ISHAGE, áp dụng với bộ Stem-Kit của Beckman Coulter.</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">9 mục mới · 64 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><div class="tbl-wrap" id="gtab-ch16"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-stem-kit"><td>Stem-Kit</td><td><span class="full">bộ thuốc thử đếm CD34 của Beckman Coulter.</span> Bộ CD45-FITC/CD34-PE kèm 7-AAD và hạt Stem-Count theo quy trình ISHAGE.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-ky-hieu-45-4-8-3"><td>Ký hiệu 45-4-8-3</td><td><span class="full">tên ống tetraCHROME.</span> Viết tắt các marker trong ống: CD45-FITC / CD4-RD1 / CD8-ECD / CD3-PC5. Tương tự 45-56-19-3 là CD45 / CD56 / CD19 / CD3.</td><td class="at"><a href="#tetra" title="Thuốc thử tetraCHROME và các protocol LSA">16.1</a></td></tr><tr id="g-lymphosum"><td>Lymphosum</td><td><span class="full">tổng lympho.</span> Tổng % T + B + NK trên cổng lympho; nên gần 100% (thường 95–105%). Lệch nhiều gợi ý cổng không sạch.</td><td class="at"><a href="#gating" title="Chiến lược gating TBNK">16.4</a></td></tr><tr id="g-lam"><td>LAM</td><td><span class="full">lipoarabinomannan.</span> Kháng nguyên vi khuẩn lao đo trong nước tiểu, dùng sàng lọc lao ở người HIV có CD4 thấp.</td><td class="at"><a href="#hiv" title="CD4 trong HIV">16.6</a></td></tr><tr id="g-scid"><td>SCID</td><td><span class="full">Severe Combined Immunodeficiency.</span> Suy giảm miễn dịch bẩm sinh nặng; T rất thấp hoặc không có.</td><td class="at"><a href="#khac" title="Ứng dụng khác của TBNK">16.7</a></td></tr><tr id="g-atg"><td>ATG</td><td><span class="full">anti-thymocyte globulin.</span> Thuốc ức chế miễn dịch làm giảm sâu T sau ghép.</td><td class="at"><a href="#khac" title="Ứng dụng khác của TBNK">16.7</a></td></tr><tr id="g-isoclonic"><td>Isoclonic</td><td><span class="full">đối chứng isoclonic.</span> Ống dùng kháng thể không gắn huỳnh quang dư để chặn gắn đặc hiệu, đánh giá nền nhuộm không đặc hiệu CD34.</td><td class="at"><a href="#cd34" title="Đếm tế bào gốc CD34 theo ISHAGE">16.8</a></td></tr><tr id="g-r1-r2-r3-r4"><td>R1, R2, R3, R4</td><td><span class="full">tên region (cổng) trong protocol.</span> Tên mặc định của các cổng trong protocol, ví dụ R1 cổng CD45, R2 cổng CD34 trong chuỗi ISHAGE.</td><td class="at"><a href="#cd34" title="Đếm tế bào gốc CD34 theo ISHAGE">16.8</a></td></tr><tr id="g-lieu-cd34"><td>Liều CD34</td><td><span class="full">CD34 dose.</span> Tổng tế bào CD34+ trong túi thu chia cân nặng bệnh nhân (tế bào/kg); quyết định đủ để ghép hay chưa.</td><td class="at"><a href="#cd34" title="Đếm tế bào gốc CD34 theo ISHAGE">16.8</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="7-aad" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-7-aad" title="7-aminoactinomycin D: Chất nhuộm DNA không vào được tế bào sống; tế bào 7-AAD dương là tế bào chết. Dùng trong đếm CD34 ISHAGE.">7-AAD</a><a data-g="acquisition-manager" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-acquisition-manager" title="trình quản lý thu nhận: Cửa sổ của phần mềm Navios EX để dựng worklist, chạy và theo dõi quá trình thu mẫu.">Acquisition Manager</a><a data-g="as-ten-ung-dung" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-as-ten-ung-dung" title="AutoSetup application: Tiền tố tên ứng dụng AutoSetup trên Navios, ví dụ AS LSA TBNK FC.">AS (tên ứng dụng)</a><a data-g="bach-cau-hat" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-bach-cau-hat" title="granulocyte: Nhóm bạch cầu có nhiều hạt trong bào tương: trung tính, ái toan, ưa base. SS cao (trừ basophil trên flow).">Bạch cầu hạt</a><a data-g="baseline-offset" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-baseline-offset" title="bù đường nền: Chức năng điện tử trừ mức nền của tín hiệu trước khi số hóa.">Baseline Offset</a><a data-g="basophil" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-basophil" title="bạch cầu ưa base: Bạch cầu hạt CD123+, HLA-DR−, CD45 mờ, SS thấp; dễ lẫn vào cổng lympho hoặc blast.">Basophil</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="cal-factor" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-cal-factor" title="hệ số hạt đếm: Nồng độ hạt đếm theo lô (hạt/µL), nhập vào worklist hoặc protocol để máy tính số tuyệt đối. Trong file lưu ở từ khóa @ABSCALFACTOR.">CAL factor</a><a data-g="car-t" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-car-t" title="Chimeric Antigen Receptor T-cell: Liệu pháp tế bào T gắn thụ thể nhân tạo nhắm kháng nguyên (CD19, BCMA…); có thể làm mất marker đích trên tế bào ác tính.">CAR-T</a><a data-g="cd45dim" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cd45dim" title="CD45 mờ: Vùng tế bào có CD45 yếu hơn lympho trên biểu đồ CD45 × SS, nơi blast thường nằm.">CD45dim</a><a data-g="chat-nhuom-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-huynh-quang" title="fluorochrome: Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.">Chất nhuộm huỳnh quang</a><a data-g="chat-nhuom-tandem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-tandem" title="tandem dye: Hai chất nhuộm ghép đôi (ví dụ PE với Cy7): chất thứ nhất hấp thụ laser rồi chuyển năng lượng sang chất thứ hai để phát ở bước sóng xa hơn. Dễ phân rã do ánh sáng, nhiệt và chất cố định.">Chất nhuộm tandem</a><a data-g="chung-sinh-hoc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-chung-sinh-hoc" title="biological control, ví dụ IMMUNO-TROL: Mẫu tế bào đã ổn định có giá trị gán sẵn, chạy như mẫu bệnh nhân để kiểm tra toàn bộ quy trình nhuộm, ly giải, thu và phân tích.">Chứng sinh học</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="co-dinh-lam-tham" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-co-dinh-lam-tham" title="fixation / permeabilization: Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.">Cố định / làm thấm</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="dem-cd34-ishage" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dem-cd34-ishage" title="ISHAGE gating: Chuỗi cổng chuẩn để đếm tế bào gốc CD34+: loại tế bào chết (7-AAD), cổng CD45, CD34 sáng với SS thấp, CD45 mờ, xác nhận FS/SS.">Đếm CD34 ISHAGE</a><a data-g="discriminator" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-discriminator" title="trigger, ngưỡng ghi nhận: Ngưỡng tín hiệu (thường trên FS) mà xung phải vượt thì máy mới ghi thành sự kiện. Đặt trước khi thu, khác với cổng đặt sau khi thu.">Discriminator</a><a data-g="dp-dn" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-15#g-dp-dn" title="double positive / double negative: T CD4+CD8+ (DP) hoặc CD4−CD8− (DN).">DP / DN</a><a data-g="edta" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-edta" title="ethylenediaminetetraacetic acid (K2/K3): Chất chống đông thông dụng nhất cho máu và tủy làm flow.">EDTA</a><a data-g="eln" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-eln" title="European LeukemiaNet: Mạng lưới leukemia châu Âu; đưa ra phân tầng nguy cơ AML (ELN 2022), khuyến cáo MRD AML (2021) và nhóm iMDS Flow.">ELN</a><a data-g="eqa-pt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-eqa-pt" title="External Quality Assessment / Proficiency Testing, ngoại kiểm: Chương trình gửi mẫu giống nhau cho nhiều phòng xét nghiệm và so sánh kết quả. Ví dụ UK NEQAS, CAP.">EQA / PT</a><a data-g="fcs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fcs" title="Flow Cytometry Standard: Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.">FCS</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="flow-count" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-flow-count" title="hạt đếm tuyệt đối của Beckman Coulter: Hạt huỳnh quang có nồng độ ghi theo lô (hạt/µL), thêm vào ống để tính số tế bào/µL. Chữ FC trong tên protocol là Flow-Count.">Flow-Count</a><a data-g="flow-set-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-set-pro" title="hạt chuẩn hóa cài đặt của Beckman Coulter: Hạt dùng để chỉnh điện áp PMT sao cho đỉnh rơi vào vùng đích, giúp cường độ ổn định giữa các ngày.">Flow-Set Pro</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="hat-dem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-hat-dem" title="counting beads: Hạt có nồng độ biết trước, cho vào ống để tính số tế bào tuyệt đối/µL trên một máy (single platform). Ví dụ Flow-Count.">Hạt đếm</a><a data-g="header" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-header" title="phần đầu file: Phần đầu file LMD/FCS chứa từ khóa (keyword): tên mẫu, ngày, cài đặt máy, ma trận bù, hệ số hạt đếm.">Header</a><a data-g="hiv-aids" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-hiv-aids" title="virus gây suy giảm miễn dịch ở người / hội chứng suy giảm miễn dịch mắc phải: Virus tấn công T CD4; số CD4 tuyệt đối dùng để phân giai đoạn và quyết định dự phòng.">HIV / AIDS</a><a data-g="hong-cau-co-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-hong-cau-co-nhan" title="nucleated red blood cell, NRBC: Tiền thân hồng cầu còn nhân; bình thường chỉ ở tủy. Trên flow: CD45 âm hoặc rất mờ, SS thấp; CD71, CD235a dương.">Hồng cầu có nhân</a><a data-g="int" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-int" title="integral, diện tích xung: Tổng tín hiệu dưới xung; tỷ lệ với tổng lượng ánh sáng phát ra. Là tham số mặc định để đo cường độ.">INT</a><a data-g="ishage" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ishage" title="International Society of Hematotherapy and Graft Engineering: Hội đưa ra quy trình cổng chuẩn cho đếm tế bào CD34 (ISHAGE gating).">ISHAGE</a><a data-g="ivd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ivd" title="In Vitro Diagnostic, chẩn đoán in vitro: Sản phẩm được cơ quan quản lý cho phép dùng để chẩn đoán trên bệnh phẩm người, theo đúng chỉ định ghi trên nhãn.">IVD</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="khang-nguyen-khang-the" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-khang-nguyen-khang-the" title="antigen / antibody: Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.">Kháng nguyên / kháng thể</a><a data-g="khang-the-dieu-tri-che-epitope" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08c#g-khang-the-dieu-tri-che-epitope" title="therapeutic antibody interference: Thuốc kháng thể (daratumumab anti-CD38, rituximab anti-CD20, elotuzumab anti-CD319…) chiếm epitope hoặc loại tế bào đích, làm marker “mất” trên flow.">Kháng thể điều trị che epitope</a><a data-g="khoang-tham-chieu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-khoang-tham-chieu" title="reference interval: Khoảng giá trị của người khỏe mạnh, dùng để đánh giá kết quả bệnh nhân.">Khoảng tham chiếu</a><a data-g="lsa" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-lsa" title="Lymphocyte Subset Application: Ứng dụng đếm phân nhóm lympho (T, B, NK, CD4, CD8) trên Navios với panel tetraCHROME, có tính số tuyệt đối.">LSA</a><a data-g="ly-giai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ly-giai" title="lysis: Phá hồng cầu bằng dung dịch (NH4Cl, VersaLyse…) để còn lại bạch cầu. Có kiểu không rửa (lyse/no-wash) và có rửa (stain/lyse/wash).">Ly giải</a><a data-g="lympho" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-lympho" title="lymphocyte: Bạch cầu nhỏ, nhân tròn đặc; gồm ba loại B, T và NK chỉ phân biệt được bằng marker. CD45 sáng nhất, SS thấp.">Lympho</a><a data-g="ma-tai-lieu-beckman" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-ma-tai-lieu-beckman" title="B73085AF, C10993AH, C29335AA, B86351AA, A45429AG: Mã IFU dùng trong giáo trình: B73085AF (Navios EX), C10993AH (Kaluza C), C29335AA (addendum RUO Kaluza C), B86351AA (addendum Lymphocyte Subset Application), A45429AG (DI - Instrument Manager).">Mã tài liệu Beckman</a><a data-g="mien-dich-bam-sinh-thich-ung" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-mien-dich-bam-sinh-thich-ung" title="innate / adaptive immunity: Bẩm sinh: nhanh, không đặc hiệu từng kháng nguyên, không trí nhớ (trung tính, mono, NK…). Thích ứng: đặc hiệu từng kháng nguyên, chậm lần đầu, có trí nhớ (B, T).">Miễn dịch bẩm sinh / thích ứng</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pc5-pc5-5" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc5-pc5-5" title="PE-Cy5 / PE-Cy5.5: Tandem PE với cyanine 5 hoặc 5.5, phát ~670–700 nm, đo ở FL4.">PC5 / PC5.5</a><a data-g="pe" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pe" title="phycoerythrin: Protein huỳnh quang lấy từ tảo đỏ, kích thích 488 nm, phát vàng cam (~575 nm), đo ở FL2. Một trong những chất nhuộm sáng nhất.">PE</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="qc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-qc" title="Quality Control, kiểm soát chất lượng: Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).">QC</a><a data-g="rd1" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-rd1" title="tên cũ của PE ở Beckman Coulter: Cách Beckman gọi PE trong các sản phẩm cũ, ví dụ CD4-RD1.">RD1</a><a data-g="single-dual-platform" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-single-dual-platform" title="đếm tuyệt đối trên một máy / hai máy: Single platform (SPT): tính số tuyệt đối ngay trên máy flow bằng hạt đếm. Dual platform: lấy % từ flow nhân với số tuyệt đối từ máy huyết học.">Single / dual platform</a><a data-g="sop" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-sop" title="Standard Operating Procedure, quy trình thao tác chuẩn: Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.">SOP</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="tao-mau" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-tao-mau" title="hematopoiesis: Quá trình tế bào gốc tạo máu tự làm mới và biệt hóa thành mọi dòng tế bào máu, chủ yếu ở tủy xương.">Tạo máu</a><a data-g="tbnk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-tbnk" title="T, B và NK: Xét nghiệm đếm ba quần thể lympho chính (T, B, NK) và phân nhóm CD4, CD8, kèm số tuyệt đối.">TBNK</a><a data-g="tetrachrome" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-tetrachrome" title="CYTO-STAT tetraCHROME: Bộ thuốc thử 4 màu của Beckman Coulter cho đếm phân nhóm lympho (45-4-8-3 và 45-56-19-3).">tetraCHROME</a><a data-g="tham-dinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tham-dinh" title="validation: Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).">Thẩm định</a><a data-g="thang-tuyen-tinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-tuyen-tinh" title="linear scale: Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.">Thang tuyến tính</a><a data-g="uk-neqas" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-uk-neqas" title="UK National External Quality Assessment Service: Chương trình ngoại kiểm của Anh, có các module flow (phân nhóm lympho, CD34, leukemia, PNH).">UK NEQAS</a><a data-g="vung-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-vung-dich" title="target channel: Vị trí kênh (trên trục) mà đỉnh hạt Flow-Set Pro phải rơi vào sau khi chỉnh điện áp; giữ cho cường độ ổn định theo thời gian.">Vùng đích</a><a data-g="who-haem5" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-who-haem5" title="WHO Classification of Haematolymphoid Tumours, 5th edition (2022): Phân loại u tạo máu và lympho của Tổ chức Y tế Thế giới, xuất bản 2022.">WHO-HAEM5</a><a data-g="xac-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-xac-nhan" title="verification: Kiểm tra một xét nghiệm IVD dùng đúng chỉ định vẫn đạt hiệu năng nhà sản xuất công bố khi chạy tại phòng xét nghiệm.">Xác nhận</a></div></div></details>

<div id="tetra" class="ftb-anchor"></div>

## 16.1 Thuốc thử tetraCHROME và các protocol LSA

Hai thuốc thử 4 màu trên laser xanh: CYTO-STAT tetraCHROME **CD45-FITC / CD4-RD1 / CD8-ECD / CD3-PC5** (gọi tắt 45-4-8-3) và **CD45-FITC / CD56-RD1 / CD19-ECD / CD3-PC5** (45-56-19-3). TBNK là T, B và NK; SPT là single platform technology (đếm tuyệt đối trên một máy bằng hạt Flow-Count).

<div class="tbl-wrap"><table>
<thead><tr><th>Panel</th><th>Protocol</th><th>Mô tả</th></tr></thead>
<tbody>
<tr><td>LSA TBNK FC Assay.pnl</td><td>LSA 45-4-8-3 Flow-Count(TM).pro; LSA 45-56-19-3 Flow-Count(TM).pro</td><td>2 ống với Flow-Count (SPT)</td></tr>
<tr><td>LSA 45-4-8-3 FC Assay.pnl</td><td>LSA 45-4-8-3 Flow-Count(TM).pro</td><td>1 ống CD4/CD8 với Flow-Count</td></tr>
<tr><td>LSA TBNK Assay.pnl</td><td>LSA 45-4-8-3.pro; LSA 45-56-19-3.pro</td><td>2 ống không có Flow-Count</td></tr>
<tr><td>LSA 45-4-8-3 Assay.pnl</td><td>LSA 45-4-8-3.pro</td><td>1 ống không có Flow-Count</td></tr>
</tbody>
</table></div>

<p class="src">Bảng 1.1 của addendum B86351AA. Các protocol LSA là User-Modified (mở khóa), chỉ dùng nghiên cứu; phòng xét nghiệm tự thẩm định.</p>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">RD1 và PE, PC5 và PC5.5</div>
<p>Thuốc thử tetraCHROME dùng tên chất nhuộm cũ của Beckman: RD1 tương đương PE, PC5 là tandem PE-Cy5. PC5 khác PC5.5 của ClearLLab (PE-Cy5.5). Khi so cấu hình hay tạo ma trận bù, dùng đúng tên trong tờ hướng dẫn thuốc thử.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["45-4-8-3", ["CD45-FITC", "CD4-RD1", "CD8-ECD", "CD3-PC5"], "b488"], ["45-56-19-3", ["CD45-FITC", "CD56-RD1", "CD19-ECD", "CD3-PC5"], "accent"]]}'><figcaption>Hai thuốc thử CYTO-STAT tetraCHROME dùng trong LSA.</figcaption></figure>

<div id="lsa" class="ftb-anchor"></div>

## 16.2 LSA so với tetra khóa

<div class="grid2">
<div class="card"><h4>Tetra khóa (IVD)</h4><p>Thuật toán tự động, protocol khóa để giảm chủ quan; có đầy đủ thông báo lỗi tetra. Dùng cho mẫu thường quy.</p></div>
<div class="card"><h4>LSA (mở khóa)</h4><p>Cùng thuật toán tetra nhưng cho chỉnh cổng và region sau khi thuật toán chạy xong, cho đặt điều kiện dừng tùy ý. Dùng cho mẫu bất thường (lympho rất thấp, nhiều mảnh vụn). Chỉ còn thông báo “Invalid Protocol” và “Baseline Offset”.</p></div>
</div>

<div class="callout bad"><b class="t">Cảnh báo trong addendum</b>
<ul class="tight" style="margin:0">
<li>Tắt laser đỏ và tím (nếu có) trong Cytometer Control Acquisition Setup trước khi dùng protocol LSA.</li>
<li>Không đổi tên hay xóa cổng/region, nếu không sẽ báo Invalid Protocol; chỉ được chỉnh vị trí.</li>
<li>Thêm hoặc sắp lại tham số làm mất tên gốc; phải vào File → Edit FCS Header Attributes và đặt lại đúng: FS INT Lin → FS; SS INT Lin → SS; FL1 INT Log → CD45-FITC; FL2 INT Log → CD4-RD1; FL3 INT Log → CD8-ECD; FL4 INT Log → CD3-PC5. Sai tên thì thuật toán không chạy.</li>
<li>Khuyến cáo mạnh thu tối thiểu 6 000 sự kiện lympho; với Flow-Count phải có tối thiểu 1 000 sự kiện hạt để có kết quả tế bào/µL.</li>
</ul></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Tetra khóa như hộp số tự động, LSA như số tay</div>
<p>Tetra khóa tự chạy thuật toán và báo lỗi khi có gì bất thường, ít phụ thuộc người dùng. LSA cùng thuật toán nhưng cho người dùng chỉnh cổng sau đó: linh hoạt hơn, nhưng người dùng chịu trách nhiệm về chỉnh sửa, và một số cảnh báo không còn. Dùng LSA khi cần, có SOP về khi nào được chỉnh cổng.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["tetra khóa (IVD)", ["Thuật toán tự động", "Protocol khóa", "Đủ thông báo lỗi tetra"], "ok"], ["LSA mở khóa (RUO)", ["Cùng thuật toán, chỉnh cổng sau", "Tự đặt điều kiện dừng", "Chỉ còn Invalid Protocol, Baseline Offset"], "warn"]]}'><figcaption>So sánh tetra khóa và LSA mở khóa.</figcaption></figure>

<div id="qc" class="ftb-anchor"></div>

## 16.3 QC cho LSA

<ol class="steps">
<li><div>Thiết lập QC và chuẩn bị mẫu QC theo chương 4 của System Guide tetra.</div></li>
<li><div>Chọn ứng dụng AS LSA TBNK FC-C; nhập số carousel; Acquisition Manager tự điền các protocol AS LSA TBNK FC.</div></li>
<li><div>Protocol <code>LSA TBNK FC_STAND</code> có vùng đích giữ tín hiệu từng tham số trên Flow-Set Pro. Vùng đích được gán theo lô Flow-Set Pro trong tờ hướng dẫn và phải nhập đúng vào protocol LSA_STAND cho lô đang dùng; không cần thu 20 điểm để tự lập.</div></li>
<li><div>Nếu cần đếm tuyệt đối: đóng báo cáo nạp carousel và nhập CAL factor của lô Flow-Count trong Acquisition Manager.</div></li>
<li><div>Kiểm tra vị trí ống trên Acquisition Manager hoặc báo cáo nạp carousel; nạp ống (Flow-Set Pro trước), đặt carousel, chạy.</div></li>
<li><div>Chạy chứng IMMUNO-TROL / IMMUNO-TROL Low; đối chiếu giá trị gán.</div></li>
</ol>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Ba thứ phải nhập đúng mỗi khi đổi lô</div>
<ul><li>Vùng đích Flow-Set Pro theo lô vào protocol LSA _STAND.</li><li>CAL factor (nồng độ hạt) của lô Flow-Count vào Acquisition Manager.</li><li>Giá trị gán của lô IMMUNO-TROL để so kết quả.</li></ul>
<p>Sai CAL factor là sai toàn bộ số tuyệt đối theo đúng tỷ lệ sai, mà QC hạt không phát hiện.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["AS LSA TBNK FC-C", "chọn ứng dụng", "accent"], ["Vùng đích", "nhập theo lô Flow-Set Pro", "warn"], ["CAL factor", "lô Flow-Count", "b488"], ["Nạp carousel", "Flow-Set Pro trước", "v405"], ["IMMUNO-TROL", "so giá trị gán", "ok"]], "per": 5, "h": 84}'><figcaption>Quy trình QC cho LSA.</figcaption></figure>

<div id="gating" class="ftb-anchor"></div>

## 16.4 Chiến lược gating TBNK

<div class="plots">
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD45 FITC","y":"Side Scatter","xs":"log","ys":"lin","seed":161,"pops":[{"n":1400,"x":0.8,"sx":0.035,"y":0.13,"sy":0.035,"c":"b488","l":"Lympho","lx":0.84,"ly":0.26},{"n":400,"x":0.73,"sx":0.03,"y":0.34,"sy":0.04,"c":"accent","l":"Mono","lx":0.78,"ly":0.42},{"n":2200,"x":0.6,"sx":0.04,"y":0.68,"sy":0.07,"c":"warn","l":"Hạt","lx":0.36,"ly":0.86},{"n":400,"x":0.1,"sx":0.05,"y":0.06,"sy":0.03,"c":"muted","l":"Mảnh vụn","lx":0.04,"ly":0.18},{"n":260,"x":0.45,"sx":0.015,"y":0.04,"sy":0.012,"c":"r638","l":"Flow-Count","lx":0.36,"ly":0.16}],"gates":[{"poly":[[0.68,0.04],[0.95,0.04],[0.95,0.24],[0.7,0.24]],"c":"b488","l":"Ly"}],"note":"mô phỏng · ống 45-4-8-3"}'></canvas><figcaption>Cổng lympho trên CD45 × SS (CD45 sáng, SS thấp). Hạt Flow-Count nằm ở vị trí riêng, được cổng trên tham số huỳnh quang của hạt.</figcaption></figure>
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD4 RD1","y":"CD8 ECD","seed":163,"pops":[{"n":900,"x":0.76,"sx":0.035,"y":0.12,"sy":0.04,"c":"b488","l":"CD3+CD4+","lx":0.74,"ly":0.24},{"n":520,"x":0.12,"sx":0.035,"y":0.78,"sy":0.04,"c":"accent","l":"CD3+CD8+","lx":0.14,"ly":0.9},{"n":60,"x":0.12,"sx":0.035,"y":0.12,"sy":0.035,"c":"muted","l":"DN","lx":0.16,"ly":0.24}],"gates":[{"vline":0.45,"c":"line"},{"hline":0.45,"c":"line"}],"note":"mô phỏng · cổng CD3+"}'></canvas><figcaption>CD4 × CD8 trên T CD3+ (CD3-PC5). Báo % trên lympho và số tuyệt đối.</figcaption></figure>
</div>

### Kiểm tra nội tại của kết quả TBNK

<ul class="tight">
<li><b>Tổng lympho (lymphosum)</b>: T + B + NK xấp xỉ 100% lympho (trong khoảng phòng xét nghiệm đặt, thường ±5%). Lệch nhiều gợi ý cổng lympho lẫn mono, basophil, mảnh vụn, hoặc mất lympho.</li>
<li><b>CD3 giữa hai ống</b>: % CD3 trong ống 45-4-8-3 và 45-56-19-3 phải gần nhau.</li>
<li><b>CD4 + CD8 ≈ CD3</b>: chênh lệch lớn gợi ý nhiều T DN hoặc DP.</li>
<li><b>Độ tinh khiết cổng lympho</b>: ≥ ~95% tế bào trong cổng là lympho (CD45 sáng, SS thấp); mono CD4 mờ trong cổng sẽ làm sai CD4 nếu không dùng CD3 để cổng.</li>
</ul>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Tổng T + B + NK chỉ được 88%”</div>
<p>Kiểm tra nội tại: tổng T, B, NK trên lympho nên gần 100% (thường 95–105%). Thấp hơn gợi ý cổng lympho lẫn mono, bạch cầu hạt, mảnh vụn hoặc hồng cầu chưa ly giải. Xem lại cổng CD45 × SS, đặc biệt mẫu cũ hoặc giảm lympho nặng.</p></div>

<div id="tuyetdoi" class="ftb-anchor"></div>

## 16.5 Đếm tuyệt đối

<div class="kyhieu mini"><div class="kh-t">Ký hiệu</div><ul>
<li><b>Tế bào/µL</b>: số tuyệt đối, số tế bào trong một microlit máu (1 µL = 1 mm³; 1 mL = 1 000 µL).</li>
<li><b>Số sự kiện tế bào đích</b>: số sự kiện trong cổng tế bào cần đếm (ví dụ CD3+CD4+).</li>
<li><b>Số sự kiện hạt</b>: số sự kiện trong cổng hạt Flow-Count.</li>
<li><b>Nồng độ hạt theo lô</b>: số hạt trong 1 µL dung dịch hạt, in trên tờ hướng dẫn của lô (CAL factor). Vì cùng thể tích máu và hạt được hút chính xác, tỷ lệ tế bào/hạt bằng tỷ lệ nồng độ của chúng.</li>
<li><b>% trên lympho (flow)</b>: tỷ lệ quần thể trên cổng lympho, viết dạng thập phân khi nhân (25% = 0,25).</li>
<li><b>Số lympho tuyệt đối</b>: số lympho/µL lấy từ máy huyết học.</li>
</ul></div>

<div class="formula">Single platform (Flow-Count): Tế bào/µL = (Số sự kiện tế bào đích / Số sự kiện hạt) × Nồng độ hạt theo lô (hạt/µL)<br/>Dual platform: Tế bào/µL = % trên lympho (flow) × Số lympho tuyệt đối (máy huyết học)</div>

Single platform tránh sai số cộng dồn từ hai máy và là chuẩn cho CD4. Điều kiện: pipet đảo ngược chính xác máu và hạt, ly giải không rửa, trộn kỹ, hạt không vón. Kaluza C có thể cấu hình Use Calibration Beads trong Protocol Options pane (chương 05).

<div class="lab">
<div class="labhead"><h4>Máy tính Flow-Count</h4><span class="stat">nhập từ Kaluza hoặc LSA</span></div>
<div class="grid2" style="margin:0">
<div class="controls">
<div class="ctl"><label for="fcCells">Sự kiện tế bào đích (ví dụ CD3+CD4+)</label><input id="fcCells" min="0" type="number" value="410"/></div>
<div class="ctl"><label for="fcBeads">Sự kiện hạt Flow-Count</label><input id="fcBeads" min="1" type="number" value="4950"/></div>
<div class="ctl"><label for="fcConc">Nồng độ hạt theo lô (hạt/µL)</label><input id="fcConc" min="1" type="number" value="1010"/></div>
<div class="ctl"><label for="fcLym">Sự kiện lympho (tùy chọn)</label><input id="fcLym" min="0" type="number" value="6400"/></div>
</div>
<div id="fcResult" style="font-size:.95rem"></div>
</div>
</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Sai số pipet lan thẳng vào kết quả</div>
<p>Đếm 410 tế bào CD4 và 4 950 hạt, lô 1 010 hạt/µL: CD4 = 84/µL. Nếu pipet hút máu thiếu 5% (95 µL thay vì 100 µL): tỷ lệ tế bào/hạt giảm 5%, CD4 báo 80/µL. Nếu hút hạt thiếu 5%: số hạt giảm, CD4 báo 88/µL. Cả hai đều không lộ ra trên QC hạt, nên pipet đảo ngược và hiệu chuẩn pipet định kỳ là bắt buộc.</p></div>

<div class="learn vidu"><div class="lh" data-k="Đọc từng ô">Đọc bảng thống kê một ống TBNK có hạt Flow-Count</div><p>Máu EDTA, nồng độ lô Flow-Count 1 010 hạt/µL. Thể tích máu và hạt theo đúng hướng dẫn kit. <b>Bấm vào từng dòng</b> để xem cách tính và cách hiểu.</p><div class="tbl-wrap"><table class="walk"><thead><tr><th>Cổng</th><th>Số sự kiện</th><th>% trên lympho</th><th>Tế bào/µL</th><th>Cách tính</th></tr></thead><tbody><tr class="r"><td>Hạt Flow-Count</td><td class="num">4 950</td><td class="num">—</td><td class="num">1 010</td><td>theo lô</td></tr><tr class="x"><td colspan="5">Hạt được cổng riêng trên kênh huỳnh quang của hạt. Đếm hạt sai (pipet, không trộn) làm sai mọi số tuyệt đối theo cùng tỷ lệ.</td></tr><tr class="r"><td>Lympho (CD45 sáng, SS thấp)</td><td class="num">10 200</td><td class="num">100</td><td class="num">2 081</td><td class="num">10 200 / 4 950 × 1 010</td></tr><tr class="x"><td colspan="5">Số tuyệt đối = (số tế bào / số hạt) × nồng độ hạt.</td></tr><tr class="r"><td>T CD3+</td><td class="num">7 140</td><td class="num">70,0</td><td class="num">1 457</td><td class="num">7 140 / 4 950 × 1 010</td></tr><tr class="x"><td colspan="5">70% lympho là T.</td></tr><tr class="r"><td>T CD3+ CD4+</td><td class="num">3 060</td><td class="num">30,0</td><td class="num">624</td><td class="num">3 060 / 4 950 × 1 010</td></tr><tr class="x"><td colspan="5">Báo cả % CD4 trên lympho (30%) và số tuyệt đối (624/µL). % CD4 ít phụ thuộc pipet hơn, nên dùng kèm khi theo dõi xu hướng (mục 16.9).</td></tr><tr class="r"><td>T CD3+ CD8+</td><td class="num">3 570</td><td class="num">35,0</td><td class="num">729</td><td>CD4/CD8 = 0,86</td></tr><tr class="x"><td colspan="5">CD4/CD8 = 3 060 / 3 570 ≈ 0,86, thấp hơn thường gặp ở người khỏe.</td></tr><tr class="r"><td>B CD19+</td><td class="num">1 020</td><td class="num">10,0</td><td class="num">208</td><td class="num">—</td></tr><tr class="x"><td colspan="5">B 10% lympho.</td></tr><tr class="r"><td>NK CD3− CD56+</td><td class="num">1 836</td><td class="num">18,0</td><td class="num">375</td><td class="num">—</td></tr><tr class="x"><td colspan="5">NK 18% lympho.</td></tr><tr class="r"><td>Tổng T + B + NK</td><td class="num">—</td><td class="num">98,0</td><td class="num">—</td><td>70 + 10 + 18</td></tr><tr class="x"><td colspan="5">Kiểm tra nội tại: gần 100% (95–105%) là cổng lympho sạch. 88% gợi ý cổng lẫn mono, hạt hay mảnh vụn (mục 16.4).</td></tr></tbody></table></div><p class="src">Mọi con số trong ca này là mô phỏng để học cách đọc bảng.</p></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Trắc nghiệm nhanh</div><div class="quiz" data-src="q_ch16"></div><script id="q_ch16" type="application/json">[{"q": "3 060 tế bào CD4, 4 950 hạt, lô 1 010 hạt/µL. CD4 tuyệt đối?", "o": ["306/µL", "624/µL", "1 010/µL", "62/µL"], "a": 1, "e": "3 060 / 4 950 × 1 010 ≈ 624."}, {"q": "T + B + NK = 88% trên lympho. Nghĩ đến gì?", "o": ["Bệnh nhân suy giảm miễn dịch", "Cổng lympho lẫn quần thể khác hoặc mảnh vụn", "Lô hạt sai", "Bình thường"], "a": 1, "e": "Kiểm tra nội tại không đạt; xem lại cổng CD45 × SS."}, {"q": "Pipet hút hạt thiếu 5%. Số tuyệt đối sẽ thế nào?", "o": ["Thấp hơn 5%", "Cao hơn khoảng 5%", "Không đổi", "Không đoán được"], "a": 1, "e": "Ít hạt hơn thì tỷ số tế bào/hạt tăng, kết quả cao giả."}]</script></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["Single platform", ["Tế bào/µL = (tế bào / hạt) × nồng độ hạt", "Một máy, ít sai số cộng dồn", "Chuẩn cho CD4"], "ok"], ["Dual platform", ["% flow × lympho tuyệt đối (máy huyết học)", "Phụ thuộc hai máy"], "warn"]]}'><figcaption>Hai cách đếm tuyệt đối.</figcaption></figure>

<div id="hiv" class="ftb-anchor"></div>

## 16.6 CD4 trong HIV

WHO định nghĩa bệnh HIV tiến triển ở người lớn, thanh thiếu niên và trẻ từ 5 tuổi là CD4 <200 tế bào/mm³ hoặc biến cố giai đoạn lâm sàng 3 hay 4 khi đến khám; mọi trẻ dưới 5 tuổi nhiễm HIV được coi là bệnh tiến triển. Hướng dẫn năm 2025 của WHO khuyến cáo mạnh xét nghiệm CD4 là phương pháp ưu tiên để xác định bệnh tiến triển, thay vì chỉ dựa vào phân giai đoạn lâm sàng. Nguy cơ tử vong tăng khi CD4 giảm, nhất là dưới 100.

<div class="tbl-wrap"><table>
<thead><tr><th>Ngưỡng CD4</th><th>Ý nghĩa trong hướng dẫn WHO</th></tr></thead>
<tbody>
<tr><td>&lt;200/mm³</td><td>Bệnh HIV tiến triển (người lớn, trẻ ≥5 tuổi); bệnh nhân nội trú ≤200 được sàng lọc lao bằng LAM nước tiểu (WHO 2021)</td></tr>
<tr><td>&lt;100/mm³</td><td>Khuyến cáo sàng lọc kháng nguyên Cryptococcus; ngoại trú ≤100 sàng lọc LAM</td></tr>
<tr><td>≤350/mm³</td><td>Ngưỡng dự phòng cotrimoxazole trong các hướng dẫn WHO 2017 và 2021 (cùng giai đoạn lâm sàng 3–4)</td></tr>
</tbody>
</table></div>

<p class="src">Bảng so sánh WHO 2017 và 2021 trên AIDS Research and Therapy; tóm tắt hướng dẫn WHO 2025 về bệnh HIV tiến triển. Đối chiếu hướng dẫn quốc gia hiện hành.</p>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Con số CD4 là cửa vào các quyết định lâm sàng</div>
<p>Mỗi ngưỡng CD4 trong hướng dẫn WHO gắn với một hành động (sàng lọc kháng nguyên Cryptococcus, dự phòng cotrimoxazole, định nghĩa bệnh tiến triển). Sai 10% quanh ngưỡng 200 có thể đổi phân loại bệnh nhân. Vì vậy chất lượng đếm CD4 có ý nghĩa lâm sàng trực tiếp.</p></div>

<figure class="fig" data-fig='{"t": "scale", "min": 0, "max": 500, "unit": "CD4/mm³", "zones": [[0, 100, "&lt;100: sàng lọc CrAg", "r638"], [100, 200, "&lt;200: HIV tiến triển", "warn"], [200, 350, "≤350: dự phòng cotrimoxazole", "accent"], [350, 500, "", "ok"]], "marks": [[100, "100", "bad"], [200, "200", "bad"], [350, "350", "warn"]], "ticks": [[0, "0"], [100, "100"], [200, "200"], [350, "350"], [500, "500"]]}'><figcaption>Các ngưỡng CD4 trong hướng dẫn WHO.</figcaption></figure>

<div id="khac" class="ftb-anchor"></div>

## 16.7 Ứng dụng khác của TBNK

<ul class="tight">
<li><b>Suy giảm miễn dịch bẩm sinh</b>: kiểu SCID theo T/B/NK (ví dụ T− B+ NK−, T− B− NK+), cần khoảng tham chiếu theo tuổi trẻ em.</li>
<li><b>Sau ghép tế bào gốc, sau CAR-T, sau anti-CD20</b>: theo dõi hồi phục miễn dịch.</li>
<li><b>Bệnh tự miễn, thuốc ức chế miễn dịch</b>: giảm B sau rituximab, giảm T sau ATG, alemtuzumab.</li>
</ul>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Khoảng tham chiếu trẻ em</div>
<p>Số tuyệt đối lympho, T, B, NK ở trẻ nhỏ cao hơn người lớn nhiều và thay đổi theo tháng tuổi. Dùng khoảng người lớn cho trẻ có thể bỏ sót suy giảm miễn dịch (giá trị “bình thường người lớn” là thấp với trẻ 6 tháng). Cần khoảng tham chiếu theo tuổi.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["SCID", "kiểu T/B/NK", "r638"], ["Sau ghép, CAR-T", "hồi phục miễn dịch", "b488"], ["Sau anti-CD20", "B vắng mặt", "accent"], ["Ức chế miễn dịch", "ATG, alemtuzumab", "warn"]], "per": 4, "h": 78}'><figcaption>Ứng dụng khác của TBNK.</figcaption></figure>

<div id="cd34" class="ftb-anchor"></div>

## 16.8 Đếm tế bào gốc CD34 theo ISHAGE

Hướng dẫn ISHAGE (1996) là chuẩn vàng cho đếm tế bào tiền thân tạo máu CD34+ bằng flow. Năm 1998 Keeney và cộng sự bổ sung hạt đếm tuyệt đối, chất nhuộm sống 7-AAD loại tế bào chết, và dung dịch ly giải không chứa chất cố định, tạo thành phiên bản single platform có chất nhuộm sống, gần như không đổi đến nay. Đặc trưng của ISHAGE là chiến lược cổng tuần tự đi từ bạch cầu sống. Do tính chọn lọc của cổng tuần tự, ISHAGE về sau coi ống chứng âm là tùy chọn, nhưng Dược điển châu Âu (Ph. Eur.) bắt buộc dùng.

Bộ **Stem-Kit** của Beckman Coulter gồm: thuốc thử 2 màu CD45-FITC/CD34-PE, thuốc thử chứng CD45-FITC/isoclonic-PE để kiểm tra gắn không đặc hiệu của CD34-PE, chất nhuộm sống 7-AAD, hạt Stem-Count để đếm tuyệt đối, và dung dịch ly giải. Một quy trình chuẩn hóa dùng Stem-Kit dựa trên ISHAGE đã được LeukemiaNet công bố. Ph. Eur. yêu cầu kháng thể CD34 nhóm III nhận diện mọi biến thể glycosyl hóa (ví dụ dòng 8G12 hoặc 581).

### Chiến lược cổng tuần tự

<ol class="steps">
<li><div><b>R1</b>: CD45 × SS, lấy mọi bạch cầu CD45+ (loại mảnh vụn, hồng cầu, tiểu cầu); discriminator trên CD45.</div></li>
<li><div><b>R2</b>: CD34 × SS trên R1, lấy tế bào CD34+.</div></li>
<li><div><b>R3</b>: CD45 × SS trên R2, lấy cụm CD45 mờ SS thấp đặc trưng tế bào gốc (loại tế bào CD34 gắn không đặc hiệu có CD45 sáng hoặc SS cao).</div></li>
<li><div><b>R4</b>: FS × SS trên R3, cổng vùng lympho–blast để xác nhận kích thước.</div></li>
<li><div><b>Viability</b>: 7-AAD âm trên R4 → CD34+ sống. Hạt đếm cổng riêng trên một tham số huỳnh quang.</div></li>
</ol>

<div class="plots">
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD34 PE","y":"Side Scatter","xs":"log","ys":"lin","seed":171,"pops":[{"n":2400,"x":0.18,"sx":0.06,"y":0.45,"sy":0.22,"c":"muted","l":"CD45+ khác","lx":0.04,"ly":0.92},{"n":120,"x":0.76,"sx":0.04,"y":0.12,"sy":0.04,"c":"r638","l":"CD34+ SS thấp","lx":0.62,"ly":0.24}],"gates":[{"rect":[0.6,0.95,0.02,0.4],"c":"r638","l":"R2"}],"note":"mô phỏng · R1 CD45+"}'></canvas><figcaption>R2: CD34+ trên bạch cầu.</figcaption></figure>
<figure class="plot"><canvas class="plot" data-spec='{"x":"CD45 FITC","y":"Side Scatter","xs":"log","ys":"lin","seed":173,"pops":[{"n":110,"x":0.52,"sx":0.035,"y":0.12,"sy":0.035,"c":"r638","l":"Tế bào gốc CD45 mờ","lx":0.34,"ly":0.26},{"n":12,"x":0.82,"sx":0.03,"y":0.5,"sy":0.15,"c":"muted","l":"Gắn không đặc hiệu","lx":0.66,"ly":0.72}],"gates":[{"poly":[[0.4,0.02],[0.66,0.02],[0.66,0.25],[0.42,0.25]],"c":"r638","l":"R3"}],"note":"mô phỏng · trên R2"}'></canvas><figcaption>R3: cụm CD45 mờ SS thấp là tế bào gốc thật.</figcaption></figure>
</div>

<div class="lab">
<div class="labhead"><h4>Máy tính CD34 và liều ghép</h4><span class="stat">single platform</span></div>
<div class="grid2" style="margin:0">
<div class="controls">
<div class="ctl"><label for="cd34Ev">Sự kiện CD34+ sống (sau 7-AAD)</label><input id="cd34Ev" min="0" type="number" value="180"/></div>
<div class="ctl"><label for="cd34Beads">Sự kiện hạt đếm</label><input id="cd34Beads" min="1" type="number" value="2500"/></div>
<div class="ctl"><label for="cd34Conc">Nồng độ hạt theo lô (hạt/µL), đã hiệu chỉnh độ pha loãng</label><input id="cd34Conc" min="1" type="number" value="1000"/></div>
<div class="ctl"><label for="cd34Wbc">Bạch cầu sản phẩm (×10³/µL), tùy chọn</label><input id="cd34Wbc" min="0" type="number" value="150"/></div>
<div class="ctl"><label for="cd34Vol">Thể tích túi (mL)</label><input id="cd34Vol" min="0" type="number" value="250"/></div>
<div class="ctl"><label for="cd34Kg">Cân nặng người nhận (kg)</label><input id="cd34Kg" min="1" type="number" value="60"/></div>
</div>
<div id="cd34Result" style="font-size:.95rem"></div>
</div>
</div>

<div class="callout warn"><b class="t">Lưu ý thực hành CD34</b>Sản phẩm gạn tách có bạch cầu rất cao: pha loãng để vào khoảng tuyến tính và nhân lại hệ số pha loãng. Thu đủ sự kiện CD34+ (nhiều khuyến cáo dùng tối thiểu khoảng 100 sự kiện CD34+, với máu ngoại vi số thấp cần thu nhiều bạch cầu). Không dùng dung dịch ly giải có chất cố định khi có 7-AAD. Ngoại kiểm CD34 (UK NEQAS, CAP) là bắt buộc trên thực tế với trung tâm ghép.</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">ISHAGE là chuỗi cổng có logic, không phải một cổng</div>
<p>Mỗi cổng ISHAGE loại một loại nhiễu: 7-AAD loại tế bào chết, CD45 loại mảnh vụn và hồng cầu có nhân, CD34 sáng với SS thấp loại tế bào bắt màu không đặc hiệu, CD45 mờ đúng vị trí tiền thân, và FS/SS xác nhận hình thái lympho-blast. Bỏ một cổng là để một loại nhiễu lọt vào số đếm.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tính liều CD34 cho túi thu</div>
<p>Ký hiệu: <b>C</b> là nồng độ CD34+ sống trong túi (tế bào/µL); <b>V</b> là thể tích túi, đổi ra µL (250 mL = 250 000 µL); <b>m</b> là cân nặng bệnh nhân (kg). Công thức: tổng CD34 = C × V; liều = C × V ÷ m (tế bào/kg). Cách viết 10⁸ nghĩa là 1 kèm 8 chữ số 0 (100 triệu).</p>
<p>CD34+ sống 420 tế bào/µL, túi 250 mL, bệnh nhân 60 kg. Tổng CD34 = 420 × 250 000 µL = 1,05 × 10⁸. Liều = 1,05 × 10⁸ / 60 = 1,75 × 10⁶/kg. Dùng máy tính trong mục để kiểm tra.</p></div>

<div id="hoibacsi" class="ftb-anchor"></div>

## 16.9 Hỏi bác sĩ

<details class="ans"><summary>“CD4 220 hôm nay, tuần trước 180, bệnh nhân có tốt lên không?”</summary><p>Chưa chắc. Biến thiên sinh học và phân tích của CD4 tuyệt đối khá lớn (theo nhịp ngày đêm, nhiễm trùng xen kẽ, độ chính xác pipet). So sánh % CD4 song song với số tuyệt đối, và dựa trên xu hướng nhiều lần đo hơn là hai điểm.</p></details>

<details class="ans"><summary>“Có thể báo CD34 ngay để quyết định gạn tách hôm nay?”</summary><p>Được, đó là mục đích chính của đếm CD34 máu ngoại vi trước gạn tách. Quy trình ISHAGE single platform trên Navios mất dưới một giờ. Báo số CD34+ sống/µL.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Đổi lô Flow-Count mà quên nhập CAL factor mới. Hậu quả?</summary><p>Số tuyệt đối sai đúng theo tỷ lệ chênh giữa hai lô; QC hạt và % không phát hiện được.</p></details><details class="ans"><summary>Tổng T + B + NK 88%. Nghĩ đến gì?</summary><p>Cổng lympho lẫn quần thể khác hoặc mảnh vụn; xem lại cổng CD45 × SS.</p></details><details class="ans"><summary>Vì sao ISHAGE cần 7-AAD?</summary><p>Để loại tế bào chết, vốn có thể bắt màu CD34 không đặc hiệu và làm liều thu sai.</p></details></div>

<figure class="fig" data-fig='{"t": "line", "series": [["CD4 tuyệt đối", [[1, 180], [2, 220], [3, 195], [4, 240], [5, 260]], "accent"], ["% CD4 × 10", [[1, 90], [2, 95], [3, 92], [4, 100], [5, 108]], "b488"]], "xl": "Lần xét nghiệm", "yl": "Giá trị", "xmin": 1, "xmax": 5, "ymax": 300, "xt": [[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"]], "yt": [[100, "100"], [200, "200"], [300, "300"]]}'><figcaption>Đánh giá xu hướng nhiều lần đo cả % và số tuyệt đối, không dựa vào hai điểm (minh họa).</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch16.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
