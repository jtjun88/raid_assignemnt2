// call module
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect with Mongoose
const url = "mongodb+srv://tester123:tester123@raid-assignment-input-d.yfhyi2s.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
console.log('Connected to MongoDB')

// define database Schema/blueprint + create data Model
var input_Schema = new mongoose.Schema(
    {
    input_name: String,
    input_email: String,
    input_subject: String,
    input_text: String
    }, {collection: "User Input"}
);
var user_input = mongoose.model('User Input', input_Schema);



// set middleware to store data obtained from request body
var urlencodedParser = bodyParser.urlencoded({extended: false});

// prep to export this module into app.js
module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    });

    app.post('/', urlencodedParser, function(req, res){
        let new_user_input = new user_input({
            input_name: req.body.input_name,
            input_email: req.body.input_email,
            input_subject: req.body.input_subject,
            input_text: req.body.input_text
        });
        new_user_input.save(function(err){
            if (err) throw err;
            console.log('Input is saved.');
            //res.json(new_user_input)
        });
        // res.send('Data Received: \n' + JSON.stringify(req.body));
    });

};

                               /* <li>Name: <%= saved_name%></li>
                                <li>Email:  <%= saved_email%></li>
                                <li>Subject:  <%= saved_subject%></li>
                                <li>Input:  <%= saved_text%></li> --> */