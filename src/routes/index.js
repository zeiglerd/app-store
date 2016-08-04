module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    
  });

  router.use('/api/', require('./api/user')(express));

  return router;
};
