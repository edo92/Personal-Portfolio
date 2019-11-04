import React, { Component } from 'react';
import './styles.css';

import { request } from '../../requests';
import { withRouter } from 'react-router-dom';

import { Icon, Input, Button, Menu } from 'antd';

import PostModal from './Components/PostModal';
import PostView from '../../components/PostView';

class DashboardPage extends Component {
    state = {
        userUid: '',
        modal: false,
        currentMenu: 'following',
    }

    async componentDidMount(){
        await this.setUserUid();
        this.getAllPosts();
    }

    getAllPosts = async () => {
        let allPosts = await request.post.getAllPosts( this.state.userUid );
        this.setState({ postList: allPosts });
    }

    setUserUid = () => {
        let uid = this.props.history.location.pathname.split('/')[2];
        this.setState({ userUid: uid });
    }

    modalSwitchHandler = () => {
        this.setState({ modal: !this.state.modal });
    }

    menuSwitchHandler = menu => {
        this.setState({ currentMenu: menu.key });
    }

    handleSubmitPost = ( post, privacy ) => {
        let user = this.state.userUid;
        request.post.create({ post, user, privacy });
        this.setState({ modal: false },()=> {
            this.getAllPosts();
        });
    }

    handleLikePost = async ( blog, isLiked ) => {
        await request.post.likePost( 
            blog._id, this.state.userUid, isLiked
        );
        this.getAllPosts();
    }

    handleSharePost = post => {
        request.post.sharePost( post._id, this.state.userUid );
    }

    handleFollow = (owner) => {
        request.user.followUser( owner, this.state.userUid );
    }

    render(){
        return (
            /* --- Side Bar --- */
            <div className='dashboard row col-12'>
                <div className='sidebar-container'>
                    <div className='col-12 sidebar-logo'>
                        <h6> Hamster </h6>
                    </div>
                    <div className='col-12 p-0'>
                        <div onClick={ this.modalSwitchHandler } className='scene'>
                            <div className='box'>
                                <div className='font face'>
                                    <p className='m-0'>Post</p>
                                </div>
                                <div className='right face'>
                                    <Icon className='sidebar-icon' type='plus'/>
                                </div>
                            </div> 
                        </div>
                    </div>        
                </div>
                {/* --- Body --- */}
                <div id='dashbody-container'>
                    <div className='col-12 body-header'>
                        <div className='row col-12 p-0 m-0'>
                            <div className='header-search col-8'>
                                <Input.Search/>
                            </div>
                            <div className='col-4 header-icons'>
                                <Button><Icon type='user'/></Button>
                                <Button><Icon type='setting'/></Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 user-wall-container'>
                        <div className='row col-12 user-wall-inner'>
                            <div className='col-12 user-wall-menu'>
                                <Menu 
                                    onClick={ this.menuSwitchHandler }
                                    selectedKeys={[this.state.currentMenu]} 
                                    mode='horizontal'
                                >
                                    <Menu.Item key='following'><Icon type="mail" />Following</Menu.Item>
                                    <Menu.Item key='myposts'><Icon type="appstore" />My Posts</Menu.Item>
                                </Menu>
                            </div>
                            <div className='col-9 post-list-container'>
                                <div className='col-12'>
                                    <PostView 
                                        currentMenu={ this.state.currentMenu }
                                        postList={ this.state.postList }
                                        handleLikePost={ this.handleLikePost }
                                        handleSharePost={ this.handleSharePost }
                                        handleFollow={ this.handleFollow }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PostModal 
                    postBlog={ this.handleSubmitPost }
                    modalSwitch={ this.modalSwitchHandler }
                    visible={ this.state.modal }/>
            </div>
        )
    }
};

export default withRouter( DashboardPage );