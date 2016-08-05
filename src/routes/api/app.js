const app = require('../../models/app');

module.exports = (express) => {

  const router = express.Router();

  router.post('/apps', (req, res) => {
    app.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {

      if (results) {
        res.status(201).json(data);
      }
      res.status(404).json(data);
    });
  });

  router.get('/apps/:id', (req, res) => {

    if ( ! req.params.id) {
    let status = 404;
    res.status(status).json({
      'devMessage': data,
      'status': status
    });
    }

    app.find(req.params, (err) => {
      res.status(500).json(err);
    }, (data) => {



    });

  });

  router.get('/users/:id/apps', (req, res) => {
    app.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/apps', (req, res) => {
    app.findAll((err) => {
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
