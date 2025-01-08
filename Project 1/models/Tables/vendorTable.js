const sequelize = require("../../dbconnection")
const { DataTypes , Model } = require("sequelize") ;

const { hash } = require("bcrypt")
const {v4 : vendorId} = require("uuid")

class vendorTable extends Model { } ;

vendorTable.init (
    {
        vendorId:{
            primaryKey : true ,
            type : DataTypes.STRING(1000)
        } ,
        name :{
            type : DataTypes.STRING(100) ,
            allowNull : false
        } ,
        username: {
            type : DataTypes.STRING(100) ,
            allowNull : false ,
            unique : true 
        } ,
        email:{
           type : DataTypes.STRING(100) ,
           allowNull : false
        } ,
        password:{
           type : DataTypes.STRING(100) ,
           allowNull : false
        }
    } ,
    {
        name : "vendorTable" ,
        timestamps : true ,
        paranoid : true, 
        sequelize : sequelize
    }
)

vendorTable.beforeCreate(async(vendor)=>{
    vendor.vendorId = vendorId()
    vendor.password = await hash(vendor.password ,10)
})

vendorTable.afterCreate((vendor)=>{
    delete vendor.dataValues.password
})
module.exports = vendorTable ;