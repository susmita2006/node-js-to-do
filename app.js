var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use( '/assets', express.static('assets'));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/contact", function(req, res){
    //console.log(req.query);
    res.render("contact", {qs: req.query});
});

app.post("/contact", urlencodedParser, function(req, res){
    console.log(req.body.who);
    res.render("contact-success", {data: req.body});
});

app.get('/profile/:name', function(req, res){
    var data = {age:29, job:'ninja', hobbies:['fishing', 'eating', 'reading']};
    res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000); 