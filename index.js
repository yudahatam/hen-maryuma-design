var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080
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
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 