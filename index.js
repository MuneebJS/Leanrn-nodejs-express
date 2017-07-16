// var express = require('express');
// var app = express();
// var things = require('./things.js');


// // app.use(function (req, res, next) {
// //   console.log('Time:', Date.now())
// //   next()
// // })

// // app.get( (req, res, next) => {
// //     console.log('request type' , req.method)
// //     next();
// // })

// app.get('/', function(req, res){
//    res.send("<a href='hello'></a>");
//    res.end("<a href='hello'></a>");
   
// });



// app.listen(3000);


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

app.use( (req, res, next) => {
    console.log(req)
    next();
})

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.send(req.route);
    // console.log(req)
    next();
})

app.use((req, res, next) => {
    console.log('end');
    next();
})



app.listen(3000);