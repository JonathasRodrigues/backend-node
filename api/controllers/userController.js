'user strict'
var mongoose = require('mongoose'),
Users = mongoose.model('Users');

exports.listUsers = function(req, res) {
    Users.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    })
}

exports.newUser = function(req, res) {
    var new_user = new Users(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    })
}

