const adminValidate = require("joi");
const { get } = require("../routes/adminroute");

const  CreateValidAdmin = adminValidate.object({

    name : adminValidate.string().min(6).max(40).required() ,
    username : adminValidate.string().min(6).max(30).required(),
    email : adminValidate.string().min(8).max(50).required(),
    password: adminValidate.string().min(8).max(1000)
})

const UpdateValidAdmin = adminValidate.object({
    name : adminValidate.string().min(6).max(40),
    username : adminValidate.string().min(6).max(30).required(),
    email : adminValidate.string().min(8).max(50),
    password: adminValidate.string().min(8).max(1000)
})

const getdeleteValidAdmin = adminValidate.object({
    username : adminValidate.string().min(6).max(30).required()
})

module.exports = {
    CreateAdmin:async(req , res , next )=>{
      try{
        await CreateValidAdmin.validateAsync(req.body)
       next()
      }catch(error){
        res.send({
            code : 400 ,
            error : error.message
        })
      }
    } ,

    UpdateAdmin :async( req , res , next )=>{
            try{
           await UpdateValidAdmin.validateAsync(req.body) ;
           next()
            }catch(error){
             res.send({
                code : 400 ,
                error : error.message
             })
            }
    } ,
    getdeleteAdmin :async(req , res , next)=>{
      try {
      await getdeleteValidAdmin.validateAsync(req.query)
       next()
      }catch(error){
        res.send({
            code : 400 ,
            error : error.message
        })
      }
    }
}
