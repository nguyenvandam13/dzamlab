---
title: "18 · MRD: bệnh tồn dư đo được"
description: "MRD (measurable residual disease, trước gọi minimal residual disease) là yếu tố tiên lượng độc lập sau điều trị trong hầu hết các bệnh máu ác tính, và ngày càng quyết định điều trị: ghép hay không, ngừng thuốc hay không."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "18"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần III · Chương 18</div><div id="ftb-search"></div></div>

<p class="lead">MRD (measurable residual disease, trước gọi minimal residual disease) là yếu tố tiên lượng độc lập sau điều trị trong hầu hết các bệnh máu ác tính, và ngày càng quyết định điều trị: ghép hay không, ngừng thuốc hay không. Chương này trình bày nền tảng thống kê chung, sau đó đi vào AML, B-ALL, T-ALL, CLL và đa u tủy theo các khuyến cáo ELN, ERIC, EuroFlow, IMWG.</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">2 mục mới · 78 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><div class="tbl-wrap" id="gtab-ch18"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-chi-so-chat-luong-tuy"><td>Chỉ số chất lượng tủy</td><td><span class="full">marrow quality indicators.</span> Dấu hiệu cho thấy mẫu thật sự là tủy: có tiền thân hồng cầu, tủy bào CD16−, dưỡng bào, hematogone, tương bào.</td><td class="at"><a href="#mau" title="Chất lượng mẫu quyết định MRD">18.2</a></td></tr><tr id="g-umrd"><td>uMRD</td><td><span class="full">undetectable MRD.</span> Không phát hiện MRD ở độ nhạy đạt được (phải ghi kèm độ nhạy, ví dụ uMRD4 = &lt; 10⁻⁴).</td><td class="at"><a href="#cll" title="MRD trong CLL">18.6</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="all-b-all-t-all" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-all-b-all-t-all" title="Acute Lymphoblastic Leukemia dòng B / dòng T: Leukemia cấp do nguyên bào lympho (lymphoblast) dòng B hoặc T. Thể khối u ở hạch/trung thất gọi là lymphoma nguyên bào lympho (LBL).">ALL / B-ALL / T-ALL</a><a data-g="aml" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-aml" title="Acute Myeloid Leukemia, leukemia cấp dòng tủy: Ung thư máu do blast dòng tủy tăng sinh trong tủy và máu.">AML</a><a data-g="apc-npc" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-14#g-apc-npc" title="abnormal / normal plasma cells: Tương bào bất thường (CD19−, CD56+, CD45−, CD81−, CD27 giảm, đơn dòng) và tương bào bình thường (CD19+, CD56−, CD45+, đa dòng).">aPC / nPC</a><a data-g="arup" href="/kien-thuc/flow-cytometry/giao-trinh/4-ung-dung-dac-biet/chuong-17#g-arup" title="ARUP Laboratories (Utah): Phòng xét nghiệm tham chiếu của Đại học Utah, có tài liệu tóm tắt PNH và MRD được trích trong giáo trình.">ARUP</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="bulk-lysis" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bulk-lysis" title="ly giải thể tích lớn: Ly giải hồng cầu của nhiều mL mẫu trước khi nhuộm, để thu đủ hàng triệu tế bào cho MRD.">Bulk lysis</a><a data-g="carryover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-carryover" title="nhiễm chéo: Tế bào hoặc hạt của mẫu trước sót lại trong đường ống và xuất hiện trong mẫu sau; quan trọng với MRD và PNH.">Carryover</a><a data-g="cbfb-myh11" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-cbfb-myh11" title="inv(16)/t(16;16): Fusion AML yếu tố gắn lõi; hay có thành phần mono và bạch cầu ưa acid bất thường.">CBFB::MYH11</a><a data-g="ccd3-ccd79a-ccd22" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-ccd3-ccd79a-ccd22" title="CD3, CD79a, CD22 nội bào (cytoplasmic): Kháng nguyên đo bên trong tế bào sau làm thấm; cCD3 là tiêu chí dòng T, cCD79a và cCD22 hỗ trợ dòng B.">cCD3 / cCD79a / cCD22</a><a data-g="cd45dim" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cd45dim" title="CD45 mờ: Vùng tế bào có CD45 yếu hơn lympho trên biểu đồ CD45 × SS, nơi blast thường nằm.">CD45dim</a><a data-g="cd79a-cd79b" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-cd79a-cd79b" title="Igα / Igβ: Hai chuỗi truyền tín hiệu của BCR, mang ITAM; cCD79a là marker dòng B, CD79b bề mặt mờ hoặc âm trong CLL.">CD79a / CD79b</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="cll" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cll" title="Chronic Lymphocytic Leukemia, leukemia kinh dòng lympho: Tân sinh B trưởng thành nhỏ: CD5+, CD23+, CD200 sáng, CD20 mờ, chuỗi nhẹ bề mặt mờ; B đơn dòng ≥ 5 × 10⁹/L trong máu. SLL là thể chủ yếu ở hạch.">CLL</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="count-median-cv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-count-median-cv" title="hàm thống kê trong công thức Kaluza: Các hàm trả về số sự kiện (COUNT), trung vị (MEDIAN), trung bình (ARITHMETICMEAN), CV của một cổng trên một kênh.">COUNT, MEDIAN, CV…</a><a data-g="cv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cv" title="coefficient of variation, hệ số biến thiên: SD chia cho trung bình, nhân 100%. Cho biết độ phân tán tương đối; dùng cho độ chụm và độ rộng đỉnh.">CV</a><a data-g="da-u-tuy" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-da-u-tuy" title="MM, multiple myeloma: Tân sinh tương bào đơn dòng trong tủy gây tổn thương cơ quan (CRAB).">Đa u tủy</a><a data-g="dfn" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-10#g-dfn" title="Different-from-Normal: Cách tiếp cận MRD tìm mọi quần thể lệch khỏi đường trưởng thành bình thường, không cần biết kiểu hình lúc chẩn đoán.">DfN</a><a data-g="do-nhay-mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-do-nhay-mrd" title="sensitivity: Tỷ lệ thấp nhất phát hiện được: LOD = số sự kiện cụm tối thiểu ÷ tổng tế bào đánh giá. Ví dụ 20 ÷ 2 000 000 = 10⁻⁵.">Độ nhạy (MRD)</a><a data-g="dong-nhat-khong-dong-nhat" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08c#g-dong-nhat-khong-dong-nhat" title="homogeneous / heterogeneous expression: Đồng nhất: cường độ tập trung, một đám chặt (gợi ý một clone). Không đồng nhất: dải rộng liên tục (thường là tế bào bình thường ở nhiều nấc trưởng thành).">Đồng nhất / không đồng nhất</a><a data-g="doublet" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doublet" title="tế bào đôi: Hai tế bào (hoặc hai hạt) đi qua laser cùng lúc nên bị ghi thành một sự kiện; loại bằng cổng INT × PEAK hoặc INT × TOF.">Doublet</a><a data-g="duong-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-duong-bao" title="mast cell: Tế bào chứa hạt histamin, CD117 rất sáng, SS cao; tăng và bất thường (CD2, CD25) trong mastocytosis.">Dưỡng bào</a><a data-g="duong-truong-thanh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-duong-truong-thanh" title="maturation pattern: Sự thay đổi kháng nguyên có trật tự khi tế bào trưởng thành, vẽ thành đường cong lặp lại được trên biểu đồ. Lệch khỏi đường này là dấu hiệu bất thường.">Đường trưởng thành</a><a data-g="edta" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-edta" title="ethylenediaminetetraacetic acid (K2/K3): Chất chống đông thông dụng nhất cho máu và tủy làm flow.">EDTA</a><a data-g="eln" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-eln" title="European LeukemiaNet: Mạng lưới leukemia châu Âu; đưa ra phân tầng nguy cơ AML (ELN 2022), khuyến cáo MRD AML (2021) và nhóm iMDS Flow.">ELN</a><a data-g="epitope" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-epitope" title="quyết định kháng nguyên: Mảnh nhỏ trên kháng nguyên mà một kháng thể hoặc TCR chạm vào. Một kháng nguyên có nhiều epitope; mỗi clone kháng thể bám một epitope.">Epitope</a><a data-g="eric" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-eric" title="European Research Initiative on CLL: Nhóm nghiên cứu CLL châu Âu; đưa ra chuẩn MRD CLL bằng flow (độ nhạy 10⁻⁴).">ERIC</a><a data-g="euroflow" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-euroflow" title="Hiệp hội EuroFlow: Nhóm hợp tác châu Âu chuẩn hóa toàn bộ quy trình flow: panel, cài đặt máy, phân tích, cơ sở dữ liệu tham chiếu.">EuroFlow</a><a data-g="hematogone" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-hematogone" title="tiền thân B bình thường: Tế bào tiền B bình thường trong tủy, nhiều ở trẻ em và giai đoạn hồi phục; đi theo đường trưởng thành liên tục, cần phân biệt với blast B-ALL.">Hematogone</a><a data-g="hla-dr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hla-dr" title="kháng nguyên bạch cầu người lớp II: Có trên tế bào B, mono, tiền thân CD34+, pDC; âm trên bạch cầu hạt trưởng thành, đa số T nghỉ và APL.">HLA-DR</a><a data-g="hong-cau-co-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-hong-cau-co-nhan" title="nucleated red blood cell, NRBC: Tiền thân hồng cầu còn nhân; bình thường chỉ ở tủy. Trên flow: CD45 âm hoặc rất mờ, SS thấp; CD71, CD235a dương.">Hồng cầu có nhân</a><a data-g="imwg" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-imwg" title="International Myeloma Working Group: Nhóm làm việc quốc tế về đa u tủy; định nghĩa tiêu chuẩn chẩn đoán và đáp ứng, gồm MRD.">IMWG</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="khang-the-dieu-tri-che-epitope" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08c#g-khang-the-dieu-tri-che-epitope" title="therapeutic antibody interference: Thuốc kháng thể (daratumumab anti-CD38, rituximab anti-CD20, elotuzumab anti-CD319…) chiếm epitope hoặc loại tế bào đích, làm marker “mất” trên flow.">Kháng thể điều trị che epitope</a><a data-g="kieu-hinh-mien-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kieu-hinh-mien-dich" title="immunophenotype: Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.">Kiểu hình miễn dịch</a><a data-g="ky-hieu-fusion" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-ky-hieu-fusion" title="gene fusion: Dấu “::” nối hai gen bị ghép nhau do chuyển đoạn, ví dụ PML::RARA, BCR::ABL1 (quy ước HGNC thay cho dấu gạch nối).">Ký hiệu fusion ::</a><a data-g="laip" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-08#g-laip" title="Leukemia-Associated Immunophenotype: Tổ hợp kháng nguyên bất thường của blast xác định lúc chẩn đoán, dùng để tìm lại tế bào leukemia khi theo dõi MRD.">LAIP</a><a data-g="lan-hut-dau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-lan-hut-dau" title="first pull: Mẫu tủy lấy ở lần hút đầu tiên ít bị pha loãng máu nhất; nên dành cho MRD.">Lần hút đầu</a><a data-g="lech-dong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-lech-dong" title="aberrant / cross-lineage expression: Kháng nguyên của dòng khác xuất hiện trên tế bào, ví dụ CD7 trên blast tủy, CD13 trên blast B. Là một kiểu LAIP.">Lệch dòng</a><a data-g="lloq" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lloq" title="Lower Limit of Quantification, giới hạn định lượng dưới: Mức thấp nhất định lượng được với độ chụm và độ đúng chấp nhận được; quy ước thường là ≥ 50 sự kiện (CV ≈ 14%).">LLOQ</a><a data-g="lob" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-lob" title="Limit of Blank, giới hạn mẫu trắng: Giá trị cao nhất mong đợi khi chạy mẫu không có chất cần đo: trung bình mẫu trắng + 1,645 × SD mẫu trắng.">LOB</a><a data-g="lod" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lod" title="Limit of Detection, giới hạn phát hiện: Mức thấp nhất mà xét nghiệm phát hiện được một cách tin cậy. Trong flow sự kiện hiếm thường quy ước là cụm ≥ 20 sự kiện.">LOD</a><a data-g="lsc" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-12#g-lsc" title="Leukemic Stem Cell, tế bào gốc leukemia: Quần thể CD34+CD38− mang marker bất thường (CD45RA, CD123, CLL-1, TIM-3…), nghi là nguồn gây tái phát.">LSC</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mau-so" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mau-so" title="denominator: Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.">Mẫu số</a><a data-g="mean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mean" title="trung bình số học: Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.">Mean</a><a data-g="merge" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-merge" title="gộp data set: Ghép các file cùng cấu hình thành một data set lớn, dùng khi thu MRD nhiều ống.">Merge</a><a data-g="mhc-hla" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-mhc-hla" title="Major Histocompatibility Complex / Human Leukocyte Antigen: Phân tử trình diện peptide cho T. Lớp I (HLA-A, B, C) trên mọi tế bào có nhân, đọc bởi T CD8; lớp II (HLA-DR, DP, DQ) trên tế bào trình diện và tế bào non, đọc bởi T CD4.">MHC / HLA</a><a data-g="mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mrd" title="Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được: Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.">MRD</a><a data-g="ngf" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-ngf" title="Next Generation Flow (EuroFlow): Quy trình MRD đa u tủy 2 ống 8 màu của EuroFlow, thu ≥ 10 triệu tế bào, độ nhạy 10⁻⁵–10⁻⁶.">NGF</a><a data-g="ngs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-ngs" title="Next-Generation Sequencing, giải trình tự thế hệ mới: Giải trình tự song song nhiều gen cùng lúc để tìm đột biến; cũng dùng cho MRD dựa trên trình tự IG/TR (clonoSEQ).">NGS</a><a data-g="nguyen-tuy-bao-bach-cau-doan" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nguyen-tuy-bao-bach-cau-doan" title="các giai đoạn trưởng thành dòng hạt: Nguyên tủy bào (myeloblast) → tiền tủy bào (promyelocyte) → tủy bào (myelocyte) → hậu tủy bào (metamyelocyte) → bạch cầu đũa → bạch cầu đoạn.">Nguyên tủy bào … bạch cầu đoạn</a><a data-g="nh4cl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-nh4cl" title="amoni clorua: Dung dịch ly giải hồng cầu không chứa chất cố định, dùng cho bulk lysis.">NH4Cl</a><a data-g="nhuom-noi-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-nhuom-noi-bao" title="intracellular staining: Cố định rồi làm thấm màng để kháng thể vào trong tế bào nhuộm MPO, cCD3, cCD79a, TdT, chuỗi nhẹ nội bào.">Nhuộm nội bào</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="npm1" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-npm1" title="nucleophosmin 1: Đột biến hay gặp trong AML (~30%); thường CD34−, HLA-DR− hoặc thành phần mono; tiên lượng tốt nếu không kèm FLT3-ITD.">NPM1</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="overlay" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-overlay" title="chồng hình: Vẽ nhiều quần thể hoặc nhiều file lên cùng một biểu đồ để so sánh.">Overlay</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pcr-rt-pcr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-pcr-rt-pcr" title="Polymerase Chain Reaction / Reverse Transcription PCR: Kỹ thuật nhân bản DNA (hoặc RNA qua bước phiên mã ngược) để phát hiện đột biến, fusion, hoặc theo dõi MRD.">PCR / RT-PCR</a><a data-g="pha-loang-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-pha-loang-mau" title="hemodilution: Dịch hút tủy lẫn máu ngoại vi làm giảm tỷ lệ tế bào tủy (tiền thân, blast, tương bào), gây đánh giá thấp.">Pha loãng máu</a><a data-g="pml-rara" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-pml-rara" title="t(15;17): Fusion định nghĩa APL.">PML::RARA</a><a data-g="poisson" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-poisson" title="phân bố Poisson: Quy luật của phép đếm sự kiện hiếm ngẫu nhiên: nếu đếm được n sự kiện thì SD ≈ √n và CV ≈ 1/√n.">Poisson</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="radar-plot" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-radar-plot" title="biểu đồ radar: Biểu đồ chiếu dữ liệu nhiều chiều lên mặt phẳng: mỗi marker là một trục từ tâm, vị trí tế bào là tổng lực kéo của các trục.">Radar plot</a><a data-g="runx1-runx1t1" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-runx1-runx1t1" title="t(8;21): Fusion của AML yếu tố gắn lõi (core-binding factor); blast hay mang CD19, CD56, PAX5.">RUNX1::RUNX1T1</a><a data-g="scd3" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-09#g-scd3" title="CD3 bề mặt: CD3 trên màng tế bào; có trên T trưởng thành, thường âm trên T-ALL.">sCD3</a><a data-g="sd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-sd" title="standard deviation, độ lệch chuẩn: Mức phân tán của các giá trị quanh trung bình; quần thể loe rộng có SD lớn.">SD</a><a data-g="sop" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-sop" title="Standard Operating Procedure, quy trình thao tác chuẩn: Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.">SOP</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="tdt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tdt" title="terminal deoxynucleotidyl transferase: Enzym nhân của tế bào lympho non; dương trong B-ALL, T-ALL và hematogone sớm.">TdT</a><a data-g="tham-dinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tham-dinh" title="validation: Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).">Thẩm định</a><a data-g="thang-tuyen-tinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-tuyen-tinh" title="linear scale: Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.">Thang tuyến tính</a><a data-g="thymocyte" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-thymocyte" title="tế bào tuyến ức: Tế bào T đang trưởng thành trong tuyến ức (CD1a+, CD4+CD8+); kiểu hình tương tự T-ALL thể vỏ.">Thymocyte</a><a data-g="toan-tu-boolean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-toan-tu-boolean" title="Boolean gate: AND, OR, NOT: Kết hợp cổng bằng phép logic: AND (giao), OR (hợp), NOT (loại trừ). Ví dụ cổng MRD = các bất thường AND NOT quần thể bình thường.">Toán tử Boolean</a><a data-g="tuong-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tuong-bao" title="plasma cell: Tế bào B biệt hóa cuối cùng tiết kháng thể; CD38 rất sáng, CD138+, chuỗi nhẹ nội bào.">Tương bào</a><a data-g="tuyen-uc" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-tuyen-uc" title="thymus: Cơ quan sau xương ức nơi T non (thymocyte) được chọn lọc và trưởng thành.">Tuyến ức</a><a data-g="xuong-song-panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-xuong-song-panel" title="backbone markers: Các marker có mặt ở mọi ống (ví dụ CD45, CD34, CD19) để cổng cùng quần thể giữa các ống.">Xương sống panel</a></div></div></details>

<div id="nen" class="ftb-anchor"></div>

## 18.1 Nền tảng chung

<div class="tbl-wrap"><table>
<thead><tr><th>Độ nhạy</th><th>Tỷ lệ</th><th>Một tế bào ác tính trong</th></tr></thead>
<tbody>
<tr><td>10⁻³</td><td>0,1%</td><td>1 000 tế bào</td></tr>
<tr><td>10⁻⁴</td><td>0,01%</td><td>10 000</td></tr>
<tr><td>10⁻⁵</td><td>0,001%</td><td>100 000</td></tr>
<tr><td>10⁻⁶</td><td>0,0001%</td><td>1 000 000</td></tr>
</tbody>
</table></div>

<p class="src">Bảng ngưỡng theo tờ thông tin MRD của Leukemia &amp; Lymphoma Society (2025).</p>

Flow MRD dựa trên khả năng phân biệt tế bào ác tính tồn dư với tế bào bình thường đang hồi phục. Hai cách tiếp cận: **LAIP** (leukemia-associated immunophenotype) xác định lúc chẩn đoán rồi tìm lại; và **DfN** (different-from-normal) tìm mọi quần thể lệch khỏi mẫu hình bình thường, không cần mẫu chẩn đoán. Thực hành hiện đại kết hợp cả hai vì kiểu hình có thể đổi khi điều trị.

<div class="kyhieu">
<div class="kh-t">Ký hiệu dùng trong chương 18</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Ký hiệu</th><th>Nghĩa</th></tr></thead>
<tbody>
<tr><td class="sym">10⁻⁴, 10⁻⁵…</td><td>Cách viết lũy thừa: 10⁻⁴ = 1 ÷ 10 000 = 0,0001 = 0,01%, tức 1 tế bào ác tính trong 10 000 tế bào.</td></tr>
<tr><td class="sym">N</td><td>Tổng số tế bào được đánh giá (mẫu số), ví dụ tổng bạch cầu có nhân sau khi loại doublet và mảnh vụn.</td></tr>
<tr><td class="sym">n</td><td>Số sự kiện trong cụm tế bào bất thường.</td></tr>
<tr><td class="sym">MRD %</td><td>MRD = n ÷ N × 100%.</td></tr>
<tr><td class="sym">LOD của lần chạy</td><td>20 ÷ N: tỷ lệ thấp nhất lần chạy này phát hiện được (cần cụm ≥ 20 sự kiện).</td></tr>
<tr><td class="sym">LLOQ của lần chạy</td><td>50 ÷ N: tỷ lệ thấp nhất định lượng được (cần ≥ 50 sự kiện).</td></tr>
<tr><td class="sym">CV đếm</td><td>≈ 1 ÷ √n: sai số ngẫu nhiên của phép đếm Poisson (mục 1.13).</td></tr>
<tr><td class="sym">LOB</td><td>Giới hạn mẫu trắng = trung bình mẫu trắng + 1,645 × SD mẫu trắng (mục 6.9).</td></tr>
</tbody>
</table></div>
</div>

Một quy ước phổ biến về số sự kiện: cụm ít nhất 20 sự kiện kiểu hình bất thường để xác định phát hiện (LOD) và 50 sự kiện để định lượng tin cậy (LLOQ). Bài giảng ARUP nhấn mạnh: CV đếm Poisson bằng 1/√n, nên 50 sự kiện có CV trung bình khoảng 14%; thu nhiều sự kiện hơn không hạ giới hạn phát hiện về mặt nền sinh học, nhưng đưa phép đo đến gần giới hạn đó. LOB, LOD, LLOQ thống kê (LOB = trung bình mẫu trắng + 1,645 SD) cũng được dùng trong thẩm định (chương 06).

<div class="lab">
<div class="labhead"><h4>Máy tính độ nhạy MRD</h4><span class="stat">chỉnh LOD/LLOQ theo SOP của phòng</span></div>
<div class="grid2" style="margin:0">
<div class="controls">
<div class="ctl"><label for="mrdTotal">Tổng tế bào được đánh giá (mẫu số)</label><input id="mrdTotal" type="number" value="2000000"/></div>
<div class="ctl"><label for="mrdCluster">Số sự kiện trong cổng MRD</label><input id="mrdCluster" type="number" value="35"/></div>
<div class="ctl"><label for="mrdLod">Ngưỡng phát hiện (sự kiện)</label><input id="mrdLod" type="number" value="20"/></div>
<div class="ctl"><label for="mrdLoq">Ngưỡng định lượng (sự kiện)</label><input id="mrdLoq" type="number" value="50"/></div>
<div class="ctl"><label for="mrdTarget">Độ nhạy mục tiêu</label><select id="mrdTarget"><option value="1e-3">10⁻³ (0,1%)</option><option value="1e-4">10⁻⁴ (0,01%)</option><option selected="" value="1e-5">10⁻⁵ (0,001%)</option><option value="1e-6">10⁻⁶</option></select></div>
</div>
<div id="mrdResult" style="font-size:.93rem"></div>
</div>
</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">MRD như tìm kim trong đống rơm</div>
<p>Độ nhạy 10⁻⁵ là tìm 1 tế bào ác tính trong 100 000 tế bào. Ba điều quyết định tìm được hay không: <b>đống rơm đủ lớn</b> (thu đủ tế bào), <b>cây kim khác rơm</b> (kiểu hình bất thường rõ so với tế bào bình thường), và <b>rơm không bị trộn với đất</b> (mẫu không pha loãng). Thiếu một trong ba, kết quả âm không còn ý nghĩa.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">LAIP và DfN</div>
<p><b>LAIP</b> (leukemia-associated immunophenotype): ghi bất thường lúc chẩn đoán, rồi tìm lại bất thường đó. <b>DfN</b> (different from normal): không cần dữ liệu chẩn đoán, tìm mọi tế bào lệch khỏi đường trưởng thành bình thường. ELN khuyến cáo kết hợp cả hai, vì kiểu hình có thể thay đổi sau điều trị.</p></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["10⁻³ (0,1%)", 1000, "ok", "1 / 1 000"], ["10⁻⁴ (0,01%)", 10000, "accent", "1 / 10 000"], ["10⁻⁵ (0,001%)", 100000, "warn", "1 / 100 000"], ["10⁻⁶", 1000000, "r638", "1 / 1 000 000"]], "max": 1100000, "lw": 150}'><figcaption>Các mức độ nhạy MRD: một tế bào ác tính trong bao nhiêu tế bào.</figcaption></figure>

<div id="mau" class="ftb-anchor"></div>

## 18.2 Chất lượng mẫu quyết định MRD

<ul class="tight">
<li><b>Lần hút đầu</b> cho MRD; các lần sau bị pha loãng máu. ELN khuyến cáo ước lượng mức lẫn máu ngoại vi, nhất là khi không lấy được lần hút đầu.</li>
<li><b>Chỉ số chất lượng tủy</b>: có tiền thân hồng cầu, tủy bào/hậu tủy bào CD16−, dưỡng bào CD117 sáng, hematogone (chương 07). Ghi nhận trong báo cáo.</li>
<li><b>Số tế bào</b>: bulk lysis để nhuộm đủ (vài triệu đến 10 triệu tế bào); thu toàn bộ ống.</li>
<li><b>Nhiễm chéo</b>: chạy ống rửa trước mẫu MRD, nhất là sau mẫu chẩn đoán cùng bệnh.</li>
</ul>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Mẫu pha loãng làm MRD âm giả bao nhiêu</div>
<p>Tủy thật có MRD 0,05%. Lần hút sau lẫn 80% máu ngoại vi (máu không có blast): MRD đo được còn khoảng 0,05% × 0,2 = 0,01%. Nếu lẫn 95%: còn 0,0025%. Kết quả “thấp” hoặc “âm” không phản ánh tủy thật. Đây là lý do phải báo chỉ số chất lượng tủy.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["Lần hút đầu, chất lượng tốt", ["Hồng cầu non, tủy bào, dưỡng bào", "MRD đáng tin"], "ok"], ["Lần hút sau, pha loãng", ["MRD âm giả", "Phải ghi chú"], "bad"]]}'><figcaption>Chất lượng mẫu quyết định MRD.</figcaption></figure>

<div id="aml" class="ftb-anchor"></div>

## 18.3 MRD trong AML

Nhóm MRD của European LeukemiaNet công bố đồng thuận năm 2018 (Schuurhuis và cộng sự, *Blood*) và cập nhật năm 2021 (Heuser và cộng sự, *Blood* 138:2753–2767). Các khuyến cáo flow chính trong bản 2018:

<div class="tbl-wrap"><table>
<thead><tr><th>Khuyến cáo</th><th>Nội dung</th></tr></thead>
<tbody>
<tr><td>Số tế bào</td><td>Dùng 500 000 đến 1 000 000 bạch cầu; dùng bất thường tốt nhất hiện có và tính trên bạch cầu CD45+</td></tr>
<tr><td>Ngưỡng</td><td>Ngưỡng 0,1% để chia nhóm MRD âm và MRD dương</td></tr>
<tr><td>MRD dưới ngưỡng</td><td>Nếu có MRD thật &lt;0,1%, báo “MRD dương &lt;0,1%, có thể phù hợp leukemia tồn dư”; nếu thích hợp ghi “mức này chưa được thẩm định lâm sàng”</td></tr>
<tr><td>Pha loãng</td><td>Ước lượng mức lẫn máu ngoại vi, nhất là khi không có lần hút đầu</td></tr>
<tr><td>Lâm sàng</td><td>Lui bệnh hoàn toàn MRD âm (CR<sub>MRD−</sub>) là tiêu chí đáp ứng; AML có NPM1, RUNX1::RUNX1T1, CBFB::MYH11, PML::RARA nên theo dõi bằng sinh học phân tử</td></tr>
</tbody>
</table></div>

Bản 2021 kết hợp LAIP và DfN, chuẩn hóa báo cáo. Một bài trên *Leukemia* 2024 về ngưỡng tiên lượng tối ưu nhắc lại: theo hướng dẫn của cơ quan quản lý rằng xét nghiệm MRD phải được thẩm định thấp hơn ngưỡng quyết định một bậc log, nhóm MRD của ELN hiện định nghĩa MRD dương đồng nhất ở 0,1%. Bình luận trên *Haematologica* lưu ý: một cổng LAIP cần hơn 50 tế bào (giới hạn định lượng tuyệt đối), dưới đó có thể là nhiễu nền.

<div class="tbl-wrap"><table>
<thead><tr><th>Ống MRD AML gợi ý (ELN)</th><th>Marker</th></tr></thead>
<tbody>
<tr><td>Xương sống</td><td>CD45, CD34, CD117, CD33, CD13, HLA-DR, CD38</td></tr>
<tr><td>Lệch dòng và trưởng thành</td><td>CD7, CD56, CD19, CD5, CD2, CD11b, CD15, CD14, CD64, CD4</td></tr>
<tr><td>Tế bào gốc leukemia (LSC)</td><td>CD34+ CD38−, kèm CD45RA, CD123, CLL-1, TIM-3, CD33, CD44 (nghiên cứu)</td></tr>
</tbody>
</table></div>

<div class="callout"><b class="t">Với ClearLLab M1 và M2</b>M2 có CD34, CD117, CD13, CD33, CD38, HLA-DR, CD123, CD15, CD19, CD45 và M1 có CD7, CD11b, CD64, CD14, CD16, CD10: đủ nhiều bất thường cho MRD theo LAIP ở mức 10⁻³. Muốn 10⁻⁴ cần thu đủ tế bào (≥500 000 bạch cầu theo ELN) và thẩm định.</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Tìm LAIP CD7 trên blast CD34+ khi theo dõi</div>
<ol><li>Mở file chẩn đoán: blast CD34+ CD7+, cường độ CD7 mờ.</li><li>Mẫu theo dõi: cổng CD45 mờ → CD34+ → CD7 × CD34.</li><li>Đặt cổng LAIP dựa trên file chẩn đoán và kiểm tra trên tủy bình thường (tiền thân CD34+ bình thường có một phần nhỏ CD7 mờ).</li><li>Đếm sự kiện trong cổng, tính % trên bạch cầu, so với LOD/LLOQ của lần chạy.</li></ol></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "CD7 PE", "y": "CD34 APC", "pops": [{"n": 60, "x": 0.72, "sx": 0.04, "y": 0.8, "sy": 0.04, "c": "r638", "l": "LAIP: CD34+ CD7+ (0,15%)"}, {"n": 500, "x": 0.12, "sx": 0.04, "y": 0.78, "sy": 0.05, "c": "accent", "l": "Tiền thân bình thường CD7−"}, {"n": 1500, "x": 0.12, "sx": 0.05, "y": 0.1, "sy": 0.05, "c": "muted", "l": "Khác"}], "seed": 299, "note": "mô phỏng", "gates": [{"rect": [0.6, 0.95, 0.65, 0.95], "c": "r638", "l": "LAIP"}]}' height="420" width="560"></canvas><figcaption>MRD AML theo LAIP: cụm CD34+ CD7+ tách khỏi tiền thân bình thường.</figcaption></figure>

<div id="ball" class="ftb-anchor"></div>

## 18.4 MRD trong B-ALL

B-ALL là bệnh MRD được chứng minh tốt nhất; MRD cuối cảm ứng và sau củng cố quyết định phân tầng nguy cơ ở hầu hết phác đồ. Flow đạt 10⁻⁴ thường quy, 10⁻⁵ với NGF. Một nghiên cứu (MDPI Diagnostics 2023) trên 94 bệnh nhân cho thấy MRD dương cuối cảm ứng có sống còn không tái phát 4 năm thấp hơn rõ rệt (37% so với 78%), và kiểu hình MRD (CD10 âm, CD38 dương, CD58 cao) liên quan tiên lượng.

<div class="tbl-wrap"><table>
<thead><tr><th>Nhóm marker</th><th>Vai trò</th></tr></thead>
<tbody>
<tr><td>CD19 (hoặc CD22, CD24 sau liệu pháp CD19), CD45, CD34, CD10, CD20, CD38</td><td>Xác định tế bào B và đường trưởng thành</td></tr>
<tr><td>CD58, CD81, CD66c, CD123, CD73, CD304, CD13, CD33</td><td>Tăng độ tách blast khỏi hematogone</td></tr>
</tbody>
</table></div>

Ba dấu hiệu phân biệt blast với hematogone: thiếu hoặc thừa biểu hiện so với dải trưởng thành (CD34, CD10 thừa; CD45, CD38 thiếu), biểu hiện lệch dòng (CD13, CD33, CD56, CD11b…), và lệch khỏi đường trưởng thành bình thường. Ví dụ đã công bố ở chương 12: MRD 0,2% sau rituximab, CD10/CD58/CD34 tăng, CD38/CD81 giảm, CD20 mất.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Hematogone hồi phục và MRD B-ALL</div>
<p>Sau hóa trị, hematogone tăng mạnh, đúng lúc đánh giá MRD. Chúng có CD10, CD19, CD34, TdT giống blast. Phân biệt bằng đường trưởng thành liên tục (chương 12) và các marker lệch cường độ: CD10, CD38, CD45, CD58, CD81, CD20. Nhầm hematogone là MRD dương có thể làm bệnh nhân bị điều trị quá mức.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "radar"}'><figcaption>Radar plot: blast MRD tách khỏi dải hematogone (minh họa).</figcaption></figure>

<div id="tall" class="ftb-anchor"></div>

## 18.5 MRD trong T-ALL

Tế bào T non không có ở tủy và máu bình thường, nên quần thể cCD3+ CD7+ có TdT, CD99 sáng, CD1a, CD34 hoặc mất sCD3 dễ phát hiện. Marker hay dùng: cCD3, sCD3, CD7, CD5, CD1a, CD99, CD34, TdT, CD48, CD45, CD4, CD8. Cẩn thận với T γδ và NK (CD7+, sCD3− với NK).

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Tế bào T non không có chỗ ở trong tủy bình thường</div>
<p>Thymocyte chỉ có ở tuyến ức. Một quần thể cCD3+ TdT+ hay CD99 sáng trong tủy hoặc máu là bất thường dù rất nhỏ. Vì vậy MRD T-ALL dễ hơn B-ALL ở chỗ không có “hematogone T” để nhầm, nhưng khó hơn khi blast sau điều trị trưởng thành hơn và mất TdT.</p></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "cCD3", "y": "CD99", "pops": [{"n": 50, "x": 0.75, "sx": 0.04, "y": 0.85, "sy": 0.03, "c": "r638", "l": "Blast T MRD: CD99 sáng"}, {"n": 800, "x": 0.8, "sx": 0.04, "y": 0.45, "sy": 0.06, "c": "b488", "l": "T bình thường"}, {"n": 800, "x": 0.1, "sx": 0.04, "y": 0.3, "sy": 0.06, "c": "muted", "l": "Khác"}], "seed": 194, "note": "mô phỏng"}' height="420" width="560"></canvas><figcaption>MRD T-ALL: tế bào T non có CD99 sáng không có ở tủy bình thường.</figcaption></figure>

<div id="cll" class="ftb-anchor"></div>

## 18.6 MRD trong CLL

Ở CLL, MRD trên ngưỡng 0,010% (10⁻⁴) là yếu tố dự báo độc lập thời gian sống không tiến triển và sống còn toàn bộ sau hóa miễn dịch. Dự án ERIC (Rawstron và cộng sự, *Leukemia* 2016) thẩm định cách tiếp cận flow định lượng tin cậy tế bào CLL đến 0,0010% (10⁻⁵), với bộ lõi 6 marker CD19, CD20, CD5, CD43, CD79b, CD81, mô tả theo đặc tính độc lập máy và thuốc thử và có thể thẩm định lại tại chỗ bằng máu bình thường. So song song với giải trình tự clonoSEQ cho phù hợp tốt ở mức 10⁻⁴; giải trình tự tuyến tính đến 10⁻⁶.

<div class="callout warn"><b class="t">Thận trọng ở mức 10⁻⁵</b>Một nghiên cứu EuroFlow về MRD CLL 8 màu (PMC11886504) ghi nhận: với dãy pha loãng, mức MRD giữa 10⁻⁴ và 10⁻⁵ chỉ được đánh giá đúng ở 74% trường hợp; 23% mẫu người cho bình thường bị xếp MRD dương ở mức rất thấp (trung bình 5,3 × 10⁻⁵). Nhóm này kết luận MRD âm (uMRD) khi ít nhất một ống dưới LOD 20 sự kiện, và áp dụng phân cụm đa chiều theo kinh nghiệm NGF của đa u tủy.</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">uMRD 10⁻⁴ cần bao nhiêu tế bào</div>
<p>Với quy ước LLOQ 50 sự kiện, định lượng MRD CLL ở 10⁻⁴ cần ít nhất 50 / 10⁻⁴ = 500 000 bạch cầu. Muốn chắc chắn ở 10⁻⁵ cần khoảng 5 triệu. Mẫu chỉ thu 200 000 tế bào không trả lời được câu hỏi 10⁻⁴, dù không thấy tế bào CLL nào.</p></div>

<figure class="fig" data-fig='{"t": "heat", "cols": ["CD19", "CD20", "CD5", "CD43", "CD79b", "CD81"], "rows": [["CLL", [2, 1, 2, 2, 1, 1]], ["B bình thường", [2, 2, 0, 0, 2, 2]]], "lw": 120, "c": "b488"}'><figcaption>Bộ lõi 6 marker ERIC: CLL khác B bình thường ở CD20, CD5, CD43, CD79b, CD81.</figcaption></figure>

<div id="mm" class="ftb-anchor"></div>

## 18.7 MRD trong đa u tủy

EuroFlow Next Generation Flow (Flores-Montero và cộng sự, *Leukemia* 2017) chuẩn hóa toàn bộ quy trình: bulk lysis, panel 2 ống 8 màu, cài đặt máy, cổng tự động dựa trên cơ sở dữ liệu tham chiếu, đạt độ nhạy 10⁻⁵ hoặc thấp hơn và được thẩm định so với flow 8 màu thường và NGS. Các khuyến cáo đồng thuận yêu cầu tối thiểu 2 triệu và khuyến cáo 5 triệu sự kiện để đạt độ nhạy tối thiểu 10⁻⁵. Ở bệnh nhân lui bệnh hoàn toàn kéo dài, NGF phát hiện MRD ở mức 10⁻⁵ và 10⁻⁶; mọi bệnh nhân tái phát đều MRD dương ở lần đánh giá gần nhất.

<div class="tbl-wrap"><table>
<thead><tr><th>Bước NGF</th><th>Điểm chính</th></tr></thead>
<tbody>
<tr><td>Mẫu</td><td>Tủy lần hút đầu, EDTA</td></tr>
<tr><td>Xử lý</td><td>Bulk lysis NH4Cl, nhuộm khoảng 10 triệu tế bào mỗi ống</td></tr>
<tr><td>Thu</td><td>Toàn bộ ống; ghi tổng tế bào có nhân</td></tr>
<tr><td>Phân tích</td><td>Cổng tương bào CD38/CD138; aPC theo CD19, CD45, CD56, CD27, CD81, CD117 và chuỗi nhẹ nội bào; so cơ sở dữ liệu tham chiếu</td></tr>
<tr><td>Báo cáo</td><td>% aPC trên tế bào có nhân, LOD và LLOQ của lần chạy, chỉ số chất lượng mẫu</td></tr>
</tbody>
</table></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Có làm MRD đa u tủy 10⁻⁵ trên ống 10 màu ClearLLab được không?”</div>
<p>ClearLLab không thiết kế cho MRD tương bào. MRD 10⁻⁵ đòi hỏi panel chuyên biệt (NGF hoặc tương đương), bulk lysis, khoảng 10 triệu tế bào mỗi ống và thẩm định riêng. Có thể tư vấn khách hàng triển khai panel MRD riêng, không dùng panel chẩn đoán.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Tủy lần hút đầu", "EDTA", "accent"], ["Bulk lysis", "~10 triệu tế bào/ống", "b488"], ["2 ống 8 màu", "NGF", "v405"], ["Thu toàn bộ", "", "warn"], ["Cổng aPC", "so cơ sở dữ liệu", "r638"], ["Báo cáo", "%, LOD, LLOQ", "ok"]], "per": 3, "snake": true}'><figcaption>Quy trình EuroFlow NGF cho MRD đa u tủy.</figcaption></figure>

<div id="kaluza" class="ftb-anchor"></div>

## 18.8 Công cụ Kaluza cho MRD

<ul class="tight">
<li><b>Merge Data Sets</b>: gộp nhiều file cùng ống (tối đa 48 file hoặc 20 triệu sự kiện).</li>
<li><b>Show as rare events</b>: phóng to và tô màu cụm MRD trên mọi biểu đồ.</li>
<li><b>Radar plot</b> với các trục CD10, CD20, CD34, CD38, CD45, CD58, CD81 (B-ALL) hoặc CD34, CD117, CD13, CD33, CD7, CD56, HLA-DR, CD38 (AML).</li>
<li><b>Boolean</b>: cổng MRD = giao các bất thường, loại các quần thể bình thường (NOT).</li>
<li><b>Công thức</b> tính LOD/LLOQ ngay trên báo cáo: <code>=20 / COUNT("CD45+")</code>.</li>
<li><b>Overlay</b> với file bình thường cùng protocol để thấy “vùng trống” nơi tế bào bình thường không có.</li>
</ul>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Gộp file để đủ tế bào</div>
<ol><li>Thu nhiều ống cùng panel của một mẫu (ví dụ 4 ống × 500 000).</li><li>Trong Kaluza, Merge Data Sets các file cùng ống.</li><li>Áp protocol MRD, bật Show as rare events cho cổng MRD.</li><li>Đếm tổng tế bào sau gộp để tính LOD/LLOQ.</li></ol></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Merge Data Sets", "≤48 file / 20 triệu", "accent"], ["Rare events", "phóng to cụm", "r638"], ["Radar", "đa chiều", "#d13ab0"], ["Boolean", "giao bất thường", "b488"], ["Công thức LOD", "=20/COUNT", "warn"], ["Overlay", "so mẫu bình thường", "ok"]], "per": 3}'><figcaption>Công cụ Kaluza cho MRD.</figcaption></figure>

<div id="baocao" class="ftb-anchor"></div>

## 18.9 Báo cáo MRD

<div class="formula">Bệnh phẩm: tủy, lần hút đầu: có. Chỉ số chất lượng: có tiền thân hồng cầu, tủy bào CD16−, dưỡng bào, hematogone 0,8%.<br/>Số tế bào có nhân đánh giá: 2 150 000. LOD (20 sự kiện): 0,0009%. LLOQ (50 sự kiện): 0,0023%.<br/>Kết quả: phát hiện 412 tế bào kiểu hình CD19+ CD10++ CD34+ CD38 giảm CD45− CD58++ CD20−, tương ứng 0,019% tế bào có nhân.<br/>Kết luận: MRD dương 0,019% (1,9 × 10⁻⁴).</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Đọc một kết quả MRD với LOD và LLOQ</div>
<p>Thu 2 150 000 tế bào. LOD = 20 / 2 150 000 ≈ 0,0009%. LLOQ = 50 / 2 150 000 ≈ 0,0023%. Tìm được 410 sự kiện bất thường: 0,019%, trên LLOQ: báo định lượng. Nếu chỉ tìm được 30 sự kiện (0,0014%): trên LOD nhưng dưới LLOQ, báo “phát hiện, dưới ngưỡng định lượng”. Nếu 8 sự kiện: dưới LOD, báo “không phát hiện ở độ nhạy 0,0009%”.</p></div>

<div class="learn vidu"><div class="lh" data-k="Đọc từng ô">Đọc bảng thống kê của một ca MRD B-ALL</div><p>Tủy lần hút đầu, cuối cảm ứng, gộp 4 ống bằng Merge Data Sets. Mẫu số là tế bào có nhân sau các cổng chất lượng. <b>Bấm vào từng dòng</b> để xem cách tính và cách hiểu.</p><div class="tbl-wrap"><table class="walk"><thead><tr><th>Cổng / chỉ số</th><th>Số sự kiện</th><th>Tần suất</th><th>Ý nghĩa</th></tr></thead><tbody><tr class="r"><td>All (đã gộp)</td><td class="num">2 600 000</td><td class="num">—</td><td class="num">—</td></tr><tr class="x"><td colspan="4">Tổng sự kiện của 4 file. Không dùng làm mẫu số.</td></tr><tr class="r"><td>Time → Singlets → tế bào có nhân</td><td class="num">2 150 000</td><td>mẫu số</td><td class="num">—</td></tr><tr class="x"><td colspan="4">Sau loại đoạn dòng chảy xấu, doublet và mảnh vụn còn 2 150 000 tế bào có nhân. Mọi LOD, LLOQ tính trên con số này.</td></tr><tr class="r"><td>LOD, LLOQ của lần chạy</td><td class="num">20 · 50</td><td class="num">0,0009% · 0,0023%</td><td class="num">—</td></tr><tr class="x"><td colspan="4">LOD = 20 / 2 150 000 ≈ 0,0009%. LLOQ = 50 / 2 150 000 ≈ 0,0023%. Đây là độ nhạy thật của lần đo, phải ghi trong báo cáo.</td></tr><tr class="r"><td>Hồng cầu có nhân, dưỡng bào, tủy bào CD16−</td><td>có</td><td class="num">—</td><td>Chất lượng tủy</td></tr><tr class="x"><td colspan="4">Có tiền thân hồng cầu, dưỡng bào và tủy bào chưa trưởng thành: mẫu là tủy thật, không pha loãng nhiều (mục 18.2). Thiếu các quần thể này thì kết quả âm có thể âm giả.</td></tr><tr class="r"><td>Hematogone (CD19+ CD10+, đường trưởng thành)</td><td class="num">17 200</td><td class="num">0,80%</td><td>Bình thường</td></tr><tr class="x"><td colspan="4">Hematogone tăng sau hóa trị là bình thường. Chúng tạo dải liên tục; không đếm vào MRD (mục 12.3).</td></tr><tr class="r"><td>Cụm bất thường (CD10 sáng, CD38 mờ, CD45 thấp)</td><td class="num">410</td><td class="num">0,019%</td><td>MRD dương, định lượng được</td></tr><tr class="x"><td colspan="4">410 / 2 150 000 ≈ 0,019%, trên LLOQ. CV đếm ≈ 1/√410 ≈ 4,9%. Khoảng gần đúng ±2 CV: 0,017–0,021%. Báo: “MRD dương 0,019% (410 sự kiện / 2 150 000 tế bào có nhân; LOD 0,0009%; LLOQ 0,0023%)”.</td></tr></tbody></table></div><p class="src">Mọi con số trong ca này là mô phỏng để học cách đọc bảng.</p></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Trắc nghiệm nhanh</div><div class="quiz" data-src="q_ch18"></div><script id="q_ch18" type="application/json">[{"q": "Tìm được 30 sự kiện bất thường trên 2 150 000 tế bào. Báo thế nào?", "o": ["MRD âm", "Phát hiện, dưới ngưỡng định lượng (khoảng 0,0014%)", "MRD dương 0,0014%, định lượng được", "Phải chạy lại"], "a": 1, "e": "30 nằm giữa LOD (20) và LLOQ (50)."}, {"q": "Mẫu không có hồng cầu có nhân và tủy bào CD16−. Kết quả MRD âm nên được hiểu thế nào?", "o": ["Chắc chắn âm", "Có thể âm giả do tủy pha loãng máu", "Dương", "Không liên quan"], "a": 1, "e": "Chỉ số chất lượng tủy kém làm giảm độ tin cậy của kết quả âm."}, {"q": "Lần trước 0,019% (410 sự kiện), lần này 0,021% (450 sự kiện). Có tăng không?", "o": ["Có, tăng 10%", "Chưa nói được: chênh lệch nằm trong sai số đếm", "Giảm", "Không so được"], "a": 1, "e": "CV đếm khoảng 5%, khoảng ±2 CV của hai lần chồng lên nhau."}]</script></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["Kết quả 0,019%", 0.019, "r638"], ["LLOQ 0,0023%", 0.0023, "warn"], ["LOD 0,0009%", 0.0009, "ok"]], "unit": "%", "max": 0.022, "lw": 170, "dp": 3}'><figcaption>So sánh kết quả MRD với LOD và LLOQ của lần chạy (ví dụ báo cáo).</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 18.10 Hỏi bác sĩ

<details class="ans"><summary>“MRD âm nghĩa là không còn tế bào ác tính?”</summary><p>Không. Nghĩa là không phát hiện được ở độ nhạy của lần đo đó, với số tế bào đã thu và chất lượng mẫu đó. Báo cáo luôn ghi LOD đạt được. Dùng thuật ngữ “undetectable MRD” (uMRD) là chính xác hơn.</p></details>

<details class="ans"><summary>“Flow MRD 0,05% nhưng NPM1 PCR âm, tin cái nào?”</summary><p>Hai phương pháp đo khác đối tượng: flow đo tế bào mang kiểu hình bất thường (có thể là dòng tiền leukemia hay rối loạn sinh tủy còn lại, không mang NPM1), PCR đo bản sao đột biến. ELN khuyến cáo theo dõi AML NPM1 bằng sinh học phân tử, nhưng kết quả flow dương vẫn có giá trị tiên lượng và nên được bác sĩ cân nhắc cùng xu hướng theo thời gian. Kiểm tra lại cổng MRD so với tế bào tủy tái tạo bình thường.</p></details>

<details class="ans"><summary>“Bệnh nhân dùng daratumumab, NGF có làm được?”</summary><p>Có, với CD38 đa epitope hoặc chiến lược cổng không dựa vào CD38 (chương 14). Ghi rõ thuốc trên phiếu yêu cầu.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>MRD âm có nghĩa là hết tế bào ác tính?</summary><p>Không. Chỉ là không phát hiện ở độ nhạy của lần đo đó, với số tế bào thu và chất lượng mẫu đó. Báo cáo phải ghi LOD.</p></details><details class="ans"><summary>Thu 300 000 tế bào. Có báo được uMRD 10⁻⁵ không?</summary><p>Không. LOD = 20 / 300 000 ≈ 6,7 × 10⁻⁵, chưa đạt 10⁻⁵.</p></details><details class="ans"><summary>Vì sao mẫu tủy lần hút sau làm MRD âm giả?</summary><p>Lẫn máu ngoại vi pha loãng tế bào ác tính; cần lần hút đầu và báo chỉ số chất lượng tủy.</p></details></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["Flow MRD", ["Tế bào kiểu hình bất thường", "Có thể là dòng tiền leukemia"], "b488"], ["PCR NPM1", ["Bản sao đột biến", "ELN ưu tiên cho NPM1"], "warn"]]}'><figcaption>Flow và PCR đo hai đối tượng khác nhau.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch18.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
