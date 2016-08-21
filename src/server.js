const express = require('express');
const bodyParser = require('body-parser');
const utilTool = require('utility-tool');

const app = express();fsdf
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Require routes, pass express
app.use('/', require('./routes')(express));

// Start server
const server = app.listen(port, () => utilTool.debug(`Running on port: ${port}`, null, 0));

// export server as module
module.exports = server;
