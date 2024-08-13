const Course = require("../models/Course.model");
const path = require("path");

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({
      status: "success",
      data: courses,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);

    if (!course) {
      return res
        .status(404)
        .json({ status: "error", message: "Course not found" });
    }

    res.json({ status: "success", data: course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  try {
    const { title, subtitle, duration, level, instructor, curriculum } = req.body;

    // Validate the title
    if (!title) {
      return res.status(400).json({ message: "Course title is required" });
    }

    // Check if a course with the same title already exists
    const existingCourse = await Course.findOne({ title });
    if (existingCourse) {
      return res
        .status(400)
        .json({ message: "Course with this title already exists" });
    }

    // Handle the uploaded file (if any)
    let photo;
    if (req.file) {
      photo = path.join("uploads", req.file.filename).replace(/\\/g, "/");
    }

    // Safely parse the curriculum
    let parsedCurriculum = [];
    if (curriculum) {
      try {
        parsedCurriculum = JSON.parse(curriculum);
      } catch (error) {
        return res.status(400).json({ message: "Invalid curriculum format" });
      }
    }

    // Create a new course instance
    const newCourse = new Course({
      title,
      subtitle,
      duration,
      level,
      instructor,
      curriculum: parsedCurriculum, // Use the safely parsed curriculum
      photo,
    });

    // Save the new course to the database
    await newCourse.save();

    // Respond with success
    res.status(201).json({ status: "success", data: newCourse });
  } catch (error) {
    // Respond with error
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Edit an existing course
const editCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCourse = req.body;

    const course = await Course.findByIdAndUpdate(id, updatedCourse, {
      new: true,
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ status: "success", data: course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res
      .status(200)
      .json({ message: "Course deleted successfully!", data: deletedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  editCourse,
  deleteCourse,
};
