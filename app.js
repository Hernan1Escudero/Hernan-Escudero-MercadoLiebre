const express= require("express")
const PORT =3030
const app= express()
const path= require("path")


app.use(express.static('public'))
app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")))
app.get("/home",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")))
app.get("/header",(req,res)=> res.sendFile(path.join(__dirname,"views","partials","header.html")))
app.get("/footer",(req,res)=> res.sendFile(path.join(__dirname,"views","partials","footer.html")))
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"views","register.html")))
app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"views","login.html")))
app.listen(PORT,()=>console.log("corriendo en ","localhost:"+PORT))
