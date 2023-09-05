const express  = require("express") // requiring express package
const app = express() // storing it in app , app vanney variable throughout use garxum

// ma ejs use garna aateko xu , k k chayiney ho env set gardey
app.set("view engine","ejs")

// '/' ma gayo vaney k dekauney hae ,request paxi response hunae paryo
app.get('/',(req,res)=>{
    const name = "Manish"
    // views vitra ko file render garyo 
    res.render("home",{name:name})
    
})

app.get("/about",(req,res)=>{
    res.render("about",{firstName:"Manish"})
})

app.get("/contact",(req,res)=>{
    res.send("From contact page")
})



// port number -> room number for certain time
app.listen(3000,function(){
    console.log("NodeJs Project has started on port 3000")
})