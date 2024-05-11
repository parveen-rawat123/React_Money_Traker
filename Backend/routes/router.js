const express = require("express");
const router = new express.Router();
const User = require("../models/signUp");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

//for regostration
router.post("/signUp", async (req, res) => {
  let { username, email, password } = req.body;
  console.log(req.body)
  //if these value is missing then it will work
  if (!username || !email || !password) {
    res.status(400).json({ error: "Fill the all Details" });
  } else {
    try {
      const preuser = await User.findOne({ email: email });
      if (preuser) {
        res.status(409).json({ error: "User Already Exists" });

      } else {
       const finaluser = new User({
        username,email,password
       });
      //  console.log(finaluser)
       const storedata = await finaluser.save()
       console.log(storedata)
      //  res.send(finaluser)
       res.status(201).json({message : 'user registered'})
       
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(`catch block error ${err}`);
    }
  }
});

//log in  route
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({ error: "Fill the all Details" });
  } 
    try {
        let finduser = await User.findOne({ email: email });
        if(finduser){
          const isMatch  = await bcrypt.compare({password, finduser.password}); 

        }
    } catch (error) {
      
    }
    // try {
    //   if(finduser){
    //     const isMatch = await bcrypt.compare(password,finduser.password)
    //     // console.log(password)
    //     if(!isMatch){
    //       res.status(501).json({error : 'invalid details'})
    //     }
    //   }else{
    //     console.log("password match")
    //     // const token = await finduser.generateAuthtoken();
    //     // console.log(token)
    //   }
    // } catch (err) {
    //   console.log(`login catch bloack error${err}`);
    // }
  
});

module.exports = router;
