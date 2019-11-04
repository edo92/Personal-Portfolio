import React from 'react'
import './styles.css';
import { Icon } from 'antd';

import { request } from '../../requests';
import PostView from '../../components/PostView';

class HomeBanner extends React.Component {
    state = {
        postList: []
    }
    
    async componentDidMount(){
        let publicPosts = await request.post.getPublicPosts();
        this.setState({ postList: publicPosts });
    }

    render(){
        return(
            <div id='landing-page-container' className='col-12'>
                <nav id='main-header' className='col-12'>
                    <ul className='row col-12 py-1 m-0'>
                        <div className='col-3'>
                        </div>
                        <div className='col-6'>
                            <h3 className='main-logo'>Hamster Post</h3>
                        </div>
                        <div id='loginBtn' className='col-3'>
                            <a href='/register' className='secondery-bttn'>Sign Up</a>
                            <a href='/login' className='main-bttn'>Login</a>
                        </div>
                    </ul>
                </nav>
                <div id='banner-container'>
                    <div id='banner-inner' className='row col-12'>
                        <div className='col-12 col-md-6 p-0'>
                            <div id='banner-text' className='col-12 p-0'>
                                <div className='col-12'>
                                    <h1 className='clip-dash'></h1> 
                                    <h1 className='text-title'>Hamster Post</h1>
                                    <h1 className='text-title'>Platform for Blogging</h1>
                                    <p className='sub-text m-0'> Easy to use interface to blog</p>
                                </div>
                                <div className='row col-12 p-5 respons-btn'>
                                    <a className='col-6 banner-bttn btn-style-1'>Learn More</a>
                                    <a className='col-6 banner-bttn btn-style-2'>Deatels</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <h1 className='text-white'>Check out Hamsters posts</h1>
                        <div className='col-4 pt-3'>
                            { this.state.postList.map( post => {
                                return (
                                    <div className='col-12 blog'>
                                        <p>{ post.post }</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default HomeBanner;