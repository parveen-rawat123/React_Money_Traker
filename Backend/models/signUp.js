// const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");
const validate = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "your32charactersecretkeygoeshere";

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


UserSchema.pre('save', async function(next){
this.password= await bcrypt.hash(this.password,12);
// for run  code
next()
});




UserSchema.methods.generateAuthtoken = async function () {
  try {
    let token23 = jwt.sign({_id: this._id }, process.env.JWT_TOKEN, {
      expiresIn: "3d",
    });
    // add value in token
    this.tokens =  await this.tokens.concat({ token : token23});
    await this.save();
    console.log(token23)
    console.log(this.tokens)
    return token23;
  } catch (err) {
    res.status(400).json({err: err.message})
    console.log("error is", err);
    
  }
};
module.exports = mongoose.model("User", UserSchema);
