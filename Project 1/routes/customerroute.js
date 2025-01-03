const {createCustomer ,
    getCustomer ,
    updateCustomer  ,
    deleteCustomer
} = require("../controller/customercontroller")

const {
    Createcustomer ,
    Updatecustomer ,
    getdeleteCustomer 

} = require("../Validations/customervalidation")

const customerroute = require("express").Router() ;


customerroute.get("/get_customer", getdeleteCustomer , getCustomer ) ;
customerroute.post("/create_customer" , Createcustomer , createCustomer) ;
customerroute.patch("/update_customer" , Updatecustomer , updateCustomer) ;
customerroute.delete("/delete_customer" , getdeleteCustomer , deleteCustomer) ;

module.exports = customerroute ;


