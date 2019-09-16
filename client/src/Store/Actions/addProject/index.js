import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/storage'
import { getAllProjects } from '../../Actions/getAllProjects'

export const addProject = form => {
    return async dispatch => {
        try {
            let urls=[];
            form.image.images.forEach( async (image, i) => {
                let storageRef = firebase.storage().ref(`image/${image.name}`);

                await storageRef.put( image.originFileObj );

                await storageRef.getDownloadURL().then(url => {
                    urls.push( url );
                });

                if( form.image.images.length-1 === i ){
                    form.image = urls;
                    await axios.post('/add/project/', { form });
                    dispatch( getAllProjects());
                }
            });
            return { success: true };
        } 
        catch ( error ){ throw error };
    }
};