module.exports = (express) => {

  const router = express.Router();

  // Require API routes, pass express
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  // Default route
  router.use((req, res) => {
    // Set a JSON response with a defined status
    let status = 404;
    res.status(status).json({
      'devMessage': 'Invalid route.',
      'status': status
    });
  });

  return router;

};
