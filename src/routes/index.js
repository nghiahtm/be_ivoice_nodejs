const express = require('express');
const userRoute = require('./user_routes');

const router = express.Router();

// Tất cả API của v1 sẽ vào đây
router.use('/v1/user', userRoute);

module.exports = router;
