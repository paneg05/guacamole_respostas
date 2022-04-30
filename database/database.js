const Sequelize = require('sequelize')

const connection = new Sequelize('guacamole_perguntas','root','93153626',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection