const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const User = require("./models/signUp");
const passport = require("passport")
// const Usermiddleware = require("./middleware/validation")
const localStratgy =  require("passport-local")


mongoose.connect('mongodb://127.0.0.1:27017/Money',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(' db Connected!'))
  .catch(()=> console.log(`Error connecting to the database:', error`));


app.use(cors()) 
app.use(bodyparser.json())

const logrequest = (req,res,next)=>{
  console.log("midddleware decleard")
  console.log(`${new Date}`)
  next();
}
app.use(passport.initialize())
// app.use(passport.session())
passport.use(new localStratgy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.get('/' ,(req, res) => {
    res.send('Hello World!');
    console.log(logrequest)
});

app.use
// app.use(logrequest)
app.post('/signUp', async (req,res)=>{  
  let {username,email,password} = req.body;
  const  newUser= new User({email,username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser)
    res.send(registerUser)
    console.log(registerUser)
});

app.post('/logIn',(req,res)=>{
  console.log(req.body)
  res.json("You are not signup pleasd sign up")
})

// app.post('test',async (req,res)=>{
//   let user= new User({
//     Email :  "praveen@.com",
//     username : "djje"
//    });
//    let rees = await User.register(user , "hell");
//    res.send(rees)
//    console.log(rees)
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
