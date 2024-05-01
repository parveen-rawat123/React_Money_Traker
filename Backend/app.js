const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/signUp");
const passport = require("passport");
// const Usermiddleware = require("./middleware/validation")
const localStratgy = require("passport-local");
flash = require("express-flash");
app.use(flash());

mongoose
  .connect("mongodb://127.0.0.1:27017/Money", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" db Connected!"))
  .catch(() => console.log(`Error connecting to the database:', error`));

app.use(cors());
app.use(bodyparser.json());
// app.use(express.urlencoded({extended}))

const logrequest = (req, res, next) => {
  console.log("midddleware decleard");
  console.log(`${new Date()}`);
  next();
};
app.use(passport.initialize());

passport.use(new localStratgy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(logrequest);
});

app.use;
app.post("/signUp", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    res.send(registerUser);
  } catch (err) {
    console.log(`error ih is ${err}`);
  }
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/authfail" }),
  function (req, res) {
    res.redirect("/authpass");
    console.log(req.body);
  }
);

app.get("/authfail", (req, res) => {
  res.json({
    message: "authentication fail",
    success: false,
  });
});
app.get("/authpass", (req, res) => {
  res.json({
    message: "authentication successfull",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
