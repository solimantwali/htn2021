var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/login",(req,res)=>{
  res.send("We will authenticate you")
})

module.exports = router;
