var express = require("express");
var router = express.Router();

router.get("/welcome",function(req,res,next){
   res.send("Welcome to Slogfox");
});

router.get('/contact', (req, res) => {
   res.send("Sorry! Technical Problem. Please email to contact@slogfox.com");
});

module.exports = router;