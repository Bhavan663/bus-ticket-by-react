const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://root:bhavan6603@cluster0.j1ssdbz.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected..")
}).catch((err)=>{
    console.log("Not Connected")
    console.log(err)
})