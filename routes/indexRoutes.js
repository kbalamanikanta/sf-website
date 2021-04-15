var express = require("express");
var router = express.Router();

router.get("/welcome",function(req,res,next){
   res.send("Welcome to Slogfox");
});

router.post('/contact', (req, res) => {
   res.json({message : "Mail sent Failed!"});
});

module.exports = router;