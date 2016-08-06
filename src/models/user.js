const db = require('./db');

// Create user
exports.create = (payload, success, error) => {
  db.user.create(payload).then(success).catch(error);
};

// Destroy user by id
exports.destroy = (payload, success, error) => {
  db.user.destroy({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error);
};

// Find user by id
exports.find = (payload, success, error) => {
  db.user.find({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error);
};

// Find all users
exports.findAll = (success, error) => {
  db.user.findAll().then(success).catch(error);
};

// Update user by id
exports.update = (payload, success, error) => {
  // Check user exists by id
  db.user.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(error);
  }).catch(error);
};
