const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, reqired: true },
    description: { type: String, reqired: true },
    brand: { type: String, reqired: true },
    image: { type: String, reqired: true },
    price: { type: Number, reqired: true },
    category: { type: String, reqired: true },
    rating: { type: Number, reqired: true },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]

})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;