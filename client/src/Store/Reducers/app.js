const initialState = {
    projects:[]
};

const app = ( state = initialState, action ) => {
    switch( action.type ){
        case 'ALL_PROJECTS':
            return {
                ...state,
                projects: action.projects
            }
            
        default: return state;
    };
};

export default app;