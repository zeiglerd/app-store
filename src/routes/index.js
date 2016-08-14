const utils = require('../lib/utilities');

module.exports = (express) => {
  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    const msg = 'Route does not exist';

    utils.debug(msg);

    res.status(404).json({
      developerMessage: msg,
    });
  });

  return router;
};
