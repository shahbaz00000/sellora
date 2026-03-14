const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    landMark: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});
const Address = mongoose.model("Address", addressSchema);
module.exports = Address;