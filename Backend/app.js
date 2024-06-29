const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
  });

app.use(cors({
  origin : process.env.CORS_OROGIN,
  credentials: true
}));

//for json responce
app.use(express.json({
  limit : "16kb"
}));

//for req url 
app.use(express.urlencoded({
  extended : true,
  limit : "16kb"
}));

app.use(express.static("public"));

app.use(cookieParser())


const transactionRouter = require("./routes/transaction.routes")
const userRouter = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middlerware");
const feedbackRouter = require("./routes/feedback.routes.js")


app.use("/api/v1/user", userRouter)
app.use("/api/v2/transaction", transactionRouter)
app.use("/api/v3/feedback", feedbackRouter)

app.use(errorHandler)

module.exports = app


