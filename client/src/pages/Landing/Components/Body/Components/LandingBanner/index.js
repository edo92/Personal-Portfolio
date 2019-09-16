import React, { memo } from 'react'
import './style.css'

import bannerImg from '../../../../../../static/images/banner.jpg'

const LandingBanner = () => {
    return(
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                <div id='home-banner'>
                    <img id='banner-img' alt='banner-img' src={ bannerImg }/>
                </div>
            </div>
            <div id='banner-text-container'>
                <ul className='col-12 p-0'>
                    <li>
                        <p className='main-text'>Hello, I'm
                            <span className='color-fea657'> Eduard Jacobs </span><br/>
                            <span>I'm a full-stack web developer</span>
                        </p>
                    </li>
                    <li className='p-5'>
                        <a className='banner-bttn'> 
                            Check All Projects 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default memo( LandingBanner );