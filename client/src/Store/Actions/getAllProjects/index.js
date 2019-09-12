import axios from 'axios'

export const getAllProjects = option => {
    return async dispatch => {
        let projects = await axios.get('/get/all/projects/');
        if( option && option.sort ){
            dispatch( setState( sortByType( projects.data )));
        }
        else {
            dispatch( setState( projects.data ));
        }
    }
};

const sortByType = projects => {
    let holder={};

    projects.map( proj => { // Create Pleaseholder
        holder[proj.type] = [];
    });
    projects.map( proj => { // Push to designated array
        holder[proj.type].push( proj );
    });

    return holder;
};

const setState = projects => {
    return {
        type: 'ALL_PROJECTS',
        projects
    }
};