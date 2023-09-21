const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required:true,
        unique:true,
    },
    ProductQuantity:{
        type : Number,
        required:true,
    },
    ProductPrice:{
        type : Number,
        required:true,
    },
    ProductCategory:{
        type:String,
        required:true,
    },
    ProductImage: {
        type: String,
        required : true
    }
});

//Export the model
const Productmodal = mongoose.model('Product', userSchema);
module.exports=Productmodal;