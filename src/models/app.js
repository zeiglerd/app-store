const db = require('./db');
// const utilTool = require('utility-tool');

// Create app
exports.add = (payload, error, success) => {
  const failMsg = 'Failed to add the app';

  db.App
  .create(payload)
  .then((data) => {
    if (data.dataValues) {
      console.log('Successfully added the app', data.dataValues, 0);

      success(data);
    } else {
      console.log(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Delete app by id
exports.remove = (payload, error, success) => {
  const failMsg = 'Failed to remove the app';

  db.App
  .destroy({
    where: {
      id: payload.id,
    },
  })
  .then((data) => {
    if (data) {
      console.log('Successfully removed the app', data, 0);

      success(data);
    } else {
      console.log(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Find app by id
exports.one = (payload, error, success) => {
  const failMsg = 'Failed to find one app';

  db.App
  .find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  })
  .then((data) => {
    if (data.dataValues) {
      console.log('Successfully found one app', data.dataValues, 0);

      success(data);
    } else {
      console.log(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Find all apps
exports.all = (error, success) => {
  const failMsg = 'Failed to find any apps';

  db.App
  .findAll({
    include: [{
      all: true,
      nested: true,
    }],
  })
  .then((data) => {
    if (data && data.length && data[0].dataValues) {
      const apps = [];

      for (const app of data) {
        apps.push(app.dataValues);
      }

      console.log('Successfully found all apps', apps, 0);

      success(data);
    } else {
      console.log(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Find all apps by userId
exports.allByUserId = (payload, error, success) => {
  const failMsg = 'Failed to find any apps by user id';

  db.App
  .findAll({
    where: {
      userId: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  })
  .then((data) => {
    if (data && data.length && data[0].dataValues) {
      const apps = [];

      for (const app of data) {
        apps.push(app.dataValues);
      }

      console.log('Successfully found apps by user id', apps, 0);

      success(data);
    } else {
      console.log(failMsg, data);

      error(data);
    }
  })
  .catch((err) => {
    console.log(failMsg, err);

    error(err);
  });
};

// Update app by id
exports.update = (payload, error, success) => {
  const failMsg = 'Failed to update the app';

  db.App
  .find({
    where: {
      id: payload.id,
    },
  })
  .then((existingData) => {
    existingData.updateAttributes(payload)
    .then((data) => {
      if (data.dataValues) {
        console.log('Successfully updated the app', data.dataValues, 0);

        success(data);
      } else {
        console.log(failMsg, data);

        error(data);
      }
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
