const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/signUp");
const passport = require("passport");
const localStratgy = require("passport-local");
const router = require("./routes/router")
const flash = require("express-flash");
const cookieParser = require('cookie-parser')
app.use(flash());
app.use(cors());
app.use(bodyparser.json());
app.use(router)

mongoose
  .connect("mongodb://127.0.0.1:27017/Money", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" db Connected!"))
  .catch(() => console.log(`Error connecting to the database:', error`));


app.use(passport.initialize());
app.use(cookieParser())
passport.use(new localStratgy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(logrequest);
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/authfail" }),
  function (req, res) {
    res.redirect("/authpass");
    console.log(req.body);
  }
);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
