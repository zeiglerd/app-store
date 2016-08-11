const db = require('./db');

// Create app
exports.add = (payload, success, error) => {
  db.App.create(payload)
  .then( (data) => {
    utilities.debug((data ? 'Successfully added' : 'Failed to add') + ' the app', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to add the app', err);
    error(err);
  });
};

// Delete app by id
exports.remove = (payload, success, error) => {
  db.App.destroy({
    'where': {
      'id': payload.id
    }
  }).then( (data) => {
    utilities.debug((data ? 'Successfully removed' : 'Failed to remove') + ' the app', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to remove the app', err);
    error(err);
  });
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
  }).then( (data) => {
    utilities.debug((data ? 'Successfully found' : 'Failed to find') + ' one app', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to find one app', err);
    error(err);
  });
};

// Find all apps
exports.all = (success, error) => {
  db.App.findAll({
    'include': [{
      'all': true,
      'nested': true
    }]
  }).then( (data) => {
    utilities.debug((data ? 'Successfully found all' : 'Failed to find any') + ' apps', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to find any apps', err);
    error(err);
  });
};

// Find all apps by userId
exports.allByUserId = (payload, success, error) => {
  db.App.findAll({
    'where': {
      'userId': payload.id
    }, 'include': [{
      'all': true,
      'nested': true
    }]
  }).then( (data) => {
    utilities.debug((data ? 'Successfully found' : 'Failed to find any') + ' apps by user id', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to find any apps by user id', err);
    error(err);
  });
};

// Update app by id
exports.update = (payload, success, error) => {
  db.App.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload)
    .then( (data) => {
      utilities.debug((data ? 'Successfully updated' : 'Failed to update') + ' the app', data);
      success(data);
    }).catch( (err) => {
      utilities.debug('Failed to update the app', err);
      error(err);
    });
  }).catch( (err) => {
    utilities.debug('Failed to update the app', err);
    error(err);
  });
};
