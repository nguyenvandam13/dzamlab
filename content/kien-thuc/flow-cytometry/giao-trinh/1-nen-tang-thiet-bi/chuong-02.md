---
title: "02 · Navios EX: phần cứng, phần mềm và vận hành hằng ngày"
description: "Nhiều sai lệch trên dữ liệu flow không bắt nguồn từ hỏng hóc phần cứng mà từ cài đặt và thao tác vận hành hằng ngày: protocol dựng sai, worklist thiếu hệ số hạt đếm, bỏ bước khởi động."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "02"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần I · Chương 02</div><div id="ftb-search"></div></div>

<p class="lead">Nhiều sai lệch trên dữ liệu flow không bắt nguồn từ hỏng hóc phần cứng mà từ cài đặt và thao tác vận hành hằng ngày: protocol dựng sai, worklist thiếu hệ số hạt đếm, bỏ bước khởi động. Chương này mô tả cấu tạo, mục đích sử dụng, cấu trúc protocol/panel/worklist, các chế độ chạy mẫu, khởi động và tắt máy, và những cài đặt ảnh hưởng trực tiếp tới chất lượng dữ liệu. Nội dung biên soạn từ IFU Navios EX (PN B73085AF, 08/2021); thông số cụ thể luôn đối chiếu lại với IFU bản đang dùng tại phòng xét nghiệm.</p>

<details class="glossbox" id="thuatngu-chuong"><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">31 mục mới · 60 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><input aria-label="Lọc thuật ngữ của chương" class="search" data-target="gtab-ch02" placeholder="Lọc trong bảng này…" type="search"/><div class="tbl-wrap" id="gtab-ch02"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-pn"><td>PN</td><td><span class="full">Part Number, mã sản phẩm.</span> Mã đặt hàng của Beckman Coulter cho máy, thuốc thử hoặc linh kiện.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-ma-tai-lieu-beckman"><td>Mã tài liệu Beckman</td><td><span class="full">B73085AF, C10993AH, C29335AA, B86351AA, A45429AG.</span> Mã IFU dùng trong giáo trình: B73085AF (Navios EX), C10993AH (Kaluza C), C29335AA (addendum RUO Kaluza C), B86351AA (addendum Lymphocyte Subset Application), A45429AG (DI - Instrument Manager).</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-worklist"><td>Worklist</td><td><span class="full">danh sách công việc.</span> Danh sách mẫu cần chạy: mỗi dòng gắn panel, vị trí ống, Sample ID, điều kiện dừng, CAL factor.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-fda-510-k"><td>FDA 510(k)</td><td><span class="full">hồ sơ cho phép lưu hành của FDA Hoa Kỳ.</span> Thủ tục FDA cho phép một thiết bị y tế lưu hành vì tương đương thiết bị đã có. Ví dụ K183592 là số hồ sơ của ClearLLab 10C.</td><td class="at"><a href="#mucdich" title="Mục đích sử dụng và cấu hình">2.1</a></td></tr><tr id="g-tetrachrome"><td>tetraCHROME</td><td><span class="full">CYTO-STAT tetraCHROME.</span> Bộ thuốc thử 4 màu của Beckman Coulter cho đếm phân nhóm lympho (45-4-8-3 và 45-56-19-3).</td><td class="at"><a href="#mucdich" title="Mục đích sử dụng và cấu hình">2.1</a></td></tr><tr id="g-mcl"><td>MCL</td><td><span class="full">Multi-tube Carousel Loader, bộ nạp ống dạng mâm xoay.</span> Bộ nạp tự động của Navios EX chứa nhiều ống trên một carousel, có trộn ống trước khi hút. Khác với MCL là u lympho tế bào áo nang (xem mục MCL bệnh học).</td><td class="at"><a href="#mucdich" title="Mục đích sử dụng và cấu hình">2.1</a></td></tr><tr id="g-carryover"><td>Carryover</td><td><span class="full">nhiễm chéo.</span> Tế bào hoặc hạt của mẫu trước sót lại trong đường ống và xuất hiện trong mẫu sau; quan trọng với MRD và PNH.</td><td class="at"><a href="#hieunang" title="Đặc tính hiệu năng theo spec">2.2</a></td></tr><tr id="g-flowpage"><td>FlowPAGE</td><td><span class="full">mẫu trang in của Navios.</span> Mẫu báo cáo in hoặc xuất PDF trong phần mềm Navios EX.</td><td class="at"><a href="#hieunang" title="Đặc tính hiệu năng theo spec">2.2</a></td></tr><tr id="g-acquisition-manager"><td>Acquisition Manager</td><td><span class="full">trình quản lý thu nhận.</span> Cửa sổ của phần mềm Navios EX để dựng worklist, chạy và theo dõi quá trình thu mẫu.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-sample-id"><td>Sample ID</td><td><span class="full">mã mẫu.</span> Mã định danh mẫu ghi vào worklist và header file; dùng để ghép với LIS.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-cal-factor"><td>CAL factor</td><td><span class="full">hệ số hạt đếm.</span> Nồng độ hạt đếm theo lô (hạt/µL), nhập vào worklist hoặc protocol để máy tính số tuyệt đối. Trong file lưu ở từ khóa @ABSCALFACTOR.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-lis"><td>LIS</td><td><span class="full">Laboratory Information System, hệ thống thông tin xét nghiệm.</span> Phần mềm quản lý yêu cầu và kết quả xét nghiệm của bệnh viện; nhận kết quả từ Kaluza hoặc qua middleware.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-ewl"><td>EWL</td><td><span class="full">External Worklist, worklist ngoài.</span> Worklist do LIS/middleware tạo và gửi xuống máy, thay vì nhập tay.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-listmode"><td>Listmode</td><td><span class="full">dữ liệu dạng danh sách.</span> Cách lưu mọi tham số của từng sự kiện (mỗi hàng một tế bào, mỗi cột một tham số), khác với chỉ lưu histogram.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-as-ten-ung-dung"><td>AS (tên ứng dụng)</td><td><span class="full">AutoSetup application.</span> Tiền tố tên ứng dụng AutoSetup trên Navios, ví dụ AS LSA TBNK FC.</td><td class="at"><a href="#protocol" title="Protocol, panel, worklist">2.3</a></td></tr><tr id="g-baseline-offset"><td>Baseline Offset</td><td><span class="full">bù đường nền.</span> Chức năng điện tử trừ mức nền của tín hiệu trước khi số hóa.</td><td class="at"><a href="#cytocontrol" title="Cytometer Control: các thẻ cài đặt">2.4</a></td></tr><tr id="g-lsa"><td>LSA</td><td><span class="full">Lymphocyte Subset Application.</span> Ứng dụng đếm phân nhóm lympho (T, B, NK, CD4, CD8) trên Navios với panel tetraCHROME, có tính số tuyệt đối.</td><td class="at"><a href="#cytocontrol" title="Cytometer Control: các thẻ cài đặt">2.4</a></td></tr><tr id="g-nd-filter"><td>ND filter</td><td><span class="full">neutral density filter, kính lọc giảm sáng.</span> Kính làm giảm đều cường độ ánh sáng, dùng khi tín hiệu FS quá mạnh.</td><td class="at"><a href="#cytocontrol" title="Cytometer Control: các thẻ cài đặt">2.4</a></td></tr><tr id="g-stop-condition"><td>Stop condition</td><td><span class="full">điều kiện dừng.</span> Quy định khi nào máy dừng thu một ống: theo số sự kiện trong một cổng, theo thời gian hoặc thể tích.</td><td class="at"><a href="#cytocontrol" title="Cytometer Control: các thẻ cài đặt">2.4</a></td></tr><tr id="g-composite"><td>Composite</td><td><span class="full">Composite Protocol.</span> Chức năng ghép nhiều data set (tối đa 32 ống) vào một protocol để phân tích panel nhiều ống trên một màn hình.</td><td class="at"><a href="#acqman" title="Acquisition Manager và đặt tên file">2.5</a></td></tr><tr id="g-sop"><td>SOP</td><td><span class="full">Standard Operating Procedure, quy trình thao tác chuẩn.</span> Văn bản mô tả từng bước thực hiện một công việc tại phòng xét nghiệm.</td><td class="at"><a href="#acqman" title="Acquisition Manager và đặt tên file">2.5</a></td></tr><tr id="g-maintenance-log"><td>Maintenance Log</td><td><span class="full">nhật ký bảo trì.</span> Sổ ghi các thao tác bảo trì, vệ sinh, sự cố của máy.</td><td class="at"><a href="#khoidong" title="Khởi động hằng ngày">2.6</a></td></tr><tr id="g-xac-nhan"><td>Xác nhận</td><td><span class="full">verification.</span> Kiểm tra một xét nghiệm IVD dùng đúng chỉ định vẫn đạt hiệu năng nhà sản xuất công bố khi chạy tại phòng xét nghiệm.</td><td class="at"><a href="#chaymau" title="Chạy mẫu: ba chế độ">2.7</a></td></tr><tr id="g-listmode-playback"><td>Listmode Playback</td><td><span class="full">phát lại dữ liệu listmode.</span> Chức năng mở lại file LMD trên phần mềm Navios để phân tích lại với protocol khác.</td><td class="at"><a href="#playback" title="Listmode Playback và bù màu sau thu (ListComp)">2.8</a></td></tr><tr id="g-listcomp-quickcomp"><td>ListComp / QuickCOMP</td><td><span class="full">công cụ bù sau thu của Navios.</span> Các tiện ích của phần mềm Navios EX để tạo hoặc áp ma trận bù cho file đã thu.</td><td class="at"><a href="#playback" title="Listmode Playback và bù màu sau thu (ListComp)">2.8</a></td></tr><tr id="g-automator"><td>AutoMATOR</td><td><span class="full">chạy file hàng loạt.</span> Tiện ích của Navios EX đưa nhiều file qua một protocol để in hoặc xuất kết quả.</td><td class="at"><a href="#playback" title="Listmode Playback và bù màu sau thu (ListComp)">2.8</a></td></tr><tr id="g-di-instrument-manager"><td>DI - Instrument Manager</td><td><span class="full">middleware của Data Innovations.</span> Phần mềm trung gian kết nối máy với LIS: nhận yêu cầu, tạo External Worklist, nhận kết quả, ảnh, PDF.</td><td class="at"><a href="#xuat" title="FlowPAGE, xuất dữ liệu và lưu trữ">2.9</a></td></tr><tr id="g-bitlocker"><td>BitLocker</td><td><span class="full">mã hóa ổ đĩa của Windows.</span> Tính năng mã hóa ổ cứng máy trạm để bảo vệ dữ liệu bệnh nhân.</td><td class="at"><a href="#nguoidung" title="Người dùng, quyền và an toàn dữ liệu">2.10</a></td></tr><tr id="g-proservice-rms"><td>PROService RMS</td><td><span class="full">dịch vụ giám sát từ xa của Beckman Coulter.</span> Phần cứng và dịch vụ kết nối máy với Beckman Coulter để hỗ trợ và giám sát từ xa.</td><td class="at"><a href="#nguoidung" title="Người dùng, quyền và an toàn dữ liệu">2.10</a></td></tr><tr id="g-iso-15189"><td>ISO 15189</td><td><span class="full">tiêu chuẩn chất lượng phòng xét nghiệm y khoa.</span> Tiêu chuẩn quốc tế về năng lực và chất lượng phòng xét nghiệm y khoa, gồm yêu cầu báo kết quả nguy cấp, thẩm định, QC.</td><td class="at"><a href="#nguoidung" title="Người dùng, quyền và an toàn dữ liệu">2.10</a></td></tr><tr id="g-ldt"><td>LDT</td><td><span class="full">Laboratory Developed Test, xét nghiệm do phòng tự phát triển.</span> Xét nghiệm phòng xét nghiệm tự xây dựng hoặc sửa đổi so với chỉ định IVD; phải tự thẩm định đầy đủ.</td><td class="at"><a href="#hoibacsi" title="Hỏi bác sĩ">2.13</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="autosetup" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-autosetup" title="quy trình cài đặt tự động của Navios: Bộ protocol và wizard chỉnh điện áp cho hạt Flow-Set Pro rơi vào vùng đích, tạo ma trận bù và kiểm chứng cài đặt.">AutoSetup</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="bu-mau" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bu-mau" title="compensation: Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.">Bù màu</a><a data-g="bulk-lysis" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-bulk-lysis" title="ly giải thể tích lớn: Ly giải hồng cầu của nhiều mL mẫu trước khi nhuộm, để thu đủ hàng triệu tế bào cho MRD.">Bulk lysis</a><a data-g="chat-nhuom-huynh-quang" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-huynh-quang" title="fluorochrome: Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.">Chất nhuộm huỳnh quang</a><a data-g="chat-nhuom-tandem" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chat-nhuom-tandem" title="tandem dye: Hai chất nhuộm ghép đôi (ví dụ PE với Cy7): chất thứ nhất hấp thụ laser rồi chuyển năng lượng sang chất thứ hai để phát ở bước sóng xa hơn. Dễ phân rã do ánh sáng, nhiệt và chất cố định.">Chất nhuộm tandem</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="co-dinh-lam-tham" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-co-dinh-lam-tham" title="fixation / permeabilization: Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.">Cố định / làm thấm</a><a data-g="cong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cong" title="gate / region: Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.">Cổng</a><a data-g="cv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cv" title="coefficient of variation, hệ số biến thiên: SD chia cho trung bình, nhân 100%. Cho biết độ phân tán tương đối; dùng cho độ chụm và độ rộng đỉnh.">CV</a><a data-g="cytosettings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cytosettings" title="cài đặt máy: Tập điện áp, gain, discriminator và ma trận bù lưu kèm protocol.">Cytosettings</a><a data-g="dau-do" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dau-do" title="detector: Bộ phận biến ánh sáng thành tín hiệu điện (photodiode hoặc PMT). Mỗi đầu dò huỳnh quang trên Navios được đặt tên FL1 đến FL10.">Đầu dò</a><a data-g="decade" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-decade" title="một bậc mười: Một khoảng trên thang log mà giá trị tăng 10 lần, ví dụ 1→10 hoặc 100→1 000.">Decade</a><a data-g="dien-ap-pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dien-ap-pmt" title="PMT voltage: Mức điện áp đặt cho ống nhân quang; tăng điện áp làm tín hiệu cả kênh sáng hơn (dịch sang phải), đồng thời làm thay đổi giá trị spillover vào kênh đó.">Điện áp PMT</a><a data-g="discriminator" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-discriminator" title="trigger, ngưỡng ghi nhận: Ngưỡng tín hiệu (thường trên FS) mà xung phải vượt thì máy mới ghi thành sự kiện. Đặt trước khi thu, khác với cổng đặt sau khi thu.">Discriminator</a><a data-g="dna" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-dna" title="deoxyribonucleic acid: Vật chất di truyền trong nhân; nhuộm DNA định lượng dùng cho chu kỳ tế bào và đánh giá sống/chết.">DNA</a><a data-g="do-nhay-mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-do-nhay-mrd" title="sensitivity: Tỷ lệ thấp nhất phát hiện được: LOD = số sự kiện cụm tối thiểu ÷ tổng tế bào đánh giá. Ví dụ 20 ÷ 2 000 000 = 10⁻⁵.">Độ nhạy (MRD)</a><a data-g="don-dong-da-dong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-don-dong-da-dong" title="monoclonal / polyclonal: Đơn dòng: các tế bào xuất phát từ một tế bào gốc, cùng một chuỗi nhẹ hoặc cùng TCR; dấu hiệu tân sinh. Đa dòng: hỗn hợp, thường là phản ứng.">Đơn dòng / đa dòng</a><a data-g="doublet" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doublet" title="tế bào đôi: Hai tế bào (hoặc hai hạt) đi qua laser cùng lúc nên bị ghi thành một sự kiện; loại bằng cổng INT × PEAK hoặc INT × TOF.">Doublet</a><a data-g="fcs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fcs" title="Flow Cytometry Standard: Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.">FCS</a><a data-g="fl1-fl10" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fl1-fl10" title="fluorescence channel 1–10: Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.">FL1 … FL10</a><a data-g="flow-cytometry" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-cytometry" title="đếm tế bào dòng chảy: Kỹ thuật cho từng tế bào lơ lửng trong dịch đi qua chùm laser, đo ánh sáng tán xạ và huỳnh quang của từng tế bào để biết kích thước, độ phức tạp và các kháng nguyên mang trên tế bào.">Flow cytometry</a><a data-g="flow-check-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-check-pro" title="hạt kiểm tra căn chỉnh của Beckman Coulter: Hạt huỳnh quang đồng nhất dùng QC hằng ngày: đo HPCV để đánh giá căn chỉnh quang học và dòng chảy.">Flow-Check Pro</a><a data-g="flow-set-pro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-flow-set-pro" title="hạt chuẩn hóa cài đặt của Beckman Coulter: Hạt dùng để chỉnh điện áp PMT sao cho đỉnh rơi vào vùng đích, giúp cường độ ổn định giữa các ngày.">Flow-Set Pro</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="gain" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-gain" title="hệ số khuếch đại: Hệ số nhân tín hiệu sau đầu dò; trên thang log, gain ×2 dịch mọi quần thể sang phải một đoạn bằng nhau.">Gain</a><a data-g="header" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-header" title="phần đầu file: Phần đầu file LMD/FCS chứa từ khóa (keyword): tên mẫu, ngày, cài đặt máy, ma trận bù, hệ số hạt đếm.">Header</a><a data-g="hpcv" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hpcv" title="half-peak CV: CV tính từ độ rộng của đỉnh tại nửa chiều cao (FWHM ÷ 2,354 chia cho vị trí đỉnh). Không bị đuôi ảnh hưởng; dùng cho QC hạt Flow-Check Pro.">HPCV</a><a data-g="ifu" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ifu" title="Instructions for Use, hướng dẫn sử dụng: Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.">IFU</a><a data-g="int" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-int" title="integral, diện tích xung: Tổng tín hiệu dưới xung; tỷ lệ với tổng lượng ánh sáng phát ra. Là tham số mặc định để đo cường độ.">INT</a><a data-g="isoflow" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-isoflow" title="dịch bao của Beckman Coulter: Dung dịch đệm đẳng trương dùng làm dịch bao trên Navios EX.">IsoFlow</a><a data-g="ivd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ivd" title="In Vitro Diagnostic, chẩn đoán in vitro: Sản phẩm được cơ quan quản lý cho phép dùng để chẩn đoán trên bệnh phẩm người, theo đúng chỉ định ghi trên nhãn.">IVD</a><a data-g="kaluza-c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kaluza-c" title="phần mềm phân tích lâm sàng của Beckman Coulter: Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.">Kaluza C</a><a data-g="kro" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kro" title="Krome Orange: Chất nhuộm của Beckman kích thích bằng laser 405 nm, phát ~528 nm, đo ở FL10. Khá mờ, nên dùng cho CD45 (kháng nguyên rất nhiều). Tương đương BV510, V500.">KrO</a><a data-g="levey-jennings" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-levey-jennings" title="biểu đồ Levey-Jennings: Biểu đồ kết quả QC theo ngày với đường trung bình và các giới hạn ±1, 2, 3 SD; giúp thấy xu hướng trôi.">Levey-Jennings</a><a data-g="lmd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lmd" title="List Mode Data: Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.">LMD</a><a data-g="lod" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-lod" title="Limit of Detection, giới hạn phát hiện: Mức thấp nhất mà xét nghiệm phát hiện được một cách tin cậy. Trong flow sự kiện hiếm thường quy ước là cụm ≥ 20 sự kiện.">LOD</a><a data-g="mean" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mean" title="trung bình số học: Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.">Mean</a><a data-g="mfi" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mfi" title="Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị: Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.">MFI</a><a data-g="mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mrd" title="Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được: Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.">MRD</a><a data-g="navios-ex" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-navios-ex" title="máy flow cytometry của Beckman Coulter: Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.">Navios EX</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="panel" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-panel" title="file .PNL (trên Navios): Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.">Panel</a><a data-g="pb" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pb" title="Pacific Blue: Chất nhuộm kích thích bằng laser tím 405 nm, phát ~455 nm, đo ở FL9. Tương đương BV421, V450.">PB</a><a data-g="peak" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-peak" title="chiều cao xung: Giá trị lớn nhất của xung. So INT với PEAK giúp nhận ra hai tế bào dính nhau.">PEAK</a><a data-g="photodiode" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-photodiode" title="đầu dò bán dẫn: Đầu dò quang không khuếch đại, dùng cho tín hiệu mạnh như FS.">Photodiode</a><a data-g="pmt" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pmt" title="photomultiplier tube, ống nhân quang: Đầu dò khuếch đại tín hiệu ánh sáng yếu hàng triệu lần; điện áp đặt vào PMT quyết định độ khuếch đại của kênh.">PMT</a><a data-g="pnh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-pnh" title="Paroxysmal Nocturnal Hemoglobinuria, tiểu huyết sắc tố kịch phát ban đêm: Bệnh tế bào gốc mắc phải do đột biến PIGA làm mất neo GPI; hồng cầu thiếu CD55, CD59 nên bị bổ thể phá hủy.">PNH</a><a data-g="poisson" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-poisson" title="phân bố Poisson: Quy luật của phép đếm sự kiện hiếm ngẫu nhiên: nếu đếm được n sự kiện thì SD ≈ √n và CV ≈ 1/√n.">Poisson</a><a data-g="prime" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-prime" title="mồi dịch: Thao tác đẩy dịch qua đường ống để loại bọt khí trước khi chạy.">Prime</a><a data-g="protocol" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-protocol" title="file .PRO: Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.">Protocol</a><a data-g="qc" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-qc" title="Quality Control, kiểm soát chất lượng: Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).">QC</a><a data-g="ss" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ss" title="Side scatter, tán xạ bên (còn viết SSC): Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.">SS</a><a data-g="su-kien" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-su-kien" title="event: Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.">Sự kiện</a><a data-g="tham-dinh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tham-dinh" title="validation: Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).">Thẩm định</a><a data-g="time" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-time" title="tham số thời gian: Tham số ghi thời điểm mỗi sự kiện được thu. Vẽ TIME × một kênh để phát hiện dòng chảy không ổn định (bọt khí, tắc) và loại đoạn xấu.">TIME</a><a data-g="tof" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tof" title="time of flight, độ rộng xung: Thời gian tế bào đi qua chùm laser; tế bào đôi có TOF dài hơn tế bào đơn.">TOF</a><a data-g="vung-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-vung-dich" title="target channel: Vị trí kênh (trên trục) mà đỉnh hạt Flow-Set Pro phải rơi vào sau khi chỉnh điện áp; giữ cho cường độ ổn định theo thời gian.">Vùng đích</a><a data-g="w2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-w2" title="chế độ FS Wide Enhanced trên Navios EX: Một trong ba chế độ thu tán xạ thẳng (Wide, Narrow, Wide Enhanced), dùng cho vật dưới micron như vi hạt, túi ngoại bào (nghiên cứu); spec phân giải hạt 0,4 µm đo ở chế độ này.">W2</a></div></div></details>

<div id="mucdich" class="ftb-anchor"></div>

## 2.1 Mục đích sử dụng và cấu hình

Theo IFU, Navios EX là máy flow cytometry dùng cho chẩn đoán in vitro, đo định tính và định lượng các đặc tính sinh học và vật lý của tế bào và hạt, cho kết quả đa tham số. Máy đo đồng thời FS, SS và tối đa 10 chất nhuộm huỳnh quang với 3 laser rắn 488, 638 và 405 nm. Người dùng dự kiến là nhân viên phòng xét nghiệm chuyên nghiệp.

Có các cấu hình 2 laser / 6 màu, 2 laser / 8 màu và 3 laser / 10 màu. Panel ClearLLab 10C chỉ được cho phép trên cấu hình 3 laser / 10 màu của Navios và Navios EX (FDA 510(k) K183592). Phần mềm ứng dụng tetra (CYTO-STAT tetraCHROME) chạy 4 màu trên laser xanh.

<div class="tbl-wrap"><table>
<thead><tr><th>Bộ phận</th><th>Đặc tính chính</th></tr></thead>
<tbody>
<tr><td>Laser</td><td>488 nm 55 mW; 638 nm 50 mW; 405 nm 80 mW (tùy chọn). Phần mềm điều khiển, giám sát công suất riêng từng laser.</td></tr>
<tr><td>Kích thước điểm chùm tia</td><td>Xanh 8 × 80 µm; đỏ 11 × 160 µm; tím 6 × 150 µm. Các chùm cách nhau 90 µm (±4,5).</td></tr>
<tr><td>Cảm biến</td><td>FS và SS là photodiode; FL1–FL10 là PMT, dải 200–800 nm.</td></tr>
<tr><td>Khuếch đại</td><td>PMT 250–1000 V bước 1; gain FL 1,0 hoặc 2,0; FS/SS gain 1–750 kèm vernier.</td></tr>
<tr><td>Biến đổi</td><td>Log số 4 decade cho FS, SS, FL; True View 6 decade với tới 2 decade âm.</td></tr>
<tr><td>Bù màu phần cứng</td><td>0–100%, bước 0,1%, cho FL1–FL10.</td></tr>
<tr><td>Discriminator</td><td>Một discriminator cho mỗi lần thu, trên bất kỳ tín hiệu nào, tối đa 1000.</td></tr>
<tr><td>Tốc độ chảy</td><td>Low ≈ 10, Medium ≈ 30, High ≈ 70 µL/phút.</td></tr>
<tr><td>Dịch sheath</td><td>825 mL/giờ khi thu; 0 khi chờ.</td></tr>
<tr><td>Nạp mẫu</td><td>MCL (multi-tube carousel loader) với carousel 32 ống, có đầu đọc mã vạch; chế độ ống đơn (single tube).</td></tr>
</tbody>
</table></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Cấu hình máy và cấu hình panel</div>
<p>“Navios EX 3 laser 10 màu” là cấu hình phần cứng: có bao nhiêu laser và đầu dò. “Panel 10 màu” là số chất nhuộm trong một ống. Một máy 10 màu vẫn chạy được panel 4 màu (tetraCHROME); nhưng một panel 10 màu không chạy được trên máy cấu hình 6 màu. Khi tư vấn khách hàng, hỏi rõ họ đang nói phần cứng hay xét nghiệm.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["2 laser / 6 màu", "488 + 638 nm", "b488"], ["2 laser / 8 màu", "488 + 638 nm", "r638"], ["3 laser / 10 màu", "488 + 638 + 405 nm; cấu hình cho ClearLLab 10C", "v405"], ["tetra 4 màu", "laser xanh, LSA", "accent"]], "per": 4, "h": 86}'><figcaption>Các cấu hình Navios EX và ứng dụng tương ứng.</figcaption></figure>

<div id="hieunang" class="ftb-anchor"></div>

## 2.2 Đặc tính hiệu năng theo spec

<div class="tbl-wrap"><table>
<thead><tr><th>Chỉ tiêu</th><th>Giá trị trong IFU</th><th>Ý nghĩa thực hành</th></tr></thead>
<tbody>
<tr><td>Nhiễm chéo hạt (carryover)</td><td>&lt;0,1% giữa hai mẫu khi có 10 000 sự kiện trong cổng (tốc độ thấp)</td><td>Với MRD và PNH độ nhạy cao, chạy ống rửa giữa mẫu bệnh nặng và mẫu theo dõi; xác định carryover thực tế của phòng</td></tr>
<tr><td>Nhiễm chéo thuốc nhuộm</td><td>Dịch chuyển MFI trung bình &lt;10% ở mẫu không nhuộm sau 3 ống nhuộm Acridine Orange và vệ sinh thường quy</td><td>Chất nhuộm DNA và vital dye cần vệ sinh sau dùng</td></tr>
<tr><td>Tốc độ thu</td><td>&gt;90% hiệu suất ở 25 000 sự kiện/giây với đủ 12 tham số</td><td>Tốc độ thực tế nên thấp hơn nhiều để giữ CV</td></tr>
<tr><td>Thông lượng</td><td>82 ống/giờ (10 000 bạch cầu, tốc độ cao, in 1 FlowPAGE); 89 ống/giờ ở 10 000 sự kiện/giây với dừng ở 100 000 sự kiện</td><td>Lập kế hoạch nhân lực ca trực</td></tr>
<tr><td>HPCV Flow-Check Pro</td><td>FS &lt;2%; FL1–FL4 &lt;2%; FL5 &lt;2,5%; FL6–FL8 &lt;3,0%; FL9–FL10 &lt;4,0%</td><td>Giới hạn chấp nhận QC hằng ngày</td></tr>
<tr><td>Ổn định laser</td><td>Kênh trung bình Flow-Check Pro lệch ≤±5% so với trung bình 8 ngày và trong 24 giờ, nhiệt độ ±5°F</td><td>Theo dõi trên Levey-Jennings</td></tr>
<tr><td>Phân giải tán xạ</td><td>Tách hạt 0,4 µm khỏi nhiễu (chế độ W2, tốc độ thấp)</td><td>Ứng dụng nghiên cứu hạt nhỏ</td></tr>
</tbody>
</table></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Carryover 0,1% có ý nghĩa gì với MRD</div>
<p>Chạy một mẫu leukemia mới chẩn đoán có 80% blast, ngay sau đó chạy mẫu MRD. Nếu 0,1% sự kiện của mẫu trước còn sót lại, mẫu MRD 500 000 tế bào có thể nhận thêm vài trăm “blast” giả, cao hơn nhiều ngưỡng LOD 20 sự kiện. Vì vậy với MRD và PNH, chạy ống rửa giữa hai mẫu, và tự đo carryover thực tế của phòng thay vì chỉ dựa spec.</p></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["FS", 2, "muted"], ["FL1–FL4", 2, "b488"], ["FL5", 2.5, "b488"], ["FL6–FL8", 3, "r638"], ["FL9–FL10", 4, "v405"]], "unit": "%", "max": 4.5, "dp": 1}'><figcaption>Giới hạn HPCV Flow-Check Pro theo spec Navios EX.</figcaption></figure>

<div id="protocol" class="ftb-anchor"></div>

## 2.3 Protocol, panel, worklist

Ba khái niệm tổ chức công việc trên phần mềm Navios EX:

<div class="grid3">
<div class="card"><h4>Protocol (*.PRO)</h4><p>Tập hợp mọi cài đặt cho một ống: cấu hình hiển thị, tên và cấu hình tham số, region, gate, màu, thống kê, cài đặt máy (cytosettings) và mẫu báo cáo FlowPAGE. Dùng cho thu nhận hoặc phân tích lại.</p></div>
<div class="card"><h4>Panel (*.PNL)</h4><p>Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Kéo panel vào Acquisition Manager để tạo dòng công việc.</p></div>
<div class="card"><h4>Worklist</h4><p>Danh sách mẫu, mỗi dòng gắn panel, số carousel, vị trí ống, Sample ID, điều kiện dừng, CAL factor. Có thể tạo tay, nhập từ LIS (External Worklist) hoặc đọc mã vạch.</p></div>
</div>

### Protocol đặc biệt theo tên

<div class="tbl-wrap"><table>
<thead><tr><th>Tiền tố tên</th><th>Hành vi</th></tr></thead>
<tbody>
<tr><td><code>QC</code> (chữ hoa)</td><td>Ghi đè định dạng xuất dữ liệu: kết quả xuất thành một dòng; nếu xuất ra Excel thì nối dần thành bảng trên một trang tính. Dùng cho dõi QC theo thời gian.</td></tr>
<tr><td><code>Cleanse</code></td><td>Ghi đè tùy chọn lưu LMD: không ghi file listmode khi chạy xong. Dùng cho panel vệ sinh.</td></tr>
<tr><td><code>AS</code></td><td>Thành phần của ứng dụng AutoSetup (Flow-Set Pro <code>_STAND</code>, ống bù màu <code>_FL01…</code>, <code>_VERIFY</code>, <code>Settings</code>, <code>_APP</code>). Không xóa protocol nào gắn với tên ứng dụng.</td></tr>
</tbody>
</table></div>

<div class="callout warn"><b class="t">Khóa protocol</b>Protocol IVD (ví dụ tetra) bị khóa để giảm sai lệch chủ quan. Protocol mở khóa (User-Modified) cho phép chỉnh cổng và điều kiện dừng nhưng phòng xét nghiệm chịu trách nhiệm thẩm định. Quyền Lock/Unlock Protocols được cấp theo hồ sơ người dùng trong System Administrator.</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Protocol, panel, worklist như món ăn, thực đơn và danh sách bàn</div>
<p><b>Protocol</b> là công thức cho một món (một ống): tham số nào, cài đặt máy, biểu đồ, cổng, điều kiện dừng. <b>Panel</b> là thực đơn một bữa (một mẫu): ống B, T, M1, M2 của ClearLLab. <b>Worklist</b> là danh sách bàn đặt món hôm nay: mẫu nào, ở vị trí nào trên carousel, chạy panel nào.</p>
<p>Sửa protocol là sửa công thức, ảnh hưởng mọi mẫu dùng nó về sau. Sửa worklist chỉ ảnh hưởng lần chạy hôm nay.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Worklist", "Sample ID, carousel, vị trí, CAL factor", "accent"], ["Panel (*.PNL)", "chuỗi protocol của một mẫu", "b488"], ["Protocol (*.PRO)", "cài đặt máy, tham số, cổng, FlowPAGE", "v405"], ["File LMD", "dữ liệu một ống", "warn"]], "per": 4}'><figcaption>Quan hệ worklist → panel → protocol → file LMD.</figcaption></figure>

<div id="cytocontrol" class="ftb-anchor"></div>

## 2.4 Cytometer Control: các thẻ cài đặt

<div class="tbl-wrap"><table>
<thead><tr><th>Thẻ / mục</th><th>Nội dung</th><th>Lưu ý thực hành</th></tr></thead>
<tbody>
<tr><td>Acquisition Setup</td><td>Điện áp, gain từng tham số; bật/tắt laser; discriminator; tốc độ chảy; Baseline Offset</td><td>Tắt laser đỏ và tím khi chạy protocol LSA mở khóa (addendum B86351AA)</td></tr>
<tr><td>Parameter Setup</td><td>Chọn tín hiệu (INT/PEAK/TOF, lin/log), góc FS (Collection Angle), ND filter</td><td>Tối đa 16 tham số; tham số bù màu phải nằm trong 16 tham số đầu của Base Protocol</td></tr>
<tr><td>Compensation</td><td>Ma trận bù FLx–%FLy, nút Clear All</td><td>Ma trận ở đây là của lần chạy protocol gần nhất, không nhất thiết là của một file LMD cụ thể</td></tr>
<tr><td>Stop condition</td><td>Dừng theo số sự kiện trong một cổng, tổng sự kiện, thời gian</td><td>Đặt theo cổng sinh học (ví dụ 6 000 lympho), không theo tổng sự kiện</td></tr>
<tr><td>Status / Cytometer Log</td><td>Công suất laser, áp suất, nhiệt độ, nhật ký thông báo</td><td>Khi gửi kỹ sư, đính kèm file Cytometer.log</td></tr>
<tr><td>Get Cytosettings from Protocol / LMD</td><td>Lấy lại cài đặt từ protocol hoặc từ một file LMD</td><td>Dùng để tái lập điều kiện thu của một mẫu cũ</td></tr>
</tbody>
</table></div>

**Baseline Offset** là hiệu chỉnh đường nền điện tử, cho phép hiển thị giá trị âm nhỏ quanh 0 để bù màu đúng. Thông báo “Baseline Offset - not available” khi khởi động phần mềm nghĩa là không tìm thấy file nhị phân 3mv; khởi động lại máy trạm, nếu còn thì gọi kỹ sư. Với LSA, đây là một trong hai thông báo lỗi tetra còn hoạt động (cùng với “Invalid Protocol”).

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Cytosettings là ảnh chụp vị trí các núm vặn</div>
<p>Mọi điện áp, gain, discriminator, ma trận bù lúc thu được lưu vào file LMD như một ảnh chụp trạng thái máy. Khi một kết quả lạ cần điều tra, mở header file (View FCS Header) là biết lúc đó máy được đặt thế nào, không cần nhớ hay đoán.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Đổi điện áp tay rồi chạy, giờ kết quả lệch”</div>
<p>Protocol của ứng dụng AutoSetup lấy điện áp từ file Settings sau mỗi lần chạy AutoSetup. Đổi tay trong Cytometer Control làm mất chuẩn hóa: hạt không còn vào vùng đích, cổng cố định lệch, và ma trận bù (phụ thuộc điện áp) không còn đúng. Cách xử lý: trả về Settings của ứng dụng, chạy lại AutoSetup nếu cần, rồi chạy lại mẫu.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Acquisition Setup", "điện áp, gain, laser, discriminator, tốc độ", "b488"], ["Parameter Setup", "INT/PEAK/TOF, lin/log, góc FS", "v405"], ["Compensation", "ma trận FLx − %FLy", "accent"], ["Stop condition", "sự kiện trong cổng, thời gian", "warn"], ["Status / Log", "laser, áp suất, Cytometer.log", "r638"], ["Get Cytosettings", "từ protocol hoặc LMD", "muted"]], "per": 3}'><figcaption>Các thẻ chính của Cytometer Control.</figcaption></figure>

<div id="acqman" class="ftb-anchor"></div>

## 2.5 Acquisition Manager và đặt tên file

Acquisition Manager là bảng điều phối thu nhận. Các cột có thể tùy biến: Panel, Protocol, Plots, Region Sources, Cytosettings, Parameter Names, Tube ID, Carousel No. và Location, Sample ID, CAL Factor, LMD File Name, Stop Condition và Stop Value, các trường P1–P32. Người dùng có thể sắp lại cột, xóa dòng, xử lý tràn carousel.

Đặt tên file LMD trong *Workspace Preferences → LMD File Name*: ghép 10 ký tự đầu của Sample ID 1–4, User ID, Tube ID, Run Number, ngày, giờ, Tag Number. IFU cảnh báo phải chọn ít nhất Tag Number hoặc Run Number để tên file luôn duy nhất; ghi đè file listmode có thể làm sai kết quả. Đây cũng là nguyên nhân hay gặp khi ngày giờ Windows sai (pin CMOS hỏng) và máy báo “The date is incorrect”.

<div class="callout"><b class="t">Quy ước đặt tên đề xuất cho phòng xét nghiệm</b>
<code>[MãBệnhPhẩm]_[Panel]_[Ống]_[Ngày]_[Tag]</code>, ví dụ <code>BM24-0815_CLL10C_B_20261118_0003.LMD</code>. Dễ tìm lại khi bác sĩ yêu cầu phân tích lại, dễ ghép vào Kaluza Composite.</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Quy ước đặt tên file nên thống nhất trước khi chạy mẫu đầu tiên</div>
<ol><li>Chọn cấu trúc: mã bệnh nhân hoặc mã mẫu, ngày, tên ống, ví dụ <code>M2026-0412_20261118_B.LMD</code>.</li><li>Cài trong Workspace Preferences → LMD File Name để máy tự sinh tên.</li><li>Không dùng dấu tiếng Việt và ký tự đặc biệt trong tên file, để tránh lỗi khi chuyển sang Kaluza, LIS hay ổ lưu trữ.</li><li>Ghi quy ước vào SOP để người mới cũng làm giống.</li></ol></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Sample ID", "10 ký tự đầu", "accent"], ["Panel / Tube", "B, T, M1, M2", "b488"], ["Ngày", "yyyymmdd", "v405"], ["Tag / Run", "bắt buộc để không trùng", "bad"]], "per": 4, "h": 70}'><figcaption>Ghép tên file LMD theo Workspace Preferences; luôn có Tag hoặc Run Number.</figcaption></figure>

<div id="khoidong" class="ftb-anchor"></div>

## 2.6 Khởi động hằng ngày

<ol class="steps">
<li><div><b>Kiểm tra dịch và chất thải:</b> mức sheath (IsoFlow) bên ngoài và bên trong, dung dịch vệ sinh, bình thải. Bẫy chân không (vacuum trap) trên supply cart phải chặt và chứa dưới 1/4.</div></li>
<li><div><b>Bật nguồn</b> supply cart, cytometer, rồi máy trạm. Đăng nhập Windows, rồi đăng nhập phần mềm Navios EX (Multi-User Sign On, chọn Connect hoặc Work Offline).</div></li>
<li><div><b>Chờ laser ổn định</b> và kiểm tra Status: không có cảnh báo laser, áp suất, chân không.</div></li>
<li><div><b>Prime</b> hệ thống. IFU yêu cầu prime sau Daily Startup, sau khi máy nghỉ lâu, và khi đặt carousel mới mà tán xạ trông bất thường.</div></li>
<li><div><b>Chạy QC hằng ngày</b>: Flow-Check Pro, rồi AutoSetup với Flow-Set Pro cho từng ứng dụng (chương 03).</div></li>
<li><div><b>Ghi vào Maintenance Log</b> điện tử.</div></li>
</ol>

Navios EX hỗ trợ **Cytometer Auto Startup** theo lịch, giúp máy sẵn sàng khi nhân viên đến. Có thể xóa lịch tự động khởi động và tắt máy trong cùng menu.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Khởi động máy như kiểm tra xe trước khi chạy</div>
<p>Kiểm tra dầu nước (sheath, dung dịch vệ sinh, bình thải), nổ máy chờ ấm (laser ổn định), xem đồng hồ báo lỗi (Status). Bỏ qua bước nào thì lỗi sẽ hiện ra ở giữa lúc chạy mẫu bệnh nhân, lúc đó tốn kém hơn nhiều.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Kiểm tra dịch", "sheath, chất tẩy, thải, bẫy chân không", "accent"], ["Bật nguồn", "cart → cytometer → máy trạm", "b488"], ["Status", "laser, áp suất", "v405"], ["Prime", "bắt buộc sau startup", "warn"], ["QC hằng ngày", "Flow-Check, AutoSetup", "ok"], ["Maintenance Log", "ghi nhận", "muted"]], "per": 3, "snake": true}'><figcaption>Trình tự khởi động hằng ngày.</figcaption></figure>

<div id="chaymau" class="ftb-anchor"></div>

## 2.7 Chạy mẫu: ba chế độ

<div class="tbl-wrap"><table>
<thead><tr><th>Chế độ</th><th>Cách làm</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td>MCL tự động</td><td>Tạo/kiểm tra worklist, nạp carousel, nhập số carousel, chạy. Máy trộn, hút, chạy lần lượt, đọc mã vạch</td><td>Thường quy, nhiều mẫu</td></tr>
<tr><td>MCL thủ công</td><td>Dùng carousel nhưng điều khiển từng ống</td><td>Khi cần theo dõi từng ống, mẫu ít tế bào</td></tr>
<tr><td>Single Tube</td><td>Đặt từng ống vào vị trí ống đơn</td><td>Mẫu khẩn, dịch não tủy, ống không vừa carousel</td></tr>
</tbody>
</table></div>

Trước khi chạy: xác nhận đã làm Daily Startup, đã làm Daily QC, đã đặt Acquisition Options và quy tắc tên LMD. Ống 12 × 75 mm, huyền dịch đơn bào, tối ưu khoảng 5 × 10⁶ tế bào/mL. Nhãn mã vạch dán đúng vị trí và không bong; nhãn dính vào thành carousel là nguyên nhân hay gặp của lỗi *Tube Up/Down*.

### Xem lại dữ liệu ngay sau thu

<ul class="tight">
<li>Biểu đồ TIME: có gián đoạn, bọt khí, tắc không.</li>
<li>FS/SS: quần thể ở vị trí như mọi ngày; nếu lệch, kiểm tra protocol có lấy đúng cytosettings của AutoSetup hôm nay không.</li>
<li>Số sự kiện trong cổng dừng có đạt không. Mẫu ít tế bào có thể dừng do hết thể tích.</li>
<li>CD45 × SS: các quần thể chính tách rõ.</li>
</ul>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">MCL thủ công và Single Tube</div>
<p>Cả hai đều cho phép kiểm soát từng ống, nhưng MCL thủ công vẫn dùng carousel (có trộn, hút tự động), còn Single Tube là đặt ống vào vị trí ống đơn, phù hợp với ống không vừa carousel và mẫu rất ít như dịch não tủy. Với mẫu ít tế bào, đặt điều kiện dừng theo thể tích hoặc thời gian thay vì số sự kiện để không hút cạn mẫu.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "carousel"}'><figcaption>Ví dụ bố trí carousel MCL 32 vị trí trong một ngày chạy.</figcaption></figure>

<div id="playback" class="ftb-anchor"></div>

## 2.8 Listmode Playback và bù màu sau thu (ListComp)

**Listmode Playback** cho phân tích lại file LMD với protocol khác. **List Comp Setup** cho bù màu lại dữ liệu đã thu: với file 20-bit, ma trận có thể lấy từ protocol lúc chạy (lưu trong LMD), từ file bù màu (\*.cmp) tạo trong ListComp, hoặc từ Kaluza. IFU lưu ý: listmode compensation phải dùng protocol lúc chạy hoặc protocol có tham số tương đương. Khi ma trận trong file khác 0, FlowPAGE có thể in dòng chữ “Altered Compensation”; dòng này chỉ là thông tin in, không làm thay đổi phép bù.

**LMD QuickCOMP** cho chỉnh bù bằng thanh trượt trên dữ liệu đã thu. Muốn xem ma trận thực sự áp cho file đó phải mở LMD QuickCOMP Matrix, không phải ma trận trong Cytometer Control.

**AutoMATOR** chạy hàng loạt file qua protocol để in hoặc xuất kết quả, có hàng đợi lưu và nạp lại.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">File LMD giống ảnh RAW, bản bù giống ảnh JPEG</div>
<p>Máy ảnh chuyên nghiệp lưu ảnh RAW (dữ liệu gốc của cảm biến) và cho chỉnh cân bằng trắng sau khi chụp. File LMD cũng vậy: dữ liệu gốc chưa bù được giữ nguyên, kèm ma trận bù lúc thu. Bù lại trong ListComp hay Kaluza là đổi “cân bằng trắng” trên cùng dữ liệu gốc, không làm hỏng file.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Bù khi thu và bù sau thu</div>
<p>Bù khi thu chỉ là ma trận được áp lên để hiển thị và tính thống kê lúc chạy. Dữ liệu gốc không đổi. Vì vậy một mẫu chạy với ma trận sai vẫn cứu được: tạo ma trận đúng rồi bù lại sau thu. Chỉ có ba thứ không cứu được sau thu: sự kiện dưới discriminator, sự kiện bão hòa ở kênh cuối, và điện áp đặt quá thấp.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["File LMD đã thu", "ma trận lúc chạy", "accent"], ["Listmode Playback", "protocol khác", "b488"], ["LMD QuickCOMP / ListComp", "bù lại sau thu", "warn"], ["AutoMATOR", "chạy hàng loạt, xuất", "v405"]], "per": 4}'><figcaption>Các công cụ phân tích lại dữ liệu đã thu trên Navios EX.</figcaption></figure>

<div id="xuat" class="ftb-anchor"></div>

## 2.9 FlowPAGE, xuất dữ liệu và lưu trữ

<ul class="tight">
<li><b>FlowPAGE</b> là trang báo cáo trong protocol: biểu đồ, bảng thống kê, lưới bù LMD, hộp chữ, hình ảnh. In ra giấy hoặc PDF.</li>
<li><b>Publish</b>: xuất thống kê ra file text hoặc Excel; protocol tên bắt đầu bằng QC xuất thành một dòng.</li>
<li><b>Save All FCS Format Files</b>: xuất FCS để phân tích bằng phần mềm khác.</li>
<li><b>Backup và Archive</b>: sao lưu cơ sở dữ liệu Report Generator, lưu trữ theo khoảng ngày, kèm QC, nhật ký bảo trì và dịch vụ, báo cáo panel. Có thể khôi phục.</li>
<li><b>LIS</b>: qua phần mềm DI - Instrument Manager (A45429AG), Navios và Navios EX nhận worklist ngoài (External Worklist, EWL) và gửi về hình ảnh, PDF, XLS/XLSX kết quả qua thư mục chia sẻ.</li>
</ul>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Ba cách lấy kết quả ra khỏi máy và dùng khi nào</div>
<ul><li><b>FlowPAGE (in hoặc PDF):</b> báo cáo để duyệt và lưu hồ sơ.</li><li><b>Publish (text, Excel):</b> lấy bảng số để theo dõi QC hoặc thống kê.</li><li><b>FCS:</b> gửi dữ liệu thô cho phần mềm khác hoặc hội chẩn ở nơi khác.</li></ul>
<p>Nguyên tắc: báo cáo là bản sao, file LMD gốc mới là bằng chứng. Lưu trữ file gốc theo đúng thời hạn lưu hồ sơ của phòng.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["FlowPAGE", "in, PDF", "accent"], ["Publish", "Excel, text", "b488"], ["FCS export", "phần mềm khác", "v405"], ["DI - Instrument Manager", "LIS: EWL, PDF, XLSX", "warn"], ["Backup / Archive", "cơ sở dữ liệu, QC, log", "muted"]], "per": 5, "h": 80}'><figcaption>Các đường xuất và lưu trữ dữ liệu.</figcaption></figure>

<div id="nguoidung" class="ftb-anchor"></div>

## 2.10 Người dùng, quyền và an toàn dữ liệu

System Administrator quản lý người dùng, nhóm làm việc (workgroup), mật khẩu và đặc quyền: quản trị hệ thống, khóa/mở protocol, truy cập file của người khác, ghi đè file đã thu, thêm lô hiệu chuẩn tuyệt đối, sửa chất nhuộm tùy chỉnh. Có nhật ký xuất được.

Phụ lục C của IFU mô tả mã hóa ổ đĩa BitLocker (sao lưu khóa khôi phục), mã hóa cơ sở dữ liệu, phần mềm diệt virus, cập nhật hệ điều hành và tạo điểm khôi phục. Các cảnh báo an toàn trong mọi tài liệu Beckman: chỉ người có thẩm quyền được dùng máy trạm; không cắm USB/đĩa chưa quét virus; chỉ nối mạng qua phần cứng PROService RMS; giữ tắt Windows Autorun.

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Cho mọi người dùng chung một tài khoản cho nhanh”</div>
<p>Dùng chung tài khoản làm mất khả năng truy vết: không biết ai sửa protocol, ai ghi đè file. Khi có sai sót hoặc khi đánh giá ISO 15189, đây là điểm bị hỏi đầu tiên. Đề xuất: mỗi người một tài khoản, nhóm quyền theo vai trò (vận hành, duyệt, quản trị), chỉ quản trị được khóa và sửa protocol.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["System Administrator", "quản trị người dùng", "r638"], ["Lock/Unlock Protocols", "mở khóa protocol", "warn"], ["Access Other Files", "đọc file người khác", "b488"], ["Overwrite", "ghi đè file đã thu", "bad"], ["BitLocker", "mã hóa ổ đĩa", "v405"], ["PROService RMS", "kết nối mạng an toàn", "accent"]], "per": 3}'><figcaption>Các đặc quyền người dùng và lớp bảo mật.</figcaption></figure>

<div id="tat" class="ftb-anchor"></div>

## 2.11 Tắt máy và tắt máy kéo dài

<ol class="steps">
<li><div>Chạy panel vệ sinh (Cleanse.PNL): ống 1 chứa 2 mL dung dịch tẩy (1 phần javel 5–6% không mùi + 9 phần nước cất hoặc IsoFlow, pha trong ngày), ống 2–4 chứa 2 mL nước cất hoặc IsoFlow.</div></li>
<li><div>Tắt phần mềm, máy trạm và cytometer theo thứ tự trong IFU.</div></li>
<li><div>Lau bề mặt tiếp xúc (nhất là vùng hút mẫu) bằng dung dịch javel rồi cồn 70%.</div></li>
<li><div>Để máy tắt ít nhất 30 phút trước khi khởi động lại; trước khi chạy mẫu phải làm lại startup và QC.</div></li>
<li><div>Ghi vào Maintenance Log.</div></li>
</ol>

<div class="callout bad"><b class="t">Dung dịch tẩy phải pha mới</b>IFU cảnh báo dung dịch tẩy không pha mới có thể để lại chất nhuộm tồn dư trong hệ thống, gây kết quả sai khi chuyển ứng dụng. Phải pha và dùng trong ngày. Sau khi dùng chất nhuộm DNA hoặc vital dye, kiểm tra tồn dư theo mục Testing for Residual Stain.</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Vì sao phải chạy Cleanse cuối ngày</div>
<p>Sau một ngày chạy mẫu, đường ống còn protein, tế bào vỡ và chất nhuộm bám. Để qua đêm, chúng khô lại thành màng, ngày mai gây tắc, bọt khí và nhiễm chéo. Javel phá protein, nước cất hoặc IsoFlow tráng sạch javel để không làm hỏng mẫu đầu tiên ngày hôm sau.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Cleanse.PNL", "ống 1 javel 1:9; ống 2–4 nước", "accent"], ["Tắt phần mềm, máy", "theo IFU", "b488"], ["Lau bề mặt", "javel rồi cồn 70%", "warn"], ["Chờ ≥30 phút", "trước khi bật lại", "v405"], ["Ghi log", "Maintenance Log", "muted"]], "per": 5, "h": 84}'><figcaption>Quy trình tắt máy và vệ sinh.</figcaption></figure>

<div id="kiemtra" class="ftb-anchor"></div>

## 2.12 Danh sách kiểm tra cho người làm ứng dụng khi đến phòng xét nghiệm

<div class="tbl-wrap"><table>
<thead><tr><th>Hạng mục</th><th>Kiểm tra</th><th>Tại sao</th></tr></thead>
<tbody>
<tr><td>Nhật ký QC</td><td>Levey-Jennings Flow-Check Pro 30 ngày; điện áp sau AutoSetup có trôi dần không</td><td>Trôi điện áp gợi ý laser yếu dần, kính lọc bẩn, hạt QC hết hạn</td></tr>
<tr><td>Lô thuốc thử</td><td>Lô Flow-Set Pro đang dùng có khớp vùng đích trong protocol _STAND không</td><td>Đổi lô mà không nhập vùng đích mới sẽ làm cài đặt lệch</td></tr>
<tr><td>Ma trận bù</td><td>Ngày tạo; có kiểm chứng bằng ống đủ màu không; đổi lô tandem sau đó chưa</td><td>Tandem khác lô cần bù lại</td></tr>
<tr><td>File LMD</td><td>Tên duy nhất; có lưu FCS header đầy đủ</td><td>Truy xuất nguồn gốc khi có khiếu nại</td></tr>
<tr><td>Bảo trì</td><td>Bộ lọc khí, bẫy chân không, đầu hút MCL, bộ lọc sheath theo lịch Maintenance Log</td><td>Nguyên nhân hàng đầu của lỗi chân không, tắc, bọt khí</td></tr>
<tr><td>Bảo mật</td><td>Ai có quyền mở khóa protocol; phần mềm diệt virus cập nhật</td><td>Yêu cầu ISO 15189</td></tr>
</tbody>
</table></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Nhật ký QC", "xu hướng HPCV, điện áp", "accent"], ["Lô Flow-Set Pro", "khớp vùng đích", "b488"], ["Ma trận bù", "ngày tạo, lô tandem", "warn"], ["Tên file LMD", "duy nhất", "v405"], ["Bảo trì", "lọc khí, bẫy, MCL", "ok"], ["Bảo mật", "quyền, diệt virus", "r638"]], "per": 3}'><figcaption>Sáu điểm kiểm tra khi đến hỗ trợ phòng xét nghiệm.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 2.13 Hỏi bác sĩ

<details class="ans"><summary>“Có thể chạy panel 10 màu của hãng khác trên Navios EX không?”</summary><p>Về quang học được, miễn là chất nhuộm khớp cấu hình kính lọc (ví dụ BV421 vào FL9, BV510 vào FL10). Phải khai báo Custom Dye Entries, tạo ứng dụng AutoSetup mới bằng Application Definition Wizard, tạo ma trận bù riêng và thẩm định như một xét nghiệm do phòng tự phát triển (LDT). Không còn là cấu hình IVD đã được cho phép như ClearLLab.</p></details>

<details class="ans"><summary>“Bao nhiêu sự kiện thì đủ?”</summary><p>Tùy câu hỏi lâm sàng. Đếm lympho T/B/NK: ít nhất 6 000 lympho theo LSA. Chẩn đoán leukemia cấp: vài chục nghìn tế bào có nhân là đủ để mô tả quần thể chiếm ưu thế. Tìm quần thể nhỏ (B đơn dòng nhỏ, MRD, PNH): tính ngược từ độ nhạy mong muốn bằng công thức Poisson ở chương 01 và 18.</p></details>

<details class="ans"><summary>“Chạy mẫu ở High có sao không?”</summary><p>Với mẫu đặc, High làm tăng doublet và CV. Với mẫu đã bulk lysis cần thu hàng triệu tế bào, High chấp nhận được nếu tốc độ sự kiện được kiểm soát và đã thẩm định. Nguyên tắc: thẩm định ở đúng tốc độ sẽ dùng thường quy.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Khách hàng chỉnh tay điện áp FL5 rồi chạy cả buổi sáng. Có cứu được dữ liệu không?</summary><p>Một phần. Ma trận bù có thể làm lại và bù sau thu, nhưng cổng cố định và vị trí quần thể sẽ lệch so với chuẩn. Nếu điện áp quá cao gây bão hòa, phần bão hòa không cứu được. Cần ghi nhận sự cố và cân nhắc chạy lại mẫu còn đủ.</p></details><details class="ans"><summary>Vì sao không nên đặt điều kiện dừng 100 000 sự kiện cho dịch não tủy?</summary><p>Vì dịch não tủy thường rất ít tế bào; máy sẽ hút đến hết mẫu mà không đạt số sự kiện. Đặt dừng theo thể tích hoặc thời gian và ghi rõ số sự kiện thực tế.</p></details><details class="ans"><summary>File LMD lưu những gì ngoài dữ liệu sự kiện?</summary><p>Cytosettings (điện áp, gain, discriminator), ma trận bù lúc thu, các khóa FCS như công suất laser đầu và cuối lần thu, thông tin mẫu. Xem bằng View FCS Header.</p></details></div>

<figure class="fig" data-fig='{"t": "tree", "root": "Chạy panel 10 màu hãng khác trên Navios EX?", "b": [["Quang học", "Khớp kính lọc FL9/FL10…|Custom Dye Entries", "accent"], ["Cài đặt", "Application Definition Wizard|AutoSetup mới", "b488"], ["Chất lượng", "Ma trận bù riêng|Thẩm định như LDT", "r638"]]}'><figcaption>Các bước khi dùng thuốc thử ngoài cấu hình IVD.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch02.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
