const MySql = require("./mySql")

const Contatos = MySql.sequilize.define("contatos", {
    nome:{
        type: MySql.Sequilize.STRING
    },
    numero: {
        type: MySql.Sequilize.STRING
    }
}) 

module.exports = Contatos