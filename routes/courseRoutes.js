const express = require('express');
const router = express.Router();
const CoursesController = require('../controllers/courseController');
const allowedTo = require('../middlewares/allowedTo');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadHandler = require('../middlewares/upload'); 
router.get('/courses', CoursesController.getAllCourses);
router.get('/courses/:id', CoursesController.getCourseById);
router.post(
  '/courses',
  authMiddleware.authenticate,
  allowedTo('ADMIN'),
  uploadHandler("photo",3), // Add multer middleware for file upload
  CoursesController.addCourse
);
router.put(
  '/courses/:id',
  authMiddleware.authenticate,
  allowedTo('ADMIN'),
  CoursesController.editCourse
);
router.delete(
  '/courses/:id',
  authMiddleware.authenticate,
  allowedTo('ADMIN'),
  CoursesController.deleteCourse
);

module.exports = router;
