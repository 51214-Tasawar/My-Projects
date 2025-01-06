const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorhandler")
const {createcust,
  updatecust,
  getallcust,
  deletecust
} = require("../models/customerModel")

const {hash} = require("bcrypt")
const {v4 : customerId} = require("uuid")

createCustomer = async(req , res) =>{
  try{
    req.body.customerId = customerId()
    req.body.password = await hash(req.body.password , 10)
    const response  = await createcust ( req.body) 
    if(response.error){
      return errorHandler(res , response.error)
    }
  return responseHandler(res , response.response)
  }catch(error){
    return errorHandler(res , error)
  }
}
getCustomer = (req , res) =>{
    try{
    return responseHandler(res , req.query)
    }catch(error){
      return errorHandler(res , error)
    }
  } ,
  updateCustomer =async (req , res) =>{
    try{
      const response = await updatecust(req.body)
      if(response.error){
        return errorHandler(res , response.error)
      }
    return responseHandler(res , response.response)
    }catch(error){
      return errorHandler(res , error)
    }
  }
  deleteCustomer = (req , res) =>{
    try{
    return responseHandler(res , req.query)
    }catch(error){
      return errorHandler(res , error)
    }
  }

  module.exports = {createCustomer ,getCustomer , updateCustomer , deleteCustomer}