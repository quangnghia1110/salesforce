## Đáp Án Lightning Web Components (LWC) (39 Câu Hỏi)

1. **Sự khác biệt giữa `for:each` và `iterator` trong Lightning Web Components (LWC) là gì?**  
   - `for:each` là một directive trong template của LWC dùng để lặp qua một mảng và hiển thị các phần tử, nhưng nó chỉ cho phép truy cập giá trị của từng phần tử mà không cung cấp thông tin bổ sung như chỉ số (index) hoặc trạng thái vòng lặp (ví dụ: phần tử đầu tiên hay cuối cùng). Điều này làm cho nó đơn giản nhưng hạn chế trong các trường hợp cần kiểm soát hiển thị phức tạp hơn.  
   - `iterator` cũng được dùng để lặp qua mảng trong template, nhưng mạnh mẽ hơn vì nó cung cấp các thuộc tính bổ sung như `index` (vị trí phần tử), `first` (kiểm tra phần tử đầu tiên), và `last` (kiểm tra phần tử cuối cùng). Điều này cho phép lập trình viên tùy chỉnh giao diện dựa trên vị trí hoặc trạng thái của phần tử, phù hợp với các yêu cầu hiển thị phức tạp.

2. **Cung cấp một ví dụ mã để thể hiện giai đoạn bubble và capture trong JavaScript.**  
   - Trong JavaScript, xử lý sự kiện có hai giai đoạn: **capture** (từ phần tử cha xuống con) và **bubble** (từ phần tử con lên cha). Khi một sự kiện như nhấp chuột xảy ra, giai đoạn capture chạy trước, bắt đầu từ phần tử gốc (ví dụ: `document`) và đi xuống phần tử mục tiêu. Sau đó, giai đoạn bubble chạy theo hướng ngược lại, từ phần tử mục tiêu lên phần tử gốc. Sự khác biệt này được kiểm soát bởi tham số thứ ba của `addEventListener`: `true` cho capture, `false` (mặc định) cho bubble.

3. **Làm thế nào để triển khai Lightning Message Service (LMS) kèm ví dụ?**  
   - Lightning Message Service (LMS) là một cơ chế trong Salesforce để giao tiếp giữa các thành phần LWC, Aura, và Visualforce trên cùng một trang Lightning, ngay cả khi chúng không có mối quan hệ trực tiếp. Để triển khai, bạn cần tạo một **Message Channel** (đối tượng tùy chỉnh trong Salesforce) để định nghĩa kênh giao tiếp. Sau đó, trong LWC, sử dụng `publish` để gửi tin nhắn từ một thành phần và `subscribe` để nhận tin nhắn ở thành phần khác. LMS hoạt động dựa trên mô hình publish-subscribe, cho phép giao tiếp không đồng bộ và linh hoạt giữa các thành phần độc lập.

4. **Lightning Data Service (LDS) là gì và nó được sử dụng như thế nào?**  
   - Lightning Data Service (LDS) là một dịch vụ tiêu chuẩn trong Salesforce cung cấp cách truy cập, chỉnh sửa, và tạo bản ghi mà không cần viết mã Apex, giúp giảm độ phức tạp và tăng hiệu suất thông qua cơ chế cache tích hợp. Nó hoạt động giống như một lớp dữ liệu trung gian giữa giao diện người dùng và cơ sở dữ liệu Salesforce. LDS được sử dụng phổ biến trong LWC thông qua `@wire` với các hàm như `getRecord` để lấy dữ liệu bản ghi hoặc thông qua các thành phần giao diện như `lightning-record-form` để thực hiện thao tác CRUD (tạo, đọc, cập nhật, xóa).

5. **Decorators trong LWC là gì và chúng được sử dụng ra sao?**  
   - Decorators trong LWC là các annotation đặc biệt (bắt đầu bằng `@`) được sử dụng để định nghĩa hành vi của thuộc tính hoặc phương thức trong JavaScript. Có ba decorators chính:  
     - `@api`: Đánh dấu thuộc tính hoặc phương thức là công khai (public), cho phép thành phần cha truy cập hoặc truyền dữ liệu vào.  
     - `@track`: Đánh dấu thuộc tính riêng tư (private) để LWC theo dõi sự thay đổi của nó và cập nhật giao diện (tuy nhiên, từ Spring '20, `@track` ít cần thiết vì LWC tự động theo dõi hầu hết các thay đổi).  
     - `@wire`: Liên kết thuộc tính với dữ liệu từ Apex hoặc service Salesforce, tự động làm mới khi dữ liệu thay đổi.

6. **Lifecycle hooks trong Lightning Web Components là gì?**  
   - Lifecycle hooks là các phương thức đặc biệt trong LWC được gọi tự động tại các giai đoạn khác nhau trong vòng đời của một thành phần:  
     - `constructor()`: Chạy khi thành phần được khởi tạo, dùng để thiết lập trạng thái ban đầu.  
     - `connectedCallback()`: Chạy khi thành phần được thêm vào DOM, thích hợp để khởi tạo dữ liệu.  
     - `disconnectedCallback()`: Chạy khi thành phần bị xóa khỏi DOM, dùng để dọn dẹp tài nguyên.  
     - `renderedCallback()`: Chạy sau khi thành phần được render, thích hợp để thao tác với DOM sau khi hiển thị.

7. **Cái nào được thực thi trước: decorators hay lifecycle hooks?**  
   - Decorators được xử lý tại thời điểm biên dịch (compile-time), nghĩa là chúng định nghĩa cấu trúc và hành vi của thành phần trước khi mã chạy. Trong khi đó, lifecycle hooks như `constructor()` chạy tại thời điểm thực thi (runtime) khi thành phần được khởi tạo. Vì vậy, về mặt kỹ thuật, decorators được áp dụng trước, nhưng trong luồng thực thi, `constructor()` là điểm bắt đầu đầu tiên của vòng đời thành phần.

8. **Ưu điểm và hạn chế của Lightning Data Service (LDS) là gì?**  
   - **Ưu điểm**: Không cần viết Apex, giảm thời gian phát triển; sử dụng cache để tăng hiệu suất; tích hợp dễ dàng với các thành phần giao diện như `lightning-record-form`.  
   - **Hạn chế**: Chỉ hỗ trợ thao tác trên một bản ghi mỗi lần, không phù hợp với truy vấn phức tạp hoặc xử lý dữ liệu lớn; phụ thuộc vào quyền truy cập của người dùng (nếu không có quyền, dữ liệu không hiển thị).

9. **Làm thế nào để giao tiếp từ một thành phần con đến thành phần cha trong LWC? Và ngược lại?**  
   - **Con đến cha**: Thành phần con tạo và gửi một `CustomEvent` với dữ liệu đi kèm (thông qua thuộc tính `detail`), và thành phần cha lắng nghe sự kiện này qua thuộc tính `oneventname` trong HTML. Đây là cách giao tiếp không đồng bộ phổ biến trong LWC.  
   - **Cha đến con**: Thành phần cha truyền dữ liệu vào thành phần con thông qua các thuộc tính công khai được đánh dấu bằng `@api`. Điều này cho phép cha kiểm soát trực tiếp trạng thái của con.

10. **Hai thành phần LWC độc lập có thể giao tiếp với nhau như thế nào?**  
    - Hai thành phần LWC độc lập (không có quan hệ cha-con) giao tiếp thông qua **Lightning Message Service (LMS)**. LMS cho phép một thành phần gửi tin nhắn qua một Message Channel và thành phần khác nhận tin nhắn bằng cách đăng ký kênh đó. Đây là giải pháp chính thức trong Salesforce để xử lý giao tiếp giữa các thành phần không liên quan trực tiếp.

11. **Vai trò của `LightningElement` trong LWC là gì, và nó có những phương thức nào để quản lý vòng đời thành phần?**  
    - `LightningElement` là lớp cơ sở mà mọi thành phần LWC phải kế thừa, cung cấp các API và chức năng chuẩn của Salesforce Lightning để xây dựng thành phần. Nó đóng vai trò như một khung nền tảng cho LWC. Các phương thức vòng đời bao gồm:  
      - `constructor()`: Khởi tạo thành phần.  
      - `connectedCallback()`: Khi thêm vào DOM.  
      - `disconnectedCallback()`: Khi xóa khỏi DOM.  
      - `renderedCallback()`: Sau khi render hoàn tất.

12. **Những yếu tố nào cần xem xét về hiệu suất khi xử lý tập dữ liệu lớn trong LWC? Làm thế nào để tối ưu hóa xử lý dữ liệu cho hiệu suất tốt hơn?**  
    - **Yếu tố cần xem xét**: Giới hạn heap size (6MB trong Apex), thời gian render chậm do xử lý DOM, tải dữ liệu không cần thiết gây tắc nghẽn giao diện.  
    - **Tối ưu hóa**: Sử dụng lazy loading để tải dữ liệu theo nhu cầu, triển khai phân trang để chia nhỏ dữ liệu, dùng `@wire` với Apex để lấy dữ liệu theo lô thay vì toàn bộ, tránh lặp qua DOM phức tạp hoặc tính toán nặng trong `renderedCallback()`.

13. **Giải thích cách sử dụng `@api`, `@track`, và `@wire` trong LWC. Sự khác biệt trong trường hợp sử dụng của chúng là gì?**  
    - `@api`: Đánh dấu thuộc tính hoặc phương thức là công khai, dùng để nhận dữ liệu hoặc lệnh từ thành phần cha, phù hợp cho giao tiếp cha-con.  
    - `@track`: Đánh dấu thuộc tính riêng tư để LWC theo dõi sự thay đổi và cập nhật giao diện, nhưng từ Spring '20, LWC tự động theo dõi thay đổi nên `@track` ít cần thiết trừ khi làm việc với đối tượng phức tạp.  
    - `@wire`: Liên kết thuộc tính với dữ liệu từ Apex hoặc dịch vụ Salesforce, tự động làm mới khi dữ liệu thay đổi, dùng cho truy cập dữ liệu không đồng bộ và chỉ đọc.

14. **Lifecycle hooks trong LWC là gì, và thứ tự của lifecycle hooks từ thành phần cha đến thành phần con ra sao?**  
    - Lifecycle hooks là các phương thức quản lý vòng đời: `constructor()` (khởi tạo), `connectedCallback()` (thêm vào DOM), `disconnectedCallback()` (xóa khỏi DOM), `renderedCallback()` (sau render).  
    - Thứ tự thực thi: Cha chạy `constructor()` → `connectedCallback()` → render → `renderedCallback()`, sau đó con chạy tương tự. Nếu có nhiều cấp độ lồng nhau, thứ tự đi từ ngoài vào trong cho `connectedCallback()` và ngược lại cho `disconnectedCallback()`.

15. **Tại sao chúng ta sử dụng phương thức constructor trong LWC?**  
    - Phương thức `constructor()` được sử dụng để khởi tạo trạng thái ban đầu của thành phần, chẳng hạn như thiết lập giá trị mặc định cho thuộc tính hoặc chuẩn bị các biến trước khi thành phần được thêm vào DOM. Nó là điểm bắt đầu của vòng đời và chạy trước tất cả các hook khác.

16. **Callback function là gì?**  
    - Callback function là một hàm được truyền làm tham số cho một hàm khác và được gọi khi một sự kiện hoặc tác vụ hoàn tất, chẳng hạn như sau khi dữ liệu được tải từ máy chủ hoặc khi người dùng tương tác. Nó là cơ chế quan trọng trong lập trình không đồng bộ để xử lý kết quả hoặc lỗi.

17. **Có bao nhiêu loại decorators trong LWC?**  
    - Có ba loại decorators chính trong LWC: `@api` (cho giao tiếp với cha), `@track` (theo dõi thay đổi nội bộ), và `@wire` (liên kết dữ liệu từ Salesforce). Đây là các công cụ cốt lõi để quản lý dữ liệu và hành vi trong thành phần.

18. **Có bao nhiêu cách để gọi Apex trong Lightning Web Components (LWC)?**  
    - Có hai cách chính:  
      - `@wire`: Gọi Apex tự động và liên kết dữ liệu, yêu cầu phương thức Apex có `@AuraEnabled(cacheable=true)`.  
      - Imperative: Gọi Apex thủ công thông qua `import` và xử lý kết quả bằng `.then()`, không cần cacheable và hỗ trợ DML.

19. **Làm thế nào để lấy dữ liệu từ một lớp Apex mà không cần gọi trực tiếp một phương thức từ lớp Apex?**  
    - Sử dụng decorator `@wire` trong LWC để liên kết trực tiếp với một phương thức Apex được đánh dấu `@AuraEnabled(cacheable=true)`. `@wire` sẽ tự động gọi phương thức và cung cấp dữ liệu mà không cần lập trình viên gọi thủ công.

20. **Nếu chúng ta viết một wire method trong LWC, nó sẽ được gọi bao nhiêu lần?**  
    - `@wire` được gọi một lần khi thành phần khởi tạo (trong `connectedCallback()`), sau đó tự động gọi lại mỗi khi dữ liệu nguồn (từ Apex hoặc LDS) thay đổi, nhờ cơ chế reactive của LWC.

21. **Làm thế nào để tạo một bản ghi Contact trong LWC mà không sử dụng Apex?**  
    - Sử dụng thành phần giao diện như `lightning-record-form` hoặc `lightning-record-edit-form` với các trường cần thiết và nút submit. Những thành phần này tận dụng LDS để thực hiện thao tác tạo bản ghi mà không cần mã Apex.

22. **Giải thích giao tiếp từ cha đến con và từ con đến cha trong LWC.**  
    - **Cha đến con**: Thành phần cha truyền dữ liệu vào thuộc tính `@api` của thành phần con, cho phép cha kiểm soát trực tiếp trạng thái hoặc hành vi của con.  
    - **Con đến cha**: Thành phần con gửi thông điệp hoặc dữ liệu lên cha thông qua `CustomEvent`, cha lắng nghe sự kiện này để xử lý tiếp theo.

23. **Cú pháp để giao tiếp từ con đến cha trong LWC là gì?**  
    - Trong thành phần con, sử dụng `this.dispatchEvent(new CustomEvent('eventname', { detail: data }))` để gửi sự kiện. Trong HTML của cha, khai báo sự kiện bằng `oneventname={handleEvent}` để lắng nghe.

24. **Làm thế nào để biến một biến hoặc thuộc tính thông điệp trở nên động trong LWC?**  
    - Sử dụng `@api` để nhận giá trị từ thành phần cha hoặc trang Lightning, hoặc dùng `@wire` để liên kết với dữ liệu từ Salesforce, cho phép thuộc tính tự động cập nhật khi nguồn dữ liệu thay đổi.

25. **Chúng ta có thể sử dụng các thành phần LWC không liên quan trên cùng một trang Lightning không?**  
    - Có, các thành phần LWC không liên quan có thể được đặt trên cùng một trang Lightning thông qua Lightning App Builder hoặc một thành phần container khác, miễn là chúng được cấu hình để hiển thị trong cùng ngữ cảnh.

26. **Nếu chúng ta có một nút trong LWC để lấy dữ liệu khi được nhấp vào, liệu có thể sử dụng wire method trong phương thức on-click để lấy dữ liệu không?**  
    - Không, `@wire` được thiết kế để chạy tự động khi thành phần khởi tạo hoặc dữ liệu thay đổi, không phù hợp để gọi thủ công trong sự kiện nhấp chuột. Thay vào đó, sử dụng imperative Apex call để lấy dữ liệu theo yêu cầu.

27. **Sự khác biệt giữa wire method và imperative method trong LWC là gì?**  
    - `@wire`: Tự động gọi Apex và liên kết dữ liệu, yêu cầu phương thức Apex có `cacheable=true`, phù hợp với truy cập dữ liệu chỉ đọc.  
    - Imperative: Gọi Apex thủ công khi cần (ví dụ: khi nhấp nút), không yêu cầu cacheable, hỗ trợ DML và linh hoạt hơn.

28. **Trong LWC, nếu một trường không thể đọc được, nguyên nhân có thể là gì?**  
    - Nguyên nhân phổ biến bao gồm: Người dùng không có quyền truy cập trường (Field-Level Security - FLS), trường không được bao gồm trong truy vấn `@wire`, hoặc dữ liệu từ Apex không trả về trường đó.

29. **Làm thế nào để gọi một Flow từ một thành phần LWC?**  
    - Sử dụng thành phần `<lightning-flow>` trong template của LWC, truyền tham số `flow-api-name` để chỉ định Flow cần gọi, và có thể truyền thêm biến đầu vào nếu cần.

30. **Làm thế nào để lấy ID người dùng hiện tại trong LWC?**  
    - Import module `@salesforce/user/Id` từ `lightning/platform`, giá trị này tự động cung cấp ID của người dùng hiện tại mà không cần truy vấn.

31. **Design attributes trong LWC là gì?**  
    - Design attributes là các thuộc tính `@api` được khai báo trong tệp `meta.xml` của thành phần, cho phép người dùng cấu hình giá trị của chúng trực tiếp trong Lightning App Builder, giúp tăng tính tùy chỉnh mà không cần sửa mã.

32. **Làm thế nào để lấy record ID trong LWC?**  
    - Sử dụng thuộc tính `@api recordId` trong thành phần, giá trị này được tự động truyền từ trang Lightning khi thành phần được đặt trong ngữ cảnh bản ghi (record context).

33. **Nếu một thành phần LWC cần hiển thị các bản ghi từ một custom object trong một bảng, và số bản ghi vượt quá 50,000, làm thế nào để hiển thị tất cả các bản ghi mà không cần phân trang?**  
    - Không thể hiển thị trực tiếp hơn 50,000 bản ghi trong một lần do giới hạn SOQL (50,000 bản ghi mỗi truy vấn). Để xử lý dữ liệu lớn, cần sử dụng Batch Apex để chia nhỏ dữ liệu thành các lô, sau đó truyền dần qua LWC bằng cách gọi imperative hoặc kết hợp với cơ chế tải dữ liệu theo nhu cầu.

34. **Khi sử dụng wire method trong một thành phần LWC, hệ thống phát hiện sự thay đổi dữ liệu ở backend như thế nào?**  
    - `@wire` dựa trên cơ chế reactive của LDS hoặc Apex. Khi dữ liệu trong Salesforce thay đổi (ví dụ: bản ghi được cập nhật), LDS hoặc cache Apex thông báo thay đổi, và `@wire` tự động làm mới dữ liệu trong thành phần mà không cần can thiệp thủ công.

35. **Làm thế nào để hiển thị một nút có điều kiện trong LWC?**  
    - Sử dụng directive `if:true` hoặc `if:false` trong template của LWC, kết hợp với một thuộc tính boolean trong JavaScript để kiểm soát điều kiện hiển thị của nút, chẳng hạn dựa trên giá trị dữ liệu hoặc quyền người dùng.

36. **Làm thế nào để xử lý lỗi phía client trong LWC?**  
    - Xử lý lỗi bằng cách sử dụng `try-catch` trong các lời gọi imperative để bắt lỗi từ Apex hoặc dịch vụ, sau đó hiển thị thông báo cho người dùng thông qua thành phần giao diện như `lightning-toast` hoặc thông báo tùy chỉnh.

37. **Mục đích của tệp `JS-meta.xml` trong một thành phần LWC là gì?**  
    - Tệp `JS-meta.xml` định nghĩa cấu hình của thành phần, bao gồm các thuộc tính như `targets` (nơi thành phần có thể được sử dụng, ví dụ: trang bản ghi) và `design attributes` (các thuộc tính có thể cấu hình trong App Builder). Nó giúp tích hợp thành phần vào nền tảng Lightning một cách linh hoạt.

38. **Sự khác biệt chính giữa LWC và Aura components là gì?**  
    - **LWC**: Dựa trên web standards (HTML, CSS, JS hiện đại), hiệu suất cao, ít phụ thuộc vào framework, dễ bảo trì.  
    - **Aura**: Dựa trên Aura Framework của Salesforce, nặng hơn, phụ thuộc nhiều vào framework, hiệu suất thấp hơn và ít linh hoạt so với LWC.

39. **Data binding trong LWC hoạt động như thế nào?**  
    - Data binding trong LWC có thể là một chiều (từ JavaScript sang template) hoặc hai chiều (giữa thuộc tính và giao diện). Khi giá trị thuộc tính thay đổi trong JavaScript, LWC tự động cập nhật giao diện nhờ cơ chế reactive, và ngược lại nếu dùng thuộc tính hai chiều với các thành phần như `lightning-input`.

## Đáp Án Apex (28 Câu Hỏi)

1. **Làm thế nào để tránh lặp lồng nhau trong Apex?**  
   - Để tránh lặp lồng nhau (nested loops), sử dụng cấu trúc `Map` để nhóm dữ liệu trước khi xử lý. Điều này giảm số lần lặp và ngăn ngừa vượt giới hạn CPU hoặc SOQL khi xử lý dữ liệu lớn, thay vì lặp qua danh sách nhiều lần để tìm kiếm hoặc so sánh.

2. **Có thể lên lịch cho một lớp Apex nhiều lần trong một ngày không?**  
   - Có, bạn có thể lên lịch một lớp Apex nhiều lần trong ngày bằng cách sử dụng `System.schedule()` với các biểu thức cron khác nhau. Mỗi lần lên lịch tạo một công việc riêng biệt trong Apex Scheduler, miễn là không vượt giới hạn số công việc tối đa (100 công việc trong hàng đợi).

3. **Một Flow với 80 phần tử "Get Records" được dùng để truy vấn dữ liệu, và Flow này cũng gọi một lớp Apex chứa 80 SOQL queries. Điều này có dẫn đến vượt giới hạn governor limits không?**  
   - Có, vì giới hạn governor limits cho SOQL trong một giao dịch là 100 truy vấn. Flow thực hiện 80 truy vấn SOQL qua các phần tử "Get Records", cộng thêm 80 truy vấn từ Apex, tổng cộng 160 truy vấn, vượt quá giới hạn 100, dẫn đến lỗi "Too many SOQL queries".

4. **Làm thế nào để khóa bản ghi trong Salesforce bằng Apex?**  
   - Sử dụng từ khóa `FOR UPDATE` trong câu lệnh SOQL để khóa bản ghi, ngăn người dùng hoặc quy trình khác chỉnh sửa trong khi giao dịch đang xử lý. Điều này đảm bảo tính toàn vẹn dữ liệu trong các tình huống cạnh tranh, nhưng chỉ hoạt động trong cùng một giao dịch Apex.

5. **Sự khác biệt giữa "with sharing" và "without sharing" trong Apex là gì?**  
   - `with sharing`: Lớp Apex tôn trọng quyền chia sẻ của người dùng hiện tại, chỉ cho phép truy cập các bản ghi mà người dùng có quyền xem theo cấu hình chia sẻ (sharing rules, roles, v.v.).  
   - `without sharing`: Lớp Apex bỏ qua quyền chia sẻ, chạy với quyền hệ thống, cho phép truy cập tất cả bản ghi bất kể quyền người dùng, thường dùng khi cần thực hiện thao tác quản trị.

6. **Có bao nhiêu phương thức invocable trong một lớp Apex?**  
   - Chỉ một phương thức `@InvocableMethod` được phép trong mỗi lớp Apex. Đây là giới hạn thiết kế của Salesforce để đảm bảo tính đơn giản và khả năng tái sử dụng khi gọi từ Flow hoặc Process Builder.

7. **Khi tạo một phương thức Apex cho LWC, bạn chỉ định annotation `@AuraEnabled`, và đôi khi là `@AuraEnabled(cacheable=true)`. `cacheable=true` có nghĩa là gì?**  
   - `@AuraEnabled` cho phép phương thức Apex được gọi từ LWC hoặc Aura. Thêm `cacheable=true` yêu cầu phương thức chỉ đọc (không thực hiện DML) và bật cơ chế cache phía client để giảm số lần gọi Apex, tăng hiệu suất bằng cách lưu trữ kết quả trong bộ nhớ tạm thời của trình duyệt.

8. **Một lớp Apex được chỉ định với sharing chứa một truy vấn SOQL trên đối tượng Account, bao gồm một trường tùy chỉnh `abc__c`. Nếu một người dùng không có quyền truy cập trường này cố chạy mã, lỗi nào sẽ xảy ra?**  
   - Không có lỗi runtime trực tiếp, nhưng dữ liệu của trường `abc__c` sẽ trả về `null` cho người dùng không có quyền truy cập (Field-Level Security - FLS). Điều này xảy ra vì Apex chạy ở user mode khi dùng `with sharing`, tôn trọng quyền FLS của người dùng hiện tại.

9. **Làm thế nào để kiểm soát bảo mật cấp trường trong mã Apex?**  
   - Sử dụng phương thức `Schema.describeFieldResult().isAccessible()` để kiểm tra xem người dùng hiện tại có quyền đọc trường đó không trước khi truy cập hoặc xử lý dữ liệu. Nếu không có quyền, bạn có thể bỏ qua trường hoặc thông báo lỗi tùy chỉnh.

10. **Làm thế nào để kiểm tra quyền truy cập cấp trường và cấp đối tượng trong một lớp Apex?**  
    - Dùng `Schema.DescribeSObjectResult` để kiểm tra quyền truy cập đối tượng (ví dụ: `isAccessible()`, `isCreateable()`) và `Schema.DescribeFieldResult` để kiểm tra quyền truy cập trường (ví dụ: `isAccessible()`, `isUpdateable()`). Các phương thức này trả về boolean dựa trên quyền của người dùng hiện tại.

11. **Ngoài việc lấy dữ liệu từ các lớp Apex, bạn còn có thể làm gì với `@wire` method?**  
    - Ngoài Apex, `@wire` có thể lấy dữ liệu từ Lightning Data Service (ví dụ: `getRecord`), UI API (ví dụ: `getPicklistValues`), hoặc các module Salesforce khác như `@salesforce/user/Id`, cung cấp cách truy cập dữ liệu linh hoạt mà không cần mã tùy chỉnh.

12. **Nếu bạn sử dụng annotation `@AuraEnabled` trong một phương thức Apex, bạn có thể thực hiện thao tác DML trong phương thức đó không? Nếu không, lỗi nào sẽ xảy ra?**  
    - Nếu phương thức có `cacheable=true` (dùng với `@wire`), không thể thực hiện DML, và nếu cố gắng sẽ gây lỗi "DML Operation not allowed in cacheable method". Nếu không có `cacheable=true` (dùng với imperative call), DML được phép thực hiện bình thường.

13. **Nếu bạn gọi một phương thức Apex bằng wire decorator, nó có trả về một promise không?**  
    - Không, `@wire` không trả về promise mà cung cấp dữ liệu trực tiếp hoặc lỗi dưới dạng đối tượng `{ data, error }`. Điều này khác với imperative call, vốn trả về promise để xử lý không đồng bộ.

14. **Nếu tôi gọi một phương thức bằng wire, tôi có thể thực hiện thao tác DML trong phương thức Apex đó không?**  
    - Không, vì `@wire` yêu cầu phương thức Apex có `cacheable=true`, mà điều này cấm thực hiện DML để đảm bảo tính nhất quán của cache. Nếu cần DML, hãy dùng imperative call thay vì `@wire`.

15. **Cung cấp hai ví dụ cơ bản về Apex sử dụng lists và maps.**  
    - `List`: Một tập hợp có thứ tự của các phần tử, dùng để lưu trữ danh sách dữ liệu như tên hoặc bản ghi.  
    - `Map`: Một tập hợp cặp key-value, dùng để nhóm dữ liệu theo khóa duy nhất, chẳng hạn như ánh xạ ID bản ghi với thông tin chi tiết.

16. **Governor limits trong Salesforce là gì? Cung cấp hai ví dụ về tình huống có thể vượt giới hạn governor.**  
    - Governor limits là các giới hạn tài nguyên do Salesforce áp đặt để đảm bảo hiệu suất và tính công bằng trên nền tảng đa người dùng.  
    - Ví dụ:  
      - Vượt 100 SOQL queries khi thực hiện truy vấn trong vòng lặp không tối ưu hóa.  
      - Heap size vượt 6MB khi lưu trữ toàn bộ tập dữ liệu lớn trong bộ nhớ thay vì xử lý từng phần.

17. **Tôi có một phương thức Apex muốn gọi ở chế độ sharing cho người dùng nội bộ đã xác thực, nhưng không dùng sharing cho người dùng chưa xác thực. Làm thế nào để thực hiện điều này?**  
    - Kiểm tra loại người dùng bằng `UserInfo.getUserType()` (ví dụ: "Standard" cho người dùng nội bộ, "Guest" cho người chưa xác thực). Sau đó, dùng logic điều kiện trong mã để gọi lớp hoặc phương thức với `with sharing` cho người nội bộ và `without sharing` cho người chưa xác thực, có thể bằng cách tạo hai lớp riêng biệt và chọn lớp phù hợp.

18. **Làm thế nào để loại bỏ các phần tử trùng lặp khỏi một list trong Apex?**  
    - Chuyển đổi `List` thành `Set` để loại bỏ trùng lặp (vì `Set` chỉ chứa giá trị duy nhất), sau đó chuyển lại thành `List` nếu cần thứ tự. Phương pháp này nhanh và hiệu quả, nhưng không giữ nguyên thứ tự ban đầu trừ khi dùng `List` sau khi sắp xếp.

19. **Sự khác biệt giữa một lớp public và một lớp global trong Apex là gì?**  
    - `public`: Chỉ có thể truy cập trong cùng một namespace của ứng dụng, phù hợp cho mã nội bộ.  
    - `global`: Có thể truy cập từ bất kỳ namespace nào, thường dùng trong managed packages để cung cấp API cho ứng dụng bên ngoài, nhưng cần cẩn thận vì không thể thay đổi sau khi phát hành.

20. **Làm thế nào để sửa lỗi "101 SOQL query errors"?**  
    - Để sửa lỗi "Too many SOQL queries: 101", cần tối ưu hóa mã bằng cách giảm số lượng truy vấn SOQL trong một giao dịch. Các cách bao gồm: sử dụng `Map` để lưu trữ dữ liệu thay vì truy vấn lặp, kết hợp truy vấn cha-con (relationship queries), và di chuyển logic sang Batch Apex nếu xử lý dữ liệu lớn.

21. **Các phương pháp hay nhất để viết mã Apex trong Salesforce là gì?**  
    - Bulkify mã để xử lý nhiều bản ghi cùng lúc, tránh DML hoặc SOQL trong vòng lặp, xử lý lỗi bằng `try-catch`, viết unit test với độ phủ ít nhất 75%, sử dụng các thiết kế tối ưu như Trigger Handler Pattern để dễ bảo trì và mở rộng.

22. **Cho một danh sách các bản ghi account, viết một phương thức Apex để nhóm các account theo trường industry và trả về số lượng account cho mỗi ngành.**  
    - Tạo một `Map<String, Integer>` để nhóm các account theo `Industry`. Duyệt qua danh sách, kiểm tra giá trị `Industry` của từng bản ghi, và tăng số đếm trong `Map` cho khóa tương ứng, xử lý trường hợp null bằng cách gán giá trị mặc định như "Unknown".

23. **Làm thế nào để gọi một lớp Apex từ Salesforce Flows?**  
    - Tạo một phương thức trong lớp Apex với annotation `@InvocableMethod`, định nghĩa các tham số đầu vào và đầu ra nếu cần. Sau đó, trong Flow, sử dụng phần tử **Action** để gọi phương thức này bằng cách chọn tên phương thức từ danh sách các hành động khả dụng.

24. **Apex transaction control là gì?**  
    - Apex transaction control là cách Salesforce quản lý một đơn vị thực thi (transaction) trong Apex, bao gồm tất cả các thao tác như SOQL, DML, callouts, v.v. Một giao dịch bắt đầu khi mã Apex được gọi và kết thúc khi hoàn tất hoặc gặp lỗi, với các giới hạn governor áp dụng cho toàn bộ giao dịch.

25. **Governor limits của SOQL là gì, và các phương pháp hay nhất để tối ưu hóa chúng là gì?**  
    - **Giới hạn**: 100 truy vấn SOQL mỗi giao dịch, 50,000 bản ghi tối đa từ một truy vấn, 10,000 bản ghi từ `Database.getQueryLocator`.  
    - **Tối ưu hóa**: Sử dụng `Map` để giảm truy vấn lặp, dùng truy vấn cha-con thay vì nhiều truy vấn riêng lẻ, áp dụng bộ lọc selective (ví dụ: indexed fields) để tăng hiệu suất.

26. **Viết một list số nguyên trong Apex và lấy số lớn thứ ba.**  
    - Tạo một `List<Integer>`, sắp xếp theo thứ tự tăng dần, sau đó truy cập phần tử thứ ba từ cuối (vị trí `size() - 3`) để lấy số lớn thứ ba. Phương pháp này giả định danh sách có ít nhất ba phần tử.

27. **Theo mặc định, một lớp Apex chạy ở chế độ nào: system mode hay user mode?**  
    - Theo mặc định, một lớp Apex chạy ở **system mode**, nghĩa là bỏ qua quyền chia sẻ của người dùng và truy cập dữ liệu với quyền hệ thống, trừ khi được chỉ định `with sharing` để chuyển sang user mode.

28. **Làm thế nào để tránh lỗi mixed DML exceptions?**  
    - Lỗi "Mixed DML Operation" xảy ra khi thực hiện DML trên Setup objects (như User) và Non-Setup objects (như Account) trong cùng một giao dịch. Để tránh, tách các thao tác này bằng cách sử dụng `@future` hoặc Queueable Apex để xử lý một loại đối tượng bất đồng bộ.

29. **Lỗi "APEX CPU Limit Exceeded" xảy ra khi nào? Các phương pháp hay nhất để tránh lỗi này là gì?**  
    - Lỗi "APEX CPU Limit Exceeded" xảy ra khi mã Apex vượt quá 10,000ms thời gian CPU trong một giao dịch, thường do vòng lặp phức tạp hoặc xử lý dữ liệu lớn không tối ưu.  
    - **Phương pháp hay nhất**: Tối ưu hóa vòng lặp bằng `Map`, chuyển xử lý nặng sang Batch Apex, giảm logic tính toán trong mã, kiểm tra hiệu suất bằng debug logs.

30. **Làm thế nào để cải thiện hiệu suất truy vấn SOQL để giảm thời gian thực thi?**  
    - Để cải thiện hiệu suất SOQL: Sử dụng bộ lọc selective (trên trường indexed như Id, Name), giảm số lượng trường truy vấn, dùng truy vấn cha-con để giảm số lần gọi, tránh truy vấn trong vòng lặp, và tận dụng `LIMIT` hoặc `OFFSET` khi cần thiết.

## Đáp Án Apex Triggers (20 Câu Hỏi)

1. **Có thể tạm thời vô hiệu hóa một trigger không? Nếu có, làm thế nào?**  
   - Có, bạn có thể vô hiệu hóa trigger tạm thời bằng cách:  
     - Sử dụng biến tĩnh (static variable) trong Apex để bật/tắt logic trigger dựa trên điều kiện.  
     - Vô hiệu hóa trigger trong org qua giao diện (Setup > Apex Triggers > Deactivate), nhưng đây không phải là giải pháp lập trình.

2. **Nhiều trigger có thể được thực thi trên cùng một đối tượng không? Nếu có, thứ tự thực thi được xác định như thế nào?**  
    - Có, nhiều trigger có thể được định nghĩa trên cùng một đối tượng (ví dụ: nhiều `before insert`). Tuy nhiên, Salesforce không đảm bảo thứ tự thực thi giữa các trigger cùng loại, nên thứ tự là ngẫu nhiên. Để kiểm soát, nên hợp nhất logic vào một trigger duy nhất hoặc dùng Trigger Handler Pattern.

3. **Có những loại trigger nào?**  
    - Trigger trong Salesforce có hai loại chính dựa trên thời điểm thực thi:  
      - **Before**: Chạy trước khi bản ghi được lưu (before insert, before update, before delete), dùng để chỉnh sửa dữ liệu.  
      - **After**: Chạy sau khi bản ghi được lưu (after insert, after update, after delete, after undelete), dùng để xử lý tác động liên quan.

4. **Khi nào nên sử dụng before trigger so với after trigger?**  
    - **Before trigger**: Dùng khi cần thay đổi dữ liệu bản ghi trước khi lưu (ví dụ: điền giá trị mặc định, kiểm tra dữ liệu).  
    - **After trigger**: Dùng khi cần truy cập ID bản ghi hoặc thực hiện thao tác liên quan đến bản ghi khác sau khi lưu (ví dụ: tạo bản ghi con).

5. **Làm thế nào để kiểm tra một Apex Trigger trong Salesforce?**  
    - Viết lớp unit test Apex với `@isTest`, tạo dữ liệu thử nghiệm (ví dụ: insert Account), thực hiện hành động kích hoạt trigger (insert, update, delete), và dùng `System.assert` để kiểm tra kết quả mong đợi. Đảm bảo độ phủ mã tối thiểu 75%.

6. **Làm thế nào để tránh đệ quy trong trigger?**  
    - Đệ quy xảy ra khi trigger gọi lại chính nó qua DML. Để tránh:  
      - Dùng biến tĩnh (`static boolean`) để theo dõi lần thực thi đầu tiên và chặn các lần sau.  
      - Tối ưu logic để tránh cập nhật bản ghi trong cùng ngữ cảnh trigger.

7. **Trigger Handler Pattern là gì?**  
    - Trigger Handler Pattern là một thiết kế trong Apex tách logic trigger ra một lớp riêng (handler class), thay vì viết tất cả trong file trigger. Điều này cải thiện khả năng bảo trì, tái sử dụng, và kiểm thử bằng cách tổ chức mã theo chức năng (ví dụ: `beforeInsert()`, `afterUpdate()`).

8. **Một trigger có thể thực hiện DML operations không?**  
    - Có, trigger có thể thực hiện DML (insert, update, delete) trên bản ghi, nhưng cần cẩn thận để tránh đệ quy hoặc vượt giới hạn DML (150 mỗi giao dịch). Nên sử dụng sau khi đã tối ưu hóa logic.

9. **Context variables trong trigger là gì?**  
    - Context variables là các biến đặc biệt trong trigger cung cấp thông tin về ngữ cảnh thực thi:  
      - `Trigger.new`: Danh sách bản ghi mới (trước/sau khi lưu).  
      - `Trigger.old`: Danh sách bản ghi cũ (trước khi cập nhật/xóa).  
      - `Trigger.isInsert`, `Trigger.isUpdate`, v.v.: Xác định loại sự kiện.

10. **Làm thế nào để viết một bulkified trigger?**  
    - Một trigger bulkified xử lý nhiều bản ghi cùng lúc để tránh vượt giới hạn. Để làm điều này: Tránh SOQL/DML trong vòng lặp, dùng `Map` hoặc `Set` để nhóm dữ liệu, xử lý toàn bộ `Trigger.new` hoặc `Trigger.old` trong một lần thực thi.

11. **Thứ tự thực thi khi một bản ghi được lưu là gì?**  
    - Thứ tự thực thi trong Salesforce khi lưu bản ghi:  
      1. Validation rules.  
      2. Before triggers.  
      3. Custom validation rules.  
      4. After triggers.  
      5. Assignment rules.  
      6. Auto-response rules.  
      7. Workflow rules.  
      8. Processes/Flows.  
      9. Escalation rules.  
      10. Roll-up summary, parent record updates.  
      11. Grandparent record updates (nếu có).

12. **Làm thế nào để gọi một future method từ một trigger, và khi nào nên sử dụng nó?**  
    - Gọi `@future` method bằng cách truyền tham số (ví dụ: danh sách ID) từ trigger. Nên dùng khi cần thực hiện callout hoặc xử lý bất đồng bộ để tránh vượt giới hạn CPU hoặc Mixed DML exceptions.

13. **Những hạn chế của Apex Triggers là gì?**  
    - Không thể kiểm soát thứ tự giữa nhiều trigger cùng loại, không gọi trực tiếp từ giao diện, giới hạn đệ quy (16 lần), không xử lý dữ liệu lớn hiệu quả (nên dùng Batch Apex thay thế).

14. **Phương thức `addError` trong trigger được dùng để làm gì?**  
    - `addError()` được dùng trong before trigger để ngăn bản ghi được lưu bằng cách thêm thông báo lỗi tùy chỉnh, hiển thị cho người dùng và hủy giao dịch DML.

15. **Điều gì xảy ra nếu một trigger thất bại trong quá trình thực thi?**  
    - Nếu trigger thất bại (ví dụ: ngoại lệ không xử lý), toàn bộ giao dịch DML bị rollback, không bản ghi nào được lưu, và người dùng nhận thông báo lỗi (trừ khi lỗi được bắt bằng `try-catch` bên ngoài).

16. **Có thể sử dụng SOQL và DML trong một trigger không? Các phương pháp hay nhất là gì?**  
    - Có, nhưng cần cẩn thận để tránh vượt giới hạn (100 SOQL, 150 DML).  
    - **Phương pháp hay nhất**: Bulkify trigger, dùng `Map` để giảm truy vấn, tránh DML trong vòng lặp, xử lý ngoại lệ.

17. **Làm thế nào để gọi một trigger từ một trigger khác?**  
    - Trigger không gọi trực tiếp trigger khác, nhưng khi DML từ trigger này tác động đến đối tượng khác có trigger, trigger kia sẽ tự động chạy theo thứ tự thực thi của Salesforce.

18. **Sự khác biệt giữa Triggers và Flows, và khi nào nên sử dụng cái nào?**  
    - **Triggers**: Dùng Apex, mạnh mẽ, phù hợp xử lý logic phức tạp, yêu cầu lập trình. Dùng khi cần tốc độ cao hoặc tùy chỉnh sâu.  
    - **Flows**: Dùng giao diện kéo-thả, dễ cấu hình, ít cần code. Dùng cho tự động hóa đơn giản hoặc người không lập trình.

19. **Một Apex Trigger có thể thực hiện callout đến hệ thống bên ngoài không? Nếu có, làm thế nào?**  
    - Không trực tiếp, vì callout đồng bộ không được phép trong trigger. Để thực hiện, gọi `@future` hoặc Queueable Apex từ trigger để xử lý callout bất đồng bộ.

20. **Làm thế nào để thực thi bảo mật cấp trường trong Apex Triggers?**  
    - Dùng `Schema.describeFieldResult().isAccessible()` để kiểm tra quyền FLS trước khi truy cập trường trong trigger, đảm bảo chỉ xử lý dữ liệu người dùng có quyền xem.

## Đáp Án Batch Apex (29 Câu Hỏi)

1. **Batch Apex trong Salesforce là gì?**  
   - Batch Apex là một cơ chế bất đồng bộ trong Salesforce để xử lý số lượng lớn bản ghi vượt quá giới hạn governor của giao dịch đồng bộ, chia nhỏ dữ liệu thành các lô (batches) và thực thi tuần tự.

2. **Ba phương thức chính trong một lớp Batch Apex là gì?**  
    - `start()`: Trả về `Database.QueryLocator` hoặc `Iterable` để xác định tập dữ liệu cần xử lý.  
    - `execute()`: Xử lý từng lô bản ghi (mặc định 200 bản ghi mỗi lần).  
    - `finish()`: Chạy sau khi tất cả lô hoàn tất, dùng để dọn dẹp hoặc gửi thông báo.

3. **Điều gì xảy ra nếu một Batch Apex job thất bại giữa chừng?**  
    - Nếu một lô thất bại (ví dụ: lỗi không xử lý), chỉ lô đó bị ảnh hưởng, các lô khác vẫn tiếp tục chạy. Batch job không tự động rollback toàn bộ, trừ khi dùng `Database.Stateful` và logic rollback thủ công.

4. **Tại sao nên sử dụng Batch Apex thay vì Data Loader?**  
    - Batch Apex cho phép xử lý logic tùy chỉnh qua mã Apex (ví dụ: tính toán phức tạp), trong khi Data Loader chỉ nhập/xuất dữ liệu cơ bản mà không hỗ trợ logic lập trình.

5. **Có thể gọi một Batch Apex job từ một Batch Apex job khác không?**  
    - Không trực tiếp trong `execute()`, nhưng có thể gọi từ `finish()` bằng `Database.executeBatch()` để bắt đầu một job mới sau khi job hiện tại hoàn tất.

6. **Kích thước mặc định và tối đa của batch là bao nhiêu?**  
    - Mặc định: 200 bản ghi mỗi lô. Tối đa: 2,000 bản ghi mỗi lô (đặt qua tham số `scope` trong `Database.executeBatch()`).

7. **Có bao nhiêu batch có thể chạy đồng thời?**  
    - Tối đa 5 Batch Apex jobs có thể chạy đồng thời trong một org, các job khác sẽ vào hàng đợi (Apex Flex Queue).

8. **Database.BatchableContext là gì và nó được sử dụng như thế nào?**  
    - `Database.BatchableContext` là một đối tượng cung cấp thông tin ngữ cảnh trong Batch Apex (ví dụ: job ID, số lô). Nó được truyền vào các phương thức `start()`, `execute()`, `finish()` để theo dõi trạng thái job.

9. **Có thể sử dụng Custom Metadata hoặc Custom Settings trong một Batch job không?**  
    - Có, cả hai đều có thể truy cập trong Batch Apex để lấy cấu hình hoặc dữ liệu tĩnh mà không ảnh hưởng đến giới hạn SOQL, vì chúng được lưu trữ trong bộ nhớ cache.

10. **Số lượng bản ghi tối đa mà một Batch Apex job có thể xử lý là bao nhiêu?**  
    - Không có giới hạn cố định về tổng số bản ghi, nhưng `Database.QueryLocator` bị giới hạn 50 triệu bản ghi trong một job (tùy thuộc vào kích thước scope và tài nguyên hệ thống).

11. **Điều gì xảy ra nếu một Batch Apex job vượt quá heap size limits?**  
    - Nếu vượt quá 12MB heap size (bất đồng bộ), lô đó thất bại, các lô khác tiếp tục chạy. Cần giảm scope hoặc tối ưu hóa dữ liệu xử lý trong `execute()`.

12. **Có bao nhiêu lần thực thi đồng thời của `start()` được phép?**  
    - Chỉ một `start()` chạy tại một thời điểm cho mỗi Batch job, vì Batch Apex xử lý tuần tự từng giai đoạn (`start`, `execute`, `finish`).

13. **Có bao nhiêu jobs có thể ở trạng thái Holding trong Apex Flex Queue?**  
    - Tối đa 100 jobs có thể ở trạng thái Holding trong Apex Flex Queue, chờ thực thi khi có slot trống (giới hạn đồng thời là 5).

14. **Có thể chạy Batch Apex bên trong một trigger không?**  
    - Có, nhưng không nên trực tiếp trong trigger vì giới hạn đồng thời. Thay vào đó, gọi `Database.executeBatch()` từ trigger để xếp hàng job bất đồng bộ.

15. **Làm thế nào để xóa hoặc dừng một Batch Apex job đang chạy?**  
    - Dùng `System.abortJob(jobId)` với ID của job (lấy từ `AsyncApexJob`), có thể thực hiện từ Developer Console hoặc Apex để dừng job ngay lập tức.

16. **Sự khác biệt giữa `Database.executeBatch` và `System.scheduleBatch` là gì?**  
    - `Database.executeBatch`: Chạy Batch job ngay lập tức (nếu có slot trống).  
    - `System.scheduleBatch`: Lên lịch Batch job chạy vào thời điểm cụ thể bằng cron expression, phù hợp cho tác vụ định kỳ.

17. **Interface nào triển khai Batch Apex trong Salesforce?**  
    - Interface `Database.Batchable<sObject>` được triển khai trong lớp Batch Apex, yêu cầu định nghĩa `start()`, `execute()`, `finish()`.

18. **Làm thế nào để giới hạn số lượng concurrent batch jobs trong Salesforce?**  
    - Không thể giới hạn trực tiếp qua cấu hình, nhưng có thể kiểm soát bằng cách theo dõi trạng thái job trong `AsyncApexJob` và trì hoãn gọi `Database.executeBatch()` nếu đã đạt 5 job đang chạy.

19. **Có thể một Batch Apex job bị tạm dừng hoặc tiếp tục không?**  
    - Không, Batch Apex không hỗ trợ tạm dừng hoặc tiếp tục thủ công. Job chỉ có thể chạy hoàn toàn hoặc bị hủy bằng `System.abortJob()`.

20. **Thứ tự thực thi của batches có được đảm bảo không? Tại sao hoặc tại sao không?**  
    - Không, thứ tự thực thi các lô không được đảm bảo vì Salesforce xử lý bất đồng bộ và có thể chạy song song trên nhiều luồng, tùy thuộc vào tài nguyên hệ thống.

21. **Làm thế nào để xử lý record-locking issues trong Batch Apex?**  
    - Dùng `FOR UPDATE` trong `start()` để khóa bản ghi nếu cần, hoặc xử lý lỗi khóa bằng `try-catch` trong `execute()` và thử lại lô thất bại bằng cách gọi lại `Database.executeBatch()`.

22. **Mục đích của phương thức `finish` trong Batch Apex là gì?**  
    - `finish()` chạy sau khi tất cả lô hoàn tất, dùng để thực hiện tác vụ dọn dẹp (ví dụ: xóa dữ liệu tạm), gửi email thông báo, hoặc bắt đầu một Batch job khác.

23. **Làm thế nào để lên lịch cho một Batch Apex job chạy trong tương lai?**  
    - Dùng `System.scheduleBatch()` với tham số lớp Batch, scope, và thời gian chạy (cron expression) để lên lịch job chạy vào thời điểm cụ thể.

24. **Lợi thế của việc sử dụng `Database.QueryLocator` trong Batch Apex là gì?**  
    - `Database.QueryLocator` cho phép xử lý lên đến 50 triệu bản ghi, hiệu quả hơn `Iterable` (giới hạn heap size), và tận dụng cơ chế truy vấn của Salesforce để quản lý dữ liệu lớn.

25. **Điều gì xảy ra nếu xảy ra lỗi trong một batch? Toàn bộ job có bị rollback không?**  
    - Nếu một lô thất bại, chỉ lô đó bị ảnh hưởng, các lô khác vẫn chạy. Toàn bộ job không rollback trừ khi dùng `Database.Stateful` và triển khai rollback thủ công.

26. **Làm thế nào để đảm bảo chỉ những bản ghi có vấn đề bị rollback trong khi các bản ghi khác được xử lý thành công?**  
    - Dùng `Database.update(records, false)` trong `execute()` với tham số `allOrNothing=false`, cho phép lưu các bản ghi thành công và bỏ qua bản ghi lỗi.

27. **Sự khác biệt chính giữa Batch Apex và Queueable Apex là gì?**  
    - **Batch Apex**: Xử lý dữ liệu lớn theo lô, tuần tự, giới hạn 5 job đồng thời.  
    - **Queueable Apex**: Xử lý tác vụ nhỏ hơn, linh hoạt hơn, hỗ trợ tối đa 50 job trong hàng đợi, không chia lô.

28. **Điều gì xảy ra nếu một batch job bị aborted trong khi đang chạy?**  
    - Nếu job bị hủy bằng `System.abortJob()`, các lô chưa chạy sẽ dừng lại, các lô đã hoàn tất không bị rollback, và trạng thái job trong `AsyncApexJob` chuyển sang "Aborted".

29. **Làm thế nào để đảm bảo một batch job không xử lý duplicate records?**  
    - Dùng `Set` để lọc bản ghi dựa trên trường duy nhất (ví dụ: Id) trong `start()`, hoặc kiểm tra điều kiện trong `execute()` để bỏ qua bản ghi đã xử lý.

## Đáp Án Câu Hỏi & Kịch Bản Liên Quan Đến SOQL (39 Câu Hỏi)

1. **Lấy các Account có ít nhất hai Contact với cùng miền email.**  
   - Dùng SOQL với subquery hoặc aggregate query để nhóm Contact theo miền email (dùng `SUBSTRING`), sau đó lọc Account có số lượng Contact ≥ 2 cho cùng miền.

2. **Lấy các Opportunity mà tổng Amount của các Opportunity đã thắng liên quan vượt quá Amount của Opportunity hiện tại.**  
   - Dùng SOQL với roll-up summary (nếu có) hoặc subquery để tính tổng Amount của Opportunity "Closed Won" liên quan đến Account, so sánh với Amount hiện tại.

3. **Liệt kê tất cả các Account không có Case nào, nhưng các Contact liên quan của chúng thì có.**  
   - Dùng SOQL với `LEFT OUTER JOIN` hoặc subquery: chọn Account không có Case (`WHERE Id NOT IN (SELECT AccountId FROM Case)`) và có Contact liên quan đến Case.

4. **Tìm các User đã tạo hơn năm bản ghi trên các đối tượng khác nhau trong 24 giờ qua.**  
   - Dùng SOQL aggregate với `CreatedById` và `CreatedDate` trong 24 giờ, nhóm theo User và đếm số bản ghi, lọc `HAVING COUNT(Id) > 5`.

5. **Xác định các Opportunity mà Account liên quan không có Case đang hoạt động nhưng có ít nhất một Opportunity đã đóng.**  
   - Dùng SOQL với subquery: lọc Opportunity từ Account không có Case `IsClosed = false` nhưng có Opportunity `StageName = 'Closed Won'`.

6. **Lấy tất cả các Case mà cùng một Contact được liệt kê nhiều lần trong hệ thống phân cấp Case.**  
   - Dùng SOQL với subquery hoặc tự tham chiếu: chọn Case có `ContactId` xuất hiện trong `ParentId` của Case khác.

7. **Liệt kê tất cả các Account có Opportunity đóng trong 30 ngày tới, nhưng không có Task nào đến hạn trong cùng khoảng thời gian đó.**  
   - Dùng SOQL với subquery: chọn Account có Opportunity `CloseDate` trong 30 ngày tới, nhưng không có Task với `ActivityDate` trong cùng khoảng thời gian.

8. **Tìm các Contact liên kết với nhiều Account, nhưng không Account nào của họ có Opportunity đang mở.**  
   - Dùng SOQL với subquery: chọn Contact từ `AccountContactRelation` có nhiều Account, và không Account nào có Opportunity `IsClosed = false`.

9. **Lấy tất cả các Opportunity mà AnnualRevenue của Account liên quan nhỏ hơn Amount của Opportunity.**  
   - Dùng SOQL với truy vấn cha-con: chọn Opportunity từ Account nơi `AnnualRevenue < Amount`.

10. **Xác định các Account mà tất cả Opportunity liên quan đã đóng và tổng số Contact lớn hơn 10.**  
    - Dùng SOQL với subquery: chọn Account không có Opportunity `IsClosed = false` và `COUNT(Contacts) > 10`.

11. **Lấy Account có số lượng Opportunity tối đa.**  
    - Dùng SOQL aggregate: `SELECT AccountId, COUNT(Id) FROM Opportunity GROUP BY AccountId ORDER BY COUNT(Id) DESC LIMIT 1`.

12. **Lấy 10 bản ghi Account mới nhất.**  
    - Dùng SOQL: `SELECT Id, Name FROM Account ORDER BY CreatedDate DESC LIMIT 10`.

13. **Lấy các Contact và Opportunity liên quan đến Account trong một truy vấn duy nhất.**  
    - Dùng SOQL cha-con: `SELECT Name, (SELECT LastName FROM Contacts), (SELECT Name FROM Opportunities) FROM Account`.

14. **Lấy chỉ các Contact đang hoạt động liên quan đến Accounts.**  
    - Dùng SOQL: `SELECT Id, LastName FROM Contact WHERE AccountId != null AND IsActive__c = true`.

15. **Viết một truy vấn SOQL để lấy ID của tất cả các Account có hơn 5 Contact.**  
    - Dùng aggregate: `SELECT AccountId FROM Contact GROUP BY AccountId HAVING COUNT(Id) > 5`.

16. **Lấy tất cả các Account không có Contact liên quan.**  
    - Dùng SOQL: `SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Contact)`.

17. **Lấy một Account có ít nhất một Contact.**  
    - Dùng SOQL: `SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact) LIMIT 1`.

18. **Lấy tất cả các User với profile "System Administrator."**  
    - Dùng SOQL: `SELECT Id, Name FROM User WHERE Profile.Name = 'System Administrator'`.

19. **Lấy chỉ các Account có ít nhất một Contact mà checkbox `isActive` được đặt thành true.**  
    - Dùng SOQL: `SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE isActive__c = true)`.

20. **Lấy tất cả các Account được tạo trong 30 ngày qua.**  
    - Dùng SOQL: `SELECT Id FROM Account WHERE CreatedDate = LAST_N_DAYS:30`.

21. **Selective indexing cải thiện hiệu suất SOQL như thế nào?**  
    - Selective indexing (trên trường indexed như Id, Name) giảm số lượng bản ghi cần quét bằng cách chỉ truy vấn dữ liệu phù hợp với bộ lọc, tăng tốc độ thực thi và giảm tải hệ thống.

22. **Skinny tables là gì, và khi nào nên sử dụng chúng?**  
    - Skinny tables là bảng ảo do Salesforce tạo, chứa các trường thường dùng để tăng tốc truy vấn trên đối tượng lớn. Dùng khi có khối lượng dữ liệu lớn (hàng triệu bản ghi) và truy vấn thường xuyên cùng tập hợp trường.

23. **Governor limits ảnh hưởng đến SOQL queries như thế nào?**  
    - Giới hạn 100 truy vấn mỗi giao dịch buộc lập trình viên tối ưu hóa SOQL, tránh lặp truy vấn không cần thiết, ảnh hưởng đến thiết kế mã khi xử lý dữ liệu lớn.

24. **Sự khác biệt giữa `COUNT()` và `COUNT(Id)` trong SOQL là gì?**  
    - `COUNT()` đếm tất cả bản ghi (bao gồm null), còn `COUNT(Id)` chỉ đếm bản ghi có `Id` không null (thực tế luôn đếm tất cả vì `Id` bắt buộc).

25. **FOR VIEW và FOR REFERENCE ảnh hưởng đến query results như thế nào?**  
    - `FOR VIEW`: Cập nhật `LastViewedDate` của bản ghi.  
    - `FOR REFERENCE`: Cập nhật `LastReferencedDate`. Cả hai không thay đổi dữ liệu trả về, chỉ ảnh hưởng đến metadata theo dõi.

26. **Làm thế nào để viết một polymorphic query trong SOQL?**  
    - Dùng `TYPEOF` trong SOQL để truy vấn đối tượng đa hình (ví dụ: `WhatId` trong Task), chỉ định trường trả về dựa trên loại đối tượng (Account, Opportunity, v.v.).

27. **Semi-join và anti-join queries là gì? Cung cấp ví dụ.**  
    - **Semi-join**: Lọc bản ghi dựa trên subquery (ví dụ: `SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact)`).  
    - **Anti-join**: Loại trừ bản ghi từ subquery (ví dụ: `SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Contact)`).

28. **Làm thế nào để lấy child records và parent details trong một truy vấn duy nhất?**  
    - Dùng truy vấn cha-con: `SELECT Name, (SELECT LastName FROM Contacts) FROM Account` để lấy dữ liệu từ cả cha (Account) và con (Contact).

29. **TYPEOF trong SOQL là gì, và nó hoạt động như thế nào?**  
    - `TYPEOF` là từ khóa trong SOQL dùng cho trường đa hình (ví dụ: `WhatId`), cho phép chỉ định trường trả về dựa trên loại đối tượng, chỉ hoạt động trong truy vấn `WHERE` hoặc `SELECT`.

30. **Làm thế nào để truy vấn tất cả records, bao gồm deleted & archived ones?**  
    - Dùng `ALL ROWS` trong SOQL (ví dụ: `SELECT Id FROM Account ALL ROWS`) để lấy cả bản ghi đã xóa (Recycle Bin) và lưu trữ (archived).

31. **Sự khác biệt giữa Inner Query và Left Outer Join là gì?**  
    - **Inner Query**: Truy vấn cha-con trong SOQL, chỉ trả về cha nếu có con phù hợp.  
    - **Left Outer Join**: Trả về tất cả bản ghi cha, bất kể có con hay không (SOQL không hỗ trợ trực tiếp, cần xử lý logic riêng).

32. **Làm thế nào để lấy top N records cho mỗi nhóm?**  
    - Dùng `GROUP BY` với `ORDER BY` và `LIMIT` trong aggregate query, nhưng SOQL không hỗ trợ trực tiếp top N mỗi nhóm, cần xử lý qua Apex.

33. **Có thể thực hiện math operations (SUM, AVG, v.v.) trong SOQL không? Làm thế nào?**  
    - Có, dùng hàm aggregate như `SUM(Amount)`, `AVG(Amount)` trong `SELECT` với `GROUP BY` để tính toán trên nhóm bản ghi.

34. **Làm thế nào để xây dựng một SOQL query động trong Apex?**  
    - Dùng `Database.query()` với chuỗi SOQL được xây dựng từ biến (ví dụ: `String query = 'SELECT Id FROM ' + objectName; List<sObject> results = Database.query(query);`).

35. **Grouped aggregations là gì, và chúng được sử dụng như thế nào?**  
    - Grouped aggregations là việc nhóm bản ghi bằng `GROUP BY` trong SOQL, dùng với hàm như `COUNT()`, `SUM()` để tính toán theo nhóm (ví dụ: đếm Opportunity theo Stage).

36. **Làm thế nào để ngăn chặn SOQL injection?**  
    - Dùng bind variables (ví dụ: `:variable`) thay vì nối chuỗi trực tiếp, hoặc thoát ký tự đầu vào bằng `String.escapeSingleQuotes()` để ngăn mã độc từ dữ liệu người dùng.

37. **Sự khác biệt giữa `Database.query()` và inline SOQL là gì?**  
    - `Database.query()`: Chạy SOQL động từ chuỗi, linh hoạt nhưng cần cẩn thận injection.  
    - Inline SOQL: Truy vấn tĩnh trong mã (ví dụ: `[SELECT Id FROM Account]`), an toàn hơn và hiệu quả hơn.

38. **Làm thế nào để xử lý NULL values trong điều kiện WHERE?**  
    - Dùng `IS NULL` hoặc `IS NOT NULL` trong `WHERE` để lọc bản ghi có hoặc không có giá trị null (ví dụ: `WHERE Industry IS NULL`).

39. **Relationship queries ảnh hưởng đến heap size và CPU time như thế nào?**  
    - Truy vấn quan hệ (cha-con) tăng heap size vì trả về nhiều dữ liệu hơn, và tăng CPU time nếu truy vấn phức tạp hoặc không selective, cần tối ưu bằng bộ lọc và giới hạn trường.

40. **Làm thế nào để sử dụng `LIMIT` và `OFFSET` cho phân trang hiệu quả?**  
    - `LIMIT` giới hạn số bản ghi trả về, `OFFSET` bỏ qua số bản ghi đầu tiên (tối đa 2,000). Kết hợp cả hai để phân trang (ví dụ: `LIMIT 10 OFFSET 20` cho trang 3).

## Đáp Án Câu Hỏi Chung Về Phát Triển Salesforce (33 Câu Hỏi)

1. **Làm thế nào để bypass một validation rule trong Salesforce?**  
   - Dùng Custom Permission hoặc trường tùy chỉnh (ví dụ: checkbox) để kiểm tra trong validation rule, cho phép bỏ qua khi cần (ví dụ: `NOT($Permission.Bypass_Validation)`).

2. **Trong bối cảnh nào thì manual sharing được kích hoạt trong Salesforce?**  
    - Manual sharing được kích hoạt khi đối tượng ở chế độ Private hoặc Read Only trong OWD (Organization-Wide Defaults), cho phép người dùng chia sẻ bản ghi thủ công với người khác.

3. **Một user có thể xóa records do người khác trong cùng vai trò tạo ra không?**  
    - Phụ thuộc vào quyền: Nếu vai trò cho phép "Delete" và OWD không cấm, người dùng có thể xóa. Nếu không, cần quyền "Modify All" hoặc chia sẻ rõ ràng.

4. **Sự khác biệt giữa User Mode và System Mode trong Salesforce?**  
    - **User Mode**: Apex tôn trọng quyền của người dùng (profile, sharing rules, FLS).  
    - **System Mode**: Apex bỏ qua quyền người dùng, truy cập với quyền hệ thống.

5. **Có bao nhiêu cách để chia sẻ records trong Salesforce?**  
    - Năm cách chính: Manual sharing, Sharing rules, Role hierarchy, Apex sharing, Teams sharing.

6. **Có thể gọi một Batch Apex class từ một future method không? Nếu không, tại sao?**  
    - Có, `Database.executeBatch()` có thể được gọi từ `@future` method, miễn là không vượt giới hạn đồng thời (5 jobs).

7. **Có thể thực hiện callouts từ một trigger không? Tại sao hoặc tại sao không?**  
    - Không trực tiếp, vì trigger không cho phép callout đồng bộ. Cần dùng `@future` hoặc Queueable để gọi bất đồng bộ.

8. **Có thể triển khai cả Scheduled Apex và Batch Apex trong một lớp Apex duy nhất không? Phương pháp tốt nhất là gì?**  
    - Có, một lớp có thể vừa implements `Schedulable` và `Database.Batchable`, gọi `Database.executeBatch()` trong `execute()`. Tuy nhiên, tốt nhất là tách riêng để dễ bảo trì.

9. **Có thể thực hiện callouts từ Batch Apex không?**  
    - Có, Batch Apex hỗ trợ callout trong `execute()` hoặc `finish()`, tối đa 150 callouts mỗi giao dịch.

10. **Mối quan hệ giữa Account và Contact trong Salesforce là gì?**  
    - Là mối quan hệ lookup (1-nhiều), trong đó Account là cha và Contact là con, liên kết qua trường `AccountId` trên Contact.

11. **Có thể tạo một roll-up summary field cho Contact trên Account không? Nếu không, làm thế nào để triển khai?**  
    - Không, vì Contact và Account không phải mối quan hệ master-detail (chỉ lookup). Để triển khai, dùng trigger hoặc Flow để tính toán và cập nhật trường trên Account.

12. **Khi một Opportunity được đánh dấu "Closed Won," làm thế nào để khiến Opportunity và Opportunity Products chỉ đọc?**  
    - Dùng validation rule hoặc Flow để kiểm tra `StageName = 'Closed Won'` và khóa bản ghi bằng cách ngăn chỉnh sửa, hoặc thay đổi quyền qua profile/permission set.

13. **Nếu một Batch Apex xử lý 2000 records với scope 200, sẽ tạo bao nhiêu debug logs?**  
    - Tạo 11 debug logs: 1 cho `start()`, 10 cho `execute()` (2000 / 200 = 10 lô), 1 cho `finish()`.

14. **Bạn đã từng làm việc với deployment tools nào chưa? Nếu có, đó là những công cụ nào?**  
    - Một số công cụ phổ biến: Salesforce CLI, Workbench, Change Sets, Gearset, Copado (tùy kinh nghiệm cá nhân).

15. **Làm thế nào để tối ưu hóa một báo cáo Salesforce phức tạp đang tải quá lâu?**  
    - Thêm bộ lọc selective (trên trường indexed), giảm số cột, dùng summary report thay vì tabular, kiểm tra skinny tables nếu khối lượng dữ liệu lớn.

16. **Sự khác biệt chính giữa before trigger và after trigger trong Salesforce là gì, và khi nào nên sử dụng cái nào?**  
    - **Before**: Chạy trước khi lưu, dùng để chỉnh sửa bản ghi.  
    - **After**: Chạy sau khi lưu, dùng để xử lý tác động liên quan (ví dụ: tạo bản ghi khác).

17. **Salesforce xử lý large data volumes (LDV) như thế nào, và bạn sẽ sử dụng chiến lược nào để vượt qua thách thức?**  
    - Salesforce dùng skinny tables, indexing, và Batch Apex để xử lý LDV. Chiến lược: Phân trang, selective queries, asynchronous processing, archiving dữ liệu cũ.

18. **Bạn có thể giải thích khái niệm external objects trong Salesforce và chúng khác với custom objects như thế nào không?**  
    - **External objects**: Lưu trữ dữ liệu bên ngoài Salesforce, truy cập qua External Data Source (OData, v.v.), không dùng dung lượng org.  
    - **Custom objects**: Lưu trữ dữ liệu trong Salesforce, dùng dung lượng org, hỗ trợ đầy đủ tính năng như trigger.

19. **Làm thế nào để xử lý governor limits khi làm việc với large datasets hoặc bulk operations?**  
    - Dùng Batch Apex hoặc Queueable Apex để xử lý bất đồng bộ, tối ưu SOQL/DML bằng `Map`, giảm truy vấn không cần thiết.

20. **Bạn có thể mô tả độ phức tạp của việc sử dụng nhiều asynchronous processes như Batch Apex, Future Methods, Queueable Apex trong một giải pháp không?**  
    - Độ phức tạp nằm ở quản lý thứ tự thực thi, giới hạn đồng thời (5 Batch, 50 Queueable), theo dõi trạng thái job, và xử lý lỗi chồng chéo, cần thiết kế rõ ràng và kiểm soát trạng thái.

21. **Phương pháp hay nhất để quản lý Salesforce security và đảm bảo data protection là gì?**  
    - Dùng OWD chặt chẽ, sharing rules, FLS, mã hóa dữ liệu nhạy cảm (Shield), kiểm tra quyền trong Apex, và audit thường xuyên.

22. **Làm thế nào để triển khai dynamic Apex để xử lý khi object và fields không biết trước?**  
    - Dùng `Schema` class để lấy metadata đối tượng/trường runtime, xây dựng SOQL động bằng `Database.query()`, kiểm tra quyền trước khi truy cập.

23. **Bạn có thể giải thích cách sử dụng platform events trong Salesforce để kích hoạt event-driven architecture không?**  
    - Tạo Platform Event object, publish event bằng Apex hoặc Flow, subscribe qua trigger hoặc LWC để xử lý sự kiện theo thời gian thực, xây dựng kiến trúc phản ứng nhanh.

24. **Custom metadata types là gì và chúng khác với custom settings như thế nào? Khi nào nên dùng cái nào?**  
    - **Custom Metadata Types**: Lưu trữ metadata tùy chỉnh, triển khai như code, hỗ trợ SOQL, dùng cho cấu hình ứng dụng.  
    - **Custom Settings**: Lưu trữ dữ liệu cấp org/user, không triển khai như code, truy cập nhanh hơn.  
    - Dùng Custom Metadata cho cấu hình triển khai, Custom Settings cho dữ liệu runtime.

25. **Làm thế nào để triển khai một rule mà số điện thoại của Account không được trùng với của Contact?**  
    - Dùng trigger hoặc Flow để so sánh `Phone` của Account và Contact khi insert/update, thêm lỗi bằng `addError()` nếu trùng.

26. **Governor Limits là gì, và tại sao chúng tồn tại?**  
    - Là giới hạn tài nguyên (SOQL, DML, CPU) để đảm bảo hiệu suất và công bằng trên nền tảng đa người dùng, ngăn một người dùng chiếm quá nhiều tài nguyên.

27. **Sự khác biệt giữa SOQL và SOSL là gì, và khi nào nên dùng cái nào?**  
    - **SOQL**: Truy vấn dữ liệu có cấu trúc từ một đối tượng, dùng khi biết rõ object/field.  
    - **SOSL**: Tìm kiếm văn bản trên nhiều đối tượng, dùng khi cần tìm kiếm toàn cục.

28. **Bulkification trong Apex là gì, và tại sao nó quan trọng?**  
    - Bulkification là thiết kế mã Apex để xử lý nhiều bản ghi cùng lúc, tránh vượt giới hạn governor khi chạy trong ngữ cảnh hàng loạt (trigger, Batch Apex).

29. **Batch Apex hoạt động như thế nào, và khi nào nên dùng nó?**  
    - Batch Apex chia dữ liệu lớn thành lô, xử lý tuần tự qua `start()`, `execute()`, `finish()`. Dùng khi cần xử lý hàng nghìn bản ghi vượt giới hạn giao dịch đồng bộ.

30. **Làm thế nào để gọi Apex trong LWC?**  
    - Dùng `@wire` cho truy cập tự động (cacheable) hoặc imperative call bằng `import` và `.then()` cho linh hoạt, tùy thuộc vào yêu cầu DML.

