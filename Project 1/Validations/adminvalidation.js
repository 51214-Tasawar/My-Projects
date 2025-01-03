const adminValidate = require("joi");

const  CreateValidAdmin = adminValidate.object({

    name : adminValidate.string().min(6).max(40).required() ,
    username : adminValidate.string().min(6).max(30).required(),
    email : adminValidate.string().min(8).max(50),
    password: adminValidate.string().min(8).max(1000)
})

module.exports = {
    CreateAdmin:async(req , res , next )=>{
      try{
        await CreateValidAdmin.validateAsync(req.body)
       next()
      }catch(error){
        res.send({
            code : 200 ,
            error : error.message
        })
      }
    }
}
