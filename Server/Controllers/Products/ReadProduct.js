const Productmodal = require("../../Database_Schema/ProductSchema");

const ReadProduct = async (req , res) => {
    try {
        const Product = await Productmodal.find().select({ __v: 0 });
        Product ? res.json({ success: true, status: 200, Product }) : res.json({ success: false, status: 401 });
    } catch (error) {
        console.log(error);
    }
};
module.exports = ReadProduct;