const Productmodal = require("../../Database_Schema/ProductSchema");

const DeleteProduct = async (req , res) => {
    try {
        const { id } = req.body;
        const Delete = await Productmodal.findOneAndDelete({ _id: id });
        Delete ? res.json({ success: true, status: 200 }) : res.json({ success: false, status: 401 });
    } catch (error) {
        console.log(error);
    }
};
module.exports = DeleteProduct;