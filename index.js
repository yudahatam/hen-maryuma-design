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


/*-----START-----
Variable and function to count the amount of registered request in the DB*/
var i=0;
function countReq(){
    var data=fs.readFileSync('request.json');
    if(data!="")
        var msg=JSON.parse(data);
    else return 0;
    for(j in msg)
        i++;
}
countReq();
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
    
    var msgSave=""  //text to write to file
    var data=fs.readFileSync('request.json');   //Read DB JSON file
    var body=JSON.stringify(req.body,null,2);   //Stringify the form information
    
    /*Remove initial sign that interfere with parse*/
    const UTF8_BOM = "\u{FEFF}";                    
    if( data.includes(UTF8_BOM)){
        data.subarray(1);
    }
    if(data!=""){   //In case the DB isn't empty(usually)
        var msg=JSON.parse(data);   //Parse the data from DB
        msgSave=JSON.stringify(msg,null,2); //Stringify the msg to work with
        msgSave=msgSave.slice(0,msgSave.length-1);  //Remove final "}"
        msgSave+=",\"request "+i+"\" : "+body+"}";  //Add next request according to JSON pattern
    }
    else    //In case the DB is empty(only on deletion of request by admin)
        msgSave+="{\"request "+i+"\" : "+body+"}";  //Add next request according to JSON pattern
    
    
    fs.writeFile('request.json',msgSave,finishedWrite); //Write the data to the file and notifiy console when finished
    function finishedWrite(err){
        console.log("Writing to request.json has been successfull");
    }
    i++;    //Advance the iterator of the amount of requests in server
    /*Display wanted page(currently display the requests)*/
    res.send(msgSave);
})

/*Stub url for personal uses*/
app.get('/yuda',function(req,res){
    var ch1="yuda";
    var ch2="chen@walla.com";
    var ch3="0528790549";
    var ch4="arnav";
    var ch5=1;
    client.query("insert into requests (name,email,phone,message) values('"+ch1+"','"+ch2+"','"+ch3+"','"+ch4+"');");
    client.query("insert into requests (name,email,phone,message) values('ira','asd@yuda.yuda','045454528790549','gjlg yuda hjlhjl yuda');");
    client.query("select * from requests;",function (err,result) {
        res.json(result.rows);
    })
})
/*Make web listen on port 8080 in case of localhost and port of website in case of online(notifiy console on start)*/
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 

