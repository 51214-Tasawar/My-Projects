const {Model , DataTypes} = require("sequelize") ;
const sequelize = require("../../dbconnection")

class ProductVariation extends Model { } ;

ProductVariation.init(
   {
    VariationId :{
       primaryKey : true ,
       type : DataTypes.STRING(1000)
    } ,
    variationName :{
        type : DataTypes.STRING(),
        allowNull:false ,
        unique : true
    } ,
    descryption: {
        type : DataTypes.STRING(1000) ,
        allowNull : false 
    } ,
    quantity : {
        type : DataTypes.STRING(1000) ,
        allowNull : false 
    }
   } ,
  {
    name : "ProductVariation",
    timestamps : true ,
    paranoid : true,
   sequelize : sequelize
  }
)

module.exports = ProductVariation ;