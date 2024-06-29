const Feedback = require("../models/feedback.js");
const ApiError = require("../utils/Apierror.js");
const APIResponse = require("../utils/Apiresponse.js");
const asyncHandler = require("../utils/asyncHandler.js")


const addFeedback = asyncHandler(async (req, res) => {
    const { username, feedback } = req.body;

    if (!(username && feedback)) {
        throw new ApiError(400, "All Fields Required");
    };
    const userFeedback = await Feedback.create({
        username,
        feedback
    })
    if (!userFeedback) {
        throw new ApiError(501, "feedback not added try again")
    }
    console.log(userFeedback)
    return res.status(200)
        .json(new APIResponse(200, userFeedback, "Thankyou for your feedback"))
});


const getFeedback = asyncHandler(async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(501).json(new ApiError(501, "No feedback available"));
    }
  });


module.exports = {
    addFeedback,
    getFeedback
}