const Sequilize = require("sequelize")

const sequilize = new Sequilize("listaDeContatos", "root", "157320My@", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {Sequilize: Sequilize, sequilize: sequilize
}