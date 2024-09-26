const express = require("express");
const { updateProfile, getProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");
const {profileImage}=require("../middleware/uploadMiddleware");
// const userController= require('../controllers/userController');
const router = express.Router();

// router to create a new user
router.put("/update",authMiddleware,profileImage.single('profilepic'), updateProfile);
// get profile
router.get("/get",authMiddleware, getProfile);

module.exports=router;
// router.post( '/create',userController.createUser);