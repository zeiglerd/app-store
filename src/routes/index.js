// const utilTool = require('utility-tool');

module.exports = (express) => {
  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a 404 - NOT FOUND
    res.status(404).json({
      developerMessage: 'Route does not exist',
    });
  });

  return router;
};
