---
title: "01 · Nguyên lý flow cytometry"
description: "Hiểu tín hiệu được tạo ra như thế nào là nền tảng để giải thích mọi bất thường trên biểu đồ: vì sao quần thể loe rộng, vì sao doublet làm sai số đếm, vì sao một chất nhuộm “mờ” không phát hiện được kháng nguyên mật…"
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "01"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần I · Chương 01</div><div id="ftb-search"></div></div>

<p class="lead">Hiểu tín hiệu được tạo ra như thế nào là nền tảng để giải thích mọi bất thường trên biểu đồ: vì sao quần thể loe rộng, vì sao doublet làm sai số đếm, vì sao một chất nhuộm “mờ” không phát hiện được kháng nguyên mật độ thấp. Chương này đi theo đường đi của một tế bào: từ ống mẫu, qua buồng dòng chảy, qua chùm laser, thành photon, thành xung điện, thành con số trong file LMD.</p>

<details class="glossbox" id="thuatngu-chuong"><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">147 mục mới · 0 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><input aria-label="Lọc thuật ngữ của chương" class="search" data-target="gtab-ch01" placeholder="Lọc trong bảng này…" type="search"/><div class="tbl-wrap" id="gtab-ch01"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-flow-cytometry"><td>Flow cytometry</td><td><span class="full">đếm tế bào dòng chảy.</span> Kỹ thuật cho từng tế bào lơ lửng trong dịch đi qua chùm laser, đo ánh sáng tán xạ và huỳnh quang của từng tế bào để biết kích thước, độ phức tạp và các kháng nguyên mang trên tế bào.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-doublet"><td>Doublet</td><td><span class="full">tế bào đôi.</span> Hai tế bào (hoặc hai hạt) đi qua laser cùng lúc nên bị ghi thành một sự kiện; loại bằng cổng INT × PEAK hoặc INT × TOF.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-chat-nhuom-huynh-quang"><td>Chất nhuộm huỳnh quang</td><td><span class="full">fluorochrome.</span> Phân tử gắn vào kháng thể, hấp thụ ánh sáng laser và phát lại ánh sáng có bước sóng dài hơn để máy đo được.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-khang-nguyen-khang-the"><td>Kháng nguyên / kháng thể</td><td><span class="full">antigen / antibody.</span> Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-xung"><td>Xung</td><td><span class="full">pulse.</span> Tín hiệu điện nhô lên rồi hạ xuống khi một tế bào đi qua laser; máy đo diện tích, chiều cao và độ rộng của xung.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-lmd"><td>LMD</td><td><span class="full">List Mode Data.</span> Định dạng file của Navios/Kaluza lưu từng sự kiện với mọi tham số (dữ liệu gốc chưa bù), cho phép phân tích lại bất kỳ lúc nào.</td><td class="at"><a href="#top">mở đầu</a></td></tr><tr id="g-fluidics"><td>Fluidics</td><td><span class="full">hệ dòng chảy.</span> Phần máy đưa mẫu vào dòng dịch bao và xếp tế bào thành hàng một đi qua điểm đo.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-optics"><td>Optics</td><td><span class="full">hệ quang học.</span> Phần máy gồm laser, thấu kính, kính lọc và đầu dò, có nhiệm vụ chiếu sáng tế bào và tách ánh sáng phát ra theo từng dải bước sóng.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-electronics"><td>Electronics</td><td><span class="full">hệ điện tử.</span> Phần máy biến xung ánh sáng thành xung điện, khuếch đại và số hóa thành con số lưu trong file.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-su-kien"><td>Sự kiện</td><td><span class="full">event.</span> Một lần máy ghi nhận tín hiệu vượt ngưỡng; thường là một tế bào, nhưng cũng có thể là mảnh vụn, hạt hoặc hai tế bào dính nhau.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-navios-ex"><td>Navios EX</td><td><span class="full">máy flow cytometry của Beckman Coulter.</span> Máy phân tích 3 laser (405, 488, 638 nm), 10 màu, 2 tán xạ; dùng phần mềm Navios EX để thu và Kaluza C để phân tích.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-fs"><td>FS</td><td><span class="full">Forward scatter, tán xạ thẳng (còn viết FSC).</span> Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-ss"><td>SS</td><td><span class="full">Side scatter, tán xạ bên (còn viết SSC).</span> Ánh sáng laser tán xạ ở góc 90°; phản ánh độ phức tạp bên trong tế bào (hạt, nhân thùy). Bạch cầu hạt có SS cao, lympho SS thấp.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-fcs"><td>FCS</td><td><span class="full">Flow Cytometry Standard.</span> Định dạng file chuẩn quốc tế cho dữ liệu flow (ví dụ FCS 3.0/3.1); gồm phần header chứa từ khóa và phần dữ liệu từng sự kiện.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-header"><td>Header</td><td><span class="full">phần đầu file.</span> Phần đầu file LMD/FCS chứa từ khóa (keyword): tên mẫu, ngày, cài đặt máy, ma trận bù, hệ số hạt đếm.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-hoi-tu-thuy-dong"><td>Hội tụ thủy động</td><td><span class="full">hydrodynamic focusing.</span> Dòng dịch bao chảy nhanh ép dòng mẫu thành một sợi rất mảnh ở giữa, nhờ đó tế bào đi qua laser từng cái một, đúng tâm chùm tia.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-dau-do"><td>Đầu dò</td><td><span class="full">detector.</span> Bộ phận biến ánh sáng thành tín hiệu điện (photodiode hoặc PMT). Mỗi đầu dò huỳnh quang trên Navios được đặt tên FL1 đến FL10.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-photodiode"><td>Photodiode</td><td><span class="full">đầu dò bán dẫn.</span> Đầu dò quang không khuếch đại, dùng cho tín hiệu mạnh như FS.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-pmt"><td>PMT</td><td><span class="full">photomultiplier tube, ống nhân quang.</span> Đầu dò khuếch đại tín hiệu ánh sáng yếu hàng triệu lần; điện áp đặt vào PMT quyết định độ khuếch đại của kênh.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-adc"><td>ADC</td><td><span class="full">analog-to-digital converter, bộ chuyển đổi tương tự–số.</span> Mạch biến xung điện liên tục thành con số để lưu vào file.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-fl1-fl10"><td>FL1 … FL10</td><td><span class="full">fluorescence channel 1–10.</span> Tên 10 đầu dò huỳnh quang của Navios EX 3 laser/10 màu. Ví dụ FL1 = FITC (laser 488), FL6 = APC (laser 638), FL9 = Pacific Blue, FL10 = Krome Orange (laser 405). Ký hiệu FL# chỉ một đầu dò bất kỳ.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-time"><td>TIME</td><td><span class="full">tham số thời gian.</span> Tham số ghi thời điểm mỗi sự kiện được thu. Vẽ TIME × một kênh để phát hiện dòng chảy không ổn định (bọt khí, tắc) và loại đoạn xấu.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-cong"><td>Cổng</td><td><span class="full">gate / region.</span> Vùng vẽ trên biểu đồ để chọn một quần thể sau khi thu, ví dụ cổng lympho trên CD45 × SS.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-clearllab-10c"><td>ClearLLab 10C</td><td><span class="full">bộ panel leukemia/lymphoma 10 màu của Beckman Coulter.</span> Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-ong-b-t-m1-m2"><td>Ống B / T / M1 / M2</td><td><span class="full">bốn ống của ClearLLab 10C.</span> B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-int"><td>INT</td><td><span class="full">integral, diện tích xung.</span> Tổng tín hiệu dưới xung; tỷ lệ với tổng lượng ánh sáng phát ra. Là tham số mặc định để đo cường độ.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-peak"><td>PEAK</td><td><span class="full">chiều cao xung.</span> Giá trị lớn nhất của xung. So INT với PEAK giúp nhận ra hai tế bào dính nhau.</td><td class="at"><a href="#tongquan" title="Ba hệ thống của một máy flow">1.1</a></td></tr><tr id="g-dich-bao"><td>Dịch bao</td><td><span class="full">sheath fluid.</span> Dịch đệm chảy bao quanh dòng mẫu để hội tụ thủy động; trên Navios là IsoFlow.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-isoflow"><td>IsoFlow</td><td><span class="full">dịch bao của Beckman Coulter.</span> Dung dịch đệm đẳng trương dùng làm dịch bao trên Navios EX.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-cv"><td>CV</td><td><span class="full">coefficient of variation, hệ số biến thiên.</span> SD chia cho trung bình, nhân 100%. Cho biết độ phân tán tương đối; dùng cho độ chụm và độ rộng đỉnh.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-coincidence"><td>Coincidence</td><td><span class="full">trùng sự kiện.</span> Hai tế bào đi qua chùm tia quá gần nhau trong thời gian, thường do chạy mẫu đặc hoặc tốc độ cao.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-ifu"><td>IFU</td><td><span class="full">Instructions for Use, hướng dẫn sử dụng.</span> Tài liệu chính thức của nhà sản xuất cho máy, phần mềm hoặc thuốc thử; là căn cứ pháp lý khi vận hành.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-qc"><td>QC</td><td><span class="full">Quality Control, kiểm soát chất lượng.</span> Các phép đo kiểm tra máy và quy trình trước khi chạy mẫu (hạt Flow-Check Pro, Flow-Set Pro, chứng sinh học).</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-flow-check-pro"><td>Flow-Check Pro</td><td><span class="full">hạt kiểm tra căn chỉnh của Beckman Coulter.</span> Hạt huỳnh quang đồng nhất dùng QC hằng ngày: đo HPCV để đánh giá căn chỉnh quang học và dòng chảy.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-dna"><td>DNA</td><td><span class="full">deoxyribonucleic acid.</span> Vật chất di truyền trong nhân; nhuộm DNA định lượng dùng cho chu kỳ tế bào và đánh giá sống/chết.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-kieu-hinh-mien-dich"><td>Kiểu hình miễn dịch</td><td><span class="full">immunophenotype.</span> Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-mrd"><td>MRD</td><td><span class="full">Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được.</span> Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-pnh"><td>PNH</td><td><span class="full">Paroxysmal Nocturnal Hemoglobinuria, tiểu huyết sắc tố kịch phát ban đêm.</span> Bệnh tế bào gốc mắc phải do đột biến PIGA làm mất neo GPI; hồng cầu thiếu CD55, CD59 nên bị bổ thể phá hủy.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-do-nhay-mrd"><td>Độ nhạy (MRD)</td><td><span class="full">sensitivity.</span> Tỷ lệ thấp nhất phát hiện được: LOD = số sự kiện cụm tối thiểu ÷ tổng tế bào đánh giá. Ví dụ 20 ÷ 2 000 000 = 10⁻⁵.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-bulk-lysis"><td>Bulk lysis</td><td><span class="full">ly giải thể tích lớn.</span> Ly giải hồng cầu của nhiều mL mẫu trước khi nhuộm, để thu đủ hàng triệu tế bào cho MRD.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-ly-giai"><td>Ly giải</td><td><span class="full">lysis.</span> Phá hồng cầu bằng dung dịch (NH4Cl, VersaLyse…) để còn lại bạch cầu. Có kiểu không rửa (lyse/no-wash) và có rửa (stain/lyse/wash).</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-hpcv"><td>HPCV</td><td><span class="full">half-peak CV.</span> CV tính từ độ rộng của đỉnh tại nửa chiều cao (FWHM ÷ 2,354 chia cho vị trí đỉnh). Không bị đuôi ảnh hưởng; dùng cho QC hạt Flow-Check Pro.</td><td class="at"><a href="#fluidics" title="Hệ dòng chảy và hội tụ thủy động">1.2</a></td></tr><tr id="g-laser-delay"><td>Laser delay</td><td><span class="full">độ trễ giữa các laser.</span> Khoảng thời gian tế bào đi từ điểm cắt laser này sang laser kế tiếp; máy phải cài đúng để gán tín hiệu của các laser cho cùng một tế bào.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-tof"><td>TOF</td><td><span class="full">time of flight, độ rộng xung.</span> Thời gian tế bào đi qua chùm laser; tế bào đôi có TOF dài hơn tế bào đơn.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-fitc"><td>FITC</td><td><span class="full">fluorescein isothiocyanate.</span> Chất nhuộm kích thích bằng laser 488 nm, phát xanh lá (~520 nm), đo ở FL1. Độ sáng trung bình, giá rẻ, ít phân rã.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-pe"><td>PE</td><td><span class="full">phycoerythrin.</span> Protein huỳnh quang lấy từ tảo đỏ, kích thích 488 nm, phát vàng cam (~575 nm), đo ở FL2. Một trong những chất nhuộm sáng nhất.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-ecd"><td>ECD</td><td><span class="full">Energy Coupled Dye, PE-Texas Red.</span> Tandem PE với Texas Red, phát ~615 nm, đo ở FL3. Tương đương PE-CF594.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-pc5-pc5-5"><td>PC5 / PC5.5</td><td><span class="full">PE-Cy5 / PE-Cy5.5.</span> Tandem PE với cyanine 5 hoặc 5.5, phát ~670–700 nm, đo ở FL4.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-pc7"><td>PC7</td><td><span class="full">PE-Cy7.</span> Tandem PE với cyanine 7, phát ~770 nm, đo ở FL5. Dễ phân rã do ánh sáng và chất cố định.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-chat-nhuom-tandem"><td>Chất nhuộm tandem</td><td><span class="full">tandem dye.</span> Hai chất nhuộm ghép đôi (ví dụ PE với Cy7): chất thứ nhất hấp thụ laser rồi chuyển năng lượng sang chất thứ hai để phát ở bước sóng xa hơn. Dễ phân rã do ánh sáng, nhiệt và chất cố định.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-autosetup"><td>AutoSetup</td><td><span class="full">quy trình cài đặt tự động của Navios.</span> Bộ protocol và wizard chỉnh điện áp cho hạt Flow-Set Pro rơi vào vùng đích, tạo ma trận bù và kiểm chứng cài đặt.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-dien-ap-pmt"><td>Điện áp PMT</td><td><span class="full">PMT voltage.</span> Mức điện áp đặt cho ống nhân quang; tăng điện áp làm tín hiệu cả kênh sáng hơn (dịch sang phải), đồng thời làm thay đổi giá trị spillover vào kênh đó.</td><td class="at"><a href="#laser" title="Laser và chùm tia">1.3</a></td></tr><tr id="g-co-dinh-lam-tham"><td>Cố định / làm thấm</td><td><span class="full">fixation / permeabilization.</span> Cố định giữ cấu trúc tế bào; làm thấm mở lỗ trên màng để kháng thể vào trong.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-bp"><td>BP</td><td><span class="full">bandpass, kính lọc băng thông.</span> Kính chỉ cho một dải bước sóng đi qua. BP 525/40 nghĩa là tâm 525 nm, rộng 40 nm (505–545 nm).</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-ivd"><td>IVD</td><td><span class="full">In Vitro Diagnostic, chẩn đoán in vitro.</span> Sản phẩm được cơ quan quản lý cho phép dùng để chẩn đoán trên bệnh phẩm người, theo đúng chỉ định ghi trên nhãn.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-w2"><td>W2</td><td><span class="full">chế độ FS Wide Enhanced trên Navios EX.</span> Một trong ba chế độ thu tán xạ thẳng (Wide, Narrow, Wide Enhanced), dùng cho vật dưới micron như vi hạt, túi ngoại bào (nghiên cứu); spec phân giải hạt 0,4 µm đo ở chế độ này.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-mean"><td>Mean</td><td><span class="full">trung bình số học.</span> Tổng giá trị chia số sự kiện. Bị đuôi và giá trị cực trị kéo lệch.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-mds"><td>MDS</td><td><span class="full">Myelodysplastic Syndrome/Neoplasm, hội chứng rối loạn sinh tủy.</span> Nhóm tân sinh dòng tủy có tạo máu không hiệu quả, giảm tế bào máu, loạn sản hình thái, nguy cơ chuyển AML.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-diem-ogata"><td>Điểm Ogata</td><td><span class="full">Ogata score.</span> Thang 4 tham số flow hỗ trợ chẩn đoán MDS nguy cơ thấp: % CD34+ dòng tủy, % tiền B trong CD34+, tỷ số CD45 lympho/blast, tỷ số SS hạt/lympho. ≥ 2 điểm gợi ý MDS.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-nguyen-tuy-bao-bach-cau-doan"><td>Nguyên tủy bào … bạch cầu đoạn</td><td><span class="full">các giai đoạn trưởng thành dòng hạt.</span> Nguyên tủy bào (myeloblast) → tiền tủy bào (promyelocyte) → tủy bào (myelocyte) → hậu tủy bào (metamyelocyte) → bạch cầu đũa → bạch cầu đoạn.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-apl"><td>APL</td><td><span class="full">Acute Promyelocytic Leukemia, leukemia cấp tiền tủy bào.</span> Thể AML mang PML::RARA; kiểu hình CD34−, HLA-DR−, SS cao; cấp cứu vì nguy cơ chảy máu (DIC), điều trị bằng ATRA.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-duong-truong-thanh"><td>Đường trưởng thành</td><td><span class="full">maturation pattern.</span> Sự thay đổi kháng nguyên có trật tự khi tế bào trưởng thành, vẽ thành đường cong lặp lại được trên biểu đồ. Lệch khỏi đường này là dấu hiệu bất thường.</td><td class="at"><a href="#scatter" title="Tán xạ thẳng và tán xạ bên">1.4</a></td></tr><tr id="g-do-dich-stokes"><td>Độ dịch Stokes</td><td><span class="full">Stokes shift.</span> Khoảng cách giữa bước sóng kích thích và bước sóng phát xạ của một chất nhuộm. Dịch càng lớn, càng dễ tách ánh sáng phát xạ khỏi ánh sáng laser.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-apc"><td>APC</td><td><span class="full">allophycocyanin.</span> Protein huỳnh quang kích thích bằng laser 638 nm, phát đỏ (~660 nm), đo ở FL6. Rất sáng.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-apc-a700"><td>APC-A700</td><td><span class="full">APC-Alexa Fluor 700.</span> Tandem APC với Alexa Fluor 700, laser đỏ, đo ở FL7.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-fret"><td>FRET</td><td><span class="full">Förster resonance energy transfer, truyền năng lượng cộng hưởng.</span> Cơ chế chuyển năng lượng giữa hai phân tử nhuộm đặt rất gần nhau; là nguyên lý hoạt động của chất nhuộm tandem.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-phan-ra-tandem"><td>Phân rã tandem</td><td><span class="full">tandem degradation.</span> Liên kết trong chất nhuộm tandem bị hỏng nên phần tín hiệu phát ở chất cho (PE, APC) tăng lên; làm sai ma trận bù và gây quần thể dương giả.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-bu-mau"><td>Bù màu</td><td><span class="full">compensation.</span> Phép tính trừ phần spillover ra khỏi mỗi kênh để mỗi kênh chỉ còn phản ánh một chất nhuộm. Chi tiết ở chương 04.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-spillover"><td>Spillover</td><td><span class="full">phần tín hiệu lọt sang kênh khác.</span> Tỷ lệ ánh sáng của một chất nhuộm rơi vào đầu dò dành cho chất nhuộm khác, vì phổ phát xạ rộng hơn cửa sổ kính lọc. Ghi bằng phần trăm.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-apc-a750"><td>APC-A750</td><td><span class="full">APC-Alexa Fluor 750.</span> Tandem APC với Alexa Fluor 750, laser đỏ, đo ở FL8; tương đương APC-H7, APC-Cy7.</td><td class="at"><a href="#huynhquang" title="Huỳnh quang: từ phân tử đến photon">1.5</a></td></tr><tr id="g-kinh-loc-luong-sac"><td>Kính lọc lưỡng sắc</td><td><span class="full">dichroic filter.</span> Kính chia đường ánh sáng: cho một dải bước sóng đi thẳng và phản xạ phần còn lại sang đầu dò khác.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-dc-sp"><td>DC SP</td><td><span class="full">dichroic shortpass.</span> Kính lưỡng sắc kiểu shortpass trên Navios EX: cho bước sóng ngắn hơn ngưỡng đi qua, phản xạ bước sóng dài hơn.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-lp"><td>LP</td><td><span class="full">longpass, kính lọc thông dài.</span> Kính cho mọi bước sóng dài hơn ngưỡng đi qua. LP 600 nghĩa là cho ánh sáng &gt; 600 nm qua.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-flaer"><td>FLAER</td><td><span class="full">Fluorescent aerolysin.</span> Độc tố aerolysin không độc gắn chất nhuộm (thường Alexa 488), bám vào mọi neo GPI. Bạch cầu PNH không có neo GPI nên FLAER âm.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-rd1"><td>RD1</td><td><span class="full">tên cũ của PE ở Beckman Coulter.</span> Cách Beckman gọi PE trong các sản phẩm cũ, ví dụ CD4-RD1.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-7-aad"><td>7-AAD</td><td><span class="full">7-aminoactinomycin D.</span> Chất nhuộm DNA không vào được tế bào sống; tế bào 7-AAD dương là tế bào chết. Dùng trong đếm CD34 ISHAGE.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-pb"><td>PB</td><td><span class="full">Pacific Blue.</span> Chất nhuộm kích thích bằng laser tím 405 nm, phát ~455 nm, đo ở FL9. Tương đương BV421, V450.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-dapi"><td>DAPI</td><td><span class="full">4′,6-diamidino-2-phenylindole.</span> Chất nhuộm DNA kích thích bằng tia cực tím/tím; dùng trong phân tích chu kỳ tế bào hoặc đánh giá tế bào chết.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-kro"><td>KrO</td><td><span class="full">Krome Orange.</span> Chất nhuộm của Beckman kích thích bằng laser 405 nm, phát ~528 nm, đo ở FL10. Khá mờ, nên dùng cho CD45 (kháng nguyên rất nhiều). Tương đương BV510, V500.</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-tham-dinh"><td>Thẩm định</td><td><span class="full">validation.</span> Chứng minh một xét nghiệm tự xây dựng hoặc đã sửa đổi đáp ứng mục đích sử dụng (độ đúng, độ chụm, độ đặc hiệu, giới hạn…).</td><td class="at"><a href="#quanghoc" title="Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông">1.6</a></td></tr><tr id="g-mesf"><td>MESF</td><td><span class="full">Molecules of Equivalent Soluble Fluorochrome.</span> Đơn vị quy cường độ về số phân tử chất nhuộm hòa tan cho cùng độ sáng, dựng từ hạt chuẩn nhiều mức. Dùng so sánh máy, đánh giá độ nhạy.</td><td class="at"><a href="#detector" title="Đầu dò: photodiode và ống nhân quang">1.7</a></td></tr><tr id="g-cd"><td>CD</td><td><span class="full">Cluster of Differentiation, cụm biệt hóa.</span> Hệ thống đánh số quốc tế cho kháng nguyên bề mặt tế bào bạch cầu (CD1 đến CD3xx). Mỗi CD là một phân tử nhận diện được bằng kháng thể đơn dòng. Tra từng marker ở chương 22.</td><td class="at"><a href="#detector" title="Đầu dò: photodiode và ống nhân quang">1.7</a></td></tr><tr id="g-dim-bright"><td>Dim / Bright</td><td><span class="full">mờ / sáng.</span> Mô tả cường độ so với tế bào bình thường cùng mẫu: mờ (dim), trung bình, sáng (bright), không đồng nhất (heterogeneous).</td><td class="at"><a href="#detector" title="Đầu dò: photodiode và ống nhân quang">1.7</a></td></tr><tr id="g-stain-index"><td>Stain index</td><td><span class="full">chỉ số nhuộm.</span> Chỉ số đo khả năng tách quần thể dương khỏi quần thể âm: (MFI dương − MFI âm) / (2 × SD âm). Càng cao càng dễ phân biệt.</td><td class="at"><a href="#detector" title="Đầu dò: photodiode và ống nhân quang">1.7</a></td></tr><tr id="g-marker"><td>Marker</td><td><span class="full">dấu ấn.</span> Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.</td><td class="at"><a href="#detector" title="Đầu dò: photodiode và ống nhân quang">1.7</a></td></tr><tr id="g-thang-tuyen-tinh"><td>Thang tuyến tính</td><td><span class="full">linear scale.</span> Trục hiển thị trong đó khoảng cách bằng nhau ứng với giá trị cộng thêm bằng nhau (0, 250, 500…). Dùng cho FS, SS và DNA.</td><td class="at"><a href="#xung" title="Xung điện: INT, PEAK và TOF">1.8</a></td></tr><tr id="g-kaluza-c"><td>Kaluza C</td><td><span class="full">phần mềm phân tích lâm sàng của Beckman Coulter.</span> Phần mềm phân tích file LMD/FCS: bù màu, cổng, Composite, báo cáo, kết nối LIS.</td><td class="at"><a href="#xung" title="Xung điện: INT, PEAK và TOF">1.8</a></td></tr><tr id="g-dot-plot"><td>Dot plot</td><td><span class="full">biểu đồ chấm.</span> Biểu đồ hai chiều, mỗi chấm là một sự kiện.</td><td class="at"><a href="#xung" title="Xung điện: INT, PEAK và TOF">1.8</a></td></tr><tr id="g-kenh"><td>Kênh</td><td><span class="full">channel (hai nghĩa).</span> Có hai nghĩa: (1) kênh đầu dò, tức một đầu dò như FL2; (2) kênh trên trục, tức vị trí số trên thang hiển thị (ví dụ kênh 512 trên thang 1 024 kênh). Xem mục 1.9.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-histogram"><td>Histogram</td><td><span class="full">biểu đồ một tham số.</span> Biểu đồ đếm số sự kiện theo cường độ của một kênh.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-mfi"><td>MFI</td><td><span class="full">Mean/Median Fluorescence Intensity, cường độ huỳnh quang trung bình/trung vị.</span> Con số đại diện độ sáng của một quần thể trên một kênh. Nên dùng trung vị. Phụ thuộc điện áp, lô thuốc thử, nên chỉ so được trong cùng điều kiện.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-flow-set-pro"><td>Flow-Set Pro</td><td><span class="full">hạt chuẩn hóa cài đặt của Beckman Coulter.</span> Hạt dùng để chỉnh điện áp PMT sao cho đỉnh rơi vào vùng đích, giúp cường độ ổn định giữa các ngày.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-thang-log"><td>Thang log</td><td><span class="full">logarithmic scale.</span> Trục trong đó mỗi khoảng bằng nhau ứng với giá trị nhân thêm 10 lần (decade). Tách tốt quần thể mờ và sáng nhưng không vẽ được giá trị ≤ 0.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-gain"><td>Gain</td><td><span class="full">hệ số khuếch đại.</span> Hệ số nhân tín hiệu sau đầu dò; trên thang log, gain ×2 dịch mọi quần thể sang phải một đoạn bằng nhau.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-decade"><td>Decade</td><td><span class="full">một bậc mười.</span> Một khoảng trên thang log mà giá trị tăng 10 lần, ví dụ 1→10 hoặc 100→1 000.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-cell-cycle"><td>Cell cycle</td><td><span class="full">chu kỳ tế bào.</span> Phân tích hàm lượng DNA để chia tế bào thành pha G0/G1, S, G2/M.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-protocol"><td>Protocol</td><td><span class="full">file .PRO.</span> Tập hợp mọi cài đặt cho một ống: tham số, điện áp, biểu đồ, cổng, thống kê, mẫu báo cáo.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-logicle"><td>Logicle</td><td><span class="full">biexponential, thang hai hàm mũ.</span> Thang lai: gần 0 gần như tuyến tính (hiển thị được giá trị âm sau bù), ở giá trị cao giống log. Thang mặc định nên dùng cho dữ liệu đã bù.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-blast"><td>Blast</td><td><span class="full">tế bào non.</span> Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-tu-huynh-quang"><td>Tự huỳnh quang</td><td><span class="full">autofluorescence, AF.</span> Ánh sáng tế bào tự phát ra khi không nhuộm, do các phân tử nội sinh (flavin, NADH). Bạch cầu hạt và mono có tự huỳnh quang cao hơn lympho.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-he-so-spillover"><td>Hệ số spillover</td><td><span class="full">spillover coefficient, s.</span> Một ô của ma trận spillover: phần (thường ghi bằng %) tín hiệu của một chất nhuộm rơi vào một đầu dò khác.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-sd"><td>SD</td><td><span class="full">standard deviation, độ lệch chuẩn.</span> Mức phân tán của các giá trị quanh trung bình; quần thể loe rộng có SD lớn.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-spreading"><td>Spreading</td><td><span class="full">độ loe sau bù (spillover spreading).</span> Quần thể dương sáng ở một màu bị trải rộng ra trên kênh nhận sau bù, do dao động thống kê của photon. Không sửa được bằng chỉnh bù.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-thieu-bu-bu-qua"><td>Thiếu bù / bù quá</td><td><span class="full">under- / over-compensation.</span> Thiếu bù: còn sót tín hiệu lọt sang, quần thể âm trông như dương mờ. Bù quá: trừ quá tay, trung vị quần thể dương thấp hơn mốc âm.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-trung-vi"><td>Trung vị</td><td><span class="full">median.</span> Giá trị nằm giữa khi xếp các tế bào theo cường độ: một nửa cao hơn, một nửa thấp hơn. Không bị đuôi và giá trị âm sau bù kéo lệch, nên dùng để đánh giá bù và báo MFI.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-moc-am-moc-duong"><td>Mốc âm / mốc dương</td><td><span class="full">đối chứng nội tại.</span> Quần thể tế bào bình thường trong cùng ống, đã biết chắc âm hoặc dương với marker, dùng làm chuẩn để nói một quần thể khác là âm, mờ hay sáng.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-hat-bu"><td>Hạt bù</td><td><span class="full">compensation beads.</span> Hạt bắt kháng thể dùng làm đối chứng đơn màu: mỗi hạt gắn một kháng thể đúng chất nhuộm, cho quần thể dương rất sáng và quần thể âm rõ.</td><td class="at"><a href="#khuechdai" title="Khuếch đại, số hóa và thang hiển thị">1.9</a></td></tr><tr id="g-abc"><td>ABC</td><td><span class="full">Antibody Binding Capacity, khả năng gắn kháng thể.</span> Số phân tử kháng thể gắn được trên một tế bào, ước lượng số kháng nguyên. Cần hạt chuẩn PE và kháng thể PE tỷ lệ 1:1.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-cll"><td>CLL</td><td><span class="full">Chronic Lymphocytic Leukemia, leukemia kinh dòng lympho.</span> Tân sinh B trưởng thành nhỏ: CD5+, CD23+, CD200 sáng, CD20 mờ, chuỗi nhẹ bề mặt mờ; B đơn dòng ≥ 5 × 10⁹/L trong máu. SLL là thể chủ yếu ở hạch.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-doi-chung-noi-tai"><td>Đối chứng nội tại</td><td><span class="full">internal control.</span> Tế bào bình thường có sẵn trong cùng mẫu, cùng ống, dùng làm mốc so sánh cường độ hoặc kiểm tra bù.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-vung-dich"><td>Vùng đích</td><td><span class="full">target channel.</span> Vị trí kênh (trên trục) mà đỉnh hạt Flow-Set Pro phải rơi vào sau khi chỉnh điện áp; giữ cho cường độ ổn định theo thời gian.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-chi-so-ty-le"><td>Chỉ số tỷ lệ</td><td><span class="full">index.</span> MFI quần thể cần đo chia cho MFI một quần thể đối chứng trong cùng mẫu; triệt tiêu ảnh hưởng điện áp và lô thuốc thử.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-levey-jennings"><td>Levey-Jennings</td><td><span class="full">biểu đồ Levey-Jennings.</span> Biểu đồ kết quả QC theo ngày với đường trung bình và các giới hạn ±1, 2, 3 SD; giúp thấy xu hướng trôi.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-bd"><td>BD</td><td><span class="full">Becton, Dickinson and Company.</span> Hãng sản xuất máy và thuốc thử flow (ví dụ hạt Quantibrite PE).</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-isotype"><td>Isotype</td><td><span class="full">kháng thể đối chứng cùng lớp.</span> Kháng thể cùng lớp, cùng chất nhuộm nhưng không gắn đặc hiệu. Không dùng để đặt ngưỡng dương/âm trong flow lâm sàng.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-mhla-dr"><td>mHLA-DR</td><td><span class="full">HLA-DR trên bạch cầu mono.</span> Mức HLA-DR trên mono, đo bằng ABC; giảm sâu gợi ý tình trạng ức chế miễn dịch trong nhiễm khuẩn huyết.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-hla-dr"><td>HLA-DR</td><td><span class="full">kháng nguyên bạch cầu người lớp II.</span> Có trên tế bào B, mono, tiền thân CD34+, pDC; âm trên bạch cầu hạt trưởng thành, đa số T nghỉ và APL.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-mat-do-khang-nguyen"><td>Mật độ kháng nguyên</td><td><span class="full">antigen density.</span> Số phân tử kháng nguyên trên mỗi tế bào; quyết định nên ghép marker với chất nhuộm sáng hay mờ.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-don-dong-da-dong"><td>Đơn dòng / đa dòng</td><td><span class="full">monoclonal / polyclonal.</span> Đơn dòng: các tế bào xuất phát từ một tế bào gốc, cùng một chuỗi nhẹ hoặc cùng TCR; dấu hiệu tân sinh. Đa dòng: hỗn hợp, thường là phản ứng.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-car-t"><td>CAR-T</td><td><span class="full">Chimeric Antigen Receptor T-cell.</span> Liệu pháp tế bào T gắn thụ thể nhân tạo nhắm kháng nguyên (CD19, BCMA…); có thể làm mất marker đích trên tế bào ác tính.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-chuan-do-khang-the"><td>Chuẩn độ kháng thể</td><td><span class="full">titration.</span> Thử dãy nồng độ kháng thể để chọn nồng độ cho stain index cao nhất mà nền không tăng.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-thu-the-fc"><td>Thụ thể Fc</td><td><span class="full">Fc receptor.</span> Thụ thể trên mono, đại thực bào, bạch cầu hạt, bám vào đuôi Fc của kháng thể, gây nhuộm không đặc hiệu.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-panel"><td>Panel</td><td><span class="full">file .PNL (trên Navios).</span> Chuỗi protocol chạy cho một mẫu, ví dụ 4 ống ClearLLab B, T, M1, M2. Trong thiết kế xét nghiệm, panel còn có nghĩa là bộ kháng thể dùng cho một mục đích.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-g-csf"><td>G-CSF</td><td><span class="full">granulocyte colony-stimulating factor.</span> Yếu tố kích thích dòng hạt; làm thay đổi kiểu hình dòng hạt và huy động CD34 ra máu.</td><td class="at"><a href="#dinhluong" title="Định lượng cường độ: MFI, MESF, ABC">1.10</a></td></tr><tr id="g-chuoi-nhe-kappa-lambda"><td>Chuỗi nhẹ kappa / lambda</td><td><span class="full">κ / λ light chain.</span> Mỗi tế bào B chỉ dùng một loại chuỗi nhẹ. Quần thể B bình thường có cả hai (đa dòng, κ:λ ≈ 1–2); chỉ một loại là đơn dòng.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-tuong-bao"><td>Tương bào</td><td><span class="full">plasma cell.</span> Tế bào B biệt hóa cuối cùng tiết kháng thể; CD38 rất sáng, CD138+, chuỗi nhẹ nội bào.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-nk"><td>NK</td><td><span class="full">Natural Killer, tế bào diệt tự nhiên.</span> Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-overlay"><td>Overlay</td><td><span class="full">chồng hình.</span> Vẽ nhiều quần thể hoặc nhiều file lên cùng một biểu đồ để so sánh.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-gated"><td>% Gated</td><td><span class="full">phần trăm trong cổng cha.</span> Số sự kiện trong cổng chia cho số sự kiện của cổng cha trực tiếp. Phải ghi rõ mẫu số khi báo.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-fmo"><td>FMO</td><td><span class="full">Fluorescence Minus One, đối chứng thiếu một màu.</span> Ống có đủ mọi kháng thể của panel trừ một màu; cho biết ranh giới âm thật của kênh thiếu, có tính cả độ loe từ các màu còn lại.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-kenh-goc-kenh-nhan"><td>Kênh gốc / kênh nhận</td><td><span class="full">primary / receiving channel.</span> Kênh gốc: đầu dò dành cho chất nhuộm đang xét. Kênh nhận: đầu dò khác bị tín hiệu của chất nhuộm đó lọt sang.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-egil"><td>EGIL</td><td><span class="full">European Group for the Immunological Characterization of Leukemias.</span> Hệ thống điểm gán dòng leukemia cũ (1995); nay được thay bằng tiêu chí WHO/ICC.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-tdt"><td>TdT</td><td><span class="full">terminal deoxynucleotidyl transferase.</span> Enzym nhân của tế bào lympho non; dương trong B-ALL, T-ALL và hematogone sớm.</td><td class="at"><a href="#dosang" title="Độ sáng chất nhuộm và mật độ kháng nguyên">1.11</a></td></tr><tr id="g-discriminator"><td>Discriminator</td><td><span class="full">trigger, ngưỡng ghi nhận.</span> Ngưỡng tín hiệu (thường trên FS) mà xung phải vượt thì máy mới ghi thành sự kiện. Đặt trước khi thu, khác với cổng đặt sau khi thu.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-rbc"><td>RBC</td><td><span class="full">Red Blood Cell, hồng cầu.</span> Hồng cầu.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-ishage"><td>ISHAGE</td><td><span class="full">International Society of Hematotherapy and Graft Engineering.</span> Hội đưa ra quy trình cổng chuẩn cho đếm tế bào CD34 (ISHAGE gating).</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-dem-cd34-ishage"><td>Đếm CD34 ISHAGE</td><td><span class="full">ISHAGE gating.</span> Chuỗi cổng chuẩn để đếm tế bào gốc CD34+: loại tế bào chết (7-AAD), cổng CD45, CD34 sáng với SS thấp, CD45 mờ, xác nhận FS/SS.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-cytosettings"><td>Cytosettings</td><td><span class="full">cài đặt máy.</span> Tập điện áp, gain, discriminator và ma trận bù lưu kèm protocol.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-mau-so"><td>Mẫu số</td><td><span class="full">denominator.</span> Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-cd45dim"><td>CD45dim</td><td><span class="full">CD45 mờ.</span> Vùng tế bào có CD45 yếu hơn lympho trên biểu đồ CD45 × SS, nơi blast thường nằm.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-prime"><td>Prime</td><td><span class="full">mồi dịch.</span> Thao tác đẩy dịch qua đường ống để loại bọt khí trước khi chạy.</td><td class="at"><a href="#sukien" title="Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận">1.12</a></td></tr><tr id="g-fwhm"><td>FWHM</td><td><span class="full">full width at half maximum.</span> Độ rộng của đỉnh đo tại một nửa chiều cao. Với phân bố chuẩn, FWHM = 2,354 × SD.</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr><tr id="g-aml"><td>AML</td><td><span class="full">Acute Myeloid Leukemia, leukemia cấp dòng tủy.</span> Ung thư máu do blast dòng tủy tăng sinh trong tủy và máu.</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr><tr id="g-poisson"><td>Poisson</td><td><span class="full">phân bố Poisson.</span> Quy luật của phép đếm sự kiện hiếm ngẫu nhiên: nếu đếm được n sự kiện thì SD ≈ √n và CV ≈ 1/√n.</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr><tr id="g-lod"><td>LOD</td><td><span class="full">Limit of Detection, giới hạn phát hiện.</span> Mức thấp nhất mà xét nghiệm phát hiện được một cách tin cậy. Trong flow sự kiện hiếm thường quy ước là cụm ≥ 20 sự kiện.</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr><tr id="g-lloq"><td>LLOQ</td><td><span class="full">Lower Limit of Quantification, giới hạn định lượng dưới.</span> Mức thấp nhất định lượng được với độ chụm và độ đúng chấp nhận được; quy ước thường là ≥ 50 sự kiện (CV ≈ 14%).</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr><tr id="g-su-kien-hiem"><td>Sự kiện hiếm</td><td><span class="full">rare event.</span> Quần thể chiếm tỷ lệ rất nhỏ (ví dụ &lt; 0,1%), như MRD, PNH nhỏ; độ tin cậy phụ thuộc số sự kiện đếm được.</td><td class="at"><a href="#thongke" title="Thống kê mô tả trong flow">1.13</a></td></tr></tbody></table></div></div></details>

<div id="tongquan" class="ftb-anchor"></div>

## 1.1 Ba hệ thống của một máy flow

Mọi máy flow cytometry gồm ba hệ thống phối hợp. **Hệ dòng chảy (fluidics)** đưa tế bào đi từng chiếc một qua điểm đo. **Hệ quang học (optics)** gồm laser kích thích và hệ thống gương, kính lọc thu ánh sáng tán xạ và huỳnh quang. **Hệ điện tử (electronics)** biến ánh sáng thành xung điện, số hóa và lưu lại thành sự kiện (event) với nhiều tham số.

Trên Navios EX, máy đo đồng thời tán xạ thẳng (FS), tán xạ bên (SS) và tối đa 10 màu huỳnh quang từ 3 laser rắn 488, 638 và 405 nm. Mỗi tế bào trở thành một dòng dữ liệu, mỗi cột là một tham số. File LMD hay FCS là bảng dữ liệu đó kèm phần đầu (header) chứa cài đặt máy.

<div class="flow">
<div class="node"><b>Mẫu</b>Huyền dịch tế bào đơn</div><span class="arr">→</span>
<div class="node"><b>Fluidics</b>Hội tụ thủy động</div><span class="arr">→</span>
<div class="node"><b>Optics</b>Laser, kính lọc</div><span class="arr">→</span>
<div class="node"><b>Detector</b>Photodiode, PMT</div><span class="arr">→</span>
<div class="node"><b>Electronics</b>Xung, ADC, log</div><span class="arr">→</span>
<div class="node"><b>Dữ liệu</b>LMD / FCS</div>
</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Máy flow giống băng chuyền soi hành lý ở sân bay</div>
<p><b>Hệ dòng chảy</b> là băng chuyền: xếp từng vali (tế bào) thành một hàng, đi qua đúng một điểm. <b>Hệ quang học</b> là máy soi: chiếu đèn (laser) và chụp từ nhiều góc, mỗi “camera” (đầu dò) nhìn một màu. <b>Hệ điện tử</b> là người ghi sổ: với mỗi vali ghi một dòng số liệu.</p>
<p>Kết quả cuối cùng là file LMD, giống một bảng tính khổng lồ: <b>mỗi hàng là một tế bào, mỗi cột là một tham số</b> (FS, SS, FL1… FL10, TIME). Mọi biểu đồ và cổng sau này chỉ là cách lọc và vẽ bảng tính đó.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Một file ClearLLab có bao nhiêu con số?</div>
<p>Ống B của ClearLLab thu khoảng 100 000 sự kiện × 14 cột (FS INT, FS PEAK, SS INT, 10 kênh FL, TIME) = 1,4 triệu con số. Một mẫu 4 ống là khoảng 5,6 triệu con số. Người đọc kết quả không nhìn từng số mà nhìn hình dạng đám chấm, nên cách vẽ (thang, cổng, màu) quyết định kết luận.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "system"}'><figcaption>Ba hệ thống của máy flow cytometry và đường đi của dữ liệu.</figcaption></figure>

<div id="fluidics" class="ftb-anchor"></div>

## 1.2 Hệ dòng chảy và hội tụ thủy động

Mẫu được bơm vào giữa một dòng dịch bao (sheath, trên Navios là IsoFlow) chảy nhanh hơn. Chênh lệch áp suất và vận tốc làm dòng mẫu bị ép mảnh lại ở trung tâm, gọi là **hội tụ thủy động (hydrodynamic focusing)**. Nhờ vậy tế bào đi qua chùm laser ở cùng một vị trí, cùng tốc độ, nhận cùng một lượng ánh sáng. Đây là điều kiện để hai tế bào giống nhau cho tín hiệu giống nhau, tức là để CV của quần thể nhỏ.

Áp suất mẫu càng cao (tốc độ chảy càng nhanh) thì lõi mẫu càng rộng. Tế bào có thể đi lệch tâm chùm tia, nhận ánh sáng không đều, làm quần thể loe ra (CV tăng). Đồng thời xác suất hai tế bào cùng lọt vào chùm laser (trùng sự kiện, coincidence) tăng lên. IFU Navios EX nêu rõ: tốc độ chảy càng nhanh, khả năng trùng sự kiện và CV càng cao.

<div class="tbl-wrap"><table>
<thead><tr><th>Tốc độ chảy Navios EX</th><th>Lưu lượng mẫu xấp xỉ</th><th>Dùng khi</th></tr></thead>
<tbody>
<tr><td>Low</td><td>≈ 10 µL/phút</td><td>QC Flow-Check Pro, phân tích DNA, khi cần CV thấp nhất</td></tr>
<tr><td>Medium</td><td>≈ 30 µL/phút</td><td>Đa số ứng dụng miễn dịch kiểu hình; spec hiệu năng đo ở mức này trừ khi ghi khác</td></tr>
<tr><td>High</td><td>≈ 70 µL/phút</td><td>Thu nhiều sự kiện (MRD, PNH độ nhạy cao) với mẫu loãng; theo dõi tốc độ sự kiện để tránh trùng</td></tr>
</tbody>
</table></div>

<div class="callout warn"><b class="t">Quy tắc thực hành</b>Tăng số tế bào thu được bằng cách cô đặc mẫu (bulk lysis, ly tâm) tốt hơn là đẩy tốc độ chảy lên tối đa với mẫu loãng. Navios EX đạt hiệu suất &gt;90% ở 25 000 sự kiện/giây theo spec, nhưng ở tốc độ đó CV và tỷ lệ doublet đều xấu đi. Với mẫu lâm sàng, giữ tốc độ sự kiện ở mức vài nghìn mỗi giây là an toàn.</div>

Nồng độ tế bào tối ưu theo IFU Navios EX là khoảng 5 × 10⁶ tế bào/mL trong ống 12 × 75 mm, ở dạng huyền dịch đơn bào. Mẫu đặc hơn làm tăng doublet và tắc; mẫu loãng hơn kéo dài thời gian thu nhận.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Hội tụ thủy động như xe nhập làn</div>
<p>Dịch bao (sheath, IsoFlow) chảy nhanh bao quanh dòng mẫu, ép dòng mẫu thành một sợi rất mảnh ở giữa, giống làn xe bị ép từ ba làn xuống một làn. Tế bào buộc phải đi qua chùm tia lần lượt, từng con một, ở cùng một vị trí.</p>
<p>Tốc độ mẫu càng cao (Low → Medium → High), sợi lõi càng to. Lõi to thì tế bào đi lệch tâm chùm tia khác nhau, nhận ánh sáng khác nhau, nên <b>CV rộng ra</b>.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Ước lượng tốc độ sự kiện trước khi chạy</div>
<p>Giả sử mẫu sau ly giải có khoảng 2 000 bạch cầu/µL và tốc độ hút khoảng 60 µL/phút (mức cao; xem IFU cho giá trị đúng của máy). Mỗi phút máy gặp 2 000 × 60 = 120 000 tế bào, tức khoảng 2 000 sự kiện/giây. Mẫu đặc gấp 10 lần sẽ lên 20 000 sự kiện/giây: hai tế bào dễ vào chùm tia cùng lúc (trùng sự kiện, doublet giả) và CV rộng. Pha loãng hoặc hạ tốc độ là cách xử lý.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Sao hôm nay quần thể lympho bè ra?”</div>
<ol><li>Tốc độ chảy có bị đặt High không? Mẫu có quá đặc không?</li><li>Flow-Check Pro sáng nay HPCV có đạt không?</li><li>Xem TIME × FS: có đoạn bọt khí, tắc nghẽn không?</li></ol>
<p>Nếu QC hạt đạt, phần lớn nguyên nhân nằm ở mẫu và tốc độ chảy, không phải máy.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "focus"}'><figcaption>Hội tụ thủy động: dịch bao ép lõi mẫu mảnh lại để tế bào đi từng chiếc qua tâm chùm laser.</figcaption></figure>

<div id="laser" class="ftb-anchor"></div>

## 1.3 Laser và chùm tia

Navios EX dùng 3 laser rắn: xanh dương 488 nm (55 mW), đỏ 638 nm (50 mW) và tím 405 nm (80 mW, tùy chọn). Chùm tia được thấu kính cầu và thấu kính trụ nắn thành điểm hình elip. Kích thước elip theo spec: laser xanh cao 8 µm × rộng 80 µm; laser đỏ 11 × 160 µm; laser tím 6 × 150 µm. Ba chùm tia cách nhau 90 µm (±4,5 µm) theo chiều dòng chảy, nên tế bào gặp lần lượt từng laser. Hệ điện tử dùng độ trễ thời gian (laser delay) để ghép tín hiệu của 3 laser về cùng một tế bào.

Chiều cao elip nhỏ (vài µm) so với kích thước tế bào (7–20 µm) có hệ quả quan trọng: thời gian tế bào đi qua chùm tia tỷ lệ với kích thước của nó, nên độ rộng xung (TOF, width) phản ánh kích thước và giúp phát hiện doublet. Chiều rộng elip lớn giúp tế bào lệch tâm một chút vẫn nhận gần như cùng cường độ.

<div class="callout"><b class="t">Vì sao laser lệch thì QC hỏng trước tiên</b>Nếu căn chỉnh laser lệch, tế bào đi qua phần rìa elip nơi cường độ giảm nhanh. Tín hiệu giảm và dao động, CV của hạt Flow-Check Pro tăng. Đó là lý do HPCV của Flow-Check Pro là chỉ số giám sát căn chỉnh quang học và dòng chảy hằng ngày (chương 03).</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Ba laser như ba đèn pin đặt dọc đường đi</div>
<p>Trên Navios EX, ba chùm laser 488, 638 và 405 nm chiếu vào dòng chảy ở ba điểm cách nhau. Một tế bào lần lượt đi qua đèn thứ nhất, rồi đèn thứ hai, rồi đèn thứ ba, cách nhau vài micro giây. Máy phải “ghép” ba lần chớp sáng đó thành một hàng dữ liệu của cùng một tế bào, nhờ thời gian trễ giữa các laser được hiệu chỉnh khi lắp đặt.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Laser 488 nm không chỉ kích thích FITC</div>
<p>Mỗi laser kích thích nhiều chất nhuộm: laser xanh 488 nm kích thích FITC, PE, ECD, PC5.5, PC7. Các tandem trên PE phát ở bước sóng dài hơn nhiều nhưng vẫn “dùng chung” laser xanh. Vì vậy chất nhuộm được nhóm theo laser kích thích chứ không theo màu phát ra. Khi một laser yếu dần, <b>mọi kênh của laser đó</b> cùng tụt, và AutoSetup sẽ tăng điện áp các kênh đó.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "beams"}'><figcaption>Ba chùm laser elip của Navios EX, cách nhau 90 µm theo chiều dòng chảy (kích thước theo spec IFU).</figcaption></figure>

<div id="scatter" class="ftb-anchor"></div>

## 1.4 Tán xạ thẳng và tán xạ bên

**Tán xạ thẳng (FS, FSC)** là ánh sáng lệch góc nhỏ so với trục laser. FS tỷ lệ gần đúng với kích thước tế bào, nhưng còn phụ thuộc chiết suất và trạng thái màng. Tế bào chết và tế bào cố định thường có FS thấp hơn. Trên Navios EX, đầu dò FS là photodiode, ánh sáng đi qua kính lọc 488 BP trước khi tới cảm biến, và có 3 góc thu do phần mềm chọn:

<div class="tbl-wrap"><table>
<thead><tr><th>Chế độ FS</th><th>Góc thu</th><th>Phạm vi kích thước</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>Wide</td><td>1–19°</td><td>1–20 µm</td><td>Mặc định; bắt buộc cho ứng dụng IVD trừ khi IFU của ứng dụng ghi khác</td></tr>
<tr><td>Narrow</td><td>1–8°</td><td>hạt lớn đến &lt;40 µm</td><td>Tế bào lớn, cụm</td></tr>
<tr><td>Wide Enhanced</td><td>—</td><td>dưới micron</td><td>Vi hạt, túi ngoại bào (nghiên cứu); spec phân giải hạt 0,4 µm đo ở chế độ W2</td></tr>
</tbody>
</table></div>

**Tán xạ bên (SS, SSC)** được thu ở góc 90°, cùng bước sóng 488 nm. SS phản ánh độ phức tạp bên trong: hạt bào tương, hình dạng nhân. Đây là thông số tách lympho (SS thấp), mono (SS trung bình) và bạch cầu hạt (SS cao). SS mạnh hơn huỳnh quang rất nhiều nên được tách ra đầu tiên khỏi chùm sáng thu từ laser xanh bằng kính lọc 488 BP đặt nghiêng 18°.

Trong lâm sàng, SS của bạch cầu hạt là chỉ số hình thái quan trọng. Bạch cầu hạt giảm hạt trong MDS có SS thấp; tỷ số SS hạt/lympho là một tiêu chí trong điểm Ogata (chương 11). Tiền tủy bào ác tính trong APL thể điển hình có SS cao, ngang bạch cầu hạt trưởng thành.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">FS là cái bóng, SS là độ lấm tấm bên trong</div>
<p>FS (tán xạ thẳng) giống cái bóng của vật chắn đèn: vật càng to, bóng càng lớn. SS (tán xạ bên) giống ánh sáng dội ra từ những hạt nhỏ bên trong: tế bào càng nhiều hạt, nhân càng phức tạp, SS càng cao.</p>
<p>Lympho nhỏ, ít hạt: FS thấp, SS thấp. Mono to hơn, ít hạt: FS cao hơn, SS trung bình. Bạch cầu hạt: FS cao, SS cao nhất.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">FS không phải thước đo kích thước tính bằng µm</div>
<p>FS phụ thuộc cả chiết suất và hình dạng tế bào. Tế bào chết, tế bào sau cố định, hay hạt nhựa cùng đường kính cho FS khác nhau. Dùng FS để <b>so sánh tương đối</b> trong cùng mẫu (lớn hơn, nhỏ hơn), không để đọc ra đường kính.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "scatter"}'><figcaption>Hình học tán xạ: FS ở góc nhỏ, SS và huỳnh quang ở 90°.</figcaption></figure>

<div id="huynhquang" class="ftb-anchor"></div>

## 1.5 Huỳnh quang: từ phân tử đến photon

### Hấp thụ, phát xạ và độ dịch Stokes

Một chất huỳnh quang hấp thụ photon có năng lượng phù hợp, electron lên trạng thái kích thích, mất một phần năng lượng dưới dạng nhiệt, rồi trở về trạng thái nền và phát ra photon có bước sóng dài hơn. Khoảng cách giữa đỉnh hấp thụ và đỉnh phát xạ gọi là **độ dịch Stokes**. FITC có độ dịch nhỏ (hấp thụ khoảng 495, phát xạ khoảng 520 nm). PE có độ dịch lớn hơn và hấp thụ rất mạnh ở 488 nm, nên là chất nhuộm sáng nhất trên laser xanh.

**Chất nhuộm tandem** (PE-Cy5 hay PC5, PE-Cy5.5 hay PC5.5, PE-Cy7 hay PC7, ECD là PE-Texas Red, APC-Alexa Fluor 700, APC-Alexa Fluor 750) ghép một phân tử cho (PE hoặc APC) với một phân tử nhận. Năng lượng truyền từ phân tử cho sang phân tử nhận bằng truyền năng lượng cộng hưởng (FRET), cho độ dịch Stokes rất lớn. Nhờ vậy một laser kích thích được nhiều màu. Điểm yếu là tandem có thể **phân rã** do ánh sáng, nhiệt, cố định hoặc bản chất từng lô: phân tử nhận bị hỏng, ánh sáng phát xạ trở về bước sóng của phân tử cho. PC7 hỏng sẽ phát sáng ở kênh PE, tạo dương giả trên kênh PE và đòi giá trị bù khác thường (chương 04).

### Phổ phát xạ rộng là gốc rễ của bù màu

Phổ phát xạ của mỗi chất nhuộm trải rộng hàng chục đến hàng trăm nm. Kính lọc băng thông của một kênh không chặn hết đuôi phổ của chất nhuộm lân cận. Kết quả: một phần ánh sáng FITC lọt vào kênh PE, PE lọt vào ECD, ECD lọt vào PC5.5, và cứ thế. Phần ánh sáng lọt sang gọi là **spillover**; việc trừ nó đi gọi là **bù màu (compensation)**, trình bày chi tiết ở chương 04.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Độ dịch Stokes và tandem</div>
<p>Phân tử nhuộm hấp thụ ánh sáng năng lượng cao (bước sóng ngắn) rồi phát lại ánh sáng năng lượng thấp hơn (bước sóng dài hơn), vì mất một ít năng lượng ở giữa, giống quả bóng nảy xuống cầu thang mỗi bậc thấp hơn một chút. Khoảng cách giữa đỉnh hấp thụ và đỉnh phát xạ là độ dịch Stokes.</p>
<p><b>Tandem</b> (PC5.5, PC7, ECD, APC-A700, APC-A750) là hai chất nhuộm ghép đôi: PE hoặc APC nhận ánh sáng rồi “chuyền” năng lượng cho chất thứ hai phát ở bước sóng dài hơn. Nếu mối ghép bị phá (ánh sáng, nhiệt, cố định, lô kém), một phần năng lượng không được chuyền, PE tự phát ra. Kết quả là tín hiệu lọt ngược về kênh PE tăng lên.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Tuần này kênh PE có dương giả trên tế bào PC7 sáng”</div>
<ol><li>Lọ kháng thể PC7 có để ra ánh sáng, để ngoài tủ lạnh lâu, hay đã mở nhiều tháng không?</li><li>Mẫu có cố định trước khi chạy và để lâu không?</li><li>Ma trận bù tạo bằng đúng lô PC7 đang dùng không?</li></ol>
<p>Tandem thoái biến làm sai bù màu ngay cả khi máy hoàn toàn bình thường.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "stokes"}'><figcaption>Hấp thụ và phát xạ của FITC; khoảng cách hai đỉnh là độ dịch Stokes (đường cong minh họa).</figcaption></figure>

<div id="quanghoc" class="ftb-anchor"></div>

## 1.6 Hệ thống thu ánh sáng: kính lọc lưỡng sắc và băng thông

Ánh sáng phát ra từ điểm giao giữa tế bào và từng laser được thu qua cáp quang, rồi đi qua một chuỗi **kính lọc lưỡng sắc (dichroic)**. Trên Navios EX, các kính lưỡng sắc là loại shortpass (DC SP): cho bước sóng ngắn đi qua và phản xạ bước sóng dài hơn ngưỡng ghi trên kính. Trước mỗi ống nhân quang (PMT) có một **kính lọc băng thông (bandpass, BP)**, ký hiệu như 525 BP 40 nghĩa là trung tâm 525 nm, rộng 40 nm (505–545). Kính **longpass (LP)**, như 755 LP, cho đi mọi bước sóng dài hơn 755 nm.

IFU Navios EX nhấn mạnh hai điểm thiết kế: các kính lưỡng sắc được đặt sao cho ánh sáng huỳnh quang đi qua ít bề mặt quang học nhất, và kính lọc có thể thay riêng từng chiếc mà không phải căn chỉnh lại hệ quang. Khi thay kính lưỡng sắc phải xác định đúng mặt có lớp phủ (IFU chương 12).

<div class="tbl-wrap"><table>
<thead><tr><th>Kênh</th><th>Laser</th><th>Kính lọc trước PMT</th><th>Chất nhuộm thiết kế</th><th>Chất nhuộm cùng kênh có thể dùng</th></tr></thead>
<tbody>
<tr><td>FL1</td><td><span class="laser l488">488</span></td><td>525 BP 40</td><td>FITC</td><td>Alexa Fluor 488, FLAER-Alexa 488</td></tr>
<tr><td>FL2</td><td><span class="laser l488">488</span></td><td>575 BP 30</td><td>PE</td><td>RD1 (tên cũ của PE ở Beckman)</td></tr>
<tr><td>FL3</td><td><span class="laser l488">488</span></td><td>614 BP 20 (sau 595 DC SP)</td><td>ECD</td><td>PE-Texas Red, PE-CF594</td></tr>
<tr><td>FL4</td><td><span class="laser l488">488</span></td><td>695 BP 30 (cấu hình cũ 675 BP 20)</td><td>PC5.5</td><td>PC5 (PE-Cy5), PerCP-Cy5.5, 7-AAD</td></tr>
<tr><td>FL5</td><td><span class="laser l488">488</span></td><td>755 LP</td><td>PC7</td><td>PE-Cy7</td></tr>
<tr><td>FL6</td><td><span class="laser l638">638</span></td><td>660 BP 20</td><td>APC</td><td>Alexa Fluor 647</td></tr>
<tr><td>FL7</td><td><span class="laser l638">638</span></td><td>725 BP 20</td><td>APC-Alexa Fluor 700</td><td>Alexa Fluor 700</td></tr>
<tr><td>FL8</td><td><span class="laser l638">638</span></td><td>755 LP</td><td>APC-Alexa Fluor 750</td><td>APC-H7, APC-Cy7</td></tr>
<tr><td>FL9</td><td><span class="laser l405">405</span></td><td>450 BP 50</td><td>Pacific Blue</td><td>BV421, V450, DAPI</td></tr>
<tr><td>FL10</td><td><span class="laser l405">405</span></td><td>550 BP 40</td><td>Krome Orange</td><td>BV510, V500, Pacific Orange</td></tr>
</tbody>
</table></div>

<p class="src">Cấu hình 3 laser / 10 màu mặc định theo IFU Navios EX (Figure 3.5). Cột cuối là gợi ý tương thích quang phổ; trước khi dùng chất nhuộm của hãng khác phải khai báo trong Custom Dye Entries và thẩm định.</p>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Gương lưỡng sắc và kính lọc băng thông</div>
<p>Gương lưỡng sắc (dichroic) giống người gác cổng chia làn: cho một dải màu đi thẳng, hắt dải còn lại sang bên. Kính lọc băng thông (bandpass) đặt ngay trước đầu dò là tấm lưới cuối cùng, chỉ cho đúng dải cần đo đi qua.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Đọc ký hiệu kính lọc</div>
<p>Kính lọc “525/40” cho qua ánh sáng từ 525 − 20 = 505 nm đến 525 + 20 = 545 nm. FITC phát mạnh nhất quanh 520 nm nên lọt gần trọn vào cửa sổ này. PE phát mạnh quanh 575 nm, nhưng đuôi trái phổ PE vẫn chạm vào 545 nm, nên có một phần nhỏ PE lọt sang FL1. Đó là nguồn gốc của spillover.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Kính lọc LP, BP và dichroic</div>
<p><b>LP 600</b> (long pass) cho qua mọi thứ dài hơn 600 nm. <b>BP 525/40</b> chỉ cho qua một dải. <b>Dichroic</b> không chặn ánh sáng mà chia đường đi. Khi thay hoặc lắp nhầm vị trí kính lọc, cả spillover lẫn độ nhạy đều đổi, nên phải chạy lại AutoSetup và ma trận bù.</p></div>

<figure class="fig" data-fig='{"t": "spec", "dyes": ["FITC", "PE", "ECD", "PC5.5", "PC7"], "filters": ["FL1", "FL2", "FL3", "FL4", "FL5"], "lasers": [488], "note": "laser 488"}'><figcaption>Phổ phát xạ (minh họa) của 5 chất nhuộm laser xanh và các cửa sổ kính lọc FL1–FL5 của Navios EX. Vùng chồng lấn là nguồn spillover.</figcaption></figure>

<div id="detector" class="ftb-anchor"></div>

## 1.7 Đầu dò: photodiode và ống nhân quang

FS và SS dùng **photodiode** vì tín hiệu mạnh. Mười kênh huỳnh quang dùng **ống nhân quang (PMT)**, dải phổ 200–800 nm. PMT biến photon thành electron ở photocathode, rồi nhân lên qua chuỗi dynode. Mức nhân phụ thuộc điện áp: trên Navios EX từ 250 đến 1000 V, bước 1 V. Điện áp càng cao, tín hiệu càng lớn, nhưng nhiễu điện tử cũng được khuếch đại.

Hai khái niệm phải phân biệt khi nói chuyện với bác sĩ hay kỹ sư:

<div class="grid2">
<div class="card"><h4>Độ nhạy (sensitivity, detection efficiency)</h4><p>Khả năng tách quần thể mờ khỏi quần thể âm. Phụ thuộc hiệu suất thu photon (Q) và nền quang học (B). Không tăng được bằng cách tăng điện áp quá mức tối ưu.</p></div>
<div class="card"><h4>Phân giải (resolution)</h4><p>Khả năng tách hai quần thể có cường độ gần nhau. Phụ thuộc CV của quần thể (căn chỉnh, dòng chảy, thống kê photon). Đo bằng HPCV của hạt.</p></div>
</div>

Spec độ nhạy của Navios EX được đo bằng hạt hiệu chuẩn nhiều mức (Spherotech) và báo theo MESF: 85 MESF cho FITC, 70 cho PE, 21 cho ECD, 26 cho PC5, 277 cho PC7, 132 cho APC, 192 cho APC-A700, 70 cho APC-A750, 50 cho Pacific Blue, 275 cho Krome Orange. Số càng nhỏ, kênh càng phát hiện được tín hiệu yếu. Ý nghĩa thực tế: một kháng nguyên mật độ thấp đặt trên PC7 hay Krome Orange sẽ khó tách khỏi âm hơn nhiều so với khi đặt trên PE.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Tăng điện áp như phóng to ảnh số</div>
<p>Phóng to một bức ảnh chụp thiếu sáng thì ảnh to hơn nhưng không rõ thêm chi tiết, vì thông tin không có từ đầu. Tương tự, khi photon từ một kháng nguyên mờ quá ít, tăng điện áp PMT làm tín hiệu to hơn nhưng nhiễu cũng to theo, quần thể mờ không tách thêm khỏi quần thể âm. Độ nhạy phụ thuộc số photon thu được (Q) và nền quang học (B), không phụ thuộc “núm vặn”.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Tăng volt lên cho CD dim tách ra được không?”</div>
<p>Chỉ đúng khi quần thể âm đang bị ép vào nền nhiễu điện tử (điện áp quá thấp). Khi quần thể âm đã nằm rõ trên nền, tăng thêm chỉ làm mọi thứ to lên và dễ bão hòa quần thể sáng. Cách đúng: so stain index ở vài mức điện áp (mục 1.11), hoặc đổi marker sang chất nhuộm sáng hơn.</p></div>

<figure class="fig" data-fig='{"t": "schem", "k": "pmt"}'><figcaption>Ống nhân quang: photon giải phóng electron ở photocathode, được nhân qua chuỗi dynode.</figcaption></figure>

<div id="xung" class="ftb-anchor"></div>

## 1.8 Xung điện: INT, PEAK và TOF

Khi tế bào đi qua chùm tia, ánh sáng tăng dần, đạt đỉnh khi tế bào ở tâm chùm tia, rồi giảm khi tế bào ra khỏi. Điện áp ở đầu ra đầu dò vẽ thành một **xung**. Navios EX trích ba đặc trưng từ mỗi xung:

<div class="tbl-wrap"><table>
<thead><tr><th>Đặc trưng</th><th>Định nghĩa</th><th>Tương đương ở hãng khác</th><th>Dùng để</th></tr></thead>
<tbody>
<tr><td><code>INT</code> (integral)</td><td>Diện tích dưới xung; tỷ lệ với tổng lượng huỳnh quang</td><td>Area (-A)</td><td>Hầu hết phép đo kháng nguyên, DNA</td></tr>
<tr><td><code>PEAK</code></td><td>Chiều cao cực đại của xung</td><td>Height (-H)</td><td>So với INT để phát hiện doublet</td></tr>
<tr><td><code>TOF</code> (time of flight)</td><td>Độ rộng xung, thời gian tế bào đi qua chùm tia; chỉ ở thang tuyến tính</td><td>Width (-W)</td><td>Phát hiện doublet, ước lượng kích thước</td></tr>
</tbody>
</table></div>

IFU Navios EX minh họa: ba tế bào có cùng tổng huỳnh quang nhưng phân bố khác nhau sẽ cho đỉnh xung khác nhau, nhưng tích phân xung như nhau. Vì vậy INT là thước đo đúng của lượng chất nhuộm gắn trên tế bào. Hai tế bào dính nhau (doublet) có INT gấp đôi nhưng PEAK chỉ tăng ít, và TOF dài hơn. Trên biểu đồ `FS INT × FS PEAK`, singlet nằm trên một đường thẳng; doublet lệch về phía INT cao.

Phần mềm Navios EX cho chọn tối đa 16 tham số, kể cả tham số dẫn xuất. Chọn cùng một tín hiệu ở cả thang lin và log chỉ tính là một tham số. Với ClearLLab 10C cần: FS INT, FS PEAK, SS INT, 10 kênh FL INT và TIME, vừa trong giới hạn.

<div class="plots">
<figure class="plot"><canvas class="plot" data-spec='{"x":"FS INT","y":"FS PEAK","xs":"lin","ys":"lin","seed":3,"pops":[{"n":2400,"line":[0.18,0.2,0.62,0.66],"sx":0.015,"sy":0.015,"c":"b488","l":"Singlet","lx":0.52,"ly":0.72},{"n":220,"line":[0.4,0.24,0.92,0.66],"sx":0.02,"sy":0.02,"c":"r638","l":"Doublet / aggregate","lx":0.62,"ly":0.36}],"gates":[{"poly":[[0.1,0.16],[0.62,0.74],[0.7,0.74],[0.18,0.1]],"c":"accent","l":"Singlets","lx":0.08,"ly":0.32}],"note":"mô phỏng"}' height="400" width="520"></canvas><figcaption>Cổng Singlets trên FS INT × FS PEAK: doublet có INT lớn so với PEAK nên nằm dưới đường chéo.</figcaption></figure>
<figure class="plot"><canvas class="plot" data-spec='{"x":"TIME","y":"CD45 KrO","xs":"lin","ys":"log","xl":["0","25%","50%","75%","100%"],"seed":5,"pops":[{"n":1600,"line":[0.02,0.78,0.98,0.78],"sx":0.0,"sy":0.035,"c":"b488","l":"Lympho","nolab":true},{"n":1600,"line":[0.02,0.6,0.98,0.6],"sx":0.0,"sy":0.04,"c":"warn","l":"Hạt","nolab":true},{"n":220,"line":[0.43,0.25,0.5,0.25],"sx":0.003,"sy":0.12,"c":"r638","l":"Bọt khí / tắc nghẽn","lx":0.52,"ly":0.24}],"gates":[{"rect":[0.02,0.42,0.02,0.98],"c":"accent","l":"Time OK"},{"rect":[0.51,0.98,0.02,0.98],"c":"accent"}],"note":"mô phỏng"}' height="400" width="520"></canvas><figcaption>Kiểm tra TIME × CD45: một đoạn tín hiệu rơi xuống do bọt khí hoặc tắc vòi; loại đoạn đó khỏi phân tích.</figcaption></figure>
</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">INT, PEAK, TOF như nước chảy qua vòi</div>
<p>Hình dung tín hiệu như nước chảy qua một vòi trong lúc tế bào đi qua: <b>INT</b> là tổng lượng nước đã chảy (diện tích dưới xung), <b>PEAK</b> là lúc vòi mở to nhất (chiều cao xung), <b>TOF</b> là vòi mở bao lâu (độ rộng xung).</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Vì sao doublet lệch khỏi đường chéo</div>
<p>Một tế bào đơn: INT = 100, PEAK = 50, TOF = 2. Hai tế bào dính nhau đi qua liền nhau: INT gần gấp đôi (≈200) vì tổng ánh sáng gấp đôi, nhưng PEAK chỉ tăng ít (≈55) vì hai tế bào không cùng lúc ở tâm chùm tia, còn TOF dài ra (≈3,6). Trên FS INT × FS PEAK, doublet có INT lớn so với PEAK nên nằm lệch khỏi đường chéo của singlet.</p></div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Dựng cổng singlet trên Kaluza</div>
<ol><li>Tạo dot plot FS INT (trục X) × FS PEAK (trục Y), cả hai thang tuyến tính.</li><li>Vẽ cổng polygon ôm dải chéo của singlet, chừa các chấm lệch về phía INT cao.</li><li>Đặt cổng này làm cổng cha cho các biểu đồ phía sau.</li><li>Kiểm tra % singlet: mẫu máu ngoại vi tươi thường rất cao; tủy xương và mẫu cũ thấp hơn.</li></ol></div>

<div id="khuechdai" class="ftb-anchor"></div>

## 1.9 Khuếch đại, số hóa và thang hiển thị

Mục này đi theo đường đi của tín hiệu: **khuếch đại** (vặn to tín hiệu), **số hóa** (đổi xung điện thành con số), rồi **thang hiển thị** (cách trải các con số lên trục cho mắt người nhìn). Phần thang là chỗ hay gây hiểu lầm nhất, nên được giải thích kỹ kèm một mô phỏng để tự bấm thử.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Hai nghĩa của chữ “kênh”</div>
<p>Cùng một chữ “kênh”, nhưng trong flow có hai nghĩa khác nhau:</p>
<div class="tbl-wrap"><table>
<thead><tr><th></th><th>Kênh đầu dò (kênh màu)</th><th>Kênh trên trục (mức chia)</th></tr></thead>
<tbody>
<tr><td>Là gì</td><td>Một PMT riêng, đặt sau một kính lọc riêng, đo một chất nhuộm. FL1 đo FITC, FL2 đo PE…</td><td>Một mức chia trên trục của một tham số. Cường độ được chia thành 1024 mức (0–1023) để xếp sự kiện và vẽ histogram</td></tr>
<tr><td>Navios EX có</td><td>10 kênh FL (FL1–FL10), cộng FS và SS</td><td>1024 kênh trên trục của <i>mỗi</i> tham số: FS có 1024, FL1 có 1024…</td></tr>
<tr><td>Trong file LMD</td><td>Mỗi kênh là một cột dữ liệu</td><td>Giá trị trong cột đó</td></tr>
<tr><td>Tiếng Anh</td><td>detector, parameter</td><td>channel number, bin</td></tr>
</tbody>
</table></div>
<p>Hình dung máy có 10 cái nhiệt kế, mỗi cái đo một thứ. “1024 kênh” là số vạch chia trên mỗi nhiệt kế, không phải số nhiệt kế.</p>
<p>Nghĩa thứ hai xuất hiện ở nhiều chỗ khác: “MFI là số kênh tương đối” (mục 1.10) là MFI nằm ở vạch thứ bao nhiêu trên trục; “cho hạt Flow-Set Pro rơi vào cùng kênh mỗi ngày” (chương 03) là cho hạt rơi vào cùng một vị trí trên trục của đầu dò đó; con số “0,1024–1 024” của thang log cũng xuất phát từ 1024 vạch chia này.</p>
<p>Khi trao đổi với kỹ sư hay bác sĩ, nói rõ “kênh FL” hoặc “kênh màu” cho nghĩa thứ nhất, và “số kênh trên trục” hoặc “độ phân giải 1024 kênh” cho nghĩa thứ hai.</p>
</div>

<figure class="fig" data-fig='{"t":"cmp","p":[["Kênh đầu dò: 10 “nhiệt kế”",["FL1 FITC, FL2 PE … FL10 KrO","Mỗi kênh = 1 PMT + 1 kính lọc","Mỗi kênh = 1 cột trong file LMD"],"b488"],["Kênh trên trục: 1024 “vạch chia”",["Mỗi tham số có trục 0–1023","MFI, vùng đích Flow-Set Pro","Log 4 decade: 256 kênh mỗi decade"],"accent"]]}'><figcaption>Hai nghĩa của chữ “kênh”: số đầu dò và số mức chia trên trục của mỗi đầu dò.</figcaption></figure>

### Bước 1. Khuếch đại: vặn to tín hiệu trước khi đo

Ánh sáng từ một tế bào rất yếu, máy phải phóng nó lên thành xung điện đủ lớn để đo. Navios EX có hai “nút vặn”:

- **Điện áp PMT** (250–1000 V, bước 1 V) là nút chính của các kênh FL. Tăng điện áp thì mọi tín hiệu trong kênh đó tăng theo cùng một tỷ lệ, kể cả nhiễu.
- **Gain** là khuếch đại điện tử tuyến tính, nút phụ. Với FL1–FL10 chỉ có 1,0 hoặc 2,0. Với FS và SS có nhiều bậc (1, 2, 5, 7,5, 10, 20, 50, 75, 100, 200, 500, 750) kèm vernier tinh chỉnh, vì hai tín hiệu này đo bằng photodiode.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Đặt điện áp giống chỉnh âm lượng micro</div>
<p>Giọng nhỏ nhất (quần thể âm) vẫn phải nghe được, tức là nằm trên nền nhiễu điện tử. Giọng to nhất (quần thể sáng nhất) không được làm rè loa, tức là không chạm kịch kênh cuối.</p>
<p><b>Ví dụ hậu quả:</b> đặt điện áp CD45 Krome Orange quá cao, lympho dồn hết vào kênh 1023. Máy không biết giá trị thật là 1 100 hay 5 000, nên ghi tất cả là 1023. MFI sai, và bù màu cho các kênh khác cũng sai, vì máy trừ spillover dựa trên một con số đã bị cắt cụt.</p>
</div>

### Bước 2. Số hóa: biến xung điện thành con số

Bộ chuyển đổi ADC đổi độ lớn xung (INT, PEAK) thành một con số. Từ đây máy chỉ làm việc với con số; thang log 4 decade trên Navios cũng là một phép biến đổi số trên con số đó. Phần “thang” chỉ quyết định cách trải những con số lên trục để mắt người nhìn.

<div class="callout"><b class="t">Thang là cây thước, không phải dữ liệu</b>Đổi thang giống đặt một cây thước khác cạnh cùng một bộ dữ liệu. Dữ liệu không đổi, chỉ có thước đổi. Nhưng thước sai có thể khiến người đọc kết luận sai, như bẫy kinh điển ở cuối mục.</div>

### Bước 3. Ba loại thước

<div class="tbl-wrap"><table>
<thead><tr><th>Thang</th><th>Đặc điểm</th><th>Đọc tốt</th><th>Khi nào dùng</th></tr></thead>
<tbody>
<tr><td>Tuyến tính</td><td>1024 kênh (mức chia) cách đều trên trục của mỗi tham số. Từ 100 lên 200 dài bằng từ 900 lên 1000</td><td>Hiệu số (cộng, trừ)</td><td>FS, SS, TOF, DNA (chu kỳ tế bào)</td></tr>
<tr><td>Log 4 decade</td><td>Navios hiển thị 0,1–1 000 (thống kê tính trên 0,1024–1 024); mỗi decade chiếm 256 kênh. Không biểu diễn được giá trị ≤0</td><td>Tỷ lệ (gấp mấy lần)</td><td>Dữ liệu chưa bù hoặc bù ít; tương thích protocol cũ</td></tr>
<tr><td>Logicle / True View (biexponential)</td><td>Tuyến tính gần 0, log ở giá trị cao; hiển thị được giá trị âm. Navios gọi là True View: 6 decade, tới 2 decade âm</td><td>Cả vùng quanh 0 lẫn quần thể rất sáng</td><td>Mọi dữ liệu đa màu đã bù. Đây là thang đúng để đánh giá bù màu</td></tr>
</tbody>
</table></div>

#### Thang tuyến tính: thước kẻ thường

Thước này hợp khi các tín hiệu chỉ chênh nhau vài lần:

- **FS:** lympho khoảng 7 µm, bạch cầu hạt khoảng 12 µm. Tín hiệu chỉ chênh khoảng 2–3 lần, trải đều trên thước kẻ thường là đẹp.
- **DNA (chu kỳ tế bào)** là ví dụ rõ nhất. Đỉnh G0/G1 mang 2N DNA, đỉnh G2/M mang 4N, đúng gấp đôi. Đặt G0/G1 ở kênh 200 thì G2/M phải ở kênh 400, pha S rải giữa hai đỉnh. Một quần thể lệch bội có DNA index 1,3 sẽ ở kênh 260. Trên thang tuyến tính đọc được các tỷ lệ này bằng mắt và đo được CV của đỉnh. Trên thang log, khoảng “gấp đôi” chỉ còn khoảng 77 kênh, mọi thứ bị nén lại.
- **TOF** chỉ có ở thang tuyến tính.

**Điểm yếu:** kháng nguyên trên tế bào chênh nhau tới hàng nghìn lần. Ví dụ CD45 trong tủy xương: hồng cầu có nhân âm, khoảng 0,3; blast mờ, khoảng 5; lympho sáng, khoảng 100. Trên thước 0–1 000, lympho ở khoảng kênh 100, còn blast và hồng cầu có nhân cùng dồn trong kênh 0–5. Hai quần thể quan trọng nhất bị dính vào nhau.

#### Thang log 4 decade: thước theo bậc 10

Navios trải 4 decade (0,1 → 1 → 10 → 100 → 1 000) trên 1024 kênh, mỗi decade 256 kênh. Khoảng 1→10 dài bằng khoảng 100→1 000. Cùng ví dụ CD45 tủy xương:

<div class="tbl-wrap"><table>
<thead><tr><th>Quần thể</th><th>Giá trị</th><th>Vị trí trên thang tuyến tính</th><th>Vị trí trên thang log</th></tr></thead>
<tbody>
<tr><td>Hồng cầu có nhân</td><td>0,3</td><td>kênh ~0</td><td>kênh ~122</td></tr>
<tr><td>Blast</td><td>5</td><td>kênh ~5</td><td>kênh ~435</td></tr>
<tr><td>Lympho</td><td>100</td><td>kênh ~102</td><td>kênh ~768</td></tr>
</tbody>
</table></div>

<figure class="fig" data-fig='{"t":"axes","rows":[["Tuyến tính 0–1 000","lin",0,1000,[[0,"0"],[250,"250"],[500,"500"],[750,"750"],[1000,"1 000"]]],["Log 4 decade 0,1–1 000","log",0.1,1000,[[0.1,"0,1"],[1,"1"],[10,"10"],[100,"100"],[1000,"1 000"]]]],"pts":[[0.3,"Hồng cầu có nhân","muted"],[5,"Blast","r638"],[100,"Lympho","b488"]]}'><figcaption>Cùng ba giá trị CD45 trên hai cây thước: thang tuyến tính dồn blast và hồng cầu có nhân vào sát 0, thang log tách rõ ba quần thể (kênh ước tính).</figcaption></figure>

Ba quần thể tách nhau rõ ràng. Đó là lý do huỳnh quang kháng nguyên luôn xem trên thang log hoặc logicle. Thang log có thêm hai tính chất hay:

- Gain ×2 làm mọi quần thể dịch sang phải cùng một đoạn, khoảng 77 kênh (256 × log₁₀2), dù quần thể đó mờ hay sáng.
- Hai quần thể có cùng CV trông rộng như nhau, dù một cái ở 10, một cái ở 1 000.

Và có hai điểm yếu chết người:

- **Không vẽ được giá trị ≤0**, vì log của 0 hay số âm không tồn tại. Những sự kiện đó bị ép dính vào mép trục.
- **Phóng đại nhiễu ở vùng thấp.** Từ 0,3 lên 3 dài bằng từ 100 lên 1 000. Dao động ±1,5 quanh giá trị 100 gần như không thấy, nhưng ±1,5 quanh giá trị 0,5 trải ra hơn một decade.

#### Vì sao sau bù màu lại có giá trị âm?

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tế bào CD8-FITC trên kênh PE</div>
<p>Giả sử spillover FITC sang PE là 15%. Một tế bào CD8-FITC sáng có FITC = 150, nên đầu dò PE nhận khoảng 22,5 đơn vị từ FITC, cộng thêm khoảng 0,5 tự huỳnh quang. Bù màu là phép trừ:</p>
<div class="kyhieu mini"><div class="kh-t">Ký hiệu</div><ul>
<li><b>PE đo được</b>: con số đầu dò PE (FL2) ghi được, gồm PE thật của tế bào + phần FITC lọt sang + tự huỳnh quang.</li>
<li><b>FITC</b>: con số đầu dò FITC (FL1) ghi được.</li>
<li><b>0,15</b>: hệ số spillover FITC → PE, tức 15% viết dạng thập phân.</li>
<li><b>PE sau bù</b>: ước lượng PE thật sau khi trừ phần lọt sang. Cách tính đầy đủ cho nhiều màu ở mục 4.1.</li>
<li><b>SD</b> (độ lệch chuẩn): mức các tế bào dao động quanh giá trị trung bình (mục 1.13).</li>
</ul></div>
<div class="formula">PE sau bù = PE đo được − 0,15 × FITC</div>
<p>Phép trừ đúng về trung bình, nhưng 22,5 đơn vị kia là photon, mà photon có dao động thống kê. Tế bào này nhận 21, tế bào kia nhận 24, trong khi máy trừ cho tất cả cùng một mức. Sau phép trừ, quần thể CD8 có PE dao động quanh 0,5 với SD khoảng ±1,5. Khoảng một phần ba số tế bào có giá trị âm.</p>
<p>Đây không phải lỗi máy mà là thống kê photon. Hiện tượng này gọi là <b>spreading</b> (độ loe, chương 04), và không sửa được bằng cách chỉnh bù.</p>
</div>

Đặt quần thể đó lên thang log: khoảng một phần ba dồn sát trục, phần còn lại kéo thành vệt dài xuống phía trục. Nhìn vào ai cũng thấy như “bù quá”, rồi giảm giá trị bù, và kết quả là thiếu bù thật.

#### Thang logicle (True View): thước lai

Gần 0, logicle chia như thước tuyến tính, nên vẽ được cả giá trị âm và dương đối xứng nhau. Xa 0, nó chuyển dần sang log, nên vẫn trải được những quần thể sáng gấp hàng nghìn lần. Trên Navios, True View có 6 decade, trong đó tới 2 decade âm.

Trên logicle, quần thể CD8 ở ví dụ trên hiện ra đúng bản chất: một hình chuông hơi rộng, tâm nằm ngang với quần thể âm. Từ đó có **quy tắc trung vị** để kiểm tra bù.

Một lưu ý: nếu phần mềm cho chỉnh độ rộng vùng tuyến tính của logicle, đặt vùng này quá hẹp có thể làm quần thể âm tách giả thành hai bướu; đặt quá rộng thì quần thể dương mờ bị nuốt vào quần thể âm.

### Quy tắc trung vị: kiểm tra bù bằng tâm, không bằng mép

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Không nhìn hình dạng đám chấm, mà so vị trí “tâm” của hai quần thể</div>
<p><b>Trung vị</b> (median) là giá trị nằm chính giữa: một nửa số tế bào có giá trị cao hơn, một nửa thấp hơn. Quần thể loe rộng hay hẹp thì trung vị vẫn nằm ở tâm, vì phần loe lên và phần loe xuống cân nhau.</p>
<p>Áp vào ống có CD8-FITC, không có PE, xem trên plot FITC × PE thang logicle:</p>
<ul>
<li><b>Lympho CD8 âm:</b> không có FITC, nên không có gì tràn sang PE. Trên trục PE chỉ có tự huỳnh quang, trung vị khoảng 0,5. Đây là <b>mốc chuẩn</b>.</li>
<li><b>Lympho CD8 dương:</b> FITC khoảng 150, trước bù tràn sang PE khoảng 22,5. Tế bào này thật ra không có PE, nên sau khi bù đúng, PE của nó phải về đúng bằng tế bào âm: trung vị khoảng 0,5.</li>
</ul>
<div class="tbl-wrap"><table>
<thead><tr><th>Trung vị PE của CD8+</th><th>So với mốc 0,5</th><th>Kết luận</th></tr></thead>
<tbody>
<tr><td>~0,5</td><td>bằng</td><td>Bù đúng</td></tr>
<tr><td>~3</td><td>cao hơn</td><td>Thiếu bù: còn sót FITC chưa trừ hết</td></tr>
<tr><td>~−2</td><td>thấp hơn</td><td>Thừa bù: trừ quá tay</td></tr>
</tbody>
</table></div>
<p><b>“Độ rộng thì kệ nó”:</b> kể cả khi bù đúng, quần thể CD8+ vẫn loe theo trục PE rộng hơn hẳn quần thể âm, ví dụ trải từ −2,5 đến +3,5. Tăng bù chỉ kéo cả đám xuống, giảm bù chỉ đẩy cả đám lên, không làm đám hẹp lại. Vì vậy không đánh giá bằng “phía trên” hay “phía dưới” của đám chấm, vì nhìn mép rất dễ tưởng sai. Thứ dùng để đánh giá là trung vị.</p>
</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Kiểm tra bù bằng trung vị trên Kaluza</div>
<ol>
<li>Mở plot FITC × PE, để thang logicle.</li>
<li>Vẽ hai cổng: một ôm lympho FITC âm, một ôm lympho FITC dương.</li>
<li>Cho hiển thị thống kê Median của kênh PE (và FITC) cho từng cổng.</li>
<li>So hai trung vị PE. Nếu chênh nhau, ước lượng mức bù cần chỉnh thêm:</li>
</ol>
<div class="kyhieu mini"><div class="kh-t">Ký hiệu</div><ul>
<li><b>Chênh lệch trung vị PE</b> = trung vị PE của quần thể FITC dương − trung vị PE của quần thể FITC âm. Đây là phần FITC còn sót trên kênh PE sau bù.</li>
<li><b>Trung vị FITC quần thể dương − trung vị FITC quần thể âm</b>: lượng tín hiệu FITC gây ra phần sót đó.</li>
<li><b>% bù cần thêm</b>: phần trăm cần cộng vào ô spillover FITC → PE. Chia phần sót cho lượng FITC gây ra nó thì được phần trăm còn thiếu.</li>
</ul></div>
<div class="formula">% bù cần thêm ≈ (chênh lệch trung vị PE) ÷ (trung vị FITC quần thể dương − trung vị FITC quần thể âm) × 100%</div>
<p>Ví dụ PE chênh +3, FITC dương 150, FITC âm khoảng 0,6: 3 ÷ 149,4 ≈ 0,02 = 2%. Tăng bù FITC→PE thêm khoảng 2%, rồi kiểm tra lại.</p>
<p><b>Lưu ý:</b> so trong cùng một loại tế bào, lympho với lympho. Bạch cầu hạt có tự huỳnh quang cao hơn lympho; lấy lympho âm làm mốc để so với bạch cầu hạt dương sẽ tưởng thiếu bù trong khi thật ra là tự huỳnh quang. Với hạt bù (compensation beads), mốc là hạt âm trong cùng ống.</p>
</div>

<div class="lab" id="scale-lab">
<div class="labhead"><h4>Tự bấm thử: thang hiển thị, bù màu và khuếch đại</h4><span class="stat">dữ liệu mô phỏng · spillover FITC→PE thật 15%</span></div>
<div class="labgrid">
<canvas aria-label="Biểu đồ FITC so với PE" height="460" id="scaleCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label for="scaleSel">Thang hiển thị</label><select id="scaleSel"><option value="log">Log 4 decade</option><option selected="" value="logicle">Logicle (True View)</option><option value="lin">Tuyến tính</option></select></div>
<div class="ctl"><label for="scaleComp">Bù FITC → PE <output id="scaleCompOut">15%</output></label><input id="scaleComp" max="30" min="0" step="0.5" type="range" value="15"/></div>
<div class="ctl"><label for="scaleGain">Khuếch đại (cả hai kênh)</label><select id="scaleGain"><option selected="" value="1">×1</option><option value="2">×2</option><option value="4">×4</option><option value="8">×8</option></select></div>
<div><span class="pill ok" id="scaleStatus">Bù đúng</span></div>
<div class="stat" id="scaleStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<p>Ba quần thể lympho: âm (xám), FITC mờ (xanh lục) và FITC sáng (xanh dương). Không quần thể nào dương PE. Nét đứt là trung vị PE của quần thể âm; vạch đậm là trung vị PE của quần thể FITC sáng. Nên thử theo thứ tự:</p>
<ol class="tight">
<li>Giữ bù 15% (đúng), chọn <b>Log</b>. Quần thể FITC sáng trông như tụt xuống dưới quần thể âm, khoảng một phần ba bị ép vào mép dưới. Nhìn rất giống bù quá.</li>
<li>Chuyển sang <b>Logicle</b>, không đổi gì khác. Cùng bộ dữ liệu, nhưng quần thể sáng là hình chuông có tâm ngang nét đứt: bù đúng. Bước 1 và 2 chính là bẫy kinh điển.</li>
<li>Trên Logicle, kéo bù lên 25%: thừa bù thật, quần thể sáng tụt rõ dưới nét đứt. Kéo về 5%: quần thể sáng nằm cao hơn và xiên lên: thiếu bù.</li>
<li>Chọn <b>Tuyến tính</b>: quần thể âm và FITC mờ dính chung vào góc dưới trái. Đó là lý do không xem huỳnh quang kháng nguyên trên thang tuyến tính.</li>
<li>Đặt bù 15%, kéo khuếch đại lên <b>×8</b>: quần thể sáng chạm kịch mép phải, và phép bù sai luôn dù giá trị bù vẫn 15%. Đó là hậu quả của điện áp quá cao.</li>
</ol>
</div>
</div>

<div class="callout bad"><b class="t">Bẫy kinh điển</b>Trên thang log thuần, mọi sự kiện có giá trị sau bù ≤0 dồn thành một vệt sát trục. Người phân tích thấy “quần thể bị ép vào trục” và tưởng bù quá, rồi giảm giá trị bù. Kết quả là thiếu bù thật. Luôn kiểm tra bù trên thang logicle, bằng trung vị.</div>

### Tóm tắt: dùng thang nào khi nào

<div class="tbl-wrap"><table>
<thead><tr><th>Tín hiệu</th><th>Thang</th><th>Lý do</th></tr></thead>
<tbody>
<tr><td>FS, SS</td><td>Tuyến tính</td><td>Các tế bào chênh nhau ít lần, đọc hiệu số trực quan</td></tr>
<tr><td>TOF, FS INT × PEAK (doublet)</td><td>Tuyến tính</td><td>Singlet nằm trên một đường thẳng</td></tr>
<tr><td>DNA, chu kỳ tế bào</td><td>Tuyến tính</td><td>Cần thấy tỷ lệ 2N : 4N, đo CV đỉnh, DNA index</td></tr>
<tr><td>Huỳnh quang đa màu đã bù (ClearLLab 10C)</td><td>Logicle</td><td>Vẽ được giá trị âm, kiểm tra bù bằng trung vị</td></tr>
<tr><td>Huỳnh quang chưa bù, một màu, protocol cũ</td><td>Log</td><td>Không có giá trị âm nên log vẫn hiển thị đủ</td></tr>
</tbody>
</table></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Ba câu tự kiểm tra</div>
<details class="ans"><summary>Tăng gain FL2 từ 1,0 lên 2,0 thì trên thang log các quần thể dịch đi bao nhiêu kênh?</summary><p>Khoảng 77 kênh (256 × log₁₀2), và dịch như nhau cho mọi quần thể, mờ hay sáng.</p></details>
<details class="ans"><summary>Trên logicle, quần thể CD8-FITC rộng hơn hẳn quần thể âm theo trục PE nhưng trung vị bằng nhau. Có phải bù sai không?</summary><p>Không. Đó là spreading do thống kê photon; chỉnh bù không làm hẹp lại được. Bù đúng khi hai trung vị bằng nhau.</p></details>
<details class="ans"><summary>Vì sao không phân tích chu kỳ tế bào trên thang log?</summary><p>Vì khoảng G0/G1 → G2/M (gấp đôi) bị nén còn khoảng 77 kênh, khó đo CV và khó thấy đỉnh lệch bội.</p></details>
</div>

<figure class="fig" data-fig='{"t": "schem", "k": "scales"}'><figcaption>Cùng một quần thể âm sau bù hiển thị trên thang log và thang logicle (minh họa).</figcaption></figure>

<div id="dinhluong" class="ftb-anchor"></div>

## 1.10 Định lượng cường độ: MFI, MESF, ABC

Ba khái niệm này trả lời ba câu hỏi khác nhau, từ dễ đến khó:

- **MFI:** “Tế bào này sáng hơn hay mờ hơn tế bào kia?” Con số tương đối, chỉ so được trong cùng điều kiện đo.
- **MESF:** “Độ sáng đó tương đương bao nhiêu phân tử chất nhuộm?” Đơn vị đã hiệu chuẩn, so được giữa các ngày và giữa các máy.
- **ABC:** “Mỗi tế bào có bao nhiêu phân tử kháng nguyên?” Đại lượng sinh học, đặt cạnh ngưỡng lâm sàng được.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Chiếc máy ảnh</div>
<p>MFI giống độ sáng trên ảnh: phụ thuộc thời gian phơi sáng và ISO. MESF giống chụp kèm một bảng đèn chuẩn để quy độ sáng về “bao nhiêu bóng đèn chuẩn”. ABC giống đếm thẳng ra trong phòng có bao nhiêu người.</p>
</div>

<figure class="fig" data-fig='{"t":"flow","n":[["MFI","vị trí trên trục · tương đối","b488"],["MESF","phân tử chất nhuộm tương đương · hiệu chuẩn máy","accent"],["ABC","kháng thể gắn trên mỗi tế bào · đại lượng sinh học","r638"]],"per":3,"h":96}'><figcaption>Ba bậc định lượng cường độ: càng sang phải càng so sánh được rộng hơn, nhưng càng cần nhiều điều kiện hơn.</figcaption></figure>

### MFI: dùng hằng ngày, nhưng chỉ so sánh trong cùng điều kiện

MFI là vị trí của quần thể trên trục, đọc theo số kênh trên trục (nghĩa thứ hai của chữ “kênh”, mục 1.9). Nó thay đổi khi đổi điện áp PMT, gain, lô kháng thể, quy trình nhuộm, thời gian từ lúc nhuộm đến lúc chạy, và khi đổi máy. Con số “CD20 MFI = 50” trên máy A không có nghĩa gì khi đặt cạnh “50” trên máy B. MFI vẫn dùng tốt trong ba tình huống:

**a) So sánh trong cùng một ống.** Đây là cách bác sĩ dùng nhiều nhất. Ví dụ ống CLL: CD20 trên tế bào CLL có MFI khoảng 8, CD20 trên lympho B bình thường còn sót lại khoảng 60. Kết luận “CD20 mờ” đến từ việc so với đối chứng nội tại trong cùng ống, không cần biết con số tuyệt đối. Câu hỏi “mờ so với cái gì?” chính là ý này.

**b) Theo dõi trên cùng một máy với vùng đích chuẩn hóa.** Navios dùng Flow-Set Pro để mỗi sáng chỉnh điện áp cho hạt rơi vào cùng kênh đích trên trục (chương 03). Nhờ vậy MFI hôm nay so được với MFI tuần trước, với điều kiện cùng lô kháng thể và cùng quy trình nhuộm.

**c) Chỉ số tỷ lệ (index).** Chia MFI của quần thể cần đo cho MFI của một quần thể đối chứng trong cùng mẫu. Ví dụ CD64 trên bạch cầu trung tính: bình thường rất ít, khi nhiễm khuẩn tăng lên trong vài giờ. Chỉ số = MFI CD64 bạch cầu trung tính ÷ MFI CD64 của lympho (âm), hoặc ÷ MFI hạt chuẩn kèm kit. Phép chia tự triệt tiêu ảnh hưởng của điện áp và lô thuốc thử, nên dễ chuẩn hóa hơn MFI trần.

Hai lưu ý khi báo MFI: dùng **trung vị**, không dùng trung bình (dữ liệu đã bù có giá trị âm và đuôi); ghi rõ MFI của quần thể nào, trên kênh nào.

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“CD45 Krome Orange tuần này sáng hơn tuần trước 30%”</div>
<ol>
<li>Flow-Set Pro có đạt vùng đích không? Xem báo cáo AutoSetup và Levey-Jennings.</li>
<li>Có đổi lô kháng thể hay lô ClearLLab không?</li>
<li>Có đổi máy, đổi thể tích mẫu, thời gian ủ, hay thời gian từ nhuộm đến chạy không?</li>
</ol>
<p>Nếu cả ba đều không đổi mà MFI vẫn trôi, mới nghĩ đến máy (căn chỉnh, công suất laser, PMT).</p>
</div>

### MESF: hiệu chuẩn máy, không phải đo tế bào

MESF (molecules of equivalent soluble fluorochrome) quy độ sáng về “số phân tử chất nhuộm tự do trong dung dịch cho cùng độ sáng”. Dùng một bộ hạt nhiều mức sáng, mỗi mức có giá trị MESF đã biết; chạy bộ hạt rồi dựng đường chuẩn MFI → MESF. Trong thực tế, MESF chủ yếu dùng để **đánh giá máy**:

- **Đọc spec độ nhạy.** Spec Navios EX “FITC 85 MESF” nghĩa là máy tách được khỏi nền một hạt chỉ mang tương đương khoảng 85 phân tử FITC. Krome Orange 275 MESF kém nhạy hơn khoảng 3 lần, nên kháng nguyên mật độ thấp không nên đặt ở Krome Orange.
- **So sánh hai máy hoặc hai phòng xét nghiệm.** Hai bệnh viện cùng chạy ClearLLab 10C trên hai Navios; bác sĩ thấy CD34 trên blast ở viện A trông mờ hơn viện B. Chạy cùng một bộ hạt MESF trên cả hai máy sẽ cho biết khác biệt do máy (độ nhạy, căn chỉnh) hay do mẫu.
- **Kiểm tra tuyến tính** sau sửa chữa hoặc thay PMT. Các mức hạt phải nằm trên một đường thẳng trong đồ thị log-log. Mức sáng nhất cong xuống là PMT hoặc ADC đang bão hòa.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">MESF chưa phải số kháng nguyên</div>
<p>Hạt MESF FITC chỉ hiệu chuẩn cho kênh FITC; mỗi chất nhuộm cần bộ hạt của chính chất nhuộm đó. Ngoài ra một kháng thể có thể gắn 3–5 phân tử FITC, và tỷ lệ này khác nhau giữa các lô, nên MESF không quy ra được số kháng nguyên trên tế bào.</p>
</div>

### ABC: đếm số vị trí gắn kháng thể trên mỗi tế bào

ABC (antibody binding capacity) là số kháng thể gắn được lên một tế bào. Khi kháng thể dùng ở nồng độ bão hòa, ABC xấp xỉ số phân tử kháng nguyên trên bề mặt tế bào. Đây là con số đặt cạnh ngưỡng lâm sàng được.

**Vì sao thường làm bằng PE:** kỹ thuật phổ biến nhất dùng hạt chuẩn PE (ví dụ bộ BD Quantibrite PE: 4 mức hạt, số phân tử PE/hạt in theo lô). PE là một protein lớn, có thể chế tạo kháng thể gắn đúng 1 PE trên 1 kháng thể. Khi đó số PE trên tế bào bằng số kháng thể trên tế bào, chính là ABC. Với FITC, mỗi kháng thể gắn nhiều phân tử với số lượng không cố định, nên không quy đổi chính xác được.

<ol class="steps">
<li>Chạy hạt chuẩn PE ở đúng cài đặt sẽ dùng cho mẫu: cùng điện áp, cùng gain.</li>
<li>Đọc MFI trung vị của từng mức hạt.</li>
<li>Dựng đường thẳng log₁₀(PE/hạt) theo log₁₀(MFI).</li>
<li>Nhuộm mẫu bằng kháng thể PE tỷ lệ 1:1, ở nồng độ bão hòa. Gate đúng quần thể, đọc MFI trung vị.</li>
<li>Quy MFI của mẫu ra số PE theo đường chuẩn. Trừ nền (MFI của ống không nhuộm hoặc ống isotype, cũng quy đổi qua đường chuẩn). Kết quả là ABC.</li>
</ol>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">mHLA-DR trên bạch cầu mono (số liệu giả định)</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Mức hạt</th><th>PE/hạt (theo lô)</th><th>MFI đo được</th></tr></thead>
<tbody><tr><td>Thấp</td><td>470</td><td>1,2</td></tr><tr><td>Trung bình thấp</td><td>5 300</td><td>13</td></tr><tr><td>Trung bình cao</td><td>23 800</td><td>58</td></tr><tr><td>Cao</td><td>62 000</td><td>150</td></tr></tbody>
</table></div>
<p>Bốn điểm gần như trên một đường: cứ 1 đơn vị MFI tương đương khoảng 400 phân tử PE. Mono nhuộm HLA-DR-PE có MFI trung vị 30, nền 0,5. Khi đó ABC ≈ 30 × 400 − 0,5 × 400 ≈ 11 800 kháng thể/tế bào. Bảng tính bên dưới dùng đường hồi quy log-log thay cho hệ số 400 làm tròn, nên cho kết quả chính xác hơn, khoảng 12 000. Nhập số của mình vào để thử.</p>
</div>

<figure class="fig" data-fig='{"t":"line","series":[["Hạt PE chuẩn",[[1.2,470],[13,5300],[58,23800],[150,62000]],"accent"],["Mono HLA-DR",[[30,12000]],"r638"]],"xl":"MFI trung vị (thang log)","yl":"PE/hạt hoặc ABC (thang log)","logx":true,"logy":true,"xmin":1,"xmax":200,"ymin":300,"ymax":100000,"xt":[[1,"1"],[10,"10"],[100,"100"]],"yt":[[1000,"10³"],[10000,"10⁴"],[100000,"10⁵"]]}'><figcaption>Đường chuẩn log-log từ 4 mức hạt PE và vị trí của mẫu mono HLA-DR trên đường chuẩn (số liệu giả định).</figcaption></figure>

<div class="lab">
<div class="labhead"><h4>Bảng tính ABC từ hạt PE</h4><span class="stat">nhập PE/hạt theo lô và MFI trung vị</span></div>
<div class="grid2" style="margin:0">
<div class="controls">
<div class="ctl"><label>Hạt 1: PE/hạt · MFI</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><input id="abcP1" type="number" value="470"/><input id="abcM1" step="0.1" type="number" value="1.2"/></div></div>
<div class="ctl"><label>Hạt 2: PE/hạt · MFI</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><input id="abcP2" type="number" value="5300"/><input id="abcM2" step="0.1" type="number" value="13"/></div></div>
<div class="ctl"><label>Hạt 3: PE/hạt · MFI</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><input id="abcP3" type="number" value="23800"/><input id="abcM3" step="0.1" type="number" value="58"/></div></div>
<div class="ctl"><label>Hạt 4: PE/hạt · MFI</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px"><input id="abcP4" type="number" value="62000"/><input id="abcM4" step="0.1" type="number" value="150"/></div></div>
<div class="ctl"><label for="abcS">MFI trung vị của mẫu</label><input id="abcS" step="0.1" type="number" value="30"/></div>
<div class="ctl"><label for="abcB">MFI nền (không nhuộm / isotype)</label><input id="abcB" step="0.1" type="number" value="0.5"/></div>
</div>
<div id="abcResult" style="font-size:.95rem"></div>
</div>
</div>

### Ứng dụng lâm sàng của ABC

**HLA-DR trên bạch cầu mono (mHLA-DR)** ở bệnh nhân hồi sức, nhiễm khuẩn huyết. Đây là ứng dụng ABC đã được chuẩn hóa tốt nhất. Mono giảm HLA-DR phản ánh tình trạng “liệt miễn dịch” sau giai đoạn viêm cấp. Theo tổng quan của Joshi và cộng sự (Front Immunol 2023), 15 000 kháng thể/tế bào được xem là ngưỡng dưới chấp nhận được của trạng thái miễn dịch bình thường; dưới 15 000 tương quan với mức độ nặng của nhiễm khuẩn huyết, và ≤8 000 được coi là liệt miễn dịch nặng. Muốn dùng các ngưỡng này thì bắt buộc phải báo bằng ABC; báo bằng MFI thì không viện nào so được với viện nào. Các nghiên cứu đa trung tâm dùng kit PE 1:1 chuẩn hóa chính vì lý do này.

<figure class="fig" data-fig='{"t":"scale","log":true,"min":2000,"max":60000,"unit":"mHLA-DR, kháng thể/tế bào (thang log)","zones":[[2000,8000,"≤8 000: liệt miễn dịch nặng","r638"],[8000,15000,"8 000–15 000: giảm","warn"],[15000,60000,"≥15 000: ngưỡng dưới của bình thường","ok"]],"ticks":[[2000,"2 000"],[8000,"8 000"],[15000,"15 000"],[60000,"60 000"]]}'><figcaption>Ngưỡng mHLA-DR theo tổng quan Joshi 2023 (Front Immunol 14:1130214). Chỉ áp dụng cho kết quả báo bằng ABC với quy trình chuẩn hóa.</figcaption></figure>

**Mật độ kháng nguyên đích trước điều trị bằng kháng thể đơn dòng hoặc CAR-T:** CD20 trước rituximab (CLL thường có CD20 mờ), CD22 trước inotuzumab, CD38 trước daratumumab, CD19 và CD22 trước hoặc sau CAR-T (tế bào ác tính có thể giảm mật độ kháng nguyên để thoát điều trị). ABC giúp trả lời “đích có đủ nhiều không”. Ngưỡng cụ thể còn khác nhau giữa các nghiên cứu, nên coi là thông tin tham khảo cho bác sĩ, không phải ngưỡng quyết định.

**CD64 trên bạch cầu trung tính** trong chẩn đoán nhiễm khuẩn: có thể báo bằng ABC, nhưng thực tế thường báo bằng chỉ số tỷ lệ có hạt chuẩn kèm kit.

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">% tế bào dương hay số phân tử mỗi tế bào?</div>
<p>Không phải dấu ấn nào cũng định lượng theo cường độ. Ví dụ CD38 trong CLL như một yếu tố tiên lượng thường được báo theo <b>% tế bào dương</b>, không phải ABC. Trước khi tư vấn, hỏi rõ bác sĩ cần “bao nhiêu % tế bào dương” hay “mỗi tế bào có bao nhiêu phân tử”.</p>
</div>

<div class="callout bad"><b class="t">Những lỗi hay gặp khi làm ABC</b>
<ul class="tight">
<li><b>Hạt và mẫu chạy ở cài đặt khác nhau.</b> Chỉ cần đổi điện áp PE sau khi chạy hạt là đường chuẩn mất giá trị. Chạy hạt cùng phiên, cùng cytosetting.</li>
<li><b>Dùng kháng thể PE thường thay vì PE 1:1.</b> Khi đó chỉ quy ra phân tử PE tương đương, không ra số kháng thể.</li>
<li><b>Kháng thể không bão hòa.</b> Pha loãng quá thì không phải vị trí nào cũng gắn, ABC thấp giả. Theo đúng lượng của kit, hoặc chuẩn độ nếu tự xây dựng quy trình.</li>
<li><b>Gắn không đặc hiệu qua thụ thể Fc</b>, nhất là trên mono. Cần ống nền và trừ nền.</li>
<li><b>Bù màu sai trên kênh PE.</b> Spillover từ FITC hoặc ECD sang PE nếu chưa bù đúng sẽ cộng vào ABC. Panel định lượng nên đơn giản, ít màu chồng phổ lên PE.</li>
<li><b>Mẫu để lâu, bảo quản sai nhiệt độ.</b> mHLA-DR thay đổi nhanh ngoài cơ thể; quy trình chuẩn hóa yêu cầu giữ lạnh và xử lý trong vài giờ. Đọc hướng dẫn của kit cụ thể để có con số chính xác.</li>
<li><b>MFI mẫu nằm ngoài khoảng hạt chuẩn.</b> Ngoại suy kém tin cậy; bảng tính phía trên sẽ cảnh báo.</li>
</ul>
</div>

### Tóm tắt

<div class="tbl-wrap"><table>
<thead><tr><th></th><th>MFI</th><th>MESF</th><th>ABC</th></tr></thead>
<tbody>
<tr><td>Đơn vị</td><td>Kênh trên trục, tương đối</td><td>Phân tử chất nhuộm tương đương</td><td>Kháng thể gắn trên mỗi tế bào</td></tr>
<tr><td>So sánh được giữa</td><td>Các quần thể trong cùng ống; cùng máy khi đã chuẩn hóa vùng đích</td><td>Các ngày, các máy (cùng chất nhuộm)</td><td>Các viện; đặt cạnh ngưỡng lâm sàng</td></tr>
<tr><td>Cần thêm</td><td>Trung vị, đối chứng nội tại</td><td>Bộ hạt MESF đúng chất nhuộm</td><td>Hạt PE chuẩn, kháng thể PE 1:1 bão hòa, ống nền</td></tr>
<tr><td>Dùng thực tế</td><td>Mô tả mờ/sáng, theo dõi máy, chỉ số tỷ lệ</td><td>Spec độ nhạy, so sánh máy, kiểm tra tuyến tính</td><td>mHLA-DR, mật độ đích trước điều trị</td></tr>
</tbody>
</table></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">Nhận ra đó là bài toán nào</div>
<p>Khách hàng hỏi “MFI thay đổi”: đó là câu hỏi về MFI và chuẩn hóa máy. Muốn “so sánh hai máy”: đó là việc của MESF. Bác sĩ hồi sức muốn “theo dõi miễn dịch bệnh nhân nhiễm khuẩn huyết”: đó là bài toán ABC, cần một quy trình riêng có thẩm định. Không lấy MFI từ panel thường quy ra mà dùng thay ABC được.</p>
</div>

Trong chẩn đoán thường quy, cường độ được mô tả bằng ngôn ngữ so sánh: âm, mờ (dim), trung bình, sáng (bright), không đồng nhất (heterogeneous), so với tế bào bình thường cùng mẫu. Bác sĩ có kinh nghiệm luôn hỏi “mờ so với cái gì?”.

<p class="src">Nguồn ngưỡng mHLA-DR: Joshi I, Carney WP, Rock EP. Utility of monocyte HLA-DR and rationale for therapeutic GM-CSF in sepsis immunoparalysis. Front Immunol 2023;14:1130214.</p>

<figure class="fig" data-fig='{"t": "line", "series": [["Đường chuẩn MESF", [[150, 500], [400, 2000], [900, 8000], [1600, 30000], [2400, 120000]], "accent"]], "xl": "MFI đo được (kênh)", "yl": "MESF", "logy": true, "ymin": 300, "ymax": 200000, "xt": [[500, "500"], [1000, "1000"], [1500, "1500"], [2000, "2000"]], "yt": [[1000, "10³"], [10000, "10⁴"], [100000, "10⁵"]]}'><figcaption>Nguyên lý dựng đường chuẩn MESF từ hạt nhiều mức để quy MFI về số phân tử tương đương (số liệu minh họa).</figcaption></figure>

<div id="dosang" class="ftb-anchor"></div>

## 1.11 Độ sáng chất nhuộm và mật độ kháng nguyên

Khả năng phân biệt một quần thể dương với quần thể âm phụ thuộc ba yếu tố: mật độ kháng nguyên trên tế bào, độ sáng của chất nhuộm trên máy cụ thể, và độ loe (spreading) mà các màu khác đổ vào kênh đó. Một chỉ số thường dùng là **stain index**:

<div class="kyhieu mini"><div class="kh-t">Ký hiệu</div><ul>
<li><b>MFI dương</b>: cường độ (nên dùng trung vị) của quần thể dương với marker, trên kênh đang xét.</li>
<li><b>MFI âm</b>: cường độ của quần thể âm cùng ống, cùng kênh.</li>
<li><b>SD của quần thể âm</b>: độ lệch chuẩn, đo quần thể âm trải rộng bao nhiêu (gồm cả độ loe từ màu khác).</li>
<li><b>2 × SD</b>: khoảng hai lần độ lệch chuẩn phía trên quần thể âm; phần lớn (khoảng 95%) tế bào âm nằm dưới mức này.</li>
</ul><p>Ý nghĩa: khoảng cách giữa hai quần thể được đo bằng “bao nhiêu lần độ rộng của quần thể âm”. Stain index càng lớn, quần thể dương càng tách xa quần thể âm.</p></div>

<div class="formula">Stain index = (MFI dương − MFI âm) / (2 × SD của quần thể âm)</div>

Thứ hạng độ sáng tương đối trên Navios EX (từ kinh nghiệm thiết kế panel Beckman và spec MESF): PE và APC sáng nhất; PC5.5, PC7, ECD, Pacific Blue trung bình đến sáng; FITC, APC-A700, APC-A750 trung bình; Krome Orange mờ. Nguyên tắc ghép: **kháng nguyên mật độ thấp hoặc biểu hiện mờ có ý nghĩa chẩn đoán → chất nhuộm sáng**; kháng nguyên mật độ cao hoặc chỉ dùng để gating → chất nhuộm mờ. ClearLLab 10C tuân thủ điều này: CD45 (rất nhiều trên bạch cầu) ở Krome Orange, kappa/lambda bề mặt (mờ trên CLL) ở FITC/PE, CD34 ở APC.

<div class="tbl-wrap"><table>
<thead><tr><th>Mật độ kháng nguyên ước tính</th><th>Ví dụ</th><th>Nên ghép với</th></tr></thead>
<tbody>
<tr><td>Rất cao (&gt;100 000 vị trí)</td><td>CD45 trên lympho, CD38 trên tương bào, HLA-DR trên B</td><td>Chất nhuộm mờ; dư sáng gây loe sang kênh khác</td></tr>
<tr><td>Cao (10 000–100 000)</td><td>CD3, CD19, CD33 trên mono, CD13 trên hạt</td><td>Chất nhuộm trung bình</td></tr>
<tr><td>Thấp (&lt;10 000)</td><td>CD20 trên CLL, chuỗi nhẹ bề mặt trên CLL, CD25, CD123 trên blast, CD5 mờ</td><td>PE, APC, PC5.5</td></tr>
</tbody>
</table></div>

<p class="src">Mật độ là ước lượng bậc độ lớn, khác nhau giữa các nguồn; dùng để định hướng thiết kế, không phải giá trị tham chiếu.</p>

### Làm sao biết MFI nào dương, nào âm?

Không có một con số MFI nào là ngưỡng “dương” chung cho mọi ống, mọi kênh, mọi ngày. Dương hay âm luôn là một **phép so sánh với quần thể mốc nằm ngay trong cùng ống**:

- **Mốc âm**: tế bào chắc chắn không có kháng nguyên đó, cùng loại tế bào, cùng ống. Mép trên của quần thể này là ngưỡng dương.
- **Mốc dương**: tế bào bình thường có kháng nguyên đó. Dùng để nói “mờ”, “trung bình” hay “sáng”.

<figure class="plot"><canvas class="plot" data-spec='{"x":"CD5 PC5.5","y":"CD19 PB","xs":"logicle","ys":"logicle","seed":515,"note":"mô phỏng · ống B, máu CLL","pops":[{"n":900,"x":0.80,"sx":0.035,"y":0.14,"sy":0.04,"c":"v405","l":"T (mốc dương CD5)","lx":0.62,"ly":0.26},{"n":350,"x":0.16,"sx":0.04,"y":0.14,"sy":0.04,"c":"muted","l":"NK (mốc âm)","lx":0.03,"ly":0.26},{"n":250,"x":0.16,"sx":0.04,"y":0.70,"sy":0.04,"c":"ok","l":"B bình thường (mốc âm)","lx":0.03,"ly":0.82},{"n":1600,"x":0.50,"sx":0.04,"y":0.68,"sy":0.04,"c":"b488","l":"CLL: CD5 dương mờ","lx":0.40,"ly":0.82}],"gates":[{"vline":0.27,"c":"r638","l":"mép trên mốc âm","dash":true}]}' height="420" width="560"></canvas><figcaption>Đọc CD5 trên tế bào CLL bằng hai mốc trong cùng ống: B bình thường và NK là mốc âm, tế bào T là mốc dương.</figcaption></figure>

Cách đọc hình, đúng như bác sĩ đọc:

1. **Mốc âm của CD5** là lympho B bình thường còn sót lại và tế bào NK: hai nhóm này không có CD5 và nằm ngay trong ống. Vạch đỏ đặt ở mép trên của chúng.
2. **Mốc dương của CD5** là tế bào T, nhóm có CD5 sáng bình thường.
3. Tế bào CLL nằm trên vạch đỏ, nên CD5 **dương**. Chúng lại thấp hơn tế bào T khoảng 15 lần, nên CD5 **mờ**.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">“CD5 dương mờ” chứa hai phép so sánh</div>
<div class="tbl-wrap"><table><thead><tr><th>Phép so sánh</th><th>So với</th><th>Trả lời câu hỏi</th><th>Kết quả cho CLL</th></tr></thead>
<tbody><tr><td>Thứ nhất</td><td>Mốc âm (B bình thường, NK)</td><td>Có kháng nguyên không?</td><td>Dương</td></tr>
<tr><td>Thứ hai</td><td>Mốc dương (tế bào T)</td><td>Nhiều hay ít?</td><td>Mờ (thấp hơn T khoảng 15 lần)</td></tr></tbody></table></div>
<p>Cùng cách đọc cho CD20 trên CLL: so với lympho B bình thường còn sót lại trong ống thì CD20 mờ (ví dụ MFI 8 so với 60 ở mục 1.10).</p>
</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Đặt ngưỡng dương bằng mốc âm trên Kaluza</div>
<ol>
<li>Tạo cổng cho quần thể mốc âm: ví dụ lympho CD19 âm CD3 âm (NK) cho các marker của B, hoặc B bình thường cho CD5.</li>
<li>Mở histogram kênh cần đánh giá, thang logicle, chỉ hiển thị quần thể mốc âm. Đặt một vùng tuyến tính (linear region) bắt đầu ngay ở mép trên của quần thể này.</li>
<li>Chồng (overlay) histogram của quần thể cần đánh giá lên cùng trục, dùng chung vùng đó.</li>
<li>Đọc hai con số: <b>% Gated</b> trong vùng (bao nhiêu tế bào dương) và <b>Median</b> (dương mức nào). So Median với mốc dương bình thường để mô tả mờ, trung bình hay sáng.</li>
</ol>
</div>

<div class="lab" id="pos-lab">
<div class="labhead"><h4>Tự bấm thử: vì sao cùng một kháng nguyên lúc thấy, lúc không</h4><span class="stat">dữ liệu mô phỏng · 100% tế bào xanh đều mang kháng nguyên</span></div>
<div class="labgrid">
<canvas aria-label="Histogram quần thể âm và dương" height="360" id="posCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label for="posFluor">Chất nhuộm</label><select id="posFluor"><option value="PE">PE (sáng)</option><option value="FITC">FITC (trung bình)</option><option selected="" value="KrO">Krome Orange (mờ)</option></select></div>
<div class="ctl"><label for="posDen">Mật độ kháng nguyên <output id="posDenOut"></output></label><input id="posDen" max="4.7" min="2.7" step="0.05" type="range" value="3.3"/></div>
<div class="ctl"><label><span><input id="posSpread" type="checkbox"/> Kênh bị loe (có màu rất sáng bên cạnh)</span></label></div>
<div><span class="pill ok" id="posStatus"></span></div>
<div class="stat" id="posStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<ol class="tight">
<li>Giữ Krome Orange, mật độ khoảng 2 000: đám xanh chỉ vượt ngưỡng một phần, trông như “dương một phần”, dù mọi tế bào đều có kháng nguyên.</li>
<li>Đổi sang PE, không đổi mật độ: đám xanh tách hẳn, dương đồng nhất. Khác biệt nằm ở chất nhuộm, không ở tế bào.</li>
<li>Bật “kênh bị loe”: quần thể âm rộng ra, ngưỡng bị đẩy lên, quần thể dương mờ lại chìm vào âm. Đây là lúc cần ống FMO.</li>
</ol>
</div>
</div>

<div class="callout bad"><b class="t">Những bẫy hay gặp khi gọi dương, âm</b>
<ul class="tight">
<li><b>Dùng một con số MFI cố định làm ngưỡng</b> cho mọi ống, mọi kênh, mọi ngày. Ngưỡng phải lấy từ quần thể âm của chính ống đó.</li>
<li><b>Lấy sai loại tế bào làm mốc.</b> Mono và bạch cầu hạt có tự huỳnh quang cao hơn lympho; dùng lympho âm làm mốc cho mono dễ gọi dương giả. So cùng loại tế bào (mục 1.9).</li>
<li><b>Kênh bị loe.</b> Marker mờ nằm trong kênh nhận nhiều spillover (ví dụ PC5.5 cạnh một PE rất sáng): quần thể âm loe rộng. Chạy ống <b>FMO</b> (đủ mọi màu, chỉ thiếu đúng màu đó) để có ranh giới âm thật, đã tính cả phần loe.</li>
<li><b>Dùng isotype để đặt ngưỡng.</b> Isotype có độ sáng và tỷ lệ gắn chất nhuộm khác kháng thể thật, nên không phải mốc tốt. Trong panel đa màu, đối chứng nội tại hoặc FMO đáng tin hơn.</li>
<li><b>Ép một quần thể “loe một nửa” thành dương hoặc âm.</b> Theo quy ước cũ (EGIL), một dấu ấn trên blast được gọi là dương khi ≥20% tế bào trên ngưỡng, và ≥10% với một số dấu ấn như CD34, TdT, dấu ấn bào tương. Hiện nay nhiều phòng xét nghiệm mô tả theo hình dạng: đồng nhất, không đồng nhất, một phần quần thể. Trước khi kết luận, loại trừ khả năng “tách một phần” chỉ do chất nhuộm mờ, như trong mô phỏng trên.</li>
</ul>
</div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tính stain index để chọn chất nhuộm</div>
<p>Thử CD123 trên hai chất nhuộm:</p>
<div class="tbl-wrap"><table><thead><tr><th></th><th>MFI dương</th><th>MFI âm</th><th>SD âm</th><th>Stain index</th></tr></thead>
<tbody><tr><td>CD123 PE</td><td>120</td><td>0,8</td><td>0,6</td><td>(120 − 0,8) / (2 × 0,6) ≈ 99</td></tr>
<tr><td>CD123 Krome Orange</td><td>40</td><td>1,0</td><td>2,0</td><td>(40 − 1) / (2 × 2) ≈ 10</td></tr></tbody></table></div>
<p>PE tách quần thể dương khỏi âm tốt hơn khoảng 10 lần. Với một marker biểu hiện mờ trên blast, đó là khác biệt giữa thấy và không thấy.</p></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Ghép marker với chất nhuộm như xếp người đứng chụp ảnh</div>
<p>Người thấp (kháng nguyên mờ) đứng hàng đầu chỗ sáng nhất (PE, APC). Người cao (kháng nguyên sáng như CD45) đứng hàng sau, chỗ tối hơn vẫn thấy rõ (Krome Orange). Đổi chỗ thì người thấp bị che mất.</p></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["FITC", 85, "b488"], ["PE", 70, "b488"], ["ECD", 21, "b488"], ["PC5", 26, "b488"], ["PC7", 277, "b488"], ["APC", 132, "r638"], ["APC-A700", 192, "r638"], ["APC-A750", 70, "r638"], ["Pacific Blue", 50, "v405"], ["Krome Orange", 275, "v405"]], "unit": " MESF", "max": 300}'><figcaption>Độ nhạy theo spec Navios EX (MESF, số càng nhỏ càng nhạy). Nguồn: IFU B73085AF, mục Sensitivity.</figcaption></figure>

<div id="sukien" class="ftb-anchor"></div>

## 1.12 Sự kiện, ngưỡng phân biệt và cửa sổ thu nhận

Máy chỉ ghi nhận một sự kiện khi tín hiệu của tham số kích hoạt (trigger, discriminator) vượt ngưỡng. Navios EX cho đặt một discriminator duy nhất cho mỗi lần thu, trên bất kỳ tín hiệu nào, giá trị tối đa 1000. IFU cảnh báo: đặt quá thấp sẽ thu nhiều mảnh vụn, đặt quá cao sẽ mất tế bào cần đo.

- Miễn dịch kiểu hình thường quy: discriminator trên FS, đủ thấp để giữ lympho nhỏ, đủ cao để bỏ mảnh tiểu cầu và hồng cầu ly giải.
- Ứng dụng hồng cầu (PNH RBC) và tiểu cầu: discriminator đặt thấp hơn, đôi khi trên kênh huỳnh quang.
- Đếm CD34 theo ISHAGE: discriminator trên CD45 để loại hồng cầu có nhân và mảnh vụn.

Mỗi sự kiện được ghi tất cả tham số đã chọn, kèm tham số TIME. File LMD của Navios chứa thêm cài đặt máy (cytosettings), ma trận bù, và các khóa FCS như công suất laser đầu và cuối lần thu. Có thể xem bằng *File → View FCS Header*.

### Discriminator có phải là gate không? Không.

Discriminator và gate đều “lọc” sự kiện, nhưng ở hai thời điểm khác nhau và có hậu quả khác nhau:

<div class="tbl-wrap"><table>
<thead><tr><th></th><th>Discriminator (ngưỡng kích hoạt)</th><th>Gate (cổng)</th></tr></thead>
<tbody>
<tr><td>Khi nào</td><td>Trong lúc thu mẫu: máy quyết định ngay khi tế bào đi qua laser</td><td>Sau khi thu, trên phần mềm (Kaluza)</td></tr>
<tr><td>Tác động</td><td>Sự kiện dưới ngưỡng <b>không được ghi</b> vào file LMD</td><td>Chỉ chọn sự kiện để hiển thị và tính toán; file gốc không đổi</td></tr>
<tr><td>Sửa được không</td><td>Không. Đã mất là mất, phải chạy lại mẫu</td><td>Được. Vẽ lại, đổi cổng bao nhiêu lần cũng được</td></tr>
<tr><td>Số lượng</td><td>Navios: 1 discriminator cho mỗi lần thu</td><td>Không giới hạn, xếp thành cây cha – con</td></tr>
<tr><td>Ví dụ</td><td>FS ≥ ngưỡng: bỏ mảnh tiểu cầu, hồng cầu ly giải</td><td>Cổng lympho, Singlets, CD45+</td></tr>
</tbody>
</table></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Cửa soát vé và danh sách khách</div>
<p>Discriminator như cửa soát vé: ai không qua cửa thì không có tên trong danh sách. Gate là lọc danh sách sau đó: chọn ai để đếm, nhưng danh sách gốc vẫn còn nguyên.</p>
</div>

<div class="lab" id="disc-lab">
<div class="labhead"><h4>Tự bấm thử: kéo discriminator trên FS</h4><span class="stat">dữ liệu mô phỏng · máu sau ly giải</span></div>
<div class="labgrid">
<canvas aria-label="Biểu đồ FS và SS với discriminator" height="420" id="discCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label for="discThr">Discriminator FS <output id="discOut"></output></label><input id="discThr" max="220" min="0" step="2" type="range" value="70"/></div>
<div><span class="pill ok" id="discStatus"></span></div>
<div class="stat" id="discStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<p>Sự kiện bên trái vạch đỏ biến mất hẳn khỏi file. Cổng lympho (nét đứt) chỉ đếm những gì còn lại. Kéo xuống 0: file đầy mảnh vụn, và lympho % Total tụt vì mẫu số phình ra. Kéo lên trên 120: lympho nhỏ bắt đầu mất, không cổng nào lấy lại được.</p>
</div>
</div>

### TIME là gì và để làm gì?

**TIME** là một tham số máy tự ghi cho mỗi sự kiện: **thời điểm sự kiện đó được thu**, tính từ lúc bắt đầu thu ống. Nó không đo gì trên tế bào, nhưng cho biết dữ liệu được thu **có đều đặn không**. Trong một lần thu ổn định, sự kiện đến đều theo thời gian và mọi quần thể nằm thành những dải ngang thẳng trên biểu đồ TIME × một marker sáng (thường CD45).

TIME dùng để:

- **Phát hiện dòng chảy không ổn định:** bọt khí, tắc nghẽn một phần, hết mẫu, ống bị hút khí. Trên biểu đồ thấy khoảng trống (không có sự kiện), hoặc đoạn mà tín hiệu tụt, loe, lệch khỏi dải ngang.
- **Loại đoạn xấu bằng cổng TIME:** chỉ giữ phần thu ổn định để phân tích. Đây thường là cổng đầu tiên của cây cổng (mục 24.3).
- **Tính tốc độ sự kiện và thời gian thu:** số sự kiện chia cho thời gian, dùng để đánh giá mẫu quá đặc hay quá loãng.

<div class="lab" id="time-lab">
<div class="labhead"><h4>Tự bấm thử: một đoạn bọt khí giữa lần thu</h4><span class="stat">dữ liệu mô phỏng · tủy xương, blast thật khoảng 8%</span></div>
<div class="labgrid">
<canvas aria-label="Biểu đồ TIME và CD45" height="340" id="timeCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label><span><input id="timeGate" type="checkbox"/> Áp cổng TIME (loại đoạn xấu)</span></label></div>
<div class="stat" id="timeStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<p>Ở khoảng 55–63, bọt khí làm dòng chảy gián đoạn: có một khoảng trống, sau đó tín hiệu CD45 của mọi tế bào tụt xuống. Lympho và bạch cầu hạt “rơi” vào vùng CD45 mờ, làm % blast tăng giả. Bật cổng TIME: đoạn xấu bị loại, % vùng CD45 mờ về gần giá trị thật.</p>
</div>
</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Đặt cổng TIME trên Kaluza</div>
<ol>
<li>Tạo dot plot TIME (trục X) × CD45 hoặc FS (trục Y), dữ liệu chưa qua cổng nào.</li>
<li>Nhìn tìm khoảng trống, đoạn tụt hoặc loe. Lần thu tốt: các dải ngang thẳng, đều từ đầu đến cuối.</li>
<li>Vẽ cổng chữ nhật trên đoạn ổn định, đặt làm cổng cha của Singlets.</li>
<li>Nếu phải loại nhiều hơn khoảng 10% thời gian thu, ghi chú trong báo cáo; nếu còn mẫu, chạy lại sau khi prime.</li>
</ol>
</div>

<figure class="plot"><canvas class="plot" data-spec='{"x": "FS INT", "y": "SS INT", "pops": [{"n": 1500, "x": 0.42, "sx": 0.06, "y": 0.2, "sy": 0.07, "c": "b488", "l": "Bạch cầu"}, {"n": 900, "x": 0.06, "sx": 0.04, "y": 0.06, "sy": 0.04, "c": "muted", "l": "Mảnh vụn, tiểu cầu"}], "seed": 820, "note": "mô phỏng", "xs": "lin", "ys": "lin", "gates": [{"vline": 0.14, "c": "r638", "l": "discriminator FS"}]}' height="420" width="560"></canvas><figcaption>Discriminator trên FS: sự kiện bên trái ngưỡng không được ghi nhận. Đặt quá cao sẽ mất lympho nhỏ.</figcaption></figure>

<div id="thongke" class="ftb-anchor"></div>

## 1.13 Thống kê mô tả trong flow

<div class="kyhieu">
<div class="kh-t">Ký hiệu dùng trong mục 1.13</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Ký hiệu</th><th>Tên</th><th>Nghĩa và cách tính</th></tr></thead>
<tbody>
<tr><td class="sym">x</td><td>giá trị</td><td>Cường độ của một sự kiện trên một kênh.</td></tr>
<tr><td class="sym">N</td><td>tổng số tế bào</td><td>Số sự kiện trong cổng dùng làm mẫu số (ví dụ tổng bạch cầu đã phân tích).</td></tr>
<tr><td class="sym">n</td><td>số sự kiện đếm được</td><td>Số sự kiện rơi vào cổng quần thể cần đếm (ví dụ cổng tế bào bất thường).</td></tr>
<tr><td class="sym">Mean</td><td>trung bình số học</td><td>Cộng mọi giá trị x rồi chia cho số sự kiện.</td></tr>
<tr><td class="sym">Median</td><td>trung vị</td><td>Giá trị đứng giữa khi xếp các sự kiện từ thấp đến cao.</td></tr>
<tr><td class="sym">Mode</td><td>yếu vị</td><td>Giá trị gặp nhiều nhất, tức vị trí đỉnh của histogram.</td></tr>
<tr><td class="sym">SD</td><td>độ lệch chuẩn</td><td>Mức trung bình các giá trị cách xa Mean. Tính bằng căn bậc hai của trung bình các bình phương khoảng cách tới Mean.</td></tr>
<tr><td class="sym">CV</td><td>hệ số biến thiên</td><td>CV = SD ÷ Mean × 100%. Độ rộng tương đối, không phụ thuộc quần thể sáng hay mờ.</td></tr>
<tr><td class="sym">FWHM</td><td>độ rộng tại nửa chiều cao</td><td>Đo bề rộng của đỉnh histogram tại độ cao bằng một nửa đỉnh. Với phân bố chuẩn, FWHM = 2,354 × SD.</td></tr>
<tr><td class="sym">HPCV</td><td>CV nửa đỉnh</td><td>HPCV = (FWHM ÷ 2,354) ÷ Mode × 100%. Giống CV nhưng chỉ dùng phần trên của đỉnh nên không bị đuôi kéo lên.</td></tr>
<tr><td class="sym">√n</td><td>căn bậc hai của n</td><td>Số nhân với chính nó bằng n, ví dụ √100 = 10.</td></tr>
<tr><td class="sym">f</td><td>tần suất</td><td>f = n ÷ N, tỷ lệ của quần thể cần đếm, viết dạng thập phân (0,01% = 0,0001 = 10⁻⁴).</td></tr>
</tbody>
</table></div>
</div>

<div class="tbl-wrap"><table>
<thead><tr><th>Thống kê</th><th>Ý nghĩa</th><th>Lưu ý</th></tr></thead>
<tbody>
<tr><td>% Gated</td><td>Tỷ lệ trong cổng cha trực tiếp</td><td>Luôn nêu cổng cha khi báo cáo</td></tr>
<tr><td>% Total</td><td>Tỷ lệ trên toàn bộ sự kiện</td><td>Bao gồm cả mảnh vụn nếu chưa loại</td></tr>
<tr><td>% Grandparent Gated</td><td>Tỷ lệ trên cổng ông</td><td>Hữu ích khi báo % trên CD45+</td></tr>
<tr><td>Mean</td><td>Trung bình số học</td><td>Nhạy với giá trị ngoại lai; trên thang log, Navios có nhiều cách tính trung bình hình học</td></tr>
<tr><td>Median</td><td>Trung vị</td><td>Thống kê nên dùng cho cường độ trên dữ liệu đã bù</td></tr>
<tr><td>CV</td><td>SD / Mean × 100</td><td>Bị kéo lên bởi đuôi phân bố</td></tr>
<tr><td>HPCV</td><td>FWHM / 2,354 so với mode</td><td>Chỉ dựa vào nửa trên đỉnh; dùng cho hạt QC, ít bị ảnh hưởng bởi đuôi</td></tr>
</tbody>
</table></div>

### Đọc bảng thống kê của một ca, từng ô một

Ca: tủy xương nghi AML, ống có CD45, CD34 và các marker khác, thu 200 000 sự kiện. Bảng dưới mô phỏng cửa sổ thống kê kiểu Kaluza; các thống kê cường độ tính trên kênh CD34-APC (thang logicle). Tên cột trên Kaluza có thể khác đôi chút. **Bấm vào từng dòng** để xem con số được tính thế nào và nên hiểu ra sao.

<div class="tbl-wrap"><table class="walk">
<thead><tr><th>Cổng (cổng cha)</th><th>Số sự kiện</th><th>% Gated</th><th>% Total</th><th>Median CD34</th><th>Mean CD34</th><th>CV CD34</th></tr></thead>
<tbody>
<tr class="r"><td>All (không cổng)</td><td class="num">200 000</td><td class="num">100,0</td><td class="num">100,0</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">Mọi sự kiện đã vượt discriminator và được ghi vào file, gồm cả mảnh vụn còn sót, doublet và đoạn thu lỗi. <b>Không bao giờ dùng làm mẫu số</b> để báo cáo; đó là lý do không báo % Total.</td></tr>
<tr class="r"><td>Time (All)</td><td class="num">196 000</td><td class="num">98,0</td><td class="num">98,0</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">196 000 / 200 000 = 98,0%: 2% sự kiện nằm trong đoạn dòng chảy không ổn định và bị cổng TIME loại. Dưới khoảng 10% là chấp nhận được; nhiều hơn nên ghi chú hoặc chạy lại.</td></tr>
<tr class="r"><td>Singlets (Time)</td><td class="num">184 240</td><td class="num">94,0</td><td class="num">92,1</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">184 240 / 196 000 = 94,0% (% Gated, trên cổng cha Time); 184 240 / 200 000 = 92,1% (% Total). 6% doublet là thường gặp với tủy, cao hơn máu. Doublet không loại có thể tạo “đồng dương” giả, ví dụ T dính mono.</td></tr>
<tr class="r"><td>Cells (Singlets)</td><td class="num">165 000</td><td class="num">89,6</td><td class="num">82,5</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">Cổng FS × SS loại mảnh vụn và tế bào chết (FS thấp). 165 000 / 184 240 = 89,6%. Đây gần với “tế bào có nhân” và là một mẫu số hợp lệ.</td></tr>
<tr class="r"><td>CD45+ (Cells)</td><td class="num">150 000</td><td class="num">90,9</td><td class="num">75,0</td><td class="num">—</td><td class="num">—</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">150 000 / 165 000 = 90,9%. Phần CD45 âm (15 000) chủ yếu là hồng cầu có nhân: có hồng cầu có nhân là một dấu hiệu tủy không bị pha loãng nhiều (mục 7.7). Cổng CD45+ là mẫu số hay dùng nhất: “% trên bạch cầu”.</td></tr>
<tr class="r"><td>Lympho (CD45+)</td><td class="num">21 000</td><td class="num">14,0</td><td class="num">10,5</td><td class="num">0,4</td><td class="num">0,9</td><td class="num">—</td></tr>
<tr class="x"><td colspan="7">Lympho không có CD34: đây là <b>mốc âm</b> của CD34 trong ống (mục 1.11). Median 0,4 là vị trí của quần thể âm. Mean 0,9 lớn hơn Median vì vài sự kiện đuôi. CV ở đây vô nghĩa vì Mean gần 0 (chia cho số gần 0); bỏ qua CV của quần thể nằm quanh 0 sau bù.</td></tr>
<tr class="r"><td>Blast CD45dim (CD45+)</td><td class="num">12 000</td><td class="num">8,0</td><td class="num">6,0</td><td class="num">62</td><td class="num">95</td><td class="num">110%</td></tr>
<tr class="x"><td colspan="7"><b>% blast trên bạch cầu = 12 000 / 150 000 = 8,0%</b> (% Gated). Trên tế bào có nhân: 12 000 / 165 000 = 7,3%. % Total 6,0% thì không báo. Median CD34 62 so với mốc âm 0,4: dương rõ. Mean 95 lớn hơn Median nhiều và CV 110%: quần thể <b>không đồng nhất</b>, có phần CD34 rất sáng và phần âm. Đây là tín hiệu để vẽ thêm cổng con, không phải con số để báo cáo.</td></tr>
<tr class="r"><td>Blast CD34+ (Blast)</td><td class="num">10 500</td><td class="num">87,5</td><td class="num">5,25</td><td class="num">75</td><td class="num">102</td><td class="num">68%</td></tr>
<tr class="x"><td colspan="7">10 500 / 12 000 = 87,5% (% Gated, trên blast): báo “CD34 dương trên 87,5% blast”. % Grandparent (trên CD45+) = 10 500 / 150 000 = 7,0%: tỷ lệ blast CD34+ trên bạch cầu. Cùng một cổng có ba con số khác nhau; câu báo cáo phải nói rõ mẫu số nào.</td></tr>
</tbody>
</table></div>

<p class="src">Mọi con số trong ca này là mô phỏng để học cách đọc bảng.</p>

### Mean, Median, CV và HPCV khi có đuôi phân bố

<div class="lab" id="tail-lab">
<div class="labhead"><h4>Tự bấm thử: thêm đuôi vào đỉnh hạt QC</h4><span class="stat">dữ liệu mô phỏng · đỉnh ở kênh 500, CV thật 3%</span></div>
<div class="labgrid">
<canvas aria-label="Histogram hạt QC có đuôi" height="320" id="tailCanvas" width="640"></canvas>
<div class="controls">
<div class="ctl"><label for="tailPct">Tỷ lệ sự kiện ở đuôi <output id="tailOut"></output></label><input id="tailPct" max="10" min="0" step="0.5" type="range" value="0"/></div>
<div class="stat" id="tailStats"></div>
</div>
</div>
<div class="prose" style="margin-top:10px">
<p>Kéo lên khoảng 5% sự kiện ở đuôi (một nửa là doublet hạt ở kênh cao, một nửa là mảnh hạt ở kênh thấp):</p>
<ul class="tight">
<li><b>CV tăng vọt</b> từ 3% lên khoảng 18% với 5% đuôi, và cao hơn nữa khi kéo tiếp, vì SD tính trên mọi sự kiện và khoảng cách của đuôi bị bình phương, kéo SD lên mạnh.</li>
<li><b>HPCV gần như giữ nguyên 3%</b>, vì nó chỉ đo độ rộng tại nửa chiều cao đỉnh (FWHM ÷ 2,354), không nhìn xuống đuôi.</li>
<li><b>Mean bị kéo lệch</b>, còn <b>Median đứng yên</b> ở 500.</li>
</ul>
</div>
</div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Mỗi thống kê dùng cho một việc</div>
<ul>
<li><b>HPCV</b> dùng cho QC hạt (Flow-Check Pro): đo chất lượng căn chỉnh quang học và dòng chảy, không bị vài doublet hạt ảnh hưởng. HPCV vượt giới hạn thì vấn đề ở máy, không phải ở đuôi.</li>
<li><b>Median</b> dùng cho cường độ tế bào: sau bù có giá trị âm và đuôi, Mean không phản ánh đúng tâm quần thể. Dãy −2, −1, 0, 0, 1, 1, 2 cộng thêm một sự kiện 60 cho Mean khoảng 7,6 nhưng Median chỉ 0,5.</li>
<li><b>Không so CV của tế bào bệnh nhân với spec HPCV của hạt.</b> Hai chỉ số đo hai thứ khác nhau.</li>
<li><b>Mean khác xa Median</b> nghĩa là quần thể không đồng nhất hoặc có đuôi: lý do để vẽ thêm cổng con.</li>
</ul>
</div>

### Thống kê đếm Poisson: bao nhiêu sự kiện thì tin được?

Khi đếm một quần thể hiếm, sai số ngẫu nhiên của phép đếm tuân theo phân bố Poisson. Sai số này không do máy hay người phân tích: lấy mẫu lại cùng ống đó sẽ ra con số khác chỉ vì ngẫu nhiên. Dùng các ký hiệu n, N, f, SD, CV đã giải thích ở [đầu mục 1.13](#thongke):

<div class="formula">SD của số đếm ≈ √n<br/>CV ≈ √n ÷ n = 1 ÷ √n<br/>N cần thu = n ÷ f = 1 ÷ (CV² × f)</div>

<p class="docthanh"><b>Đọc thành lời:</b> đếm được n sự kiện thì sai số đếm (SD) khoảng căn bậc hai của n; chia cho n được CV. Muốn đếm được n sự kiện của một quần thể tần suất f thì phải thu ít nhất N = n ÷ f tế bào. Dòng thứ ba có được bằng cách thay n = 1 ÷ CV² (rút từ dòng thứ hai).</p>

<div class="tbl-wrap"><table>
<thead><tr><th>Số sự kiện đếm được (n)</th><th>CV ≈ 1/√n</th><th>Ý nghĩa thực hành</th></tr></thead>
<tbody>
<tr><td>10</td><td>32%</td><td>Hầu như không tin được</td></tr>
<tr><td>20</td><td>22%</td><td>Quy ước giới hạn phát hiện (LOD)</td></tr>
<tr><td>50</td><td>14%</td><td>Quy ước giới hạn định lượng (LLOQ)</td></tr>
<tr><td>100</td><td>10%</td><td>Định lượng khá</td></tr>
<tr><td>400</td><td>5%</td><td>Định lượng tốt</td></tr>
</tbody>
</table></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Ba tình huống dùng Poisson</div>
<p><b>1. Đọc kết quả.</b> Ống MRD thu 500 000 bạch cầu, cổng tế bào bất thường có 50 sự kiện. Tần suất 50 ÷ 500 000 = 0,01%, CV khoảng 14%. Khoảng sai số gần đúng (±2 CV) từ 0,007% đến 0,013%. Lần sau ra 0,012% thì chưa phải “tăng”, vì vẫn nằm trong sai số đếm.</p>
<p><b>2. Lên kế hoạch thu mẫu.</b> Muốn đo quần thể tần suất 0,01% (f = 10⁻⁴) với CV 10%: N = 1 ÷ (CV² × f) = 1 ÷ (0,01 × 0,0001) = 1 000 000 tế bào. Mẫu không đủ tế bào thì không thể báo kết quả đến mức đó, dù máy tốt đến đâu.</p>
<p><b>3. Cùng 20 sự kiện, hai kết luận khác nhau.</b> 20 sự kiện trên 20 000 tế bào là 0,1%, ở ngay giới hạn phát hiện. 20 sự kiện trên 2 000 000 tế bào là 0,001%, cũng ở giới hạn phát hiện nhưng độ nhạy cao hơn 100 lần. Báo cáo MRD vì vậy luôn ghi tổng số tế bào đã phân tích, không chỉ con số %.</p>
</div>

<div class="lab">
<div class="labhead"><h4>Máy tính Poisson</h4><span class="stat">đọc kết quả và lên kế hoạch thu</span></div>
<div class="grid2" style="margin:0">
<div class="controls">
<div class="ctl"><label for="poiN">Số sự kiện trong cổng (n)</label><input id="poiN" type="number" value="50"/></div>
<div class="ctl"><label for="poiTot">Tổng tế bào mẫu số (N)</label><input id="poiTot" type="number" value="500000"/></div>
<div id="poiResult" style="font-size:.92rem"></div>
</div>
<div class="controls">
<div class="ctl"><label for="poiF">Tần suất muốn đo (%)</label><input id="poiF" step="0.001" type="number" value="0.01"/></div>
<div class="ctl"><label for="poiCV">CV mong muốn (%)</label><input id="poiCV" type="number" value="10"/></div>
<div id="poiPlan" style="font-size:.92rem"></div>
</div>
</div>
</div>

### Bài tự kiểm tra: những bẫy hay gặp khi đọc thống kê

<div class="quiz" data-src="q113"></div>

<script id="q113" type="application/json">[
{"q":"File có 75 000 sự kiện. Cổng CD45+ có 60 000; cổng blast (con của CD45+) có 3 000. Tỷ lệ blast trên bạch cầu là bao nhiêu?","o":["5% (3 000 ÷ 60 000)","80% (60 000 ÷ 75 000)","Không tính được nếu không có cổng Singlets","4% (3 000 ÷ 75 000)"],"a":0,"e":"“Trên bạch cầu” là trên CD45+: % Gated của blast. 4% là % Total, có cả mảnh vụn trong mẫu số."},
{"q":"Báo cường độ CD34 trên blast sau bù màu, nên dùng thống kê nào?","o":["Mean","Median","CV","% Total"],"a":1,"e":"Median không bị đuôi và giá trị âm sau bù kéo lệch."},
{"q":"Blast có Mean CD34 = 95, Median = 62, CV 110%. Nên làm gì?","o":["Báo Mean vì lớn hơn","Báo CV như độ đồng nhất","Xem lại biểu đồ: quần thể không đồng nhất, cân nhắc vẽ cổng con","Bỏ qua vì CV luôn cao trên tủy"],"a":2,"e":"Mean khác xa Median là dấu hiệu quần thể có hai phần hoặc đuôi; nhìn lại biểu đồ trước khi mô tả."},
{"q":"Hạt Flow-Check Pro sáng nay: CV 12%, HPCV 2,8%. Kết luận?","o":["Máy lệch căn chỉnh, gọi kỹ sư","Căn chỉnh tốt; CV cao do đuôi (doublet, mảnh hạt), QC đánh giá bằng HPCV","Phải lấy trung bình CV và HPCV","Cả hai đều không dùng được"],"a":1,"e":"HPCV chỉ nhìn nửa trên đỉnh nên phản ánh căn chỉnh; CV bị đuôi kéo lên."},
{"q":"Cổng MRD có 12 sự kiện trên 800 000 tế bào. Báo thế nào?","o":["Dương 0,0015%","Không phát hiện ở độ nhạy 0,0025% (20 / 800 000)","Dương, dưới ngưỡng định lượng","Âm tính hoàn toàn"],"a":1,"e":"12 sự kiện, ít hơn 20 (LOD), nên không báo dương; ghi độ nhạy đạt được của lần chạy."},
{"q":"Muốn đo quần thể 0,01% với CV 10%, cần thu bao nhiêu tế bào?","o":["10 000","100 000","1 000 000","10 000 000"],"a":2,"e":"N = 1 / (CV² × f) = 1 / (0,01 × 0,0001) = 1 000 000."}
]</script>

<div class="callout"><b class="t">Năm điểm dùng hằng ngày</b>
<ol class="tight">
<li><b>Mẫu số:</b> luôn hỏi “trên cái gì?”, báo theo % Gated hoặc % Grandparent, thường trên CD45+. Không báo % Total.</li>
<li><b>Cường độ:</b> dùng Median, so với mốc âm cùng kiểu tế bào.</li>
<li><b>Mean so với Median:</b> cách xa nhau nghĩa là quần thể không đồng nhất hoặc có đuôi: lý do để vẽ thêm cổng con, không phải con số để báo cáo.</li>
<li><b>CV và HPCV:</b> HPCV dùng cho hạt QC. Bỏ qua CV của quần thể nằm quanh 0 sau bù.</li>
<li><b>Sự kiện hiếm:</b> tính 1/√n. Dưới 20 sự kiện thì không báo dương, 20–49 chỉ là ước lượng, từ 50 trở lên mới định lượng được. Luôn ghi tổng số tế bào đã phân tích.</li>
</ol>
</div>

<figure class="fig" data-fig='{"t": "line", "series": [["CV ≈ 1/√n", [[10, 31.6], [20, 22.4], [50, 14.1], [100, 10], [200, 7.1], [400, 5], [1000, 3.2]], "accent"]], "xl": "Số sự kiện đếm được (n, thang log)", "yl": "CV (%)", "logx": true, "xmin": 10, "xmax": 1000, "ymax": 35, "xt": [[10, "10"], [20, "20"], [50, "50"], [100, "100"], [400, "400"], [1000, "1000"]], "yt": [[10, "10"], [20, "20"], [30, "30"]], "vl": [[20, "LOD 20", "warn"], [50, "LLOQ 50", "bad"]]}'><figcaption>Sai số đếm Poisson theo số sự kiện: lý do của quy ước 20 và 50 sự kiện.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 1.14 Hỏi bác sĩ

<details class="ans"><summary>“Sao mẫu này CV rộng thế, máy có vấn đề à?”</summary><p>Tách hai khả năng. Nếu Flow-Check Pro sáng nay có HPCV trong giới hạn và các mẫu khác cùng ngày bình thường, nguyên nhân thường nằm ở mẫu: tốc độ chảy cao với mẫu đặc, tế bào chết nhiều, ly giải không hoàn toàn, hoặc thời gian vận chuyển dài. Kiểm tra tham số TIME và tốc độ sự kiện trong file LMD. Nếu QC cũng xấu, dừng chạy mẫu và xử lý theo chương 03.</p></details>

<details class="ans"><summary>“CD20 mờ thật hay do chất nhuộm?”</summary><p>Mờ thật khi so với tế bào B bình thường trong cùng ống, cùng chất nhuộm, vẫn thấp hơn. ClearLLab đặt CD20 ở APC-A750 (độ nhạy trung bình). Nếu có B đa dòng bình thường còn lại trong mẫu, so trực tiếp; nếu không còn B bình thường, đối chiếu với file của mẫu bình thường cùng lô thuốc thử và cùng cài đặt máy.</p></details>

<details class="ans"><summary>“Lấy INT hay PEAK để báo cường độ?”</summary><p>INT, vì nó tỷ lệ với tổng lượng chất nhuộm. PEAK chỉ dùng kết hợp với INT để loại doublet. Ma trận bù cũng được tính trên tín hiệu INT.</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>“1024 kênh” và “10 kênh màu” khác nhau thế nào?</summary><p>10 kênh màu là 10 đầu dò FL1–FL10. 1024 kênh là số mức chia trên trục của mỗi đầu dò. Một là số nhiệt kế, một là số vạch chia trên mỗi nhiệt kế.</p></details><details class="ans"><summary>Vì sao kiểm tra bù màu phải dùng thang logicle và trung vị?</summary><p>Vì sau bù có giá trị âm; thang log dồn chúng vào mép trục và tạo ảo giác bù quá. Trung vị không bị độ loe ảnh hưởng, nên so trung vị quần thể dương với quần thể âm là cách đánh giá đúng.</p></details><details class="ans"><summary>Bác sĩ hồi sức muốn theo dõi HLA-DR trên mono. Có dùng MFI của ống ClearLLab M1 được không?</summary><p>Không. Muốn so ngưỡng lâm sàng (15 000, 8 000 kháng thể/tế bào) phải báo bằng ABC, với hạt PE chuẩn, kháng thể PE 1:1 bão hòa và quy trình có thẩm định.</p></details></div>

<figure class="fig" data-fig='{"t": "tree", "root": "Quần thể CV rộng bất thường", "b": [["QC sáng nay xấu", "Dừng chạy mẫu|Xử lý theo chương 03", "bad"], ["QC đạt, mẫu khác bình thường", "Xem tốc độ chảy|Tế bào chết, ly giải|Thời gian vận chuyển", "warn"], ["Chỉ một kênh", "Kiểm tra bù màu, tandem|Đối chiếu đối chứng nội tại", "accent"]]}'><figcaption>Cây quyết định khi bác sĩ hỏi về CV rộng.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch01.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
