errorHandler=(res , error)=>{
    try{
     res.send(
        {
            code : 400 ,
            error :  error
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