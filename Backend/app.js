const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const User = require("./models/signUp");
const passport = require("passport")
const Usermiddleware = require("./middleware/validation")
const localStratgy =  require("passport-local")

mongoose.connect('mongodb://127.0.0.1:27017/Money',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(' db Connected!'))
  .catch(()=> console.log(`Error connecting to the database:', error`));


app.use(cors())
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/demo', async (req,res)=>{  
   let user= new User();
   user.Email = req.body.Email;
   user.save();
   console.log(user)
});

// app.get("/demo2",Usermiddleware,(req,res)=>{
//   console.log("user loged in")
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
