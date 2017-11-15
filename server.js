var express = require('express');                        // Dependencies Route Generating
var config = require('./config/config');                 // Config File for DB
var MongoClient = require("mongodb").MongoClient;        // Dependencies MongoDB for NOSQL Database
var ejs = require('ejs');                                // Dependencies EJS for template generating
var bodyParser = require('body-parser');                 // Dependencies BodyParser for POST request and grap body variables
var app = express();                                     // Call the Express function

// Function to launch Express
// The default port is 8080.
function startApp() {
    app.listen(config.port, function () {
      console.log('Express server is listening on port ' + config.port);
        MongoClient.connect("mongodb://"+config.db.user+":"+config.db.password+"@"+config.db.host+":"+config.db.port+"/"+config.db.database, function(error, db) { 
      });
    });
}

startApp();
// Render a template folder : "views"
// We are gonna put the HTML file  
app.use('/', express.static(__dirname + "/views/"));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
