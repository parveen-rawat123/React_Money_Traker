const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const validate = require("validator");

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

UserSchema.plugin(passportLocalMongoose);

UserSchema.method.genrateAuthtoken = async function(){
  try{
  let token = jsw.sign({id:this._id,key})
  }catch(err){

  }
}

module.exports = mongoose.model("User", UserSchema);
