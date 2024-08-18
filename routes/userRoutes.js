const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadHandler = require("../middlewares/upload"); // Your multer setup

// Public Routes
router.post("/register", uploadHandler("avatar",1), userController.register);
router.post("/login", userController.login);

// Protected Routes
router.delete(
  "/delete/:id",
  authMiddleware.authenticate,
  userController.deleteUser
);
router.get("/all", authMiddleware.authenticate, userController.getAllUsers);

module.exports = router;
