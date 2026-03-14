const Product = require("../models/productModel");
const Review = require("../models/reviewModel");

// Review create controller
exports.createReview = async (req, res, next) => {
    const { productId } = req.params;
    console.log(productId)
    const { rating, title, content } = req.body;
    console.log(rating, title, content)
    const customerId = req.userId;
    console.log(customerId)
    try {
        const review = new Review({
            user: customerId.toString(),
            rating: rating,
            title: title,
            content: content
        });

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(501).json({ errorMessage: "product is not found" })
        }
        product.reviews.push(review);

        await review.save();
        console.log(review);
        await product.save();
        console.log("review Prodiuct----------", product)

        res.status(201).json({ message: "review was submit", product });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message })
    }
}