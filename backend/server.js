require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });
console.log('Resolved MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Define `app` early
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes (can uncomment if working)
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');

app.use('/auth', authRoutes);
app.use('/client', clientRoutes);
app.use('/admin', adminRoutes);
app.use('/', contactRoutes);

// Connect and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected!');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});
