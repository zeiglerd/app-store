const app = require('../../models/app');
// const utilTool = require('utility-tool');

module.exports = (express) => {
  const router = express.Router();

  router.get('/apps', (req, res) => {
    console.log('GET - /api/v1/apps', null, 0);

    // Find all apps
    app.all((error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    }, (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'No apps exist',
        });
      }
    });
  });

  router.post('/apps', (req, res) => {
    console.log('POST - /api/v1/apps', null, 0);

    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      // Create app
      app.add(req.body, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          developerMessage: error,
        });
      }, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status Created
          res.status(201).json(data);
        } else {
          // Respond with JSON, status Internal Server Error
          res.status(500).json({
            developerMessage: 'The app could not be created',
          });
        }
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        developerMessage: 'The app must have a title',
      });
    }
  });

  router.delete('/apps/:id', (req, res) => {
    console.log(`DELETE - /api/v1/users/${req.params.id}`, null, 0);

    // Delete app by id
    app.remove(req.params, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    }, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'The app does not exist',
        });
      }
    });
  });

  router.get('/apps/:id', (req, res) => {
    console.log(`GET - /api/v1/apps/${req.params.id}`, null, 0);

    // Find app by id
    app.one(req.params, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    }, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'The app does not exist',
        });
      }
    });
  });

  router.post('/apps/:id', (req, res) => {
    console.log(`POST - /api/v1/apps/${req.params.id}`, null, 0);

    // If app required data is set
    if (req.body.title && req.body.title.length > 0) {
      const tmpApp = req.body;
      tmpApp.id = req.params.id;

      // Update app by id
      app.update(tmpApp, (error) => {
        // Respond with JSON, status Internal Server Error
        res.status(500).json({
          developerMessage: error,
        });
      }, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          res.json(data);
        } else {
          // Respond with JSON, status Not Found
          res.status(404).json({
            developerMessage: 'The app does not exist or could not be updated',
          });
        }
      });
    } else {
      // Respond with JSON, status Unprocessable Entity
      res.status(422).json({
        developerMessage: 'The app must have a name',
      });
    }
  });

  router.get('/users/:id/apps', (req, res) => {
    console.log(`GET - /api/v1/users/${req.params.id}/apps`, null, 0);

    // Find all apps for userId
    app.allByUserId(req.params, (error) => {
      // Respond with JSON, status Internal Server Error
      res.status(500).json({
        developerMessage: error,
      });
    }, (data) => {
      // If data exists
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        res.status(404).json({
          developerMessage: 'The user has no apps',
        });
      }
    });
  });

  return router;
};
