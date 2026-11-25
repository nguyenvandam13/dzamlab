---
title: "23 · Ngân hàng câu hỏi và tài liệu tham khảo"
description: "Năm mươi bảy câu hỏi chia hai bộ: kỹ thuật (máy, QC, bù màu, Kaluza, thẩm định) và bệnh học (phân loại, kiểu hình, ứng dụng)."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "23"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần IV · Chương 23</div><div id="ftb-search"></div></div>

<p class="lead">Năm mươi bảy câu hỏi chia hai bộ: kỹ thuật (máy, QC, bù màu, Kaluza, thẩm định) và bệnh học (phân loại, kiểu hình, ứng dụng). Mỗi câu có giải thích và trỏ về chương liên quan. Cuối chương là toàn bộ tài liệu tham khảo.</p>

<div id="bo1" class="ftb-anchor"></div>

## 23.1 Bộ 1: Kỹ thuật

<div class="quiz" data-src="q1"></div>

<script id="q1" type="application/json">[
{"q":"“Navios có 1024 kênh” và “Navios có 10 kênh màu” khác nhau thế nào?","o":["Là một, 1024 là số kênh màu tối đa","1024 là số mức chia trên trục của mỗi tham số; 10 là số đầu dò FL","1024 là số sự kiện mỗi giây","10 là số decade của thang log"],"a":1,"e":"Kênh đầu dò (FL1–FL10) khác kênh trên trục (0–1023). Chương 01, mục 1.9."},
{"q":"Trên logicle, quần thể CD8-FITC rộng hơn hẳn quần thể âm theo trục PE nhưng hai trung vị PE bằng nhau. Kết luận?","o":["Thiếu bù","Thừa bù","Bù đúng; độ rộng là spreading","Tandem PE hỏng"],"a":2,"e":"Bù đúng khi hai trung vị bằng nhau; độ loe do thống kê photon không sửa bằng bù. Chương 01 và 04."},
{"q":"Muốn so mHLA-DR với ngưỡng 15 000 và 8 000 kháng thể/tế bào, cần báo theo đại lượng nào?","o":["MFI","MESF","ABC","% tế bào dương"],"a":2,"e":"ABC với hạt PE chuẩn và kháng thể PE 1:1 bão hòa. Chương 01, mục 1.10."},
{"q":"Laser 405 nm của Navios EX kích thích chất nhuộm ở những kênh nào?","o":["FL1 và FL2","FL6–FL8","FL9 và FL10","FL4 và FL5"],"a":2,"e":"Pacific Blue (FL9, 450/50) và Krome Orange (FL10, 550/40). Chương 01–02."},
{"q":"Ba chùm laser của Navios EX cách nhau bao nhiêu theo chiều dòng chảy?","o":["9 µm","90 µm","900 µm","Chồng lên nhau"],"a":1,"e":"90 µm (±4,5 µm); hệ điện tử dùng độ trễ để ghép tín hiệu. Chương 01."},
{"q":"Tín hiệu nào tỷ lệ với tổng lượng chất nhuộm trên tế bào?","o":["PEAK","INT","TOF","TIME"],"a":1,"e":"INT là diện tích dưới xung. Chương 01."},
{"q":"Cặp tham số dùng loại doublet trong Casebook ClearLLab?","o":["CD45 × SS","FS INT × FS PEAK","TIME × CD45","FS × SS"],"a":1,"e":"Singlet nằm trên đường thẳng INT–PEAK. Chương 01, 05."},
{"q":"Lưu lượng mẫu xấp xỉ ở tốc độ Medium của Navios EX?","o":["10 µL/phút","30 µL/phút","70 µL/phút","120 µL/phút"],"a":1,"e":"Low ≈10, Medium ≈30, High ≈70 µL/phút. Chương 02."},
{"q":"Spec HPCV Flow-Check Pro cho FL5 là?","o":["<2%","<2,5%","<3%","<4%"],"a":1,"e":"FL1–FL4 <2%, FL5 <2,5%, FL6–FL8 <3%, FL9–FL10 <4%. Chương 03."},
{"q":"Protocol có tên bắt đầu bằng “Cleanse” trên Navios EX sẽ…","o":["Xuất kết quả một dòng","Không ghi file LMD","Tự chạy AutoSetup","Khóa protocol"],"a":1,"e":"Cleanse ghi đè tùy chọn lưu LMD. Tiền tố QC xuất một dòng. Chương 02."},
{"q":"Độ rộng vùng đích Flow-Set Pro mặc định cho SS tuyến tính?","o":["±10","±20","±50","±100"],"a":2,"e":"FS ±20, SS ±50. Chương 03."},
{"q":"Quy tắc Westgard 2₂ₛ phát hiện chủ yếu loại lỗi nào?","o":["Ngẫu nhiên","Hệ thống","Pha hạt","Không có ý nghĩa"],"a":1,"e":"Hai điểm liên tiếp cùng phía vượt 2SD: lỗi hệ thống. Chương 03."},
{"q":"Dung dịch tẩy dùng cho vệ sinh Navios EX theo IFU?","o":["Javel nguyên chất","1 phần javel 5–6% + 9 phần nước cất hoặc IsoFlow, pha trong ngày","Cồn 70% đơn thuần","Javel 1:100 pha tuần một lần"],"a":1,"e":"Dung dịch không pha mới có thể để lại chất nhuộm tồn dư. Chương 02–03."},
{"q":"Trong Kaluza, ô “FL2 − %FL1 = 14,7” nghĩa là?","o":["FL1 nhận 14,7% từ FL2","FL2 nhận 14,7% từ chất nhuộm FL1","Tương quan 14,7%","Tự huỳnh quang 14,7%"],"a":1,"e":"Hàng là kênh nhận, cột là kênh gây lọt. Chương 04."},
{"q":"Giá trị spillover nào bị Kaluza hủy?","o":["−20%","120%","−600%","0%"],"a":2,"e":"Dưới −500% hoặc trên 500% chữ đỏ, bị hủy; ngoài 0–100% chữ vàng. Chương 04."},
{"q":"Thuật toán Generate Compensation nào cần tế bào âm và dương trong cùng một ống?","o":["Positives Only","Positives with AF Subtraction","Positive-Negative","Không thuật toán nào"],"a":2,"e":"Độ dốc giữa tâm cổng sáng và mờ. Chương 04."},
{"q":"Bù đúng nhưng quần thể sáng vẫn loe trên kênh nhận. Đó là gì?","o":["Thiếu bù","Bù quá","Spreading error do thống kê photon","Lỗi laser"],"a":2,"e":"Bù không tạo ra mà chỉ làm lộ sai số đo (Roederer 2001). Chương 04."},
{"q":"Vector tự huỳnh quang tính tay trong Kaluza bằng?","o":["X-Mean × 100","X-Med / 1024 × 100","HPCV × 10","Log(X-Med)"],"a":1,"e":"Histogram, cổng quần thể âm, X-Med chia 1024 nhân 100. Chương 04."},
{"q":"Muốn dùng ma trận Kaluza trên phần mềm thu nhận Navios, lưu dạng?","o":["*.txt","*.compensation","*.PRO","*.qcr"],"a":2,"e":"Chọn *.PRO; data set phải xuất phát từ Navios. Chương 04."},
{"q":"Số data set tối đa trong một Composite của Kaluza C?","o":["8","16","32","64"],"a":2,"e":"32. Batch tối đa 2 000; merge 48 file hoặc 20 triệu sự kiện. Chương 05."},
{"q":"Một biểu thức Boolean trong Kaluza chứa tối đa bao nhiêu cổng?","o":["4","8","16","32"],"a":2,"e":"16 cổng mỗi biểu thức logic. Chương 05."},
{"q":"Tính năng Kaluza nào phóng to cụm sự kiện hiếm trên mọi biểu đồ?","o":["Auto Gate","Show as rare events","Add All Plots","Tree plot"],"a":1,"e":"Có Event Extend Factor và màu riêng. Chương 05."},
{"q":"Kênh huỳnh quang không xuất hiện trong ma trận bù Kaluza. Kiểm tra?","o":["Thang logicle","Type trong Parameters pane không được là Unknown","Màu cổng","Tên file"],"a":1,"e":"Chương 04–05."},
{"q":"Khác biệt giữa xác nhận (verification) và thẩm định (validation)?","o":["Như nhau","Verification cho IVD dùng đúng chỉ định; validation cho LDT hoặc IVD sửa đổi","Validation chỉ cho máy","Verification chỉ cho phần mềm"],"a":1,"e":"Addendum LSA: protocol mở khóa thì phòng tự thẩm định. Chương 06."},
{"q":"Muốn độ nhạy 10⁻⁵ với LLOQ 50 sự kiện cần đánh giá bao nhiêu tế bào?","o":["500 000","1 triệu","2 triệu","5 triệu"],"a":3,"e":"50 / 10⁻⁵ = 5 triệu; LOD 20 sự kiện cần 2 triệu. Chương 01, 18."},
{"q":"Vì sao phải rửa mẫu trước khi nhuộm chuỗi nhẹ bề mặt?","o":["Loại hồng cầu","Loại immunoglobulin huyết tương trung hòa kháng thể","Cố định tế bào","Tăng tự huỳnh quang"],"a":1,"e":"Chương 07, 13."},
{"q":"Dấu hiệu tủy pha loãng máu trên flow?","o":["Nhiều hematogone","Thiếu tiền thân hồng cầu, tủy bào CD16−, dưỡng bào","Blast tăng","CD34 sáng"],"a":1,"e":"Chương 07, 18."}
]</script>

<figure class="fig" data-fig='{"t": "bars", "items": [["Ch. 01–02 máy", 10, "b488"], ["Ch. 03 QC", 4, "accent"], ["Ch. 04 bù màu", 6, "warn"], ["Ch. 05 Kaluza", 4, "v405"], ["Ch. 06–07 thẩm định, mẫu", 3, "ok"]], "max": 11, "lw": 200}'><figcaption>Phân bố câu hỏi Bộ 1 theo chương.</figcaption></figure>

<div id="bo2" class="ftb-anchor"></div>

## 23.2 Bộ 2: Bệnh học và ứng dụng

<div class="quiz" data-src="q2"></div>

<script id="q2" type="application/json">[
{"q":"Theo ICC 2022, AML với NPM1 cần tối thiểu bao nhiêu % blast?","o":["Không ngưỡng","≥10%","≥20%","≥5%"],"a":1,"e":"WHO-HAEM5 không đặt ngưỡng cho NPM1; ICC ≥10%. Chương 09."},
{"q":"AML có bất thường gen nào vẫn cần ≥20% blast theo WHO-HAEM5?","o":["NPM1","RUNX1::RUNX1T1","BCR::ABL1 và CEBPA","KMT2A"],"a":2,"e":"Chương 09."},
{"q":"Ngưỡng mono máu chẩn đoán CMML theo WHO-HAEM5 và ICC?","o":["≥1 × 10⁹/L","≥0,5 × 10⁹/L và ≥10% bạch cầu","≥2 × 10⁹/L","≥0,2 × 10⁹/L"],"a":1,"e":"Chương 09, 11."},
{"q":"Tiêu chí gán dòng T cho MPAL?","o":["CD7 sáng","CD2 và CD5","cCD3 mạnh hoặc sCD3","CD4/CD8"],"a":2,"e":"CD2, CD5, CD7, CD8 gặp ở B-ALL và AML. Chương 09."},
{"q":"Blast CD34 sáng mang CD19 mờ một phần, CD56+, MPO+. Gợi ý?","o":["MPAL B/tủy","AML với RUNX1::RUNX1T1","B-ALL","APL"],"a":1,"e":"CD19 trong ống M2 của ClearLLab để bắt kiểu hình này. Chương 10."},
{"q":"Kiểu hình APL kinh điển KHÔNG có đặc điểm nào?","o":["SS cao","CD34−, HLA-DR−","CD11b sáng","CD33 sáng đồng nhất"],"a":2,"e":"CD11b âm trong APL. Chương 10."},
{"q":"AML mono: tế bào nào được tính như blast?","o":["Chỉ CD34+","Nguyên bào mono và tiền mono","Mọi mono","Không tính mono"],"a":1,"e":"Chương 10."},
{"q":"BPDCN điển hình?","o":["CD4+ CD56+ CD123 rất sáng HLA-DR+","CD34+ CD117+","CD14+ CD64+","CD3+ CD56+"],"a":0,"e":"Chương 10."},
{"q":"Thông số nào KHÔNG thuộc điểm Ogata?","o":["% blast CD34+","% tiền B trong CD34+","Tỷ số SS hạt/lympho","% MO1"],"a":3,"e":"MO1 dùng cho CMML. Chương 11."},
{"q":"Điểm Ogata bao nhiêu thì gợi ý MDS?","o":["≥1","≥2","≥3","4"],"a":1,"e":"Chương 11."},
{"q":"Ngưỡng MO1 gợi ý CMML theo Selimoglu-Buet?","o":[">85%",">90%",">94%",">99%"],"a":2,"e":"MO1 ~85% ở người khỏe. Chương 11."},
{"q":"Hematogone khác blast B-ALL ở điểm nào?","o":["CD19 âm","Đường trưởng thành liên tục, CD38 sáng","CD10 luôn âm","CD34 đồng nhất"],"a":1,"e":"Chương 08, 12."},
{"q":"B-ALL CD10 âm kèm CD15/CD65 ở trẻ nhũ nhi gợi ý?","o":["ETV6::RUNX1","KMT2A rearrangement","High hyperdiploidy","TCF3::PBX1"],"a":1,"e":"Chương 12."},
{"q":"Tiêu chí ETP-ALL về CD5?","o":["CD5 âm hoặc dương <75% blast","CD5 sáng","CD5 >90%","Không xét CD5"],"a":0,"e":"Chương 12."},
{"q":"Sau CAR-T CD19, chiến lược gating MRD B-ALL?","o":["Chỉ CD19","Dùng CD22, CD24, CD10, CD34 và xem quần thể ngoài cổng B","Chỉ CD20","Không cần MRD"],"a":1,"e":"Chương 12, 21."},
{"q":"Marker nào trong ống B ClearLLab thay CD23 để phân biệt CLL với MCL?","o":["CD38","CD200","CD10","CD34"],"a":1,"e":"CLL CD200 sáng, MCL CD200 âm. Chương 13."},
{"q":"Số tuyệt đối B đơn dòng kiểu CLL tối thiểu để chẩn đoán CLL?","o":["≥0,5 × 10⁹/L","≥1 × 10⁹/L","≥5 × 10⁹/L","≥10 × 10⁹/L"],"a":2,"e":"Dưới mức đó và không triệu chứng là MBL. Chương 13."},
{"q":"HCL điển hình biểu hiện?","o":["CD5+ CD23+","CD11c, CD25, CD103, CD123 dương; SS cao","CD10+ CD38 rất sáng","CD3+"],"a":1,"e":"Chương 13."},
{"q":"Tương bào ác tính thường?","o":["CD19+ CD56−","CD19− CD56+","CD45 sáng CD27 sáng","CD20 sáng"],"a":1,"e":"Chương 14."},
{"q":"Daratumumab ảnh hưởng flow thế nào?","o":["Che CD38, mất cổng tương bào","Che CD138","Che CD19","Không ảnh hưởng"],"a":0,"e":"Dùng CD38 đa epitope, CD138, CD229. Chương 14."},
{"q":"Đánh giá vô tính T αβ trên flow bằng?","o":["Kappa/lambda","TRBC1 hoặc TCR Vβ","CD7","CD26"],"a":1,"e":"Chương 15."},
{"q":"ATLL thường?","o":["CD4+ CD25 sáng CD7−","CD8+ CD57+","CD3− CD56+","CD10+ PD-1+"],"a":0,"e":"Chương 15."},
{"q":"Yêu cầu tối thiểu của LSA khi báo số tuyệt đối với Flow-Count?","o":["2 000 lympho, 500 hạt","6 000 lympho, 1 000 hạt","10 000 lympho, 5 000 hạt","Chỉ 1 000 hạt"],"a":1,"e":"Addendum B86351AA. Chương 16."},
{"q":"Định nghĩa bệnh HIV tiến triển của WHO ở người lớn?","o":["CD4 <500","CD4 <350","CD4 <200 hoặc giai đoạn lâm sàng 3–4","CD4 <50"],"a":2,"e":"Chương 16."},
{"q":"Chiến lược cổng ISHAGE dùng chất nhuộm nào loại tế bào chết?","o":["FLAER","7-AAD","PI","DAPI"],"a":1,"e":"Chương 16."},
{"q":"Dòng tế bào cho ước lượng kích thước dòng PNH chính xác nhất?","o":["Hồng cầu","Bạch cầu trung tính","Tiểu cầu","Lympho"],"a":1,"e":"Chương 17."},
{"q":"ELN khuyến cáo ngưỡng MRD dương bằng flow trong AML?","o":["0,01%","0,1%","1%","5%"],"a":1,"e":"Với 500 000–1 000 000 bạch cầu. Chương 18."},
{"q":"Bộ lõi 6 marker MRD CLL của ERIC?","o":["CD19, CD20, CD5, CD43, CD79b, CD81","CD19, CD10, CD34, CD38, CD45, CD58","CD38, CD138, CD19, CD56, CD27, CD81","CD3, CD4, CD8, CD45, CD56, CD19"],"a":0,"e":"Rawstron 2016. Chương 18."},
{"q":"Số sự kiện tối thiểu khuyến cáo cho MRD đa u tủy 10⁻⁵?","o":["200 000","1 triệu","Tối thiểu 2 triệu, khuyến cáo 5 triệu","50 triệu"],"a":2,"e":"Chương 18."},
{"q":"Câu báo cáo đúng khi không thấy MRD?","o":["Không còn tế bào ác tính","Không phát hiện MRD với độ nhạy [LOD của lần chạy]","Âm tính hoàn toàn","Khỏi bệnh"],"a":1,"e":"Chương 18, 20."}
]</script>

<figure class="fig" data-fig='{"t": "bars", "items": [["Phân loại", 4, "muted"], ["AML", 4, "r638"], ["MDS/CMML", 3, "warn"], ["ALL", 4, "v405"], ["B trưởng thành, tương bào", 5, "b488"], ["T/NK", 2, "accent"], ["TBNK, CD34, PNH", 4, "ok"], ["MRD, báo cáo", 4, "bad"]], "max": 6, "lw": 200}'><figcaption>Phân bố câu hỏi Bộ 2 theo chủ đề.</figcaption></figure>

<div id="tk1" class="ftb-anchor"></div>

## 23.3 Tài liệu của Beckman Coulter

<ul class="refs">
<li>Navios EX Flow Cytometer Instructions For Use, PN B73085AF, 08/2021.</li>
<li>Kaluza C Flow Cytometry Software Instructions for Use, PN C10993AH, 04/2025.</li>
<li>Kaluza C Flow Cytometry Software Research Use Only Features Addendum, PN C29335AA, 06/2018.</li>
<li>Navios EX tetra Software Lymphocyte Subset Application Addendum, PN B86351AA, 03/2016.</li>
<li>DI - Instrument Manager Bidirectional Capabilities for AQUIOS CL, Navios, Navios EX, CellMek SPS and Kaluza, PN A45429AG, 10/2025.</li>
</ul>

<figure class="fig" data-fig='{"t": "cards", "items": [["B73085AF", "IFU Navios EX", "b488"], ["C10993AH", "IFU Kaluza C", "accent"], ["C29335AA", "Kaluza RUO", "muted"], ["B86351AA", "LSA addendum", "v405"], ["A45429AG", "DI - LIS", "warn"]], "per": 5, "h": 70}'><figcaption>Năm tài liệu Beckman Coulter được dùng làm nguồn.</figcaption></figure>

<div id="tk2" class="ftb-anchor"></div>

## 23.4 ClearLLab và Beckman Coulter

<ul class="refs">
<li><a href="https://www.accessdata.fda.gov/cdrh_docs/reviews/K183592.pdf">FDA 510(k) K183592: ClearLLab 10C Panels trên Navios, Navios EX</a></li>
<li><a href="https://www.accessdata.fda.gov/cdrh_docs/reviews/K232600.pdf">FDA 510(k) K232600: ClearLLab 10C trên DxFLEX</a></li>
<li><a href="https://www.beckman.com/resources/disease-research/leukemia-and-lymphoma/lot-to-lot-reproducibility">ClearLLab 10-Color Panel Performance: Lot-to-Lot Reproducibility</a></li>
<li><a href="https://beckman.com/resources/disease-research/leukemia-and-lymphoma/standardized-results-clinical-vignettes/clearllab-10c-casebook-download">ClearLLab 10C Casebook (tải miễn phí)</a></li>
<li><a href="https://media.beckman.com/-/media/flow-cytometry/content/hematological-malignancies/casebook/clearllab-10c-download/flow-cytometry-clearllab-10c-casebook-preview-2022-06.pdf">ClearLLab 10C Casebook preview (mục lục và case 1)</a></li>
<li><a href="https://media.beckman.com/-/media/flow-cytometry/content/hematological-malignancies/casebook/case-7-cll/flow-cytometry-clearllab-10c-case-07.pdf">ClearLLab 10C Casebook, Case #7 CLL/SLL</a></li>
<li><a href="https://thepathologist.com/media/nnnj2zzv/flow-4354wp1118_clearllab_10c_panel_marker_with_case_study_v3.pdf">ClearLLab 10C panel marker with case study (white paper)</a></li>
<li><a href="https://www.selectscience.net/article/beckman-coulter-expands-portfolio-of-standardized-clearllab-ce-ivd-reagents-for-the-clinical-flow-cytometry-lab">ClearLLab CE-IVD portfolio: Control Cells, Compensation Beads</a></li>
<li><a href="https://www.leukemia-net.org/leukemias/cmpd/recommendations/e1744/infoboxContent1747/LeBousse_Standardised_protocol_for_CD34.pdf">Standardised protocol for CD34+ quantification with Stem-Kit (LeukemiaNet)</a></li>
<li><a href="https://www.beckman.com/reagents/coulter-flow-cytometry/antibodies-and-kits/aquios/stem/overcoming-unmet-needs">Overcoming unmet needs in CD34 enumeration (ISHAGE, Ph. Eur.)</a></li>
</ul>

<figure class="fig" data-fig='{"t": "flow", "n": [["FDA 510(k)", "ClearLLab IVD", "accent"], ["Hiệu năng lô", "gán chất nhuộm", "b488"], ["Casebook", "24 case, LMD", "warn"], ["Stem-Kit", "ISHAGE", "v405"]], "per": 4}'><figcaption>Nhóm tài liệu ClearLLab và Beckman.</figcaption></figure>

<div id="tk3" class="ftb-anchor"></div>

## 23.5 Phân loại

<ul class="refs">
<li><a href="https://doi.org/10.1038/s41375-022-01613-1">Khoury JD et al. WHO-HAEM5 Myeloid and Histiocytic/Dendritic Neoplasms. Leukemia 2022;36:1703-1719</a></li>
<li><a href="https://escholarship.org/uc/item/8495g3gz">Alaggio R et al. WHO-HAEM5 Lymphoid Neoplasms. Leukemia 2022;36(7)</a></li>
<li><a href="https://cdn.reachmd.com/uploads/icc_mds_diagnostic_classification_september_2022.pdf">Arber DA et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood 2022</a></li>
<li><a href="https://link.springer.com/content/pdf/10.1007/s00428-022-03430-4.pdf">Weinberg OK et al. The ICC of acute myeloid leukemia. Virchows Arch 2023</a></li>
<li><a href="https://synapse.koreamed.org/articles/1516086841">So sánh WHO 2022 và ICC cho AML (Koreamed)</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9214472/table/Tab1">Bảng WHO-HAEM5 B-cell lymphoid proliferations</a></li>
<li><a href="https://www.degruyterbrill.com/document/doi/10.1515/medgen-2024-2007/html">Genetic alterations in lymphoblastic leukaemia: practical guide to WHO-HAEM5</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2776262/table/tbl1">Tiêu chí gán dòng MPAL (WHO)</a></li>
<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8640034/">IMWG 2021: định nghĩa leukemia tương bào ≥5%</a></li>
<li><a href="https://pubmed.ncbi.nlm.nih.gov/26065657/">MBL và CLL giai đoạn sớm. Blood 2015</a></li>
<li><a href="https://fcarreras.org/wp-content/uploads/2026/07/HemaSphere-2026-Eichhorst-EHA-Guidelines-on-management-of-chronic-lymphocytic-leukemia-and-Richter-transformation.pdf">Eichhorst et al. EHA Guidelines CLL. HemaSphere 2026</a></li>
</ul>

<figure class="fig" data-fig='{"t": "cmp", "p": [["WHO-HAEM5", ["Khoury 2022", "Alaggio 2022"], "b488"], ["ICC 2022", ["Arber 2022", "Weinberg 2023"], "r638"], ["Khác", ["IMWG 2021 PCL", "EHA 2026 CLL"], "muted"]]}'><figcaption>Nhóm tài liệu phân loại.</figcaption></figure>

<div id="tk4" class="ftb-anchor"></div>

## 23.6 Kỹ thuật, bù màu, thẩm định

<ul class="refs">
<li><a href="https://biotech.ufl.edu/wp-content/uploads/2021/04/Roederer-2001-Cytometry-1.pdf">Roederer M. Spectral compensation for flow cytometry. Cytometry 2001;45:194-205</a></li>
<li><a href="https://health.uconn.edu/flow-cytometry/wp-content/uploads/sites/123/2017/04/rodoerer_comp2.pdf">Roederer: Spread of compensated data (bài giảng)</a></li>
<li><a href="https://www.bioanalysis-zone.com/wp-content/uploads/2019/06/Tanqri-et-al.-2013-Cytometry-Part-B-Clinical_Cytometry-Part-III.pdf">Tanqri S et al. ICSH/ICCS Validation Part III – Analytical issues. Cytometry B 2013</a></li>
<li><a href="https://zendy.io/title/10.1002/cyto.b.21104">Davis BH et al. ICSH/ICCS Validation Part I – Rationale and aims</a></li>
<li><a href="https://zendy.io/title/10.1002/cyto.b.21107">Barnett D et al. ICSH/ICCS Validation Part IV – Postanalytic considerations</a></li>
<li><a href="https://bvbvf1.bib-bvb.de/vufind/PrimoRecord/cdi_proquest_miscellaneous_1432076075">Wood B et al. ICSH/ICCS Validation Part V – Assay performance criteria</a></li>
<li><a href="https://documentsuat.cap.org/documents/2015-v6n2-iccs-newsletter-flow-cytometry-checklist.pdf">ICCS Newsletter 2015: CAP checklist, lower limit of enumeration</a></li>
<li><a href="https://arup.utah.edu/media/ng-clinFlowCyto5-2021/lecture-slides.pdf">ARUP: thống kê Poisson, LOB/LOD/LLOQ trong flow (bài giảng)</a></li>
</ul>

<figure class="fig" data-fig='{"t": "cards", "items": [["Roederer 2001", "bù màu", "b488"], ["ICSH/ICCS 2013", "5 phần thẩm định", "accent"], ["ICCS 2015", "checklist CAP", "warn"], ["ARUP", "Poisson, LOD", "v405"]], "per": 4, "h": 70}'><figcaption>Nhóm tài liệu kỹ thuật và thẩm định.</figcaption></figure>

<div id="tk5" class="ftb-anchor"></div>

## 23.7 Bệnh học và ứng dụng

<ul class="refs">
<li><a href="https://pubmed.ncbi.nlm.nih.gov/22535601/">Gorczyca W. APL: four distinct patterns by flow cytometry. Pol J Pathol 2012</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8359362">Radar plots phân biệt APL và AML NPM1+. Cytometry B</a></li>
<li><a href="https://haematologica.org/article/view/13037/79177">Laganà A et al. Flow cytometric scoring system for APL. Haematologica 2026</a></li>
<li><a href="https://bohrium.dp.tech/paper/arxiv/37855739">AML với CBFB rearrangement: kiểu hình và gen</a></li>
<li><a href="https://onlinelibrary-wiley-com-443.webvpn.zafu.edu.cn/doi/abs/10.1002/cyto.b.22051">Kiểu hình AML với KMT2A rearrangement. Cytometry B</a></li>
<li><a href="https://www.proquest.com/docview/3170006751">AML kiểu hình RAM (CBFA2T2::GLIS2)</a></li>
<li><a href="https://pure.eur.nl/en/publications/multiparameter-flow-cytometry-in-the-evaluation-of-myelodysplasia/">Porwit A et al. ELN iMDS Flow: Analytical issues. Cytometry B 2023</a></li>
<li><a href="https://publications.petermac.org/Publications/222">van der Velden VHJ et al. ELN iMDS Flow: Pre-analytical and technical issues</a></li>
<li><a href="https://minerva-access.unimelb.edu.au/rest/bitstreams/e34db062-9cc1-411f-8ae8-e77ad7735f0b/retrieve">ELN iMDS Flow: Clinical application in unexplained cytopenia</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4380720">Ogata score kèm CD5, CD7, CD56: nghiên cứu đa trung tâm. Haematologica</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10483367/">AI hỗ trợ chẩn đoán MDS bằng flow (định nghĩa Ogata). Haematologica 2023</a></li>
<li><a href="https://www.por-journal.com/articles/10.3389/pore.2024.1611811/full">So sánh Ogata và “3 bất thường 2 khoang”. Pathol Oncol Res 2024</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7881827">MFC trong MDS ở Ấn Độ</a></li>
<li><a href="https://synapsesocial.com/papers/W1999482916">Selimoglu-Buet D et al. Monocyte subsets in CMML. Blood 2015</a></li>
<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5906716/">Picot T et al. Monocyte subpopulations in CMML. Front Oncol 2018</a></li>
<li><a href="https://www.nature.com/articles/bcj201766.pdf">Monocyte subset analysis CMML vs MPN. Blood Cancer J 2017</a></li>
<li><a href="https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2021.750789/full">Sin CF, Man PHM. ETP-ALL. Front Oncol 2021</a></li>
<li><a href="https://www.frontiersin.org/journals/hematology/articles/10.3389/frhem.2024.1463410/full">George B et al. ETP-ALL review. Front Hematol 2024</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9713546/figure/fig002">Ví dụ MRD B-ALL sau rituximab</a></li>
<li><a href="https://mdpi.com/2075-4418/13/1/21">Kiểu hình MRD B-ALL và tiên lượng. Diagnostics 2023</a></li>
<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8430560/">Muñoz-García N et al. TRBC1 flow cytometry. Cancers 2021</a></li>
<li><a href="https://www.nature.com/articles/s41408-024-01002-0.pdf">Horna P et al. Dual TRBC1/TRBC2 staining. Blood Cancer J 2024</a></li>
<li><a href="https://katalog.lib.cas.cz/KNAV/EdsRecord/edo,ejs66508373">Devitt KA et al. TRBC1 in flow cytometry: development, validation, reporting. Cytometry B 2024</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6150794">Tương bào bình thường và ác tính: panel 8 marker</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3947595">Kiểu hình tương bào bình thường và bất thường trong MGUS, SMM, MM</a></li>
<li><a href="https://thieme-connect.com/products/ejournals/html/10.1055/s-0043-1761204">CD19 và CD81 trong phát hiện tương bào bất thường</a></li>
<li><a href="https://zendy.io/title/10.1002/cyto.b.21023">Sutherland DR et al. Practical guidelines high-sensitivity PNH. Cytometry B 2012</a></li>
<li><a href="https://pubmed.ncbi.nlm.nih.gov/29381839/">Sutherland DR et al. 5-, 6-, 7-color PNH WBC assays for Canto II and Navios. Cytometry B 2018</a></li>
<li><a href="https://www.thebloodproject.com/wp-content/uploads/2021/10/PNH_Dx.pdf">Illingworth A et al. ICCS/ESCCA PNH summary. IJLH 2019</a></li>
<li><a href="https://core.ac.uk/download/322433128.pdf">Marinov I, Illingworth A, Sutherland DR. High sensitivity identification of PNH clones (IntechOpen)</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6240522">Flow độ nhạy cao và thường quy trong PNH</a></li>
<li><a href="https://arupconsult.com/node/2393">ARUP Consult: PNH</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5998930/table/T2">Schuurhuis GJ et al. ELN AML MRD 2018: khuyến cáo</a></li>
<li><a href="https://pubmed.ncbi.nlm.nih.gov/34724563/">Heuser M et al. ELN AML MRD 2021 update. Blood 2021</a></li>
<li><a href="https://bohrium.dp.tech/paper/arxiv/37144777">Rodríguez-Arbolí E et al. Ngưỡng MRD AML. Leukemia 2024</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4832072">Rawstron AC et al. ERIC CLL MRD. Leukemia 2016</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11886504">EuroFlow CLL MRD 8 màu</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5629369">Flores-Montero J et al. Next Generation Flow MRD myeloma. Leukemia 2017</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6788635">Số sự kiện tối thiểu cho MRD đa u tủy 10⁻⁵</a></li>
<li><a href="https://www.lls.org/sites/default/files/2025-06/FSHP5_MRD_HCP_FactSheet_0625.pdf">LLS: MRD fact sheet 2025</a></li>
<li><a href="https://tbksp.who.int/en/node/3063">WHO: định nghĩa bệnh HIV tiến triển</a></li>
<li><a href="https://aidsrestherapy.biomedcentral.com/articles/10.1186/s12981-023-00581-5/tables/2">WHO 2017 và 2021: ngưỡng CD4 trong bệnh HIV tiến triển</a></li>
<li><a href="https://ianslive.in/who-strongly-recommends-cd4-testing-to-identify-advanced-hiv-disease--20251223162816">WHO 2025: khuyến cáo xét nghiệm CD4</a></li>
</ul>

<figure class="fig" data-fig='{"t": "bars", "items": [["AML, APL", 6, "r638"], ["MDS, CMML", 9, "warn"], ["ALL, ETP", 4, "v405"], ["T/NK, TRBC1", 3, "accent"], ["Tương bào", 3, "b488"], ["PNH", 6, "ok"], ["MRD", 8, "bad"], ["HIV/CD4", 3, "muted"]], "max": 10, "lw": 150}'><figcaption>Số tài liệu bệnh học và ứng dụng theo chủ đề.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch23.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
