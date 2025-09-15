const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Hello, World! 🚀');
});

// About route
router.get('/about', (req, res) => {
  res.send('This is my first API.');
});

// Time route
router.get('/time', (req, res) => {
  const now = new Date();
  res.send(`Server time is: ${now.toLocaleString()}`);
});

module.exports = router;
