const mongoose = require("mongoose");

const UserProfile = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bio: {
    type: String,
  },
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  profilepic:{
    type: String,
    required:false, 
  }
});


const Profile = mongoose.model("Profile", UserProfile);
module.exports = Profile;