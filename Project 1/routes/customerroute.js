const {createCustomer ,
    getCustomer ,
    updateCustomer  ,
    deleteCustomer
} = require("../controller/customercontroller")

const customerroute = require("express").Router() ;


customerroute.get("/get_customer" , getCustomer ) ;
customerroute.post("/create_customer" , createCustomer) ;
customerroute.patch("/update_customer" , updateCustomer) ;
customerroute.delete("/delete_customer" , deleteCustomer) ;

module.exports = customerroute ;


