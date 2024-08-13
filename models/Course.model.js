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
  photo: { type: String, default: "uploads/defult.jpg" },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
