const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
    ],
    totalPrice: {
        type: Number
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});
const Order = mongoose.model("Order", orderSchema)
module.exports = Order;