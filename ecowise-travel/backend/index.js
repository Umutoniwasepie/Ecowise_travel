const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Connect to MongoDB (replace with your connection string)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecowise-travel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser middleware
app.use(express.json());

// Add your API routes here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

