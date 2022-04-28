// Lấy và sử dụng module express...
var express = require("express");

// Biến server chính là nguyên cái hệ thống (cái xương sống) server API của mình...
var server = express();

// Server sẽ chạy với PORT 5000, nếu 3000 ko sử dụng được có thể sử dụng PORT được đặt mặc định (trong file .env - thư mục project)...
var port = 5000 || process.env.PORT;

// Sử dụng module body-parser...
var body_parser = require("body-parser");

// Server cho pháp nhận dữ liệu được gửi từ người dùng trong req.body và có dạng là JSON...
server.use(body_parser.json());

// Định tuyến (Server) cho các dịch vụ (chi tiết code ở nơi khác - ./api/routes.js [dấu . tức là mình đang đứng tại thư mục root của project])...
var route = require("./api/routes");
route(server);

// Server đã được kích hoạt...
server.listen(port);

// để chạy Server, Terminal và gõ : npm run API (xem lại file package-json # chỗ phần Scripts)...
console.log("Server is running in port "+port+"...");