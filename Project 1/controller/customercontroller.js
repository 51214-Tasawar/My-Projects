const {responseHandler} = require("../responseHandler")
const errorHandler = require("../errorhandler")
const {createcust,
  updatecust,
  getallcust,
  deletecust
} = require("../models/customerModel")

createCustomer = async(req , res) =>{
  try{
  
    const response  = await createcust ( req.body) 
    if(response.error){
      return errorHandler(res , response.error)
    }
  return responseHandler(res , response.response)
  }catch(error){
    return errorHandler(res , error)
  }
}
getCustomer = async(req , res) =>{
    try{
      
      const response = await getallcust({})
      
      if(response.error){
        return errorHandler(res , response.error)
      }
    return responseHandler(res , response.response)
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
  deleteCustomer = async(req , res) =>{
    try{
      const response = await deletecust(req.query)
      if(response.error){
        return errorHandler(res , response.error)
      }
    return responseHandler(res , response.response)
    }catch(error){
      return errorHandler(res , error)
    }
  }

  module.exports = {createCustomer ,getCustomer , updateCustomer , deleteCustomer}