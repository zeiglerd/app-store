// const utilTool = require('utility-tool');

module.exports = (express) => {
  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    const msg = 'Route does not exist';

    console.log(msg);

    res.status(404).json({
      developerMessage: msg,
    });
  });

  return router;
};
