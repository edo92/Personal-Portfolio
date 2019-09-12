import React, { memo } from 'react'
import './css/index.css'

const LandingIntro = () => {
    return (
        <div id='intro-container' className='col-12'>
            <ul className='col-12 p-0 m-0'>
                <li className='col-12 p-0'>
                    <h5 className='font-2rem'>TEMPLATES FOR WEBFLOW</h5>
                    <p className='text-5f5f5f'>
                        I try out new ways to design or develop websites anytime I can.
                        This time I tried the Webflow App. Grow & Write templates are made 100% on this great app. Thanks to Webflow they are a success both are offered on 
                        Webflow template library for other designers to use as a starter web site. I will continue to be a contributor on this great start up
                    </p>
                </li>
                <li className='col-12 p-0'>
                    <div id='viewAll-bttn' className='p-2rem'>
                        <a href='/mywork'>View All Projects</a>
                    </div>
                </li>
            </ul>
        </div> 
    )
};

export default memo( LandingIntro );
