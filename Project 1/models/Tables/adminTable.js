const sequelize = require("../../dbconnection")
const {DataTypes , Model} = require("sequelize") ;

const { hash } = require("bcrypt");
const { v4: adminId } = require("uuid");

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
    
        name : "adminTable" ,
        timestamps : true  ,
        paranoid : true,
        sequelize : sequelize

    }
)

adminTable.beforeCreate(async(admin)=>{
    admin.adminId = adminId();
    admin.password = await hash(admin.password, 10);
})

module.exports = adminTable ;