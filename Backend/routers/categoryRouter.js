const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/api/seller/category", categoryController.createCategory);

router.get("/api/seller/category", categoryController.getCategory);
module.exports = router;
