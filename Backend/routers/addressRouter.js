const express = require("express");
const addressRouter = express.Router();
const addressController = require("../controllers/addressController");
const { LoggedIn } = require("../middleware/authMiddleware");

addressRouter.post("/api/customer/address", LoggedIn, addressController.addAddress);

addressRouter.get("/api/customer/addresses", LoggedIn, addressController.getAddress);

module.exports = addressRouter;