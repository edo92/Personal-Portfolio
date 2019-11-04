
module.exports = async ( req, res, db, controller ) => {
    let { id, uid } = req.params;
    try {
        await controller.post.sharePost( db, id, uid );
        res.status( 200 ).json({ success: true });
    }
    catch( error ){
        res.status( 300 ).json({ error });
    }
};