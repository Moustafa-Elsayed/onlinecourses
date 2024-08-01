const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/courseController");
const allowedTo = require("../middlewares/allowedTo");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/courses", CoursesController.getAllCourses);
router.get("/courses/:id", CoursesController.getCourseById);
router.post("/courses",authMiddleware.authenticate ,allowedTo("ADMIN"), CoursesController.addCourse);
router.put("/courses/:id",authMiddleware.authenticate ,allowedTo("ADMIN"), CoursesController.editCourse);
router.delete("/courses/:id", authMiddleware.authenticate ,allowedTo("ADMIN"),   CoursesController.deleteCourse);

module.exports = router;
