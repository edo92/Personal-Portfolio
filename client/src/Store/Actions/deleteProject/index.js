import axios from 'axios'
import { getAllProjects } from '../getAllProjects'

export const deleteProject = id => {
    return async dispatch => {
        axios.get(`/delete/project/${id}`);
        dispatch( getAllProjects());
    }
};

