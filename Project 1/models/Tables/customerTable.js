const { DataTypes , Model } = require("sequelize") ;

class customerTable extends Model { } ;

customerTable.init(
    {
        customerId : {
            primaryKey : true ,
            type : DataTypes.STRING(1000) ,
        } ,
        name: {
            type : DataTypes.STRING(100),
            allowNull : false
        } ,
        username : {
            type : DataTypes.STRING(100),
            allowNull : false ,
            unique : true 
        } ,
        email : {
            type : DataTypes.STRING(100) ,
            allowNull : false
        } ,
        password : {
            type : DataTypes.STRING(100),
            allowNull : false
        }
    },
    {
     name : "customerTable" ,
     timestamps : true ,
     paranoid : true
    }
)

module.exports  = customerTable ;