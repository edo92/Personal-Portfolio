import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import admin from './Reducers/admin'
import app from './Reducers/app'

const rootReducer = combineReducers({
    admin,
    app
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
    
};

export default configureStore;