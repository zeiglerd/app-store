const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.json({"healthy": true});
});

app.listen(port, () => {
  console.log('Our Server is Running on Port', port);
});
