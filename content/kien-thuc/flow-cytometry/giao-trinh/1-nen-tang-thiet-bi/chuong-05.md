---
title: "05 · Kaluza C toàn tập"
description: "Cùng một file LMD có thể cho hai kết quả khác nhau khi hai người dựng protocol phân tích khác nhau trên Kaluza C."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "05"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần I · Chương 05</div><div id="ftb-search"></div></div>

<p class="lead">Cùng một file LMD có thể cho hai kết quả khác nhau khi hai người dựng protocol phân tích khác nhau trên Kaluza C. Mục tiêu của chương: dựng được một protocol phân tích hoàn chỉnh cho panel 10 màu, hiểu từng loại biểu đồ và cổng, dùng Composite, Batch, QC Report, công thức và xuất LIS. Cuối chương có quy trình dựng protocol ClearLLab từ đầu. Nội dung biên soạn từ IFU Kaluza C (PN C10993AH, 04/2025) và addendum RUO (C29335AA).</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">24 mục mới · 77 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><input aria-label="Lọc thuật ngữ của chương" class="search" data-target="gtab-ch05" placeholder="Lọc trong bảng này…" type="search"/><div class="tbl-wrap" id="gtab-ch05"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-ruo"><td>RUO</td><td><span class="full">Research Use Only, chỉ dùng nghiên cứu.</span> Sản phẩm hoặc chức năng không được phép dùng để ra kết quả chẩn đoán cho bệnh nhân.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-analysis-list"><td>Analysis List</td><td><span class="full">danh sách phân tích.</span> Danh sách file đang mở trong Kaluza, cho chọn nhiều file, thay protocol, gộp data set.</td><td class="at"><a href="#tongquan" title="Mục đích sử dụng, file và giới hạn">5.1</a></td></tr><tr id="g-merge"><td>Merge</td><td><span class="full">gộp data set.</span> Ghép các file cùng cấu hình thành một data set lớn, dùng khi thu MRD nhiều ống.</td><td class="at"><a href="#tongquan" title="Mục đích sử dụng, file và giới hạn">5.1</a></td></tr><tr id="g-color-precedence"><td>Color Precedence</td><td><span class="full">thứ tự ưu tiên màu.</span> Quy định quần thể nào được tô màu khi một sự kiện nằm trong nhiều cổng.</td><td class="at"><a href="#khonggian" title="Không gian làm việc">5.2</a></td></tr><tr id="g-tham-so-tuy-chinh"><td>Tham số tùy chỉnh</td><td><span class="full">custom parameter.</span> Tham số mới tính từ các tham số có sẵn bằng công thức, ví dụ tỷ lệ hai kênh.</td><td class="at"><a href="#thamso" title="Tham số và thang đo">5.4</a></td></tr><tr id="g-radar-plot"><td>Radar plot</td><td><span class="full">biểu đồ radar.</span> Biểu đồ chiếu dữ liệu nhiều chiều lên mặt phẳng: mỗi marker là một trục từ tâm, vị trí tế bào là tổng lực kéo của các trục.</td><td class="at"><a href="#bieudo" title="Các loại biểu đồ và bảng">5.5</a></td></tr><tr id="g-npm1"><td>NPM1</td><td><span class="full">nucleophosmin 1.</span> Đột biến hay gặp trong AML (~30%); thường CD34−, HLA-DR− hoặc thành phần mono; tiên lượng tốt nếu không kèm FLT3-ITD.</td><td class="at"><a href="#bieudo" title="Các loại biểu đồ và bảng">5.5</a></td></tr><tr id="g-tbnk"><td>TBNK</td><td><span class="full">T, B và NK.</span> Xét nghiệm đếm ba quần thể lympho chính (T, B, NK) và phân nhóm CD4, CD8, kèm số tuyệt đối.</td><td class="at"><a href="#bieudo" title="Các loại biểu đồ và bảng">5.5</a></td></tr><tr id="g-quadrant"><td>Quadrant</td><td><span class="full">cổng góc tư.</span> Cổng chia biểu đồ hai chiều thành bốn ô (++, +−, −+, −−).</td><td class="at"><a href="#cong" title="Cổng (gates)">5.6</a></td></tr><tr id="g-hat-dem"><td>Hạt đếm</td><td><span class="full">counting beads.</span> Hạt có nồng độ biết trước, cho vào ống để tính số tế bào tuyệt đối/µL trên một máy (single platform). Ví dụ Flow-Count.</td><td class="at"><a href="#cong" title="Cổng (gates)">5.6</a></td></tr><tr id="g-toan-tu-boolean"><td>Toán tử Boolean</td><td><span class="full">Boolean gate: AND, OR, NOT.</span> Kết hợp cổng bằng phép logic: AND (giao), OR (hợp), NOT (loại trừ). Ví dụ cổng MRD = các bất thường AND NOT quần thể bình thường.</td><td class="at"><a href="#cong" title="Cổng (gates)">5.6</a></td></tr><tr id="g-count-median-cv"><td>COUNT, MEDIAN, CV…</td><td><span class="full">hàm thống kê trong công thức Kaluza.</span> Các hàm trả về số sự kiện (COUNT), trung vị (MEDIAN), trung bình (ARITHMETICMEAN), CV của một cổng trên một kênh.</td><td class="at"><a href="#thongke" title="Thống kê và đếm tuyệt đối">5.7</a></td></tr><tr id="g-keyvalue"><td>KEYVALUE</td><td><span class="full">hàm đọc từ khóa FCS trong Kaluza.</span> Hàm công thức trả về giá trị của một từ khóa trong header file, ví dụ KEYVALUE("@ABSCALFACTOR").</td><td class="at"><a href="#thongke" title="Thống kê và đếm tuyệt đối">5.7</a></td></tr><tr id="g-single-dual-platform"><td>Single / dual platform</td><td><span class="full">đếm tuyệt đối trên một máy / hai máy.</span> Single platform (SPT): tính số tuyệt đối ngay trên máy flow bằng hạt đếm. Dual platform: lấy % từ flow nhân với số tuyệt đối từ máy huyết học.</td><td class="at"><a href="#thongke" title="Thống kê và đếm tuyệt đối">5.7</a></td></tr><tr id="g-all-b-all-t-all"><td>ALL / B-ALL / T-ALL</td><td><span class="full">Acute Lymphoblastic Leukemia dòng B / dòng T.</span> Leukemia cấp do nguyên bào lympho (lymphoblast) dòng B hoặc T. Thể khối u ở hạch/trung thất gọi là lymphoma nguyên bào lympho (LBL).</td><td class="at"><a href="#radar" title="Radar plot">5.8</a></td></tr><tr id="g-hematogone"><td>Hematogone</td><td><span class="full">tiền thân B bình thường.</span> Tế bào tiền B bình thường trong tủy, nhiều ở trẻ em và giai đoạn hồi phục; đi theo đường trưởng thành liên tục, cần phân biệt với blast B-ALL.</td><td class="at"><a href="#radar" title="Radar plot">5.8</a></td></tr><tr id="g-report-sheet"><td>Report sheet</td><td><span class="full">trang báo cáo.</span> Trang dàn biểu đồ, bảng và chữ của Kaluza để in hoặc xuất PDF.</td><td class="at"><a href="#baocao" title="Sheet và báo cáo">5.10</a></td></tr><tr id="g-astm-hl7"><td>ASTM / HL7</td><td><span class="full">chuẩn giao tiếp máy với LIS.</span> Hai chuẩn trao đổi dữ liệu xét nghiệm: ASTM (cổng nối tiếp hoặc TCP/IP) và HL7.</td><td class="at"><a href="#lis" title="Xuất sang LIS">5.14</a></td></tr><tr id="g-aquios-cl-dxflex-cellmek-sps"><td>AQUIOS CL / DxFLEX / CellMek SPS</td><td><span class="full">các máy khác của Beckman Coulter.</span> AQUIOS CL: máy flow tự động load-and-go cho TBNK; DxFLEX: máy flow nhiều màu thế hệ mới; CellMek SPS: máy chuẩn bị mẫu tự động.</td><td class="at"><a href="#lis" title="Xuất sang LIS">5.14</a></td></tr><tr id="g-pi"><td>PI</td><td><span class="full">propidium iodide.</span> Chất nhuộm DNA, chỉ vào được tế bào có màng hỏng hoặc đã làm thấm; dùng đánh giá sống/chết hoặc chu kỳ tế bào.</td><td class="at"><a href="#ruo" title="Tính năng RUO: chu kỳ tế bào">5.15</a></td></tr><tr id="g-pdc"><td>pDC</td><td><span class="full">plasmacytoid dendritic cell, tế bào tua dạng tương bào.</span> Tế bào tua sản xuất interferon, kiểu hình CD123 sáng, HLA-DR+, CD4+, CD303+. Là tế bào gốc của BPDCN.</td><td class="at"><a href="#dung" title="Thực hành: dựng protocol ClearLLab từ đầu">5.16</a></td></tr><tr id="g-basophil"><td>Basophil</td><td><span class="full">bạch cầu ưa base.</span> Bạch cầu hạt CD123+, HLA-DR−, CD45 mờ, SS thấp; dễ lẫn vào cổng lympho hoặc blast.</td><td class="at"><a href="#dung" title="Thực hành: dựng protocol ClearLLab từ đầu">5.16</a></td></tr><tr id="g-lech-dong"><td>Lệch dòng</td><td><span class="full">aberrant / cross-lineage expression.</span> Kháng nguyên của dòng khác xuất hiện trên tế bào, ví dụ CD7 trên blast tủy, CD13 trên blast B. Là một kiểu LAIP.</td><td class="at"><a href="#dung" title="Thực hành: dựng protocol ClearLLab từ đầu">5.16</a></td></tr><tr id="g-casebook-clearllab"><td>Casebook ClearLLab</td><td><span class="full">tài liệu ca bệnh của Beckman Coulter.</span> Bộ ca có hình ảnh phân tích panel ClearLLab 10C do Beckman Coulter phát hành, được trích nhiều trong giáo trình.</td><td class="at"><a href="#dung" title="Thực hành: dựng protocol ClearLLab từ đầu">5.16</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="gated" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-gated" title="phần trăm trong cổng cha: Số sự kiện trong cổng chia cho số sự kiện của cổng cha trực tiếp. Phải ghi rõ mẫu số khi báo.">% Gated</a><a data-g="aml" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-aml" title="Acute Myeloid Leukemia, leukemia cấp dòng tủy: Ung thư máu do blast dòng tủy tăng sinh trong tủy và máu.">AML</a><a data-g="apc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apc" title="allophycocyanin: Protein huỳnh quang kích thích bằng laser 638 nm, phát đỏ (~660 nm), đo ở FL6. Rất sáng.">APC</a><a data-g="apl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apl" title="Acute Promyelocytic Leukemia, leukemia cấp tiền tủy bào: Thể AML mang PML::RARA; kiểu hình CD34−, HLA-DR−, SS cao; cấp cứu vì nguy cơ chảy máu (DIC), điều trị bằng ATRA.">APL</a><a data-g="bd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bd" title="Becton, Dickinson and Company: Hãng sản xuất máy và thuốc thử flow (ví dụ hạt Quantibrite PE).">BD</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="bu-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bu-mau" title="compensation: Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.">Bù màu</a><a data-g="cal-factor" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-cal-factor" title="hệ số hạt đếm: Nồng độ hạt đếm theo lô (hạt/µL), nhập vào worklist hoặc protocol để máy tính số tuyệt đối. Trong file lưu ở từ khóa @ABSCALFACTOR.">CAL factor</a><a data-g="cd45dim" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cd45dim" title="CD45 mờ: Vùng tế bào có CD45 yếu hơn lympho trên biểu đồ CD45 × SS, nơi blast thường nằm.">CD45dim</a><a data-g="cell-cycle" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cell-cycle" title="chu kỳ tế bào: Phân tích hàm lượng DNA để chia tế bào thành pha G0/G1, S, G2/M.">Cell cycle</a><a data-g="chat-nhuom-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-huynh-quang" title="fluorochrome: Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.">Chất nhuộm huỳnh quang</a><a data-g="chuoi-nhe-kappa-lambda" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chuoi-nhe-kappa-lambda" title="κ / λ light chain: Mỗi tế bào B chỉ dùng một loại chuỗi nhẹ. Quần thể B bình thường có cả hai (đa dòng, κ:λ ≈ 1–2); chỉ một loại là đơn dòng.">Chuỗi nhẹ kappa / lambda</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="co-dinh-lam-tham" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-co-dinh-lam-tham" title="fixation / permeabilization: Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.">Cố định / làm thấm</a><a data-g="composite" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-composite" title="Composite Protocol: Chức năng ghép nhiều data set (tối đa 32 ống) vào một protocol để phân tích panel nhiều ống trên một màn hình.">Composite</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="cv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cv" title="coefficient of variation, hệ số biến thiên: SD chia cho trung bình, nhân 100%. Cho biết độ phân tán tương đối; dùng cho độ chụm và độ rộng đỉnh.">CV</a><a data-g="cytosettings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cytosettings" title="cài đặt máy: Tập điện áp, gain, discriminator và ma trận bù lưu kèm protocol.">Cytosettings</a><a data-g="dapi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dapi" title="4′,6-diamidino-2-phenylindole: Chất nhuộm DNA kích thích bằng tia cực tím/tím; dùng trong phân tích chu kỳ tế bào hoặc đánh giá tế bào chết.">DAPI</a><a data-g="data-set" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-04#g-data-set" title="bộ dữ liệu: Một file LMD/FCS (hoặc nhiều file gộp) đang phân tích trong Kaluza.">Data set</a><a data-g="dau-do" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dau-do" title="detector: Bộ phận biến ánh sáng thành tín hiệu điện (photodiode hoặc PMT). Mỗi đầu dò huỳnh quang trên Navios được đặt tên FL1 đến FL10.">Đầu dò</a><a data-g="di-instrument-manager" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-di-instrument-manager" title="middleware của Data Innovations: Phần mềm trung gian kết nối máy với LIS: nhận yêu cầu, tạo External Worklist, nhận kết quả, ảnh, PDF.">DI - Instrument Manager</a><a data-g="diem-ogata" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-diem-ogata" title="Ogata score: Thang 4 tham số flow hỗ trợ chẩn đoán MDS nguy cơ thấp: % CD34+ dòng tủy, % tiền B trong CD34+, tỷ số CD45 lympho/blast, tỷ số SS hạt/lympho. ≥ 2 điểm gợi ý MDS.">Điểm Ogata</a><a data-g="dna" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dna" title="deoxyribonucleic acid: Vật chất di truyền trong nhân; nhuộm DNA định lượng dùng cho chu kỳ tế bào và đánh giá sống/chết.">DNA</a><a data-g="do-nhay-mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-do-nhay-mrd" title="sensitivity: Tỷ lệ thấp nhất phát hiện được: LOD = số sự kiện cụm tối thiểu ÷ tổng tế bào đánh giá. Ví dụ 20 ÷ 2 000 000 = 10⁻⁵.">Độ nhạy (MRD)</a><a data-g="dot-plot" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dot-plot" title="biểu đồ chấm: Biểu đồ hai chiều, mỗi chấm là một sự kiện.">Dot plot</a><a data-g="doublet" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doublet" title="tế bào đôi: Hai tế bào (hoặc hai hạt) đi qua laser cùng lúc nên bị ghi thành một sự kiện; loại bằng cổng INT × PEAK hoặc INT × TOF.">Doublet</a><a data-g="duong-truong-thanh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-duong-truong-thanh" title="maturation pattern: Sự thay đổi kháng nguyên có trật tự khi tế bào trưởng thành, vẽ thành đường cong lặp lại được trên biểu đồ. Lệch khỏi đường này là dấu hiệu bất thường.">Đường trưởng thành</a><a data-g="ewl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-ewl" title="External Worklist, worklist ngoài: Worklist do LIS/middleware tạo và gửi xuống máy, thay vì nhập tay.">EWL</a><a data-g="fcs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fcs" title="Flow Cytometry Standard: Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.">FCS</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="flow-check-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-check-pro" title="hạt kiểm tra căn chỉnh của Beckman Coulter: Hạt huỳnh quang đồng nhất dùng QC hằng ngày: đo HPCV để đánh giá căn chỉnh quang học và dòng chảy.">Flow-Check Pro</a><a data-g="flow-count" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-flow-count" title="hạt đếm tuyệt đối của Beckman Coulter: Hạt huỳnh quang có nồng độ ghi theo lô (hạt/µL), thêm vào ống để tính số tế bào/µL. Chữ FC trong tên protocol là Flow-Count.">Flow-Count</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="header" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-header" title="phần đầu file: Phần đầu file LMD/FCS chứa từ khóa (keyword): tên mẫu, ngày, cài đặt máy, ma trận bù, hệ số hạt đếm.">Header</a><a data-g="histogram" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-histogram" title="biểu đồ một tham số: Biểu đồ đếm số sự kiện theo cường độ của một kênh.">Histogram</a><a data-g="hla-dr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hla-dr" title="kháng nguyên bạch cầu người lớp II: Có trên tế bào B, mono, tiền thân CD34+, pDC; âm trên bạch cầu hạt trưởng thành, đa số T nghỉ và APL.">HLA-DR</a><a data-g="hpcv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hpcv" title="half-peak CV: CV tính từ độ rộng của đỉnh tại nửa chiều cao (FWHM ÷ 2,354 chia cho vị trí đỉnh). Không bị đuôi ảnh hưởng; dùng cho QC hạt Flow-Check Pro.">HPCV</a><a data-g="ifu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ifu" title="Instructions for Use, hướng dẫn sử dụng: Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.">IFU</a><a data-g="int" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-int" title="integral, diện tích xung: Tổng tín hiệu dưới xung; tỷ lệ với tổng lượng ánh sáng phát ra. Là tham số mặc định để đo cường độ.">INT</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="kenh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kenh" title="channel (hai nghĩa): Có hai nghĩa: (1) kênh đầu dò, tức một đầu dò như FL2; (2) kênh trên trục, tức vị trí số trên thang hiển thị (ví dụ kênh 512 trên thang 1 024 kênh). Xem mục 1.9.">Kênh</a><a data-g="kieu-hinh-mien-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kieu-hinh-mien-dich" title="immunophenotype: Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.">Kiểu hình miễn dịch</a><a data-g="levey-jennings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-levey-jennings" title="biểu đồ Levey-Jennings: Biểu đồ kết quả QC theo ngày với đường trung bình và các giới hạn ±1, 2, 3 SD; giúp thấy xu hướng trôi.">Levey-Jennings</a><a data-g="lis" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-lis" title="Laboratory Information System, hệ thống thông tin xét nghiệm: Phần mềm quản lý yêu cầu và kết quả xét nghiệm của bệnh viện; nhận kết quả từ Kaluza hoặc qua middleware.">LIS</a><a data-g="lmd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lmd" title="List Mode Data: Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.">LMD</a><a data-g="lod" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lod" title="Limit of Detection, giới hạn phát hiện: Mức thấp nhất mà xét nghiệm phát hiện được một cách tin cậy. Trong flow sự kiện hiếm thường quy ước là cụm ≥ 20 sự kiện.">LOD</a><a data-g="logicle" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-logicle" title="biexponential, thang hai hàm mũ: Thang lai: gần 0 gần như tuyến tính (hiển thị được giá trị âm sau bù), ở giá trị cao giống log. Thang mặc định nên dùng cho dữ liệu đã bù.">Logicle</a><a data-g="ma-tai-lieu-beckman" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-ma-tai-lieu-beckman" title="B73085AF, C10993AH, C29335AA, B86351AA, A45429AG: Mã IFU dùng trong giáo trình: B73085AF (Navios EX), C10993AH (Kaluza C), C29335AA (addendum RUO Kaluza C), B86351AA (addendum Lymphocyte Subset Application), A45429AG (DI - Instrument Manager).">Mã tài liệu Beckman</a><a data-g="ma-tran-spillover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-04#g-ma-tran-spillover" title="spillover matrix, S: Bảng các hệ số spillover giữa mọi cặp chất nhuộm và đầu dò. Trong Kaluza, ô “FL2 − %FL1” là phần trăm tín hiệu của chất nhuộm FL1 rơi vào đầu dò FL2.">Ma trận spillover</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mau-so" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mau-so" title="denominator: Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.">Mẫu số</a><a data-g="mean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mean" title="trung bình số học: Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.">Mean</a><a data-g="mfi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mfi" title="Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị: Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.">MFI</a><a data-g="mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mrd" title="Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được: Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.">MRD</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="overlay" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-overlay" title="chồng hình: Vẽ nhiều quần thể hoặc nhiều file lên cùng một biểu đồ để so sánh.">Overlay</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="peak" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-peak" title="chiều cao xung: Giá trị lớn nhất của xung. So INT với PEAK giúp nhận ra hai tế bào dính nhau.">PEAK</a><a data-g="pn" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-pn" title="Part Number, mã sản phẩm: Mã đặt hàng của Beckman Coulter cho máy, thuốc thử hoặc linh kiện.">PN</a><a data-g="pnh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pnh" title="Paroxysmal Nocturnal Hemoglobinuria, tiểu huyết sắc tố kịch phát ban đêm: Bệnh tế bào gốc mắc phải do đột biến PIGA làm mất neo GPI; hồng cầu thiếu CD55, CD59 nên bị bổ thể phá hủy.">PNH</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="qc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-qc" title="Quality Control, kiểm soát chất lượng: Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).">QC</a><a data-g="spillover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-spillover" title="phần tín hiệu lọt sang kênh khác: Tỷ lệ ánh sáng của một chất nhuộm rơi vào đầu dò dành cho chất nhuộm khác, vì phổ phát xạ rộng hơn cửa sổ kính lọc. Ghi bằng phần trăm.">Spillover</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="su-kien-hiem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien-hiem" title="rare event: Quần thể chiếm tỷ lệ rất nhỏ (ví dụ &lt; 0,1%), như MRD, PNH nhỏ; độ tin cậy phụ thuộc số sự kiện đếm được.">Sự kiện hiếm</a><a data-g="tham-dinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tham-dinh" title="validation: Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).">Thẩm định</a><a data-g="thang-log" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-log" title="logarithmic scale: Trục trong đó mỗi khoảng bằng nhau ứng với giá trị nhân thêm 10 lần (decade). Tách tốt quần thể mờ và sáng nhưng không vẽ được giá trị ≤ 0.">Thang log</a><a data-g="thang-tuyen-tinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-tuyen-tinh" title="linear scale: Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.">Thang tuyến tính</a><a data-g="time" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-time" title="tham số thời gian: Tham số ghi thời điểm mỗi sự kiện được thu. Vẽ TIME × một kênh để phát hiện dòng chảy không ổn định (bọt khí, tắc) và loại đoạn xấu.">TIME</a><a data-g="trung-vi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-trung-vi" title="median: Giá trị nằm giữa khi xếp các tế bào theo cường độ: một nửa cao hơn, một nửa thấp hơn. Không bị đuôi và giá trị âm sau bù kéo lệch, nên dùng để đánh giá bù và báo MFI.">Trung vị</a><a data-g="tuong-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tuong-bao" title="plasma cell: Tế bào B biệt hóa cuối cùng tiết kháng thể; CD38 rất sáng, CD138+, chuỗi nhẹ nội bào.">Tương bào</a><a data-g="vector-tu-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-04#g-vector-tu-huynh-quang" title="autofluorescence vector, AF: Mức tự huỳnh quang của từng đầu dò (đo trên ống không nhuộm), được trừ trước khi bù và cộng lại sau bù để giữ đúng mức nền.">Vector tự huỳnh quang</a><a data-g="worklist" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-worklist" title="danh sách công việc: Danh sách mẫu cần chạy: mỗi dòng gắn panel, vị trí ống, Sample ID, điều kiện dừng, CAL factor.">Worklist</a></div></div></details>

<div id="tongquan" class="ftb-anchor"></div>

## 5.1 Mục đích sử dụng, file và giới hạn

Kaluza C là phần mềm độc lập làm việc với file `*.fcs` và `*.lmd` do máy flow tạo ra: hiển thị dữ liệu bằng đồ thị, tính thống kê mô tả và nhiều phép toán thống kê theo nhu cầu người dùng. Đối tượng là nhân viên phòng xét nghiệm lâm sàng. Chữ “C” chỉ phiên bản dùng lâm sàng; các tính năng chỉ dùng nghiên cứu (biểu đồ chu kỳ tế bào, tùy chọn cho file Astrios) nằm trong addendum RUO.

<div class="tbl-wrap"><table>
<thead><tr><th>Loại file</th><th>Đuôi</th><th>Chứa</th><th>Không chứa</th></tr></thead>
<tbody>
<tr><td>Analysis</td><td><code>*.analysis</code></td><td>Data set, biểu đồ, bảng, cổng và màu cổng, định nghĩa tham số, ma trận bù và vector AF, chú thích, mọi sheet</td><td>—</td></tr>
<tr><td>Analysis List</td><td><code>*.analysis</code></td><td>Mọi dòng trong Analysis List lưu thành một gói</td><td>—</td></tr>
<tr><td>Protocol</td><td><code>*.protocol</code></td><td>Biểu đồ, bảng, cổng, màu, chú thích, sheet, ma trận bù</td><td>Data set</td></tr>
<tr><td>LIS Protocol</td><td><code>*.lisprotocol</code></td><td>Như protocol cộng lựa chọn xuất LIS, tùy chọn LIS, biểu đồ xem trước LIS</td><td>Data set</td></tr>
<tr><td>Compensation</td><td><code>*.compensation</code>, <code>*.txt</code></td><td>Ma trận spillover, vector AF</td><td>—</td></tr>
<tr><td>QC Report</td><td><code>*.qcr</code> (protocol <code>*.qcp</code>)</td><td>QC protocol và data set QC</td><td>—</td></tr>
</tbody>
</table></div>

<div class="tbl-wrap"><table>
<thead><tr><th>Giới hạn</th><th>Giá trị</th></tr></thead>
<tbody>
<tr><td>Analysis List</td><td>400 dòng</td></tr>
<tr><td>Data set mỗi Composite</td><td>32</td></tr>
<tr><td>Batch Processing</td><td>2 000 data set</td></tr>
<tr><td>Gộp data set (merge)</td><td>48 data set hoặc 20 triệu sự kiện</td></tr>
<tr><td>Tham số</td><td>64 tổng; nhiều hơn thì phần dư bị vô hiệu</td></tr>
<tr><td>Cổng mỗi phép logic</td><td>16</td></tr>
<tr><td>Cổng có màu</td><td>31 (cổng All tính là một cổng)</td></tr>
<tr><td>Đỉnh mỗi cổng polygon</td><td>128</td></tr>
<tr><td>Biểu đồ mỗi sheet / sheet mỗi analysis</td><td>256 / 1 024</td></tr>
<tr><td>Histogram mỗi overlay; chuỗi mỗi comparison plot</td><td>12; 12</td></tr>
<tr><td>Tree plot</td><td>Tổng 8 nhánh và cột</td></tr>
</tbody>
</table></div>

<div class="callout warn"><b class="t">Add All Plots</b>Không hoạt động khi bật mọi tùy chọn cho data set có hơn 18 tham số huỳnh quang, vì dễ vượt giới hạn cổng/biểu đồ. Với 10 màu thì dùng được.</div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Kaluza C và Kaluza (RUO)</div>
<p>Kaluza C là bản dùng cho chẩn đoán lâm sàng, với tính năng và giới hạn đã được thẩm định. Kaluza bản nghiên cứu (RUO) có thêm một số tính năng như phân tích chu kỳ tế bào. Kết quả trả bệnh nhân nên làm trên Kaluza C; tính năng RUO chỉ dùng cho nghiên cứu.</p></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["Analysis List (dòng)", 400, "accent"], ["Batch (data set)", 2000, "b488"], ["Merge (data set)", 48, "v405"], ["Composite (data set)", 32, "warn"], ["Cổng có màu", 31, "r638"], ["Cổng mỗi biểu thức", 16, "ok"]], "max": 2100, "lw": 200}'><figcaption>Một số giới hạn của Kaluza C theo IFU (thang tuyến tính).</figcaption></figure>

<div id="khonggian" class="ftb-anchor"></div>

## 5.2 Không gian làm việc

<div class="tbl-wrap"><table>
<thead><tr><th>Thành phần</th><th>Chức năng</th></tr></thead>
<tbody>
<tr><td>Application Menu</td><td>Mở/lưu, New (Analysis, Composite, Compensation), Kaluza Options (mặc định thang, số thập phân của ma trận, độ nhạy Auto Gate, định danh data set)</td></tr>
<tr><td>Quick-Access Toolbar</td><td>Lệnh hay dùng: lưu, undo, redo</td></tr>
<tr><td>Analysis List</td><td>Danh sách file đang làm việc; mỗi dòng ghép data set với protocol</td></tr>
<tr><td>Attributes pane</td><td>4 pane con: Parameters, Compensation, Color Precedence, Protocol Options (đếm tuyệt đối). Ẩn/hiện/đổi kích thước được</td></tr>
<tr><td>Ribbon</td><td>Thẻ Plots &amp; Tables, Gates &amp; Tools, Edit, Page Layout</td></tr>
<tr><td>Sheet</td><td>Vùng làm việc chứa biểu đồ, bảng, hình, chữ; nhiều sheet trong một analysis</td></tr>
<tr><td>View Options Toolbar</td><td>Góc dưới phải: chuyển sheet, zoom</td></tr>
<tr><td>Radial menu</td><td>Nhấp chuột phải trên biểu đồ hay cổng: Data, Display, Statistics, Gates &amp; Tools</td></tr>
</tbody>
</table></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Analysis, Composite, Compensation là ba loại tài liệu</div>
<p>Giống Word, Excel, PowerPoint trong cùng một bộ Office: <b>Analysis</b> là phân tích một hay nhiều file theo một protocol; <b>Composite</b> ghép nhiều ống của cùng một mẫu vào một màn hình; <b>Compensation</b> là nơi tạo và sửa ma trận bù. Biết đang mở loại nào giúp tìm đúng menu.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "workspace"}'><figcaption>Bố cục không gian làm việc Kaluza C (sơ đồ minh họa, không phải ảnh chụp).</figcaption></figure>

<div id="analysislist" class="ftb-anchor"></div>

## 5.3 Analysis List và protocol

<ul class="tight">
<li><b>Nhập file</b>: kéo thả file vào Analysis List hoặc dùng Import. Màn hình Analysis Options hiện ra để chọn protocol áp dụng.</li>
<li><b>Chọn nhiều</b>: Shift cho dòng liền nhau, Ctrl cho dòng rời.</li>
<li><b>Thay data set hoặc protocol</b> của một dòng: kéo file mới đè vào ô tương ứng.</li>
<li><b>Gộp data set (merge)</b>: nối nhiều file của cùng một ống thành một (ví dụ MRD chia nhiều ống cùng tổ hợp). Tối đa 48 file hoặc 20 triệu sự kiện.</li>
<li><b>Áp protocol cho data set</b>: nếu tên tham số không khớp, cửa sổ <i>Resolving Parameter Mismatch</i> cho ghép tay từng tham số. Đặt tên tham số thống nhất ngay từ protocol Navios giúp tránh bước này.</li>
<li><b>Lưu</b>: Save Protocol (không data), Save Analysis (kèm data), Save Analysis List (gói tất cả).</li>
</ul>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Áp một protocol chuẩn cho 20 mẫu trong 2 phút</div>
<ol><li>Kéo 20 file vào Analysis List.</li><li>Ở Analysis Options chọn protocol chuẩn của phòng.</li><li>Duyệt từng mẫu: chỉ chỉnh cổng nào thật sự lệch, ghi chú lý do.</li><li>Lưu analysis để có thể mở lại đúng trạng thái đã duyệt.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Nạp file", "kéo thả LMD/FCS", "accent"], ["Analysis Options", "chọn protocol", "b488"], ["Parameter Mismatch", "ghép tên tham số", "warn"], ["Lưu", "protocol / analysis / list", "v405"]], "per": 4}'><figcaption>Vòng đời một dòng trong Analysis List.</figcaption></figure>

<div id="thamso" class="ftb-anchor"></div>

## 5.4 Tham số và thang đo

Parameters pane cho sửa tên, mô tả (thường là tên marker), loại đo (Type: Fluorescence, Scatter, Time…), tên đầu dò, ưu tiên tín hiệu (Area/Height/Width), thông tin nạp vào analysis, và tạo **tham số tùy chỉnh** (custom parameter) bằng công thức. Có thể sao chép tham số sang data set khác.

Ba thang: **Log**, **Linear**, **Logicle**. Đặt mặc định trong Kaluza Options hoặc đổi trên từng biểu đồ. *Parameter Display Range* quy định khoảng hiển thị. Với dữ liệu đã bù, dùng logicle cho mọi kênh huỳnh quang.

<div class="callout bad"><b class="t">Type = Unknown</b>Nếu một kênh huỳnh quang bị gán Type là Unknown, nó sẽ không xuất hiện trong ma trận bù. Đây là lỗi hay gặp khi mở file FCS từ máy khác.</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tham số tùy chỉnh bằng công thức</div>
<p>Muốn một trục là tỷ số CD38 trên CD45 để tách tương bào: tạo custom parameter với công thức FL7 / FL10. Hay muốn đổi tên “FL6 INT” thành “CD34 APC” để người đọc báo cáo khỏi phải tra bảng kênh: sửa mô tả trong Parameters pane. Tên rõ ràng giảm lỗi đọc nhầm kênh.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["Log", ["Không hiện giá trị ≤0", "Dùng cho dữ liệu chưa bù"], "muted"], ["Linear", ["FS, SS, TOF, DNA", "Kênh cách đều"], "b488"], ["Logicle", ["Tuyến tính gần 0, log ở cao", "Đúng cho mọi kênh đã bù"], "accent"]]}'><figcaption>Ba thang trong Kaluza C.</figcaption></figure>

<div id="bieudo" class="ftb-anchor"></div>

## 5.5 Các loại biểu đồ và bảng

<div class="tbl-wrap"><table>
<thead><tr><th>Loại</th><th>Dùng để</th><th>Mẹo</th></tr></thead>
<tbody>
<tr><td>Histogram</td><td>Phân bố một tham số; cổng tuyến tính (linear/divider)</td><td>Overlay tối đa 12 histogram để so ống hoặc so ngày</td></tr>
<tr><td>Dot plot</td><td>Hai tham số, mỗi sự kiện một chấm, tô màu theo color precedence</td><td>Cơ bản nhất cho gating</td></tr>
<tr><td>Density plot</td><td>Hai tham số, màu theo mật độ</td><td>Thấy quần thể nhỏ bị che trong đám đông</td></tr>
<tr><td>Contour plot</td><td>Đường đồng mức mật độ</td><td>Trình bày, so hình dạng</td></tr>
<tr><td>Overlay plot</td><td>Chồng nhiều histogram/quần thể</td><td>So cường độ giữa bệnh nhân và chứng</td></tr>
<tr><td>Comparison plot</td><td>So thống kê giữa tối đa 12 chuỗi</td><td>Theo dõi một bệnh nhân qua thời gian</td></tr>
<tr><td>Radar plot</td><td>Chiếu nhiều tham số lên mặt phẳng; xoay, kéo dài trục, hoạt hình trục</td><td>Tách MRD, so APL và AML NPM1, phân nhóm B trưởng thành</td></tr>
<tr><td>Tree plot</td><td>Cây phân cấp quần thể</td><td>Báo cáo tỷ lệ phân nhóm (TBNK)</td></tr>
<tr><td>Add All Plots</td><td>Tự tạo mọi cặp tham số theo tùy chọn</td><td>Quét nhanh một ống chưa quen</td></tr>
<tr><td>Gate Statistics Table</td><td>Bảng thống kê các cổng</td><td>Xuất báo cáo, LIS</td></tr>
<tr><td>Information table/sheet</td><td>Khóa FCS, công thức, chữ ghép</td><td>Đưa thông tin bệnh nhân, lô thuốc thử vào báo cáo</td></tr>
<tr><td>CytoSettings Table</td><td>Cài đặt máy lúc thu</td><td>Truy xuất nguồn gốc</td></tr>
</tbody>
</table></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Dot plot và density plot</div>
<p>Dot plot vẽ mỗi sự kiện một chấm, tô màu theo cổng: tốt để thấy quần thể nhỏ và màu theo dòng. Density plot tô màu theo mật độ: tốt để thấy tâm và hình dạng quần thể lớn, nhưng quần thể hiếm gần như biến mất. Với MRD và PNH, xem cả hai: density để thấy cấu trúc nền, dot để thấy cụm hiếm.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Histogram", "1 tham số", "b488"], ["Dot plot", "2 tham số", "accent"], ["Density", "màu theo mật độ", "v405"], ["Contour", "đồng mức", "warn"], ["Overlay", "≤12 histogram", "ok"], ["Comparison", "≤12 chuỗi", "r638"], ["Radar", "đa chiều", "#d13ab0"], ["Tree", "cây quần thể", "muted"]], "per": 4}'><figcaption>Các loại biểu đồ của Kaluza C.</figcaption></figure>

<div id="cong" class="ftb-anchor"></div>

## 5.6 Cổng (gates)

<div class="tbl-wrap"><table>
<thead><tr><th>Loại cổng</th><th>Mô tả</th><th>Ứng dụng</th></tr></thead>
<tbody>
<tr><td>Linear / Divider</td><td>Khoảng trên histogram; divider chia đôi</td><td>% dương một marker</td></tr>
<tr><td>Quadrant, Staggered, Hinged</td><td>Bốn góc; staggered cho phép các nửa lệch nhau; hinged cho phép đường chia nghiêng</td><td>CD4/CD8; kappa/lambda khi quần thể nghiêng</td></tr>
<tr><td>Polygon</td><td>Đa giác tối đa 128 đỉnh; thêm đỉnh được</td><td>Hầu hết cổng quần thể</td></tr>
<tr><td>Rectangle, Ellipse</td><td>Hình chữ nhật, elip</td><td>Hạt đếm, cổng nhanh</td></tr>
<tr><td>Boolean</td><td>Ghép cổng bằng NOT, AND, OR, ngoặc; tối đa 16 cổng mỗi biểu thức</td><td>“CD19+ AND NOT CD3+”, loại hạt khỏi tế bào</td></tr>
<tr><td>Auto Gate</td><td>Phần mềm tìm quần thể theo vị trí chuột; độ nhạy chỉnh được</td><td>Lympho trên FS/SS; cần rà lại</td></tr>
</tbody>
</table></div>

### Thao tác cổng quan trọng

<ul class="tight">
<li><b>Toán tử Boolean</b>: <code>A AND (NOT B)</code> lấy A trừ phần thuộc B; <code>A AND B</code> lấy phần giao; <code>A OR B</code> lấy hợp; ngoặc để kết hợp toán tử, ví dụ <code>C OR (A AND B)</code>.</li>
<li><b>Auto Gate</b>: giữ Shift để tạo liên tiếp nhiều cổng. Độ nhạy cao gom nhiều sự kiện (có thể lẫn mảnh vụn); độ nhạy thấp làm cổng hẹp, bỏ sót. Đổi mặc định trong Kaluza Options → Defaults.</li>
<li><b>Tọa độ cổng</b>: xem và sửa bằng số, giúp chuẩn hóa giữa các người phân tích.</li>
<li><b>Liên kết cổng (Linking)</b>: cổng ở nhiều biểu đồ hay nhiều data set di chuyển cùng nhau.</li>
<li><b>Cổng và thang trục</b>: đổi thang sau khi vẽ cổng làm cổng biến dạng theo; vẽ cổng sau khi đã chốt thang.</li>
<li><b>Color Precedence</b>: thứ tự ưu tiên tô màu; tối đa 31 cổng có màu; xem danh sách cổng không màu, gán màu, đổi tên, đổi màu, xóa khỏi pane, hiện cổng.</li>
<li><b>Show as rare events</b> (cổng polygon, ellipse, rectangle, Boolean có nguồn đã đặt rare): phóng to chấm và đổi màu để quần thể nhỏ nổi trên mọi biểu đồ. Thanh <i>Event Extend Factor</i> chỉnh độ phóng. Rất hữu ích cho MRD và PNH.</li>
<li><b>Xem logic cổng</b>: rê chuột lên tên cổng ở đầu biểu đồ hoặc trong Color Precedence để thấy biểu thức, ví dụ <code>(A) OR (C)</code>.</li>
</ul>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Cổng là cái rây, hệ thống cổng là chuỗi rây</div>
<p>Mỗi cổng giữ lại những sự kiện nằm trong nó và đưa xuống biểu đồ con. Cổng đầu thô (loại mảnh vụn, doublet), cổng sau mịn dần (CD45, dòng, quần thể đích). Một cổng đầu đặt sai sẽ làm sai mọi con số phía dưới, nên luôn kiểm tra từ trên xuống.</p></div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Khi nào dùng quadrant nghiêng (hinged)</div>
<p>Kappa/lambda trên B bình thường đôi khi nằm nghiêng nhẹ do bù hoặc gắn không đặc hiệu. Quadrant thẳng sẽ cắt chéo qua đám, đếm sai tỷ lệ. Quadrant hinged cho phép đường chia nghiêng theo đám, nhưng phải ghi lại lý do; độ nghiêng lớn là dấu hiệu cần kiểm tra bù, không phải để chỉnh cổng cho khớp.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "boolean"}'><figcaption>Ba toán tử Boolean cơ bản trong Kaluza.</figcaption></figure>

<div id="thongke" class="ftb-anchor"></div>

## 5.7 Thống kê và đếm tuyệt đối

Thêm thống kê qua Radial Menu → Statistics: Number, % Total, % Gated, % Grandparent Gated, Mean (số học, hình học), Median, Mode, CV, HPCV, Min, Max, và Cells/µL nếu đã cấu hình đếm tuyệt đối.

**Đếm tuyệt đối** cấu hình trong Protocol Options pane, hai cách:

- **Use Calibration Beads**: chọn cổng hạt (Beads Gate); nhập Cal Factor từ khóa FCS (nếu có, bấm liên kết để điền) hoặc gõ tay. Công thức tham khảo trong IFU:

<div class="kyhieu mini"><div class="kh-t">Ký hiệu trong công thức Kaluza</div><ul>
<li><b>=</b> ở đầu: báo cho Kaluza đây là công thức, giống Excel.</li>
<li><b>COUNT("tên cổng")</b>: số sự kiện trong cổng có tên ghi trong ngoặc kép. <code>"target gate"</code> là cổng tế bào cần đếm (ví dụ CD3+CD4+); <code>"CAL"</code> là cổng hạt đếm.</li>
<li><b>KEYVALUE("@ABSCALFACTOR")</b>: đọc từ khóa @ABSCALFACTOR trong header file, tức nồng độ hạt đếm theo lô (hạt/µL, CAL factor) đã nhập lúc chạy mẫu.</li>
<li><b>*</b> là nhân, <b>/</b> là chia.</li>
</ul><p>Đọc thành lời: số tế bào/µL = (số tế bào đích ÷ số hạt) × nồng độ hạt. Đây là công thức single platform ở mục 16.5.</p></div>

<div class="formula">=COUNT("target gate") * KEYVALUE("@ABSCALFACTOR") / COUNT("CAL")</div>

- **Use Volume**: nhập thể tích \$Vol. IFU cảnh báo độ nhớt và mức trộn ảnh hưởng; tốc độ hút không hiệu chuẩn có thể cho kết quả sai. Trên Navios, ưu tiên hạt Flow-Count.

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Đếm tuyệt đối bằng hạt</div>
<p>Ống có 4 950 sự kiện hạt Flow-Count, nồng độ lô 1 010 hạt/µL, và 410 tế bào CD3+CD4+. CD4 tuyệt đối = 410 / 4 950 × 1 010 ≈ 84 tế bào/µL. Sai 5% ở số hạt (pipet hút hạt không chính xác) sẽ làm sai 5% kết quả, nên pipet đảo ngược và trộn kỹ là bắt buộc.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Cổng hạt Flow-Count", "Beads Gate", "accent"], ["Cal Factor", "khóa FCS hoặc nhập tay", "warn"], ["Cells/µL", "COUNT(đích) × CAL / COUNT(hạt)", "ok"]], "per": 3}'><figcaption>Cấu hình đếm tuyệt đối trong Protocol Options pane.</figcaption></figure>

<div id="radar" class="ftb-anchor"></div>

## 5.8 Radar plot

Radar plot ánh xạ dữ liệu nhiều chiều lên mặt phẳng: mỗi tham số là một trục xuất phát từ tâm; vị trí của mỗi sự kiện là tổng vector các trục theo cường độ. Kéo đầu trục để đổi góc (360°) và độ dài; bật hoạt hình để trục tự xoay. Thống kê có Number, % Total, % Gated, % Grandparent Gated; cổng có Polygon, Ellipse, Rectangle. Thiết lập: Plots & Tables → Radar; chọn cổng đầu vào; *Choose plot axes* (hoặc Add All, Remove All, Reset All).

Ứng dụng đã công bố: một nghiên cứu trên *Cytometry B* dùng radar plot để phân biệt APL với AML có đột biến NPM1, hai thể dễ nhầm vì cùng CD34 âm HLA-DR âm. Trong MRD B-ALL, đặt các trục CD10, CD20, CD34, CD38, CD45, CD58, CD81 cho thấy blast tách khỏi đường trưởng thành của hematogone.

<div class="callout"><b class="t">Mẹo dựng radar cho MRD B-ALL</b>Cổng đầu vào là tế bào B (CD19+ hoặc CD22/CD24 thay thế). Đặt trục CD10 và CD34 cùng phía, CD38 và CD45 phía đối diện, CD20 vuông góc. Hematogone tạo thành một dải liên tục; blast tạo đám tách rời. Đánh dấu cổng blast là rare event để thấy ở mọi biểu đồ.</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Radar plot như nhìn một vật nhiều chiều từ một góc</div>
<p>Mỗi trục là một marker; vị trí mỗi tế bào là “tổng lực kéo” của các trục theo cường độ. Tế bào có kiểu hình giống nhau tụ lại một chỗ. Một cụm bất thường lệch hẳn khỏi các quần thể bình thường dù không có marker nào bất thường rõ trên dot plot hai chiều. Xoay trục giống xoay vật trong tay để tìm góc nhìn tách rõ nhất.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "radar"}'><figcaption>Radar plot tách blast MRD khỏi dải hematogone (minh họa).</figcaption></figure>

<div id="composite" class="ftb-anchor"></div>

## 5.9 Composite Protocol

Composite ghép nhiều data set (tối đa 32) vào một protocol, giữ biểu đồ, tham số và cổng của từng ống. Đây là cách phân tích panel nhiều ống như ClearLLab 4 ống trên cùng một màn hình, và so ống B với ống T bằng overlay.

<ol class="steps">
<li><div>Kéo các file của cùng bệnh nhân vào Analysis List.</div></li>
<li><div>Chọn nhiều dòng → trong Analysis Options chọn tạo Composite. Biểu đồ, cổng, thang và sheet được nhập tự động từ các file.</div></li>
<li><div>Đổi thứ tự ống nếu cần; thêm file sau bằng cách thả vào giữa hai dòng (vạch cam).</div></li>
<li><div>Thiết lập cổng: khi tạo cổng mới hay Boolean, chọn data set nguồn qua liên kết <i>New Gate</i>.</div></li>
<li><div>Bù màu: Link compensation cho mọi data set hoặc Copy compensation.</div></li>
<li><div>Có thể bỏ tiêu đề data set trên biểu đồ; lưu Composite Analysis (kèm dữ liệu) hoặc Composite Protocol (dùng lại cho bệnh nhân sau).</div></li>
</ol>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Dùng Composite để đọc 4 ống ClearLLab cùng lúc</div>
<ol><li>Kéo 4 file B, T, M1, M2 của một bệnh nhân vào Analysis List.</li><li>Tạo Composite, gán đúng ống vào đúng vị trí.</li><li>Link compensation để 4 ống dùng chung ma trận.</li><li>So quần thể blast giữa các ống bằng overlay CD45 × SS để chắc chắn đang nhìn cùng một quần thể.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Ống B", "", "b488"], ["Ống T", "", "accent"], ["Ống M1", "", "warn"], ["Ống M2", "", "r638"], ["Composite", "link compensation, overlay", "v405"]], "per": 5, "h": 70}'><figcaption>Composite Protocol ghép 4 ống ClearLLab của một bệnh nhân.</figcaption></figure>

<div id="baocao" class="ftb-anchor"></div>

## 5.10 Sheet và báo cáo

<ul class="tight">
<li>Thêm, đổi tên, sắp xếp, xóa, in sheet; zoom; chèn hình (đổi kích thước), chèn hộp chữ có định dạng.</li>
<li><b>Report sheet</b>: bố cục, Page Setup (Letter hoặc A4 là kích thước đã thẩm định), <b>Master Page</b> (đầu trang chung: logo, tên phòng xét nghiệm), số trang, ngày giờ, <b>chữ ký duyệt</b> (Approval Signature).</li>
<li><b>Compared Report Sheet</b>: đặt hai báo cáo cạnh nhau, ví dụ chẩn đoán và theo dõi.</li>
<li>Font đã thẩm định: Trebuchet MS (mặc định), Arial, Times New Roman; cỡ 9,75 và 11,44. Hình xuất: bmp, jpg, png, tif. Sao chép dán sang Office được thẩm định.</li>
</ul>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Báo cáo in ra thiếu biểu đồ”</div>
<p>Kiểm tra: biểu đồ có nằm trên Report sheet không (không phải chỉ ở sheet làm việc); Page Setup đúng A4; Master Page có bị đè lên vùng biểu đồ không. Kích thước giấy đã thẩm định là Letter hoặc A4.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Master Page", "logo, đầu trang", "accent"], ["Biểu đồ chọn lọc", "3–6 hình", "b488"], ["Gate Statistics", "bảng số liệu", "v405"], ["Information table", "bệnh nhân, lô", "warn"], ["Approval Signature", "ký duyệt", "r638"], ["Compared Report", "so hai lần", "ok"]], "per": 3}'><figcaption>Thành phần một Report Sheet.</figcaption></figure>

<div id="batch" class="ftb-anchor"></div>

## 5.11 Batch Processing

Batch chạy một danh sách data set (hoặc nhóm data set nếu dùng Composite) qua một protocol, tạo bản in, PDF, file analysis, hoặc file thống kê. Chỉ một batch tại một thời điểm, không có undo/redo, không di chuyển file khi batch đang chạy. Tối đa 2 000 data set.

<div class="tbl-wrap"><table>
<thead><tr><th>Tùy chọn</th><th>Tác dụng</th></tr></thead>
<tbody>
<tr><td>Process all</td><td>Chạy lại toàn bộ batch</td></tr>
<tr><td>Cascade parameter values from previous analysis</td><td>Chép giá trị tham số của mục đang sửa sang mục kế</td></tr>
<tr><td>Cascade compensation values from previous analysis</td><td>Chép ma trận bù sang mục kế</td></tr>
<tr><td>Cascade absolute count settings</td><td>Giữ thay đổi cài đặt đếm tuyệt đối giữa các data set</td></tr>
<tr><td>Export appended statistics to *.csv</td><td>Một file CSV cho cả batch: tiện đưa vào bảng tính theo dõi</td></tr>
<tr><td>Save batched files as analysis</td><td>Lưu file analysis cho từng data set</td></tr>
</tbody>
</table></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Batch không phải để duyệt mẫu</div>
<p>Batch áp cùng một protocol, không điều chỉnh cổng cho từng mẫu. Phù hợp với QC hạt, mẫu đã duyệt cần in lại, hay xuất thống kê hàng loạt. Mẫu bệnh nhân mới vẫn cần người duyệt từng mẫu.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Batch List", "≤2 000 data set", "accent"], ["Protocol / Composite", "", "b488"], ["Cascade", "tham số, bù, đếm tuyệt đối", "warn"], ["Output", "PDF, in, analysis, CSV", "ok"]], "per": 4}'><figcaption>Luồng Batch Processing.</figcaption></figure>

<div id="qcreport" class="ftb-anchor"></div>

## 5.12 QC Report và Levey-Jennings

Thẻ QC Report Activity mở riêng, gồm: menu ứng dụng QC, QC List (file đưa vào), QC Attributes pane (Parameters, Compensation, Color Precedence, Hardware; chỉ sửa được Compensation), QC Ribbon, QC Sheet, và các tab: một tab cho mỗi sheet của QC Protocol cộng tab tạo biểu đồ Levey-Jennings. Báo cáo lưu thành `*.qcr`, có thể nhập lại để cập nhật và xuất dữ liệu.

Gợi ý: dựng một QC Protocol đọc file Flow-Check Pro hằng ngày, thống kê HPCV và Mean từng kênh; Levey-Jennings với giới hạn spec. Một QC Protocol khác đọc file ClearLLab Control Cells, thống kê % dương của từng marker so với giá trị gán.

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Theo dõi Levey-Jennings trong Kaluza</div>
<ol><li>Tạo QC Protocol với cổng và thống kê cố định cho hạt (vị trí đỉnh, HPCV).</li><li>Kéo các file QC hằng ngày vào QC List.</li><li>Xem biểu đồ Levey-Jennings theo từng kênh; đánh dấu ngày đổi lô và bảo trì.</li><li>Lưu file .qcr để cộng dồn tháng sau.</li></ol></div>

<figure class="fig" data-fig='{"t": "line", "series": [["Mean FL1 Flow-Check", [[1, 512], [2, 509], [3, 515], [4, 508], [5, 511], [6, 506], [7, 503], [8, 500], [9, 497], [10, 494]], "b488"]], "xl": "Ngày", "yl": "Kênh trung bình", "xmin": 1, "xmax": 10, "ymin": 470, "ymax": 550, "xt": [[1, "1"], [5, "5"], [10, "10"]], "yt": [[486, "−5%"], [512, "512"], [538, "+5%"]], "hl": [[486, "−5% (spec)", "bad"], [538, "+5%", "bad"]]}'><figcaption>Levey-Jennings vị trí kênh Flow-Check Pro: trôi dần về giới hạn −5% (minh họa).</figcaption></figure>

<div id="congthuc" class="ftb-anchor"></div>

## 5.13 Công thức

Kaluza cho viết công thức kiểu bảng tính trong Information table, Information sheet và tham số tùy chỉnh: cộng, trừ, nhân, chia, `LOG()` cơ số 10 và lũy thừa `^`. Công thức lỗi hiện `###` màu đỏ. Trong Composite phải chỉ định chỉ số data set và thang, ví dụ `=CV("A", "FL1", LOG, 1)`; với data set đơn có thể bỏ thang, ví dụ `=ARITHMETICMEAN("A", "FL1")` dùng thang log mặc định. Có thể thay LOG bằng LIN, LINEAR, LOGICLE, LOGARITHMIC. Analysis List và Data Set Identifier chỉ hỗ trợ hàm trích khóa FCS.

<div class="tbl-wrap"><table>
<thead><tr><th>Mục đích</th><th>Ví dụ công thức</th></tr></thead>
<tbody>
<tr><td>Số tuyệt đối từ hạt</td><td><code>=COUNT("CD4") * KEYVALUE("@ABSCALFACTOR") / COUNT("CAL")</code></td></tr>
<tr><td>Tỷ lệ CD4/CD8</td><td><code>=COUNT("CD4") / COUNT("CD8")</code></td></tr>
<tr><td>Tỷ lệ kappa/lambda trong cổng B</td><td><code>=COUNT("Kappa") / COUNT("Lambda")</code></td></tr>
<tr><td>Tỷ số CD45 lympho/blast (Ogata)</td><td><code>=MEDIAN("Ly", "FL10") / MEDIAN("Blast", "FL10")</code> (tên hàm theo bảng 12.1 của IFU; kiểm tra lại cú pháp trên phiên bản đang dùng)</td></tr>
<tr><td>Độ nhạy MRD đạt được</td><td><code>=20 / COUNT("CD45+")</code></td></tr>
<tr><td>Logarit</td><td><code>=LOG(1000)</code> trả về 3</td></tr>
</tbody>
</table></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Công thức tính LOD ngay trong báo cáo</div>
<p>Với MRD, LOD = 20 / tổng số tế bào. Trong Information table, nếu ô tổng số tế bào là cổng “Leukocytes”, viết công thức dạng <code>=20/COUNT(...)</code> (cú pháp tham chiếu cổng theo IFU Kaluza). Báo cáo tự in LOD cho từng lần chạy, không phải tính tay.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["=COUNT(\"CD4\")*KEYVALUE(\"@ABSCALFACTOR\")/COUNT(\"CAL\")", "số tuyệt đối", "accent"], ["=COUNT(\"CD4\")/COUNT(\"CD8\")", "tỷ lệ CD4/CD8", "b488"], ["=COUNT(\"Kappa\")/COUNT(\"Lambda\")", "tỷ lệ κ/λ", "warn"], ["=20/COUNT(\"CD45+\")", "LOD MRD", "r638"]], "per": 2, "h": 70}'><figcaption>Ví dụ công thức hữu ích trong Kaluza C.</figcaption></figure>

<div id="lis" class="ftb-anchor"></div>

## 5.14 Xuất sang LIS

Kaluza C kết nối LIS qua ASTM TCP/IP, ASTM cổng nối tiếp hoặc HL7. LIS Protocol (`*.lisprotocol`) lưu các giá trị cần gửi (giá trị, mô tả, tên kênh), tùy chọn LIS và biểu đồ xem trước. Có nhật ký gửi (View Log). Ở phía phòng xét nghiệm, phần mềm DI - Instrument Manager (tài liệu A45429AG, bản 10/2025, phiên bản driver 9.00.30) cung cấp driver hai chiều cho AQUIOS CL, Navios, Navios EX, CellMek SPS và Kaluza: nhận yêu cầu xét nghiệm, tạo External Worklist cho Navios, nhận ảnh, PDF và file XLS (Navios) hoặc XLSX (Navios EX) qua thư mục chia sẻ. Tài liệu có chương thẩm định hệ thống (System Validation) và bảo mật.

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“LIS nhận được số nhưng sai trường”</div>
<ol><li>So LIS Protocol: tên giá trị, mã xét nghiệm, đơn vị gửi đi.</li><li>Xem View Log: Kaluza đã gửi gì, LIS phản hồi gì.</li><li>Kiểm tra phía middleware (DI - Instrument Manager) có ánh xạ mã đúng không.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["HIS/LIS", "yêu cầu xét nghiệm", "accent"], ["DI - Instrument Manager", "driver hai chiều", "b488"], ["Navios EX", "External Worklist", "v405"], ["Kaluza C", "LIS Protocol: ASTM, HL7", "warn"], ["Kết quả về LIS", "giá trị, PDF, XLSX", "ok"]], "per": 5, "h": 84}'><figcaption>Luồng dữ liệu LIS hai chiều (A45429AG).</figcaption></figure>

<div id="ruo" class="ftb-anchor"></div>

## 5.15 Tính năng RUO: chu kỳ tế bào

Addendum C29335AA mô tả biểu đồ Cell Cycle (chỉ dùng nghiên cứu). Mẫu được làm thấm và nhuộm DNA định lượng (PI, DAPI). Trước tiên dựng biểu đồ Width × Area của chất nhuộm DNA, vẽ cổng polygon loại doublet và mảnh vụn. Thêm biểu đồ Cell Cycle với cổng đó làm đầu vào, chọn tham số Width (hoặc tương đương). Hai mô hình: **Michael H. Fox** (mặc định; G1 và G2 khớp Gauss, pha S khớp đường cong trơn) và **J. V. Watson** (G1 và G2 Gauss, giảm chồng lấn với S, pha S không biến đổi). Có thể ràng buộc tay khoảng G1 và G2. Kết quả cho % G1, S, G2.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Vì sao chu kỳ tế bào dùng thang tuyến tính</div>
<p>Đỉnh G2/M phải nằm đúng gấp đôi G0/G1. Trên thang tuyến tính khoảng cách đó rõ ràng; trên thang log, khoảng “gấp đôi” chỉ còn khoảng 77 kênh trên trục và khó đo CV đỉnh (mục 1.9).</p></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "DNA (tuyến tính)", "y": "Số tế bào", "pops": [{"n": 4000, "x": 0.3, "sx": 0.02, "y": 0, "sy": 0, "c": "b488", "l": "G1"}, {"n": 900, "x": 0.45, "sx": 0.08, "y": 0, "sy": 0, "c": "warn", "l": "S"}, {"n": 1200, "x": 0.6, "sx": 0.025, "y": 0, "sy": 0, "c": "r638", "l": "G2/M"}], "seed": 594, "type": "hist", "xs": "lin", "note": "RUO"}' height="420" width="560"></canvas><figcaption>Histogram chu kỳ tế bào: G1, S, G2 (minh họa tính năng RUO).</figcaption></figure>

<div id="dung" class="ftb-anchor"></div>

## 5.16 Thực hành: dựng protocol ClearLLab từ đầu

<ol class="steps">
<li><div><b>Nạp 4 file</b> B, T, M1, M2 của một mẫu bình thường; kiểm tra Parameters pane: tên mô tả là marker, Type đúng.</div></li>
<li><div><b>Tạo Composite</b> 4 ống. Link compensation; nhập ma trận từ ClearLLab Compensation Kit (hoặc dùng ma trận trong file nếu đã bù khi thu).</div></li>
<li><div><b>Sheet 1 “QC mẫu”</b> cho mỗi ống: TIME × CD45 (cổng Time), FS INT × FS PEAK (Singlets, đầu vào Time), FS × SS (Cells, đầu vào Singlets).</div></li>
<li><div><b>Sheet 2 “Bản đồ CD45”</b>: CD45 × SS trên Cells, cổng CD45+; rồi CD45 × SS trên CD45+ với các cổng Ly, Mo, Gr, CD45dim (blast). Màu: Ly xanh, Mo xanh lục, Gr cam, CD45dim đỏ; đặt CD45dim cao nhất trong Color Precedence.</div></li>
<li><div><b>Ống B</b>: CD19 × SS (cổng B), trên cổng B: kappa × lambda (quadrant), CD5 × CD19, CD5 × CD200, CD10 × CD20, CD38 × CD10, CD20 × CD19, CD34 × CD19. Thêm tất cả marker × SS trên Cells để thấy quần thể ngoài cổng B.</div></li>
<li><div><b>Ống T</b>: CD3 × SS (cổng T), CD4 × CD8 trên T, CD7 × CD5, CD2 × CD3, CD56 × CD3 (NK), TCRγδ × CD3, CD34 × CD7 trên CD45dim.</div></li>
<li><div><b>Ống M1</b>: trên Gr: CD16 × CD13, CD11b × CD16 (đường trưởng thành hạt); trên Mo: CD14 × CD64, HLA-DR × CD14; trên CD45dim: CD34 × CD7, CD34 × HLA-DR, CD10 trên Gr.</div></li>
<li><div><b>Ống M2</b>: trên CD45dim: CD117 × CD34, CD13 × CD33, CD38 × CD34, HLA-DR × CD34, CD123 × HLA-DR (pDC và basophil), CD15 × CD34, CD19 × CD34 (bắt CD19 lệch dòng).</div></li>
<li><div><b>Gate Statistics Table</b> và Information table: % mỗi quần thể trên CD45+, MFI chính, tỷ lệ kappa/lambda, số sự kiện thu được, lô thuốc thử.</div></li>
<li><div><b>Report sheet</b> với Master Page, chữ ký duyệt. Lưu thành Composite Protocol <code>CLL10C_v1.protocol</code>; kiểm thử trên 20 mẫu bình thường và 20 mẫu bệnh trước khi dùng thường quy (chương 06).</div></li>
</ol>

<p class="src">ClearLLab 10C Casebook cung cấp sẵn protocol Kaluza và file LMD cho 24 case; nên so protocol tự dựng với protocol của Casebook.</p>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Kiểm tra protocol mới trước khi dùng</div>
<ol><li>Chạy 3–5 mẫu bình thường: các quần thể có vào đúng cổng không cần chỉnh?</li><li>Chạy vài mẫu bệnh đã biết kết quả: protocol có làm lộ bất thường không?</li><li>Nhờ người thứ hai dùng protocol, so kết quả.</li><li>Khóa protocol, ghi phiên bản và ngày áp dụng.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Nạp 4 file", "kiểm Type", "accent"], ["Composite", "link bù", "b488"], ["Sheet QC", "Time, Singlets, Cells", "muted"], ["Bản đồ CD45", "Ly, Mo, Gr, CD45dim", "warn"], ["Ống B, T", "", "v405"], ["Ống M1, M2", "", "r638"], ["Bảng, báo cáo", "Master Page", "ok"], ["Lưu phiên bản", "kiểm thử 20+20", "accent"]], "per": 4, "snake": true}'><figcaption>Mười bước dựng protocol ClearLLab từ đầu.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 5.17 Hỏi bác sĩ

<details class="ans"><summary>“Tôi muốn mở file FCS từ máy BD trong Kaluza C được không?”</summary><p>Được, Kaluza C đọc FCS. Kiểm tra Type của từng tham số, thang (nhiều máy lưu dữ liệu tuyến tính 18-bit cần hiển thị logicle), và tùy chọn thuật toán bù (Apply fluorescence parameter resolution) để kết quả khớp phần mềm gốc. Ma trận bù trong file FCS được đọc nếu khóa $SPILLOVER có mặt.</p></details>

<details class="ans"><summary>“Sao % trên báo cáo khác % tôi tự tính?”</summary><p>Thường do mẫu số khác: % Gated (trên cổng cha), % Total (mọi sự kiện, có cả mảnh vụn), % Grandparent. Báo cáo nên ghi rõ “% trên tế bào CD45+ sống” hoặc “% trên tế bào có nhân”.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Muốn so blast giữa ống B và ống M2 của cùng một mẫu, dùng công cụ nào?</summary><p>Composite Protocol với overlay CD45 × SS, link compensation để hai ống dùng chung ma trận.</p></details><details class="ans"><summary>Batch Processing có thay được bước duyệt từng mẫu không?</summary><p>Không. Batch áp cùng một protocol, không chỉnh cổng theo từng mẫu; dùng cho QC, in lại hay xuất thống kê.</p></details><details class="ans"><summary>Mở file FCS máy hãng khác cần kiểm tra gì?</summary><p>Type của từng tham số, thang hiển thị (dữ liệu tuyến tính độ phân giải cao cần logicle), và tùy chọn thuật toán bù để kết quả khớp phần mềm gốc.</p></details></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["% Gated", ["Trên cổng cha trực tiếp"], "accent"], ["% Total", ["Trên mọi sự kiện, cả mảnh vụn"], "warn"], ["% Grandparent", ["Trên cổng ông, ví dụ CD45+"], "b488"]]}'><figcaption>Ba mẫu số dễ nhầm khi so % giữa báo cáo.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch05.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
