const port = 3000;

const express = require('express');
const body_parser = require('body-parser');
const app = express();

app.use('/api/v1', require('../routes/api.js')(express));

const server = app.listen(port, () => {
  console.log('Running on Port:', port);
});

module.exports = server;
