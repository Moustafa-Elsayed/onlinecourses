const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected Routes
router.delete('/delete/:id', authMiddleware.authenticate, userController.deleteUser);
router.get('/all', authMiddleware.authenticate, userController.getAllUsers);

module.exports = router;
