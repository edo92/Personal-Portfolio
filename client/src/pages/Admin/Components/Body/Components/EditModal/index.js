import React, { Component } from 'react'
import { Modal } from 'antd'
import './style.css'

import ProjectForm from '../ProjectForm';

class EditModal extends Component {
    render(){
        const props = this.props;
        return (
            <div className='w-100'>
                <Modal title='Edit Project'
                    visible={ props.editModal }
                    onCancel={ props.editModalSwtich }
                    onOk={ props.editModalSwtich }
                >
                    <div className='w-100'>
                        <div className='col-12'>
                            <ProjectForm
                                form={ this.props.editData }
                            />
                        </div>
                        <div className='col-12'>
                            <ul className='row col-12 p-0 m-0'>
                                { props.editData && props.editData.image.map( img => {
                                    return (
                                        <li className='col-4 image-list'>
                                            <span>X</span>
                                            <div className='col-12 image-box'>
                                                <div className='edit-form-images' style={{background:`url(${img})` }}></div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
};

export default EditModal;