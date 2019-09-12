const control = require('../controller');

module.exports = ( app, db, protect ) => {
    app.post('/add/project/', async (req, res) => {
        let form = req.body.form;
        try {
            control.addProject( db, form );

            res.status( 200 ).json({ success: true })
        } catch ( error ){ res.status( 500 ).end() }
    });

    //-------------------------------------------------//

    app.get('/get/all/projects/', async ( req, res ) => {
        try {
            let projects = await control.getProjects( db );
            res.status( 200 ).json( projects );
        }
        catch ( error ){ res.status( 500 ).end() }
    });


    app.get('/delete/project/:id', (req,res) => {
        try {
            control.deleteProject( db, req.params.id );
        }
        catch( error ){ res.status( 500 ).end() }
    })
};