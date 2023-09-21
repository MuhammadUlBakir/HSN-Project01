const Productmodal = require("../../Database_Schema/ProductSchema");
const cloudnairy = require("../../Utlis/config");
const CreateProduct = async (req, res) => {
    try {
        const { data, img1 } = req.body;
        const { productname, productcategory, totalstock, productprice } = data;
        const res1 = cloudnairy.uploader.upload(img1, {
            folder: "HSN-Project01"
        });
        if (res1) {
            const NewProduct = await Productmodal.create({ ProductName: productname, ProductCategory: productcategory, ProductPrice: productprice, ProductQuantity: totalstock, ProductImage: (await res1).secure_url });
            console.log(NewProduct);
            NewProduct ? res.json({ success: true, status: 201 }) : res.json({ success: false, status: 401 });
       }
    } catch (error) {
        console.log(error);
    }
};
module.exports = CreateProduct;