//nodeJs Section

var express = require('express');
// var fs =require('fs')
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

// var transporter = nodeMailer.createTransport({
//     service:'outlook', auth:{
//         user:'eden_337@outlook.com',
//         pass:'JoyPaco337'
//     }
// });
// var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use('/static', express.static('public'));


/*
    default localhost:8080 redirecting to log-in page
*/
app.get('/', function (req, res) {
    return res.send("Hello Yuda");
//   return res.redirect('/log-in');
})


// /*
//     Go to login page html
// */
// app.get('/log-in', function (req, res) {
//     res.sendFile(path.join(__dirname+'/login_page.html'));
//   })

// /*
//     Go to login page html
// */

// app.get('/signupPage',function(req,res){
//     res.sendFile(path.join(__dirname+'/signup_page.html'));
// })  
// /*
//     Go to contact page html
// */
// app.get('/contactUs', function(req,res){
//     res.sendFile(path.join(__dirname+'/contact_page.html'));
// }) 

app.listen(8080)
console.log('Server started! At http://localhost:8080');