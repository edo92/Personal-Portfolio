var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: {
        type: String,
        unique: true,
        required: true
    },
    
    email: {
        type: String,
        unique: true,
        required: true
    },
    
    uid: {
        type: String,
        required: true,
        unique: true
    },

    posts: [{
        type: Array
    }],

    shared: [{
        type: Array
    }],


    following: [{
        type: Array
    }],
    
    followers: [{
        type: Array
    }]

});

var User = mongoose.model("User", UserSchema)
module.exports = User;