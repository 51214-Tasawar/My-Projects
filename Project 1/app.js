const adminroute = require("./routes/adminroute")
const customerroute = require("./routes/customerroute")
const {} =

const express  = require("express")
const {}  = require("body-parser");
const bodyParser = require("body-parser");
const customerroute = require("./routes/customerroute");


const App = express();


App.use(bodyParser.urlencoded({extended : false}))
App.use(bodyParser.json())

const port = 3009 ;


App.use( "/admin" , adminroute)
App.use("/customer" , customerroute)
App.listen(port , ()=>{
    console.log(`Testing Project At Port ${port}`)
})