const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require ("cors");
const employeeModel = require ('./src/models/employee')
const employeeRoute = require("./src/Routers/employeeRoute")
const mongoose = require("mongoose")


app.use(express.json())
app.use("/", employeeRoute)
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:2701/Redbus",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
})
.then(()=>{
    console.log("Connected..")
}).catch((err)=>{
    console.log("Not Connected")
    console.log(err)
})

app.get("/getbus", (req, res) =>{
    employeeModel.find()
    .then(products)
})

app.listen(port, ()=>{
    console.log(`Connected ${port}`)
})