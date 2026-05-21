const express = require("express");
const router = express.Router();
const filterProductByCategoryController = require("../controllers/filterProductByCategory.js");

router.get(
  "/api/products/category/:category",
  filterProductByCategoryController.filterProductByCategory,
);

module.exports = router;
