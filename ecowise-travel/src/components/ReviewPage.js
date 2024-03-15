import React from 'react';

const ReviewPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Review Page</h1>
      {/* Add review page content here */}
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
};

export default ReviewPage;

