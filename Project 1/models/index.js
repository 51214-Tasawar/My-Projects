const sequelize = require("../dbconnection")

const adminTable = require("./Tables/adminTable")
const customerTable = require("./Tables/customerTable")
const vendorTable = require("./Tables/vendorTable")

const models = { adminTable , customerTable , vendorTable} ;

const db = {}

db.connection = sequelize ;
sequelize.models = models ;

module.exports = { db , models }