const User = require("../models/user.model.js");
const ApiError = require("../utils/Apierror.js");
const asyncHandler = require("../utils/asyncHandler.js")


const registerUser =  asyncHandler ( async ( req, res )=>{
   // get user details from frontend
    // validation
    // check if user already registered
    // chekc for image, avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token
    // check for user creation
    console.log("req",req.body)
    const {username, email, password} = req.body;
    
    if(!username || !email || !password){
      throw new ApiError(400, "All fields is required")
    }
  const alreadyRegister =   User.findOne({
        $or : [{email}, {username}]
    })

    if(!alreadyRegister){
     throw new ApiError(401, "User Already Registered")
    }
    req.file
    
    
})


module.exports = {
    registerUser
}





































// const express = require("express");
// const router = new express.Router();
// const User = require ("../models/user.js");
// const bcrypt = require("bcryptjs");

// //for regostration
// router.post("/signUp", async (req, res) => {
//   let { username, email, password } = req.body;
//   console.log(req.body);
//   //if these value is missing then it will work
//   if (!username || !email || !password) {
//     res.status(400).json({ error: "All field is required" });
//   } else {
//     try {
//       const preuser = await User.findOne({ email: email });
//       if (preuser) {
//         res.status(409).json({ error: "User Already Exists" });
//       } else {
//         const finaluser = new User({
//           username,
//           email,
//           password,
//         });
//         //  console.log(finaluser)
//         const storedata = await finaluser.save();
//         console.log(storedata);
//         res.status(201).json({ message: "user registered" });
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//       console.log(`catch block error ${err}`);
//     }
//   }
// });

// //log in  route
// router.post("/login", async (req, res) => {
//   let { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: "All field is required" });
//   }
//   try {
//     let finduser = await User.findOne({ email: email });
//     if (finduser) {
//       const isMatch = await bcrypt.compare(password, finduser.password);
//       console.log("password matched or not ", isMatch);
//       if (!isMatch) {
//         res
//           .status(401)
//           .json({ error: "Password not matched " });
//       } else {
//         const token = await finduser.generateAuthtoken();
//         console.log(token);
//         res.cookie("usercookie", token, {
//           expires: new Date(Date.now() + 9000000),
//           httpOnly: true,
//         });        
//         const result = {
//           finduser,
//           token,
//         };
//         res.status(201).json({ status: 201, result });
//         // res.status(201).json({ message: "user authenticate" });
//       }
//     } else {
//       res.status(502).json({ error: "User email invalid" });
//     }
//   } catch (error) {
//     res.status(501).json({ error: error.message });
//     console.log("login catch block error", error);
//   }
// });
// module.exports = router;
