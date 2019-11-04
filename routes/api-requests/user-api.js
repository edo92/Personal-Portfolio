const { action } = require('../action');

module.exports = ( app, db ) => {
    app.post('/register/user/', ( req, res ) => {
        action.auth.register( req, res, db );
    });

    app.post('/signin/user', ( req, res ) => {
        action.auth.signin( req, res );
    });

    app.get('/follow/user/:owner/:asker', ( req, res ) => {
        action.user.followUser( req, res, db );
    });
};