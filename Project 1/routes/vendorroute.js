const {createvendor,
    getvendor ,
    updatevendor,
    deletevendor
} = require("../controller/vendorcontroller")

const {
    newVendor ,
    updatenewVendor ,
    getdeletevendor

} = require("../Validations/vendervalidation")

const vendorroute  = require("express").Router();

vendorroute.get("/get_vendor" , getdeletevendor,getvendor)
vendorroute.post("/create_vendor" ,  newVendor ,createvendor)
vendorroute.patch("/update_vendor",updatenewVendor , updatevendor)
vendorroute.delete("/delete_vendor" , getdeletevendor,deletevendor)

 module.exports = vendorroute


