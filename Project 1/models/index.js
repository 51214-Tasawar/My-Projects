const sequelize = require("../dbconnection")

const adminTable = require("./Tables/adminTable")
const customerTable = require("./Tables/customerTable")
const vendorTable = require("./Tables/vendorTable")
const productTable = require("./Tables/Product")
const ProductVariation = require("./Tables/productVariation")
const attribute = require("./Tables/attribute")

const models = { adminTable , customerTable , vendorTable , productTable , ProductVariation , attribute} ;

const db = {}

db.connection = sequelize ;
sequelize.models = models ;

module.exports = { db , models }