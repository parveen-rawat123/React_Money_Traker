const express = require("express");
const router = new express.Router();
const User = require("../models/signUp");
const bcrypt = require("bcryptjs");

//for regostration
router.post("/signUp", async (req, res) => {
  let { username, email, password } = req.body;
  console.log(req.body);
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
          username,
          email,
          password,
        });
        //  console.log(finaluser)
        const storedata = await finaluser.save();
        console.log(storedata);
        res.status(201).json({ message: "user registered" });
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
    return res.status(400).json({ error: "Fill in all details" });
  }
  try {
    let finduser = await User.findOne({ email: email });
    if (finduser) {
      const isMatch = await bcrypt.compare(password, finduser.password);
      console.log("password matched or not ", isMatch);
      if (!isMatch) {
        res
          .status(401)
          .json({ error: "invalid details password not matched " });
      } else {
        const token = await finduser.generateAuthtoken();
        console.log(token);
        res.cookie("usercookie", token, {
          expires: new Date(Date.now() + 9000000),
          httpOnly: true,
        });        
        const result = {
          finduser,
          token,
        };
        res.status(201).json({ status: 201, result });
        // res.status(201).json({ message: "user authenticate" });
      }
    } else {
      res.status(502).json({ error: "user email invalid" });
    }
  } catch (error) {
    res.status(501).json({ error: error.message });
    console.log("login catch block error", error);
  }
});
module.exports = router;
