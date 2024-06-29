const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   const connectionInstance=  await mongoose.connect("mongodb://127.0.0.1:27017/Money");
    console.log(`MongoDb connected !! DB HOSTED ${connectionInstance}`);
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;