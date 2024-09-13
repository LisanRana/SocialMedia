// controller for creating a new user

const userProfilemodel = require("../controllers/userProfilecontroller");
const createUser1 = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = new userProfilemodel({
      fullname: data.fullname,
      phone:data.phone,
      hobbies: data.hobbies,
      qualification:data.qualification,
      experiences:data.experiences
    });

    const userResponse = await user.save();

    return res.status(201).json({ msg: "User created", userResponse });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUser1 };