const functions = require('../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    functions.debug('test', {});
    res.status(404).json({
      'developerMessage': 'Invalid route.'
    });
  });

  return router;

};
