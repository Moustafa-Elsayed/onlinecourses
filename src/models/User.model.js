const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  avatar: {
    type: String,
    default: "uploads/ninga.jpg",
  },
});

module.exports = mongoose.model("User", UserSchema);
