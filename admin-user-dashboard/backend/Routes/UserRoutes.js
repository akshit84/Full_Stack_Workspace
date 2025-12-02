const router = require("express").Router();
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controllers/UserController");
const { authMiddleware, isAdmin } = require("../Middleware/auth");

router.get("/allUsers", authMiddleware, isAdmin, getAllUser);

router.post("/createUser", authMiddleware, isAdmin, createUser);

router.patch("/updateUser/:id", authMiddleware, isAdmin, updateUser);

router.delete("/deleteUser/:id", authMiddleware, isAdmin, deleteUser);

module.exports = router;
