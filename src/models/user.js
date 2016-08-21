const db = require('./db');
// const utilTool = require('utility-tool');

// Create user
exports.add = (payload, error, success) => {
  const failMsg = 'Failed to add the user';

  db.User
  .create(payload)
  .then((data) => {
    if (data) {
      console.log('Successfully added the user', data.dataValues, 0);
    } else {
      console.log(failMsg, data);
    }

    success(data);
  })
  .catch((err) => {
    console.log(failMsg, err);

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
      console.log('Successfully removed the user', data, 0);
    } else {
      console.log(failMsg, data);
    }

    success(data);
  })
  .catch((err) => {
    console.log(failMsg, err);

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
    if (data) {
      console.log('Successfully found one user', data.dataValues, 0);
    } else {
      console.log(failMsg, data);
    }

    success(data);
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Find all users
exports.all = (error, success) => {
  const failMsg = 'Failed to find any users';

  db.User
  .findAll()
  .then((data) => {
    if (data) {
      const users = [];

      for (const user of data) {
        users.push(user.dataValues);
      }

      console.log('Successfully found all users', users, 0);
    } else {
      console.log(failMsg, data);
    }

    success(data);
  })
  .catch((err) => {
    console.log(failMsg, err);

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
      if (data) {
        console.log('Successfully updated the user', data, 0);
      } else {
        console.log(failMsg, data);
      }

      success(data);
    })
    .catch((err) => {
      console.log(failMsg, err);

      error(err);
    });
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};
