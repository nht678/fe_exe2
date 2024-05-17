const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

console.log('setupProxy for development reactjs');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use('/api/ai-talk/', createProxyMiddleware({target: 'http://127.0.0.1:3001/'}));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
