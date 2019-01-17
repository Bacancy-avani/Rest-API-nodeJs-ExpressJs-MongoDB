//Import express
const express = require('express');
//Import body-parser
const bodyPraser = require('body-parser');
//Import mongoose
const mongoose = require('mongoose');
//Setup the port
const port = 8080;

const hostname = '127.0.0.1';
//Initialize the app
const app = express();

//Import routes
const apiRoutes = require('./api-router.js');

//Import path
const path = require('path');

app.use(bodyPraser.urlencoded({
	extended: true
}));

// Connect to Mongoose and set connection variable
//var db = mongoose.createConnection('mongodb://localhost/restapi');
mongoose.connect('mongodb://localhost:27017/restapi', {useNewUrlParser: true});

//Send message for default URL
app.get('/',function(req, res) {
	//res.send('hello aniii')
	app.use(express.static('public'));
});

// Use Api routes in the App
app.use('/api', apiRoutes);

//Launch app to listen to specified port
app.listen(port, hostname, function() {
	console.log('running on port : '+port);
})
