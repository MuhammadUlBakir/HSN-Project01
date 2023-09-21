const Categorymodal = require("../../Database_Schema/CategorySchema");

const Create = async (req , res) => {
    try {
        const { category } = req.body;
        const Check = await Categorymodal.findOne({ category: category });
        if (Check) {
            res.json({ msg: "Already Valid", status: 401 , success : false });
        } else {
            const NewCategory = await Categorymodal.create({ category: category });
            NewCategory ? res.json({ msg: "Category Created", status : 201 , success : true}) : res.json({ msg: "Not Created", status: 401 , success : false });

        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Create;