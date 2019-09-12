import React, { Component } from 'react'
import './style.css'

import AddProjectModal from './Components/AddModal'
import ProjectCard from './Components/Project'

class AdminBody extends Component {    
    render(){
        let projects = this.props.projects;
        return (
            <div id='admin-body-container'>
                <div className='col-12 p-0'>
                    <div className='col-12 p-0'>
                        { projects && projects.map(( item, i ) => {
                            return (
                                <ProjectCard key={ item._id } item={ item }/>
                            )
                        })}
                    </div>
                </div>
                <AddProjectModal
                    addModal={ this.props.addModal }
                    addModalSwtich={ this.props.addModalSwtich }
                />
            </div>
        )
    }
};

export default AdminBody;