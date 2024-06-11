const express  = require("express");
const { registerUser } = require("../Controllers/user.controller");
const router = new express.Router()
const {upload} = require("../middlewares/multer.middlerware")



router.route("/register").post(
      upload.single("avatar")
    , registerUser)

module.exports = router;