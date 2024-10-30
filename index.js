const express=require("express");
const path = require("path")
const app=express()
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get("/",(req,res)=>{
    res.render('home')
});

app.get("/register",(req,res)=>{
    res.render('register')
});
app.get("/login",(req,res)=>{
    res.render('home')
});
app.post("/chklogin",(req,res)=>{
    var email=req.body.txtEmail;
    var pass=req.body.txtPass;
    console.log(email,pass);

    res.send("This is login data collector");
});
app.listen(5000,()=>console.log("Server is running"));

