const ApiError = require("../utils/Apierror");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken")


const verifyJWT = asyncHandler(async (req, res, next) => {

    try {
        console.log(req.cookies?.AccessToken)

        const token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer ", "");
        console.log("token", token)

        if (!token) {
            throw new ApiError(404, "You  have to Login")
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodeToken._id).select(" -password -RefreshToken");

        if (!user) {
            throw new ApiError(405, "invaild access token")
        };

        req.user = user;
        next();
    } catch (error) {
        console.log("token error", error)
        throw new ApiError(400, error?.message || "invalid access token")
    }
})

module.exports = { verifyJWT }