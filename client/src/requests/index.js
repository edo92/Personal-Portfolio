import axios from 'axios'
import { headerAuth } from '../utility/headerAuth'

export const request = {
    project: {
        add: async (form) => {
            try {
                let data = await axios.post('/add/project/', { form }, await headerAuth());
                return data.data;
            }
            catch( error ){ return error };
        }, 
        
        delete: async id => {
            try {
                let data = await axios.get(`/delete/project/${id}`, await headerAuth());
                return data.data
            }
            catch( error ){ console.log('error---',error);return error };
        }
    },
}