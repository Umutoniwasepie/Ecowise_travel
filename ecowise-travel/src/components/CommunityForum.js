import React, { useState, useEffect } from 'react';

const CommunityForum = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  // Dummy data for forum posts
  const dummyPosts = [
    { id: 1, title: 'First post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Second post', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Third post', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];

  // Simulate fetching forum posts from a backend server
  useEffect(() => {
    // In a real application, you would fetch data from an API
    setPosts(dummyPosts);
  }, [dummyPosts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Community Forum</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {/* Display existing forum posts */}
      <div style={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
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
  posts: {
    marginTop: '20px',
  },
  post: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default CommunityForum;
