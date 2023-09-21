const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.Cname,
    api_key: process.env.Ckey,
    api_secret: process.env.Seckey
});
module.exports = cloudinary;
