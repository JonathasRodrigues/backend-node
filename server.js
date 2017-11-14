var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
User = require('./api/models/userModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SocialNetwork');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);

app.use(function(req,res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
})

console.log('backend is runing on port: ' + port);