const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

// Create cart Product Controller
exports.createCart = async (req, res, next) => {
    const { id } = req.params;
    const customerId = req.userId;
    try {
        const product = await Product.findById(id);

        const cart = new Cart({
            customer: customerId.toString(),
            product: product._id.toString()
        });
        await cart.save();
        res.status(201).json({ message: "Product is add to cart", cart })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message });
    }
};

// get Cart Product Controller
exports.getToCart = async (req, res, next) => {
    const customerId = req.userId
    try {
        const carts = await Cart.find({ customer: customerId }).populate("product");
        console.log("-----------------------------------")
        console.log(carts);
        res.status(200).json({ message: "product is successfully get in cart", carts });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
};

// Product Delete from cart
exports.deleteFromCart = async (req, res, next) => {
    const { id } = req.params;
    const customerId = req.userId;
    try {
        const cart = await Cart.findByIdAndDelete(id);
        res.status(200).json({ message: "product was deleted from the cart", cartId: cart._id });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}