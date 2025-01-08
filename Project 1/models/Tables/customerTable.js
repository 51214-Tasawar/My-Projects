const sequelize =require("../../dbconnection")
const { DataTypes , Model } = require("sequelize") ;

const {hash} = require("bcrypt")
const {v4 : customerId} = require("uuid")

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
     paranoid : true,
     sequelize : sequelize
    }
)

customerTable.beforeCreate(async(customer)=>{
    customer.customerId = customerId()
    customer.password = await hash(customer.password , 10)
})

customerTable.beforeCreate( (customer)=>{
    
})


module.exports  = customerTable ;