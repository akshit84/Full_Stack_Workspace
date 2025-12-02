const { signup, login } = require("../Controllers/AuthController");
const authMiddleware = require("../Middleware/auth");
const BlogModel = require("../Models/Blog");
const UserModel = require("../Models/User");
// const BlogRoutes = require('../Routes/BlogRoutes')

const router = require("express").Router();

router.post("/login", login);

router.post("/signup", signup);



module.exports = router;
