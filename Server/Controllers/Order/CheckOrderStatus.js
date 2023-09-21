const OrderSchema = require("../../Database_Schema/OrderSchema");

const CheckOrderStatus = async (req, res) => {
    try {
        const { orderid } = req.body;
        const CheckStatus = await OrderSchema.findOne({ trackingid: orderid }).select({ __v: 0, orderdata: 0 });
        if (CheckStatus) {
            res.json({ success: true, status: 200, CheckStatus });
        } else {
            res.json({ success: false, status: 401 });
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = CheckOrderStatus;