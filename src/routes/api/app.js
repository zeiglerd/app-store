const app = require('../../models/app');
const user = require('../../models/user');
const functions = require('../../shared/functions');

module.exports = (express) => {

  const router = express.Router();

  router.get('/apps', (req, res) => {
    // Find all apps
    app.all( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json();
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/apps', (req, res) => {
    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      // Create app
      app.add(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.status(200).json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          res.status(500).json();
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
        'developerMessage': 'App must have a name.'
      });
    }
  });

  router.delete('/apps/:id', (req, res) => {
    // Delete app by id
    app.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json();
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.get('/apps/:id', (req, res) => {
    // Find app by id
    app.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.status(200).json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json();
      }
    }, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        'developerMessage': error
      });
    });
  });

  router.post('/apps/:id', (req, res) => {
    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      req.body.id = req.params.id;
      // Update app by id
      app.update(req.body, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.status(200).json(data);
        } else {
          // Respond with JSON, status Not Found
          res.status(404).json();
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
        'developerMessage': 'App must have a name.'
      });
    }
  });

  router.get('/users/:id/apps', (req, res) => {
    // Find all users for a userId
    user.one(req.params, (data) => {
      // If data exists
      if (data) {
        let tempApp = {
          'id': data.appId
        };
        // Find app by id
        app.one(tempApp, (data) => {
          // If data exists
          if (data) {
            let tempApps = [
              data
            ];
            console.log(tempApps);
            // Respond with JSON, status OK
            res.status(200).json(tempApps);
          } else {
            // Respond with JSON, status Not Found
            res.status(404).json();
          }
        }, (error) => {
          // Respond with JSON, status Internal Server Error
          res.status(500).json({
            'developerMessage': error
          });
        });
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json();
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
