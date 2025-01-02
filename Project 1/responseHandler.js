
module.exports ={
    responseHandler:(res , data)=>
        {
        try{
             res.send({
                code : 200 ,
                status : "Ok" ,
                data : data
             })
        }catch(error){
         res.send({
            code : 400 ,
            status : " Not Ok " ,
            error : error
         })
        }
        }
}