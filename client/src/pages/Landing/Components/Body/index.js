import React, { memo } from 'react'
import ShowcaseCarousel from '../../../../components/Carousel'
import LandingIntro from './Components/LandingIntro'
import LandingBanner from './Components/LandingBanner'

const Home = props => {
    let projs = props.projects;
    return (
        <div className='col-12 p-0'>
            <LandingBanner/>

            <LandingIntro/>
            
            { projs.fullstack ? <ShowcaseCarousel 
                title='Full Stack'
                list={ projs.fullstack }
            /> : null }

            { projs.frontend ? <ShowcaseCarousel 
                title='Front End'
                list={ projs.frontend }
            /> : null }

        </div>
    )
};

export default memo( Home );