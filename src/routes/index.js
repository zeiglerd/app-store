module.exports = (express) => {

  const router = express.Router();

  router.get('/', (req, res) => {

  });

  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  return router;

};
