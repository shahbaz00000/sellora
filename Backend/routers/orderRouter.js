const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const { LoggedIn } = require("../middleware/authMiddleware");

// Order Creater Router
orderRouter.post("/api/customer/order/:addressId", LoggedIn, orderController.createOrder);

// Order get Routes
orderRouter.get("/api/customer/orders", LoggedIn, orderController.getOrder);

module.exports = orderRouter;


