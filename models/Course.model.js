// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const coursesSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   duration: {
//     type: String,
//     required: true,
//   },
//   level: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Course", coursesSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const curriculumSchema = new Schema({
  number: String,
  title: String
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  curriculum: [curriculumSchema],
  duration: { type: String, required: true },
  level: { type: String, required: true },
  instructor: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;