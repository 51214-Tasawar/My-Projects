const {createAdmin ,getAdmin , updateAdmin , deleteAdmin} = require("../controller/admincontroller")
const {CreateAdmin , UpdateAdmin , getdeleteAdmin} = require("../Validations/adminvalidation")

const  adminroute  = require("express").Router();

adminroute.get("/get_admin" , getdeleteAdmin,getAdmin);
adminroute.post("/create_admin" , CreateAdmin , createAdmin);
adminroute.patch("/update_admin" , UpdateAdmin , updateAdmin);
adminroute.delete("/delete_admin",getdeleteAdmin,deleteAdmin);

module.exports = adminroute




