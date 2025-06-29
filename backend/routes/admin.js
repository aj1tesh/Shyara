const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const { getDashboard, getRequests, approvePotentialClient } = require('../controllers/adminController');

router.get('/dashboard', adminAuth, getDashboard);
router.get('/requests', adminAuth, getRequests);
router.post('/approve/:id', adminAuth, approvePotentialClient);

module.exports = router; 