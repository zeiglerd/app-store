const db = require('./db');
const utilities = require('../lib/utilities');
import { utilities } from './lib/utilities';
import { utilities } from './lib/utilities';

// Create user
exports.add = (payload, success, error) => {
  db.User.create(payload)
  .then( (data) => {
    utilities.debug((data ? 'Successfully added' : 'Failed to add') + ' the user', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to add the user', err);
    error(err);
  });
};

// Delete user by id
exports.remove = (payload, success, error) => {
  db.User.destroy({
    'where': {
      'id': payload.id
    }
  })
  .then( (data) => {
    utilities.debug((data ? 'Successfully removed' : 'Failed to remove') + ' the user', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to remove the user', err);
    error(err);
  });
};

// Find user by id
exports.one = (payload, success, error) => {
  db.User.find({
    'where': {
      'id': payload.id
    }
  })
  .then( (data) => {
    utilities.debug((data ? 'Successfully found' : 'Failed to find') + ' one user', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to find one user', err);
    error(err);
  });
};

// Find all users
exports.all = (success, error) => {
  db.User.findAll()
  .then( (data) => {
    utilities.debug((data ? 'Successfully found all' : 'Failed to find any') + ' users', data);
    success(data);
  }).catch( (err) => {
    utilities.debug('Failed to find any users', err);
    error(err);
  });
};

// Update user by id
exports.update = (payload, success, error) => {
  db.User.find({
    'where': {
      'id': payload.id
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload)
    .then( (data) => {
      utilities.debug((data ? 'Successfully updated' : 'Failed to update') + ' the user', data);
      success(data);
    }).catch( (err) => {
      utilities.debug('Failed to update the user', err);
      error(err);
    });
  }).catch( (err) => {
    utilities.debug('Failed to update the user', err);
    error(err);
  });
};
