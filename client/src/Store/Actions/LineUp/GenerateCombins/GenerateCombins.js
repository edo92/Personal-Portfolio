import { COMBINATIONS } from '../actionTypes';
import axios from 'axios';

export const generateCombins = () => {
    return async ( dispatch, getState ) => {
        let combins = await axios.get(`/generate/combinations/`);

        combins = combins.data.success;
        if( combins ){
            dispatch({
                type: COMBINATIONS,
                combins
            });
        };
    };
};
 