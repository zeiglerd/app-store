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
  'logging': false
});

// App schema
const app = sequelize.define('app', {
  'id': {
    'allowNull': false,
    'primaryKey': true,
    'type': Sequelize.STRING,
    'unique': true
  },
  'title': {
    'allowNull': false,
    'type': Sequelize.STRING,
    'unique': true
  },
  "description": {
    'type': Sequelize.STRING
  },
  "releaseDate": {
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'type': Sequelize.DATE
  }
});

// User schema
const user = sequelize.define('user', {
  'id': {
    'allowNull': false,
    'primaryKey': true,
    'type': Sequelize.STRING,
    'unique': true
  },
  'name': {
    'allowNull': false,
    'type': Sequelize.STRING
  }
});
// User relations
app.hasMany(user, {
  'foreignKey': 'appId'
});

// Art assets schema
const artAsset = sequelize.define('artAsset', {
  'title': {
    'allowNull': false,
    'type': Sequelize.STRING
  },
  'srcLink': {
    'allowNull': false,
    'type': Sequelize.STRING
  }
});
// Art assets relations
app.hasMany(artAsset, {
  'foreignKey': 'appId'
});

// Build dbs
sequelize.sync();

exports.sequelize = sequelize;

exports.app = app;
exports.artAsset = artAsset;
exports.user = user;
