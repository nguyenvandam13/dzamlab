---
title: "24 · SOP mẫu, checklist triển khai và lộ trình đào tạo"
description: "Phụ lục dành cho đội ứng dụng khi lắp đặt và triển khai Navios EX, ClearLLab 10C và Kaluza C tại một phòng xét nghiệm mới."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "24"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phụ lục · Chương 24</div><div id="ftb-search"></div></div>

<p class="lead">Phụ lục dành cho đội ứng dụng khi lắp đặt và triển khai Navios EX, ClearLLab 10C và Kaluza C tại một phòng xét nghiệm mới. Các mẫu dưới đây là khung tham khảo, cần chỉnh theo IFU bản hiện hành, tờ hướng dẫn thuốc thử và hệ thống chất lượng của từng cơ sở.</p>

<details class="glossbox" id="thuatngu-chuong" open=""><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">2 mục mới · 73 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><div class="tbl-wrap" id="gtab-ch24"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-ups"><td>UPS</td><td><span class="full">Uninterruptible Power Supply, bộ lưu điện.</span> Thiết bị cấp điện liên tục khi mất điện, bảo vệ máy và dữ liệu.</td><td class="at"><a href="#trienkhai" title="Checklist triển khai một hệ thống mới">24.1</a></td></tr><tr id="g-iq-oq-pq"><td>IQ / OQ / PQ</td><td><span class="full">Installation / Operational / Performance Qualification.</span> Ba bước đánh giá khi lắp đặt máy: đúng lắp đặt, vận hành đạt spec, đạt hiệu năng trên quy trình thực tế.</td><td class="at"><a href="#trienkhai" title="Checklist triển khai một hệ thống mới">24.1</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="abc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-abc" title="Antibody Binding Capacity, khả năng gắn kháng thể: Số phân tử kháng thể gắn được trên một tế bào, ước lượng số kháng nguyên. Cần hạt chuẩn PE và kháng thể PE tỷ lệ 1:1.">ABC</a><a data-g="autosetup" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-autosetup" title="quy trình cài đặt tự động của Navios: Bộ protocol và wizard chỉnh điện áp cho hạt Flow-Set Pro rơi vào vùng đích, tạo ma trận bù và kiểm chứng cài đặt.">AutoSetup</a><a data-g="bitlocker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-bitlocker" title="mã hóa ổ đĩa của Windows: Tính năng mã hóa ổ cứng máy trạm để bảo vệ dữ liệu bệnh nhân.">BitLocker</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="bu-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bu-mau" title="compensation: Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.">Bù màu</a><a data-g="cal-factor" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-cal-factor" title="hệ số hạt đếm: Nồng độ hạt đếm theo lô (hạt/µL), nhập vào worklist hoặc protocol để máy tính số tuyệt đối. Trong file lưu ở từ khóa @ABSCALFACTOR.">CAL factor</a><a data-g="carryover" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-carryover" title="nhiễm chéo: Tế bào hoặc hạt của mẫu trước sót lại trong đường ống và xuất hiện trong mẫu sau; quan trọng với MRD và PNH.">Carryover</a><a data-g="casebook-clearllab" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-casebook-clearllab" title="tài liệu ca bệnh của Beckman Coulter: Bộ ca có hình ảnh phân tích panel ClearLLab 10C do Beckman Coulter phát hành, được trích nhiều trong giáo trình.">Casebook ClearLLab</a><a data-g="cd45dim" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cd45dim" title="CD45 mờ: Vùng tế bào có CD45 yếu hơn lympho trên biểu đồ CD45 × SS, nơi blast thường nằm.">CD45dim</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="composite" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-composite" title="Composite Protocol: Chức năng ghép nhiều data set (tối đa 32 ống) vào một protocol để phân tích panel nhiều ống trên một màn hình.">Composite</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="di-instrument-manager" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-di-instrument-manager" title="middleware của Data Innovations: Phần mềm trung gian kết nối máy với LIS: nhận yêu cầu, tạo External Worklist, nhận kết quả, ảnh, PDF.">DI - Instrument Manager</a><a data-g="dien-ap-pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dien-ap-pmt" title="PMT voltage: Mức điện áp đặt cho ống nhân quang; tăng điện áp làm tín hiệu cả kênh sáng hơn (dịch sang phải), đồng thời làm thay đổi giá trị spillover vào kênh đó.">Điện áp PMT</a><a data-g="don-dong-da-dong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-don-dong-da-dong" title="monoclonal / polyclonal: Đơn dòng: các tế bào xuất phát từ một tế bào gốc, cùng một chuỗi nhẹ hoặc cùng TCR; dấu hiệu tân sinh. Đa dòng: hỗn hợp, thường là phản ứng.">Đơn dòng / đa dòng</a><a data-g="duong-truong-thanh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-duong-truong-thanh" title="maturation pattern: Sự thay đổi kháng nguyên có trật tự khi tế bào trưởng thành, vẽ thành đường cong lặp lại được trên biểu đồ. Lệch khỏi đường này là dấu hiệu bất thường.">Đường trưởng thành</a><a data-g="eqa-pt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-eqa-pt" title="External Quality Assessment / Proficiency Testing, ngoại kiểm: Chương trình gửi mẫu giống nhau cho nhiều phòng xét nghiệm và so sánh kết quả. Ví dụ UK NEQAS, CAP.">EQA / PT</a><a data-g="fcs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fcs" title="Flow Cytometry Standard: Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.">FCS</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="flow-check-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-check-pro" title="hạt kiểm tra căn chỉnh của Beckman Coulter: Hạt huỳnh quang đồng nhất dùng QC hằng ngày: đo HPCV để đánh giá căn chỉnh quang học và dòng chảy.">Flow-Check Pro</a><a data-g="flow-count" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-flow-count" title="hạt đếm tuyệt đối của Beckman Coulter: Hạt huỳnh quang có nồng độ ghi theo lô (hạt/µL), thêm vào ống để tính số tế bào/µL. Chữ FC trong tên protocol là Flow-Count.">Flow-Count</a><a data-g="flow-set-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-set-pro" title="hạt chuẩn hóa cài đặt của Beckman Coulter: Hạt dùng để chỉnh điện áp PMT sao cho đỉnh rơi vào vùng đích, giúp cường độ ổn định giữa các ngày.">Flow-Set Pro</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="hematogone" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-hematogone" title="tiền thân B bình thường: Tế bào tiền B bình thường trong tủy, nhiều ở trẻ em và giai đoạn hồi phục; đi theo đường trưởng thành liên tục, cần phân biệt với blast B-ALL.">Hematogone</a><a data-g="hla-dr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hla-dr" title="kháng nguyên bạch cầu người lớp II: Có trên tế bào B, mono, tiền thân CD34+, pDC; âm trên bạch cầu hạt trưởng thành, đa số T nghỉ và APL.">HLA-DR</a><a data-g="hpcv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hpcv" title="half-peak CV: CV tính từ độ rộng của đỉnh tại nửa chiều cao (FWHM ÷ 2,354 chia cho vị trí đỉnh). Không bị đuôi ảnh hưởng; dùng cho QC hạt Flow-Check Pro.">HPCV</a><a data-g="icsh-iccs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-icsh-iccs" title="International Council for Standardization in Haematology / International Clinical Cytometry Society: Hai hội quốc tế; bộ khuyến cáo chung năm 2013 (Part I–V) là chuẩn thẩm định xét nghiệm flow.">ICSH / ICCS</a><a data-g="ifu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ifu" title="Instructions for Use, hướng dẫn sử dụng: Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.">IFU</a><a data-g="int" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-int" title="integral, diện tích xung: Tổng tín hiệu dưới xung; tỷ lệ với tổng lượng ánh sáng phát ra. Là tham số mặc định để đo cường độ.">INT</a><a data-g="iso-15189" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-iso-15189" title="tiêu chuẩn chất lượng phòng xét nghiệm y khoa: Tiêu chuẩn quốc tế về năng lực và chất lượng phòng xét nghiệm y khoa, gồm yêu cầu báo kết quả nguy cấp, thẩm định, QC.">ISO 15189</a><a data-g="isoflow" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-isoflow" title="dịch bao của Beckman Coulter: Dung dịch đệm đẳng trương dùng làm dịch bao trên Navios EX.">IsoFlow</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="khang-nguyen-khang-the" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-khang-nguyen-khang-the" title="antigen / antibody: Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.">Kháng nguyên / kháng thể</a><a data-g="kieu-hinh-mien-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kieu-hinh-mien-dich" title="immunophenotype: Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.">Kiểu hình miễn dịch</a><a data-g="levey-jennings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-levey-jennings" title="biểu đồ Levey-Jennings: Biểu đồ kết quả QC theo ngày với đường trung bình và các giới hạn ±1, 2, 3 SD; giúp thấy xu hướng trôi.">Levey-Jennings</a><a data-g="lis" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-lis" title="Laboratory Information System, hệ thống thông tin xét nghiệm: Phần mềm quản lý yêu cầu và kết quả xét nghiệm của bệnh viện; nhận kết quả từ Kaluza hoặc qua middleware.">LIS</a><a data-g="lloq" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lloq" title="Lower Limit of Quantification, giới hạn định lượng dưới: Mức thấp nhất định lượng được với độ chụm và độ đúng chấp nhận được; quy ước thường là ≥ 50 sự kiện (CV ≈ 14%).">LLOQ</a><a data-g="lmd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lmd" title="List Mode Data: Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.">LMD</a><a data-g="lod" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lod" title="Limit of Detection, giới hạn phát hiện: Mức thấp nhất mà xét nghiệm phát hiện được một cách tin cậy. Trong flow sự kiện hiếm thường quy ước là cụm ≥ 20 sự kiện.">LOD</a><a data-g="logicle" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-logicle" title="biexponential, thang hai hàm mũ: Thang lai: gần 0 gần như tuyến tính (hiển thị được giá trị âm sau bù), ở giá trị cao giống log. Thang mặc định nên dùng cho dữ liệu đã bù.">Logicle</a><a data-g="low-med-high" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-low-med-high" title="tốc độ chảy mẫu trên Navios: Ba mức tốc độ hút mẫu; QC hạt chạy ở LOW để HPCV chính xác nhất.">LOW / MED / HIGH</a><a data-g="lsa" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-lsa" title="Lymphocyte Subset Application: Ứng dụng đếm phân nhóm lympho (T, B, NK, CD4, CD8) trên Navios với panel tetraCHROME, có tính số tuyệt đối.">LSA</a><a data-g="ma-tai-lieu-beckman" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-ma-tai-lieu-beckman" title="B73085AF, C10993AH, C29335AA, B86351AA, A45429AG: Mã IFU dùng trong giáo trình: B73085AF (Navios EX), C10993AH (Kaluza C), C29335AA (addendum RUO Kaluza C), B86351AA (addendum Lymphocyte Subset Application), A45429AG (DI - Instrument Manager).">Mã tài liệu Beckman</a><a data-g="maintenance-log" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-maintenance-log" title="nhật ký bảo trì: Sổ ghi các thao tác bảo trì, vệ sinh, sự cố của máy.">Maintenance Log</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mau-so" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mau-so" title="denominator: Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.">Mẫu số</a><a data-g="mfi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mfi" title="Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị: Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.">MFI</a><a data-g="mhc-hla" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-mhc-hla" title="Major Histocompatibility Complex / Human Leukocyte Antigen: Phân tử trình diện peptide cho T. Lớp I (HLA-A, B, C) trên mọi tế bào có nhân, đọc bởi T CD8; lớp II (HLA-DR, DP, DQ) trên tế bào trình diện và tế bào non, đọc bởi T CD4.">MHC / HLA</a><a data-g="mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mrd" title="Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được: Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.">MRD</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pc5-pc5-5" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc5-pc5-5" title="PE-Cy5 / PE-Cy5.5: Tandem PE với cyanine 5 hoặc 5.5, phát ~670–700 nm, đo ở FL4.">PC5 / PC5.5</a><a data-g="pc7" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pc7" title="PE-Cy7: Tandem PE với cyanine 7, phát ~770 nm, đo ở FL5. Dễ phân rã do ánh sáng và chất cố định.">PC7</a><a data-g="pe" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pe" title="phycoerythrin: Protein huỳnh quang lấy từ tảo đỏ, kích thích 488 nm, phát vàng cam (~575 nm), đo ở FL2. Một trong những chất nhuộm sáng nhất.">PE</a><a data-g="peak" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-peak" title="chiều cao xung: Giá trị lớn nhất của xung. So INT với PEAK giúp nhận ra hai tế bào dính nhau.">PEAK</a><a data-g="pnh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pnh" title="Paroxysmal Nocturnal Hemoglobinuria, tiểu huyết sắc tố kịch phát ban đêm: Bệnh tế bào gốc mắc phải do đột biến PIGA làm mất neo GPI; hồng cầu thiếu CD55, CD59 nên bị bổ thể phá hủy.">PNH</a><a data-g="prime" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-prime" title="mồi dịch: Thao tác đẩy dịch qua đường ống để loại bọt khí trước khi chạy.">Prime</a><a data-g="proservice-rms" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-proservice-rms" title="dịch vụ giám sát từ xa của Beckman Coulter: Phần cứng và dịch vụ kết nối máy với Beckman Coulter để hỗ trợ và giám sát từ xa.">PROService RMS</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="qc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-qc" title="Quality Control, kiểm soát chất lượng: Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).">QC</a><a data-g="report-sheet" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-report-sheet" title="trang báo cáo: Trang dàn biểu đồ, bảng và chữ của Kaluza để in hoặc xuất PDF.">Report sheet</a><a data-g="sop" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-sop" title="Standard Operating Procedure, quy trình thao tác chuẩn: Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.">SOP</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="tbnk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-tbnk" title="T, B và NK: Xét nghiệm đếm ba quần thể lympho chính (T, B, NK) và phân nhóm CD4, CD8, kèm số tuyệt đối.">TBNK</a><a data-g="tham-dinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tham-dinh" title="validation: Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).">Thẩm định</a><a data-g="time" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-time" title="tham số thời gian: Tham số ghi thời điểm mỗi sự kiện được thu. Vẽ TIME × một kênh để phát hiện dòng chảy không ổn định (bọt khí, tắc) và loại đoạn xấu.">TIME</a><a data-g="trung-vi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-trung-vi" title="median: Giá trị nằm giữa khi xếp các tế bào theo cường độ: một nửa cao hơn, một nửa thấp hơn. Không bị đuôi và giá trị âm sau bù kéo lệch, nên dùng để đánh giá bù và báo MFI.">Trung vị</a><a data-g="vung-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-vung-dich" title="target channel: Vị trí kênh (trên trục) mà đỉnh hạt Flow-Set Pro phải rơi vào sau khi chỉnh điện áp; giữ cho cường độ ổn định theo thời gian.">Vùng đích</a><a data-g="westgard" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-03#g-westgard" title="quy tắc Westgard: Bộ quy tắc đọc biểu đồ QC (ví dụ 1-3s, 2-2s, R-4s, 10x) để quyết định chấp nhận hay loại một lần chạy.">Westgard</a><a data-g="xac-nhan" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-02#g-xac-nhan" title="verification: Kiểm tra một xét nghiệm IVD dùng đúng chỉ định vẫn đạt hiệu năng nhà sản xuất công bố khi chạy tại phòng xét nghiệm.">Xác nhận</a></div></div></details>

<div id="trienkhai" class="ftb-anchor"></div>

## 24.1 Checklist triển khai một hệ thống mới

<div class="tbl-wrap"><table>
<thead><tr><th>Giai đoạn</th><th>Hạng mục</th><th>Bằng chứng cần lưu</th></tr></thead>
<tbody>
<tr><td rowspan="4">Trước lắp đặt</td><td>Mặt bằng: diện tích, nguồn điện ổn định, UPS, nhiệt độ phòng ổn định (spec laser đo khi nhiệt độ dao động ≤±5°F so với lúc căn chỉnh)</td><td>Biên bản khảo sát</td></tr>
<tr><td>Mạng và LIS: cổng kết nối, thư mục chia sẻ cho DI - Instrument Manager, quy định an ninh mạng (PROService RMS)</td><td>Sơ đồ kết nối</td></tr>
<tr><td>Thuốc thử, vật tư: IsoFlow, dung dịch vệ sinh, Flow-Check Pro, Flow-Set Pro, Flow-Count, ClearLLab 10C, Compensation Kit/Beads, Control Cells, ống 12 × 75</td><td>Danh mục, lô, hạn dùng</td></tr>
<tr><td>Nhân sự: người phụ trách, người vận hành, quản trị hệ thống</td><td>Danh sách, phân quyền</td></tr>
<tr><td rowspan="3">Lắp đặt (IQ)</td><td>Lắp máy, cấu hình 3 laser/10 màu, kính lọc mặc định</td><td>Phiếu lắp đặt của kỹ sư</td></tr>
<tr><td>Phần mềm Navios EX, Kaluza C, tài khoản người dùng, BitLocker, diệt virus</td><td>Cấu hình, khóa khôi phục được lưu an toàn</td></tr>
<tr><td>Ngày giờ hệ thống, quy tắc tên LMD (Tag/Run Number)</td><td>Ảnh chụp cài đặt</td></tr>
<tr><td rowspan="3">Vận hành (OQ)</td><td>Flow-Check Pro: HPCV đạt spec trên mọi kênh</td><td>Báo cáo QC</td></tr>
<tr><td>Carryover, ổn định trong ngày</td><td>Dữ liệu và kết luận</td></tr>
<tr><td>Tạo ứng dụng AutoSetup bằng Application Definition Wizard; nhập vùng đích theo lô Flow-Set Pro</td><td>File Settings, protocol _STAND</td></tr>
<tr><td rowspan="4">Hiệu năng (PQ) và xác nhận</td><td>Ma trận bù ClearLLab bằng Compensation Kit/Beads; kiểm chứng trên ống đủ màu</td><td>File bù, sheet Verification</td></tr>
<tr><td>Chứng ClearLLab Control Cells đạt khoảng gán</td><td>Bảng kết quả</td></tr>
<tr><td>Xác nhận trên mẫu bệnh nhân (mục 24.4)</td><td>Báo cáo xác nhận</td></tr>
<tr><td>Protocol Kaluza C: dựng, khóa phiên bản, kiểm thử</td><td>File protocol có số phiên bản</td></tr>
<tr><td>Bàn giao</td><td>Đào tạo, đánh giá năng lực, SOP, kế hoạch ngoại kiểm</td><td>Hồ sơ đào tạo có chữ ký</td></tr>
</tbody>
</table></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">IQ, OQ, PQ như kiểm tra một chiếc xe mới</div>
<p><b>IQ</b> (lắp đặt): xe giao đúng mẫu, đủ phụ tùng, lắp đúng chỗ. <b>OQ</b> (vận hành): nổ máy, phanh, đèn hoạt động đúng thông số. <b>PQ</b> (hiệu năng): chạy thực tế trên đường của mình, với tải của mình, vẫn đạt yêu cầu. Bỏ PQ là chỉ biết xe chạy tốt ở nhà máy.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Trước lắp đặt", "mặt bằng, mạng, vật tư", "muted"], ["IQ", "lắp đặt, phần mềm", "b488"], ["OQ", "QC, AutoSetup", "accent"], ["PQ / xác nhận", "bù màu, chứng, mẫu", "warn"], ["Bàn giao", "đào tạo, SOP", "ok"]], "per": 5, "h": 84}'><figcaption>Năm giai đoạn triển khai hệ thống mới.</figcaption></figure>

<div id="sop1" class="ftb-anchor"></div>

## 24.2 SOP mẫu: vận hành hằng ngày Navios EX

<div class="formula">
1. Mục đích: bảo đảm Navios EX sẵn sàng và đạt QC trước khi chạy mẫu bệnh nhân.<br/>
2. Phạm vi: mọi ứng dụng trên Navios EX tại phòng [tên].<br/>
3. Trách nhiệm: kỹ thuật viên ca sáng thực hiện; người phụ trách duyệt.<br/>
4. Vật liệu: IsoFlow, dung dịch vệ sinh, javel 5–6% không mùi, nước cất, Flow-Check Pro, Flow-Set Pro (ghi lô), ống 12 × 75.<br/>
5. Quy trình:<br/>
 5.1 Kiểm tra sheath, chất tẩy, bình thải, bẫy chân không (&lt;1/4).<br/>
 5.2 Bật supply cart → cytometer → máy trạm; đăng nhập.<br/>
 5.3 Kiểm tra Status: laser, áp suất, chân không không cảnh báo.<br/>
 5.4 Prime.<br/>
 5.5 AutoSetup Scheduler: chọn các ứng dụng chạy trong ngày; nạp carousel; AutoSetup II Wizard.<br/>
 5.6 Tiêu chí chấp nhận: HPCV Flow-Check Pro đạt (FS, FL1–4 &lt;2%; FL5 &lt;2,5%; FL6–8 &lt;3%; FL9–10 &lt;4%); Flow-Set Pro vào vùng đích; điện áp thay đổi &lt;5% so với ngày trước (ngưỡng nội bộ).<br/>
 5.7 Không đạt: prime, pha lại hạt, chạy lại ở tốc độ LOW; vẫn không đạt thì vệ sinh thường quy, chạy lại; vẫn không đạt thì dừng, báo người phụ trách, gọi kỹ sư.<br/>
 5.8 Xuất kết quả QC; xem Levey-Jennings; áp Westgard.<br/>
 5.9 Ghi Maintenance Log.<br/>
6. Cuối ngày: chạy Cleanse.PNL (ống 1: 2 mL javel 1:9 pha trong ngày; ống 2–4: 2 mL nước cất hoặc IsoFlow); tắt máy theo IFU; lau bề mặt bằng javel rồi cồn 70%.<br/>
7. Hồ sơ: báo cáo QC, Maintenance Log, phiếu xử lý sự cố.<br/>
8. Tài liệu liên quan: IFU Navios EX B73085AF chương 6, 7, 11, 13.
</div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“SOP mẫu này dùng luôn được không?”</div>
<p>SOP mẫu là khung. Phòng phải điền tên vật tư đúng lô và nơi để, ngưỡng nội bộ (ví dụ thay đổi điện áp chấp nhận), người chịu trách nhiệm, và quy trình khi QC không đạt. Một SOP chưa ai trong phòng làm theo được thì chưa phải SOP.</p></div>

<figure class="fig" data-fig='{"t": "time", "items": [["Sáng", "kiểm tra dịch, bật máy", "accent"], ["+15 phút", "prime, Status", "b488"], ["+30 phút", "AutoSetup, đánh giá", "warn"], ["+60 phút", "chứng sinh học, duyệt", "ok"], ["Cả ngày", "chạy mẫu", "v405"], ["Cuối ngày", "Cleanse, tắt máy, log", "muted"]]}'><figcaption>Dòng thời gian một ngày vận hành (thời lượng gợi ý).</figcaption></figure>

<div id="sop2" class="ftb-anchor"></div>

## 24.3 SOP mẫu: phân tích ClearLLab 10C trên Kaluza C

### Quy ước tên cổng và màu

<div class="tbl-wrap"><table>
<thead><tr><th>Cổng</th><th>Biểu đồ</th><th>Đầu vào</th><th>Màu đề xuất</th><th>Thứ tự ưu tiên màu</th></tr></thead>
<tbody>
<tr><td>Time</td><td>TIME × CD45</td><td>Ungated</td><td>—</td><td>—</td></tr>
<tr><td>Singlets</td><td>FS INT × FS PEAK</td><td>Time</td><td>—</td><td>—</td></tr>
<tr><td>Cells</td><td>FS × SS</td><td>Singlets</td><td>—</td><td>—</td></tr>
<tr><td>CD45+</td><td>CD45 × SS</td><td>Cells</td><td>—</td><td>—</td></tr>
<tr><td>Blast (CD45dim)</td><td>CD45 × SS</td><td>CD45+</td><td>Đỏ</td><td>1</td></tr>
<tr><td>Abn (quần thể bất thường khác)</td><td>Tùy</td><td>Tùy</td><td>Tím</td><td>2</td></tr>
<tr><td>Ly</td><td>CD45 × SS</td><td>CD45+</td><td>Xanh dương</td><td>5</td></tr>
<tr><td>Mo</td><td>CD45 × SS</td><td>CD45+</td><td>Xanh lục</td><td>4</td></tr>
<tr><td>Gr</td><td>CD45 × SS</td><td>CD45+</td><td>Cam</td><td>6</td></tr>
<tr><td>B (CD19+)</td><td>CD19 × SS</td><td>CD45+</td><td>Xanh nhạt</td><td>3</td></tr>
</tbody>
</table></div>

### Trình tự đọc

<ol class="steps">
<li><div>Mở Composite Protocol phiên bản hiện hành; nạp 4 file của mẫu; kiểm tra Link compensation.</div></li>
<li><div>Sheet QC mẫu: TIME ổn định, singlets, số sự kiện trên cổng Cells đạt tối thiểu theo SOP.</div></li>
<li><div>Sheet CD45: mô tả tỷ lệ Ly, Mo, Gr, CD45dim, CD45−; chỉnh cổng nếu cần, ghi lại lý do.</div></li>
<li><div>Ống M2 → M1: blast (CD34, CD117, HLA-DR, CD38, CD13, CD33, CD123, CD15, CD19, CD7, CD11b, CD64), đường trưởng thành hạt và mono.</div></li>
<li><div>Ống B: B đa dòng hay đơn dòng; CD5, CD10, CD200, CD20, CD38; hematogone.</div></li>
<li><div>Ống T: T (CD4/CD8, CD2, CD5, CD7, CD3 cường độ), NK, TCRγδ, CD34+ CD7+.</div></li>
<li><div>Tổng hợp quần thể bất thường; quyết định ống bổ sung.</div></li>
<li><div>Điền Report Sheet; người duyệt kiểm tra; ký Approval Signature.</div></li>
<li><div>Lưu Composite Analysis với tên theo quy ước; sao lưu.</div></li>
</ol>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Quy ước màu là ngôn ngữ chung</div>
<p>Khi cả phòng dùng cùng một màu cho cùng một quần thể (blast đỏ, B xanh nhạt…), ai mở file cũng đọc được ngay, và báo cáo của các người khác nhau nhìn giống nhau. Thứ tự ưu tiên màu quyết định màu nào hiện khi một sự kiện thuộc nhiều cổng: quần thể quan trọng nhất phải có ưu tiên cao nhất.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Blast (CD45dim)", "đỏ · ưu tiên 1", "r638"], ["Abn", "tím · 2", "v405"], ["B (CD19+)", "xanh nhạt · 3", "b488"], ["Mo", "xanh lục · 4", "ok"], ["Ly", "xanh dương · 5", "accent"], ["Gr", "cam · 6", "warn"]], "per": 3}'><figcaption>Quy ước màu và thứ tự ưu tiên màu của cổng.</figcaption></figure>

<div id="xacnhan" class="ftb-anchor"></div>

## 24.4 Kế hoạch xác nhận ClearLLab 10C (khung)

<div class="tbl-wrap"><table>
<thead><tr><th>Mục</th><th>Cách làm gợi ý</th><th>Tiêu chí chấp nhận (do phòng định trước)</th></tr></thead>
<tbody>
<tr><td>Phạm vi</td><td>Máu, tủy, hạch theo chỉ định của thuốc thử; Navios EX 3L/10C</td><td>—</td></tr>
<tr><td>Chứng</td><td>ClearLLab Control Cells bình thường và bất thường, nhiều ngày</td><td>% các marker trong khoảng gán</td></tr>
<tr><td>Độ phù hợp</td><td>Mẫu bệnh nhân bình thường và bệnh lý phủ các nhóm chính (B, T, tủy), so với phương pháp đang dùng hoặc phòng tham chiếu hoặc chẩn đoán cuối</td><td>Phù hợp kết luận phân loại</td></tr>
<tr><td>Độ lặp lại</td><td>Một mẫu bệnh, nhuộm lặp trong ngày và giữa ngày</td><td>% quần thể chính trong giới hạn định trước</td></tr>
<tr><td>Giữa người đọc</td><td>Hai người phân tích độc lập cùng bộ file</td><td>Phù hợp kết luận</td></tr>
<tr><td>Độ ổn định mẫu</td><td>Nếu dùng ngoài khoảng thời gian trong tờ hướng dẫn</td><td>Không thay đổi kết luận</td></tr>
<tr><td>Kết luận</td><td>Báo cáo xác nhận có chữ ký</td><td>—</td></tr>
</tbody>
</table></div>

<p class="src">Khung theo tinh thần ICSH/ICCS 2013 và ISO 15189; cỡ mẫu và tiêu chí do phòng xét nghiệm xác định và ghi rõ lý do (chương 06).</p>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tiêu chí chấp nhận phải định trước</div>
<p>Đặt trước khi làm: “độ phù hợp kết luận với phương pháp hiện hành ≥90% trên ít nhất 40 mẫu; % blast khác biệt ≤5 điểm phần trăm ở mẫu có blast ≥20%”. Nếu đặt tiêu chí sau khi có kết quả, xác nhận mất giá trị. Con số trong ví dụ chỉ để minh họa; phòng tự định theo yêu cầu của mình.</p></div>

<figure class="fig" data-fig='{"t": "cycle", "n": [["Phạm vi", "muted"], ["Chứng", "ok"], ["Độ phù hợp", "b488"], ["Độ lặp lại", "accent"], ["Giữa người đọc", "warn"], ["Báo cáo, ký", "r638"]], "center": "Xác nhận ClearLLab"}'><figcaption>Các thành phần kế hoạch xác nhận.</figcaption></figure>

<div id="daotao" class="ftb-anchor"></div>

## 24.5 Lộ trình đào tạo nhân viên ứng dụng

<div class="tbl-wrap"><table>
<thead><tr><th>Cấp độ</th><th>Năng lực</th><th>Chương</th><th>Đánh giá</th></tr></thead>
<tbody>
<tr><td>1. Vận hành</td><td>Khởi động, QC, chạy mẫu, vệ sinh, xử lý lỗi thường gặp</td><td>01, 02, 03, 21</td><td>Thực hành có giám sát; Bộ 1 câu hỏi ≥80%</td></tr>
<tr><td>2. Thiết lập</td><td>AutoSetup, tạo ứng dụng, bù màu, ma trận Kaluza, protocol Kaluza</td><td>04, 05</td><td>Tự tạo ma trận và protocol đạt kiểm chứng</td></tr>
<tr><td>3. Triển khai</td><td>Thiết kế ống bổ sung, xác nhận/thẩm định, SOP, đào tạo khách hàng</td><td>06, 07, 24</td><td>Hoàn thành một hồ sơ xác nhận</td></tr>
<tr><td>4. Đọc kết quả cùng bác sĩ</td><td>Mô tả kiểu hình, nhận ra bẫy, đề xuất xét nghiệm bổ sung, ngôn ngữ báo cáo</td><td>08–15, 19, 20</td><td>Phân tích 20 case Casebook; Bộ 2 ≥80%</td></tr>
<tr><td>5. Chuyên biệt</td><td>TBNK/CD4, CD34, PNH, MRD</td><td>16, 17, 18</td><td>Thực hiện dãy pha loãng xác định LOD/LLOQ</td></tr>
</tbody>
</table></div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Đánh giá mỗi cấp bằng việc làm được, không bằng đọc xong</div>
<ul><li>Cấp 1: tự khởi động, chạy QC, xử lý một lỗi thường gặp trước mặt người hướng dẫn.</li><li>Cấp 2: tự tạo ma trận bù và protocol Kaluza cho một ứng dụng.</li><li>Cấp 3: lập kế hoạch xác nhận cho một phòng giả định.</li><li>Cấp 4: đọc 10 case Casebook, viết báo cáo, so đáp án.</li><li>Cấp 5: trình bày một case MRD hay PNH trước nhóm.</li></ul></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["1. Vận hành", "01–03, 21", "accent"], ["2. Thiết lập", "04–05", "b488"], ["3. Triển khai", "06–07, 24", "v405"], ["4. Đọc kết quả", "08–15, 19–20", "warn"], ["5. Chuyên biệt", "16–18", "r638"]], "per": 5, "h": 84}'><figcaption>Năm cấp độ đào tạo nhân viên ứng dụng.</figcaption></figure>

<div id="hotro" class="ftb-anchor"></div>

## 24.6 Mẫu phiếu tiếp nhận yêu cầu hỗ trợ kỹ thuật

<div class="formula">
Khách hàng / phòng xét nghiệm: ……  Máy: Navios EX, số serial ……  Phần mềm: Navios EX …… / Kaluza C ……<br/>
Mô tả sự cố: ……  Thời điểm: ……  Ứng dụng / panel: ……<br/>
Thông báo lỗi (nguyên văn): ……  Đính kèm: Cytometer.log, file LMD, ảnh màn hình, báo cáo QC<br/>
QC ngày đó: HPCV ……  Điện áp sau AutoSetup ……  Lô Flow-Check Pro / Flow-Set Pro ……<br/>
Đã làm: prime / vệ sinh / chạy lại QC / khởi động lại ……<br/>
Phân loại: máy / thuốc thử / bù màu / phân tích / LIS  Mức độ: dừng xét nghiệm / ảnh hưởng một phần / câu hỏi<br/>
Hành động và kết quả: ……  Người xử lý: ……  Ngày đóng: ……
</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Phiếu hỗ trợ tốt tiết kiệm một chuyến đi</div>
<p>Thông báo lỗi nguyên văn, Cytometer.log, file LMD và báo cáo QC ngày đó thường đủ để khoanh vùng sự cố từ xa: lỗi máy, thuốc thử, bù màu hay phần mềm. Thiếu chúng, kỹ sư phải đến tận nơi chỉ để thu thập thông tin.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Tiếp nhận", "mô tả, thông báo lỗi", "accent"], ["Thu thập", "Cytometer.log, LMD, QC", "b488"], ["Phân loại", "máy, thuốc thử, bù, LIS", "warn"], ["Xử lý", "", "v405"], ["Đóng phiếu", "", "ok"]], "per": 5, "h": 84}'><figcaption>Luồng xử lý yêu cầu hỗ trợ kỹ thuật.</figcaption></figure>

<div id="faq" class="ftb-anchor"></div>

## 24.7 Hỏi đáp nhanh khi hỗ trợ khách hàng

<div class="tbl-wrap"><table>
<thead><tr><th>Câu hỏi của phòng xét nghiệm</th><th>Hướng trả lời</th><th>Chương</th></tr></thead>
<tbody>
<tr><td>QC sáng nay FL9 HPCV 4,3%</td><td>Prime, tốc độ LOW, hạt mới; nếu chỉ kênh laser tím vượt, nghi căn chỉnh laser tím hoặc kính lọc; gọi kỹ sư nếu kéo dài</td><td>03</td></tr>
<tr><td>Quần thể T có CD200 “dương mờ”</td><td>Kiểm tra bù PC5.5 → PC7 trên logicle</td><td>04, 13</td></tr>
<tr><td>Kaluza báo lỗi khi tạo Compensation Composite</td><td>Kiểm tra các file cùng bộ kênh, vai trò không trùng, cổng FS/SS có sự kiện</td><td>04</td></tr>
<tr><td>Thuật toán LSA không chạy</td><td>Kiểm tra tên tham số FCS (CD45-FITC, CD4-RD1…), laser đỏ/tím đã tắt</td><td>16</td></tr>
<tr><td>CD4 tuyệt đối dao động</td><td>Pipet đảo ngược, trộn hạt, số hạt ≥1 000, CAL factor đúng lô</td><td>16</td></tr>
<tr><td>Kết quả LIS không về</td><td>Kiểm tra thư mục chia sẻ, đường dẫn XLSX/PDF trong DI - Instrument Manager, View Log trong Kaluza</td><td>05</td></tr>
<tr><td>Bác sĩ hỏi “tỷ lệ blast flow thấp hơn tủy đồ”</td><td>Giải thích mẫu số, pha loãng, blast CD34 âm</td><td>07, 10</td></tr>
</tbody>
</table></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Khách hàng báo “T có CD200 dương mờ”. Bước đầu tiên?</summary><p>Kiểm tra bù PC5.5 → PC7 trên logicle bằng trung vị: so CD200 của T (CD5 sáng) với NK hoặc quần thể CD5 âm.</p></details><details class="ans"><summary>Khách hàng báo “CD45 tuần này sáng hơn 30%”. Thứ tự kiểm tra?</summary><p>Flow-Set Pro đạt vùng đích không → đổi lô kháng thể hay ClearLLab không → đổi quy trình, thể tích, thời gian không → mới nghĩ tới máy.</p></details><details class="ans"><summary>Bác sĩ hồi sức muốn theo dõi HLA-DR trên mono. Tư vấn thế nào?</summary><p>Đây là bài toán ABC: cần hạt PE chuẩn, kháng thể PE 1:1 bão hòa, ống nền, quy trình thẩm định riêng; không dùng MFI từ panel thường quy.</p></details></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["QC / máy", 30, "b488"], ["Bù màu", 25, "warn"], ["Kaluza / protocol", 20, "accent"], ["LSA, CD4", 10, "v405"], ["LIS", 8, "muted"], ["Diễn giải", 7, "r638"]], "unit": "%", "max": 35, "lw": 170}'><figcaption>Ví dụ phân bố loại yêu cầu hỗ trợ (minh họa để lập kế hoạch đào tạo; thay bằng số liệu thật của phòng).</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch24.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
