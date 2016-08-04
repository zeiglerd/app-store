const app = require('../../models/app');

module.exports = (express) => {

  const router = express.Router();

  router.post('/apps', (req, res) => {
    app.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/users/:id/apps', (req, res) => {
    app.find_all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
  
  router.get('/apps', (req, res) => {
    app.find_all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;

};
