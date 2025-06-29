const Client = require('../models/Client');
const PotentialClient = require('../models/PotentialClient');
const bcrypt = require('bcryptjs');

exports.getDashboard = async (req, res) => {
  const clients = await Client.find({}, '-password');
  res.json(clients);
};

exports.getRequests = async (req, res) => {
  const requests = await PotentialClient.find();
  res.json(requests);
};

exports.approvePotentialClient = async (req, res) => {
  const { id } = req.params;
  const potential = await PotentialClient.findById(id);
  if (!potential) return res.status(404).json({ message: 'Potential client not found' });

  // Create client with a random password (or you can send an invite email)
  const hashed = await bcrypt.hash('changeme123', 10);
  const client = new Client({
    name: potential.name,
    email: potential.email,
    password: hashed,
    services: []
  });
  await client.save();
  await PotentialClient.findByIdAndDelete(id);
  res.json({ message: 'Client approved and added', client });
}; 