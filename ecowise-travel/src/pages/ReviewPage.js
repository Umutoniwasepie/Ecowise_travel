import React, { useState } from 'react';
import './Reviewpage.css';

const ReviewPage = () => {
  const [review, setReview] = useState({
    destination: '',
    rating: 0,
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send review data to backend)
    console.log('Review submitted:', review);
    // Optionally, reset form fields after submission
    setReview({
      destination: '',
      rating: 0,
      comment: '',
    });
  };

  return (
    <div className="review-page">
      <header className="review-header">
        <h1 className="review-title">Share Your Travel Experience</h1>
        <p className="review-description">
          Let others know about your recent trip by submitting a review. Help fellow
          travelers make informed decisions by sharing your honest feedback
          about your destination.
        </p>
      </header>
      <div className="review-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={review.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={review.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={review.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
                
         <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions or feedback? Feel free to reach out!</p>
        <p><Link to="/">Go back to homepage to fill the contact form.</Link></p>
      </section>
    </div>
  );
};

export default ReviewPage;
