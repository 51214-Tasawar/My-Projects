const {createvendor,
    getvendor ,
    updatevendor,
    deletevendor
} = require("../controller/vendorcontroller")

const vendorroute  = require("express").Router();

vendorroute.get("/get_vendor" , getvendor)
vendorroute.post("/create_vendor" , createvendor)
vendorroute.patch("/update_vendor" , updatevendor)
vendorroute.delete("/delete_vendor" , deletevendor)

 module.exports = vendorroute

