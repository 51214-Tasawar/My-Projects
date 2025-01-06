const { response } = require("express");
const {models} = require("./index") ;

module.exports ={
    CreateAdmin:async(body)=>{
      try{
    const newAdmin = await models.adminTable.create({...body}) 
    return{
     response : newAdmin
    }
      }catch(error){
       return {
        error : error
       }
      }
    },
    GetAdmin :async()=>{
        try{
        const getadmin = await models.adminTable.findAll() ;
        return{
            response : getadmin
        }
        }catch(error){
         return{
            error : error
         }
        }
    }
}