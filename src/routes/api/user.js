// import { user } from '../../models/user';
// import { utils } from '../../lib/utilities';
const user = require('../../models/user');
const utils = require('../../lib/utilities');

module.exports = (express) => {
  const router = express.Router();

  router.get('/users', (req, res) => {
    utils.debug('GET - /api/v1/users', null, 0);
    // Find all users
    user.all((data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'No users exist',
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    });
  });

  router.post('/users', (req, res) => {
    utils.debug('POST - /api/v1/users', null, 0);
    // If user required data is set
    if (req.body.name && req.body.name.length > 0) {
      // Create user
      user.add(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          res.status(500).json({
            developerMessage: 'The user could not be added',
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          developerMessage: error,
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        developerMessage: 'The user must have a name',
      });
    }
  });

  router.delete('/users/:id', (req, res) => {
    utils.debug('DELETE - /api/v1/users/' + req.params.id, null, 0);
    // Delete user by id
    user.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'The user does not exist',
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    });
  });

  router.get('/users/:id', (req, res) => {
    utils.debug('GET - /api/v1/users/' + req.params.id, null, 0);
    // Find user by id
    user.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'The user does not exist',
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    });
  });

  router.post('/users/:id', (req, res) => {
    utils.debug('POST - /api/v1/users/' + req.params.id, null, 0);
    // If user required data is set
    if (req.body.name && req.body.name.length > 0) {
      const tmpUser = req.body;
      tmpUser.id = req.params.id;
      // Update user by id
      user.update(tmpUser, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Not Found
          res.status(404).json({
            developerMessage: 'The user does not exist or could not be updated',
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          developerMessage: error,
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        developerMessage: 'The user must have a name',
      });
    }
  });

  return router;
};
