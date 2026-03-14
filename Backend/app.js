const dotenv = require("dotenv");
dotenv.config({
    path: `.env.${process.env.NODE_ENV || "development"}`
});

// External Modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Core Modules
const fs = require("fs");
const path = require("path");

// Internal Modules
const userRouter = require("./routers/userRouter.js");
const sellerRouter = require("./routers/sellerProductRouter.js");
const customerRouter = require("./routers/customerRouter.js");
const cartRouter = require("./routers/cartRouter.js");
const reviewRouter = require("./routers/reviewRouter.js");
const addressRouter = require("./routers/addressRouter.js");
const orderRouter = require("./routers/orderRouter.js");


// mongoDb connection
const connectDB = async () => {
    await mongoose.connect(`mongodb://${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}`)
}
connectDB().then((res) => {
    console.log("connection is successfully");
}).catch((error) => {
    console.log(error)
});

// Request Respose Logging
const logDirectory = path.join((__dirname, "logs")); // create a folder with name "logs"
const accessLogStream = fs.createWriteStream(path.join(logDirectory), { flags: "a" });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(helmet());  // add extra header with server request to protect the cyber attack
app.use(compression());
app.use(morgan("combined", { stream: accessLogStream })); //request response logging

// Routes
app.use(userRouter);
app.use("/api", sellerRouter);
app.use(customerRouter);
app.use(cartRouter);
app.use(reviewRouter);
app.use(addressRouter);
app.use(orderRouter);


// Test Routes
app.get("/test", (req, res, next) => {
    console.log("request was revied on this test routes");
    res.send("this is test page");
})
// Server is started on this Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is started on this port ${PORT}`);
})