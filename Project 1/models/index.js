const sequelize = require("../dbconnection")

const adminTable = require("./Tables/adminTable")
const customerTable = require("./Tables/customerTable")
const vendorTable = require("./Tables/vendorTable")
const productTable = require("./Tables/Product")
const {} = require("./Tables/productVariation")
const ProductVariation = require("./Tables/productVariation")

const models = { adminTable , customerTable , vendorTable , productTable , ProductVariation} ;

const db = {}

db.connection = sequelize ;
sequelize.models = models ;

module.exports = { db , models }