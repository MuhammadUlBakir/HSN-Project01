const Categorymodal = require("../../Database_Schema/CategorySchema");

const Read = async (req , res) => {
    try {
        const CategoryData = await Categorymodal.find().select({__v : 0});
        if (CategoryData) {
            res.json({ CategoryData , status : 201 , success : true});
        } else {
            res.json({ status : 401 , success : false});
        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Read;