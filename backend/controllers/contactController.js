const PotentialClient = require('../models/PotentialClient');

exports.addPotentialClient = async (req, res) => {
  const { name, email, contactInfo, message } = req.body;
  const potential = new PotentialClient({ name, email, contactInfo, message });
  await potential.save();
  res.status(201).json({ message: 'Potential client added' });
}; 