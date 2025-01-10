const sequelize = require("../../dbconnection")

const {Model , DataTypes } = require("sequelize") ;
const { v4:productId} = require("uuid");
const { beforeCreate } = require("./vendorTable");

class productTable extends Model{ }

productTable.init(
    {
        productId : {
            primaryKey : true  ,
            type : DataTypes.STRING(1000)
        },
        productname : {
            unique : true ,
            type : DataTypes.STRING(100),
            allowNull : false
        } 
    },
    {
        name : "productTable",
        timestamps : true ,
        paranoid : true,
        sequelize : sequelize
    }
)

 productTable.beforeCreate(( product)=>{
   product.productId =  productId()
 })

module.exports = productTable ;