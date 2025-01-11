const {DataTypes , Model} = require("sequelize");
const sequelize = require("../../dbconnection");

class attribute extends Model { }; 

attribute.init({
   attributeId : {
    primaryKey : true ,
    type : DataTypes.STRING()
   },
   name : {
    type : DataTypes.STRING()
   } ,
   value : {
    type : DataTypes.STRING()
   }
},{
    name : "attribute" ,
    timestamps : true ,
    paranoid : true, 
    sequelize : sequelize
})

module.exports = attribute ;
