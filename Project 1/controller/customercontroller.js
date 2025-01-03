const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorhandler")


const {hash} = require("bcrypt")
const {v4 : customerId} = require("uuid")

createCustomer = async(req , res) =>{
  try{
    req.body.customerId = customerId()
    req.body.password = await hash(req.body.password , 10)
  return responseHandler(res , req.body)
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
  }
  updateCustomer = (req , res) =>{
    try{
    return responseHandler(res , req.body)
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