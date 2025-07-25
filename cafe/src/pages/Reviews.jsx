import React, { useEffect, useState } from 'react';
import './Reviews.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/reviews')
      .then(res => res.json())
      .then(setReviews);
  }, []);

  const handleStarClick = (star) => {
    setForm({ ...form, rating: star });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.rating === 0) return alert("Please select a rating.");
    await fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', rating: 0, comment: '' });
    const updated = await fetch('http://localhost:5000/api/reviews').then(res => res.json());
    setReviews(updated);
  };

  return (
    <div className="review-section">
      <h2>⭐ Customer Reviews</h2>
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

      <div className="reviews-list">
        {reviews.map((r, i) => (
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
        ))}
      </div>
    </div>
  );
}
