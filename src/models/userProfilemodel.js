const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
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
});


const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;