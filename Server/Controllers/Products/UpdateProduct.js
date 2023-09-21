const Productmodal = require("../../Database_Schema/ProductSchema");

const UpdateProduct = async (req , res) => {
    try {
        const { name, quantity, price , id} = req.body;
        if (id) {
            const UpdateProduct = await Productmodal.findOneAndUpdate({ _id: id }, { $set: { ProductName: name, ProductQuantity: quantity, ProductPrice: price }} , {new : true});
            UpdateProduct ? res.json({ success: true, status: 201 }) : res.json({ success: false, status: 401 }); 
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = UpdateProduct;