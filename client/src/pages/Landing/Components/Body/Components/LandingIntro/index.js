import React, { memo } from 'react'
import './css/index.css'

const LandingIntro = () => {
    return (
        <div id='intro-container' className='col-12'>
            <ul className='col-12 p-0 m-0'>
                <li className='col-12 p-0'>
                    <h5 className='font-2rem'>Summary</h5>
                    <p className='text-5f5f5f'>
                        Full-stack web developer able to build a full stack application from ground up.
                        Skilled at writing well-written, testable, scalable and efficient code using current best practices in Web development.
                        Fast learner, hard worker and team player seeking a challenging position at a company.
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
