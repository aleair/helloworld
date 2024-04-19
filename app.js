// Name:        app.js
// Description: simple node.js and express app

// Import the express module
const express = require('express');

// Initialize express by instantiating it and assign a variable 
// called 'app' to it
const app = express();

// Root Route
app.get('/', (req, res) => {
  console.log("in app.js. The root route has been hit ...");
  res.status(200);
  res.send('Hello World - from my new Geog 576 node.js express app!');
});

// New Route: About Page
app.get('/about', (req, res) => {
  console.log("in app.js. The /about route has been hit ...");
  res.status(200);
  res.send('About Page');
});

// App listens on Port 8000 for requests
app.listen(8000, (err) => {
  if (err) {
    console.log("Error starting server. Msg: " + err);
  } else {
    console.log('Node.js and Express app listening on port 8000!');
  }
});
