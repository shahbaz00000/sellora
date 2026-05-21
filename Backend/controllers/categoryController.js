const Category = require("../models/categoryModel");

exports.createCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res
      .status(201)
      .json({ message: "category created successfully", category });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ message: "category get successfully", categories });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
