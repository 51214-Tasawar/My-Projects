const {responseHandler} = require("../responseHandler")
const {errorHandler} = require("../errorhandler")

createCustomer = (req , res) =>{
  try{
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