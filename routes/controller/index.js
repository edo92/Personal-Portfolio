module.exports = {
    addProject: async ( db, form ) => {
        try {
            return await db.Project.create( form );
        }
        catch( error ){ return error }
    },

    deleteProject: async ( db, id ) => {
        try {
            return await db.Project.remove({ _id: id });
        }
        catch( error ){ return error }
    },

    getProjects: async ( db ) => {
        try {
            return await db.Project.find({});
        }
        catch( error ){ return error }
    }
}