const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const protect = require("../middleware/auth.middleware");
const { uploadImage } = require("../controllers/upload.controller");

router.post("/", protect, upload.single("image"), uploadImage);

module.exports = router;