const admin = require('firebase-admin');
const jwtToken = require('jsonwebtoken');

const controller = require('../../controller');

module.exports = {
    register: async (req, res, db) => {
        let { form } = req.body;
        try {
            // Register user in firebase
            let user = await admin.auth().createUser( form );

            if( user.uid ) {
                // Register user in mongodb
                controller.user.registerUser( db, {
                    displayName: form.displayName,
                    email: form.email,
                    uid: user.uid
                });

                // Send User uid back
                res.status( 200 ).json({ success: { uid: user.uid }});
            };
        } catch ( error ){
            res.status( 200 ).json({ error: error });
        };
    },

    
    signin: async ( req, res ) => { // Clean up this section------
        let uid = req.body.user;
        try {
            // Get user from firebase
            let user = await admin.auth().getUser( uid );

            // Sign in JWT - Generate token on sign in
            let token = jwtToken.sign({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }, 
            'secret', { expiresIn: '1h' });

            res.status( 200 ).json({ success:{ token }});
        }
        catch( error ){
            res.status( 300 ).json({ error });
        }
    }
};
