const app = require('../../models/app');
const user = require('../../models/user');

module.exports = (express) => {

  const router = express.Router();

  router.get('/', (req, res) => {
    user.findAll((err) => {
      let status = 500;
      res.status(status).json({
        'devMessage': err,
        'status': status
      });
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.post('/', (req, res) => {
    user.create(req.body, (err) => {
      let status = 500;
      res.status(status).json({
        'devMessage': err,
        'status': status
      });
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.delete('/:id', (req, res) => {
    user.destroy(req.params, (err) => {
      let status = 500;
      res.status(status).json({
        'devMessage': err,
        'status': status
      });
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/:id', (req, res) => {
    user.find(req.params, (err) => {
      let status = 500;
      res.status(status).json({
        'devMessage': err,
        'status': status
      });
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.post('/:id', (req, res) => {
    user.update(req.params, (err) => {
      let status = 500;
      res.status(status).json({
        'devMessage': err,
        'status': status
      });
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;

};
