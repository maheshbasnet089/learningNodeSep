const express  = require("express") // requiring express package
const app = express() // storing it in app , app vanney variable throughout use garxum

// '/' ma gayo vaney k dekauney hae ,request paxi response hunae paryo
app.get('/',(req,res)=>{
    res.send("<h1>bye </h1>")
    
})

app.get("/about",(req,res)=>{
    res.send("About Page hello world")
})

app.get("/contact",(req,res)=>{
    res.send("From contact page")
})



// port number -> room number for certain time
app.listen(3000,function(){
    console.log("NodeJs Project has started on port 3000")
})