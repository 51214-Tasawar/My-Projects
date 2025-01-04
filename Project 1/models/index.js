const mysequelize = require("../dbconnection")

const adminTable = require("./Tables/adminTable")
const customerTable = require("./Tables/customerTable")
const vendorTable = require("./Tables/vendorTable")

const myModels = { adminTable , customerTable , vendorTable} ;

const db = {}

db.connection = mysequelize ;
mysequelize.model = myModels ;

module.exports = { db , myModels }