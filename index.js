var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
// form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body.say);
   res.send(req.body.first_name + "  " + req.body.last_name + "your password : " + req.body.password)
   res.send("recieved your request!");
});
app.get('/first_template', function(req, res){
   res.render('form');
});

app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('port lisetened')
    }
});