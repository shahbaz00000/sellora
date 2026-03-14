const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");


// Order create controller
exports.createOrder = async (req, res, next) => {
    const { addressId } = req.params;
    console.log(addressId);
    const customerId = req.userId;
    console.log(customerId);
    try {
        const items = await Cart.find({ customer: customerId.toString() }).populate("product");
        console.log("orders", items);

        let totalPrice = 0;
        for (let item of items) {
            totalPrice += item.product.price
        };
        console.log(totalPrice)
        const productId = items.map((item) => item.product._id);
        console.log(productId)

        const order = await new Order({ customer: customerId, totalPrice, shippingAddress: addressId, items: productId });
        console.log(order)

        await order.save();

        await Cart.deleteMany({ customer: customerId })
        res.status(201).json({ message: "order was successful", order })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message });
    }
}

// Order get Controller
exports.getOrder = async (req, res, next) => {
    const customerId = req.userId;
    try {
        const orders = await Order.find({ customer: customerId.toString() }).populate("items");
        console.log("------------------", orders)
        if (!orders) {
            res.status(500).json({ errorMessage: "there is no order" })
        }
        res.status(200).json({ message: "order get successfull", orders })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}