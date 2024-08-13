const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload"); // Your multer setup

// Public Routes
router.post("/register", upload.single("avatar"), userController.register);
router.post("/login", userController.login);

// Protected Routes
router.delete(
  "/delete/:id",
  authMiddleware.authenticate,
  userController.deleteUser
);
router.get("/all", authMiddleware.authenticate, userController.getAllUsers);

module.exports = router;
