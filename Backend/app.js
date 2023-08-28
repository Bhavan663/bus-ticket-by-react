const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require("./src/DBConnection/conn")
const employeeRoute = require("./src/Routers/employeeRoute")


app.use(express.json())
app.use("/", employeeRoute)

app.get("/employee/get" ,(req,res) =>{
    employees.find((err,data)=>{
        if(err){
            res.send(500).send(err)
            console.log(err);
        }else{
            res.status(200).send(data)
        }
    });
})

app.listen(port, ()=>{
    console.log(`Connected ${port}`)
})