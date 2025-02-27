const request = require('supertest');
const express = require('express');
const userRoutes = require('../src/routes/user_routes');
const errorHandler = require('../src/middlewares/error_handle');

const app = express();
app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use(errorHandler); // Middleware xử lý lỗi chung

describe('🧪 UserController - Login API', () => {
  test('✅ Đăng nhập thành công', async () => {
    const response = await request(app)
      .post('/api/v1/user/login')
      .send({ username: 'htmn', password: '1' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', '✅ Đăng nhập thành công');
  });

  test('❌ Thiếu username hoặc password', async () => {
    const response = await request(app)
      .post('/api/v1/user/login')
      .send({ username: '' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Vui lòng nhập username và password');
  });

  test('❌ User không tồn tại', async () => {
    const response = await request(app)
      .post('/api/v1/user/login')
      .send({ username: 'user_not_exist', password: '123456' });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'User không tồn tại');
  });

  test('❌ Sai mật khẩu', async () => {
    const response = await request(app)
      .post('/api/v1/user/login')
      .send({ username: 'htmn', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error', 'Mật khẩu không chính xác');
  });
});