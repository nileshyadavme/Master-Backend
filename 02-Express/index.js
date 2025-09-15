const express = require('express');
const app = express();

// Import routes
const routes = require('./routes/routes');

// Use routes
app.use('/', routes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
