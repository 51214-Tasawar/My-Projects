const adminroute = require("./routes/adminroute")


const express  = require("express")

const App = express();

const port = 3009 ;


App.use( "/admin" , adminroute)
App.listen(port , ()=>{
    console.log(`Testing Project At Port ${port}`)
})