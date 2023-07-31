const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// HTTP logger
app.use(morgan('combined'));

// static file
app.use(express.static(path.join(__dirname,'public')))

// Connect to DB
db.connect();

// template engine
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));
// console.log(path.join(__dirname,'resources/views'))

// create Routes -> Dispatcher
// action --- Dispatcher ---> Function handler

// Routes init
route(app)


app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))
// Browser access web server khi app lắng nghe sự kiện trên localhost: 5000
// routes
// start web server
// import library express to initialize server
// public: dùng để quản lý file tĩnh
// request, response(trả về cho client)
// GET methou: xảy ra khi truy cập vào một website hoặc truy cập vào thẻ a
// Query parameters: truyền dữ liệu qua URL, dữ liệu được đính thông qua URL
// Form default behavior: thêm query vào cho đường dẫn, action trống thì mặc định lấy đường dẫn hiện tại
// Post methou: be used to send data from client to server, formData contain data(request get input which has its name)
// body: không được express được xử lý qua middleware
// mô hình MVC
// host: nơi để lưu trữ
// local host: host nằm trên máy tính cá nhân
// mongoose: dùng để connect giữa mongoDB và express
