const authRoute = require('./authRoute');

module.exports = ( app ) => {
    require('./api-requests/user-api')( app, authRoute )
};