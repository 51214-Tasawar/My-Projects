const { DataTypes , Model } = require("sequelize") ;

class vendorTable extends Model { } ;

vendorTable.init (
    {
        vendorId:{
            primaryKey : true ,
            type : DataTypes.STRING(1000)
        }
    } ,
    {

    }
)