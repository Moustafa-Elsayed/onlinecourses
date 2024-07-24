const express = require("express");
const logger = require("./middlewares/logger");
const dataRoutes = require("./routes/dataRoutes");
const coursesRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
// Use logger middleware
app.use(logger);
app.use(express.json());

// Use data routes
app.use("/api", dataRoutes);
app.use("/api", coursesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
