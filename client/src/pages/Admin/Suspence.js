import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import firebase from 'firebase'
import 'firebase/auth'

import SideBar from './Components/Sidebar'
import Body from './Components/Body'

import { getAllProjects } from '../../Store/Actions/getAllProjects'

class AdminPage extends Component {
    state={
        addModal: false
    }

    componentDidMount(){
        this.props.getProjects();
    }

    addProjectModal = () => {
        this.setState({
            addModal: !this.state.addModal
        })
    };

    signOut = () => {
        firebase.auth().signOut();
        this.props.history.push('/')
    };

    render(){
        return (
            <div className='col-12 p-0 ov-hidden'>
                <div className='row col-12 m-0 p-0 display-flex'>
                    <SideBar 
                        addModalSwtich={ this.addProjectModal }
                        signOut={ this.signOut }
                    />
    
                    <Body 
                        addModal={ this.state.addModal }
                        addModalSwtich={ this.addProjectModal }
                        projects={ this.props.projects }
                    />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        projects: state.app.projects
    }
};

const mapPropsToState = dispatch => {
    return {
        getProjects: ()=> dispatch( getAllProjects()) 
    }
};

export default withRouter(connect( mapStateToProps, mapPropsToState)( AdminPage ));