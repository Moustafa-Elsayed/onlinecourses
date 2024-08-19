const mongoose = require("mongoose");
const { Schema } = mongoose;

const curriculumSchema = new Schema({
  number: String,
  title: String,
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  curriculum: [curriculumSchema],
  duration: { type: String, required: true },
  level: { type: String, required: true },
  instructor: { type: String, required: true },
  photos: { type: [String], default: ["uploads/default.jpg"] }, // Changed to an array of strings
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
