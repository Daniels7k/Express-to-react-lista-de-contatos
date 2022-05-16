const Sequelize = require("sequelize")

const sequelize = new Sequelize("mysql://b58dce5d4ee02f:e026b76b@us-cdbr-east-05.cleardb.net/heroku_483e41599b4ad9e")

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = {Sequelize: Sequelize, sequelize: sequelize
}