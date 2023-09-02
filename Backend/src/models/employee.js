const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    travelsname:{
        type:String,
        
    },
    departure:{
        type:String,
        
      
    },
    duration:{
        type:String,
        
    },
    arrival:{
        type:String,
    
    },
    ratings:{
        type:Number,
        
    },
    fare :{
        type:Number,
        
    },
    typeofbus:{
        type:String,
    },
    date:{
        type:String,
    },
    reviewers:{
        type:Number,
    },
    boardingpoint:{
        type:String,
    },
    endingpoint:{
        type:String,
    }

})

const employeeModel = new mongoose.model('bus',employeeSchema);

module.exports = employeeModel;