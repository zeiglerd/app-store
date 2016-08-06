const user = require('../../models/user');
const functions = require('../../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  router.get('/users', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // Find all users
    user.findAll( (data) => {
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

  router.post('/users', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If user required data is set
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      // Create user
      user.create(req.body, (data) => {
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
        'developerMessage': 'user must have a name.',
        'status': status
      });
    }
  });

  // Find user by id
  router.delete('/users/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If id is a number
    if (functions.isNumber(req.params.id)) {
      user.destroy(req.params, (data) => {
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

  // Display user by id
  router.get('/users/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If id is a number
    if (functions.isNumber(req.params.id)) {
      user.find(req.params, (data) => {
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

  // Update user by id
  router.post('/users/:id', (req, res) => {
    // Status is a HTTP response code, default OK
    let status = 200;
    // If user required data is set
    if (
      req.body.title &&
      req.body.title.length > 0
    ) {
      // If id is a number
      if (functions.isNumber(req.params.id)) {
        req.body.id = req.params.id;
        user.update(req.body, (data) => {
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
        'developerMessage': 'user must have a name.',
        'status': status
      });
    }
  });

  return router;

};
