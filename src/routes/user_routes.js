const express = require('express');
const UserController = require('../controllers/user_controller');
const router = express.Router();

router.post('/login', UserController.login);


module.exports = router;