'user strict'
module.exports = function(app) {

    var userController = require('../controllers/userController');

    app.route('/users')
    .get(userController.listUsers)
    .post(userController.newUser);
     
}