const user = require('../../models/user');
const functions = require('../../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  /**
   * Display all Users
   */
  router.get('/users', (req, res) => {
    let status = 200;
    user.findAll( (data) => {
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
   * Create a User
   */
  router.post('/users', (req, res) => {
    let status = 200;
    if (
      req.body.email &&
      req.body.email.length > 0 &&
      req.body.name &&
      req.body.name.length > 0
    ) {
      user.create(req.body, (data) => {
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
        'developerMessage': 'User must have an email and name.',
        'status': status
      });
    }
  });

  /**
   * Delete User based upon id
   */
  router.delete('/users/:id', (req, res) => {
    let status = 200;
    if (functions.isNumber(req.params.id)) {
      user.destroy(req.params, (data) => {
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
        'status': status
      });
    }
  });

  /**
   * Display User based upon id
   */
  router.get('/users/:id', (req, res) => {
    let status = 200;
    if (functions.isNumber(req.params.id)) {
      user.find(req.params, (data) => {
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
        'status': status
      });
    }
  });

  /**
   * Update User based upon id
   */
  router.post('/users/:id', (req, res) => {
    let status = 200;
    if (
      req.body.email &&
      req.body.email.length > 0 &&
      req.body.name &&
      req.body.name.length > 0
    ) {
      if (functions.isNumber(req.params.id)) {
        req.body.id = req.params.id;
        user.update(req.body, (data) => {
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
          'status': status
        });
      }
    } else {
      status = 422;
      res.status(status).json({
        'developerMessage': 'User must have an email and name.',
        'status': status
      });
    }
  });

  return router;

};
