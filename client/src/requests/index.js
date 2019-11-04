import axios from 'axios'

export const request = {
    auth: {
        signin: async user => {
            try {
                let data = await axios.post('/signin/user', { user });
                return data.data;
            }
            catch( error ){ return error };
        }, 
        
        register: async form => {
            try {
                let data = await axios.post('/register/user/', { form });
                return data.data
            }
            catch( error ){ return error };
        }
    },

    user: {
        followUser: async (owner, asker) => {
            try {
                let data = await axios.get(`/follow/user/${owner}/${asker}`);
                return data.data;
            }
            catch( error ){ return error };
        }
    },

    post: {
        create: async post => {
            try {
                let data = await axios.post('/create/post/', post );
                return data.data;
            }
            catch( error ){ return error };
        },

        getAllPosts: async requestBy => {
            try {
                let data = await axios.post(`/get/all/posts/${requestBy}/`);
                return data.data;
            }
            catch( error ){ return error };
        },
        
        getPublicPosts: async () => {
            try {
                let data = await axios.get('/get/public/posts/');
                return data.data;
            }
            catch( error ){ return error };
        },

        likePost: async ( id, uid, isLiked ) => {
            try {
                let data = await axios.get(`/like/post/${id}/${uid}/${isLiked}`);
                return data.data;
            }
            catch( error ){ return error };
        },

        sharePost: async ( id, uid ) => {
            try {
                let data = await axios.get(`/share/post/${id}/${uid}/`);
                return data.data;
            }
            catch( error ){ return error };
        }
    }
};