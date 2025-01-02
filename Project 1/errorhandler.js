errorHandler=(res , error)=>{
    try{
     res.send(
        {
            code : 400 ,
            error :  error.message
        }
     )
    }catch(error){
        res.send(
            {
                status : "Not Ok" ,
                error :  error
            }
         )
    }
}

module.exports = errorHandler ;