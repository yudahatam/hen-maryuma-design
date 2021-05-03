var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080
// var bodyParser = require('body-parser');
// var nodeMailer = require('nodemailer');
app.use('/static', express.static('public'));
app.get('/', function (req, res) {
    return res.send("Hello Yuda");
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));






// var transporter = nodeMailer.createTransport({
//     service:'outlook', auth:{
//         user:'eden_337@outlook.com',
//         pass:'JoyPaco337'
//     }
// });
// var urlEncodedParser = bodyParser.urlencoded({extended:false});



/*
    default localhost:8080 redirecting to log-in page
*/



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

// app.listen(8080)
// console.log('Server started! At http://localhost:8080');