const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  'host': process.env.DB_HOST,
  'dialect': process.env.DB_SCHEMA,
  'port': process.env.DB_PORT,
  'pool': {
    'max': 5,
    'min': 0,
    'idle': 10000,
  },
  'logging': false,
});

const app = sequelize.define('app', {
  'name': {
    'type': Sequelize.STRING,
  },
  'code': {
    'type': Sequelize.STRING,
  }
});

const user = sequelize.define('user', {
  'name': {
    'type': Sequelize.STRING,
  },
  'age': {
    'type': Sequelize.INTEGER,
  },
  'hobby': {
    'type': Sequelize.STRING,
  }
});

app.hasMany(user, {
  'foreignKey': 'appId'
});

sequelize.sync();
exports.sequelize = sequelize;

exports.app = app;
exports.user = user;
