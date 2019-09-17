import React from 'react'
import './css/index.css'

import Hamburger from './Components/Hamburger/Hamburger'
import SocialIcons from '../SocialIcons';

const Header = () => {
    return (
        <div id='header-wrapper' className='col-12'>
            <ul id='header-container' className='col-12 p-0 m-0'>
                <li className='col-sm-5 col-md-6 col-lg-7'>
                    <h4 id='logo-style'>E.J</h4>
                </li>
                <li className='col-sm-7 col-md-6 col-lg-5'>
                    <div id='header-nav' className='col-12 hidden-sm'>
                        <ul className='col-8'>
                            <li className='col-6 p-0'>
                                <SocialIcons/>
                            </li>
                            <li className='col-6 p-0'>
                                <a href='/mywork' className='header-text'>My Work</a>
                            </li>
                        </ul>
                        <div className='col-4'>
                            <div className='glow-effect' id='resume-bttn'>
                                <a href='/resume' className='header-text btn-imp'>Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 visible-sm p-0'>
                        <Hamburger/>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Header;
