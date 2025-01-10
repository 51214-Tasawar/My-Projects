const sequelize = require("../../dbconnection")

const {Model , DataTypes } = require("sequelize") ;

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

module.exports = productTable ;