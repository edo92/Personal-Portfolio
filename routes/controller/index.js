module.exports = {
    user: {
        registerUser: async (db, form) => {
            try {
                return await db.User.create( form );
            }
            catch( error ){ return error };
        },

        followUser: async ( db, data ) => {
            let { owner, asker } = data;
            try {
                // Add asker ass follower to owner
                let followTo = await db.User.findOneAndUpdate(
                    { displayName: owner },
                    { $addToSet: { followers: asker }}
                );
                // Add owner as following to asker
                await db.User.findOneAndUpdate(
                    { uid: asker },
                    { $addToSet: { following: followTo.uid }}
                )
            }
            catch( error ){ return error };
        }
    },

    post: {
        create: async (db, post) => {
            try {
                // Add Username to post 
                let findUser = await db.User.findOne({ uid: post.user });
                let username = findUser.displayName;

                // Create Post
                let createdPost = await db.Post.create({
                    post: post.post.article,
                    private: post.post.privacy === 'Public' ? false : true,
                    owner: { uid: post.user, username }
                });
                // Add post id to creator's post array
                await db.User.findOneAndUpdate(
                    { uid: post.user },
                    { $push: { posts: createdPost._id }}
                );
            }
            catch( error ){ return error };
        },

        getAllPosts: async ( db ) => {
            try {
                let allPosts = await db.Post.find();
                return allPosts;
            }
            catch( error ){ throw error; return error };
        },

        likePost: async ( db, id, uid, isLiked ) => {
            try {
                let post = await db.Post.findOne({ _id: id },
                    { likes: { $elemMatch: { uid: uid }}}
                );
                const addToSet = async () => {
                    try {
                        await db.Post.findOneAndUpdate(
                            { _id: id },
                            { $addToSet: { likes: { uid, isLiked }}}
                        );
                    } catch( error ) { return error };
                };

                const removeSet = async () => {
                    try {
                        await db.Post.findOneAndUpdate(
                            { _id: id },
                            { $pull: { likes: { uid }}}
                        )
                    } catch( error ) { return error };
                };

                // Need clean up
                if( post.likes.length ){
                    post.likes[0].map( async liked => {
                        if( liked.uid === uid && liked.isLiked === isLiked ){
                            return 
                        } 
                        else if ( liked.uid === uid && liked.isLiked !== isLiked ){
                            await removeSet();
                            await addToSet();
                        }
                     });
                } else {
                    addToSet();
                }
            }
            catch( error ){ return error };
        },

        sharePost: async ( db, id, uid ) => {
            try {
                return await db.User.findOneAndUpdate(
                    { uid: uid },
                    { $addToSet: { shared: id }}
                )
            }
            catch( error ){ return error };
        },
    }
};