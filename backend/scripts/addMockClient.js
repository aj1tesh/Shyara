require('dotenv').config({ path: require('path').resolve(__dirname, '../..', '.env') });
console.log('Resolved MONGODB_URI:', process.env.MONGODB_URI);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Client = require('../models/Client');

async function addMockClient() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const password = await bcrypt.hash('test1234', 10);

  const client = new Client({
    name: 'Test Client',
    email: 'testclient@example.com',
    password,
    services: [
      { name: 'Social Media Management', price: 10500 },
      { name: 'Website Development', price: 45000 }
    ]
  });

  await client.save();
  console.log('Mock client added!');
  mongoose.disconnect();
}

addMockClient().catch(err => {
  console.error(err);
  mongoose.disconnect();
}); 