const express = require('express');
const router = express.Router();
const { addPotentialClient } = require('../controllers/contactController');
const validate = require('../middleware/validate');

router.post('/contact', validate(['name', 'email', 'contactInfo', 'message']), addPotentialClient);

module.exports = router; 