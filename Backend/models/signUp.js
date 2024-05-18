// const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validate = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretkey = "your32charactersecretkeygoeshere";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  //  condition if  password not changed only when user changed then it will changed
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    // for run  code
    next();
  }
});

UserSchema.methods.generateAuthtoken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, secretkey, {
      expiresIn: "3d",
    });
    this.tokens.push({ token });
    await this.save();
    return token;
  } catch (err) {
    console.error("Error generating auth token:", err);
    throw new Error("Could not generate auth token");
  }
};

module.exports = mongoose.model("User", UserSchema);
