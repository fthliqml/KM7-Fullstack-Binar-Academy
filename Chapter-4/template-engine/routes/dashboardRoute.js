const express = require("express");
const router = express.Router();
const { userPage, createPage } = require("../controller/dashboardController");
const upload = require("../middlewares/uploader");

// Cars API

// Upload with file max to 4 file
router.get("/users", userPage);
router.get("/users/create", createPage);
module.exports = router;
