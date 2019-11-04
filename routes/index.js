const authRoute = require('./authRoute');

module.exports = ( app, db ) => {
    require('./api-requests/user-api')( app, db, authRoute ),
    require('./api-requests/post-api')( app, db, authRoute )
};