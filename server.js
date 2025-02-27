require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');  // Import routes
const errorHandler = require('./src/middlewares/error_handle'); 

const app = express();
app.use(cors());
app.use(express.json());

// Sử dụng route /users
app.use('/api', routes);

// Middleware xử lý lỗi chung
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
