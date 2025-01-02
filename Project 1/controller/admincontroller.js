const {responseHandler} = require("../responseHandler")
const {errorHandler} = require("../errorhandler")
module.exports =  {
    createAdmin :(req , res)=>{
        try{
       return responseHandler(res , req.body)
        }catch(error){
       return errorHandler(res , error)
        }
    } ,

    getAdmin:(req , res)=>{
    try{
    return responseHandler(res , req.query);
    }catch(error){
     return errorHandler(res , error)
    }
    } ,

    updateAdmin :(req , res)=>{
        try{
            return responseHandler(res , req.body)
        }catch(error){
            return errorHandler(res  , error)
        }
    } ,
     
    deleteAdmin :(req , res)=>{
        try {
   return responseHandler(res , req.query)
        }catch(error){
        return errorHandler(res , error)
        }
    }
}        