const express = require("express");
const { userRegister, userLogin } = require("../controllers/usercontroller");
// const userController= require('../controllers/userController');
const router = express.Router();

// router to create a new user
router.post("/create", userRegister);



router.post('/login',userLogin)

module.exports=router;
// router.post( '/create',userController.createUser);
