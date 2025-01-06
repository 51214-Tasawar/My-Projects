require("dotenv").config()

const {Sequelize} = require ("sequelize")

const sequelize = new Sequelize ( {

       host : process.env.DBHOST ,
       username : process.env.DBUSERNAME ,
       port : process.env.DBPORT ,
       database : process.env.DBNAME ,
       password : process.env.DBPASSWORD ,
       dialect : process.env.DBDIALECT
    })


module.exports = sequelize ;