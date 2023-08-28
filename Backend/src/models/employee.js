const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    travelsname:{
        type:String,
        required: true
    },
    departure:{
        type:String,
        required: true
      
    },
    duration:{
        type:String,
        required: true
    },
    arrival:{
        type:String,
        required: true
    },
    ratings:{
        type:Number,
        required: true
    },
    fare :{
        type:Number,
        required:true
    }
})

const employee = new mongoose.model('employee',employeeSchema);

module.exports = employee;