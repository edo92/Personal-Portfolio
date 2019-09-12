import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Body from './Components/Body'

import { myProjects } from '../../static/projects/myprojects'
import { getAllProjects } from '../../Store/Actions/getAllProjects'

class LandingPage extends Component {
    componentDidMount(){
        this.props.getProjects({ sort:true });
    }

    render(){
        console.log('projects---', this.props.projects )
        return (
            <div className='overflow-hidden'>
                <Header/>
    
                <Body projects={ this.props.projects }/>
         
                <Footer/>
            </div>
        )
    }
};

const mapToState = state => {
    return {
        projects: state.app.projects
    }
};
const mapToActions = dispatch => {
    return {
        getProjects: (opt)=> dispatch( getAllProjects(opt))
    }
};

export default connect( mapToState, mapToActions )( LandingPage );