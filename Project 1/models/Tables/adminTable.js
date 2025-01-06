const sequelize = require("../../dbconnection")

const {DataTypes , Model} = require("sequelize") ;

class adminTable extends Model { } ;

adminTable.init (
    {
        adminId : {
            primaryKey : true ,
            type : DataTypes.STRING(1000)
        } ,
        name :{
            type : DataTypes.STRING(100) ,
            allowNull : false
        } ,
        username : {
            type : DataTypes.STRING(100) ,
            allowNull : false ,
            unique : true
        } ,
        email :{ 
            type : DataTypes.STRING(100) ,
            allowNull : false
        } ,
        password : {
            type : DataTypes.STRING(100) ,
            allowNull : false ,
        }
    } ,
    {
    
        // name : "adminTable" ,
        timestamps : true  ,
        paranoid : true,
        sequelize : sequelize

    }
)

module.exports = adminTable ;