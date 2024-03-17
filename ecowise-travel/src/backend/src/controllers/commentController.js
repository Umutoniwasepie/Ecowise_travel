const Comment = require('../models/Comment');

const CommentController = {
  // Get all comments
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a comment by ID
  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new comment
  createComment: async (req, res) => {
    const newComment = new Comment({
      content: req.body.content,
      // Add other comment properties here as needed
    });

    try {
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a comment by ID
  updateComment: async (req, res) => {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedComment) {
        res.json(updatedComment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a comment by ID
  deleteComment: async (req, res) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.id);
      if (deletedComment) {
        res.json({ message: 'Comment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = CommentController;

