const auth = require('./authUser/auth');
const post = require('./userPost');
const user = require('./userAction');

module.exports.action = {
    auth: auth,

    post: post,

    user: user
};
