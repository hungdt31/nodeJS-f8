# F8 Education Platform 📚

> Một ứng dụng web quản lý khóa học được xây dựng với Node.js, Express và MongoDB - Dự án học tập từ F8.

![NodeJS](https://img.shields.io/badge/node.js-%2343853d.svg?logo=node.js&logoColor=white&style=for-the-badge) ![ExpressJS](https://img.shields.io/badge/express.js-%23000000.svg?logo=express&logoColor=white&style=for-the-badge) ![MongoDB](https://img.shields.io/badge/mongodb-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge)

## 🌟 Tính năng

- ✅ **Quản lý khóa học**: Tạo, sửa, xóa và xem khóa học
- ✅ **Giao diện responsive**: Sử dụng Bootstrap 5 và Handlebars
- ✅ **Soft Delete**: Xóa mềm với mongoose-delete
- ✅ **Search & Filter**: Tìm kiếm và lọc khóa học
- ✅ **Slug Generation**: Tự động tạo slug cho URL thân thiện
- ✅ **Trash Management**: Quản lý thùng rác
- ✅ **SCSS Support**: Preprocessor CSS với Sass

## 🛠️ Công nghệ sử dụng

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM cho MongoDB

### Frontend

- **Handlebars** - Template engine
- **Bootstrap 5** - CSS framework
- **SCSS/Sass** - CSS preprocessor
- **Font Awesome** - Icon library

### Development Tools

- **Nodemon** - Auto restart server
- **Morgan** - HTTP request logger
- **Husky** - Git hooks
- **Prettier** - Code formatter
- **Lint-staged** - Pre-commit hooks

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 16.x
- MongoDB >= 4.x
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository**

```bash
git clone https://github.com/hungdt31/NodeJS_F8.git
cd NodeJS_F8
```

1. **Cài đặt dependencies**

```bash
npm install
```

1. **Cấu hình môi trường**

```bash
# Tạo file .env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/f8_education_dev
```

4.**Khởi động MongoDB**

```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

5.**Compile SCSS**

```bash
npm run build-css
```

6.**Chạy ứng dụng**

```bash
# Development mode
npm start

# Hoặc
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`

## 📁 Cấu trúc dự án

```[]
f8/
├── src/
│   ├── app/
│   │   └── controllers/          # Controllers xử lý logic
│   │       ├── CourseController.js
│   │       ├── MeController.js
│   │       ├── NewsController.js
│   │       └── SiteController.js
│   ├── config/
│   │   └── db/                   # Cấu hình database
│   ├── models/                   # MongoDB models
│   │   └── Course.js
│   ├── public/                   # Static files
│   │   ├── css/
│   │   └── img/
│   ├── resources/
│   │   ├── scss/                 # SCSS source files
│   │   └── views/                # Handlebars templates
│   │       ├── layouts/
│   │       ├── partials/
│   │       └── courses/
│   ├── routes/                   # Express routes
│   ├── util/                     # Utility functions
│   └── index.js                  # Entry point
├── public/                       # Compiled static files
├── package.json
└── README.md
```

## 🎯 API Routes

### Pages

- `GET /` - Trang chủ
- `GET /news` - Trang tin tức
- `GET /search` - Trang tìm kiếm

### Courses

- `GET /courses` - Danh sách khóa học
- `GET /courses/:slug` - Chi tiết khóa học
- `GET /courses/create` - Form tạo khóa học
- `POST /courses/store` - Lưu khóa học mới
- `GET /courses/:id/edit` - Form sửa khóa học
- `PUT /courses/:id` - Cập nhật khóa học
- `DELETE /courses/:id` - Xóa khóa học

### Management

- `GET /me/stored/courses` - Khóa học đã lưu
- `GET /me/trash/courses` - Thùng rác

## 🔧 Scripts

```bash
# Khởi động development server
npm start

# Build CSS từ SCSS
npm run build-css

# Watch SCSS changes (nếu cài node-sass)
npm run watch

# Run tests
npm test
```

## 💾 Database Schema

### Course Model

```javascript
{
  name: String,        // Tên khóa học
  description: String, // Mô tả
  image: String,       // URL hình ảnh
  videoId: String,     // ID video YouTube
  slug: String,        // URL slug
  timestamps: true,    // createdAt, updatedAt
  deleted: Boolean     // Soft delete
}
```

## 🚀 Deployment

### Development

```bash
npm start
```

### Production

```bash
# Build assets
npm run build-css

# Start với PM2
pm2 start src/index.js --name "f8-education"
```

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phân phối dưới giấy phép ISC. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

- **Hùng Đỗ** - *Initial work* - [@hungdt31](https://github.com/hungdt31)

## 🙏 Lời cảm ơn

- [F8](https://fullstack.edu.vn/) - Nền tảng học lập trình
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Bootstrap](https://getbootstrap.com/) - CSS framework

---

⭐ **Star repo này nếu bạn thấy hữu ích!**
