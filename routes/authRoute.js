const admin = require('firebase-admin');

// Verifies Client Session Token 
module.exports = async ( req, res, next ) => {
    try {
        const token = await req.headers['authorization'].split('Bearer')[1].trim();
        admin.auth().verifyIdToken(token);

        next();

    } catch( error ){ 
        res.status(401);
    };
};