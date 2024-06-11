const User = require("../models/user.model.js");
const ApiError = require("../utils/Apierror.js");
const asyncHandler = require("../utils/asyncHandler.js")
const { uploadfileCloudnarry } = require("../utils/cloudnarry.js")
const APIResponse = require("../utils/Apiresponse.js");

const option = {
  httpOnly: true,
  secure: true,
};

const generateAccessRefreshToken = async (user_id) => {

  try {
    const user = await User.findById(user_id)
    const AccessToken = user.generateAccessToken()
    const RefreshToken = user.generateRefreshToken()

    user.refreshToken = RefreshToken;
    await user.save({ validBeforeSave: false });

    return { AccessToken, RefreshToken }
  } catch (error) {
    throw new ApiError(500, "something went wrong while generate token")
  }
};

const registerUser = asyncHandler(async (req, res) => {

console.log(req.body)
console.log(req.body.avatar)

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

  const localfilepath = req.file?.path;


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
  const isPasswordValid = await finduser.ispasswordMatched(password)

  if (!isPasswordValid) {
    throw new ApiError(402, "password not valid")
  }

  const { AccessToken, RefreshToken } = await generateAccessRefreshToken(finduser._id)

  if (!(AccessToken && RefreshToken)) {
    throw new ApiError(500, "token not generated")
  }

  const loggedInUser = await User.findById(finduser._id).select(
    "-password -refreshToken"
  )
  return res
    .status(200)
    .cookie("AccessToken", AccessToken, option)
    .cookie("RefreshToken", RefreshToken, option)
    .json(
      new APIResponse(
        200,
        {
          user: loggedInUser,
          AccessToken,
          RefreshToken,
        },
        "User logged In Successfully"
      )
    )
});



module.exports = {
  registerUser,
  logInUser
}