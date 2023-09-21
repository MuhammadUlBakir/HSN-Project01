const mongoose = require('mongoose');
const AuthSch = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type : String
    }
}, { timestamps: true });
const Authschema = mongoose.model("Authentication" , AuthSch);
module.exports = Authschema;
