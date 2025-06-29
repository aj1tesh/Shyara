const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

exports.clientLogin = async (req, res) => {
  const { email, password } = req.body;
  const client = await Client.findOne({ email });
  if (!client) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, client.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: client._id, email: client.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, client: { name: client.name, email: client.email, services: client.services } });
};

exports.adminLogin = async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid admin password' });
  }
  const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
}; 