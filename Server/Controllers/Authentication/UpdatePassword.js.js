const Authschema = require("../../Database_Schema/AuthSchema");
const bcrypt = require('bcrypt');
const Updatepass = async (req , res , next) => {
    try {
        const { pass, email } = req.body;
        const HashedPass = await bcrypt.hash(pass, 12);
        const Update = await Authschema.findOneAndUpdate({ email: email }, { $set: { password: HashedPass } }, { new: true });
        Update ? res.json({ success: true, status: 201 }) : res.json({ success: false, status: 401 });
    } catch (error) {
        console.log(error);
    }
};
module.exports = Updatepass;