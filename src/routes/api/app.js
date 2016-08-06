const app = require('../../models/app');
const functions = require('../../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  router.get('/apps', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // Find all apps
    app.findAll( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON
        res.status(status).json({
          'data': data,
          'status': status
        });
      } else {
        // Change status to Not Found
        status = 404;
        // Respond with JSON
        res.status(status).json({
          'status': status
        });
      }
    }, (error) => {
      // Change status to Internal Server Error
      status = 500;
      // Respond with JSON
      res.status(status).json({
        'developerMessage': error,
        'status': status
      });
    });
  });

  router.post('/apps', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If app required data is set
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      // Create app
      app.create(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          // Change status to Internal Server Error
          status = 500;
          // Respond with JSON
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        // Change status to Internal Server Error
        status = 500;
        // Respond with JSON
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      // Change status to Unprocessable Entity
      status = 422;
      // Respond with JSON
      res.status(status).json({
        'developerMessage': 'App must have a name.',
        'status': status
      });
    }
  });

  router.delete('/apps/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If id is a number
    if (functions.isNumber(req.params.id)) {
      // Delete app by id
      app.destroy(req.params, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          // Change status to Not Found
          status = 404;
          // Respond with JSON
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        // Change status to Internal Server Error
        status = 500;
        // Respond with JSON
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      // Change status to Unprocessable Entity
      status = 422;
      // Respond with JSON
      res.status(status).json({
        'developerMessage': 'Id must be a number.',
        'status': status
      });
    }
  });

  router.get('/apps/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If id is a number
    if (functions.isNumber(req.params.id)) {
      // Find app by id
      app.find(req.params, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          // Change status to Not Found
          status = 404;
          // Respond with JSON
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        // Change status to Internal Server Error
        status = 500;
        // Respond with JSON
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      // Change status to Unprocessable Entity
      status = 422;
      // Respond with JSON
      res.status(status).json({
        'developerMessage': 'Id must be a number.',
        'status': status
      });
    }
  });

  router.post('/apps/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If app required data is set
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      // If id is a number
      if (functions.isNumber(req.params.id)) {
        req.body.id = req.params.id;
        // Update app by id
        app.update(req.body, (data) => {
          // If data exists
          if (data) {
            // Respond with JSON
            res.status(status).json({
              'data': data,
              'status': status
            });
          } else {
            // Change status to Not Found
            status = 404;
            // Respond with JSON
            res.status(status).json({
              'status': status
            });
          }
        }, (error) => {
          // Change status to Internal Server Error
          status = 500;
          // Respond with JSON
          res.status(status).json({
            'developerMessage': error,
            'status': status
          });
        });
      } else {
        // Change status to Unprocessable Entity
        status = 422;
        // Respond with JSON
        res.status(status).json({
          'developerMessage': 'Id must be a number.',
          'status': status
        });
      }
    } else {
      // Change status to Unprocessable Entity
      status = 422;
      // Respond with JSON
      res.status(status).json({
        'developerMessage': 'App must have a name.',
        'status': status
      });
    }
  });

  router.get('/apps/:id/apps', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If id is a number
    if (functions.isNumber(req.params.id)) {
      // Find all apps for a userId
      app.find(req.params, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON
          res.status(status).json({
            'data': data,
            'status': status
          });
        } else {
          // Change status to Not Found
          status = 404;
          // Respond with JSON
          res.status(status).json({
            'status': status
          });
        }
      }, (error) => {
        // Change status to Internal Server Error
        status = 500;
        // Respond with JSON
        res.status(status).json({
          'developerMessage': error,
          'status': status
        });
      });
    } else {
      // Change status to Unprocessable Entity
      status = 422;
      // Respond with JSON
      res.status(status).json({
        'status': status
      });
    }
  });

  return router;

};
