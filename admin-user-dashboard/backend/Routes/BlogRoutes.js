const router = require("express").Router();

const {
  createBlog,
  getAllUserBlog,
  updateBlog,
  deleteBlog,
  getBlogsByUser,
} = require("../Controllers/BlogController");
const {authMiddleware, isAdmin} = require("../Middleware/auth");

router.get("/myBlog", authMiddleware, getAllUserBlog);



router.post("/createBlog", authMiddleware, createBlog);

router.patch("/updateBlog/:id", authMiddleware, updateBlog);

router.delete("/deleteBlog/:id", authMiddleware, deleteBlog);

module.exports = router;
