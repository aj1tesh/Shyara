const Client = require('../models/Client');

exports.getDashboard = async (req, res) => {
  const client = await Client.findById(req.client.id);
  if (!client) return res.status(404).json({ message: 'Client not found' });
  res.json({ name: client.name, email: client.email, services: client.services });
}; 