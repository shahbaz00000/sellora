const mongoose = require("mongoose"); // make sure this is imported

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_DB_URL);
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "mySellora",
    });
    console.log("MongoDB connection was successful");
  } catch (error) {
    console.log("MongoDB error:", error);
  }
};

module.exports = connectDB;
