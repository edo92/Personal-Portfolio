var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
        name: {
            type: String,
        },
        
        desciption: {
            type: String,
        },

        summary: {
            type: String,
        },

        routes: {
            type: String,
        },

        website: {
            type: String,
        },

        github: {
            type: String,
        },
        
        type: {
            type: String,
        },
        
        image: {
            type: Array,
        }
});

var Project = mongoose.model("Project", ProjectSchema)
module.exports = Project;