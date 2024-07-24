const CoursesData = require("../data/coursesData");

// Get all courses
const getAllData = (req, res) => {
  if (CoursesData && CoursesData.length > 0) {
    res.json({
      status: "success",
      data: CoursesData,
    });
  } else {
    res.json({
      status: "success",
      data: [],
    });
  }
};

// Get course by ID
const getDataById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = CoursesData.find((item) => item.id === id);

  if (data) {
    res.json({
      status: "success",
      data: [data],
    });
  } else {
    res.status(404).json({
      status: "error",
      data: [],
    });
  }
};

// Add a new course
const addCourse = (req, res) => {
  try {
    const { title, ...otherFields } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: "Course title is required" });
    }
    
    const existingCourseByTitle = CoursesData.find(course => course.title === title);
    if (existingCourseByTitle) {
      return res.status(400).json({ message: "Course with this title already exists" });
    }
    
    // Assign a new unique ID
    const newId = CoursesData.length > 0 ? CoursesData[CoursesData.length - 1].id + 1 : 1;
    
    // Create a new course object with id first
    const newCourse = { id: newId, title, ...otherFields };
    
    CoursesData.push(newCourse);
    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Edit an existing course
const editCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedCourse = req.body;

  const index = CoursesData.findIndex(course => course.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Course not found" });
  }

  if (!updatedCourse.title) {
    return res.status(400).json({ message: "Course title is required" });
  }

  // Update the course while preserving the existing id
  CoursesData[index] = { ...CoursesData[index], ...updatedCourse, id };

  res.json(CoursesData[index]);
};

// Delete a course
const deleteCourse = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const courseIndex = CoursesData.findIndex((course) => course.id === id);

  if (courseIndex === -1) {
    return res.status(404).json({ message: "Course not found" });
  }

  const deletedCourse = CoursesData.splice(courseIndex, 1)[0];

  return res.status(200).json({
    message: "Course deleted successfully!",
    deletedCourse: deletedCourse,
  });
};

module.exports = {
  getAllData,
  getDataById,
  addCourse,
  editCourse,
  deleteCourse,
};
