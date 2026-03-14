const Address = require("../models/addressModel");
const User = require("../models/userModel")


exports.addAddress = async (req, res, next) => {
    const { name, mobileNo, area, city, state, landMark, pincode } = req.body;
    const customerId = req.userId
    try {
        const address = await new Address({ customer: customerId.toString(), name, mobileNo, area, city, state, landMark, pincode });

        const user = await User.findById(customerId);
        user.addresses.push(address);

        await address.save();
        await user.save();
        res.status(201).json({ message: "address add successfully", address });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message })
    }
};

exports.getAddress = async (req, res, next) => {
    const customerId = req.userId;
    try {
        const addresses = await Address.find({ customer: customerId });
        if (!addresses) {
            return res.status(500).json({ errorMessage: "there is no address add" })
        }
        res.status(200).json({ message: "address is get successfully", addresses });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};