const user = require('../../models/user');
const utilities = require('../../utilities');

module.exports = (express) => {

  const router = express.Router();

  router.get('/users', (req, res) => {
    // Find all users
    user.all( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'No users exist';
        utilities.log(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.post('/users', (req, res) => {
    // If user required data is set
    if (req.body.title && req.body.title.length > 0) {
      // Create user
      user.add(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.status(200).json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          let status = 500,
              msg = 'The user could not be added';
          utilities.log(msg, null, status);
          res.status(status).json(msg);
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        let status = 500,
            msg = error;
        utilities.log(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The user must have a name';
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  router.delete('/users/:id', (req, res) => {
    // Delete user by id
    user.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The user does not exist';
        utilities.log(msg, null, status);
        res.status(status).json(msg);
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.get('/users/:id', (req, res) => {
    // Find user by id
    user.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The user does not exist';
        utilities.log(msg, null, status);
        res.status(status).json(msg);
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      let status = 500,
          msg = error;
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    });
  });

  router.post('/users/:id', (req, res) => {
    // If user required data is set
    if (req.body.title && req.body.title.length > 0) {
      req.body.id = req.params.id;
      // Update user by id
      user.update(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.status(200).json(data);
        } else {
          // Respond with JSON, status Not Found
          let status = 404,
              msg = 'The user does not exist or could not be updated';
          utilities.log(msg, null, status);
          res.status(status).json(msg);
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        let status = 500,
            msg = error;
        utilities.log(msg, null, status);
        res.status(status).json({
          'developerMessage': msg
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The user must have a name';
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  return router;

};
