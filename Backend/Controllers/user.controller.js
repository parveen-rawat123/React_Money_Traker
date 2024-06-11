const User = require("../models/user.model.js");
const ApiError = require("../utils/Apierror.js");
const asyncHandler = require("../utils/asyncHandler.js")
const { uploadfileCloudnarry } = require("../utils/cloudnarry.js")
const APIResponse = require("../utils/Apiresponse.js")


const generateAccessRefreshToken = async (user_id) => {

  const user = await User.findById(user_id)
  const AccessToken = user.generateAccessToken()
  const RefreshToken = user.generateAccessToken()

  user.refreshToken = RefreshToken
  return { AccessToken, RefreshToken }
};

const registerUser = asyncHandler(async (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ApiError(400, "All fields is required")
  }
  const alreadyRegister = await User.findOne({
    $or: [{ email }, { username }]
  })

  if (alreadyRegister) {
    throw new ApiError(401, "User Already Registered")
  }

  const localfilepath = req.file.path;

  if (!localfilepath) {
    throw new ApiError(402, "Profile image is required");
  }

  const uploadtoCloudnary = await uploadfileCloudnarry(localfilepath)

  if (!uploadtoCloudnary) {
    throw new ApiError(403, "file not uploaded in cloudnary");
  }

  const registeredUser = await User.create({
    username,
    avatar: uploadtoCloudnary.url,
    email,
    password
  })

  if (!registerUser) {
    throw new ApiError(500, "something went wrong while register user")
  }
  return res
    .status(201)
    .json(new APIResponse(200, registeredUser, "User Registered Successfully"));
});


const logInUser = asyncHandler(async (req, res) => {

  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "All fields is required")
  }

  const finduser = await User.findOne({
    $or: [{ username }, { email }]
  })

  if (!finduser) {
    throw new ApiError(401, "User Not registered")
  }

  //ispasswordMatched is mongoose method
  const isPasswordValid = finduser.ispasswordMatched(password)

  if (!isPasswordValid) {
    throw new ApiError(402, "password not valid")
  }

  const { AccessToken, RefreshToken } = generateAccessRefreshToken(finduser._id)

  return res
    .status(200)
    .cookie("AccessToken", AccessToken
      .cookie("RefreshToken", RefreshToken)
    )
});




module.exports = {
  registerUser,
  logInUser
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
