const express  = require("express")

const App = express();

const port = 3000 ;

App.listen(port , ()=>{
    console.log(`Testing Project At Port ${port}`)
})