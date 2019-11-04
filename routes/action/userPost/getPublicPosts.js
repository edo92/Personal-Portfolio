module.exports = async ( req, res, db, controller ) => {
    try {
        let allPosts = await controller.post.getAllPosts( db );

        let publicPosts = allPosts.filter( post => {
            if( post.private === false ){
                return allPosts;
            }
        });
        res.status( 200 ).json( publicPosts );
    }
    catch( error ){
        res.status( 300 ).json({ error });
    }
};