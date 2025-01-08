const adminroute = require("./routes/adminroute")
const customerroute = require("./routes/customerroute")
const vendorroute = require ("./routes/vendorroute")
const { db } = require("./models/index")

const express  = require("express")

const {}  = require("body-parser");
const bodyParser = require("body-parser");





const App = express();


App.use(bodyParser.urlencoded({extended : false}))
App.use(bodyParser.json())

const port = 3009 ;


App.use( "/admin" , adminroute)
App.use("/customer" , customerroute)
App.use("/vendor" , vendorroute)

db.connection.sync({alter:true , logging : false}).then(()=>{
    console.log("Connected to the Database")
}).catch(()=>{
    console.log("not Connected to the Database")
})

App.listen(port , ()=>{
    console.log(`Testing Project At Port ${port}`)
})