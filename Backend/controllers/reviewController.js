const Product = require("../models/productModel");
const Review = require("../models/reviewModel");

// Review create controller
exports.createReview = async (req, res, next) => {
  const { productId } = req.params;
  const { rating, title, content } = req.body;
  const customerId = req.userId;
  try {
    const review = new Review({
      user: customerId.toString(),
      rating: rating,
      title: title,
      content: content,
    });

    const product = await Product.findById(productId).populate("reviews");
    console.log("product", product);
    if (!product) {
      return res.status(501).json({ errorMessage: "product is not found" });
    }

    await review.save();
    console.log("review", review);
    console.log("product before updating", product);
    product.reviews.push(review._id.toString());
    console.log("product after updating", product);
    await product.save();
    console.log("product after saving", product);

    res.status(201).json({ message: "review was submit", product });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message });
  }
};
