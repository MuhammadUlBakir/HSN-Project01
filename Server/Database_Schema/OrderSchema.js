const mongoose = require('mongoose'); // Erase if already required
const DAT = require("date-and-time")
const date = new Date();

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    orderdata: [],
    recivername: {
        type: String,
        required : true
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
       
    },
    address:{
        type:String,
        required:true,
    },
    cardnum: {
        type : Number
    },
    countryname: {
        type : String
    },
    totalamount: {
        type : Number  
    },
    orderdate: {
        type: String,
        default : DAT.format(date, "D/MM/YYYY")
    },
    ordermonth: {
        type: String,
        default: DAT.format(date, "MMMM")
    },
    trackingid: {
        type: Number,
      
    },
    orderstatus: {
        type: String,
        enum: ["Process", "Shipped", "Delevired", "Cancelled"],
        default:"Process"
    }
});

//Export the model
module.exports = mongoose.model('Orders', userSchema);