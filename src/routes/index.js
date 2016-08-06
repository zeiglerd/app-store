module.exports = (express) => {

  const router = express.Router();

  // router.get('/', (req, res) => {
  //
  // });

  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  router.use((req, res) => {
    let status = 404;
    res.status(status).json({
      'devMessage': 'Invalid route.',
      'status': status
    });
  });

  return router;

};
