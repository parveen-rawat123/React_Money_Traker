const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Money");
    console.log("db Connected!");
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
  }
};

module.exports = {db};
  