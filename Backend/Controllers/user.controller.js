const User = require("../models/user.model.js");
const ApiError = require("../utils/Apierror.js");
const asyncHandler = require("../utils/asyncHandler.js");
const { uploadfileCloudnarry } = require("../utils/cloudnarry.js");
const APIResponse = require("../utils/Apiresponse.js");

const option = {
  httpOnly: true,
  secure: false,
};

const generateAccessRefreshToken = async (user_id) => {
  try {
    const user = await User.findById(user_id);
    const AccessToken = user.generateAccessToken();
    const RefreshToken = user.generateRefreshToken();

    user.refreshToken = RefreshToken;
    await user.save({ validBeforeSave: false });

    return { AccessToken, RefreshToken };
  } catch (error) {
    throw new ApiError(500, "something went wrong while generate token");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ApiError(400, "All fields is required");
  }
  if (password.length < 6) {
    throw new ApiError(401, "Password is not valid")
  }

  const alreadyRegister = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (alreadyRegister) {
    throw new ApiError(402, "User Already Registered");
  }

  const localfilepath = req.file?.path;

  if (!localfilepath) {
    throw new ApiError(403, "Profile image is required");
  }

  const uploadtoCloudnary = await uploadfileCloudnarry(localfilepath);

  if (!uploadtoCloudnary) {
    throw new ApiError(404, "file not uploaded in cloudnary");
  }

  const registeredUser = await User.create({
    username,
    avatar: uploadtoCloudnary.url,
    email,
    password,
  });

  if (!registerUser) {
    throw new ApiError(500, "something went wrong while register user");
  }
  console.log("user regostered successfilly", registeredUser);

  return res
    .status(201)
    .json(new APIResponse(200, registeredUser, "User Registered Successfully"));
});


const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    throw new ApiError(400, "All fields is required");
  }

  if (password.length < 6) {
    throw new ApiError(401, "Password is not valid")
  }

  const finduser = await User.findOne({ email });

  if (!finduser) {
    throw new ApiError(402, "User Not registered");
  }

  //ispasswordMatched is mongoose method
  const isPasswordValid = await finduser.ispasswordMatched(password);

  if (!isPasswordValid) {
    throw new ApiError(403, "password not valid");
  }

  const { AccessToken, RefreshToken } = await generateAccessRefreshToken(
    finduser._id
  );

  if (!(AccessToken && RefreshToken)) {
    throw new ApiError(500, "Internal Server Error");
  }
  console.log(AccessToken);
  console.log(RefreshToken);

  const loggedInUser = await User.findById(finduser._id).select(
    "-password -RefreshToken"
  );
  console.log(loggedInUser);
  return res
    .status(200)
    .cookie("AccessToken", AccessToken, option)
    .cookie("RefreshToken", RefreshToken, option)
    .json(
      new APIResponse(
        200,
        {
          loggedInUser,
          AccessToken,
          RefreshToken,
        },
        "User loggedin Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const { refreshToken } = req.user;
  if (!refreshToken) {
    throw new ApiError(401, "user not login");
  }
  const data = await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  console.log(data);
  const option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("AccessToken", option)
    .clearCookie("RefreshToken", option)
    .json(new APIResponse(200, "user loggedOut Successfull"));
});

const forgotPassword = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { email, newPassword, confirmPassword } = req.body
  if (!email || !newPassword || !confirmPassword) {
    throw new ApiError(400, "All fields is required")
  }
  const finduser = await User.findOne({ email });

  if (!finduser) {
    throw new ApiError(404, "User not registered")
  };

  if ((newPassword.length < 6 || confirmPassword.length < 6)) {
    throw new ApiError(401, "Password not Valid")
  }

  if (newPassword !== confirmPassword) {
    throw new ApiError(402, "confirmPassword not matched")
  }

  finduser.password = confirmPassword;
  const resu = await finduser.save({ validBeforeSave: false })
  console.log(resu)
  return res.status(200)
    .json(new APIResponse(201, "password changed Successfully"))
});


const getUserDeatils = asyncHandler(async(req, res)=>{

});


module.exports = {
  registerUser,
  logInUser,
  logoutUser,
  forgotPassword
};
