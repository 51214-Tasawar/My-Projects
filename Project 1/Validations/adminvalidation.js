const adminValidate = require("joi");

const  CreateValidAdmin = new adminValidate.object({

    name : adminValidate.string().min(6).max(40).required() ,
    username : adminValidate.string().min(6).max(30).required(),
    email : adminValidate.string().min(8).max(50),
    password: adminValidate.string().min(8).max(1000)
})

