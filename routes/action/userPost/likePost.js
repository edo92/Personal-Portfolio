module.exports = async ( req, res, db, controller ) => {
    let { id, uid, isLiked } = req.params;
    try {
        await controller.post.likePost( db, id, uid, isLiked );
        res.status( 200 ).json({ success: true });
    }
    catch( error ){
        res.status( 300 ).json({ error });
    }
}