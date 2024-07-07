const expense = require("express");
const { addFeedback, getFeedback } = require("../Controllers/feedback.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");
const router = new expense.Router()


router.route("/addfeedback").post(addFeedback);
router.route("/getfeedback").get(getFeedback);

module.exports = router; 