const {Model , DataTypes } = require("sequelize") ;

class productTable extends Model{ }

productTable.init(
    {
        productId : {
            primaryKey : true  ,
            
        }
    },{})