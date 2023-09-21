const Authschema = require("../../Database_Schema/AuthSchema");
const bcrypt = require('bcrypt');
const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body.data
        //------------------- Check User
        const CheckUser = await Authschema.findOne({ email: email, username: username });
        if (CheckUser) {
            res.json({ status: 418, success: false });
        } else {
            const HashedPassword = await bcrypt.hash(password, 12);
            if (!HashedPassword) {
                res.json({ success: false });
            } else {
                const Create = await Authschema.create({
                    username, email, password: HashedPassword
                });
                Create ? res.json({ success: true, status: 201 }) : "";
                console.log(Create);
            }
            
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Signup;