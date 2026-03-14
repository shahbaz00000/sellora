const express = require("express");
const reviewRouter = express.Router();
const reviewController = require("../controllers/reviewController");
const { LoggedIn } = require("../middleware/authMiddleware");

// Review Create Router
reviewRouter.post("/api/customer/:productId/review", LoggedIn, reviewController.createReview);

module.exports = reviewRouter;