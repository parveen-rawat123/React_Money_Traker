const express = require("express");
const router = new express.Router();
const User = require("../models/signUp");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

//for regostration
router.post("/signUp", async (req, res) => {
  let { username, email, password } = req.body;
  //if these value is missing then it will work
  if (!username || !email || !password) {
    res.status(400).json({ error: "Fill the all Details" });
  } else {
    try {
      const preuser = await User.findOne({ email: email });
      if (preuser) {
        res.status(409).json({ error: "User Already Exists" });
      } else {
        const newUser = new User({ email, username, password });
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        res.status(201).json({ message: "User Registered Successfully" });
        console.log("user registered");
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(`catch block error ${err}`);
    }
  }
});

//log in  route
router.post("/login", async (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({ error: "Fill the all Details" });
  } else {
    try {
      let finduser = await User.findOne({ email: email });
      if (!finduser) {
        res.status(501).json({ error: "you are Not Registered" });
      } else {
        let isMatched = bcrypt.compare(password, finduser.password);
        if (!isMatched) {
          res.status(502).json({ error: "invalid details", user: Userser });
        } else {
          // token
          const tiken = await finduser.genrateAuthtoken();
          // res.status(401).json({ message: "Incorrect password" });
        }
      }
    } catch (err) {
      console.log(`login catch bloack error${err}`);
    }
  }
});

module.exports = router;
