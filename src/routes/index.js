const utilities = require('../lib/utilities');

module.exports = (express) => {

  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    let msg = 'Route does not exist';
    utilities.debug(msg);
    res.status(404).json({
      'developerMessage': msg
    });
  });

  return router;

};
