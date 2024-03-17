const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  // Add other fields as needed
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

