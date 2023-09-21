const Authschema = require("../../Database_Schema/AuthSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Signin = async (req , res) => {
    try {
        const { email, password } = req.body;
        
        const VerifyUser = await Authschema.findOne({ email: email });
        if (VerifyUser) {
            const DecodePass = await bcrypt.compare(password, VerifyUser.password);
            if (DecodePass) {
                const token = await jwt.sign({ id: VerifyUser._id }, process.env.Secret);
                await Authschema.findOneAndUpdate({ _id: VerifyUser._id }, { $set: { token: token } }, { new: true });
                token ? res.json({ success: true, status: 200, token }) : res.json({ success: false });
                console.log(token);
            } else {
                res.json({success : false , status : 400})
            }
           
        } else {
            res.json({success : false , status : 400})
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Signin;
