const Authschema = require("../../Database_Schema/AuthSchema");
const nodemailer = require("nodemailer");

const VerifyEmail = async (req, res) => {
    try {
        const { loginemail } = req.body;
        console.log(loginemail)
        const verify = await Authschema.findOne({ email: loginemail });
        console.log(verify)
        if (verify) {
            const Otpcode = Math.floor(1000 + Math.random() * 9000);
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "bakirmuhammad74@gmail.com",
                    pass: "btps cgpp ujxq bazq"
                }
            });
            let mailOptions = {
            from: process.env.Myemail, 
            to: verify.email, 
            subject: "OTP Login Verification", 
            html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"> HSN Design Studio</a>
              </div>
              <p style="font-size:1.1em">Hi, Customer Name</p>
              <p>Thank you for Visiting Our Page. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${Otpcode}</h2>
              <p style="font-size:0.9em;">Regards,<br />Your HSN Design Studio</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>For Contact :  1234567890</p>
                <p>HSN Hyderabad</p>
                <p>Sindh</p>
              </div>
            </div>
          </div>`, // html body
            };
             transporter.sendMail(mailOptions, ((err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Done")
                    res.json({ success: true, status: 200, Otpcode })
                    // storage.setItem('otp', JSON.stringify(Otpcode));
                }
            }))
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = VerifyEmail