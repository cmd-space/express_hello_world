// Load the express module
var express = require('express');
// invoke var express and store the resulting application in var app
var app = express();

app.get('/',function(request, response){
    response.send('<h1>Hello Express</h1>');
})
app.set('view engine', 'ejs');
// tell express to use static folder for static content
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.get('/users', function(request, response){
    //hard coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Rory", email: "rory@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
// tell express app to listen on port 8000
app.listen(8000, function(){
    console.log('listening on port 8000');
})