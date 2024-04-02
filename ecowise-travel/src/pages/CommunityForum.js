import React, { useState, useEffect } from 'react';
import './Communityforum.css';

const CommunityForum = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  // Dummy data for forum posts
  useEffect(() => {
    const dummyPosts = [
      {
        id: 1,
        title: 'Incredible Wildlife Encounters in Costa Rica!',
        content:
          "Just got back from Costa Rica, and it was amazing! I spent most of my time hiking through rainforests and spotting incredible wildlife – monkeys, sloths, toucans, you name it!  \n\nSustainability is really important to me, so I stayed in an eco-lodge and participated in some conservation efforts. It felt great to travel responsibly and experience the beauty of nature. \n\nAnyone else been to Costa Rica? What were your favorite experiences? Let's chat about wildlife conservation, sustainable travel tips, and unforgettable adventures in the tropics!"
      },
      {
        id: 2,
        title: 'Inspired by Sustainable Practices in Scandinavia!',
        content:
          "Hey everyone!  Just returned from a trip to Norway and Sweden, and I'm so impressed by their commitment to sustainability.  From eco-friendly hotels and restaurants to using renewable energy, Scandinavia is a real leader in responsible tourism. \n\nI saw some amazing things – glaciers, fjords, charming towns – but what truly stuck with me was the focus on environmental responsibility. \n\nAnyone else have experience traveling sustainably in Scandinavia?  What eco-friendly practices did you encounter?  Let's share tips and ideas for minimizing our environmental impact while exploring beautiful places!"
      },
    ];
    setPosts(dummyPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="community-forum">
      <header className="forum-header">
        <h1 className="forum-title">Ecowise Travel Community Forum</h1>
        <p className="forum-description">Share your sustainable travel experiences, ask questions, and get inspired by fellow eco-conscious travelers! </p>
      </header>
      <div className="forum-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Share your travel story title..."
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
          <button type="submit">Start a Discussion</button>
        </form>
        {/* Display existing forum posts */}
        <section className="forum-posts">
          <h2>Recent Discussions</h2>
          {posts.map((post) => (
            <article key={post.id} className="forum-post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CommunityForum;
