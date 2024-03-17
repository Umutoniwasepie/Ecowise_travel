const Post = require('../models/Post');

const PostController = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a post by ID
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new post
  createPost: async (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      // Add other post properties here as needed
    });

    try {
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a post by ID
  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedPost) {
        res.json(updatedPost);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a post by ID
  deletePost: async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (deletedPost) {
        res.json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = PostController;

