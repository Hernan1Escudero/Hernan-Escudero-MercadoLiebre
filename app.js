const express= require("express")
const PORT =3030
const app= express()
const path= require("path")


app.use(express.static('public'))
app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")))
app.get("/home",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")))

app.listen(PORT,()=>console.log("corriendo en ","localhost:"+PORT))

// vamos a ver estos cambios