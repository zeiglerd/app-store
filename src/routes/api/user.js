const user = require('../../models/user');
const utilities = require('../../lib/utilities');
import { utilities } from './lib/utilities';
import { utilities } from './lib/utilities';

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
        res.status(404).json({
          'developerMessage': 'No users exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/users', (req, res) => {
    utilities.debug('POST - /api/v1/users');
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
            'developerMessage': 'The user could not be added'
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          'developerMessage': error
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        'developerMessage': 'The user must have a name'
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
        res.status(404).json({
          'developerMessage': 'The user does not exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
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
        res.status(404).json({
          'developerMessage': 'The user does not exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/users/:id', (req, res) => {
    utilities.debug('POST - /api/v1/users/' + req.params.id);
    // If user required data is set
    if (req.body.name && req.body.name.length > 0) {
      req.body.id = req.params.id;
      // Update user by id
      user.update(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Not Found
          res.status(404).json({
            'developerMessage': 'The user does not exist or could not be updated'
          });
        }
      }, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          'developerMessage': error
        });
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        'developerMessage': 'The user must have a name'
      });
    }
  });

  return router;

};
