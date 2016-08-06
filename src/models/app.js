const db = require('./db');

exports.create = (payload, success, error) => {
  db.app.create(payload).then(success).catch(error);
};

exports.findAll = (success, error) => {
  db.app.findAll().then(success).catch(error);
};

exports.find = (payload, success, error) => {
  db.app.find({
    'where': {
      'id': payload.id,
    },
    // Find all relations in sequelize
    'include': [{
      'all': true,
      'nested': true,
    }],
  }).then(success).catch(error);
};

exports.update = (payload, success, error) => {
  db.app.find({
    'where': {
      'id': payload.id,
    },
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(error);
  }).catch(error);
};

exports.destroy = (payload, success, error) => {
  db.app.destroy({
    'where': {
      'id': payload.id,
    },
  }).then(success).catch(error);
};
