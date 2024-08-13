const express = require("express");
const coursesRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const cors = require("cors");
const path = require('path');

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://moelsayed:onlinecourses%40123@onlinecourses.bfc9hky.mongodb.net/onlinecourses"
  )
  .then(() => console.log("Connected!"));
// Use logger middleware
app.use(express.json());

// Use data routes
app.use("/api", coursesRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
