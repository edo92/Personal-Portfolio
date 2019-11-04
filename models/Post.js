var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    post: {
        type: String
    },

    owner: {
        type: Object
    },

    likes: [{
        type: Array
    }],

    share: [{
        type: Array
    }],

    private: {
        type: Boolean
    }
});

var Post = mongoose.model("Post", PostSchema)
module.exports = Post;