const Authschema = require("../../Database_Schema/AuthSchema");

const Userdata = async (req, res, next) => {
  try {
      const { token } = req.body;
    //   console.log(token);
      if (token) {
          const userdata = await Authschema.findOne({ token: token });
          res.json({ status: 200, success: true , userdata });
      } else {
          res.json({ status: 401, success: false });
      }
  } catch (error) {
      console.log(error);
  }  
};
module.exports = Userdata;