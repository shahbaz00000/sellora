const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController.js");

// signup Routers
userRouter.post("/api/auth/signup",userController.signup);

// login Router
userRouter.post("/api/auth/login",userController.login);

module.exports = userRouter