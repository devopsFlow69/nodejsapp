const express = require('express');

// Create an Express application
const app = express();

// Define a route for the health check endpoint
app.get('/health', (req, res) => {
  res.send('OK');
});

// Define a default route
app.get('/', (req, res) => {
  res.send('Hello, World! 4');
});

// Start the server
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
