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
    } , 
    updateadmin :async({username , ...body})=>{
        try{
         const updateAdmin = await models.adminTable.update({
            ...body
         },{
            where : {
                username : username
            }
         })
         return {
            response : updateAdmin
         }
        }catch(error){
         return{
            error : error
         }
        }
    } ,
    deleteadmin :async({username})=>{
        try{
        const deleteAdmin = await models.adminTable.destroy({where : {username : username} })
        return{
            response : deleteAdmin
        }
        }catch(error){
            return{
               error : error
            }
        }
    }
}