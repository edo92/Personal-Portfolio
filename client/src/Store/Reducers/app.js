const initialState = {
    projects:[]
};

const app = ( state = initialState, action ) => {
    switch( action.type ){
        case 'ALL_PROJECTS':
            console.log('action', action )
            return {
                ...state,
                projects: action.projects
            }
            
        default: return state;
    };
};

export default app;