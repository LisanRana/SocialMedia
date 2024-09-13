const express = require("express");
const { createUser } = require("../controllers/userProfilecontroller");
// const userController= require('../controllers/userController');
const router = express.Router();

// router to create a new user
router.post("/create", createUser1);

module.exports=router;
// router.post( '/create',userController.createUser);