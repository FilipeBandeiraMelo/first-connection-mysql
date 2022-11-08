const Sequelize = require('sequelize');

const sequelize = new Sequelize("filipe", "root", "xxxxx", {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
.then(function(){
  console.log("Conexão de banco de dados com sucesso")
}).catch(function(){
  console.log("Erro: Conexão não realizada com banco de dados")
})

module.exports = sequelize;