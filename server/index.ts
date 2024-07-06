// server/index.ts

import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '../dist')));

// Serve your API routes or other server logic here
// Example API route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});