const {createAdmin ,getAdmin , updateAdmin , deleteAdmin} = require("../controller/admincontroller")

const  adminroute  = require("express").Router();

adminroute.get("/get_admin" , getAdmin);
adminroute.post("/create_admin" , createAdmin);
adminroute.patch("/update_admin" , updateAdmin);
adminroute.delete("/delete_admin" ,deleteAdmin);

module.exports = adminroute



