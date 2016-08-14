const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// App schema
const App = sequelize.define('app', {
  id: {
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
    unique: true,
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE,
  },
});

// User schema
const User = sequelize.define('user', {
  id: {
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
    unique: true,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});
// App/User relations
User.hasMany(App, {
  foreignKey: 'userId',
});
App.belongsTo(User);

// Art Assets schema
const ArtAsset = sequelize.define('artAsset', {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  srcLink: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});
// App/Art Assets relations
App.hasMany(ArtAsset, {
  foreignKey: 'appId',
});

// Build dbs
sequelize.sync();

exports.sequelize = sequelize;

exports.App = App;
exports.ArtAsset = ArtAsset;
exports.User = User;
