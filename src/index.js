const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3000;

// HTTP logger
app.use(morgan('combined'));

// static file
app.use(express.static(path.join(__dirname,'public')))

// template engine
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));
// console.log(path.join(__dirname,'resources/views'))

app.get('/',(req, res) => {
    res.render('home');
})

app.get('/news',(req, res) => {
    res.render('news');
})

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))
// routes
// start web server
// import library express to initialize server
// public: dùng để quản lý file tĩnh
// 