const {Model , DataTypes} = require("sequelize") ;
const {v4 : VariationId } = require("uuid")

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

ProductVariation.beforeCreate((ProductVariation)=>{
    ProductVariation.VariationId = VariationId();
})


module.exports = ProductVariation ;