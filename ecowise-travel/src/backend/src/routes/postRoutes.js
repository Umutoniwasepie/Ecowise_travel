const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

// Routes for Post resource
router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPostById);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;

