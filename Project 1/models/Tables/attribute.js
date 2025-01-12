const sequelize = require("../../dbconnection");

const {DataTypes , Model} = require("sequelize");
const {} = require("uuid")

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

attribute.beforeCreate((attribute)=>{
    attribute.attributeId
})

module.exports = attribute ;
