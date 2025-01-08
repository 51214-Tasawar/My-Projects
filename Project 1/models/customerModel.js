
const { where } = require("sequelize");
const {models} = require("./index") ;
const { response } = require("express");

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
    updatecust:async({username , ...body})=>{
        try{
      const updatecust = await models.customerTable.update({
        ...body
      },{where :{
        username : username
      }})
      return {
        response : updatecust
      }
        }
        catch(error){
            return{
              error : error
            }
             }
    } ,
    getallcust :async()=>{
   try{
    const getallcust = await models.customerTable.findAll({
      attributes :["name", "username" , "email"]
    })
    return{
        response : getallcust
    }
   }catch(error){
      return{
        error : error
      }
       }
    },
    deletecust:async({username})=>{
   try{
    const deletecust = await models.customerTable.destroy({where : {username : username}})

    return {
      response : deletecust
    }
   }catch(error){
      return{
        error : error
      }
       }
    }
}