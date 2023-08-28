const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


app.use("/", (req, res)=>{
    res.send("Hello Node");
})

mongoose.connect(url)
.then(()=>{
    app.listen(8000);
    console.log("Mongoose connected.")
})
.catch((err) =>{
    console.log(err)
})