const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes/router")
const flash = require("express-flash");
const cookieParser = require('cookie-parser');
const {db} = require("./db/db")
const dotenv = require("dotenv")
const transaction = require("./routes/transactionroute")


dotenv.config({path:"./env"})
app.use(flash());
app.use(cors());
app.use(bodyparser.json());
app.use(router)
app.use(cookieParser())
app.use(express.json())
db();


app.use("/", transaction)

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
