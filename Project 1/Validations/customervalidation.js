const joi = require("joi") ;
const Create = joi.object({
    name : joi.string().min(6).max(20).required(),
    username : joi.string().min(8).max(50).required(),
    email : joi.string().min(8).max(50).required().email(),
    password : joi.string().min(8).max(1000)
})
const Update = joi.object({
    name : joi.string().min(6).max(20),
    username : joi.string().min(8).max(50).required(),
    email : joi.string().min(8).max(50).email(),
    password : joi.string().min(8).max(1000)
})
const getdelete = joi.object({
    username : joi.string().min(8).max(50).required()
})

module.exports ={
    Createcustomer :async( req, res , next )=>{
     try {
        await Create.validateAsync(req.body)
        next()
     }catch(error){
        res.send({
            code : 400 ,
            error : error.message
        })
     }
    } ,

    Updatecustomer:async(req , res , next )=>{
        try {
            await Update.validateAsync(req.body)
            next()
         }catch(error){
            res.send({
                code : 400 ,
                error : error.message
            })
         }
    } ,
   getdeleteCustomer:async(req , res , next )=>{
    try {
        await getdelete.validateAsync(req.query)
        next()
     }catch(error){
        res.send({
            code : 400 ,
            error : error.message
        })
     }
   }
} 