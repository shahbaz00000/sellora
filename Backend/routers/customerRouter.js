const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customerController");

// Customer Product get Router
customerRouter.get("/api/customer/products", customerController.getProducts);

// Show Product Router
customerRouter.get("/api/customer/:id/product", customerController.showProduct);

module.exports = customerRouter;

