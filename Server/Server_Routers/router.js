const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Signup = require('../Controllers/Authentication/Signup');
const Signin = require('../Controllers/Authentication/Signin');
const Otp = require('../Controllers/Authentication/Otp');
const VerifyEmail = require('../Controllers/Authentication/VerifyEmail');
const Updatepass = require('../Controllers/Authentication/UpdatePassword.js');
const Create = require('../Controllers/Category/Create');
const Update = require('../Controllers/Category/Update');
const Delete = require('../Controllers/Category/Delete');
const Read = require('../Controllers/Category/Read');
const bodyparser = require('body-parser');
const CreateProduct = require('../Controllers/Products/CreateProduct');
const ReadProduct = require('../Controllers/Products/ReadProduct');
const UpdateProduct = require('../Controllers/Products/UpdateProduct');
const DeleteProduct = require('../Controllers/Products/DeleteProduct');
const Userdata = require('../Controllers/Authentication/Userdata');
const CreateOrder = require('../Controllers/Order/CreateOrder');
const CheckOrderStatus = require('../Controllers/Order/CheckOrderStatus');
//-------------------------
const router = express();
//--------------------------
router.use(bodyparser.json({limit : "10mb"}));
router.use(bodyparser.urlencoded({ limit : "10mb" , extended: true }));
router.use(cors());
router.use(morgan('dev'));
//--------------------------
require("../Database_Connection/Connection");
//--------------------------
router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/otp", Otp);
router.post("/otpemail" , VerifyEmail );
router.post("/updatepass", Updatepass);
router.post("/userdata" , Userdata)
//--------------------------
router.post("/createcategory", Create);
router.put("/updatecategory", Update);
router.post("/deletecategory", Delete);
router.get("/readcategory", Read);
//--------------------------
router.post("/createproduct", CreateProduct);
router.get("/readproduct", ReadProduct);
router.put("/updateproduct", UpdateProduct);
router.post("/deleteproduct", DeleteProduct);
//--------------------------
router.post("/createorder", CreateOrder);
router.post("/trackorder", CheckOrderStatus);
//--------------------------
module.exports = router;