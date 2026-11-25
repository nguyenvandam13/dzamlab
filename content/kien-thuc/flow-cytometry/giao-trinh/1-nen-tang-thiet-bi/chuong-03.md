---
title: "03 · QC, chuẩn hóa cài đặt và bảo trì"
description: "Một kết quả flow chỉ đáng tin khi trả lời được ba câu: máy hôm nay có đo đúng không, cài đặt hôm nay có giống hôm qua không, và quy trình nhuộm có cho kết quả như mong đợi trên mẫu chứng không."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "03"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần I · Chương 03</div><div id="ftb-search"></div></div>

<p class="lead">Một kết quả flow chỉ đáng tin khi trả lời được ba câu: máy hôm nay có đo đúng không, cài đặt hôm nay có giống hôm qua không, và quy trình nhuộm có cho kết quả như mong đợi trên mẫu chứng không. Chương này trình bày hệ QC nhiều tầng của Navios EX theo IFU, cách đọc biểu đồ Levey-Jennings, quy tắc Westgard, ngoại kiểm, và lịch bảo trì, kèm bảng xử lý các thông báo lỗi thường gặp.</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">8 mục mới · 58 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><div class="tbl-wrap" id="gtab-ch03"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-westgard"><td>Westgard</td><td><span class="full">quy tắc Westgard.</span> Bộ quy tắc đọc biểu đồ QC (ví dụ 1-3s, 2-2s, R-4s, 10x) để quyết định chấp nhận hay loại một lần chạy.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-eqa-pt"><td>EQA / PT</td><td><span class="full">External Quality Assessment / Proficiency Testing, ngoại kiểm.</span> Chương trình gửi mẫu giống nhau cho nhiều phòng xét nghiệm và so sánh kết quả. Ví dụ UK NEQAS, CAP.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-doi-chung-don-mau"><td>Đối chứng đơn màu</td><td><span class="full">single-stain control.</span> Ống hoặc hạt chỉ nhuộm một chất nhuộm, dùng để đo spillover của chất nhuộm đó sang mọi đầu dò khi tạo ma trận bù.</td><td class="at"><a href="#tang" title="Bốn tầng QC">3.1</a></td></tr><tr id="g-chung-sinh-hoc"><td>Chứng sinh học</td><td><span class="full">biological control, ví dụ IMMUNO-TROL.</span> Mẫu tế bào đã ổn định có giá trị gán sẵn, chạy như mẫu bệnh nhân để kiểm tra toàn bộ quy trình nhuộm, ly giải, thu và phân tích.</td><td class="at"><a href="#tang" title="Bốn tầng QC">3.1</a></td></tr><tr id="g-flow-count"><td>Flow-Count</td><td><span class="full">hạt đếm tuyệt đối của Beckman Coulter.</span> Hạt huỳnh quang có nồng độ ghi theo lô (hạt/µL), thêm vào ống để tính số tế bào/µL. Chữ FC trong tên protocol là Flow-Count.</td><td class="at"><a href="#tang" title="Bốn tầng QC">3.1</a></td></tr><tr id="g-low-med-high"><td>LOW / MED / HIGH</td><td><span class="full">tốc độ chảy mẫu trên Navios.</span> Ba mức tốc độ hút mẫu; QC hạt chạy ở LOW để HPCV chính xác nhất.</td><td class="at"><a href="#flowset" title="Flow-Set Pro và AutoSetup">3.3</a></td></tr><tr id="g-uk-neqas"><td>UK NEQAS</td><td><span class="full">UK National External Quality Assessment Service.</span> Chương trình ngoại kiểm của Anh, có các module flow (phân nhóm lympho, CD34, leukemia, PNH).</td><td class="at"><a href="#qcsinhhoc" title="Chứng sinh học và ngoại kiểm">3.6</a></td></tr><tr id="g-checksum"><td>Checksum</td><td><span class="full">mã kiểm tra file.</span> Con số tính từ nội dung file để phát hiện file bị hỏng hoặc bị sửa.</td><td class="at"><a href="#loi" title="Thông báo lỗi thường gặp và cách xử lý">3.8</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="acquisition-manager" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-acquisition-manager" title="trình quản lý thu nhận: Cửa sổ của phần mềm Navios EX để dựng worklist, chạy và theo dõi quá trình thu mẫu.">Acquisition Manager</a><a data-g="as-ten-ung-dung" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-as-ten-ung-dung" title="AutoSetup application: Tiền tố tên ứng dụng AutoSetup trên Navios, ví dụ AS LSA TBNK FC.">AS (tên ứng dụng)</a><a data-g="autosetup" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-autosetup" title="quy trình cài đặt tự động của Navios: Bộ protocol và wizard chỉnh điện áp cho hạt Flow-Set Pro rơi vào vùng đích, tạo ma trận bù và kiểm chứng cài đặt.">AutoSetup</a><a data-g="bu-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bu-mau" title="compensation: Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.">Bù màu</a><a data-g="cal-factor" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-cal-factor" title="hệ số hạt đếm: Nồng độ hạt đếm theo lô (hạt/µL), nhập vào worklist hoặc protocol để máy tính số tuyệt đối. Trong file lưu ở từ khóa @ABSCALFACTOR.">CAL factor</a><a data-g="carryover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-carryover" title="nhiễm chéo: Tế bào hoặc hạt của mẫu trước sót lại trong đường ống và xuất hiện trong mẫu sau; quan trọng với MRD và PNH.">Carryover</a><a data-g="chat-nhuom-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-huynh-quang" title="fluorochrome: Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.">Chất nhuộm huỳnh quang</a><a data-g="chat-nhuom-tandem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-tandem" title="tandem dye: Hai chất nhuộm ghép đôi (ví dụ PE với Cy7): chất thứ nhất hấp thụ laser rồi chuyển năng lượng sang chất thứ hai để phát ở bước sóng xa hơn. Dễ phân rã do ánh sáng, nhiệt và chất cố định.">Chất nhuộm tandem</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="co-dinh-lam-tham" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-co-dinh-lam-tham" title="fixation / permeabilization: Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.">Cố định / làm thấm</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="cv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cv" title="coefficient of variation, hệ số biến thiên: SD chia cho trung bình, nhân 100%. Cho biết độ phân tán tương đối; dùng cho độ chụm và độ rộng đỉnh.">CV</a><a data-g="dau-do" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dau-do" title="detector: Bộ phận biến ánh sáng thành tín hiệu điện (photodiode hoặc PMT). Mỗi đầu dò huỳnh quang trên Navios được đặt tên FL1 đến FL10.">Đầu dò</a><a data-g="decade" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-decade" title="một bậc mười: Một khoảng trên thang log mà giá trị tăng 10 lần, ví dụ 1→10 hoặc 100→1 000.">Decade</a><a data-g="dien-ap-pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dien-ap-pmt" title="PMT voltage: Mức điện áp đặt cho ống nhân quang; tăng điện áp làm tín hiệu cả kênh sáng hơn (dịch sang phải), đồng thời làm thay đổi giá trị spillover vào kênh đó.">Điện áp PMT</a><a data-g="dna" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dna" title="deoxyribonucleic acid: Vật chất di truyền trong nhân; nhuộm DNA định lượng dùng cho chu kỳ tế bào và đánh giá sống/chết.">DNA</a><a data-g="do-nhay-mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-do-nhay-mrd" title="sensitivity: Tỷ lệ thấp nhất phát hiện được: LOD = số sự kiện cụm tối thiểu ÷ tổng tế bào đánh giá. Ví dụ 20 ÷ 2 000 000 = 10⁻⁵.">Độ nhạy (MRD)</a><a data-g="doublet" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doublet" title="tế bào đôi: Hai tế bào (hoặc hai hạt) đi qua laser cùng lúc nên bị ghi thành một sự kiện; loại bằng cổng INT × PEAK hoặc INT × TOF.">Doublet</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="flow-check-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-check-pro" title="hạt kiểm tra căn chỉnh của Beckman Coulter: Hạt huỳnh quang đồng nhất dùng QC hằng ngày: đo HPCV để đánh giá căn chỉnh quang học và dòng chảy.">Flow-Check Pro</a><a data-g="flow-set-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-set-pro" title="hạt chuẩn hóa cài đặt của Beckman Coulter: Hạt dùng để chỉnh điện áp PMT sao cho đỉnh rơi vào vùng đích, giúp cường độ ổn định giữa các ngày.">Flow-Set Pro</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="fwhm" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fwhm" title="full width at half maximum: Độ rộng của đỉnh đo tại một nửa chiều cao. Với phân bố chuẩn, FWHM = 2,354 × SD.">FWHM</a><a data-g="gain" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-gain" title="hệ số khuếch đại: Hệ số nhân tín hiệu sau đầu dò; trên thang log, gain ×2 dịch mọi quần thể sang phải một đoạn bằng nhau.">Gain</a><a data-g="hpcv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hpcv" title="half-peak CV: CV tính từ độ rộng của đỉnh tại nửa chiều cao (FWHM ÷ 2,354 chia cho vị trí đỉnh). Không bị đuôi ảnh hưởng; dùng cho QC hạt Flow-Check Pro.">HPCV</a><a data-g="ifu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ifu" title="Instructions for Use, hướng dẫn sử dụng: Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.">IFU</a><a data-g="iso-15189" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-iso-15189" title="tiêu chuẩn chất lượng phòng xét nghiệm y khoa: Tiêu chuẩn quốc tế về năng lực và chất lượng phòng xét nghiệm y khoa, gồm yêu cầu báo kết quả nguy cấp, thẩm định, QC.">ISO 15189</a><a data-g="isoflow" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-isoflow" title="dịch bao của Beckman Coulter: Dung dịch đệm đẳng trương dùng làm dịch bao trên Navios EX.">IsoFlow</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="kenh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kenh" title="channel (hai nghĩa): Có hai nghĩa: (1) kênh đầu dò, tức một đầu dò như FL2; (2) kênh trên trục, tức vị trí số trên thang hiển thị (ví dụ kênh 512 trên thang 1 024 kênh). Xem mục 1.9.">Kênh</a><a data-g="khang-nguyen-khang-the" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-khang-nguyen-khang-the" title="antigen / antibody: Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.">Kháng nguyên / kháng thể</a><a data-g="levey-jennings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-levey-jennings" title="biểu đồ Levey-Jennings: Biểu đồ kết quả QC theo ngày với đường trung bình và các giới hạn ±1, 2, 3 SD; giúp thấy xu hướng trôi.">Levey-Jennings</a><a data-g="listcomp-quickcomp" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-listcomp-quickcomp" title="công cụ bù sau thu của Navios: Các tiện ích của phần mềm Navios EX để tạo hoặc áp ma trận bù cho file đã thu.">ListComp / QuickCOMP</a><a data-g="lmd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lmd" title="List Mode Data: Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.">LMD</a><a data-g="logicle" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-logicle" title="biexponential, thang hai hàm mũ: Thang lai: gần 0 gần như tuyến tính (hiển thị được giá trị âm sau bù), ở giá trị cao giống log. Thang mặc định nên dùng cho dữ liệu đã bù.">Logicle</a><a data-g="lp" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lp" title="longpass, kính lọc thông dài: Kính cho mọi bước sóng dài hơn ngưỡng đi qua. LP 600 nghĩa là cho ánh sáng &gt; 600 nm qua.">LP</a><a data-g="lsa" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-lsa" title="Lymphocyte Subset Application: Ứng dụng đếm phân nhóm lympho (T, B, NK, CD4, CD8) trên Navios với panel tetraCHROME, có tính số tuyệt đối.">LSA</a><a data-g="ly-giai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ly-giai" title="lysis: Phá hồng cầu bằng dung dịch (NH4Cl, VersaLyse…) để còn lại bạch cầu. Có kiểu không rửa (lyse/no-wash) và có rửa (stain/lyse/wash).">Ly giải</a><a data-g="maintenance-log" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-maintenance-log" title="nhật ký bảo trì: Sổ ghi các thao tác bảo trì, vệ sinh, sự cố của máy.">Maintenance Log</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mean" title="trung bình số học: Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.">Mean</a><a data-g="mfi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mfi" title="Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị: Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.">MFI</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pc7" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc7" title="PE-Cy7: Tandem PE với cyanine 7, phát ~770 nm, đo ở FL5. Dễ phân rã do ánh sáng và chất cố định.">PC7</a><a data-g="pe" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pe" title="phycoerythrin: Protein huỳnh quang lấy từ tảo đỏ, kích thích 488 nm, phát vàng cam (~575 nm), đo ở FL2. Một trong những chất nhuộm sáng nhất.">PE</a><a data-g="pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pmt" title="photomultiplier tube, ống nhân quang: Đầu dò khuếch đại tín hiệu ánh sáng yếu hàng triệu lần; điện áp đặt vào PMT quyết định độ khuếch đại của kênh.">PMT</a><a data-g="pnh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pnh" title="Paroxysmal Nocturnal Hemoglobinuria, tiểu huyết sắc tố kịch phát ban đêm: Bệnh tế bào gốc mắc phải do đột biến PIGA làm mất neo GPI; hồng cầu thiếu CD55, CD59 nên bị bổ thể phá hủy.">PNH</a><a data-g="prime" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-prime" title="mồi dịch: Thao tác đẩy dịch qua đường ống để loại bọt khí trước khi chạy.">Prime</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="qc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-qc" title="Quality Control, kiểm soát chất lượng: Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).">QC</a><a data-g="sop" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-sop" title="Standard Operating Procedure, quy trình thao tác chuẩn: Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.">SOP</a><a data-g="spillover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-spillover" title="phần tín hiệu lọt sang kênh khác: Tỷ lệ ánh sáng của một chất nhuộm rơi vào đầu dò dành cho chất nhuộm khác, vì phổ phát xạ rộng hơn cửa sổ kính lọc. Ghi bằng phần trăm.">Spillover</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="thang-tuyen-tinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-thang-tuyen-tinh" title="linear scale: Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.">Thang tuyến tính</a><a data-g="trung-vi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-trung-vi" title="median: Giá trị nằm giữa khi xếp các tế bào theo cường độ: một nửa cao hơn, một nửa thấp hơn. Không bị đuôi và giá trị âm sau bù kéo lệch, nên dùng để đánh giá bù và báo MFI.">Trung vị</a><a data-g="vung-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-vung-dich" title="target channel: Vị trí kênh (trên trục) mà đỉnh hạt Flow-Set Pro phải rơi vào sau khi chỉnh điện áp; giữ cho cường độ ổn định theo thời gian.">Vùng đích</a></div></div></details>

<div id="tang" class="ftb-anchor"></div>

## 3.1 Bốn tầng QC

<div class="tbl-wrap"><table>
<thead><tr><th>Tầng</th><th>Câu hỏi</th><th>Vật liệu trên Navios EX</th><th>Tần suất</th></tr></thead>
<tbody>
<tr><td>1. Hiệu năng máy</td><td>Quang học và dòng chảy có ổn định không?</td><td>Flow-Check Pro: HPCV, vị trí kênh</td><td>Mỗi ngày, trước mẫu bệnh nhân</td></tr>
<tr><td>2. Chuẩn hóa cài đặt</td><td>Hạt có rơi đúng vùng đích không? Điện áp cần là bao nhiêu?</td><td>Flow-Set Pro qua AutoSetup</td><td>Mỗi ngày, mỗi ứng dụng</td></tr>
<tr><td>3. Bù màu</td><td>Ma trận còn đúng không?</td><td>Cyto-Comp, QuickCOMP, ống đơn màu hoặc ClearLLab Compensation Kit/Beads</td><td>Khi tạo ứng dụng, đổi lô tandem, sau bảo trì quang học, định kỳ theo SOP</td></tr>
<tr><td>4. Toàn bộ quy trình</td><td>Nhuộm, ly giải, phân tích có cho đúng giá trị?</td><td>IMMUNO-TROL, IMMUNO-TROL Low, ClearLLab Control Cells (bình thường và bất thường), máu người bình thường</td><td>Mỗi ngày chạy xét nghiệm, mỗi lô thuốc thử mới</td></tr>
</tbody>
</table></div>

<p class="src">Bảng QC Processes trong IFU Navios EX chương 7 còn có tầng đếm tuyệt đối bằng Flow-Count (hệ số CAL theo lô).</p>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Bốn tầng QC như kiểm tra một bếp ăn</div>
<p>Tầng 1 (Flow-Check Pro) kiểm tra bếp có lửa đều không. Tầng 2 (Flow-Set Pro) chỉnh lửa về đúng mức chuẩn mỗi sáng. Tầng 3 (bù màu) kiểm tra gia vị không lẫn sang nhau. Tầng 4 (chứng tế bào) là nếm thử món ăn hoàn chỉnh. Bếp tốt mà nguyên liệu hỏng (lô kháng thể kém) thì chỉ tầng 4 mới phát hiện.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["1. Hiệu năng máy", "Flow-Check Pro", "b488"], ["2. Chuẩn hóa", "Flow-Set Pro, AutoSetup", "accent"], ["3. Bù màu", "ống đơn màu, kit", "warn"], ["4. Toàn quy trình", "IMMUNO-TROL, ClearLLab Control Cells", "ok"]], "per": 4}'><figcaption>Bốn tầng QC trên Navios EX.</figcaption></figure>

<div id="flowcheck" class="ftb-anchor"></div>

## 3.2 Flow-Check Pro: giám sát căn chỉnh và dòng chảy

Flow-Check Pro là hạt huỳnh quang kích thước đều, phát sáng trên mọi kênh. Khi máy căn chỉnh tốt và dòng chảy ổn định, mọi hạt nhận cùng lượng ánh sáng, nên phân bố cường độ hẹp, HPCV thấp. HPCV tăng là dấu hiệu sớm của laser lệch, bọt khí, buồng dòng chảy bẩn, áp suất không ổn định.

Chạy Flow-Check Pro ở tốc độ thấp. Giới hạn HPCV theo spec Navios EX: FS <2%, FL1–FL4 <2%, FL5 <2,5%, FL6–FL8 <3%, FL9–FL10 <4%. Protocol QC có thể ghi giới hạn trong tên region; AutoSetup II Wizard kiểm tra và báo “QC Failed” nếu HPCV vượt giới hạn.

Ngoài HPCV, theo dõi **vị trí kênh trung bình** của hạt ở điện áp cố định. Spec: lệch không quá ±5% so với trung bình 8 ngày. Vị trí giảm dần theo tuần gợi ý laser yếu đi hoặc kính lọc bẩn; tăng đột ngột thường do đổi lô hạt.

<div class="lab">
<div class="labhead"><h4>Levey-Jennings: HPCV FL5 (PC7) trong 30 ngày</h4><span class="stat">dữ liệu mô phỏng · giới hạn spec 2,5%</span></div>
<canvas aria-label="Biểu đồ Levey-Jennings HPCV" height="300" id="ljCanvas" width="900"></canvas>
<p style="font-size:.88rem;margin:8px 0 0">Ngày 1–18 ổn định quanh 1,6%. Từ ngày 19 HPCV tăng dần (xu hướng 6 điểm liên tiếp đi lên), ngày 26 vượt +2SD, ngày 28 vượt giới hạn spec. Hành động đúng là xử lý ngay từ khi phát hiện xu hướng, không đợi đến ngày vượt spec: prime, vệ sinh buồng dòng chảy, kiểm tra lô hạt, gọi kỹ sư kiểm tra căn chỉnh.</p>
</div>

<script>
window.FB_extra = function(){
  var cv = document.getElementById("ljCanvas"); if(!cv) return;
  var ctx = cv.getContext("2d"), W = cv.width, H = cv.height, P = {l:56, r:16, t:16, b:36};
  function css(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
  ctx.clearRect(0,0,W,H); ctx.fillStyle = css("--plot-bg"); ctx.fillRect(0,0,W,H);
  var d = [1.58,1.62,1.55,1.64,1.60,1.57,1.66,1.59,1.61,1.54,1.63,1.58,1.67,1.60,1.56,1.62,1.59,1.61,1.65,1.69,1.74,1.79,1.84,1.90,1.96,2.03,2.21,2.58,1.62,1.60];
  var mean = 1.60, sd = 0.04, lo = 1.3, hi = 2.7;
  function X(i){ return P.l + i / (d.length - 1) * (W - P.l - P.r); } function Y(v){ return P.t + (hi - v) / (hi - lo) * (H - P.t - P.b); }
  ctx.font = "11px " + css("--f-mono");
  [[mean, "mean", css("--ok")], [mean + 2*sd, "+2SD", css("--warn")], [mean - 2*sd, "−2SD", css("--warn")], [mean + 3*sd, "+3SD", css("--bad")], [mean - 3*sd, "−3SD", css("--bad")], [2.5, "spec 2,5%", css("--r638")]].forEach(function(l){
    ctx.strokeStyle = l[2]; ctx.setLineDash(l[1] === "mean" ? [] : [5,4]); ctx.beginPath(); ctx.moveTo(P.l, Y(l[0])); ctx.lineTo(W - P.r, Y(l[0])); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = l[2]; ctx.textAlign = "right"; ctx.fillText(l[1], P.l - 4, Y(l[0]) + 4); });
  ctx.strokeStyle = css("--b488"); ctx.lineWidth = 1.6; ctx.beginPath(); d.forEach(function(v,i){ if(i) ctx.lineTo(X(i), Y(v)); else ctx.moveTo(X(i), Y(v)); }); ctx.stroke(); ctx.lineWidth = 1;
  d.forEach(function(v,i){ ctx.fillStyle = v > 2.5 ? css("--bad") : (v > mean + 2*sd ? css("--warn") : css("--b488")); ctx.beginPath(); ctx.arc(X(i), Y(v), 3.5, 0, 6.3); ctx.fill(); });
  ctx.fillStyle = css("--muted"); ctx.textAlign = "center"; [1,5,10,15,20,25,30].forEach(function(k){ ctx.fillText(k, X(k-1), H - 14); }); ctx.fillText("Ngày", W/2, H - 2);
  ctx.strokeStyle = css("--line"); ctx.strokeRect(P.l, P.t, W - P.l - P.r, H - P.t - P.b);
};
</script>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">HPCV là độ “đều tay” của máy</div>
<p>Flow-Check Pro là các hạt giống hệt nhau. Nếu máy căn chỉnh tốt, mọi hạt nhận cùng lượng ánh sáng nên đỉnh hẹp, HPCV thấp. Khi laser lệch, buồng dòng chảy bẩn hay có bọt khí, các hạt giống nhau lại cho tín hiệu khác nhau, đỉnh bè ra. HPCV đo độ đều tay của máy, không đo độ sáng.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">HPCV và CV</div>
<p>CV tính trên toàn bộ phân bố nên bị đuôi (doublet, mảnh hạt) kéo lên. HPCV chỉ dựa vào nửa trên của đỉnh (độ rộng ở nửa chiều cao, FWHM ÷ 2,354), nên phản ánh căn chỉnh mà không bị đuôi làm nhiễu. Spec QC của Navios dùng HPCV.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“HPCV FL3 vượt giới hạn sáng nay”</div>
<ol><li>Hạt pha đúng, lắc đều, còn hạn, không để ra ánh sáng?</li><li>Chạy đúng tốc độ thấp? Có bọt khí trong ống?</li><li>Chạy lại sau prime. Nếu mọi kênh cùng xấu: nghĩ đến dòng chảy (bọt, bẩn). Nếu chỉ các kênh của một laser xấu: nghĩ đến laser đó. Nếu chỉ một kênh: kính lọc hoặc PMT.</li></ol></div>

<div id="flowset" class="ftb-anchor"></div>

## 3.3 Flow-Set Pro và AutoSetup

Flow-Set Pro là hạt có cường độ đã định, dùng để đặt điện áp PMT và gain sao cho hạt rơi vào **vùng đích (target channel)**. Nếu mỗi ngày hạt rơi cùng vị trí, tế bào cũng rơi cùng vị trí, nên vị trí quần thể và cổng có thể giữ nguyên ngày này qua ngày khác. Đây là nền tảng của chuẩn hóa trên Navios.

Vùng đích do phòng xét nghiệm thiết lập cho từng lô Flow-Set Pro theo tờ hướng dẫn kèm hạt. Với ứng dụng LSA tetra, vùng đích được gán sẵn theo lô trong tờ hướng dẫn và phải nhập vào protocol `LSA_STAND` tương ứng (không cần thu 20 điểm dữ liệu để tự lập vùng đích).

### Ba công cụ của AutoSetup

<div class="grid3">
<div class="card"><h4>Application Definition Wizard</h4><p>Tạo một ứng dụng mới: chọn Base Protocol (tên tham số mong muốn), chọn khối kính lọc, chọn chất nhuộm cho từng kênh, chọn sản phẩm QC và nhập vùng đích cho FS, SS và từng kênh FL, đặt tên ứng dụng và file cài đặt. Wizard sinh ra bộ protocol <code>_STAND</code>, <code>_FLxx</code>, <code>_VERIFY</code>, <code>Settings</code>, <code>_APP</code>.</p></div>
<div class="card"><h4>AutoSetup Scheduler</h4><p>Xếp lịch các ứng dụng cần chạy hôm nay, nạp vào Acquisition Manager theo carousel. Có thể chọn chỉ chuẩn hóa (Flow-Set) hay cả bù màu.</p></div>
<div class="card"><h4>AutoSetup II Wizard</h4><p>Chạy: kiểm tra HPCV Flow-Check Pro, chỉnh volt/gain để Flow-Set Pro vào vùng đích, chạy các ống đơn màu để tính bù, chạy ống kiểm chứng. Kết quả lưu vào file Settings, các protocol của ứng dụng tự lấy cài đặt mới.</p></div>
</div>

<div class="tbl-wrap"><table>
<thead><tr><th>Tham số</th><th>Độ rộng vùng đích mặc định do Wizard tạo</th></tr></thead>
<tbody>
<tr><td>FS (tuyến tính)</td><td>±20 kênh</td></tr>
<tr><td>SS (tuyến tính)</td><td>±50 kênh</td></tr>
<tr><td>FL log decade 1</td><td>±0,1 (đầu thấp) đến ±0,3 (đầu cao)</td></tr>
<tr><td>FL log decade 2</td><td>±1,0 đến ±3,0</td></tr>
<tr><td>FL log decade 3</td><td>±10 đến ±30</td></tr>
<tr><td>FL log decade 4</td><td>±100 đến ±300</td></tr>
</tbody>
</table></div>

Muốn đổi độ rộng: mở protocol `*_STAND` vào workspace, sửa region, lưu. Các lần xếp lịch sau dùng region đã sửa. Ứng dụng mặc định có sẵn, ví dụ `AS 6C 2L` cho 6 màu 2 laser. Nếu muốn dùng mẫu chứng âm thay cho hạt ở bước chuẩn hóa thì dùng protocol `AS *_STAND.Pro` và sửa theo số màu.

### Trình tự khi HPCV không đạt trong AutoSetup II Wizard

<ol class="steps">
<li><div>Kiểm tra lại từng region không bị “QC Failed” do HPCV vượt giới hạn ghi trong tên region.</div></li>
<li><div>Nếu không đạt: đảm bảo tốc độ chảy đang ở LOW, pha lại hạt mới, chạy lại.</div></li>
<li><div>Vẫn không đạt: chọn Abort, làm vệ sinh thường quy, prime, chạy lại. Không chạy mẫu bệnh nhân khi QC tầng 1 chưa đạt.</div></li>
<li><div>Ghi nhận hành động khắc phục vào Maintenance Log; nếu kéo dài gọi kỹ sư.</div></li>
</ol>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">“Vùng đích” là kênh trên trục, không phải kênh màu</div>
<p>“Cho hạt Flow-Set Pro rơi vào kênh đích” nghĩa là cho đỉnh hạt rơi vào cùng một <b>vị trí trên trục</b> của từng đầu dò (nghĩa thứ hai của chữ “kênh”, mục 1.9). Mỗi kênh FL có vùng đích riêng của nó.</p></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">AutoSetup như chỉnh cân về 0 trước khi cân</div>
<p>Mỗi sáng, cân được chỉnh để quả cân chuẩn đọc đúng 1 kg. Nhờ vậy 1 kg hôm nay bằng 1 kg tuần trước. Flow-Set Pro là quả cân chuẩn; AutoSetup chỉnh điện áp để hạt luôn đọc cùng một vị trí. Điện áp có thể thay đổi giữa các ngày, nhưng vị trí của tế bào thì giữ nguyên.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Đổi lô Flow-Set Pro mà quên nhập vùng đích mới</div>
<p>Lô mới sáng hơn lô cũ 8% trên FL2. Nếu giữ vùng đích của lô cũ, AutoSetup sẽ hạ điện áp FL2 cho tới khi hạt (vốn sáng hơn) rơi vào vị trí cũ. Kết quả: tế bào trên FL2 tối đi khoảng 8%, cổng cố định trên PE bắt đầu cắt hụt quần thể dương mờ. Máy vẫn báo “đạt”, nên lỗi này chỉ thấy khi so chứng tế bào hoặc so với dữ liệu cũ.</p></div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "FL2 PE (log)", "y": "Số hạt", "pops": [{"n": 3000, "x": 0.62, "sx": 0.02, "y": 0, "sy": 0, "c": "accent", "l": "Flow-Set Pro"}], "seed": 876, "note": "mô phỏng", "type": "hist", "gates": [{"rect": [0.585, 0.655, 0, 0.98], "c": "bad", "l": "vùng đích"}], "xl": ["10⁻¹", "10⁰", "10¹", "10²", "10³"]}' height="420" width="560"></canvas><figcaption>AutoSetup chỉnh điện áp để đỉnh hạt Flow-Set Pro rơi vào vùng đích (vùng đỏ) mỗi ngày.</figcaption></figure>

<div id="xemqc" class="ftb-anchor"></div>

## 3.4 Cơ sở dữ liệu QC và báo cáo trong Kaluza C

Trên Navios EX, kết quả region có thể xuất vào QC Database, gán sản phẩm QC (tên, lô, hạn dùng, giá trị đích) và xem lại (Review QC Results). Trong Kaluza C, thẻ **QC Report** dựng biểu đồ Levey-Jennings từ một QC Protocol (`*.protocol` hoặc `*.qcp`) và nhiều file dữ liệu, lưu thành `*.qcr`. Chỉ một QC Report được mở tại một thời điểm; trong pane thuộc tính chỉ sửa được Compensation, các pane khác chỉ để xem. Có xuất dữ liệu báo cáo. Chi tiết thao tác ở chương 05.

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Đọc biểu đồ Levey-Jennings mỗi sáng trong 1 phút</div>
<ol><li>Điểm hôm nay có trong ±2SD không?</li><li>Bảy đến mười điểm gần nhất có cùng nằm một phía đường trung bình không (xu hướng)?</li><li>Có bước nhảy đột ngột trùng với ngày đổi lô, bảo trì không?</li></ol>
<p>Xu hướng là dấu hiệu sớm; một điểm vượt giới hạn là dấu hiệu muộn.</p></div>

<div class="learn vidu"><div class="lh" data-k="Đọc từng ô">Đọc báo cáo QC sáng nay của một phòng xét nghiệm</div><p>Bảng gom kết quả QC đầu ngày trên một Navios EX. Giới hạn chấp nhận cụ thể lấy theo IFU và SOP của phòng. <b>Bấm vào từng dòng</b> để xem cách tính và cách hiểu.</p><div class="tbl-wrap"><table class="walk"><thead><tr><th>Kiểm tra</th><th>Hôm nay</th><th>Hôm qua</th><th>Đánh giá nhanh</th></tr></thead><tbody><tr class="r"><td>Flow-Check Pro, HPCV FS</td><td class="num">1,6%</td><td class="num">1,5%</td><td>Đạt</td></tr><tr class="x"><td colspan="4">HPCV đo độ “đều tay” của máy trên hạt giống hệt nhau (mục 3.2). FS ổn định nghĩa là dòng chảy và căn chỉnh chung tốt.</td></tr><tr class="r"><td>Flow-Check Pro, HPCV FL9</td><td class="num">4,3%</td><td class="num">2,1%</td><td>Vượt</td></tr><tr class="x"><td colspan="4">Chỉ một kênh của laser tím xấu đi, các kênh laser khác bình thường. Thứ tự: prime, chạy lại ở tốc độ thấp với hạt mới pha. Nếu FL10 (cùng laser tím) cũng xấu: nghi căn chỉnh laser tím. Nếu chỉ FL9: nghi kính lọc hoặc PMT FL9. Kéo dài thì gọi kỹ sư (mục 24.7).</td></tr><tr class="r"><td>AutoSetup, điện áp FL5</td><td>636 V</td><td>633 V</td><td>Đạt, nhưng xem xu hướng</td></tr><tr class="x"><td colspan="4">Từng ngày chỉ tăng vài volt, nhưng 10 ngày trước là 612 V: tăng đều khoảng 4%. Đây là xu hướng kiểu 10x̄ (mục 3.5): laser 488 yếu dần hoặc kính lọc bẩn. Dữ liệu vẫn chuẩn hóa vì hạt vào vùng đích, nhưng nên lên lịch kiểm tra trước khi điện áp chạm trần.</td></tr><tr class="r"><td>Flow-Set Pro, vùng đích</td><td>Đạt mọi kênh</td><td>Đạt</td><td>Đạt</td></tr><tr class="x"><td colspan="4">“Đạt vùng đích” chỉ chứng minh hạt rơi vào đúng vị trí trên trục. Nếu đã đổi lô Flow-Set Pro mà chưa nhập vùng đích mới, máy vẫn báo đạt nhưng tế bào lệch có hệ thống (mục 3.3).</td></tr><tr class="r"><td>IMMUNO-TROL, % CD4</td><td class="num">44%</td><td class="num">43%</td><td>Trong khoảng gán 38–48%</td></tr><tr class="x"><td colspan="4">Chứng tế bào đi qua toàn bộ quy trình (nhuộm, ly giải, thu, phân tích). Trong khoảng gán nghĩa là cả chuỗi hoạt động đúng cho ứng dụng này. Khoảng gán ở đây là ví dụ; dùng khoảng của đúng lô.</td></tr><tr class="r"><td>Ma trận bù đang dùng</td><td>Tạo 02/10, lô PC7 cũ</td><td class="num">—</td><td>Cần kiểm tra</td></tr><tr class="x"><td colspan="4">Phòng đã mở lô ClearLLab mới tuần này. Tandem PC7 khác lô có spillover khác, nên ma trận cũ có thể không còn đúng. Kiểm tra bằng ống _VERIFY hoặc một mẫu bình thường, so trung vị trên logicle (mục 1.9, 4.9).</td></tr></tbody></table></div><p class="src">Mọi con số trong ca này là mô phỏng để học cách đọc bảng.</p></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Trắc nghiệm nhanh</div><div class="quiz" data-src="q_ch03"></div><script id="q_ch03" type="application/json">[{"q": "Chỉ HPCV FL9 vượt, các kênh khác bình thường. Nghĩ đến gì trước?", "o": ["Dòng chảy có bọt khí", "Vấn đề riêng kênh FL9: kính lọc, PMT, hoặc căn chỉnh laser tím", "Lô Flow-Set Pro sai", "Ma trận bù sai"], "a": 1, "e": "Bọt khí làm mọi kênh cùng xấu; một kênh lẻ thường là quang học của kênh đó."}, {"q": "Điện áp FL5 tăng đều mỗi ngày nhưng AutoSetup vẫn đạt. Kết luận?", "o": ["Không cần làm gì", "Lỗi hệ thống kiểu xu hướng; lên lịch kiểm tra laser 488 và kính lọc", "Phải dừng chạy mẫu ngay", "Đổi lô hạt"], "a": 1, "e": "Xu hướng là dấu hiệu sớm; dữ liệu vẫn chuẩn hóa nhưng cần tìm nguyên nhân trước khi điện áp chạm trần."}, {"q": "Flow-Set Pro đạt vùng đích. Điều đó chứng minh gì?", "o": ["Kết quả bệnh nhân chắc chắn đúng", "Hạt rơi đúng vị trí trên trục; không chứng minh lô thuốc thử hay bù màu đúng", "Ma trận bù đúng", "Không cần chạy chứng tế bào"], "a": 1, "e": "Chứng tế bào và kiểm tra bù vẫn cần thiết."}]</script></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["File QC hằng ngày", "Flow-Check Pro", "b488"], ["QC Protocol", "*.qcp: HPCV, Mean", "accent"], ["QC Report", "*.qcr", "warn"], ["Levey-Jennings", "giới hạn spec, Westgard", "r638"]], "per": 4}'><figcaption>Dựng báo cáo QC trong Kaluza C.</figcaption></figure>

<div id="westgard" class="ftb-anchor"></div>

## 3.5 Quy tắc Westgard áp cho flow

<div class="tbl-wrap"><table>
<thead><tr><th>Quy tắc</th><th>Định nghĩa</th><th>Loại lỗi</th><th>Áp dụng trong flow</th></tr></thead>
<tbody>
<tr><td>1<sub>2s</sub></td><td>1 điểm vượt ±2SD</td><td>Cảnh báo</td><td>Xem lại, chưa từ chối</td></tr>
<tr><td>1<sub>3s</sub></td><td>1 điểm vượt ±3SD</td><td>Ngẫu nhiên</td><td>Từ chối lần chạy, chạy lại vật liệu QC</td></tr>
<tr><td>2<sub>2s</sub></td><td>2 điểm liên tiếp vượt cùng phía ±2SD</td><td>Hệ thống</td><td>Lô hạt, laser, kính lọc</td></tr>
<tr><td>R<sub>4s</sub></td><td>Chênh giữa 2 điểm liên tiếp &gt;4SD</td><td>Ngẫu nhiên</td><td>Pha hạt, bọt khí</td></tr>
<tr><td>4<sub>1s</sub></td><td>4 điểm liên tiếp vượt cùng phía ±1SD</td><td>Hệ thống</td><td>Trôi điện áp</td></tr>
<tr><td>10<sub>x̄</sub></td><td>10 điểm liên tiếp cùng phía trung bình</td><td>Hệ thống</td><td>Đổi lô, laser lão hóa</td></tr>
</tbody>
</table></div>

<div class="callout"><b class="t">Với chỉ số kiểu HPCV có giới hạn một phía</b>Điều quan trọng là giới hạn spec trên. Dùng Westgard để phát hiện xu hướng trước khi chạm spec. Với điện áp PMT sau AutoSetup, theo dõi phần trăm thay đổi so với lúc lắp đặt; tăng dần trên 10–15% là dấu hiệu cần kiểm tra quang học (ngưỡng nội bộ, không phải spec của hãng).</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Đọc một chuỗi QC điện áp FL5</div>
<p>Điện áp FL5 sau AutoSetup 10 ngày: 612, 615, 614, 618, 621, 623, 627, 629, 633, 636 V. Không điểm nào vượt giới hạn, nhưng tăng đều mỗi ngày, tổng cộng khoảng 4%. Đây là lỗi hệ thống kiểu 10x̄: laser 488 yếu dần hoặc kính lọc bẩn. AutoSetup vẫn đưa hạt về vùng đích nên dữ liệu ổn, nhưng nên lên lịch kiểm tra trước khi điện áp chạm trần.</p></div>

<figure class="fig" data-fig='{"t": "line", "series": [["", [[1, 0.1], [2, -0.4], [3, 0.3], [4, 1.2], [5, 1.4], [6, 1.1], [7, 1.3], [8, 2.3], [9, 2.4], [10, 0.2], [11, -0.3], [12, 3.3]], "b488"]], "xl": "Lần chạy", "yl": "Độ lệch (SD)", "xmin": 1, "xmax": 12, "ymin": -3.5, "ymax": 3.6, "xt": [[1, "1"], [4, "4"], [8, "8"], [12, "12"]], "yt": [[-3, "−3"], [-2, "−2"], [0, "0"], [2, "+2"], [3, "+3"]], "hl": [[2, "+2SD", "warn"], [3, "+3SD", "bad"], [-2, "−2SD", "warn"]]}'><figcaption>Ví dụ: lần 4–7 vi phạm 4₁ₛ, lần 8–9 vi phạm 2₂ₛ (lỗi hệ thống), lần 12 vi phạm 1₃ₛ (dữ liệu minh họa).</figcaption></figure>

<div id="qcsinhhoc" class="ftb-anchor"></div>

## 3.6 Chứng sinh học và ngoại kiểm

**Chứng sinh học** đi qua toàn bộ quy trình: nhuộm, ly giải, thu, phân tích. IMMUNO-TROL và IMMUNO-TROL Low có giá trị gán cho lympho T/B/NK, CD4, CD8, dùng với tetra. ClearLLab Control Cells có giá trị cho 27 marker của 4 ống ClearLLab 10C, có loại bình thường và bất thường. Khi đổi lô thuốc thử, chạy song song lô cũ và lô mới trên chứng và trên mẫu bệnh nhân.

**Ngoại kiểm (EQA/PT)**: các chương trình như UK NEQAS Leucocyte Immunophenotyping, CAP (FL, FL3, CD4, PNH, CD34), và các chương trình khu vực. Ngoài kết quả số, nhiều chương trình đánh giá diễn giải (interpretive) với file LMD hoặc ảnh, rất có giá trị để luyện cho phòng xét nghiệm mới. Khi chưa có chương trình phù hợp, trao đổi mẫu giữa hai phòng (inter-laboratory comparison) là phương án thay thế chấp nhận được theo ISO 15189.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">QC đạt trên hạt chưa chắc kết quả bệnh nhân đúng</div>
<p>Hạt không có kháng nguyên, không bị ly giải, không cần pipet chính xác. Một lô kháng thể suy giảm, một bước ly giải hỏng, hay một lỗi pipet trong đếm tuyệt đối sẽ không bao giờ lộ ra trên hạt. Chứng tế bào (IMMUNO-TROL, ClearLLab Control Cells) đi qua toàn bộ quy trình nên bắt được các lỗi đó.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["Chứng sinh học (nội kiểm)", ["IMMUNO-TROL, IMMUNO-TROL Low cho TBNK", "ClearLLab Control Cells: 27 marker, bình thường và bất thường", "Chạy mỗi ngày làm xét nghiệm, mỗi lô mới"], "ok"], ["Ngoại kiểm", ["UK NEQAS LI, CAP (FL, CD4, PNH, CD34)", "Đánh giá diễn giải bằng file LMD", "So sánh liên phòng khi chưa có chương trình"], "v405"]]}'><figcaption>Nội kiểm sinh học và ngoại kiểm.</figcaption></figure>

<div id="baotri" class="ftb-anchor"></div>

## 3.7 Bảo trì định kỳ

<div class="tbl-wrap"><table>
<thead><tr><th>Việc</th><th>Khi nào</th><th>Ghi chú từ IFU</th></tr></thead>
<tbody>
<tr><td>Vệ sinh thường quy hệ thống hút mẫu</td><td>Cuối ngày, sau chất nhuộm DNA/vital dye, khi đổi ứng dụng</td><td>Panel Cleanse.PNL; dung dịch javel 1:9 pha trong ngày</td></tr>
<tr><td>Vệ sinh đầu hút MCL và kim hút</td><td>Hằng ngày và khi cần</td><td>Quy trình Daily MCL Sample Head and Sample Probe Cleaning</td></tr>
<tr><td>Kiểm tra chất nhuộm tồn dư</td><td>Sau thuốc nhuộm mạnh</td><td>Chạy mẫu không nhuộm, so MFI</td></tr>
<tr><td>Vệ sinh 3 bộ lọc khí</td><td>Theo Maintenance Log</td><td>2 ở bên trái cytometer, 1 ở mặt sau supply cart; tắt nguồn trước</td></tr>
<tr><td>Vệ sinh bình sheath trong, bình chất tẩy</td><td>Theo Maintenance Log</td><td>Đưa máy về Idle, tháo bình</td></tr>
<tr><td>Vệ sinh bẫy chân không</td><td>Khi trên 1/4 hoặc theo lịch</td><td>Nguy cơ sinh học; mang bảo hộ</td></tr>
<tr><td>Thay bộ lọc sheath, đầu MCL, chỉnh áp suất, thay kính lọc</td><td>Theo lịch thay thế</td><td>IFU chương 12</td></tr>
</tbody>
</table></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Bảo trì phòng ngừa rẻ hơn sửa chữa</div>
<p>Bộ lọc khí bẩn làm máy nóng, laser và nguồn hoạt động kém ổn định. Đầu hút bẩn gây nhiễm chéo. Phần lớn sự cố gọi kỹ sư có thể tránh nếu làm đúng lịch bảo trì của người dùng. Ghi sổ bảo trì cũng là bằng chứng khi đánh giá chất lượng.</p></div>

<figure class="fig" data-fig='{"t": "time", "items": [["Hằng ngày", "Cleanse, vệ sinh đầu hút MCL", "accent"], ["Sau DNA dye", "kiểm tra tồn dư", "warn"], ["Theo log", "lọc khí, bình sheath, chất tẩy", "b488"], ["Khi &gt;1/4", "bẫy chân không", "r638"], ["Định kỳ", "lọc sheath, đầu MCL, áp suất", "v405"]]}'><figcaption>Lịch bảo trì theo IFU Navios EX.</figcaption></figure>

<div id="loi" class="ftb-anchor"></div>

## 3.8 Thông báo lỗi thường gặp và cách xử lý

<div class="tbl-wrap"><table>
<thead><tr><th>Thông báo</th><th>Nguyên nhân có thể</th><th>Xử lý</th></tr></thead>
<tbody>
<tr><td>System Vacuum Error / Warning</td><td>Bẫy chân không có dịch; ống chân không (mã vàng) chưa nối; lỗi phần cứng</td><td>Siết bẫy, đổ nếu quá 1/4; nối lại ống ở mặt sau cytometer; gọi kỹ sư nếu còn</td></tr>
<tr><td>Tube Up/Down Error / Warning</td><td>Không nâng/hạ được ống: nhãn bong dính thành carousel, ống nứt</td><td>Kiểm tra nhãn và ống; gọi kỹ sư nếu lặp lại</td></tr>
<tr><td>Laser Power Error / Warning (xanh, đỏ, tím)</td><td>Công suất laser ra ngoài khoảng; máy dừng thu</td><td>Tắt cytometer, khởi động lại máy trạm, bật lại; lặp lại thì gọi kỹ sư. Kiểm tra nắp quang học đã đóng chặt với cảnh báo Laser Fault</td></tr>
<tr><td>Laser Comms Warning / Initialization Error</td><td>Mất liên lạc hoặc không khởi tạo được laser</td><td>Như trên</td></tr>
<tr><td>Laser Calibration Error, Laser Window Not Set</td><td>Chưa đặt tỷ lệ dòng/công suất hoặc cửa sổ thu</td><td>Gọi kỹ sư</td></tr>
<tr><td>Waste Backpressure Error</td><td>Lọc thông hơi bình thải ướt, tắc, tuột; bình thải đầy</td><td>Đổ bình thải, khởi động lại</td></tr>
<tr><td>Waste Chamber / Waste Cube Level</td><td>Buồng thải trong hoặc bình thải quá mức</td><td>Đổ bình thải; nếu bình không đầy mà vẫn báo thì cảm biến hỏng</td></tr>
<tr><td>Sheath Low</td><td>Hết IsoFlow</td><td>Thay bình 10 L, nạp bình trong</td></tr>
<tr><td>The file contains errors (checksum)</td><td>File LMD hỏng</td><td>Khôi phục từ bản sao lưu hoặc chạy lại mẫu</td></tr>
<tr><td>BCAP service not running</td><td>Dịch vụ nền không khởi động</td><td>Khởi động lại máy trạm</td></tr>
<tr><td>The date is incorrect</td><td>Pin CMOS hỏng, ngày giờ sai</td><td>Chỉnh ngày giờ; đảm bảo tên LMD có Tag hoặc Run Number để không ghi đè</td></tr>
</tbody>
</table></div>

<p class="src">Tổng hợp từ bảng Cytometer Messages và Software Messages, IFU Navios EX chương 13. Nhật ký chi tiết ở Cytometer.log (và Cytometerarchive.log), mở được từ phần mềm hoặc Windows.</p>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Ba câu hỏi trước khi gọi kỹ sư</div>
<ol><li>Thông báo lỗi chính xác là gì? Chụp màn hình.</li><li>Lỗi xảy ra lúc nào: khởi động, AutoSetup, giữa mẫu? Lặp lại được không?</li><li>Đã làm theo bước xử lý trong IFU chưa (siết bẫy, prime, khởi động lại)?</li></ol>
<p>Gửi kèm file Cytometer.log và file LMD lúc lỗi giúp kỹ sư khoanh vùng nhanh hơn nhiều.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Vacuum Error", "bẫy chân không, ống vàng", "r638"], ["Tube Up/Down", "nhãn, ống nứt", "warn"], ["Laser Power", "khởi động lại, kỹ sư", "v405"], ["Waste Backpressure", "bình thải, lọc thông hơi", "b488"], ["Sheath Low", "thay IsoFlow", "accent"], ["Checksum", "LMD hỏng, khôi phục", "bad"], ["BCAP", "khởi động lại máy trạm", "muted"], ["Date incorrect", "pin CMOS, tên LMD", "ok"]], "per": 4}'><figcaption>Nhóm thông báo lỗi thường gặp và hướng xử lý.</figcaption></figure>

<div id="sop" class="ftb-anchor"></div>

## 3.9 Khung SOP QC hằng ngày gợi ý

<ol class="steps">
<li><div>Startup, prime, kiểm tra Status.</div></li>
<li><div>Pha Flow-Check Pro và Flow-Set Pro theo tờ hướng dẫn; ghi lô và hạn dùng.</div></li>
<li><div>AutoSetup Scheduler → nạp carousel → AutoSetup II Wizard cho mọi ứng dụng sẽ chạy trong ngày.</div></li>
<li><div>Đánh giá: HPCV đạt; hạt vào vùng đích; điện áp thay đổi so với hôm qua &lt;5% (ngưỡng nội bộ gợi ý).</div></li>
<li><div>Chạy chứng sinh học của ứng dụng (IMMUNO-TROL, ClearLLab Control Cells) khi có lịch xét nghiệm đó.</div></li>
<li><div>Xuất kết quả vào QC Database; xem Levey-Jennings; áp Westgard.</div></li>
<li><div>Người phụ trách duyệt và ký; chỉ sau đó mới chạy mẫu bệnh nhân.</div></li>
</ol>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Sáng nay gấp, bỏ AutoSetup chạy mẫu luôn được không?”</div>
<p>Nếu bỏ, điện áp lấy từ lần AutoSetup trước. Trong ngày, thay đổi thường nhỏ, nhưng không có bằng chứng QC cho lần chạy, và nếu có trôi thì không phát hiện được. Với mẫu khẩn, ưu tiên chạy ít nhất Flow-Check Pro và AutoSetup cho đúng ứng dụng cần dùng; ghi nhận nếu phải chạy khi chưa có QC.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Startup, prime", "", "accent"], ["Pha hạt", "ghi lô", "b488"], ["AutoSetup", "Scheduler → Wizard", "v405"], ["Đánh giá", "HPCV, vùng đích, điện áp", "warn"], ["Chứng sinh học", "IMMUNO-TROL, ClearLLab", "ok"], ["Xuất, duyệt", "Levey-Jennings, ký", "r638"]], "per": 3, "snake": true}'><figcaption>Khung SOP QC hằng ngày.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 3.10 Hỏi bác sĩ

<details class="ans"><summary>“Máy đạt QC hạt rồi, sao còn phải chạy IMMUNO-TROL?”</summary><p>QC hạt chỉ kiểm phần máy. Chứng tế bào kiểm cả thuốc thử (hiệu giá, tandem), ly giải, pipet, protocol phân tích và người phân tích. Một lô kháng thể suy giảm hay một lỗi pipet sẽ không bao giờ lộ ra trên hạt.</p></details>

<details class="ans"><summary>“Hôm nay điện áp FL5 tăng 40 V so với tuần trước, có ảnh hưởng kết quả không?”</summary><p>AutoSetup tăng điện áp để đưa hạt về vùng đích, nên vị trí quần thể vẫn đúng. Nhưng điện áp phải tăng nghĩa là tín hiệu tới PMT đang yếu đi: laser 488 giảm công suất, kính lọc 755 LP bẩn, hoặc lô Flow-Set Pro khác. Nếu xu hướng tiếp diễn, độ nhạy phát hiện quần thể mờ trên PC7 sẽ giảm dù vị trí trung bình đúng. Cần kiểm tra thay vì chỉ ghi nhận.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Flow-Set Pro đạt, điện áp FL5 tăng 40 V so với tuần trước. Kết quả bệnh nhân có bị ảnh hưởng không?</summary><p>Vị trí tế bào thì không, vì AutoSetup đã đưa hạt về vùng đích. Nhưng spillover phụ thuộc điện áp, nên cần kiểm tra ma trận bù, và cần tìm nguyên nhân điện áp tăng (laser, kính lọc).</p></details><details class="ans"><summary>HPCV và CV khác nhau thế nào, vì sao QC dùng HPCV?</summary><p>HPCV chỉ dựa vào nửa trên đỉnh nên không bị đuôi kéo lên; nó phản ánh căn chỉnh quang học và dòng chảy. CV bị doublet và mảnh hạt làm sai lệch.</p></details><details class="ans"><summary>Đổi lô Flow-Set Pro cần làm gì?</summary><p>Nhập vùng đích mới theo tờ hướng dẫn lô vào ứng dụng, chạy AutoSetup, so chứng tế bào với lô cũ. Quên nhập vùng đích mới làm cường độ tế bào lệch có hệ thống.</p></details></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["QC hạt kiểm", ["Laser, căn chỉnh", "Dòng chảy", "Điện áp PMT"], "b488"], ["Chứng tế bào kiểm thêm", ["Hiệu giá kháng thể, tandem", "Ly giải, pipet", "Protocol và người phân tích"], "ok"]]}'><figcaption>Vì sao cần cả QC hạt và chứng tế bào.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch03.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
