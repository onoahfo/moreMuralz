const express = require('express')
const app = express()

// addin middleware
app.set("view engine", "ejs");   

//setting up template engine 
app.get('/home', function (req, res) {
  res.render('home');
})

// routing any traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Landind page!!!");
});

//app is listening for request on port 3000  
app.listen(3000);
console.log('your server is now live')
