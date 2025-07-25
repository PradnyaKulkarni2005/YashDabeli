import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './PlaceOrder.css';

const menuItems = [
  // 🥪 Sandwiches
  { name: 'Small Dabeli', price: 10, category: 'Sandwich', img: 'https://recipesblob.oetker.in/assets/9447029b80054ee49f3ac21841884874/1272x764/dabeli.webp' },
  { name: 'Big Dabeli', price: 15, category: 'Sandwich', img: 'https://rakskitchen.net/wp-content/uploads/2021/09/dabeli-featured.jpg' },
  { name: 'Cheese Dabeli', price: 25, category: 'Sandwich', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7w-kCVCa3EQK0f8hsYZVDOp2U8wXQwShg3g&s' },
  { name: 'Plain Sandwich', price: 40, category: 'Sandwich', img: 'https://zeesquare.ca/wp-content/uploads/2024/10/Vegetable-Sandwich.webp' },
  { name: 'Cheese Sandwich', price: 50, category: 'Sandwich', img: 'https://flavor-feed.com/wp-content/uploads/2024/02/Untitled-design-2024-02-26T102112.850.jpg' },
  { name: 'Chocolate Sandwich', price: 30, category: 'Sandwich', img: 'https://www.whiskaffair.com/wp-content/uploads/2021/05/Chocolate-Sandwich-2-3.jpg' },

  // 🍞 Toasts
  { name: 'Sandwich Toast', price: 50, category: 'Toast', img: 'https://cookingfromheart.com/wp-content/uploads/2020/05/Bombay-Masala-Toast-3-500x500.jpg' },
  { name: 'Cheese Sandwich Toast', price: 60, category: 'Toast', img: 'https://www.bhg.com/thmb/H6G2G-KzMaxmin4WJRYHZU4-oaQ=/1244x0/filters:no_upscale():strip_icc()/grilled-cheese-sandwiches-RU197054-0026ddec06634f3eb9b1a3649a114e3d.jpg' },
  { name: 'Sweet Corn Cheese Toast', price: 70, category: 'Toast', img: 'https://i.ytimg.com/vi/4NGERSWJGZo/maxresdefault.jpg' },
  { name: 'Club Sandwich Toast', price: 80, category: 'Toast', img: 'https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe.jpg' },
  { name: 'Chocolate Sandwich Toast', price: 40, category: 'Toast', img: 'https://www.whiskaffair.com/wp-content/uploads/2021/05/Chocolate-Sandwich-2-3.jpg' },

  // 🍔 Burgers
  { name: 'Aloo Tikki Burger', price: 45, category: 'Burger', img: 'https://res.cloudinary.com/deu26betq/image/upload/v1749492321/burger_mxqdxz.jpg' },
  { name: 'Aloo Tikki Cheese Burger', price: 55, category: 'Burger', img: 'https://res.cloudinary.com/deu26betq/image/upload/v1749492321/burger_mxqdxz.jpg' },

  // 🍟 Sides
  { name: 'Plain Fries', price: 40, category: 'Sides', img: 'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg' },
  { name: 'Masala Fries', price: 50, category: 'Sides', img: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/05/masala_french_fries-2.jpg' },
  { name: 'Chilli Garlic Potato Nuggets (12 pcs)', price: 50, category: 'Sides', img: 'https://i.ytimg.com/vi/4NGERSWJGZo/maxresdefault.jpg' },

  // 🥟 Momos
  { name: 'Veg Momos (5 pcs)', price: 50, category: 'Momos', img: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308737282/GZ/OP/DR/186484327/whatsapp-image-2023-05-17-at-06-08-14-2-.jpeg' },
  { name: 'Paneer Momos (5 pcs)', price: 65, category: 'Momos', img: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/373091379/FL/QA/RG/40546264/product-jpeg-500x500.jpg' },

  // 🍕 Pizza
  { name: 'Veg Pizza', price: 70, category: 'Pizza', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg' },
  { name: 'Cheese Burst Pizza', price: 80, category: 'Pizza', img: 'https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg' },
  { name: 'Sweet Corn Pizza', price: 80, category: 'Pizza', img: 'https://www.midwestliving.com/thmb/G3d5YP-pdlEOWdOGb7MW2FGOvTY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/101685028_sweet-corn-pizza-fbe5efe0081548c9b83ed8aa4a2b5887.jpg' },
  { name: 'Mix Loaded Cheese Pizza', price: 100, category: 'Pizza', img: 'https://thedessertedgirl.com/wp-content/uploads/2020/04/LoadedVeggiePizza1.jpg' },
  { name: 'Special Paneer Pizza', price: 120, category: 'Pizza', img: 'https://res.cloudinary.com/deu26betq/image/upload/v1749492358/pannerpizza_yb7g4r.jpg' },

  // 🥤 Cold Drinks
  { name: 'Cold Coffee', price: 40, category: 'Cold Drinks', img: 'https://res.cloudinary.com/deu26betq/image/upload/v1749492322/coldcoffee_yn3v8g.jpg' },
  { name: 'Oreo Milkshake', price: 60, category: 'Cold Drinks', img: 'https://res.cloudinary.com/deu26betq/image/upload/v1749492358/oreoshake_krxivj.jpg' },
  { name: 'Strawberry Milkshake', price: 50, category: 'Cold Drinks', img: 'https://images.ctfassets.net/0dkgxhks0leg/6eCUvdPuiee3crP01qJHSB/bfa91f662ef32d0f48700b61c95354e7/Strawberry_20milkshake.jpg' },

  // 🍽️ Combos
  { name: 'Combo: Veg Pizza + Fries + Cold Drink', price: 125, category: 'Combos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5tUrxt66ZmakT8fdDXW2KlpHl3eNsfTZcQ&s' },
  { name: 'Combo: Mix Loaded Pizza + Fries + Cold Drink', price: 155, category: 'Combos', img: 'https://vps029.manageserver.in/menu/wp-content/uploads/2024/10/download-2024-10-29T165857.029.jpeg' },
  { name: 'Combo: Sweet Corn / Cheese Burst Pizza + Fries + Cold Drink', price: 135, category: 'Combos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxJocF16S0MeXtjQqJu6ryD_bSq6P5w1_gg&s' },
  { name: 'Combo: Cheese Aloo Tikki Burger + Fries + Cold Drink', price: 109, category: 'Combos', img: 'https://b.zmtcdn.com/data/dish_photos/9d8/f0310cac68a0660f918c0f3253fe79d8.jpg' },
  { name: 'Combo: Sandwich Toast + Fries + Cold Drink', price: 115, category: 'Combos', img: 'https://i.pinimg.com/736x/29/3c/84/293c8434c14622fe43a7b1142a511ba4.jpg' }
];

export default function PlaceOrder() {
  const [cart, setCart] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [customer, setCustomer] = useState({ name: '', phone: '' });
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = item => {
    const exists = cart.find(ci => ci.name === item.name);
    let newCart;
    if (exists) {
      newCart = cart.map(ci =>
        ci.name === item.name ? { ...ci, quantity: ci.quantity + 1 } : ci
      );
    } else {
      newCart = [...cart, { ...item, quantity: 1 }];
      setSelectedItems(prev => [...prev, item.name]);
    }
    setCart(newCart);
  };

  const removeFromCart = name => {
    setCart(cart.filter(item => item.name !== name));
    setSelectedItems(selectedItems.filter(i => i !== name));
  };

  const updateQuantity = (name, qty) => {
    setCart(cart.map(item =>
      item.name === name ? { ...item, quantity: parseInt(qty) } : item
    ));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

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

      if (res.ok) {
        Swal.fire({
          title: '✅ Order Sent!',
          text: 'Notification sent to the owner. You’ll receive a WhatsApp confirmation soon.',
          icon: 'success',
          confirmButtonColor: '#ff9800',
        });
        setSubmitted(true);
        setCart([]);
        setCustomer({ name: '', phone: '' });
        setSelectedItems([]);
      } else {
        alert('Order failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  if (submitted) {
    return (
      <div className="order-confirmation">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you for your order. You'll receive a WhatsApp confirmation shortly.</p>
      </div>
    );
  }

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="order-container">
      {!formVisible ? (
        <>
          <h2 className="heading">🍴 Select Your Items</h2>

          <div className="category-tabs">
            {['All', 'Pizza', 'Sandwich', 'Toast', 'Burger', 'Sides', 'Momos', 'Cold Drinks', 'Combos'].map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map(item => (
              <div
                key={item.name}
                className={`menu-card ${selectedItems.includes(item.name) ? 'selected' : ''}`}
                onClick={() => addToCart(item)}
              >
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
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
