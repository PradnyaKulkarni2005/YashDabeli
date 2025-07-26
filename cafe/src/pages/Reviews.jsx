import React, { useEffect, useState } from 'react';
import './Reviews.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/reviews`)
      .then(res => res.json())
      .then(setReviews);
  }, []);

  const handleStarClick = (star) => {
    setForm({ ...form, rating: star });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.rating === 0) return alert("Please select a rating.");

    await fetch(`${backendUrl}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', rating: 0, comment: '' });
    setFormVisible(false);

    const updated = await fetch(`${backendUrl}/api/reviews`).then(res => res.json());
    setReviews(updated);
  };

  return (
    <div className="review-section">
      <h2>⭐ Customer Reviews</h2>

      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to write one!</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <strong>{r.name}</strong>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n <= r.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
              </div>
              <p>{r.comment}</p>
              <small>{new Date(r.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      {!formVisible ? (
        <div className="add-review-button-container">
          <button onClick={() => setFormVisible(true)} className="add-review-btn">
            ✍️ Add Your Review
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={n <= form.rating ? 'star filled' : 'star'}
                onClick={() => handleStarClick(n)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            placeholder="Write your review"
            required
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
}
