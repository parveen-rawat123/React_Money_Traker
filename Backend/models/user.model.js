const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validate = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validate.isEmail(value)) {
        throw new Error("not valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String, //cloudinary url
    required: true
  },
  income: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "income",
  },
  expense: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "expense",
  },
  refreshToken: {
    type: String,
  }

});

UserSchema.pre("save", async function (next) {

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});


UserSchema.methods.ispasswordMatched = async function (password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = function () {
return  jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email,
    password: this.password
  },
    process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })
};

UserSchema.methods.generateRefreshToken =  function () {
   return jwt.sign({
    _id: this._id
  },
    process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  }
  )
}

module.exports = mongoose.model("User", UserSchema);
