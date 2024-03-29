const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema =new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = new mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;

        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.save()
                .then(user => {
                    callback(null, user); // Invoke callback with no error and the saved user
                })
                .catch(err => {
                    callback(err, null); // Invoke callback with the error
                });
        });
    });
};



module.exports.comparePassword=function (candidatePassword,hash,callback) {
    bcrypt.compare()
}