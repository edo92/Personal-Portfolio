import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Button, Divider } from 'antd';
import './style.css'

import SideBar from './Components/SideBar'
import Body from './Components/Body'

import { getAllProjects } from '../../Store/Actions/getAllProjects'

class MyWorkLayout extends Component {

    state={
        option:'fullstack'
    }

    componentDidMount(){
        this.props.getProjects({ sort:true });
    }

    selectOption = opt => {
        this.setState({
            option: opt
        })
    };

    render(){
        return (
            <div className='row col-12 p-0 m-0 h-100'>
                <SideBar 
                    selectOption={ this.selectOption }
                />
                <div id='mywork-container' className='col-10 p-0 h-100'>
                    <ul className='col-12 px-0 m-0'>
                        <li className='mt-2'>
                            <a href='/'><Button>Go Back</Button></a>
                        </li>
                        <li>
                            <h2>My Work</h2>
                        </li>
                    </ul>
                    <Divider className='m-0'/>
                </div>
                <div className='col-10 p-0'>
                    <Body 
                        projectList={ this.props.projectList }
                        option={ this.state.option}
                    />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        projectList: state.app.projects
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getProjects: (op)=> dispatch( getAllProjects(op))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( MyWorkLayout );