
module.exports = async ( req, res, db, controller ) => {
    let { user } = req.params;
    try {
        let allPosts = await controller.post.getAllPosts( db );

        class Manipulate {
            constructor( post ){
                this.userPostList = [];
                this.generalPostList = [];

                this.isLiked;
                this.liked = 0;
                this.disliked = 0;
        
                this.start( post );
            }
        
            start( posts ){
                posts.map( post => {
                    let count = this.countLikes( post.likes );
                    let arr = {
                        post: post.post,
                        _id: post._id,
                        likes: count,
                        owner: post.owner.username
                    }
                    let byUser = post.owner.uid === user;
                    this.sortPosts( arr, byUser );
                    this.resetCount();
                });
            }

            countLikes( likes ){
                likes.map( like => {
                    like[0].isLiked === 'true' ? 
                        this.liked += 1 : this.disliked += 1 ;

                    if( like[0].uid === user ){
                        this.isLiked = like[0].isLiked
                    }
                });
                return { liked: this.liked, disliked: this.disliked, isLiked: this.isLiked };
            }
            
            sortPosts( post, byUser ){
                byUser ? 
                    this.userPostList.push( post ) :
                    this.generalPostList.push( post );
            }

            resetCount(){
                this.liked = 0;
                this.disliked = 0;
                this.isLiked = null;
            }
        };

        let test = new Manipulate( allPosts );

        res.status( 200 ).json({ user: test.userPostList, all: test.generalPostList });
    }
    catch( error ){
        res.status( 300 ).json({ error });
    }
}