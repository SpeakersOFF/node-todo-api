var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlenth: 1

    }
});

module.exports = {
    User
};

// var user = new User ({
//     email:'akelanasdknasldk'
// });

// user.save().then((doc) => {
//     console.log('user saved',doc)
// },(e) => {
//     console.log('unable to create user', e)
// });
