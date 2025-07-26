# 🥪 Yash Dabeli - Online Cafe Ordering Website

Welcome to **Yash Dabeli**, a simple and elegant online ordering platform for your café or fast food business. Customers can browse the menu, place orders, and leave reviews, while the admin gets notified instantly via WhatsApp using Twilio integration.

---

## 🔗 Live Demo

- **Vercel**: ([https://yash-dabeli.vercel.app)](https://yash-dabeli.vercel.app)

---

## 🛠 Tech Stack

### Frontend:
- React
- Vite
- CSS (Responsive and Mobile-friendly)
- Star Rating System for Reviews

### Backend:
- Node.js
- Express
- MongoDB Atlas (Mongoose)
- Twilio API (WhatsApp Notifications)
- Deployed on: [[Render](https://render.com)](https://cafebackend-7sx1.onrender.com)

---

## 📦 Features

- 🧾 **Place Orders** with name, phone number, and selected items.
- 🌟 **Customer Reviews** with star ratings and comments.
- 📲 **Instant WhatsApp Notifications** to café owner when an order is placed.
- 🧑‍🍳 View all **previous customer reviews** before adding your own.
- 📱 **Responsive UI** for mobile and desktop views.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PradnyaKulkarni2005/YashDabeli.git
cd cafe
```
## 2. Frontend Setup
```bash
npm install
````
## Create a .env file:
### VITE_BACKEND_URL=https://your-backend-url.onrender.com
### Start the frontend locally:
```bash
npm run dev
```
### 3. Backend Setup
```bash
cd backend
npm install
```
### Create a .env file in the backend root:
```bash
PORT=5000
CONNECTION_STRING=your_mongodb_atlas_connection_string
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
OWNER_WHATSAPP_NUMBER=whatsapp:+919xxxxxxxxx
```

### Start the backend locally:
```bash
node server.js
```

