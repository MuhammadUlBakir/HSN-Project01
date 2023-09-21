const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true,
    },
    status: {
        type: String,
        enum: ["Active", "Unactive"],
        default : "Active"
    }
    
})

//Export the model 
const Categorymodal = mongoose.model('Product-Category', userSchema);
module.exports = Categorymodal
