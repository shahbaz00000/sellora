const Product = require("../models/productModel.js");

exports.getBySearchQuery = async (req, res) => {
  console.log("Search query received:", req.query.query); // Debug log
  try {
    const searchQuery = req.query.query;
    if (!searchQuery) {
      return res.status(400).json({ message: "Search query is required" });
    }
    const products = await Product.find({
      title: { $regex: searchQuery, $options: "i" }, // isActive hataya
    })
      .select("title price image category rating brand") // schema ke exact fields
      .limit(20);
    console.log("Products found:", products); // Debug log
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
