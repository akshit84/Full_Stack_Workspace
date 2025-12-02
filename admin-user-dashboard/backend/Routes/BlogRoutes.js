const router = require("express").Router();

const {
  createBlog,
  getAllUserBlog,
  updateBlog,
  deleteBolg,
  getBlogsByUser,
} = require("../Controllers/BlogController");
const {authMiddleware, isAdmin} = require("../Middleware/auth");

router.get("/myBlog", authMiddleware, getAllUserBlog);

router.get("/user/:userId", authMiddleware, isAdmin, getBlogsByUser);


router.post("/createBlog", authMiddleware, createBlog);

router.patch("/updateBlog/:id", authMiddleware, updateBlog);

router.delete("/deleteBlog/:id", authMiddleware, deleteBolg);

module.exports = router;
