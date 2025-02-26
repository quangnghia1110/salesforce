// Hàm parse Markdown thành các nhóm câu hỏi (giữ nguyên như trước)
function parseMarkdown(mdContent) {
    const lines = mdContent.split('\n').filter(line => line.trim());
    const sections = [];
    let currentSection = null;
    let currentItem = null;

    lines.forEach(line => {
        if (line.startsWith('## ')) {
            if (currentSection) sections.push(currentSection);
            currentSection = { heading: line.replace('## ', '').trim(), items: [] };
            currentItem = null; // Reset item khi bắt đầu section mới
        } else if (currentSection && line.match(/^\d+\.\s/)) { // Dòng bắt đầu bằng số (câu hỏi)
            if (currentItem) currentSection.items.push(currentItem);
            currentItem = { text: line.trim() };
        } else if (currentSection && currentItem && line.trim()) {
            currentItem.text += '\n' + line.trim(); // Thêm nội dung vào item hiện tại
        }
    });
    if (currentSection && currentItem) currentSection.items.push(currentItem);
    if (currentSection) sections.push(currentSection);
    return sections;
}

// Hàm tải và hiển thị dữ liệu từ tệp Markdown
async function loadContent() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Không thể tải dữ liệu');
        }
        const data = await response.json();
        
        const questionContainer = document.getElementById('question-container');
        const answerContent = document.getElementById('answer-content');
        const backBtn = document.getElementById('back-btn');
        const searchInput = document.getElementById('search-input');

        function displayQuestions(sections = data) {
            questionContainer.innerHTML = '';
            
            // Hiển thị từng section
            Object.entries(sections).forEach(([sectionName, questions]) => {
                // Tạo heading cho section với số lượng câu hỏi
                const heading = document.createElement('h2');
                heading.classList.add('toggle-heading');
                heading.classList.add('collapsed');
                
                // Tạo span cho tiêu đề và số lượng
                const titleSpan = document.createElement('span');
                titleSpan.textContent = sectionName;
                // Thêm class đặc biệt cho Drafting nếu không có câu hỏi
                if (sectionName === 'Drafting' && (!questions || questions.length === 0)) {
                    titleSpan.classList.add('empty-section');
                }
                
                const countSpan = document.createElement('span');
                countSpan.classList.add('question-count');
                countSpan.textContent = `(${questions.length || 0} Câu)`;
                
                heading.appendChild(titleSpan);
                heading.appendChild(countSpan);

                // Tạo danh sách câu hỏi
                const ul = document.createElement('ul');
                ul.classList.add('question-list');
                ul.classList.add('hidden');

                // Thêm từng câu hỏi vào danh sách
                questions.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.textContent = item.question;
                    
                    li.addEventListener('click', () => {
                        // Xóa highlighting từ các câu hỏi khác
                        document.querySelectorAll('li').forEach(item => 
                            item.classList.remove('active')
                        );
                        
                        // Highlight câu hỏi được chọn
                        li.classList.add('active');
                        
                        // Hiển thị câu trả lời
                        answerContent.innerHTML = marked.parse(item.answer);
                        backBtn.style.display = 'block';
                    });

                    ul.appendChild(li);
                });

                // Thêm sự kiện toggle cho section
                heading.addEventListener('click', () => {
                    ul.classList.toggle('hidden');
                    heading.classList.toggle('collapsed');
                });

                // Thêm vào container
                questionContainer.appendChild(heading);
                questionContainer.appendChild(ul);
            });
        }

        // Xử lý tìm kiếm
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            // Lọc câu hỏi theo từ khóa tìm kiếm
            const filteredData = Object.fromEntries(
                Object.entries(data).map(([section, questions]) => [
                    section,
                    questions.filter(q => 
                        q.question.toLowerCase().includes(searchTerm) ||
                        q.answer.toLowerCase().includes(searchTerm)
                    )
                ]).filter(([_, questions]) => questions.length > 0)
            );

            displayQuestions(filteredData);
        });

        // Xử lý nút quay lại
        backBtn.addEventListener('click', () => {
            // Reset nội dung answer
            answerContent.textContent = 'Chọn một câu hỏi để xem đáp án.';
            backBtn.style.display = 'none';
            
            // Bỏ active state của tất cả câu hỏi
            document.querySelectorAll('li').forEach(item => 
                item.classList.remove('active')
            );
            
            // Đóng tất cả các toggle đang mở
            document.querySelectorAll('.toggle-heading').forEach(heading => {
                heading.classList.add('collapsed');
                const list = heading.nextElementSibling;
                if (list && list.classList.contains('question-list')) {
                    list.classList.add('hidden');
                }
            });
        });

        // Hiển thị danh sách câu hỏi ban đầu
        displayQuestions();

    } catch (error) {
        console.error('Lỗi:', error);
        document.getElementById('answer-content').textContent = 
            'Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại.';
    }
}

// Khởi chạy khi trang đã tải xong
document.addEventListener('DOMContentLoaded', loadContent);