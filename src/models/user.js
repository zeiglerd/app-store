const db = require('./db');
const utils = require('../lib/utilities');

// Create user
exports.add = (payload, success, error) => {
  const failMsg = 'Failed to add the user';

  db.User.create(payload)
  .then((data) => {
    if (data) {
      utils.debug('Successfully added the user', data, 0);
    } else {
      utils.debug(failMsg, data);
    }

    success(data);
  }).catch((err) => {
    utils.debug(failMsg, err);

    error(err);
  });
};

// Delete user by id
exports.remove = (payload, success, error) => {
  const failMsg = 'Failed to remove the user';

  db.User.destroy({
    where: {
      id: payload.id,
    },
  })
  .then((data) => {
    if (data) {
      utils.debug('Successfully removed the user', data, 0);
    } else {
      utils.debug(failMsg, data);
    }

    success(data);
  }).catch((err) => {
    utils.debug(failMsg, err);

    error(err);
  });
};

// Find user by id
exports.one = (payload, success, error) => {
  const failMsg = 'Failed to find one user';

  db.User.find({
    where: {
      id: payload.id,
    },
  })
  .then((data) => {
    if (data) {
      utils.debug('Successfully found one user', data, 0);
    } else {
      utils.debug(failMsg, data);
    }

    success(data);
  }).catch((err) => {
    utils.debug(failMsg, err);

    error(err);
  });
};

// Find all users
exports.all = (success, error) => {
  const failMsg = 'Failed to find any users';

  db.User.findAll()
  .then((data) => {
    if (data) {
      utils.debug('Successfully found all users', data, 0);
    } else {
      utils.debug(failMsg, data);
    }

    success(data);
  }).catch((err) => {
    utils.debug(failMsg, err);

    error(err);
  });
};

// Update user by id
exports.update = (payload, success, error) => {
  const failMsg = 'Failed to update the user';

  db.User.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload)
    .then((data) => {
      if (data) {
        utils.debug('Successfully updated the user', data, 0);
      } else {
        utils.debug(failMsg, data);
      }

      success(data);
    }).catch((err) => {
      utils.debug(failMsg, err);

      error(err);
    });
  }).catch((err) => {
    utils.debug(failMsg, err);

    error(err);
  });
};
