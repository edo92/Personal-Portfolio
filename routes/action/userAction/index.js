const controller = require('../../controller');

module.exports = {
    followUser: async (req, res, db ) => {
        try {
            return await controller.user.followUser( db, req.params );
        }
        catch( error ){
            throw error;
            res.status( 300 ).json({ error });
        }
        
    }
};