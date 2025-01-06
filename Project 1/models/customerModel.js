const { response } = require("express");
const {models} = require("./index") ;

module.exports ={
    createcust:async(body)=>{
       try{
      const createcust =await models.customerTable.create(
        {
            ...body
        }
      )
      return{
        response : createcust
      }
       }catch(error){
      return{
        error : error
      }
       }
    },
    updatecust:({username , ...body})=>{
        try{

        }
        catch(error){
            return{
              error : error
            }
             }
    } ,
    getallcust :()=>{
   try{

   }catch(error){
      return{
        error : error
      }
       }
    },
    deletecust:()=>{
   try{

   }catch(error){
      return{
        error : error
      }
       }
    }
}