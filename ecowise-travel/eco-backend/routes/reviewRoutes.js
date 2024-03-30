// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const { Review } = require('../models/review'); // Import the Review model

// Route to create a new review
router.post('/', async (req, res) => {
  try {
    const { rating, comment, userId } = req.body;
    const newReview = await Review.create({
      rating,
      comment,
      userId
    });
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Failed to create review' });
  }
});

// Route to get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});

// Route to get a single review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ message: 'Failed to fetch review' });
  }
});

// Route to update a review by ID
router.put('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    await review.update(req.body);
    res.status(200).json(review);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ message: 'Failed to update review' });
  }
});

// Route to delete a review by ID
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    await review.destroy();
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ message: 'Failed to delete review' });
  }
});

module.exports = router;
