const Categorymodal = require("../../Database_Schema/CategorySchema");

const Update = async (req , res) => {
    try {
        const { category , id } = req.body;
        const UpdateStatus = await Categorymodal.findOneAndUpdate({_id : id} , {$set : {category : category}} , {new : true});
        if (!UpdateStatus) {
            res.json({ msg: "Not Updated", status: 401 , success : false });
        } else {
            res.json({ msg: "Category Updated", status : 201 , success : true});

        }
    } catch (error) {
        console.log(error);
    }
};
module.exports = Update;