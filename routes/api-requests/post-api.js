const { action } = require('../action');
const headerAuth = require('../authRoute');

module.exports = ( app, db ) => {
    app.post('/create/post/', headerAuth, ( req, res ) => {
        action.post.create( req, res, db );
    });

    app.post('/get/all/posts/:user/', headerAuth, ( req, res ) => {
        action.post.getAll( req, res, db );
    });

    app.get('/get/public/posts/',  ( req, res ) =>{
        action.post.getPublicPosts( req, res, db );
    });

    app.get('/like/post/:id/:uid/:isLiked/' , headerAuth, ( req, res ) => {
        action.post.likePost( req, res, db );
    });

    app.get('/share/post/:id/:uid/', headerAuth, ( req, res ) => {
        action.post.sharePost( req, res, db );
    });
};