---
title: "09 · Phân loại WHO-HAEM5 và ICC 2022"
description: "Năm 2022 có hai hệ thống phân loại tân sinh tạo máu song song: bản lần 5 của WHO (WHO-HAEM5; tóm tắt bởi Khoury và cộng sự cho tân sinh tủy và Alaggio và cộng sự cho tân sinh lympho, cùng trên Leukemia ) và…"
tags: [flow-cytometry, giao-trinh-navios]
trang-thai: 🌳 hoàn thiện
cap-nhat: 2026-11-25
chuong: "09"
---

<span id="top"></span>

<link rel="stylesheet" href="/kien-thuc/flow-cytometry/giao-trinh/assets/style.css">

<div class="ftb-top"><div class="eyebrow">Phần II · Chương 09</div><div id="ftb-search"></div></div>

<p class="lead">Năm 2022 có hai hệ thống phân loại tân sinh tạo máu song song: bản lần 5 của WHO (WHO-HAEM5; tóm tắt bởi Khoury và cộng sự cho tân sinh tủy và Alaggio và cộng sự cho tân sinh lympho, cùng trên <i>Leukemia</i>) và International Consensus Classification (ICC; Arber và cộng sự trên <i>Blood</i>). Cả hai đặt bất thường di truyền lên trước, nhưng khác về ngưỡng blast, tên gọi và một số thực thể. Chương này tập trung vào những điểm người phân tích flow cần biết để viết báo cáo khớp với cách bác sĩ phân loại.</p>

<details class="glossbox" id="thuatngu-chuong"><summary><span class="gt">Thuật ngữ và viết tắt của chương</span><span class="gn">40 mục mới · 58 mục dùng lại</span><span class="chev">›</span></summary><div class="gb"><p>Các từ và từ viết tắt <b>gặp lần đầu</b> trong chương này, xếp theo thứ tự xuất hiện. Cột “Gặp ở” dẫn tới mục có từ đó. Rê chuột (hoặc chạm) lên từ viết tắt có gạch chấm trong bài để xem nhanh định nghĩa; ô <b>Tìm thuật ngữ</b> ở đầu chương tra được toàn giáo trình.</p><input aria-label="Lọc thuật ngữ của chương" class="search" data-target="gtab-ch09" placeholder="Lọc trong bảng này…" type="search"/><div class="tbl-wrap" id="gtab-ch09"><table class="gtab"><thead><tr><th>Thuật ngữ</th><th>Viết đầy đủ và nghĩa</th><th>Gặp ở</th></tr></thead><tbody><tr id="g-ky-hieu-fusion"><td>Ký hiệu fusion ::</td><td><span class="full">gene fusion.</span> Dấu “::” nối hai gen bị ghép nhau do chuyển đoạn, ví dụ PML::RARA, BCR::ABL1 (quy ước HGNC thay cho dấu gạch nối).</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-runx1-runx1t1"><td>RUNX1::RUNX1T1</td><td><span class="full">t(8;21).</span> Fusion của AML yếu tố gắn lõi (core-binding factor); blast hay mang CD19, CD56, PAX5.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-fish"><td>FISH</td><td><span class="full">Fluorescence In Situ Hybridization.</span> Kỹ thuật lai huỳnh quang tại chỗ phát hiện chuyển đoạn, mất đoạn, khuếch đại trên nhiễm sắc thể.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-pml-rara"><td>PML::RARA</td><td><span class="full">t(15;17).</span> Fusion định nghĩa APL.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-flt3"><td>FLT3</td><td><span class="full">fms-like tyrosine kinase 3.</span> Gen đột biến (ITD, TKD) trong AML; có thuốc ức chế đích.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-cebpa"><td>CEBPA</td><td><span class="full">CCAAT/enhancer-binding protein alpha.</span> Đột biến bZIP trong AML; blast hay CD7+, CD15+, HLA-DR+.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-tp53"><td>TP53</td><td><span class="full">tumor protein p53.</span> Gen ức chế u; đột biến (đặc biệt hai alen) gắn với tiên lượng rất xấu trong MDS, AML, CLL.</td><td class="at"><a href="#nguyentac" title="Nguyên tắc chung">9.1</a></td></tr><tr id="g-cbfb-myh11"><td>CBFB::MYH11</td><td><span class="full">inv(16)/t(16;16).</span> Fusion AML yếu tố gắn lõi; hay có thành phần mono và bạch cầu ưa acid bất thường.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-cac-fusion-aml-hiem"><td>Các fusion AML hiếm</td><td><span class="full">DEK::NUP214, RBM15::MRTFA, MECOM, NUP98, CBFA2T2::GLIS2.</span> DEK::NUP214: t(6;9), hay tăng basophil; RBM15::MRTFA: AML mẫu tiểu cầu nhũ nhi; MECOM: inv(3)/t(3;3); NUP98: fusion trẻ em; CBFA2T2::GLIS2: kiểu hình RAM.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-kmt2a"><td>KMT2A</td><td><span class="full">trước gọi MLL.</span> Gen hay bị tái sắp xếp trong AML dòng mono và B-ALL nhũ nhi (CD10−, CD15+, NG2+).</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-bzip"><td>bZIP</td><td><span class="full">basic leucine zipper.</span> Vùng protein của CEBPA; đột biến tại vùng này định nghĩa AML có CEBPA.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-bcr-abl1"><td>BCR::ABL1</td><td><span class="full">t(9;22), nhiễm sắc thể Philadelphia.</span> Fusion của CML; cũng gặp trong B-ALL và một số AML, MPAL.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-vaf"><td>VAF</td><td><span class="full">Variant Allele Frequency, tần suất alen đột biến.</span> Tỷ lệ đọc mang đột biến trên tổng số đọc tại vị trí đó.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-aml-mr"><td>AML-MR</td><td><span class="full">AML myelodysplasia-related, AML liên quan rối loạn sinh tủy.</span> Nhóm AML có tiền sử MDS hoặc mang đột biến/bất thường di truyền liên quan MDS.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-gen-lien-quan-mds"><td>Gen liên quan MDS</td><td><span class="full">ASXL1, BCOR, EZH2, SF3B1, SRSF2, STAG2, U2AF1, ZRSR2, RUNX1, TET2.</span> Nhóm gen đột biến định nghĩa AML-MR và hay gặp trong MDS/CMML; phần lớn là gen điều hòa nhiễm sắc chất hoặc cắt nối RNA.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-nos"><td>NOS</td><td><span class="full">not otherwise specified, không đặc hiệu khác.</span> Thực thể không xếp được vào nhóm có định nghĩa riêng.</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-mpn"><td>MPN</td><td><span class="full">Myeloproliferative Neoplasm, tân sinh tăng sinh tủy.</span> Nhóm bệnh tủy sản xuất quá nhiều tế bào trưởng thành (CML, đa hồng cầu, tăng tiểu cầu tiên phát, xơ tủy).</td><td class="at"><a href="#aml" title="AML: so sánh hai hệ thống">9.2</a></td></tr><tr id="g-cac-the-mds"><td>Các thể MDS</td><td><span class="full">MDS-5q, MDS-SF3B1, MDS-biTP53, MDS-LB, MDS-h, MDS-IB1/IB2, MDS-f, MDS-EB.</span> Tên phân nhóm MDS theo WHO-HAEM5/ICC: theo gen (del5q, SF3B1, TP53 hai alen), theo blast thấp (LB), tăng blast (IB1, IB2; EB trong ICC), giảm sinh (h), xơ hóa (f).</td><td class="at"><a href="#mds" title="MDS và MDS/AML">9.3</a></td></tr><tr id="g-aul"><td>AUL</td><td><span class="full">Acute Undifferentiated Leukemia, leukemia cấp không biệt hóa.</span> Leukemia cấp có blast không đạt tiêu chí của bất kỳ dòng nào.</td><td class="at"><a href="#alal" title="Leukemia cấp dòng không rõ (ALAL) và MPAL">9.5</a></td></tr><tr id="g-scd3"><td>sCD3</td><td><span class="full">CD3 bề mặt.</span> CD3 trên màng tế bào; có trên T trưởng thành, thường âm trên T-ALL.</td><td class="at"><a href="#alal" title="Leukemia cấp dòng không rõ (ALAL) và MPAL">9.5</a></td></tr><tr id="g-gen-b-all"><td>Gen B-ALL</td><td><span class="full">ETV6::RUNX1, TCF3::PBX1, ZNF384, DUX4, MEF2D, NUTM1, PAX5, IKZF1, TCF3::HLF, IGH::IL3.</span> Các nhóm di truyền định nghĩa phân nhóm B-ALL; nhiều nhóm có kiểu hình gợi ý (ví dụ ETV6::RUNX1 CD9−; TCF3::PBX1 CD9 sáng, CD34−; ZNF384 CD10−, CD13/CD33+; DUX4 CD2+, CD371+).</td><td class="at"><a href="#alal" title="Leukemia cấp dòng không rõ (ALAL) và MPAL">9.5</a></td></tr><tr id="g-gen-t-all"><td>Gen T-ALL</td><td><span class="full">TAL1, TLX1, TLX3, HOXA, BCL11B.</span> Các yếu tố phiên mã bị hoạt hóa bất thường định nghĩa phân nhóm T-ALL; BCL11B gặp trong một số MPAL T/tủy và ETP-ALL.</td><td class="at"><a href="#alal" title="Leukemia cấp dòng không rõ (ALAL) và MPAL">9.5</a></td></tr><tr id="g-iamp21"><td>iAMP21</td><td><span class="full">intrachromosomal amplification of chromosome 21.</span> Khuếch đại một đoạn nhiễm sắc thể 21 trong B-ALL, nguy cơ cao.</td><td class="at"><a href="#ball" title="B-ALL/LBL">9.6</a></td></tr><tr id="g-abl1-like-ph-like"><td>ABL1-like / Ph-like</td><td><span class="full">B-ALL giống BCR::ABL1.</span> Nhóm B-ALL có hồ sơ biểu hiện gen giống B-ALL mang BCR::ABL1 nhưng không có fusion này; hay có CRLF2 tăng.</td><td class="at"><a href="#ball" title="B-ALL/LBL">9.6</a></td></tr><tr id="g-mcl-benh"><td>MCL (bệnh)</td><td><span class="full">Mantle Cell Lymphoma, u lympho tế bào áo nang.</span> Tân sinh B CD5+, CD23− hoặc mờ, CD200−, cyclin D1+ (t(11;14)), SOX11+. Khác với MCL là bộ nạp mẫu của Navios.</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-sblpn"><td>SBLPN</td><td><span class="full">Splenic B-cell Lymphoma/Leukaemia with Prominent Nucleoli.</span> Thực thể WHO-HAEM5 thay HCL biến thể và một phần B-PLL; CD25−, CD123−, không BRAF V600E.</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-fl"><td>FL</td><td><span class="full">Follicular Lymphoma, u lympho thể nang.</span> Tân sinh B trung tâm mầm: CD10+, BCL2+, thường mang t(14;18).</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-dlbcl"><td>DLBCL</td><td><span class="full">Diffuse Large B-cell Lymphoma, u lympho B tế bào lớn lan tỏa.</span> U lympho B ác tính độ cao phổ biến nhất; tế bào lớn, FS cao, dễ mất khi xử lý mẫu. GCB: phân nhóm nguồn gốc trung tâm mầm.</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-hgbl"><td>HGBL</td><td><span class="full">High-Grade B-cell Lymphoma.</span> U lympho B độ cao, gồm thể có chuyển đoạn MYC và BCL2 (double hit).</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-myc-bcl2-bcl6"><td>MYC / BCL2 / BCL6</td><td><span class="full">gen chuyển đoạn trong u lympho B.</span> Chuyển đoạn MYC (Burkitt, HGBL), BCL2 (t(14;18) trong FL), BCL6 (DLBCL). Protein BCL2 cũng đo được bằng flow.</td><td class="at"><a href="#bmature" title="Tân sinh B trưởng thành: thay đổi chính">9.8</a></td></tr><tr id="g-tfh"><td>TFH</td><td><span class="full">T follicular helper, T hỗ trợ nang.</span> Phân nhóm T CD4 hỗ trợ tế bào B trong nang; nguồn gốc của AITL.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-alcl"><td>ALCL</td><td><span class="full">Anaplastic Large Cell Lymphoma.</span> U lympho T tế bào lớn CD30 rất sáng; ALK dương hoặc âm.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-alk"><td>ALK</td><td><span class="full">anaplastic lymphoma kinase.</span> Protein dương trong ALCL ALK+ do chuyển đoạn.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-ptcl"><td>PTCL</td><td><span class="full">Peripheral T-cell Lymphoma.</span> Nhóm u lympho T ngoại vi; NOS là thể không xếp được vào nhóm riêng.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-ebv"><td>EBV</td><td><span class="full">Epstein-Barr virus.</span> Virus liên quan một số u lympho B, T/NK và tăng lympho phản ứng.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-tcr-v"><td>TCR Vβ</td><td><span class="full">TCR Vβ repertoire.</span> Bộ khoảng 24 kháng thể đo tỷ lệ từng họ Vβ; dòng T đơn dòng biểu hiện một họ duy nhất.</td><td class="at"><a href="#tnk" title="Tân sinh T và NK trưởng thành">9.9</a></td></tr><tr id="g-imwg"><td>IMWG</td><td><span class="full">International Myeloma Working Group.</span> Nhóm làm việc quốc tế về đa u tủy; định nghĩa tiêu chuẩn chẩn đoán và đáp ứng, gồm MRD.</td><td class="at"><a href="#pcn" title="Tân sinh tương bào">9.10</a></td></tr><tr id="g-pcl"><td>PCL</td><td><span class="full">Plasma Cell Leukemia, leukemia tương bào.</span> Tương bào ác tính lưu hành trong máu ≥ 5% bạch cầu (định nghĩa IMWG 2021).</td><td class="at"><a href="#pcn" title="Tân sinh tương bào">9.10</a></td></tr><tr id="g-iwcll"><td>iwCLL</td><td><span class="full">International Workshop on CLL.</span> Nhóm đưa ra tiêu chuẩn chẩn đoán, đáp ứng và chỉ định điều trị CLL.</td><td class="at"><a href="#nguong" title="Bảng ngưỡng nhanh">9.11</a></td></tr><tr id="g-eric"><td>ERIC</td><td><span class="full">European Research Initiative on CLL.</span> Nhóm nghiên cứu CLL châu Âu; đưa ra chuẩn MRD CLL bằng flow (độ nhạy 10⁻⁴).</td><td class="at"><a href="#nguong" title="Bảng ngưỡng nhanh">9.11</a></td></tr></tbody></table></div><h4 class="gg">Đã định nghĩa ở chương trước, dùng lại trong chương này</h4><div class="chips"><a data-g="all-b-all-t-all" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-all-b-all-t-all" title="Acute Lymphoblastic Leukemia dòng B / dòng T: Leukemia cấp do nguyên bào lympho (lymphoblast) dòng B hoặc T. Thể khối u ở hạch/trung thất gọi là lymphoma nguyên bào lympho (LBL).">ALL / B-ALL / T-ALL</a><a data-g="aml" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-aml" title="Acute Myeloid Leukemia, leukemia cấp dòng tủy: Ung thư máu do blast dòng tủy tăng sinh trong tủy và máu.">AML</a><a data-g="apl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-apl" title="Acute Promyelocytic Leukemia, leukemia cấp tiền tủy bào: Thể AML mang PML::RARA; kiểu hình CD34−, HLA-DR−, SS cao; cấp cứu vì nguy cơ chảy máu (DIC), điều trị bằng ATRA.">APL</a><a data-g="atll" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-atll" title="Adult T-cell Leukemia/Lymphoma: Tân sinh T CD4+ CD25 sáng do virus HTLV-1; CD7 thường mất.">ATLL</a><a data-g="ai-toan" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-ai-toan" title="eosinophil: Bạch cầu hạt có hạt to màu cam đỏ, nhân hai thùy; chống ký sinh trùng, tham gia dị ứng. SS cao nhất, CD16 âm, tự huỳnh quang cao.">Bạch cầu ái toan</a><a data-g="basophil" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-basophil" title="bạch cầu ưa base: Bạch cầu hạt CD123+, HLA-DR−, CD45 mờ, SS thấp; dễ lẫn vào cổng lympho hoặc blast.">Basophil</a><a data-g="bcr" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-bcr" title="B-cell receptor, thụ thể tế bào B: Immunoglobulin gắn màng (IgM, IgD hoặc lớp đã chuyển) kèm CD79a/CD79b; nhận diện kháng nguyên và truyền tín hiệu hoạt hóa B.">BCR</a><a data-g="blast" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-blast" title="tế bào non: Tế bào chưa biệt hóa (nguyên bào) của một dòng; tỷ lệ blast là tiêu chí chính chẩn đoán leukemia cấp.">Blast</a><a data-g="ccd3-ccd79a-ccd22" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-ccd3-ccd79a-ccd22" title="CD3, CD79a, CD22 nội bào (cytoplasmic): Kháng nguyên đo bên trong tế bào sau làm thấm; cCD3 là tiêu chí dòng T, cCD79a và cCD22 hỗ trợ dòng B.">cCD3 / cCD79a / cCD22</a><a data-g="cd79a-cd79b" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-cd79a-cd79b" title="Igα / Igβ: Hai chuỗi truyền tín hiệu của BCR, mang ITAM; cCD79a là marker dòng B, CD79b bề mặt mờ hoặc âm trong CLL.">CD79a / CD79b</a><a data-g="chuoi-nhe-kappa-lambda" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-chuoi-nhe-kappa-lambda" title="κ / λ light chain: Mỗi tế bào B chỉ dùng một loại chuỗi nhẹ. Quần thể B bình thường có cả hai (đa dòng, κ:λ ≈ 1–2); chỉ một loại là đơn dòng.">Chuỗi nhẹ kappa / lambda</a><a data-g="clearllab-10c" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-clearllab-10c" title="bộ panel leukemia/lymphoma 10 màu của Beckman Coulter: Bốn ống trộn sẵn kháng thể khô (B, T, M1, M2), được cho phép IVD trên Navios/Navios EX 3 laser 10 màu; dùng sàng lọc và phân loại tân sinh huyết học.">ClearLLab 10C</a><a data-g="cll" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-cll" title="Chronic Lymphocytic Leukemia, leukemia kinh dòng lympho: Tân sinh B trưởng thành nhỏ: CD5+, CD23+, CD200 sáng, CD20 mờ, chuỗi nhẹ bề mặt mờ; B đơn dòng ≥ 5 × 10⁹/L trong máu. SLL là thể chủ yếu ở hạch.">CLL</a><a data-g="cml" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-08#g-cml" title="Chronic Myeloid Leukemia, leukemia mạn dòng tủy: MPN mang BCR::ABL1; có thể chuyển pha cấp dòng tủy hoặc lympho.">CML</a><a data-g="cmml" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-cmml" title="Chronic Myelomonocytic Leukemia, leukemia mạn dòng tủy-mono: Tân sinh MDS/MPN có tăng mono kéo dài trong máu; phân thể CMML-1/2 theo blast, MD-CMML/MP-CMML theo số bạch cầu.">CMML</a><a data-g="da-u-tuy" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-da-u-tuy" title="MM, multiple myeloma: Tân sinh tương bào đơn dòng trong tủy gây tổn thương cơ quan (CRAB).">Đa u tủy</a><a data-g="doi-chung-noi-tai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-doi-chung-noi-tai" title="internal control: Tế bào bình thường có sẵn trong cùng mẫu, cùng ống, dùng làm mốc so sánh cường độ hoặc kiểm tra bù.">Đối chứng nội tại</a><a data-g="don-dong-da-dong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-don-dong-da-dong" title="monoclonal / polyclonal: Đơn dòng: các tế bào xuất phát từ một tế bào gốc, cùng một chuỗi nhẹ hoặc cùng TCR; dấu hiệu tân sinh. Đa dòng: hỗn hợp, thường là phản ứng.">Đơn dòng / đa dòng</a><a data-g="duong-truong-thanh" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-duong-truong-thanh" title="maturation pattern: Sự thay đổi kháng nguyên có trật tự khi tế bào trưởng thành, vẽ thành đường cong lặp lại được trên biểu đồ. Lệch khỏi đường này là dấu hiệu bất thường.">Đường trưởng thành</a><a data-g="eln" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-eln" title="European LeukemiaNet: Mạng lưới leukemia châu Âu; đưa ra phân tầng nguy cơ AML (ELN 2022), khuyến cáo MRD AML (2021) và nhóm iMDS Flow.">ELN</a><a data-g="etp-all" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-etp-all" title="Early T-cell Precursor ALL, T-ALL tiền thân sớm: Thể T-ALL rất non: CD1a−, CD8−, CD5 mờ (&lt; 75%), mang ≥ 1 marker tủy hoặc tế bào gốc. Near-ETP khi CD5 không đủ mờ.">ETP-ALL</a><a data-g="fs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-fs" title="Forward scatter, tán xạ thẳng (còn viết FSC): Ánh sáng laser lệch góc nhỏ khi đi qua tế bào; tỷ lệ thuận gần đúng với kích thước tế bào.">FS</a><a data-g="gan-dong" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-gan-dong" title="lineage assignment: Xác định blast thuộc dòng tủy, B hay T dựa trên marker đặc hiệu (MPO, cCD3, CD19 với CD79a/CD22/CD10).">Gán dòng</a><a data-g="hcl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-hcl" title="Hairy Cell Leukemia, leukemia tế bào tóc: Tân sinh B: CD11c rất sáng, CD25+, CD103+, CD123 sáng, annexin A1+, BRAF V600E; giảm mono.">HCL</a><a data-g="hiv-aids" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-07#g-hiv-aids" title="virus gây suy giảm miễn dịch ở người / hội chứng suy giảm miễn dịch mắc phải: Virus tấn công T CD4; số CD4 tuyệt đối dùng để phân giai đoạn và quyết định dự phòng.">HIV / AIDS</a><a data-g="hla-dr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-hla-dr" title="kháng nguyên bạch cầu người lớp II: Có trên tế bào B, mono, tiền thân CD34+, pDC; âm trên bạch cầu hạt trưởng thành, đa số T nghỉ và APL.">HLA-DR</a><a data-g="icc-2022" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-icc-2022" title="International Consensus Classification: Phân loại đồng thuận quốc tế công bố cùng năm 2022, song song với WHO-HAEM5; khác ở một số ngưỡng blast và tên thực thể.">ICC 2022</a><a data-g="khang-nguyen-khang-the" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-khang-nguyen-khang-the" title="antigen / antibody: Kháng nguyên: phân tử trên hoặc trong tế bào (ví dụ CD19). Kháng thể đơn dòng: protein nhận diện đặc hiệu một kháng nguyên, được gắn chất nhuộm để máy đo.">Kháng nguyên / kháng thể</a><a data-g="kieu-hinh-mien-dich" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-kieu-hinh-mien-dich" title="immunophenotype: Tổ hợp các marker dương, âm và cường độ của chúng trên một quần thể tế bào.">Kiểu hình miễn dịch</a><a data-g="ly-giai" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ly-giai" title="lysis: Phá hồng cầu bằng dung dịch (NH4Cl, VersaLyse…) để còn lại bạch cầu. Có kiểu không rửa (lyse/no-wash) và có rửa (stain/lyse/wash).">Ly giải</a><a data-g="lympho" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-lympho" title="lymphocyte: Bạch cầu nhỏ, nhân tròn đặc; gồm ba loại B, T và NK chỉ phân biệt được bằng marker. CD45 sáng nhất, SS thấp.">Lympho</a><a data-g="marker" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-marker" title="dấu ấn: Kháng nguyên dùng để nhận diện hoặc phân loại tế bào, thường gọi theo tên CD.">Marker</a><a data-g="mau-so" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mau-so" title="denominator: Quần thể dùng làm gốc khi tính phần trăm (bạch cầu, tế bào có nhân, lympho, tế bào B…). Cùng một số tế bào có thể ra % rất khác tùy mẫu số.">Mẫu số</a><a data-g="mbl" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-08#g-mbl" title="Monoclonal B-cell Lymphocytosis, tăng lympho B đơn dòng: Có quần thể B đơn dòng trong máu &lt; 5 × 10⁹/L, không có hạch to hay triệu chứng; tiền thân của CLL.">MBL</a><a data-g="mds" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mds" title="Myelodysplastic Syndrome/Neoplasm, hội chứng rối loạn sinh tủy: Nhóm tân sinh dòng tủy có tạo máu không hiệu quả, giảm tế bào máu, loạn sản hình thái, nguy cơ chuyển AML.">MDS</a><a data-g="mhc-hla" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-mhc-hla" title="Major Histocompatibility Complex / Human Leukocyte Antigen: Phân tử trình diện peptide cho T. Lớp I (HLA-A, B, C) trên mọi tế bào có nhân, đọc bởi T CD8; lớp II (HLA-DR, DP, DQ) trên tế bào trình diện và tế bào non, đọc bởi T CD4.">MHC / HLA</a><a data-g="mo1-mo2-mo3" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-mo1-mo2-mo3" title="ba phân nhóm mono: MO1: mono cổ điển CD14++CD16−; MO2: trung gian CD14++CD16+; MO3: không cổ điển CD14+/−CD16++. MO1 ≥ 94% gợi ý CMML.">MO1 / MO2 / MO3</a><a data-g="mono-monocyte" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-mono-monocyte" title="monocyte, bạch cầu đơn nhân lớn: Bạch cầu lớn nhất trong máu; nhân hình thận; vào mô thành đại thực bào. Trên flow: CD45 sáng, SS trung bình, CD14, CD64 sáng, HLA-DR+.">Mono</a><a data-g="mpal" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-mpal" title="Mixed Phenotype Acute Leukemia, leukemia cấp kiểu hình hỗn hợp: Leukemia cấp có blast đạt tiêu chuẩn từ hai dòng trở lên (B/tủy, T/tủy…), trên một quần thể hoặc hai quần thể riêng.">MPAL</a><a data-g="mpo" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-mpo" title="myeloperoxidase: Enzym trong hạt dòng tủy; MPO nội bào dương là tiêu chí gán dòng tủy.">MPO</a><a data-g="mrd" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-mrd" title="Measurable (trước gọi Minimal) Residual Disease, bệnh tồn dư đo được: Tế bào ác tính còn lại sau điều trị ở mức dưới ngưỡng hình thái phát hiện; đo bằng flow, PCR hoặc NGS, thường ở mức 10⁻⁴–10⁻⁶.">MRD</a><a data-g="ngs" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-ngs" title="Next-Generation Sequencing, giải trình tự thế hệ mới: Giải trình tự song song nhiều gen cùng lúc để tìm đột biến; cũng dùng cho MRD dựa trên trình tự IG/TR (clonoSEQ).">NGS</a><a data-g="nguyen-bao-mau-tieu-cau" href="/kien-thuc/flow-cytometry/giao-trinh/3-benh-hoc-kieu-hinh/chuong-08#g-nguyen-bao-mau-tieu-cau" title="megakaryoblast: Tế bào non dòng tiểu cầu, CD41/CD61 dương.">Nguyên bào mẫu tiểu cầu</a><a data-g="nguyen-bao-mono-tien-mono" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-nguyen-bao-mono-tien-mono" title="monoblast / promonocyte: Các giai đoạn non của dòng mono trước khi thành mono trưởng thành; tính tương đương blast trong AML dòng mono.">Nguyên bào mono / tiền mono</a><a data-g="nhuom-noi-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-nhuom-noi-bao" title="intracellular staining: Cố định rồi làm thấm màng để kháng thể vào trong tế bào nhuộm MPO, cCD3, cCD79a, TdT, chuỗi nhẹ nội bào.">Nhuộm nội bào</a><a data-g="nk" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-nk" title="Natural Killer, tế bào diệt tự nhiên: Lympho CD3−, CD56+ và/hoặc CD16+, tiêu diệt tế bào nhiễm virus hoặc ác tính không cần kháng nguyên trình diện.">NK</a><a data-g="npm1" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-05#g-npm1" title="nucleophosmin 1: Đột biến hay gặp trong AML (~30%); thường CD34−, HLA-DR− hoặc thành phần mono; tiên lượng tốt nếu không kèm FLT3-ITD.">NPM1</a><a data-g="ong-b-t-m1-m2" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-ong-b-t-m1-m2" title="bốn ống của ClearLLab 10C: B: tế bào B và chuỗi nhẹ; T: tế bào T, NK; M1 và M2: dòng tủy, mono, blast. Mỗi ống 10 màu, có CD45 Krome Orange để cổng.">Ống B / T / M1 / M2</a><a data-g="pcr-rt-pcr" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-pcr-rt-pcr" title="Polymerase Chain Reaction / Reverse Transcription PCR: Kỹ thuật nhân bản DNA (hoặc RNA qua bước phiên mã ngược) để phát hiện đột biến, fusion, hoặc theo dõi MRD.">PCR / RT-PCR</a><a data-g="sezary" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-sezary" title="hội chứng Sézary: Lymphoma T ở da có tế bào ác tính trong máu: CD4+, mất CD7 và/hoặc CD26, CD3 mờ.">Sézary</a><a data-g="t-ho-tro-gay-doc" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-t-ho-tro-gay-doc" title="helper (CD4) / cytotoxic (CD8) T cell: T CD4 tiết cytokine, giúp B chuyển lớp; T CD8 giết tế bào nhiễm virus và tế bào u.">T hỗ trợ / T gây độc</a><a data-g="t-lgl-nk-lgl" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-t-lgl-nk-lgl" title="Large Granular Lymphocyte leukemia: Tăng sinh lympho hạt lớn đơn dòng: T-LGL (CD3+, CD8+, CD57+) hoặc NK (CD3−, CD16+, KIR đơn dòng), hay có đột biến STAT3. CLPD-NK là tên cũ của NK-LGLL.">T-LGL / NK-LGL</a><a data-g="t-pll" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-t-pll" title="T-cell Prolymphocytic Leukemia: Leukemia T tiến triển nhanh, CD7 sáng, TCL1 dương do tái sắp xếp TCL1A/MTCP1.">T-PLL</a><a data-g="tao-mau" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08a#g-tao-mau" title="hematopoiesis: Quá trình tế bào gốc tạo máu tự làm mới và biệt hóa thành mọi dòng tế bào máu, chủ yếu ở tủy xương.">Tạo máu</a><a data-g="tcr" href="/kien-thuc/flow-cytometry/giao-trinh/2-nen-tang-sinh-hoc/chuong-08b#g-tcr" title="T-cell receptor, thụ thể tế bào T: Thụ thể nhận diện kháng nguyên của tế bào T, gồm hai chuỗi αβ (đa số) hoặc γδ, đi cùng CD3.">TCR</a><a data-g="trbc1" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-trbc1" title="T-cell receptor beta constant 1: Mỗi T αβ dùng một trong hai đoạn hằng định TRBC1 hoặc TRBC2. Đo TRBC1 bằng flow giúp đánh giá đơn dòng T giống kappa/lambda ở B. Kháng thể dòng JOVI-1.">TRBC1</a><a data-g="tuong-bao" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-01#g-tuong-bao" title="plasma cell: Tế bào B biệt hóa cuối cùng tiết kháng thể; CD38 rất sáng, CD138+, chuỗi nhẹ nội bào.">Tương bào</a><a data-g="who-haem5" href="/kien-thuc/flow-cytometry/giao-trinh/1-nen-tang-thiet-bi/chuong-06#g-who-haem5" title="WHO Classification of Haematolymphoid Tumours, 5th edition (2022): Phân loại u tạo máu và lympho của Tổ chức Y tế Thế giới, xuất bản 2022.">WHO-HAEM5</a></div></div></details>

<div id="nguyentac" class="ftb-anchor"></div>

## 9.1 Nguyên tắc chung

<div class="grid2">
<div class="card"><h4>WHO-HAEM5</h4><p>Hệ thống phân cấp (loại → họ → kiểu → phân kiểu) thống nhất cho mọi khối u trong bộ sách WHO lần 5. Tên gen dùng dấu “::” cho gen hợp nhất (ví dụ <code>RUNX1::RUNX1T1</code>). Bỏ ngưỡng 20% blast cho hầu hết AML có bất thường di truyền xác định.</p></div>
<div class="card"><h4>ICC 2022</h4><p>Do nhóm chuyên gia (phần lớn từng tham gia WHO 2016) xây dựng, tích hợp hình thái, lâm sàng và gen; cập nhật từ WHO 2016 hơn là cải tổ. Hạ ngưỡng blast xuống ≥10% cho AML có bất thường gen điển hình; tạo nhóm MDS/AML cho 10–19% blast.</p></div>
</div>

<div class="callout"><b class="t">Trong báo cáo flow</b>Không cần (và không nên) đưa ra chẩn đoán phân loại cuối cùng; nhưng nên dùng thuật ngữ khớp với hệ thống mà khoa lâm sàng dùng và ghi rõ những gì cần để hoàn tất phân loại (ví dụ “đề nghị FISH PML::RARA khẩn”, “đề nghị NGS NPM1, FLT3, CEBPA, TP53”).</div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Hai hệ thống, một bệnh nhân</div>
<p>WHO-HAEM5 và ICC 2022 giống hai bộ từ điển cùng mô tả một ngôn ngữ, đa số định nghĩa trùng nhau nhưng một số từ khác ngưỡng. Báo cáo flow không cần chọn phe, nhưng nên ghi rõ hệ thống nào bác sĩ đang dùng khi nêu ngưỡng blast, và cung cấp đủ dữ liệu để áp được cả hai.</p></div>

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">Flow không đếm % blast chính thức</div>
<p>Theo cả hai hệ thống, % blast dùng để phân loại là đếm hình thái trên lam. Flow cung cấp bằng chứng hỗ trợ: kiểu hình, dòng, và % tham khảo. Hai con số thường khác nhau vì mẫu số khác (flow sau ly giải hồng cầu, hình thái trên tế bào có nhân) và vì hút tủy khác lần.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["WHO-HAEM5", ["Hệ thống phân cấp", "Gen trước; bỏ ngưỡng 20% cho phần lớn AML có gen", "Leukemia 2022"], "b488"], ["ICC 2022", ["Cập nhật từ WHO 2016", "Ngưỡng ≥10% cho AML có gen; nhóm MDS/AML", "Blood 2022"], "r638"]]}'><figcaption>Hai hệ thống phân loại song song năm 2022.</figcaption></figure>

<div id="aml" class="ftb-anchor"></div>

## 9.2 AML: so sánh hai hệ thống

<div class="tbl-wrap"><table>
<thead><tr><th>Nhóm</th><th>WHO-HAEM5</th><th>ICC 2022</th></tr></thead>
<tbody>
<tr><td>APL với PML::RARA</td><td>Không ngưỡng blast</td><td>≥10% blast; ICC có thêm APL với sắp xếp lại RARA khác</td></tr>
<tr><td>RUNX1::RUNX1T1, CBFB::MYH11, DEK::NUP214, RBM15::MRTFA, KMT2A, MECOM, NUP98</td><td>Không ngưỡng blast</td><td>≥10% blast</td></tr>
<tr><td>NPM1 đột biến</td><td>Không ngưỡng blast</td><td>≥10% blast</td></tr>
<tr><td>CEBPA đột biến</td><td>≥20% blast; gồm biallelic và bZIP đơn</td><td>≥10% blast; chỉ đột biến khung bZIP trong khung đọc</td></tr>
<tr><td>BCR::ABL1</td><td>≥20% blast (phân biệt với CML pha cấp)</td><td>≥20% blast</td></tr>
<tr><td>TP53 đột biến</td><td>Không phải thực thể AML riêng</td><td>AML với TP53 đột biến (VAF ≥10%) thành nhóm riêng; cũng có MDS và MDS/AML với TP53</td></tr>
<tr><td>Liên quan rối loạn sinh tủy</td><td>AML-MR (myelodysplasia-related) định nghĩa bằng gen (ASXL1, BCOR, EZH2, SF3B1, SRSF2, STAG2, U2AF1, ZRSR2) hoặc karyotype; bỏ tiêu chí hình thái đơn thuần</td><td>AML với đột biến gen liên quan MDS, AML với bất thường di truyền tế bào liên quan MDS</td></tr>
<tr><td>AML xác định theo biệt hóa</td><td>Biệt hóa tối thiểu, không trưởng thành, có trưởng thành, ưa base, tủy-mono, mono, hồng cầu, nguyên mẫu tiểu cầu; ≥20%</td><td>AML NOS ≥20%; nhóm 10–19% là MDS/AML</td></tr>
<tr><td>Bổ ngữ</td><td>Sau điều trị gây độc tế bào, liên quan dòng mầm</td><td>Bổ ngữ: liên quan điều trị, xuất phát từ MDS hay MDS/MPN, dòng mầm</td></tr>
</tbody>
</table></div>

<p class="src">Tổng hợp từ Khoury 2022, Arber 2022, Weinberg 2023 (ICC AML) và các bài so sánh. Một tổng quan trên Koreamed nhấn mạnh: ICC yêu cầu tối thiểu 10% blast ở tủy hoặc máu, WHO 2022 không đặt ngưỡng cho nhóm có gen xác định.</p>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Cùng một bệnh nhân, hai tên gọi</div>
<p>Tủy 14% blast, NGS có NPM1 đột biến. WHO-HAEM5: AML với NPM1 đột biến (không cần ngưỡng). ICC: AML với NPM1 đột biến (cần ≥10%, đạt). Nếu chỉ 8% blast: WHO vẫn gọi AML; ICC không đủ ngưỡng AML. Người làm flow cần nắm sự khác biệt này để hiểu vì sao bác sĩ hỏi kỹ con số.</p></div>

<figure class="fig" data-fig='{"t": "scale", "min": 0, "max": 30, "unit": "% blast", "zones": [[0, 10, "ICC: dưới ngưỡng cho AML có gen", "muted"], [10, 20, "ICC: AML có gen hoặc MDS/AML", "warn"], [20, 30, "AML không có gen đặc hiệu (WHO, ICC)", "r638"]], "marks": [[0.3, "WHO: không ngưỡng (đa số gen)", "b488"], [10, "ICC 10%", "warn"], [20, "20%", "bad"]], "ticks": [[0, "0"], [5, "5"], [10, "10"], [15, "15"], [20, "20"], [25, "25"], [30, "30"]]}'><figcaption>Ngưỡng blast cho AML theo WHO-HAEM5 và ICC 2022.</figcaption></figure>

<div id="mds" class="ftb-anchor"></div>

## 9.3 MDS và MDS/AML

<div class="tbl-wrap"><table>
<thead><tr><th>WHO-HAEM5</th><th>Tiêu chí blast</th><th>ICC 2022 tương ứng</th></tr></thead>
<tbody>
<tr><td>MDS blast thấp với del(5q) đơn độc (MDS-5q)</td><td>&lt;5% tủy, &lt;2% máu</td><td>MDS với del(5q)</td></tr>
<tr><td>MDS blast thấp với SF3B1 đột biến (MDS-SF3B1)</td><td>&lt;5% tủy, &lt;2% máu</td><td>MDS với SF3B1</td></tr>
<tr><td>MDS với TP53 bất hoạt hai alen (MDS-biTP53)</td><td>&lt;20%</td><td>MDS với TP53 đột biến (0–9%); MDS/AML với TP53 (10–19%)</td></tr>
<tr><td>MDS blast thấp (MDS-LB); MDS giảm sản (MDS-h)</td><td>&lt;5% tủy, &lt;2% máu</td><td>MDS không đặc hiệu (một dòng hoặc nhiều dòng)</td></tr>
<tr><td>MDS tăng blast IB1</td><td>5–9% tủy hoặc 2–4% máu</td><td>MDS với tăng blast (MDS-EB) 5–9%</td></tr>
<tr><td>MDS tăng blast IB2</td><td>10–19% tủy hoặc 5–19% máu hoặc có thể Auer</td><td>MDS/AML 10–19%</td></tr>
<tr><td>MDS với xơ hóa (MDS-f)</td><td>5–19%</td><td>—</td></tr>
</tbody>
</table></div>

Ngưỡng 20% blast định nghĩa AML vẫn giữ trong ICC cho nhóm không có gen đặc hiệu. Vai trò flow trong MDS (tiêu chí hỗ trợ) trình bày ở chương 11.

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">MDS phân theo blast và gen, không theo flow</div>
<p>Phân loại MDS dựa vào % blast hình thái, giảm tế bào máu và bất thường gen (del(5q), SF3B1, TP53). Flow không có tiêu chí riêng trong bảng phân loại, nhưng góp bằng chứng loạn sản và giúp phân biệt MDS với thay đổi phản ứng (chương 11).</p></div>

<figure class="fig" data-fig='{"t": "scale", "min": 0, "max": 20, "unit": "% blast tủy", "zones": [[0, 5, "MDS-LB / MDS-SF3B1 / MDS-5q", "ok"], [5, 10, "IB1 (WHO) / MDS-EB (ICC)", "warn"], [10, 20, "IB2 (WHO) / MDS/AML (ICC)", "r638"]], "ticks": [[0, "0"], [5, "5"], [10, "10"], [15, "15"], [20, "20"]]}'><figcaption>Ngưỡng blast tủy trong MDS theo hai hệ thống.</figcaption></figure>

<div id="mdsmpn" class="ftb-anchor"></div>

## 9.4 MDS/MPN và CMML

Cả hai hệ thống hạ ngưỡng mono máu để chẩn đoán CMML xuống ≥0,5 × 10⁹/L kèm mono ≥10% bạch cầu (trước đây ≥1 × 10⁹/L). WHO-HAEM5 chia CMML-1 và CMML-2 theo % blast (bao gồm tiền mono): CMML-2 khi blast ≥5% ở máu hoặc ≥10% ở tủy. WHO-HAEM5 còn phân biệt thể loạn sản (MD-CMML) và tăng sinh (MP-CMML) theo ngưỡng bạch cầu 13 × 10⁹/L. Flow giúp đếm tiền mono như blast và đánh giá phân nhóm mono (MO1).

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Ngưỡng mono mới của CMML</div>
<p>Bạch cầu 6 × 10⁹/L, mono 12% = 0,72 × 10⁹/L. Theo tiêu chí cũ (mono ≥1 × 10⁹/L): chưa đạt. Theo WHO-HAEM5 và ICC 2022 (mono ≥0,5 × 10⁹/L và ≥10%): đạt tiêu chí mono. Flow góp thêm bằng tỷ lệ MO1 tăng (chương 11).</p></div>

<figure class="fig" data-fig='{"t": "tree", "root": "Mono ≥0,5 × 10⁹/L và ≥10% bạch cầu, kéo dài", "b": [["Blast máu &lt;5% và tủy &lt;10%", "CMML-1", "warn"], ["Blast máu ≥5% hoặc tủy ≥10%", "CMML-2", "bad"], ["Bạch cầu ≥13 × 10⁹/L", "MP-CMML (WHO)|dưới: MD-CMML", "accent"]]}'><figcaption>Phân nhóm CMML theo WHO-HAEM5.</figcaption></figure>

<div id="alal" class="ftb-anchor"></div>

## 9.5 Leukemia cấp dòng không rõ (ALAL) và MPAL

<div class="tbl-wrap"><table>
<thead><tr><th>Dòng</th><th>Tiêu chí gán dòng (WHO-HAEM5 và ICC gần như thống nhất)</th></tr></thead>
<tbody>
<tr><td>Tủy</td><td>MPO (flow, hóa mô miễn dịch hoặc hóa tế bào) trên một phần blast; hoặc biệt hóa mono (ít nhất 2 trong: esterase không đặc hiệu, CD11c, CD14, CD64, lysozyme)</td></tr>
<tr><td>T</td><td>cCD3 mạnh (bằng hoặc sáng hơn T bình thường trong mẫu) hoặc sCD3. CD2, CD5, CD7, CD8 hay gặp trên B-ALL và AML nên không dùng để gán dòng T</td></tr>
<tr><td>B</td><td>CD19 mạnh kèm ít nhất một trong CD79a, cCD22, CD10 mạnh; hoặc CD19 yếu kèm ít nhất hai trong số đó</td></tr>
</tbody>
</table></div>

WHO-HAEM5 đưa thêm hướng dẫn về cường độ: biểu hiện được xem là dương khi vượt một tỷ lệ blast nhất định và đạt cường độ so với tế bào bình thường; ICC có điều chỉnh tương tự cho MPO. Phân loại ALAL WHO-HAEM5: leukemia cấp dòng không rõ có bất thường gen xác định (MPAL với BCR::ABL1, MPAL với KMT2A, có gen khác như ZNF384, BCL11B), leukemia cấp không biệt hóa (AUL), MPAL B/tủy, MPAL T/tủy, MPAL dạng hiếm, ALAL không đặc hiệu. Trước khi kết luận MPAL phải loại trừ AML có gen xác định (ví dụ RUNX1::RUNX1T1 hay biểu hiện CD19, PAX5, cCD79a) và AML-MR.

<div class="callout warn"><b class="t">Liên hệ ClearLLab</b>ClearLLab 10C không có MPO, cCD3, cCD79a, cCD22. Khi thấy blast có cả marker tủy và lympho trên các ống bề mặt (ví dụ CD7 trên blast CD33+, hay CD19 trên blast CD117+), phải làm ống nội bào trước khi đề cập MPAL.</div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Áp tiêu chí dòng theo thứ tự</div>
<ol><li>Dòng T: cCD3 mạnh (cường độ gần bằng T bình thường) trên một phần blast.</li><li>Dòng tủy: MPO trên một phần blast, hoặc biệt hóa mono rõ.</li><li>Dòng B: CD19 mạnh kèm một marker B khác mạnh, hoặc CD19 yếu kèm hai marker B khác mạnh.</li><li>Đủ hai dòng: MPAL. Không đủ dòng nào: AUL.</li></ol>
<p>Ghi rõ cường độ so với đối chứng nội tại, vì tiêu chí dòng phụ thuộc “mạnh” hay “yếu”.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["Tủy", "MPO hoặc ≥2 marker mono (NSE, CD11c, CD14, CD64, lysozyme)", "r638"], ["T", "cCD3 mạnh (≥ T bình thường) hoặc sCD3", "v405"], ["B", "CD19 mạnh + 1 trong CD79a, cCD22, CD10 mạnh; hoặc CD19 yếu + 2", "b488"]], "per": 3, "h": 96}'><figcaption>Tiêu chí gán dòng cho MPAL.</figcaption></figure>

<div id="ball" class="ftb-anchor"></div>

## 9.6 B-ALL/LBL

<div class="tbl-wrap"><table>
<thead><tr><th>WHO-HAEM5</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>B-ALL/LBL, NOS</td><td>Chỉ dùng khi đã xét nghiệm gen đầy đủ mà không thấy bất thường xác định</td></tr>
<tr><td>với high hyperdiploidy</td><td>51–65 nhiễm sắc thể; nhóm lớn nhất ở trẻ em (khoảng 30%), hiếm ở người lớn</td></tr>
<tr><td>với hypodiploidy</td><td></td></tr>
<tr><td>với iAMP21</td><td></td></tr>
<tr><td>với BCR::ABL1</td><td>ICC tách thể chỉ dòng lympho và thể đa dòng</td></tr>
<tr><td>với đặc điểm giống BCR::ABL1 (Ph-like)</td><td>Thành thực thể chính thức</td></tr>
<tr><td>với KMT2A rearrangement</td><td>Thường CD10 âm (pro-B)</td></tr>
<tr><td>với ETV6::RUNX1</td><td>Tiên lượng tốt ở trẻ em</td></tr>
<tr><td>với đặc điểm giống ETV6::RUNX1</td><td>Mới trong WHO-HAEM5; thường mất ETV6 và IKZF1</td></tr>
<tr><td>với TCF3::PBX1</td><td></td></tr>
<tr><td>với IGH::IL3</td><td>Kèm tăng bạch cầu ái toan</td></tr>
<tr><td>với TCF3::HLF</td><td>Mới; rất xấu</td></tr>
<tr><td>với bất thường gen xác định khác</td><td>Ví dụ DUX4, MEF2D, ZNF384, NUTM1, PAX5alt; ICC liệt kê nhiều thể riêng</td></tr>
</tbody>
</table></div>

<p class="src">Danh mục theo bảng của Alaggio 2022 và các tổng quan WHO-HAEM5.</p>

<div class="learn khach"><div class="lh" data-k="Khi khách hàng hỏi">“Flow có biết được ETV6::RUNX1 không?”</div>
<p>Flow chỉ <b>gợi ý</b>: CD10+, CD34+, CD9 âm hoặc yếu, CD20 âm, CD27 dương… Gợi ý giúp ưu tiên xét nghiệm gen, nhưng không thay được FISH hoặc RT-PCR. Báo cáo dùng chữ “gợi ý”, không dùng chữ “phù hợp” hay “chẩn đoán”.</p></div>

<figure class="fig" data-fig='{"t": "bars", "items": [["High hyperdiploidy (trẻ em)", 30, "ok", "≈30%"], ["High hyperdiploidy (người lớn)", 1, "warn", "≈1%"]], "unit": "%", "max": 35, "lw": 240}'><figcaption>Ví dụ khác biệt tần suất nhóm gen B-ALL theo tuổi: high hyperdiploidy chiếm khoảng 30% B-ALL trẻ em nhưng chỉ khoảng 1% người lớn (tổng quan WHO-HAEM5).</figcaption></figure>

<div id="tall" class="ftb-anchor"></div>

## 9.7 T-ALL/LBL và NK

WHO-HAEM5: T-lymphoblastic leukaemia/lymphoma, NOS và early T-precursor lymphoblastic leukaemia/lymphoma (ETP-ALL). ICC chia T-ALL theo giai đoạn và gen chi tiết hơn (ví dụ thể early T-precursor có hay không có BCL11B, và các nhóm theo TAL1, TLX1, TLX3, HOXA…). Leukemia nguyên bào NK được WHO-HAEM5 bỏ như thực thể riêng do thiếu tiêu chí tin cậy. Tiêu chuẩn ETP: cCD3+, CD7+, CD1a−, CD8−, sCD3−, CD5 âm hoặc mờ (<75% blast), ít nhất một marker gốc/tủy trên ≥25% blast (chương 12).

<div class="learn denham"><div class="lh" data-k="Dễ nhầm">cCD3 và CD3 bề mặt</div>
<p>Gán dòng T dựa vào <b>cCD3 nội bào</b>. CD3 bề mặt thường âm ở blast T, chỉ dương ở thể trưởng thành. ClearLLab ống T chỉ có CD3 bề mặt, nên blast CD7+ CD3 bề mặt âm cần ống nội bào cCD3 để xác định dòng.</p></div>

<figure class="fig" data-fig='{"t": "flow", "n": [["Pro-T", "cCD3, CD7", "v405"], ["Pre-T", "+ CD2, CD5, CD8", "b488"], ["Vỏ tuyến ức", "CD1a, CD4+CD8+", "accent"], ["Trưởng thành", "sCD3, CD4 hoặc CD8", "ok"]], "per": 4}'><figcaption>Các giai đoạn biệt hóa T-ALL theo EGIL; ETP-ALL thuộc vùng sớm nhất.</figcaption></figure>

<div id="bmature" class="ftb-anchor"></div>

## 9.8 Tân sinh B trưởng thành: thay đổi chính

<div class="tbl-wrap"><table>
<thead><tr><th>Chủ đề</th><th>WHO-HAEM5</th><th>ICC 2022</th></tr></thead>
<tbody>
<tr><td>CLL/SLL</td><td>≥5 × 10⁹/L tế bào B đơn dòng kiểu CLL ở máu (hoặc SLL ở mô)</td><td>Như WHO</td></tr>
<tr><td>MBL</td><td>3 phân kiểu: số lượng thấp (&lt;0,5 × 10⁹/L), kiểu CLL/SLL (≥0,5 và &lt;5), kiểu không phải CLL/SLL</td><td>Tương tự</td></tr>
<tr><td>B-PLL</td><td>Bỏ; ca trước đây xếp lại thành CLL tiến triển tiền lympho, MCL, hoặc SBLPN</td><td>Giữ B-PLL</td></tr>
<tr><td>HCL biến thể</td><td>Bỏ; thay bằng splenic B-cell lymphoma/leukaemia with prominent nucleoli (SBLPN)</td><td>Giữ HCL variant</td></tr>
<tr><td>Lymphoma nang (FL)</td><td>FL kinh điển; độ mô học không bắt buộc; thêm FL dạng nang nhỏ, FL thể khác thường</td><td>Giữ phân độ 1–2, 3A, 3B</td></tr>
<tr><td>DLBCL và lymphoma độ cao</td><td>HGBL với MYC và BCL2 rearrangement; DLBCL/HGBL với MYC và BCL6 không còn là thực thể riêng</td><td>HGBL với MYC và BCL2, và với MYC và BCL6 (tạm thời)</td></tr>
</tbody>
</table></div>

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">MBL hay CLL?</div>
<p>Máu có 3,2 × 10⁹/L tế bào B đơn dòng kiểu hình CLL, không hạch, không triệu chứng: MBL kiểu CLL/SLL (≥0,5 và &lt;5 × 10⁹/L). Cùng kiểu hình với 6 × 10⁹/L: CLL. Flow phải báo được số tuyệt đối tế bào B đơn dòng, không chỉ phần trăm.</p></div>

<figure class="fig" data-fig='{"t": "cmp", "p": [["WHO-HAEM5 bỏ / đổi", ["B-PLL", "HCL biến thể → SBLPN", "Phân độ FL không bắt buộc"], "b488"], ["ICC giữ", ["B-PLL", "HCL variant", "Phân độ FL 1–2, 3A, 3B"], "r638"]]}'><figcaption>Khác biệt chính trong tân sinh B trưởng thành.</figcaption></figure>

<div id="tnk" class="ftb-anchor"></div>

## 9.9 Tân sinh T và NK trưởng thành

<div class="tbl-wrap"><table>
<thead><tr><th>Thực thể</th><th>Ghi chú phân loại</th></tr></thead>
<tbody>
<tr><td>T-LGLL</td><td>Leukemia lympho hạt lớn T</td></tr>
<tr><td>NK-LGLL</td><td>WHO-HAEM5 đổi tên từ rối loạn tăng sinh NK mạn (CLPD-NK)</td></tr>
<tr><td>T-PLL</td><td>Tiêu chí chính gồm tăng lympho T, đơn dòng, bất thường TCL1A hoặc MTCP1</td></tr>
<tr><td>ATLL</td><td>Liên quan HTLV-1</td></tr>
<tr><td>Hội chứng Sézary, mycosis fungoides</td><td>Nhóm lymphoma T ở da</td></tr>
<tr><td>Lymphoma T có kiểu hình T hỗ trợ nang (TFH)</td><td>WHO-HAEM5 gom thành nodal TFH cell lymphoma, các kiểu angioimmunoblastic, follicular, NOS</td></tr>
<tr><td>ALCL ALK+ và ALK−</td><td>CD30 mạnh</td></tr>
<tr><td>PTCL, NOS</td><td>Chẩn đoán loại trừ</td></tr>
<tr><td>Leukemia NK tấn công (aggressive NK)</td><td>Liên quan EBV</td></tr>
</tbody>
</table></div>

<div class="learn hieu"><div class="lh" data-k="Hiểu nhanh">Tân sinh T là chẩn đoán của nhiều mảnh ghép</div>
<p>Khác với B (có kappa/lambda), T không có marker đơn dòng đơn giản trên flow thường quy. Chẩn đoán dựa vào nhiều mảnh: mất kháng nguyên, cường độ bất thường, vô tính (TRBC1 hoặc TCR Vβ), lâm sàng, mô bệnh học, gen. Flow hiếm khi tự kết luận một mình.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["T-LGLL", "CD8+ CD57+", "accent"], ["NK-LGLL", "tên mới của CLPD-NK", "v405"], ["T-PLL", "TCL1", "b488"], ["ATLL", "HTLV-1, CD25", "r638"], ["Sézary", "CD4+ CD7−/CD26−", "warn"], ["TFH / AITL", "CD10, PD-1", "ok"], ["ALCL", "CD30", "bad"], ["PTCL, NOS", "loại trừ", "muted"]], "per": 4}'><figcaption>Các thực thể T/NK trưởng thành hay gặp trên flow.</figcaption></figure>

<div id="pcn" class="ftb-anchor"></div>

## 9.10 Tân sinh tương bào

Theo đồng thuận IMWG 2021, leukemia tương bào (PCL) được định nghĩa khi có ≥5% tương bào lưu hành trên lam máu ở bệnh nhân đủ tiêu chuẩn đa u tủy (trước đây ≥20% và ≥2 × 10⁹/L); WHO-HAEM5 dùng ngưỡng ≥5%. IMWG còn khuyến nghị dùng thêm phương pháp như flow để định lượng tương bào máu nhằm phát hiện sớm. Flow đóng vai trò định lượng và đánh giá dòng tương bào bất thường, MRD (chương 14, 18).

<div class="learn vidu"><div class="lh" data-k="Ví dụ bằng số">Ngưỡng PCL mới</div>
<p>Bệnh nhân đa u tủy có 6% tương bào lưu hành trên lam máu. Theo IMWG 2021 và WHO-HAEM5 (≥5%): leukemia tương bào. Theo định nghĩa cũ (≥20% và ≥2 × 10⁹/L): chưa đạt. Flow trên máu có thể phát hiện tương bào lưu hành thấp hơn nhiều, nhưng ngưỡng 5% là theo lam máu.</p></div>

<figure class="fig" data-fig='{"t": "scale", "min": 0, "max": 25, "unit": "% tương bào lưu hành", "zones": [[0, 5, "Đa u tủy", "warn"], [5, 25, "Leukemia tương bào (≥5%)", "r638"]], "marks": [[5, "IMWG 2021 / WHO-HAEM5: 5%", "bad"], [20, "định nghĩa cũ 20%", "muted"]], "ticks": [[0, "0"], [5, "5"], [10, "10"], [20, "20"], [25, "25"]]}'><figcaption>Ngưỡng leukemia tương bào mới (≥5%) so với định nghĩa cũ.</figcaption></figure>

<div id="nguong" class="ftb-anchor"></div>

## 9.11 Bảng ngưỡng nhanh

<div class="tbl-wrap"><table>
<thead><tr><th>Ngưỡng</th><th>Giá trị</th><th>Nguồn</th></tr></thead>
<tbody>
<tr><td>AML không có gen xác định</td><td>≥20% blast</td><td>WHO, ICC</td></tr>
<tr><td>AML có gen xác định</td><td>Không ngưỡng (WHO, trừ BCR::ABL1 và CEBPA); ≥10% (ICC)</td><td>Khoury 2022; Arber 2022</td></tr>
<tr><td>MDS/AML</td><td>10–19% blast</td><td>ICC</td></tr>
<tr><td>CMML</td><td>Mono ≥0,5 × 10⁹/L và ≥10% bạch cầu</td><td>WHO, ICC</td></tr>
<tr><td>CLL</td><td>≥5 × 10⁹/L B đơn dòng kiểu CLL</td><td>WHO, ICC, iwCLL</td></tr>
<tr><td>MBL số lượng thấp</td><td>&lt;0,5 × 10⁹/L</td><td>WHO</td></tr>
<tr><td>PCL</td><td>≥5% tương bào lưu hành</td><td>IMWG 2021; WHO-HAEM5</td></tr>
<tr><td>ETP-ALL</td><td>CD5 &lt;75% blast; marker gốc/tủy ≥25% blast</td><td>Coustan-Smith 2009; WHO</td></tr>
<tr><td>Bệnh HIV tiến triển</td><td>CD4 &lt;200/mm³ (người lớn, trẻ ≥5 tuổi)</td><td>WHO</td></tr>
<tr><td>MRD AML dương</td><td>≥0,1%</td><td>ELN 2021</td></tr>
<tr><td>MRD CLL</td><td>10⁻⁴</td><td>ERIC, iwCLL</td></tr>
</tbody>
</table></div>

<div class="learn thuchanh"><div class="lh" data-k="Làm thực tế">Dùng bảng ngưỡng khi trao đổi với bác sĩ</div>
<p>Trước buổi hội chẩn, ghi ra % blast theo flow (kèm mẫu số), % blast hình thái nếu có, và kết quả gen đã có. Đối chiếu với bảng để biết con số nào nằm sát ngưỡng (ví dụ 18–22% blast, 9–11% với ICC). Những ca sát ngưỡng là nơi cần nói rõ giới hạn của flow.</p></div>

<figure class="fig" data-fig='{"t": "cards", "items": [["AML không gen", "≥20% blast", "r638"], ["AML có gen (ICC)", "≥10%", "warn"], ["CMML", "mono ≥0,5 × 10⁹/L, ≥10%", "accent"], ["CLL", "≥5 × 10⁹/L B đơn dòng", "b488"], ["PCL", "≥5% tương bào máu", "v405"], ["MRD AML", "≥0,1%", "bad"], ["MRD CLL", "10⁻⁴", "ok"], ["HIV tiến triển", "CD4 &lt;200/mm³", "muted"]], "per": 4}'><figcaption>Thẻ ngưỡng nhanh.</figcaption></figure>

<div id="hoibacsi" class="ftb-anchor"></div>

## 9.12 Hỏi bác sĩ

<details class="ans"><summary>“Flow có 12% blast, NGS có NPM1. Là AML hay MDS?”</summary><p>Theo WHO-HAEM5: AML với NPM1 đột biến (không cần ngưỡng blast). Theo ICC: AML với NPM1 (cần ≥10%, đạt). Lưu ý % blast chính thức cho phân loại là đếm hình thái; flow là bằng chứng hỗ trợ. Báo cáo flow nên mô tả kiểu hình gợi ý NPM1 (CD34 âm, HLA-DR âm hoặc mờ, thường có thành phần mono) nếu có.</p></details>

<details class="ans"><summary>“Nên viết B-PLL hay không?”</summary><p>Tùy hệ thống khoa đang dùng. WHO-HAEM5 bỏ B-PLL; ICC còn giữ. Báo cáo flow nên mô tả kiểu hình (ví dụ B đơn dòng CD5 âm, CD20 sáng, chuỗi nhẹ sáng, FS lớn) và gợi ý chẩn đoán phân biệt (MCL thể tiền lympho, SBLPN, CLL tiến triển) kèm đề nghị FISH t(11;14).</p></details>

<div class="learn tukt"><div class="lh" data-k="Tự kiểm tra">Tự kiểm tra cuối chương</div><details class="ans"><summary>Flow 12% blast, hình thái 9%. Báo con số nào cho phân loại?</summary><p>Phân loại dùng % blast hình thái. Flow báo % của mình kèm mẫu số và nêu lý do có thể khác (mẫu số, lần hút).</p></details><details class="ans"><summary>ClearLLab ống T có CD3 bề mặt âm trên blast CD7+. Đủ gán dòng T chưa?</summary><p>Chưa. Gán dòng T cần cCD3 nội bào; cần thêm ống nội bào.</p></details><details class="ans"><summary>Vì sao báo cáo B mature cần số tuyệt đối tế bào B đơn dòng?</summary><p>Vì ranh giới MBL, CLL dựa trên số tuyệt đối (0,5 và 5 × 10⁹/L), không dựa trên phần trăm.</p></details></div>

<figure class="fig" data-fig='{"t": "tree", "root": "12% blast + NPM1", "b": [["WHO-HAEM5", "AML với NPM1 (không ngưỡng)", "b488"], ["ICC 2022", "AML với NPM1 (≥10%: đạt)", "r638"]]}'><figcaption>Cùng dữ liệu, hai hệ thống cùng kết luận.</figcaption></figure>

<footer>Tài liệu học tập tổng hợp từ IFU của Beckman Coulter (Navios EX B73085AF, Kaluza C C10993AH, C29335AA, B86351AA, A45429AG) và y văn đã dẫn. Không thay thế hướng dẫn sử dụng của nhà sản xuất, quy trình đã thẩm định của phòng xét nghiệm hay ý kiến của bác sĩ. Mọi biểu đồ chấm trong tài liệu là dữ liệu mô phỏng để minh họa.</footer>

<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/goi.js" data-page="ch09.html"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/glossary.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/app.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/figs.js"></script>
<script src="/kien-thuc/flow-cytometry/giao-trinh/assets/gloss-ui.js"></script>

*Biên soạn cùng AI · Dam duyệt*
