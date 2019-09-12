import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/storage'
import { getAllProjects } from '../../Actions/getAllProjects'

export const addProject = form => {
    return async dispatch => {
        let image = form.image;

        try {
            let storageRef = firebase.storage().ref(`image/${image.name}`);
            storageRef.put( image.originFileObj ).then(snapshot => {
                //
            });

            storageRef.getDownloadURL().then(url => {
                form.image = url;
                axios.post('/add/project/', { form });
                dispatch( getAllProjects())
            });
            
            return { success: true };
        } 
        catch ( error ){ throw error };
    }
};