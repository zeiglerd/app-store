const app = require('../../models/app');

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = (express) => {

  const router = express.Router();

  /**
   * Display all Apps
   */
  router.get('/apps', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    app.findAll( (data) => {
      if (data && data.length > 0) {
        out.data = data;
        res.status(out.status).json(out);
      } else {
        out.status = 404;
        out.success = false;
        res.status(out.status).json(out);
      }
    }, (error) => {
      out.devMessage = error;
      out.status = 500;
      out.success = false;
      res.status(out.status).json(out);
    });
  });

  /**
   * Create an App
   */
  router.post('/apps', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    // Can check here if all fields are met
    app.create(req.body, (data) => {
      if (data/* && data.length > 0*/) {
        out.data = data;
        res.status(out.status).json(out);
      } else {
        out.status = 500;
        out.success = false;
        res.status(out.status).json(out);
      }
    }, (error) => {
      out.devMessage = error;
      out.status = 500;
      out.success = false;
      res.status(out.status).json(out);
    });
  });

  /**
   * Delete App based upon id
   */
  router.delete('/apps/:id', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    if (isNumber(req.params.id)) {
      app.destroy(req.params, (data) => {
          if (data/* && data.length > 0*/) {
            out.data = data;
            res.status(out.status).json(out);
          } else {
            out.status = 500;
            out.success = false;
            res.status(out.status).json(out);
          }
      }, (error) => {
        out.devMessage = error;
        out.status = 500;
        out.success = false;
        res.status(out.status).json(out);
      });
    } else {
      out.status = 422;
      out.success = false;
      res.status(out.status).json(out);
    }
  });

  /**
   * Display App based upon id
   */
  router.get('/apps/:id', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    if (isNumber(req.params.id)) {
      app.find(req.params, (data) => {
          if (data/* && data.length > 0*/) {
            out.data = data;
            res.status(out.status).json(out);
          } else {
            out.status = 404;
            out.success = false;
            res.status(out.status).json(out);
          }
      }, (error) => {
        out.devMessage = error;
        out.status = 500;
        out.success = false;
        res.status(out.status).json(out);
      });
    } else {
      out.status = 422;
      out.success = false;
      res.status(out.status).json(out);
    }
  });

  /**
   * Update App based upon id
   */
  router.post('/apps/:id', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    // Can check here if all fields are met
    if (isNumber(req.params.id)) {
      req.body.id = req.params.id;
      app.update(req.body, (data) => {
          if (data/* && data.length > 0*/) {
            out.data = data;
            res.status(out.status).json(out);
          } else {
            out.status = 404;
            out.success = false;
            res.status(out.status).json(out);
          }
      }, (error) => {
        out.devMessage = error;
        out.status = 500;
        out.success = false;
        res.status(out.status).json(out);
      });
    } else {
      out.status = 422;
      out.success = false;
      res.status(out.status).json(out);
    }
  });

  /**
   * Display all App from specific userId
   */
  router.get('/users/:id/apps', (req, res) => {
    let out = {
      'data': [],
      'devMessage': '',
      'message': '',
      'status': 200,
      'success': true
    };
    if (isNumber(req.params.id)) {
      app.find(req.params, (data) => {
          if (data/* && data.length > 0*/) {
            out.data = data;
            res.status(out.status).json(out);
          } else {
            out.status = 404;
            out.success = false;
            res.status(out.status).json(out);
          }
      }, (error) => {
        out.devMessage = error;
        out.status = 500;
        out.success = false;
        res.status(out.status).json(out);
      });
    } else {
      out.status = 422;
      out.success = false;
      res.status(out.status).json(out);
    }
  });

  return router;

};
