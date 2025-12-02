const UserModel = require("../Models/User");
const bcrypt = require("bcryptjs");

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find({}).select("-password");
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    // console.log(fullname, email, password, role);

    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);

    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exist, you can login",
        success: false,
      });
    }

    const userModel = new UserModel({
      fullname,
      email,
      password: hashPassword,
      role,
    });
    await userModel.save();

    const userData = {
      _id: userModel._id,
      fullname: userModel.fullname,
      email: userModel.email,
      role: userModel.role,
    };
    res
      .status(201)
      .json({ message: "User Created", success: true, user: userData });
  } catch (error) {
    console.log("Signup error:- ", error);
    res.status(500).json({ message: "interval server error", success: false });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { fullname, email } = req.body;

    if (fullname !== undefined) user.fullname = fullname;
    if (email !== undefined) user.email = email;

    const updatedUser = await user.save();

    const { password, ...rest } = updatedUser.toObject();

    return res.status(200).json({
      success: true,
      message: "User Updated Successfully.",
      user: rest,
    });
  } catch (err) {
    console.log("Error updating user.", err);
    return res.status(500).json({
      success: false,
      message: "Server error while updating user",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // console.log(blog);

    // const deletedUser = await user.deleteOne({ userId });
    await UserModel.findByIdAndDelete(userId);
    return res.status(200).json({
      success: true,
      message: "User deleted Successfully.",
    });
  } catch (err) {
    console.log("Error deleting user.", err);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting user.",
    });
  }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
