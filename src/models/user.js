const db = require('./db');

// Create user
exports.add = (payload, success, error) => {
  db.User.create(payload).then(success).catch(error);
};

// Delete user by id
exports.remove = (payload, success, error) => {
  db.User.destroy({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error);
};

// Find user by id
exports.one = (payload, success, error) => {
  db.User.find({
    'where': {
      'id': payload.id
    }, 'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Find all users
exports.all = (success, error) => {
  db.User.findAll({
    'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Update user by id
exports.update = (payload, success, error) => {
  db.User.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(error);
  }).catch(error);
};
