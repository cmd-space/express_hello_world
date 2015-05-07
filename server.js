// Load the express module
var express = require('express');
// invoke var express and store the resulting application in var app
var app = express();

app.get('/',function(request, response){
    response.send('<h1>Hello Express</h1>');
})
// tell express to use static folder for static content
app.use(express.static(__dirname + '/static'));
// tell express app to listen on port 8000
app.listen(8000, function(){
    console.log('listening on port 8000');
})