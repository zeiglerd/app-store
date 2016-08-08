const db = require('./db');

// Create app
exports.add = (payload, success, error) => {
  db.App.create(payload).then(success).catch(error);
};

// Delete app by id
exports.remove = (payload, success, error) => {
  db.App.destroy({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error);
};

// Find app by id
exports.one = (payload, success, error) => {
  db.App.find({
    'where': {
      'id': payload.id
    }, 'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Find all apps
exports.all = (success, error) => {
  db.App.findAll({
    'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Find all apps by userId
exports.allByUserId = (payload, success, error) => {
  db.App.findAll({
    'userId': payload.id,
    'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Update app by id
exports.update = (payload, success, error) => {
  db.App.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(error);
  }).catch(error);
};
