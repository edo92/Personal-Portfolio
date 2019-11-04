module.exports = async ( req, res, db, controller ) => {
    let form = req.body;
    try {
        await controller.post.create( db, form );
    }
    catch( error ){
        res.status( 300 ).json({ error });
    }
}