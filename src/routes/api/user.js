const user = require('../../models/user');
const utilities = require('../../lib/utilities');

module.exports = (express) => {

  const router = express.Router();

  router.get('/users', (req, res) => {
    utilities.debug('GET - /api/v1/users');
    // Find all users
    user.all( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'No users exist';
        // utilities.debug(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      // utilities.debug(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.post('/users', (req, res) => {
    utilities.debug('POST - /api/v1/users');
    // If user required data is set
    if (req.body.title && req.body.title.length > 0) {
      // Create user
      user.add(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          let status = 500,
              msg = 'The user could not be added';
          // utilities.debug(msg, null, status);
          res.status(status).json({
            'developerMessage': msg
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        let status = 500,
            msg = error;
        // utilities.debug(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The user must have a name';
      // utilities.debug(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  router.delete('/users/:id', (req, res) => {
    utilities.debug('DELETE - /api/v1/users/' + req.params.id);
    // Delete user by id
    user.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The user does not exist';
        // utilities.debug(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      // utilities.debug(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.get('/users/:id', (req, res) => {
    utilities.debug('GET - /api/v1/users/' + req.params.id);
    // Find user by id
    user.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The user does not exist';
        // utilities.debug(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      // utilities.debug(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.post('/users/:id', (req, res) => {
    utilities.debug('POST - /api/v1/users/' + req.params.id);
    // If user required data is set
    if (req.body.title && req.body.title.length > 0) {
      req.body.id = req.params.id;
      // Update user by id
      user.update(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Not Found
          let status = 404,
              msg = 'The user does not exist or could not be updated';
          // utilities.debug(msg, null, status);
          res.status(status).json({
            'developerMessage': msg
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        let status = 500,
            msg = error;
        // utilities.debug(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The user must have a name';
      // utilities.debug(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  return router;

};
