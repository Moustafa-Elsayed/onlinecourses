const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/courseController");

router.get("/courses", CoursesController.getAllCourses);
router.get("/courses/:id", CoursesController.getCourseById);
router.post("/courses", CoursesController.addCourse);
router.put("/courses/:id", CoursesController.editCourse);
router.delete("/courses/:id", CoursesController.deleteCourse);

module.exports = router;
