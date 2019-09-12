import React from 'react'
import ShowcaseCarousel from '../../../../components/Showcase'
import LandingIntro from './Components/LandingIntro'
import LandingBanner from './Components/LandingBanner'

const Home = props => {
    return (
        <div className='col-12 p-0'>
            <LandingBanner/>

            <LandingIntro/>
            
            <ShowcaseCarousel 
                title='Full Stack'
                list={ props.projects.fullstack }
            />

            <ShowcaseCarousel 
                title='Front End'
                list={ props.projects.frontend }
            />


        </div>
    )
};

export default Home;