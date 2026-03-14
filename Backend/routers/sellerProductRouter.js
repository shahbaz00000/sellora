const express = require("express");
const sellerRouter = express.Router();
const sellerController = require("../controllers/sellerProductController.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { LoggedIn, isSeller } = require("../middleware/authMiddleware.js");


// ✅ Ensure uploads folder exists
const uploadPath = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}


// ✅ Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);   // absolute path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


// Create Product Route
sellerRouter.post("/seller/product",upload.single("image"),LoggedIn,isSeller,sellerController.createProduct
);

// Get Products Routes
sellerRouter.get("/seller/products",LoggedIn,isSeller,sellerController.getProduct);

module.exports = sellerRouter;
