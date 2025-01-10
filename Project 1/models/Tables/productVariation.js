const {Model , DataTypes} = require("sequelize") ;

class ProductVariation extends Model { } ;

ProductVariation.init(
   {
    VariationId :{
       primaryKey : true ,
       type : DataTypes.STRING(1000)
    }
   } ,
  {}
)