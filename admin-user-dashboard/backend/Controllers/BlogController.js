const bcrypt = require("bcryptjs");
const BlogModel = require("../Models/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    // console.log(req.user._id);

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required." });
    }

    const newBlog = await BlogModel.create({
      title,
      content,
      author: req.user._id,
    });

    res.status(200).json({
      message: "Blog Created successfully.",
      success: true,
      blog: newBlog,
    });
  } catch (error) {
    console.log("Create blog error", error);
    return res.status(400).json({
      message: "Server error",
      success: false,
    });
  }
};

const getAllUserBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find({ author: req.user._id });
    // console.log(blogs);

    res.status(200).json({ success: true, blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id;
    const userRole = req.user.role;

    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    if (blog.author.toString() !== userId && userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this blog",
      });
    }

    const { title, content } = req.body;

    if (title !== undefined) blog.title = title;
    if (content !== undefined) blog.content = content;

    const updatedBlog = await blog.save();

    return res.status(200).json({
      success: true,
      message: "Blog Updated Successfully.",
      updatedBlog,
    });
  } catch (err) {
    console.log("Error updating blog.", err);
    return res.status(500).json({
      success: false,
      message: "Server error while updating blog",
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id;
    const userRole = req.user.role;

    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    // console.log(blog);

    if (blog.author.toString() !== userId && userRole !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to delete this blog",
      });
    }

    await blog.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Blog deleted Successfully.",
    });
  } catch (err) {
    console.log("Error deleting blog.", err);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting blog",
    });
  }
};

const getBlogsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const blogs = await BlogModel.find({ author: userId })
      .populate("author", "fullname email role")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (err) {
    console.log("Error Fetching blogs", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = {
  createBlog,
  getAllUserBlog,
  updateBlog,
  deleteBlog,
  getBlogsByUser,
};
