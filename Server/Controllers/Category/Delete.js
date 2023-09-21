const Categorymodal = require("../../Database_Schema/CategorySchema");

const Delete = async (req , res) => {
    try {
        const { id } = req.body;
        const Deletestatus = await Categorymodal.findOneAndDelete({_id : id});
        if (!Deletestatus) {
            res.json({ msg: "Not Deleted", status: 401 , success : false });
        } else {
            res.json({ msg: "Category Deleted", status : 200 , success : true});

        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Delete;