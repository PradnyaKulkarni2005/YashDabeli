import React, { useState } from 'react';
import './PlaceOrder.css';

const menuItems = [
  { name: 'Small Dabeli', price: 10 },
  { name: 'Big Dabeli', price: 15 },
  { name: 'Cheese Dabeli', price: 25 },
  { name: 'Plain Sandwich', price: 40 },
  { name: 'Cheese Sandwich', price: 50 },
  { name: 'Chocolate Sandwich', price: 30 },
  { name: 'Sandwich Toast', price: 50 },
  { name: 'Cheese Sandwich Toast', price: 60 },
  { name: 'Sweet Corn Cheese Toast', price: 70 },
  { name: 'Club Sandwich Toast', price: 80 },
  { name: 'Chocolate Sandwich Toast', price: 40 },
  { name: 'Chilli Garlic Potato Nuggets (12 pcs)', price: 50 },
  { name: 'Aloo Tikki Burger', price: 45 },
  { name: 'Aloo Tikki Cheese Burger', price: 55 },
  { name: 'Plain Fries', price: 40 },
  { name: 'Masala Fries', price: 50 },
  { name: 'Veg Momos (5 pcs)', price: 50 },
  { name: 'Paneer Momos (5 pcs)', price: 65 },
  { name: 'Veg Pizza', price: 70 },
  { name: 'Cheese Burst Pizza', price: 80 },
  { name: 'Sweet Corn Pizza', price: 80 },
  { name: 'Mix Loaded Cheese Pizza', price: 100 },
  { name: 'Special Paneer Pizza', price: 120 },
  { name: 'Cold Coffee', price: 40 },
  { name: 'Oreo Milkshake', price: 60 },
  { name: 'Strawberry Milkshake', price: 50 },
  { name: 'Combo: Veg Pizza + Fries + Cold Drink', price: 125 },
  { name: 'Combo: Mix Loaded Pizza + Fries + Cold Drink', price: 155 },
  { name: 'Combo: Sweet Corn / Cheese Burst Pizza + Fries + Cold Drink', price: 135 },
  { name: 'Combo: Cheese Aloo Tikki Burger + Fries + Cold Drink', price: 109 },
  { name: 'Combo: Sandwich Toast + Fries + Cold Drink', price: 115 }
];

export default function PlaceOrder() {
  // cart: holds selected items with name, price, and quantity.
  const [cart, setCart] = useState([]);
  //formVisible: toggles between menu screen and order form
  const [formVisible, setFormVisible] = useState(false);
  // submitted: tracks if the order has been submitted
  const [submitted, setSubmitted] = useState(false);
  // customer: holds name and phone number for the order
  const [customer, setCustomer] = useState({ name: '', phone: '' });
// Adds item to cart.
// If item already exists, it increases the quantity.
  const addToCart = item => {
  const exists = cart.find(ci => ci.name === item.name);
  let newCart;
  if (exists) {
    newCart = cart.map(ci =>
      ci.name === item.name ? { ...ci, quantity: ci.quantity + 1 } : ci
    );
  } else {
    newCart = [...cart, { ...item, quantity: 1 }];
  }
  setCart(newCart);
  console.log("Updated cart:", newCart);
};

// Remove an item from the cart.

// Update quantity of a specific item.
  const removeFromCart = name => {
    setCart(cart.filter(item => item.name !== name));
  };

  const updateQuantity = (name, qty) => {
    setCart(cart.map(item =>
      item.name === name ? { ...item, quantity: parseInt(qty) } : item
    ));
  };
  // Calculates total price of all items in the cart.

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };
// Handles form submission to send order data to the backend.
// It sends the order details to the server and resets the cart and customer details on success.
  const handleSubmit = async e => {
    e.preventDefault();

    const orderData = {
      name: customer.name,
      phone: customer.phone,
      items: cart.map(i => ({ name: i.name, quantity: i.quantity })),
      total
    };

    try {
      const res = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      console.log('Order response:', res);

      if (res.ok) {
        setSubmitted(true);
        setCart([]);
        setCustomer({ name: '', phone: '' });
      } else {
        alert('Order failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };
// if submitted, show confirmation message.
  if (submitted) {
    return (
      <div className="order-confirmation">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you for your order. You'll receive a WhatsApp confirmation shortly.</p>
      </div>
    );
  }

  return (
    <div className="order-container">
      {/* Shows either:Menu grid + cart summary OR the user form */}
      {!formVisible ? (
        <>
          <h2 className="heading">🍴 Select Your Items</h2>
          <div className="menu-grid">
            {menuItems.map(item => (
              <div
                key={item.name}
                className="menu-card"
                onClick={() => addToCart(item)}
              >
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
          {Array.isArray(cart) && cart.some(item => item.quantity > 0) && (
            <div className="cart-box">
              <h3>🛒 Your Cart</h3>
              {cart.map(item => (
                <div key={item.name} className="cart-item">
                  <span>{item.name}</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.name, e.target.value)}
                  />
                  <button onClick={() => removeFromCart(item.name)}>❌</button>
                </div>
              ))}
              <p className="cart-total">Total: ₹{total}</p>
              <button className="next-button" onClick={() => setFormVisible(true)}>Next ➡️</button>
            </div>
          )}
        </>
      ) : (
        <div className="order-form-box">
          <h2>📝 Enter Your Details</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={customer.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={customer.phone}
              onChange={handleChange}
            />
            <div className="total-display">💰 Total: ₹{total}</div>
            <button type="submit">✅ Submit Order</button>
            <button type="button" className="back-button" onClick={() => setFormVisible(false)}>⬅️ Back</button>
          </form>
        </div>
      )}
    </div>
  );
}
