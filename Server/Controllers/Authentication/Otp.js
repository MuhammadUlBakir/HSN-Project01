const Otp = async (req, res) => {
    try {
        console.log(req.body);
        const { otpnum, useremail } = req.body;
        console.log(req.body)
        
    } catch (error) {
        console.log(error);
    }
};
module.exports = Otp