const Product = require("../models/productModel.js");
const Category = require("../models/categoryModel.js");

exports.filterProductByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const categoryDoc = await Category.findOne({ name: category });

    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.find({
      category: categoryDoc._id,
    });

    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
