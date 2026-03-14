const Product = require("../models/productModel")

// customer Product Get Controller
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(500).json({ errorMessage: "there is no product availble" });
        }
        res.status(200).json({ message: "products get successfully", products });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

// customer Show Product Controller
exports.showProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate("reviews");

        if (!product) {
            return res.status(500).json({ errorMessage: "there is no product avialbe" })
        }
        res.status(200).json({ message: "product is get", product })

    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
}