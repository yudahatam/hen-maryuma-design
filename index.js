var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080
app.use('/static', express.static('public'));
app.get('/', function (req, res) {
    return res.send("Hello Yuda");
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 