const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Define the upload directory
const uploadDir = path.join(__dirname, "uploads");

// Ensure the directory exists, create it if it doesn't
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
