const db = require('./db');

// Create app
exports.create = (payload, success, error) => {
  db.app.create(payload).then(success).catch(error);
};

exports.destroy = (payload, success, error) => {
  db.app.destroy({
    'where': {
      'id': payload.id
    }
  }).then(success).catch(error);
};

// Find app by id
exports.find = (payload, success, error) => {
  db.app.find({
    'where': {
      'id': payload.id
    }, 'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

// Find all apps
exports.findAll = (success, error) => {
  db.app.findAll({
    'include': [{
      'all': true,
      'nested': true
    }]
  }).then(success).catch(error);
};

exports.update = (payload, success, error) => {
  db.app.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(error);
  }).catch(error);
};
