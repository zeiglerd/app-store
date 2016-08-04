const port = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  console.log('Running on Port:', port);
});
