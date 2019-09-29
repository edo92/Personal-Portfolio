const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = ( app ) => {
    app.use( logger( 'dev' ));
    app.use( bodyParser.urlencoded({ extended: true }));
    app.use( bodyParser.json({ limit: '20mb' }));

    app.enable('trust proxy');

    app.use(( req, res, next ) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
        
        if( req ){
            res.header( 'Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status( 200 ).json({});
        }


        // if ( req.secure ) {
        //     res.header( 'Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        //     return res.status( 200 ).json({});
        // } 
        // else {
        //     res.redirect('https://' + req.headers.host + req.url);
        // };

        next();
    });
};