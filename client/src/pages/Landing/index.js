import React, { Component } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeLayout from '../../pageLayout/Landing'

import { myProjects } from '../../static/projects/myprojects'

class LandingPage extends Component {

    render(){
        return (
            <div className='overflow-hidden'>
                <Header/>
    
                <HomeLayout projects={ myProjects }/>
         
                <Footer/>
            </div>
        )
    }
};

export default LandingPage;