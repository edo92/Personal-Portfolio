const { action } = require('../action');

module.exports = ( app, db ) => {
    app.post('/create/post/', ( req, res ) => {
        action.post.create( req, res, db );
    });

    app.post('/get/all/posts/:user/', ( req, res ) => {
        action.post.getAll( req, res, db );
    });

    app.get('/get/public/posts/', ( req, res ) =>{
        action.post.getPublicPosts( req, res, db );
    });

    app.get('/like/post/:id/:uid/:isLiked/' , ( req, res ) => {
        action.post.likePost( req, res, db );
    });

    app.get('/share/post/:id/:uid/', ( req, res ) => {
        action.post.sharePost( req, res, db );
    });
};