var express = require("express");
var router = express.Router();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

router.get("/welcome",function(req,res,next){
   res.send("Welcome to Slogfox");
});

router.post('/contact', (req, res) => {
    console.log(JSON.stringify(req.body));
  
    const msg = {
        to: 'contact@slogfox.com', // Change to your recipient
        from: req.body.email, // Change to your verified sender
        subject: req.body.subject,
        text: req.body.message,
        html: "<strong>" + req.body.message + "</strong>",
      }
      
      sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
        res.json({message : "successfully mail sent!"});
      })
      .catch((error) => {
        console.error(error);
        res.json({message : "Mail sent Failed!"});
      })

});

module.exports = router;