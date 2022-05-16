const MySql = require("./mySql")

const Contatos = MySql.sequelize.define("contatos", {
    nome:{
        type: MySql.Sequelize.STRING
    },
    numero: {
        type: MySql.Sequelize.STRING
    }
}) 
 
//Criando tabela
 async function sync () {
    await Contatos.sync();
 } 

 sync()

module.exports = Contatos