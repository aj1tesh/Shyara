const mongoose = require('mongoose');

const potentialClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactInfo: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('PotentialClient', potentialClientSchema); 