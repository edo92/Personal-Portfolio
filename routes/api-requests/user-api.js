const control = require('../controller');
const headerAuth = require('../authRoute');

module.exports = ( app, db ) => {

    app.post('/add/project/', headerAuth, async (req, res) => {
        let form = req.body.form;
        try {
            await control.addProject( db, form );
            let projects = await control.getProjects( db );

            res.status( 200 ).json({ success: projects });
        }
        catch ( error ){ res.status( 500 ).end() }
    });

    app.get('/delete/project/:id', headerAuth, async (req,res) => {
        try {
            await control.deleteProject( db, req.params.id );
            let projects = await control.getProjects( db );

            res.status( 200 ).json({ success: projects });
        }
        catch( error ){ res.status( 500 ).end() }
    });

    //-------------------------------------------------//

    app.get('/get/all/projects/', async ( req, res ) => {
        try {
            let projects = await control.getProjects( db );
            res.status( 200 ).json( projects );
        }
        catch ( error ){ res.status( 500 ).end() }
    });
};