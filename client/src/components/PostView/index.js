import React from 'react';
import './styles.css';

import { Icon, Avatar, Button } from 'antd';

import HeighlightButton from '../../components/HeighlightButton';

const PostView = props => {
    return (
        <div className='col-12 p-0'>
            { props.currentMenu === 'following' ?
                <div className='col-12 blog-list-inner'>
                { props.postList ? props.postList.all.map(( blog, i ) => {
                    return (
                        <div key={blog+i} className='col-12 blog'>
                            <div className='row col-12 p-0 m-0'>
                                <div className='col-3'>
                                    <div className='col-12 p-0'>
                                        <div className='col-12 p-0'>
                                            <div className='col-12 p-2 ml-3'>
                                                <Avatar size='large'/>
                                            </div>
                                            <div className='col-12'>
                                                <small>{ blog.owner }</small>
                                            </div>
                                            <div className='col-12 p-2'>
                                                <Button size='small' type='primary'
                                                    onClick={() => props.handleFollow( blog.owner )} >Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='col-12 p-0'>
                                        <div className='col-12 p-3'>
                                            <p>{ blog.post }</p>
                                        </div>
                                        <div className='col-12'>
                                            <div className='col-12 p-0'>
                                                <HeighlightButton selected={ blog.likes.isLiked === 'true' }
                                                    icon='like'
                                                    action={()=> props.handleLikePost(blog, true)}
                                                    count={ blog.likes.liked }
                                                />
                                                <HeighlightButton selected={ blog.likes.isLiked === 'false' }
                                                    icon='dislike'
                                                    action={()=> props.handleLikePost(blog, false) }
                                                    count={ blog.likes.disliked }
                                                />
                                                <span className='ml-3 mr-1' onClick={()=> props.handleSharePost( blog )}>
                                                    <small className='px-2'>10k</small>
                                                        <Icon  type='share-alt'/>
                                                    <span>Share</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null }
            </div> 
            :
            <div className='col-12'>
            { props.postList ? props.postList.user.map(( blog, i ) => {
                return (
                    <div key={blog+i} className='col-12 blog flex'>
                        <div className='row col-12 p-0 m-0'>
                            <div className='col-12'>
                                <div className='col-12 p-0'>
                                    <div className='col-12 p-3'>
                                        <p>{ blog.post }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Icon className='mt-4 font-26' type='more'/>
                    </div>
                )
            }) : null }              
            </div> }
        </div>
    )
};

export default PostView;

