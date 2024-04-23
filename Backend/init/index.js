
const mongoose = require('mongoose');

const usersignup = require('../models/signUp')

mongoose.connect('mongodb://127.0.0.1:27017/Money',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(' db Connected!'))
  .catch(()=> console.log(`Error connecting to the database:', error`));
  