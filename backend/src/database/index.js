const Sequelize = require('sequelize');

const Comment = require('../app/models/Comment');

const databaseConfig = require('../config/database');

const models = [Comment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
