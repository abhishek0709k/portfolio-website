const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const messageModel = require("./models/message")
const { createHmac , randomBytes } = require("crypto")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 8001
mongoose.connect("mongodb://127.0.0.1:27017/portfolio-app").then(()=>{ console.log("mongoDB connected successfully")})
app.use(express.static(path.join(__dirname , "../public")))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.urlencoded({ extended: true }));
app.get("/" , (req , res)=>{
    return res.sendFile(path.join(__dirname, "../public", "home.html"))
})
app.get("/contact" , (req ,res)=>{
    return res.sendFile(path.join(__dirname , "../public" , "contact.html"))
})
app.post("/sendMessage" , async(req ,res)=>{
    const { email , password , message } = req.body
    const salt = randomBytes(32).toString('hex')
    const hashedPassword = createHmac('sha256' , salt).update(password).digest('hex')
    await messageModel.create({
        email, 
        password : hashedPassword,
        message,
        salt,
    })
    return res.redirect("/")
})
app.get("/amazonCloneProject" , (req , res)=>{
    return res.sendFile(path.join(__dirname , "../public/amazonproject/amazon project/amazon.html"))
})
app.get("/figmaDesignProject" , (req , res)=>{
    return res.sendFile(path.join(__dirname , "../public/bootstrap/projectscss/index.html"))
})
app.listen(PORT , ()=>{
    console.log(`Server is running on PORT:https://localhost:${PORT}`)
})