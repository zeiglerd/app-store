// import { express } from 'express';
// import { bodyParser } from 'body-parser';
// import { utils } from './lib/utilities';
const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./lib/utilities');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Require routes, pass express
app.use('/', require('./routes')(express));

// Start server
const server = app.listen(port, () => utils.debug('Running on port: ' + port, null, 0));

// export server as module
module.exports = server;
