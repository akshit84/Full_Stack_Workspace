const UserModel = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
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
    res.status(201).json({ message: "User Created", success: true });
  } catch (error) {
    console.log("Signup error:- ", error);
    res.status(500).json({ message: "interval server error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);

    const user = await UserModel.findOne({ email });
    // console.log(user);

    const errMsg = "Auth failed: email or password is wrong.";
    if (!user) {
      return res.status(403).json({ message: errMsg, success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      res.status(403).json({ message: errMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
    };
    res.status(200).json({
      message: "Login success",
      success: true,
      token: jwtToken,
      user: userData,
    });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ message: "interval server error", success: false });
  }
};

module.exports = {
  signup,
  login,
};
