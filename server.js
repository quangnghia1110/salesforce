const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Phục vụ các file tĩnh từ thư mục hiện tại
app.use(express.static(__dirname));

// Route mặc định
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 