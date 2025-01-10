const sequelize = require("../../dbconnection")

const {Model , DataTypes } = require("sequelize") ;

class productTable extends Model{ }

productTable.init(
    {
        productId : {
            primaryKey : true  ,
            type : DataTypes.STRING(1000)
        },
        name : {
            unique : true ,
            type : DataTypes.STRING(100),
            allowNull : false
        } ,
        description  : {
            type : DataTypes.STRING(1000),
            allowNull : false
        } ,
        price : {
            type : DataTypes.STRING(1000),
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