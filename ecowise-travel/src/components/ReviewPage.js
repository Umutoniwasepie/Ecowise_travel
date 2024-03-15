import React, { useState } from 'react';

const ReviewPage = () => {
  const [review, setReview] = useState({
    destination: '',
    rating: 0,
    comment: ''
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
      comment: ''
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Submit a Review</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
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
        <div style={styles.formGroup}>
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
        <div style={styles.formGroup}>
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
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
};

export default ReviewPage;
