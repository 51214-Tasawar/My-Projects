const joi = require("joi")

const Create = joi.object({
    name : joi.string().min(6).max(20).required(),
    username : joi.string().min(8).max(50).required() ,
    email : joi.string().min(8).max(100).required(),
    password : joi.string().min(6).max(1000)
})

const Update = joi.object({
    name : joi.string().min(6).max(20),
    username : joi.string().min(8).max(50).required() ,
    email : joi.string().min(8).max(100),
    password : joi.string().min(6).max(1000)
})

const getdelete = joi.object({
    username : joi.string().min(8).max(50).required() 
})

module.exports = {
    newVendor:async(req , res , next )=>{
     try{
      await Create.validateAsync(req.body)
      next()
     }catch(error){
         res.send({
            code : 400 ,
            error : error.message
         })
     } 
    } ,
    updatenewVendor : async(req , res,next )=>{
        try{
            await Update.validateAsync(req.body)
            next()
        }catch(error){
            res.send({
                code : 400 ,
                error : error.message
            })
        }
    } ,
    getdeletevendor:async( req , res , next )=>{
        try{
         await getdelete.validateAsync(req.query)
        }catch(error){
       res.send({
        code : 400 ,
        error : error.message
       })
        }
    }
}