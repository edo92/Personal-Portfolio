import React from 'react'
import { connect } from 'react-redux'
import { Button, Popconfirm } from 'antd'
import './style.css'

import { deleteProject } from '../../../../../../Store/Actions/deleteProject'

const ProjectCard = props => {
    return(
        <div className='col-sm-6 col-md-4'>
            <ul id='project-card'>
                <li>
                    <div id='cardImg-container'>
                        <img src={ props.item.image } className='img-fluid' alt='project-card'/>
                    </div>
                </li>
                <li>
                    <div id='project-describe'>
                        <span>Los Angeles Highrises</span><br/>
                        <small>By: Gary Jacobs</small><br/>
                    </div>
                </li>
                <li>
                    <div id='view-bttn'>
                        <div className='display-flex col-12 p-0 m-0'>
                            <Popconfirm
                                title='Are you sure delete this project?'
                                onConfirm={()=> props.delete( props.item._id)}
                                onCancel={ ()=>null }
                                okText='Yes'
                                cancelText='No'
                            >
                                <Button>delete</Button>
                            </Popconfirm>

                            <Button onClick={()=> props.modalSwitch( props.item ) }>edit</Button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
};

const mapPropsToState = dispatch => {
    return {
        delete: (id)=> dispatch( deleteProject(id))
    }
}
export default connect( null, mapPropsToState )( ProjectCard );
