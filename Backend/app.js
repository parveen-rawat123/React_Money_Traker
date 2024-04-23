const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const User = require("./models/signUp");
mongoose.connect('mongodb://127.0.0.1:27017/Money',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(' db Connected!'))
  .catch(()=> console.log(`Error connecting to the database:', error`));

app.use(cors())
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/demo',(req,res)=>{
   console.log(req.body)
   res.send(req.body)   
   let User= new User();
   User.userName  = req.body.userName;
   User.Email = req.body.emial;
   User.Password = req.body.password;
   User.save();
   console.log(User.save());
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
