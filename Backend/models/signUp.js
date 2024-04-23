const mongoose= require('mongoose')
const Schema = mongoose.Schema;


const UserSchema  = new Schema({
    userName : {
        type : String,
        require : true
    },
   Email :  {
     type : String,
     require : true
    },
    Password : {
        type : String,
        require : true
    }
    }
);
const User = mongoose.model('User', UserSchema );
module.exports = User