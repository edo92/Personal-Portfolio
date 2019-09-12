const initialState = {
    isAuth: false
};

const admin = ( state = initialState, action ) => {
    switch( action.type ){
        case 'HANDLEINPUTS':
            return {
                ...state,

            }
            
        default: return state;
    };
};

export default admin;