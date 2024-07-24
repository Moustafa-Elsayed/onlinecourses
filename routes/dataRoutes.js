const express = require("express");
const router = express.Router();
const { getAllData, getDataById } = require("../controllers/dataController");

router.get("/data", getAllData);
router.get("/data/:id", getDataById);

module.exports = router;
