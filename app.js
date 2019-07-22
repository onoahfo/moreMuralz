const express = require('express');
const app = express();
const database = require('./models');


const port = process.env.PORT || 3000 ;

// addin middleware
app.set("view engine", "ejs");   

//setting up template engine 
app.get('/home', function (req, res) {
  res.render('home');
})

// routing any traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Landing page!!!");
});

// adding context to our request
app.use( (req, res, next ) => {
  req.context = { db: database }
  next();
} )

//app is listening for request on port 3000  

database.sequelize.sync().then(function(){
  app.listen(port, function(err){
      if (err)
          console.log(err)
      console.log('Server is live on port: ' + port)
  })
});