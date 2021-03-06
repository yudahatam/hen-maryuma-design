var express = require('express');   
var path = require('path');
var app = express();
const { Client } = require('pg');
var fs=require('fs');
var bodyParser = require('body-parser');
//Port of web or 8080 in localHOST
var PORT = process.env.PORT || 8080
//Used to parse data on POST
var urlEncodedParser = express.urlencoded({extended:false});
//Use public directory as /static in server
app.use('/static', express.static('public'));



/*-----START-----
client representing the website to declare and connect as  a client to the postgresql database
*/
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  client.connect();
  /*-----END-----*/

//Default of the website go to Home page
app.get('/', function (req, res) {
    return res.redirect('/index')
})
//Home page
app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})
//About page
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname+'/about.html'));
})
//Gallery page
app.get('/gallery', function (req, res) {
    res.sendFile(path.join(__dirname+'/gallery.html'));
})
//Reviews page
app.get('/reviews', function (req, res) {
    res.sendFile(path.join(__dirname+'/Reviews.html'));
})
//Contact page
app.get('/contact-us', function (req, res) {
    res.sendFile(path.join(__dirname+'/contact.html'));
})
//Proccess post request after submiting form in contat page
app.post('/submitForm',urlEncodedParser,function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var message=req.body.message;
    client.query("insert into requests (name,email,phone,message) values('"+name+"','"+email+"','"+phone+"','"+message+"');");
    return res.redirect('/contact-us');
})

/*Make web listen on port 8080 in case of localhost and port of website in case of online(notifiy console on start)*/
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 

