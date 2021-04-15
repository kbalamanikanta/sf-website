var express = require("express");
var router = express.Router();
var sendpulse = require("sendpulse-api");

router.get("/welcome",function(req,res,next){
   res.send("Welcome to Slogfox");
});

router.get('/contact', (req, res) => {
  
});

module.exports = router;