const port = process.env.PORT || 3000;

const express = require('express');
const body_parser = require('body-parser');
const app = express();

app.user(bodyParser.json());
app.user(bodyParser.urlencoded({
  extended: true
}));

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  console.log('Running on Port:', port);
});
