// call module
var express = require('express');
var formController = require('./controllers/formController');

// call function
var app = express();

// set view engines
app.set('view engine', 'ejs');

// set middleware 
app.use(express.static('./assets'));        // to read static files
app.use(express.json());                    // to read json files in request

// enable controller
formController(app);

// port listener
app.listen(3000);