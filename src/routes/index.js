const utilities = require('../lib/utilities');

module.exports = (express) => {

  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    let status = 404,
        developerMessage = 'Not a valid route';
    // utilities.debug(developerMessage, null, status);
    res.status(status).json({
      'developerMessage': developerMessage
    });
  });

  return router;

};
