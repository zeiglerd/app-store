const app = require('../../models/app');
const functions = require('../../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  /**
   * Display all Apps
   */
  router.get('/apps', (req, res) => {
    let status = 200;
    app.findAll( (data) => {
      if (data && data.length > 0) {
        res.status(status).json({
          'data': data,
          'status': status
        });
      } else {
        status = 404;
        res.status(status).json({
          'status': status
        });
      }
    }, (error) => {
      status = 500;
      res.status(status).json({
        'developerMessage': error,
        'status': status
      });
    });
  });

  /**
   * Create an App
   */
  router.post('/apps', (req, res) => {
    let status = 200;
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      app.create(req.body, (data) => {
        if (data) {
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          status = 500;
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        status = 500;
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      status = 422;
      res.status(status).json({
        'developerMessage': 'App must have a name.',
        'status': status
      });
    }
  });

  /**
   * Delete App based upon id
   */
  router.delete('/apps/:id', (req, res) => {
    let status = 200;
    if (functions.isNumber(req.params.id)) {
      app.destroy(req.params, (data) => {
        if (data) {
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          status = 404;
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        status = 500;
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      status = 422;
      res.status(status).json({
        'developerMessage': 'Id must be a number.',
        'status': status
      });
    }
  });

  /**
   * Display App based upon id
   */
  router.get('/apps/:id', (req, res) => {
    let status = 200;
    if (functions.isNumber(req.params.id)) {
      app.find(req.params, (data) => {
        if (data) {
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          status = 404;
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        status = 500;
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      status = 422;
      res.status(status).json({
        'developerMessage': 'Id must be a number.',
        'status': status
      });
    }
  });

  /**
   * Update App based upon id
   */
  router.post('/apps/:id', (req, res) => {
    let status = 200;
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      if (functions.isNumber(req.params.id)) {
        req.body.id = req.params.id;
        app.update(req.body, (data) => {
          if (data) {
            res.status(status).json({
              'data': data,
              'status': status
            });
          } else {
            status = 404;
            res.status(status).json({
              'status': status
            });
          }
        }, (error) => {
          status = 500;
          res.status(status).json({
            'developerMessage': error,
            'status': status
          });
        });
      } else {
        status = 422;
        res.status(status).json({
          'developerMessage': 'Id must be a number.',
          'status': status
        });
      }
    } else {
      status = 422;
      res.status(status).json({
        'developerMessage': 'App must have a name.',
        'status': status
      });
    }
  });

  /**
   * Display all App from specific userId
   */
  // router.get('/apps/:id/apps', (req, res) => {
  //   let status = 200;
  //   if (functions.isNumber(req.params.id)) {
  //     app.find(req.params, (data) => {
  //       if (data/* && data.length > 0*/) {
  //         res.status(status).json({
  //           'data': data,
  //           'status': status
  //         });
  //       } else {
  //         status = 404;
  //         res.status(status).json({
  //           'status': status
  //         });
  //       }
  //     }, (error) => {
  //       status = 500;
  //       res.status(status).json({
  //         'developerMessage': error,
  //         'status': status
  //       });
  //     });
  //   } else {
  //     status = 422;
  //     res.status(status).json({
  //       'status': status
  //     });
  //   }
  // });

  return router;

};
