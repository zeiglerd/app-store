const db = require('./db');
const utilTool = require('utility-tool');

// Create user
exports.add = (payload, error, success) => {
  const failMsg = 'Failed to add the user';

  db.User
  .create(payload)
  .then((data) => {
    if (data.dataValues) {
      utilTool.debug('Successfully added the user', data.dataValues, 0);

      success(data);
    } else {
      utilTool.debug(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    utilTool.debug(failMsg, err);

    error(err);
  });
};

// Delete user by id
exports.remove = (payload, error, success) => {
  const failMsg = 'Failed to remove the user';

  db.User
  .destroy({
    where: {
      id: payload.id,
    },
  })
  .then((data) => {
    if (data) {
      utilTool.debug('Successfully removed the user', data, 0);

      success(data);
    } else {
      utilTool.debug(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    utilTool.debug(failMsg, err);

    error(err);
  });
};

// Find user by id
exports.one = (payload, error, success) => {
  const failMsg = 'Failed to find one user';

  db.User
  .find({
    where: {
      id: payload.id,
    },
  })
  .then((data) => {
    if (data.dataValues) {
      utilTool.debug('Successfully found one user', data.dataValues, 0);

      success(data);
    } else {
      utilTool.debug(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    utilTool.debug(failMsg, err);

    error(err);
  });
};

// Find all users
exports.all = (error, success) => {
  const failMsg = 'Failed to find any users';

  db.User
  .findAll()
  .then((data) => {
    if (data && data.length && data[0].dataValues) {
      const users = [];

      for (const user of data) {
        users.push(user.dataValues);
      }

      utilTool.debug('Successfully found all users', users, 0);

      success(data);
    } else {
      utilTool.debug(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    utilTool.debug(failMsg, err);

    error(err);
  });
};

// Update user by id
exports.update = (payload, error, success) => {
  const failMsg = 'Failed to update the user';

  db.User
  .find({
    where: {
      id: payload.id,
    },
  })
  .then((existingData) => {
    existingData.updateAttributes(payload)
    .then((data) => {
      if (data.dataValues) {
        utilTool.debug('Successfully updated the user', data.dataValues, 0);

        success(data);
      } else {
        utilTool.debug(failMsg, data);

        error(data);
      }
    })
    .catch((err) => {
      utilTool.debug(failMsg, err);

      error(err);
    });
  })
  .catch((err) => {
    utilTool.debug(failMsg, err);

    error(err);
  });
};
