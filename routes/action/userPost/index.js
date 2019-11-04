const controller = require('../../controller');

const getPosts = require('./getPosts');
const createPost = require('./createPost');
const likePost = require('./likePost');
const sharepost = require('./sharePost');
const getPublic = require('./getPublicPosts');

module.exports = {
    create: async ( req, res, db ) => {
        createPost( req, res, db, controller );
    },

    getAll: async ( req, res, db ) => {
        getPosts( req, res, db, controller )
    },

    getPublicPosts: async ( req, res, db ) => {
        getPublic( req, res, db, controller );
    },

    likePost: async ( req, res, db ) => {
        likePost( req, res, db, controller );
    },

    sharePost: async ( req, res, db ) => {
        sharepost( req, res, db, controller );
    }
}