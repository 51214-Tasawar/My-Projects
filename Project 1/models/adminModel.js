const {models} = require("./index") ;

module.exports ={
    CreateAdmin:(body)=>{
      try{
    const newAdmin =models.adminTable.create({...body}) 
    return{
     reponse : newAdmin
    }
      }catch(error){
       return {
        error : error
       }
      }
    }
}