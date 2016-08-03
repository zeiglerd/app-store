const example_data = {
  "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
  "title": "Best App Ever",
  "description": "A fast paced side scrolling shooter",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman"
  }
};

// Create api.js as module
module.exports = (express) => {

  // Define express router
  const router = express.Router();

  // GET /api/v1/apps
  // Display All Apps Info
  router.get('/apps', (req, res) => {

    let apps = [];
    apps.push(example_data);
    res.status(200).json(apps);

  });

  // GET /api/v1/apps/:id
  // Display Single App Info
  router.get('/apps/:id', (req, res) => {

    let app = {};

    // Check that required params/body is met
    if ( ! req.params.id) {
      return res.status(400).json(app);
    }

    // Check that a app exists with the incoming id
    if (example_data.id !== req.params.id) {
      return res.status(404).json(app);
    }

    app = example_data;

    return res.status(200).json(app);

  });

  // GET /api/v1/users
  // Display All Users Info
  router.get('/users', (req, res) => {

    let users = [];
    users.push(example_data.user);
    res.json(users);

  });

  // GET /api/v1/users/:id
  // Display Single User Info
  router.get('/users/:id', (req, res) => {

    let user = {};

    // Check that required params/body is met
    if ( ! req.params.id) {
      return res.status(400).json(user);
    }

    // Check that a userexists with the incoming id
    if (example_data.user.id !== req.params.id) {
      return res.status(404).json(user);
    }

    user = example_data.user;

    return res.status(200).json(user);

  });

  return router;

};
