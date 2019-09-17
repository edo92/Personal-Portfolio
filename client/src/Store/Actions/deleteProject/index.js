import { request } from '../../../requests'

export const deleteProject = id => {
    return async dispatch => {
        let data = await request.project.delete( id );

        let projects = data.success;
        if( projects ){
            dispatch({ type: 'ALL_PROJECTS', projects });
        }
    }
};

