## Lightning Web Components (LWC) (39 Câu Hỏi)

1. Sự khác biệt giữa `for:each` và `iterator` trong Lightning Web Components (LWC) là gì?
2. Cung cấp một ví dụ mã để thể hiện giai đoạn bubble và capture trong JavaScript.
3. Làm thế nào để triển khai Lightning Message Service (LMS) kèm ví dụ?
4. Lightning Data Service (LDS) là gì và nó được sử dụng như thế nào?
5. Decorators trong LWC là gì và chúng được sử dụng ra sao?
6. Lifecycle hooks trong Lightning Web Components là gì?
7. Cái nào được thực thi trước: decorators hay lifecycle hooks?
8. Ưu điểm và hạn chế của Lightning Data Service (LDS) là gì?
9. Làm thế nào để giao tiếp từ một thành phần con đến thành phần cha trong LWC? Và ngược lại?
10. Hai thành phần LWC độc lập có thể giao tiếp với nhau như thế nào?
11. Vai trò của `LightningElement` trong LWC là gì, và nó có những phương thức nào để quản lý vòng đời thành phần?
12. Những yếu tố nào cần xem xét về hiệu suất khi xử lý tập dữ liệu lớn trong LWC? Làm thế nào để tối ưu hóa xử lý dữ liệu cho hiệu suất tốt hơn?
13. Giải thích cách sử dụng `@api`, `@track`, và `@wire` trong LWC. Sự khác biệt trong trường hợp sử dụng của chúng là gì?
14. Lifecycle hooks trong LWC là gì, và thứ tự của lifecycle hooks từ thành phần cha đến thành phần con ra sao?
15. Tại sao chúng ta sử dụng phương thức constructor trong LWC?
16. Callback function là gì?
17. Có bao nhiêu loại decorators trong LWC?
18. Có bao nhiêu cách để gọi Apex trong Lightning Web Components (LWC)?
19. Làm thế nào để lấy dữ liệu từ một lớp Apex mà không cần gọi trực tiếp một phương thức từ lớp Apex?
20. Nếu chúng ta viết một wire method trong LWC, nó sẽ được gọi bao nhiêu lần?
21. Làm thế nào để tạo một bản ghi Contact trong LWC mà không sử dụng Apex?
22. Giải thích giao tiếp từ cha đến con và từ con đến cha trong LWC.
23. Cú pháp để giao tiếp từ con đến cha trong LWC là gì?
24. Làm thế nào để biến một biến hoặc thuộc tính thông điệp trở nên động trong LWC? Ví dụ, nếu một thành phần được sử dụng trên bất kỳ trang nào, nó nên tự động hiển thị giá trị từ trang đó.
25. Chúng ta có thể sử dụng các thành phần LWC không liên quan trên cùng một trang Lightning không?
26. Nếu chúng ta có một nút trong LWC để lấy dữ liệu khi được nhấp vào, liệu có thể sử dụng wire method trong phương thức on-click để lấy dữ liệu không?
27. Sự khác biệt giữa wire method và imperative method trong LWC là gì?
28. Trong LWC, nếu một trường không thể đọc được, nguyên nhân có thể là gì?
29. Làm thế nào để gọi một Flow từ một thành phần LWC?
30. Làm thế nào để lấy ID người dùng hiện tại trong LWC?
31. Design attributes trong LWC là gì?
32. Làm thế nào để lấy record ID trong LWC?
33. Nếu một thành phần LWC cần hiển thị các bản ghi từ một custom object trong một bảng, và số bản ghi vượt quá 50,000, làm thế nào để hiển thị tất cả các bản ghi mà không cần phân trang?
34. Khi sử dụng wire method trong một thành phần LWC, hệ thống phát hiện sự thay đổi dữ liệu ở backend như thế nào?
35. Làm thế nào để hiển thị một nút có điều kiện trong LWC? Ví dụ, trong một Lightning data table, làm sao để đảm bảo nút chỉ hiển thị trong một số điều kiện nhất định?
36. Làm thế nào để xử lý lỗi phía client trong LWC?
37. Mục đích của tệp `JS-meta.xml` trong một thành phần LWC là gì?
38. Sự khác biệt chính giữa LWC và Aura components là gì?
39. Data binding trong LWC hoạt động như thế nào?

## Apex (28 Câu Hỏi)

1. Làm thế nào để tránh lặp lồng nhau trong Apex?
2. Có thể lên lịch cho một lớp Apex nhiều lần trong một ngày không?
3. Một Flow với 80 phần tử "Get Records" được dùng để truy vấn dữ liệu, và Flow này cũng gọi một lớp Apex chứa 80 truy vấn SOQL. Điều này có dẫn đến vượt giới hạn governor limits không?
4. Làm thế nào để khóa bản ghi trong Salesforce bằng Apex?
5. Sự khác biệt giữa "with sharing" và "without sharing" trong Apex là gì?
6. Có bao nhiêu phương thức invocable trong một lớp Apex?
7. Khi tạo một phương thức Apex cho LWC, bạn chỉ định annotation `@AuraEnabled`, và đôi khi là `@AuraEnabled(cacheable=true)`. `cacheable=true` có nghĩa là gì?
8. Một lớp Apex được chỉ định với sharing chứa một truy vấn SOQL trên đối tượng Account, bao gồm một trường tùy chỉnh `abc__c`. Nếu một người dùng không có quyền truy cập trường này cố chạy mã, lỗi nào sẽ xảy ra?
9. Làm thế nào để kiểm soát bảo mật cấp trường trong mã Apex?
10. Làm thế nào để kiểm tra quyền truy cập cấp trường và cấp đối tượng trong một lớp Apex?
11. Ngoài việc lấy dữ liệu từ các lớp Apex, bạn còn có thể làm gì với `@wire` method?
12. Nếu bạn sử dụng annotation `@AuraEnabled` trong một phương thức Apex, bạn có thể thực hiện thao tác DML trong phương thức đó không? Nếu không, lỗi nào sẽ xảy ra?
13. Nếu bạn gọi một phương thức Apex bằng wire decorator, nó có trả về một promise không?
14. Nếu tôi gọi một phương thức bằng wire, tôi có thể thực hiện thao tác DML trong phương thức Apex đó không?
15. Cung cấp hai ví dụ cơ bản về Apex sử dụng lists và maps.
16. Governor limits trong Salesforce là gì? Cung cấp hai ví dụ về tình huống có thể vượt giới hạn governor.
17. Tôi có một phương thức Apex muốn gọi ở chế độ sharing cho người dùng nội bộ đã xác thực, nhưng không dùng sharing cho người dùng chưa xác thực. Làm thế nào để thực hiện điều này?
18. Làm thế nào để loại bỏ các phần tử trùng lặp khỏi một list trong Apex?
19. Sự khác biệt giữa một lớp public và một lớp global trong Apex là gì?
20. Làm thế nào để sửa lỗi "101 SOQL query errors"?
21. Các phương pháp hay nhất để viết mã Apex trong Salesforce là gì?
22. Cho một danh sách các bản ghi account, viết một phương thức Apex để nhóm các account theo trường industry và trả về số lượng account cho mỗi ngành.
23. Làm thế nào để gọi một lớp Apex từ Salesforce Flows?
24. Apex transaction control là gì?
25. Governor limits của SOQL là gì, và các phương pháp hay nhất để tối ưu hóa chúng là gì?
26. Viết một list số nguyên trong Apex và lấy số lớn thứ ba.
27. Theo mặc định, một lớp Apex chạy ở chế độ nào: system mode hay user mode?
28. Làm thế nào để tránh lỗi mixed DML exceptions?
29. Lỗi "APEX CPU Limit Exceeded" xảy ra khi nào? Các phương pháp hay nhất để tránh lỗi này là gì?
30. Làm thế nào để cải thiện hiệu suất truy vấn SOQL để giảm thời gian thực thi?

## Apex Triggers (20 Câu Hỏi)

1. Có thể tạm thời vô hiệu hóa một trigger không? Nếu có, làm thế nào?
2. Nhiều trigger có thể được thực thi trên cùng một đối tượng không? Nếu có, thứ tự thực thi được xác định như thế nào?
3. Có những loại trigger nào?
4. Khi nào nên sử dụng before trigger so với after trigger?
5. Làm thế nào để kiểm tra một Apex Trigger trong Salesforce?
6. Làm thế nào để tránh đệ quy trong trigger?
7. Trigger Handler Pattern là gì?
8. Một trigger có thể thực hiện thao tác DML không?
9. Context variables trong trigger là gì?
10. Làm thế nào để viết một trigger được tối ưu hóa cho xử lý số lượng lớn (bulkified)?
11. Thứ tự thực thi khi một bản ghi được lưu là gì?
12. Làm thế nào để gọi một future method từ một trigger, và khi nào nên sử dụng nó?
13. Những hạn chế của Apex Triggers là gì?
14. Phương thức `addError` trong trigger được dùng để làm gì?
15. Điều gì xảy ra nếu một trigger thất bại trong quá trình thực thi?
16. Có thể sử dụng SOQL và DML trong một trigger không? Các phương pháp hay nhất là gì?
17. Làm thế nào để gọi một trigger từ một trigger khác?
18. Sự khác biệt giữa Triggers và Flows là gì, và khi nào nên sử dụng cái nào?
19. Một Apex Trigger có thể thực hiện callout đến hệ thống bên ngoài không? Nếu có, làm thế nào?
20. Làm thế nào để thực thi bảo mật cấp trường trong Apex Triggers?

## Batch Apex (29 Câu Hỏi)

1. Batch Apex trong Salesforce là gì?
2. Ba phương thức chính trong một lớp Batch Apex là gì?
3. Điều gì xảy ra nếu một công việc Batch Apex thất bại giữa chừng?
4. Tại sao nên sử dụng Batch Apex thay vì Data Loader?
5. Có thể gọi một công việc Batch Apex từ một công việc Batch Apex khác không?
6. Kích thước mặc định và tối đa của batch là bao nhiêu?
7. Có bao nhiêu batch có thể chạy đồng thời?
8. `Database.BatchableContext` là gì và nó được sử dụng như thế nào?
9. Có thể sử dụng Custom Metadata hoặc Custom Settings trong một công việc Batch không?
10. Số lượng bản ghi tối đa mà một công việc Batch Apex có thể xử lý là bao nhiêu?
11. Điều gì xảy ra nếu một công việc Batch Apex vượt quá giới hạn heap size?
12. Có bao nhiêu lần thực thi đồng thời của `start()` được phép?
13. Có bao nhiêu công việc có thể ở trạng thái Holding trong Apex Flex Queue?
14. Có thể chạy Batch Apex bên trong một trigger không?
15. Làm thế nào để xóa hoặc dừng một công việc Batch Apex đang chạy?
16. Sự khác biệt giữa `Database.executeBatch` và `System.scheduleBatch` là gì?
17. Interface nào triển khai Batch Apex trong Salesforce?
18. Làm thế nào để giới hạn số lượng công việc batch đồng thời trong Salesforce?
19. Một công việc Batch Apex có thể bị tạm dừng hoặc tiếp tục không?
20. Thứ tự thực thi của các batch có được đảm bảo không? Tại sao hoặc tại sao không?
21. Làm thế nào để xử lý vấn đề khóa bản ghi trong Batch Apex?
22. Mục đích của phương thức `finish` trong Batch Apex là gì?
23. Làm thế nào để lên lịch cho một công việc Batch Apex chạy trong tương lai?
24. Lợi thế của việc sử dụng `Database.QueryLocator` trong Batch Apex là gì?
25. Điều gì xảy ra nếu xảy ra lỗi trong một batch? Toàn bộ công việc có bị rollback không?
26. Làm thế nào để đảm bảo chỉ những bản ghi có vấn đề bị rollback trong khi các bản ghi khác được xử lý thành công?
27. Sự khác biệt chính giữa Batch Apex và Queueable Apex là gì?
28. Điều gì xảy ra nếu một công việc batch bị hủy bỏ trong khi đang chạy?
29. Làm thế nào để đảm bảo một công việc batch không xử lý các bản ghi trùng lặp?

## Câu Hỏi & Kịch Bản Liên Quan Đến SOQL (39 Câu Hỏi)

1. Lấy các Account có ít nhất hai Contact với cùng miền email.
2. Lấy các Opportunity mà tổng Amount của các Opportunity đã thắng liên quan vượt quá Amount của Opportunity hiện tại.
3. Liệt kê tất cả các Account không có Case nào, nhưng các Contact liên quan của chúng thì có.
4. Tìm các User đã tạo hơn năm bản ghi trên các đối tượng khác nhau trong 24 giờ qua.
5. Xác định các Opportunity mà Account liên quan không có Case đang hoạt động nhưng có ít nhất một Opportunity đã đóng.
6. Lấy tất cả các Case mà cùng một Contact được liệt kê nhiều lần trong hệ thống phân cấp Case (ví dụ: Case cha và con).
7. Liệt kê tất cả các Account có Opportunity đóng trong 30 ngày tới, nhưng không có Task nào đến hạn trong cùng khoảng thời gian đó.
8. Tìm các Contact liên kết với nhiều Account, nhưng không Account nào của họ có Opportunity đang mở.
9. Lấy tất cả các Opportunity mà AnnualRevenue của Account liên quan nhỏ hơn Amount của Opportunity.
10. Xác định các Account mà tất cả Opportunity liên quan đã đóng và tổng số Contact lớn hơn 10.
11. Lấy Account có số lượng Opportunity tối đa.
12. Lấy 10 bản ghi Account mới nhất.
13. Lấy các Contact và Opportunity liên quan đến Account trong một truy vấn duy nhất.
14. Lấy chỉ các Contact đang hoạt động liên quan đến Account.
15. Viết một truy vấn SOQL để lấy ID của tất cả các Account có hơn 5 Contact.
16. Lấy tất cả các Account không có Contact liên quan.
17. Lấy một Account có ít nhất một Contact.
18. Lấy tất cả các User có profile "System Administrator."
19. Lấy chỉ các Account có ít nhất một bản ghi Contact mà checkbox `isActive` được đặt thành true.
20. Lấy tất cả các Account được tạo trong 30 ngày qua.
21. Selective indexing cải thiện hiệu suất SOQL như thế nào?
22. Skinny tables là gì, và khi nào nên sử dụng chúng?
23. Governor limits ảnh hưởng đến các truy vấn SOQL như thế nào?
24. Sự khác biệt giữa `COUNT()` và `COUNT(Id)` trong SOQL là gì?
25. `FOR VIEW` và `FOR REFERENCE` ảnh hưởng đến kết quả truy vấn như thế nào?
26. Làm thế nào để viết một polymorphic query trong SOQL?
27. Semi-join và anti-join queries là gì? Cung cấp ví dụ.
28. Làm thế nào để lấy các bản ghi con và chi tiết cha của chúng trong một truy vấn duy nhất?
29. `TYPEOF` trong SOQL là gì, và nó hoạt động như thế nào?
30. Làm thế nào để truy vấn tất cả các bản ghi, bao gồm cả những bản đã xóa và lưu trữ?
31. Sự khác biệt giữa Inner Query và Left Outer Join là gì?
32. Làm thế nào để lấy top N bản ghi cho mỗi nhóm?
33. Có thể thực hiện các phép toán (SUM, AVG, v.v.) trong SOQL không? Làm thế nào?
34. Làm thế nào để xây dựng một truy vấn SOQL động trong Apex?
35. Grouped aggregations là gì, và chúng được sử dụng như thế nào?
36. Làm thế nào để ngăn chặn SOQL injection?
37. Sự khác biệt giữa `Database.query()` và inline SOQL là gì?
38. Làm thế nào để xử lý giá trị NULL trong điều kiện WHERE?
39. Các truy vấn quan hệ ảnh hưởng đến heap size và CPU time như thế nào?
40. Làm thế nào để sử dụng `LIMIT` và `OFFSET` cho phân trang hiệu quả?

## Câu Hỏi Chung Về Phát Triển Salesforce (33 Câu Hỏi)

1. Làm thế nào để bỏ qua một validation rule trong Salesforce?
2. Trong bối cảnh nào thì manual sharing được kích hoạt trong Salesforce?
3. Một người dùng có thể xóa các bản ghi do người khác trong cùng vai trò tạo ra không?
4. Sự khác biệt giữa User Mode và System Mode trong Salesforce là gì?
5. Có bao nhiêu cách để chia sẻ bản ghi trong Salesforce?
6. Có thể gọi một lớp Batch Apex từ một future method không? Nếu không, tại sao?
7. Có thể thực hiện callout từ một trigger không? Tại sao hoặc tại sao không?
8. Có thể triển khai cả Scheduled Apex và Batch Apex trong một lớp Apex duy nhất không? Phương pháp tốt nhất là gì?
9. Có thể thực hiện callout từ Batch Apex không?
10. Mối quan hệ giữa Account và Contact trong Salesforce là gì?
11. Có thể tạo một roll-up summary field cho Contact trên Account không? Có thể thực hiện qua chức năng tiêu chuẩn không? Nếu không, làm thế nào để triển khai?
12. Khi một Opportunity được đánh dấu là "Closed Won," làm thế nào để khiến Opportunity và Opportunity Products của nó chỉ đọc được?
13. Nếu một Batch Apex xử lý 2000 bản ghi với scope là 200, sẽ tạo ra bao nhiêu debug logs?
14. Bạn đã từng làm việc với công cụ triển khai nào chưa? Nếu có, đó là những công cụ nào?
15. Làm thế nào để tối ưu hóa một báo cáo Salesforce phức tạp đang tải quá lâu?
16. Sự khác biệt chính giữa before trigger và after trigger trong Salesforce là gì, và khi nào nên sử dụng cái nào?
17. Salesforce xử lý khối lượng dữ liệu lớn (LDV) như thế nào, và bạn sẽ sử dụng chiến lược nào để vượt qua các thách thức phổ biến?
18. Bạn có thể giải thích khái niệm external objects trong Salesforce và chúng khác với custom objects thông thường như thế nào không?
19. Làm thế nào để xử lý governor limits trong Salesforce khi làm việc với tập dữ liệu lớn hoặc thao tác hàng loạt?
20. Bạn có thể mô tả độ phức tạp của việc sử dụng nhiều quy trình bất đồng bộ (như Batch Apex, Future Methods, và Queueable Apex) trong một giải pháp duy nhất không?
21. Các phương pháp hay nhất để quản lý bảo mật Salesforce và đảm bảo bảo vệ dữ liệu, đặc biệt khi xử lý thông tin nhạy cảm, là gì?
22. Làm thế nào để triển khai dynamic Apex để xử lý các tình huống mà đối tượng và trường không được biết đến cho đến khi chạy?
23. Bạn có thể giải thích cách sử dụng platform events trong Salesforce để kích hoạt kiến trúc hướng sự kiện không?
24. Custom metadata types là gì và chúng khác với custom settings trong Salesforce như thế nào? Khi nào bạn sẽ ưu tiên sử dụng cái này hơn cái kia?
25. Làm thế nào để triển khai một quy tắc mà số điện thoại của Account không được trùng với số điện thoại của Contact?
26. Governor Limits là gì, và tại sao chúng tồn tại?
27. Sự khác biệt giữa SOQL và SOSL là gì, và khi nào nên sử dụng cái nào?
28. Bulkification trong Apex là gì, và tại sao nó quan trọng?
29. Batch Apex hoạt động như thế nào, và khi nào nên sử dụng nó?
30. Làm thế nào để gọi Apex trong LWC?

## Các Loại Governor Limits Trong Salesforce

### Per Transaction Apex Limits
- Các giới hạn này được tính cho mỗi giao dịch Apex. Đối với Batch Apex, các giới hạn này được đặt lại cho mỗi lần thực thi một lô bản ghi trong phương thức `execute`.
  - Số lượng truy vấn SOQL: **100**
  - Số bản ghi lấy được từ một truy vấn SOQL duy nhất: **50,000**
  - Số bản ghi lấy được bằng `Database.getQueryLocator`: **10,000**
  - Số lượng truy vấn SOSL: **20**
  - Số bản ghi lấy được từ một truy vấn SOSL duy nhất: **2,000**
  - Số lượng câu lệnh DML: **150**
  - Độ sâu ngăn xếp tối đa khi kích hoạt Trigger đệ quy: **16**
  - Số lượng HTTP hoặc Web Service Callouts: **150**
  - Số lần gọi Future tối đa: **50**
  - Số lần gọi Queueable tối đa: **50**
  - Số phương thức gửi Email tối đa: **10**
  - Tổng kích thước Heap: **6 MB**
  - Số lần gọi `EventBus.Publish` tối đa: **150**
  - Thời gian CPU tối đa trên máy chủ Salesforce: **10,000 ms**

### Per Transaction Certified Managed Package Limits
- Nếu một managed package do Salesforce ISV phát triển đã vượt qua kiểm tra bảo mật, chúng thường được cấp giới hạn giao dịch cao hơn.

### Lightning Platform Apex Limits
- Các giới hạn này không đặc thù cho một giao dịch Apex và được thực thi bởi nền tảng Lightning.

### Static Apex Limits
- Các giới hạn Apex được áp dụng cho tất cả các giao dịch.

### Size-Specific Apex Limits
- Các giới hạn Apex liên quan đến kích thước của mã.

### Miscellaneous Apex Limits
- Các giới hạn khác không được phân loại ở trên.

---
