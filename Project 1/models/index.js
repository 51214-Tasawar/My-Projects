const sequelize = require("../dbconnection")

const adminTable = require("./Tables/adminTable")
const customerTable = require("./Tables/customerTable")
const vendorTable = require("./Tables/vendorTable")
const productTable = require("./Tables/Product")

const models = { adminTable , customerTable , vendorTable , productTable} ;

const db = {}

db.connection = sequelize ;
sequelize.models = models ;

module.exports = { db , models }