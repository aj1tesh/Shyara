const express = require('express');
const router = express.Router();
const { clientLogin, adminLogin } = require('../controllers/authController');
const validate = require('../middleware/validate');

router.post('/client-login', validate(['email', 'password']), clientLogin);
router.post('/admin-login', validate(['password']), adminLogin);

module.exports = router; 