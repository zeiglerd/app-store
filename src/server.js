const express = require('express');
const bodyParser = require('body-parser');
const utilTool = require('utility-tool');

// Intialize this app as a new express app.
const app = express();

// Set port to Environment Variable if set, else 3000.
const port = process.env.PORT || 3000;

// Allow key/value pairs of JSON to be of any type.
app.use(bodyParser.urlencoded({ extended: true }));

// Allow our script to read key/value pairs of JSON.
app.use(bodyParser.json());

// Require routes, pass express
app.use('/', require('./routes')(express));

// Initialize this server, listening on a defined port.
const server = app.listen(port, () => {
  utilTool.debug(`Running on port: ${port}`, null, 0);
});

// Export the server as a Node module.
module.exports = server;
