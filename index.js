var express = require('express');
var path = require('path');
var app = express();
var fs=require('fs');
var bodyParser = require('body-parser');
const { finished } = require('stream');
var PORT = process.env.PORT || 8080
var urlEncodedParser = bodyParser.urlencoded({extended:false});
app.use('/static', express.static('public'));
app.get('/', function (req, res) {
    return res.redirect('/index')
})
app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname+'/about.html'));
})
app.get('/gallery', function (req, res) {
    res.sendFile(path.join(__dirname+'/gallery.html'));
})
app.get('/reviews', function (req, res) {
    res.sendFile(path.join(__dirname+'/Reviews.html'));
})
app.get('/contact-us', function (req, res) {
    res.sendFile(path.join(__dirname+'/contact.html'));
})
app.post('/submitForm',urlEncodedParser,function(req,res){
    // var msg="name:"+req.body.name+"\nemail"+req.body.email+"\nphone"+req.body.phone+"\nmessage"+req.body.message
    // var data =fs.readFile('request.json',finishedRead);
    // var msg= JSON.parse(data);
    var msg=JSON.stringify(req.body,null,2)
    // fs.writeFile('request.json',msg,finishedWrite);
    fs.appendFile('request.json',msg,finishedWrite);
    function finishedWrite(err){
        console.log("Writing to request.json has been successfull");
    }
    function finishedRead(err){
        console.log("Reading from requset.json has been succesfull");
    }
    res.send("yuda");
})
app.get('/yuda',function(req,res){
    var data=fs.readFile('request.json',eden);
    var msg=JSON.parse(data);
    console.log(msg);
    function eden(err){
        console.log("yuda");
    }
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 