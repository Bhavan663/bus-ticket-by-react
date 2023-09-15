const express = require("express")
const employee = require("./../models/employee")

const router = express.Router();



router.post("/employee", async(req,res)=>{
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED"
        })
    }
    else{
        res.json({
            status:"SUCCESS",

        })
    }
})

module.exports = router