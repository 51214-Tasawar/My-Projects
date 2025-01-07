const {models} = require("../models/index");

module.exports = {
    createVendor :async(body)=>{
     try{
 const response = await models.vendorTable.create({...body})
    return {
        response : response
    }
     }catch(error){
     return{
        error : error
     }
     }
    },
    updateVendor :async({username , ...body})=>{
     try{
      const response =await models.vendorTable.update({
        ...body
      } ,{where :{username : username}}) 
      return {
        response : response
      }
     }catch(error){
     return{
        error : error
     }
     }
    },
    getVendor :()=>{
       try{
   const response = models.vendorTable.findAll()

       }catch(error){
     return{
        error : error
     }
     }
    } ,
    deleteVendor:()=>{
             try{

             }catch(error){
     return{
        error : error
     }
     }
    }
}