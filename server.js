// Load the express module
var express = require('express');
// invoke var express and store the resulting application in var app
var app = express();
// load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
// load express-session
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'})); //string for encryption

app.get('/',function(req, res){
    res.render('index', {title: "my Express project"});
});
app.get('/users/:id', function(req, res){
   console.log('The user id requested is: ', req.params.id);
    res.send('You requested the user with id: ' + req.params.id);
});
app.post('/users', function(req, res){
    req.session.name = req.body.name;
    console.log(req.session.name);
    console.log("POST DATA \n\n", req.body);
    res.redirect('/');
});
app.set('view engine', 'ejs');
// tell express to use static folder for static content
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.get('/users', function(req, res){
    //hard coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Rory", email: "rory@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    req.session.name = req.body.name;
    console.log(req.session.name);
    res.render('users', {users: users_array});
});
// tell express app to listen on port 8000
app.listen(8000, function(){
    console.log('listening on port 8000');
});