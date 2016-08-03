// Define constants
const port = 3000;

const express = require('express');
const body_parser = require('body-parser');
const app = express();

// Have the server use the api.js file for routes, pass express
app.use('/api/v1', require('../routes/api.js')(express));

// Init server on port
const server = app.listen(port, () => {
  console.log('Running on Port:', port);
});

// Export server as module
module.exports = server;
