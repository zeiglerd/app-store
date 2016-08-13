const app = require('../../models/app');
const user = require('../../models/user');
const utilities = require('../../lib/utilities');
import { utilities } from './lib/utilities';
import { utilities } from './lib/utilities';
import { utilities } from './lib/utilities';

module.exports = (express) => {

  const router = express.Router();

  router.get('/apps', (req, res) => {
    utilities.debug('GET - /api/v1/apps');
    // Find all apps
    app.all( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          'developerMessage': 'No apps exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/apps', (req, res) => {
    utilities.debug('POST - /api/v1/apps');
    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      // Create app
      app.add(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          res.status(500).json({
            'developerMessage': 'The app could not be created'
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
        'developerMessage': 'The app must have a name'
      });
    }
  });

  router.delete('/apps/:id', (req, res) => {
    utilities.debug('DELETE - /api/v1/apps/' + req.params.id);
    // Delete app by id
    app.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          'developerMessage': 'The app does not exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.get('/apps/:id', (req, res) => {
    utilities.debug('GET - /api/v1/apps/' + req.params.id);
    // Find app by id
    app.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          'developerMessage': 'The app does not exist'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/apps/:id', (req, res) => {
    utilities.debug('POST - /api/v1/apps/' + req.params.id);
    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      req.body.id = req.params.id;
      // Update app by id
      app.update(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Not Found
          res.status(404).json({
            'developerMessage': 'The app does not exist or could not be updated'
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
        'developerMessage': 'The app must have a name'
      });
    }
  });

  router.get('/users/:id/apps', (req, res) => {
    utilities.debug('GET - /api/v1/users/' + req.params.id + '/apps');
    // Find all apps for userId
    app.allByUserId(req.params, (data) => {
      // If data exists
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          'developerMessage': 'The user has no apps'
        });
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  return router;

};
