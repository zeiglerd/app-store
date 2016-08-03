module.exports = (express) => {

  const router = express.Router();

  router.get('/', (req, res) => {
    var output = {
      'hello': 'world'
    };
    res.json(output);
  });

  router.get('/status', (req, res) => {
    var output = {
      'healthy': false
    };
    output.healthy = true;
    res.json(output);
  });

  return router;

};
