const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Order = require('./models/Order');
const Review = require('./models/Review');
const twilio = require('twilio');

dotenv.config();
const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Vite dev
  'http://localhost:3000',
  'https://yash-dabeli.vercel.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// API to place an order
app.post('/api/order', async (req, res) => {
  try {
    const { name, phone, items, total } = req.body;
    const newOrder = new Order({ name, phone, items, total });
    console.log(`New order received: ${JSON.stringify(newOrder)}`);
    await newOrder.save();

    // Format items as string
    const itemList = items.map(i => `${i.name} x${i.quantity}`).join(', ');

    const message = `📦 New Order from ${name}\n📱 Phone: ${phone}\n🧾 Items: ${itemList}\n💰 Total: ₹${total}`;

    // Sending the message to the owner using Twilio
    const result = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.OWNER_WHATSAPP_NUMBER,
      body: message
    });
    console.log("WhatsApp message SID:", result.sid);
    console.log("Twilio message result:", result); 

    res.status(201).json({ message: 'Order placed & notification sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// POST a new review
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const review = new Review({ name, rating, comment });
    await review.save();
    res.status(201).json({ message: "Review submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all reviews according to createdAt
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
