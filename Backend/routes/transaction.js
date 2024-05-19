const express = require("express");
const router = new express.Router();

router.get('/',(req,res)=>{
      res.send("hellow world from router ")
});


module.exports = router;