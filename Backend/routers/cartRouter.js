const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController");
const { LoggedIn } = require("../middleware/authMiddleware");

// Cart Create Router
cartRouter.post("/api/customer/:id/cart",LoggedIn,cartController.createCart);

// Cart Get router
cartRouter.get("/api/customer/carts",LoggedIn,cartController.getToCart);

// Product Delete from Cart
cartRouter.delete("/api/customer/cart/:id/delete",LoggedIn,cartController.deleteFromCart);

module.exports = cartRouter;