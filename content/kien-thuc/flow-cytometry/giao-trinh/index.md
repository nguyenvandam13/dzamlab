---
title: "Flow cytometry lâm sàng trên Navios EX và Kaluza C"
description: "Giáo trình tự học chuyên sâu, viết cho người làm ứng dụng (application specialist) cần làm việc ngang hàng với bác sĩ huyết học và bác sĩ xét nghiệm có 5–10 năm kinh nghiệm flow."
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Navios EX 3 laser / 10 màu · Kaluza C · ClearLLab 10C · tetraCHROME</div><div id="ftb-search"></div></div>

<p class="lead">Giáo trình tự học chuyên sâu, viết cho người làm ứng dụng (application specialist) cần làm việc ngang hàng với bác sĩ huyết học và bác sĩ xét nghiệm có 5–10 năm kinh nghiệm flow. Nội dung đi từ vật lý của tín hiệu, vận hành máy, bù màu, thao tác Kaluza, đến kiểu hình từng thực thể theo WHO-HAEM5 và ICC 2022, các ứng dụng PNH, MRD, CD34, và cách viết một báo cáo mà bác sĩ tin được.</p>

<div class="callout doc">
<b class="t">Nguồn của tài liệu</b>
<p>Phần vận hành được biên soạn lại bằng tiếng Việt từ 5 tài liệu của Beckman Coulter: IFU Navios EX (B73085AF, 08/2021), IFU Kaluza C (C10993AH, 04/2025), addendum RUO của Kaluza C (C29335AA), addendum Lymphocyte Subset Application (B86351AA) và tài liệu DI - Instrument Manager kết nối LIS (A45429AG). Phần bệnh học dựa trên phân loại WHO-HAEM5, ICC 2022 và các khuyến cáo của ICCS, ESCCA, ELN, ERIC, EuroFlow, IMWG, ISHAGE. Danh mục đầy đủ ở chương 23.</p>
</div>

<div id="dung" class="ftb-anchor"></div>

## Cách dùng giáo trình

Mỗi chương là một trang. Cây mục lục bên trái liệt kê các phần và chương theo thứ tự đọc; khung “Mục lục” bên phải liệt kê các mục của chương đang đọc; cuối mỗi chương có liên kết sang chương trước và chương sau. Có thể in từng chương ra A4 bằng trình duyệt.

**Tra thuật ngữ.** Đầu mỗi chương có hộp “Thuật ngữ và viết tắt của chương”: định nghĩa ngắn của mọi từ gặp lần đầu trong chương, kèm mục chứa từ đó, và danh sách từ đã định nghĩa ở chương trước. Trong bài, từ viết tắt có gạch chấm bên dưới: rê chuột hoặc chạm để xem nghĩa. Ô **Tìm thuật ngữ** ở đầu mỗi chương (phím tắt `/`; còn `Ctrl`+`K` là ô tìm kiếm chung của cả trang) tìm trong toàn bộ thuật ngữ, CD marker và nội dung, cho biết từ đó ở chương, mục nào; gõ không dấu cũng được. Chỉ mục đầy đủ theo bảng chữ cái ở mục 22.2.

**Công thức.** Trước mỗi công thức có khung “Ký hiệu” giải thích từng chữ, từng dấu, và sau công thức có dòng “Đọc thành lời”.

Ký hiệu dùng xuyên suốt:

<div class="grid3">
<div class="card"><h4><span class="tag">Đã công bố</span></h4><p>Case hoặc số liệu lấy từ tài liệu có trích dẫn.</p></div>
<div class="card"><h4><span class="tag sim">Minh họa</span></h4><p>Case dựng để luyện tập. Không phải bệnh nhân thật.</p></div>
<div class="card"><h4>Khung tím</h4><p>Ghi chú về tài liệu nguồn của Beckman Coulter.</p></div>
<div class="card"><h4>Khung vàng / đỏ</h4><p>Cảnh báo và bẫy thường gặp khi phân tích.</p></div>
<div class="card"><h4>Biểu đồ chấm</h4><p>Luôn là dữ liệu mô phỏng, vẽ để minh họa vị trí quần thể. Không dùng làm giá trị tham chiếu.</p></div>
<div class="card"><h4>“Hỏi bác sĩ”</h4><p>Những câu bác sĩ có kinh nghiệm hay hỏi, kèm cách trả lời có căn cứ.</p></div>
</div>

Các khung học tập, đặt ngay trong mục có khái niệm khó:

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Hình ảnh so sánh đời thường</div><p>Giải thích khái niệm bằng một hình ảnh quen thuộc (nhiệt kế, thước kẻ, máy ảnh) trước khi đi vào chi tiết kỹ thuật.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Thuật ngữ trùng tên hoặc gần nghĩa</div><p>Ví dụ hai nghĩa của chữ “kênh”, spillover và spreading, LOD và LLOQ.</p></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Tính thử từng bước</div><p>Một ví dụ có con số cụ thể để thấy khái niệm hoạt động thế nào. Số liệu minh họa được ghi rõ.</p></div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Các bước trên Kaluza hoặc Navios</div><p>Thao tác cụ thể để làm được ngay trên máy hoặc phần mềm.</p></div>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">Thứ tự kiểm tra khi hỗ trợ</div><p>Câu hỏi hay gặp từ phòng xét nghiệm và thứ tự khoanh vùng nguyên nhân.</p></div>

<div class="learn vidu"><div class="lh" data-k="Đọc từng ô">Bảng thống kê của một ca</div><p>Bảng kiểu cửa sổ thống kê Kaluza; bấm từng dòng để xem con số được tính thế nào và nên hiểu ra sao.</p></div>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Câu hỏi và trắc nghiệm</div><p>Câu hỏi mở: bấm để xem đáp án, tự trả lời trước khi mở. Trắc nghiệm: chọn đáp án để chấm điểm ngay.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Đã công bố", "case, số liệu có trích dẫn", "accent"], ["Minh họa", "case dựng để luyện tập", "muted"], ["Khung tím", "ghi chú tài liệu Beckman", "v405"], ["Khung vàng/đỏ", "cảnh báo và bẫy", "warn"], ["Biểu đồ chấm", "dữ liệu mô phỏng", "b488"], ["Hỏi bác sĩ", "câu hỏi thường gặp", "r638"]], "per": 3}'><figcaption>Các ký hiệu dùng xuyên suốt giáo trình.</figcaption></figure>

<div id="lotrinh" class="ftb-anchor"></div>

## Lộ trình gợi ý

<div class="tbl-wrap"><table>
<thead><tr><th>Mục tiêu</th><th>Đọc theo thứ tự</th><th>Thời gian ước tính</th></tr></thead>
<tbody>
<tr><td>Vận hành và hỗ trợ khách hàng về máy</td><td>01 → 02 → 03 → 04 → 05 → 21</td><td>2 tuần</td></tr>
<tr><td>Triển khai panel và thẩm định tại phòng xét nghiệm</td><td>06 → 07 → 03 → 18 (phần LOD/LLOQ) → 20</td><td>1 tuần</td></tr>
<tr><td>Nền tảng sinh học (người chưa học miễn dịch, huyết học)</td><td>08A → 08B → 08C (08D để tra)</td><td>1 tuần</td></tr>
<tr><td>Đọc kết quả leukemia/lymphoma cùng bác sĩ</td><td>(08A–08C) → 08 → 09 → 10 → 11 → 12 → 13 → 14 → 15 → 19</td><td>4–6 tuần</td></tr>
<tr><td>Ứng dụng chuyên biệt</td><td>16 (TBNK, CD34) → 17 (PNH) → 18 (MRD)</td><td>2 tuần</td></tr>
<tr><td>Ôn tập và tự kiểm tra</td><td>22 → 23</td><td>liên tục</td></tr>
<tr><td>Triển khai tại khách hàng, đào tạo đội</td><td>24 → 03 → 06</td><td>theo dự án</td></tr>
</tbody>
</table></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Máy và QC", "Chương 01–03", "accent"], ["Bù màu, Kaluza", "Chương 04–05", "b488"], ["Panel, mẫu", "Chương 06–07", "v405"], ["Nền tảng, bình thường, phân loại", "Chương 08A–C, 08–09", "warn"], ["Bệnh học", "Chương 10–15", "r638"], ["Ứng dụng đặc biệt", "Chương 16–18", "ok"], ["Thực hành", "Chương 19–21", "accent"], ["Tra cứu, ôn tập", "Chương 22–24", "muted"]], "per": 4, "snake": true}'><figcaption>Lộ trình đọc gợi ý theo bốn phần.</figcaption></figure>

<div id="muc" class="ftb-anchor"></div>

## Các chương

<div class="chapcards" id="chapcards"></div>

<script>
document.addEventListener("DOMContentLoaded", function(){
  var desc = {
    "ch01.html":"Dòng chảy, quang học, xung INT/PEAK/TOF, hai nghĩa của “kênh”, thang log/logicle, quy tắc trung vị, MFI/MESF/ABC, mốc âm/dương, discriminator và TIME, đọc bảng thống kê, Poisson.",
    "ch02.html":"Laser, kính lọc, FS 3 góc, MCL, protocol, panel, worklist, Acquisition Manager, khởi động/tắt máy.",
    "ch03.html":"Flow-Check Pro, Flow-Set Pro, AutoSetup, Levey-Jennings, Westgard, EQA, vệ sinh, thông báo lỗi.",
    "ch04.html":"Toán học của bù màu, ma trận, spreading, đối chứng, tandem, Kaluza Generate Compensation, mô phỏng.",
    "ch05.html":"Analysis List, protocol, composite, mọi loại biểu đồ và cổng, radar, batch, QC report, công thức, LIS.",
    "ch06.html":"Mật độ kháng nguyên, chọn chất nhuộm, Bethesda, EuroFlow, ClearLLab, thẩm định theo ICSH/ICCS.",
    "ch07.html":"Chống đông, độ ổn định, ly giải, nhuộm nội bào, bulk lysis, các loại bệnh phẩm, pha loãng máu.",
    "ch08a.html":"Hình vẽ năm loại bạch cầu và tế bào non, cây tạo máu, đồng hồ trưởng thành dòng hạt, tủy xương, tuyến ức, hạch lympho, từ kính hiển vi sang CD45 × SS.",
    "ch08b.html":"Miễn dịch bẩm sinh và thích ứng, lympho B/T/NK, cấu trúc kháng thể, năm lớp Ig, vì sao IgM/IgD trên bề mặt B, chuyển lớp, VDJ và κ/λ, MHC, NK.",
    "ch08c.html":"Kháng nguyên và epitope, hệ thống CD, kiểu gắn màng, GPI, bề mặt/bào tương/nhân, mờ và sáng, dương giả qua Fc, bản đồ marker theo dòng, đơn dòng.",
    "ch08d.html":"Sổ tay tra cứu ~95 marker: bản chất, tác dụng, vị trí, tế bào mang, giai đoạn xuất hiện và mất, ý nghĩa; bảng nhiệt theo dòng B, T, NK, hạt, mono, hồng cầu; tra ngược theo tế bào; HLA.",
    "ch08.html":"Đường trưởng thành B, tủy, mono, hồng cầu, T, NK, tương bào; giá trị bình thường.",
    "ch09.html":"Danh mục thực thể, khác biệt WHO và ICC, ngưỡng blast, tiêu chuẩn dòng.",
    "ch10.html":"Tiếp cận blast, AML theo gen, APL, mono, hồng cầu, mẫu tiểu cầu, BPDCN, MPAL, AUL.",
    "ch11.html":"ELN iMDS Flow, điểm Ogata, bất thường từng khoang, CMML và phân nhóm mono MO1.",
    "ch12.html":"B-ALL theo gen, kiểu hình gợi ý, T-ALL, ETP, phân biệt hematogone.",
    "ch13.html":"CLL, MBL, MCL, FL, MZL, LPL, HCL, DLBCL, Burkitt, bẫy chuỗi nhẹ.",
    "ch14.html":"Tương bào bình thường và bất thường, CD38/CD138, chuỗi nhẹ nội bào, PCL, MRD.",
    "ch15.html":"T-LGL, NK, Sézary, ATLL, T-PLL, PTCL, AITL, ALCL, TRBC1.",
    "ch16.html":"tetraCHROME, LSA, Flow-Count, CD4 và HIV, ISHAGE CD34, máy tính liều.",
    "ch17.html":"ICCS/ESCCA, FLAER, CD157, CD24, CD14, Type II/III, độ nhạy, báo cáo.",
    "ch18.html":"AML (ELN 2021), B-ALL, CLL (ERIC), đa u tủy (NGF), LOD/LLOQ, máy tính.",
    "ch19.html":"20 case từ dễ đến khó với câu hỏi và phân tích.",
    "ch20.html":"Cấu trúc báo cáo, mẫu câu, giá trị nguy cấp, câu hỏi bác sĩ hay đặt.",
    "ch21.html":"Atlas bẫy: tiền phân tích, máy, bù màu, gating, sinh học, điều trị.",
    "ch22.html":"Từ điển CD marker có thể tìm kiếm và chỉ mục toàn bộ thuật ngữ, viết tắt kèm chương gặp lần đầu.",
    "ch23.html":"Ngân hàng câu hỏi và toàn bộ tài liệu tham khảo.",
    "ch24.html":"Checklist triển khai, SOP mẫu, kế hoạch xác nhận ClearLLab, lộ trình đào tạo, phiếu hỗ trợ kỹ thuật."
  };
  var box = document.getElementById("chapcards");
  (window.FB_CHAPTERS || []).forEach(function(c){ if(c.f === "index.html") return;
    var a = document.createElement("a"); a.href = c.f; a.innerHTML = "<small>Chương " + c.n + "</small><b>" + c.t + "</b><span>" + (desc[c.f] || "") + "</span>"; box.appendChild(a); });
});
</script>

<figure class="fig" data-fig='{"t": "bars", "items": [["Phần I: Nền tảng và thiết bị", 61, "b488"], ["Phần II: Bệnh học và kiểu hình", 60, "r638"], ["Phần III: Ứng dụng đặc biệt", 20, "ok"], ["Phần IV và phụ lục: Thực hành, tra cứu", 63, "v405"]], "unit": " tr", "max": 70}'><figcaption>Phân bố dung lượng (số trang A4 ước tính khi in) theo phần.</figcaption></figure>

<div id="nguyentac" class="ftb-anchor"></div>

## Năm nguyên tắc xuyên suốt

<ol class="steps">
<li><div><b>Máy đúng trước, mẫu sau.</b> Kết quả chỉ có giá trị khi QC hằng ngày đạt, cài đặt đúng vùng đích và bù màu được kiểm chứng.</div></li>
<li><div><b>Mô tả mọi quần thể, không chỉ quần thể bệnh.</b> Bác sĩ có kinh nghiệm sẽ hỏi về hematogone, tương bào, mono, bạch cầu ái toan còn lại; câu trả lời chứng tỏ người phân tích đã nhìn hết mẫu.</div></li>
<li><div><b>So với đối chứng nội tại.</b> “Mờ”, “sáng”, “dương một phần” luôn được nói so với tế bào bình thường cùng mẫu, cùng ống.</div></li>
<li><div><b>Flow không đứng một mình.</b> Chẩn đoán cuối cùng tích hợp hình thái, mô bệnh học, di truyền tế bào và sinh học phân tử. Báo cáo flow nêu rõ điều gì cần xác nhận thêm.</div></li>
<li><div><b>Nói rõ giới hạn.</b> Mẫu số của tỷ lệ phần trăm, số sự kiện thu được, độ nhạy đạt được, chất lượng mẫu.</div></li>
</ol>

<figure class="fig" data-fig='{"t": "cycle", "n": [["Máy đúng: QC, bù màu", "accent"], ["Mô tả mọi quần thể", "b488"], ["So với đối chứng nội tại", "warn"], ["Tích hợp lâm sàng, gen", "r638"], ["Nói rõ giới hạn", "v405"]], "center": "Kết quả flow đáng tin"}'><figcaption>Năm nguyên tắc tạo nên một kết quả flow đáng tin.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="index.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
