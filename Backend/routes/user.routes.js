const express  = require("express");
const { registerUser, logInUser } = require("../Controllers/user.controller");
const router = new express.Router()
const {upload} = require("../middlewares/multer.middlerware")



router.route("/register").post(
      upload.single("avatar")
    , registerUser);
router.route("/login").post(logInUser);

 
module.exports = router;