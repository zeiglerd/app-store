import { express } from 'express';
import { bodyParser } from 'body-parser';
import { utilities } from './lib/utilities';

export default express;

const port = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Require routes, pass express
app.use('/', require('./routes')(express));

// Start server
const server = app.listen(port, () => {
  // console.log('Running on Port:', port);
  utilities.debug('Running on port: ' + port);
});

module.exports = server;
