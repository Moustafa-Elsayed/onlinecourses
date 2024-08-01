const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  role: { type: String,enum:["USER","ADMIN"] ,default:"USER"},
});

module.exports = mongoose.model("User", UserSchema);