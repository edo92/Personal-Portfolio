import React from 'react';
import './css/index.css';

import Navigation from './Components/Navigation'
import SocialMediaList from './Components/SocialMedia';

const Footer = () => {
    return(
        <div id='footer-container' className='col-12'>
            <div id='footer-body' className='row col-12'>
                <div className='col-sm-8 col-md-8'>
                    <Navigation/>
                </div>
                <div className='col-sm-4 col-md-4'>
                    <SocialMediaList/>
                </div>
            </div>
            <div id='footer-bottom' className='col-12'>
                <div className='col-12 p-0 m-0 pt-3'>
                    <p className='text-center text-white m-0'>
                        © Eduard Jacobs portfolio
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
