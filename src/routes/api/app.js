const app = require('../../models/app');
const user = require('../../models/user');
const utilities = require('../../utilities');

module.exports = (express) => {

  const router = express.Router();

  router.get('/apps', (req, res) => {
    // Find all apps
    app.all( (data) => {
      // If data exists and data (array) is longer than 0
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'No apps exist';
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

  router.post('/apps', (req, res) => {
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
          let status = 500,
              msg = 'The app could not be created';
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
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The app must have a name';
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  router.delete('/apps/:id', (req, res) => {
    // Delete app by id
    app.remove(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The app does not exist';
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

  router.get('/apps/:id', (req, res) => {
    // Find app by id
    app.one(req.params, (data) => {
      // If data exists
      if (data) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The app does not exist';
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

  router.post('/apps/:id', (req, res) => {
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
          let status = 404,
              msg = 'The app does not exist or could not be updated';
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
    } else {
      // Respond with JSON, status Unprocessable Entity
      let status = 422,
          msg = 'The app must have a name';
      utilities.log(msg, null, status);
      res.status(status).json({
        'developerMessage': msg
      });
    }
  });

  router.get('/users/:id/apps', (req, res) => {
    // Find all apps for userId
    app.allByUserId(req.params, (data) => {
      // If data exists
      if (data && data.length > 0) {
        // Respond with JSON, status OK
        res.json(data);
      } else {
        // Respond with JSON, status Not Found
        let status = 404,
            msg = 'The user has no apps';
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

  return router;

};
