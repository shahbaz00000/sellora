const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchingController.js");

router.get("/api/products/search", searchController.getBySearchQuery);

module.exports = router;
