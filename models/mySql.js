const Sequelize = require("sequelize")

const heroku_URI = "mysql://b58dce5d4ee02f:e026b76b@us-cdbr-east-05.cleardb.net/heroku_483e41599b4ad9e"

const sequelize = new Sequelize("listadecontatos", "root", "157320My@", {
  host: "localhost",
  dialect: "mysql"
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = {Sequelize: Sequelize, sequelize: sequelize
}