var express = require("express");
var path = require('path');
var indexRoutes = require('./routes/indexRoutes');

var app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

//make way for some custom css, js and images
app.use('/assets/css', express.static(__dirname + '/public/assets/css'));
app.use('/assets/js', express.static(__dirname + '/public/assets/js'));
app.use('/assets/img', express.static(__dirname + '/public/assets/img'));
app.use('/assets/vendor', express.static(__dirname + '/public/assets/vendor'));

app.use("/api/", indexRoutes);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'), function (err) {
        if (err) {
          res.status(500).send(err)
        }
      })
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});