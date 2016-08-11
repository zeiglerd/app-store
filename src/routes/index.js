const utilities = require('../lib/utilities');

module.exports = (express) => {

  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    res.status(404).json({
      'developerMessage': 'Not a valid route'
    });
  });

  return router;

};
