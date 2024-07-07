import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp', {});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;