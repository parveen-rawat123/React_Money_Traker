const express  = require("express");
const { registerUser, logInUser, logoutUser, forgotPassword } = require("../Controllers/user.controller");
const router = new express.Router()
const {upload} = require("../middlewares/multer.middlerware");
const { verifyJWT } = require("../middlewares/auth.middleware");



router.route("/register").post(
      upload.single("avatar")
    , registerUser);
router.route("/login").post(logInUser);
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/forgotpassword").patch(forgotPassword)
module.exports = router;