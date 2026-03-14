const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup Controller
exports.signup = async (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const user = await new User({ firstName, lastName, email, password: hashPassword, userType });
        await user.save();
        res.status(201).json({ message: "signupsuccessfully", user });
    } catch (error) {
        res.status(401).json({ errorMessage: error.message })
    }
};

// login Controller
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ errorMesage: "email is invalid" })
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({ errorMessage: error.message });
        }
        const token = jwt.sign(
            { userId: user._id, userType: user.userType },
            process.env.SELLORA_SECRET_KEY,
            { expiresIn: "24h" }
        );
        res.status(200).json({ message: "login successfully", token, userType: user.userType });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}