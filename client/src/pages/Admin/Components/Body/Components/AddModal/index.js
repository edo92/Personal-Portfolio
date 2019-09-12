import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Upload, Button, Icon, Modal, Radio } from 'antd'

import ProjectForm from '../ProjectForm/index'

// Actions 
import { addProject } from '../../../../../../Store/Actions/addProject'

class AddProjectModal extends Component {
    state={
        form: {
            name:'',
            desciption:'',
            summary:'',
            github:'',
            website:'',
            type:'',
            image: {}
        },
    }

    formHandleInput = e => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleUpload = e => {
        let image = e.fileList;
        if( image ){
            this.setState({
                ...this.state,
                form: {
                    ...this.state.form,
                    image: image[0]
                }
            });
        }
    }
    handleProjectType = e => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                type: e.target.value
            }
        });
    }

    customRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 3000);
    }

    handleSubmitProject = async () => {
        let submited = await this.props.handleAddProject( this.state.form );
        if( submited.success ){
            this.props.addModalSwtich();
            this.setState({ form:{} }); //empty state
        }
    }

    render(){
        return (
            <Modal
                title='Add Project'
                visible={ this.props.addModal }
                onCancel={ this.props.addModalSwtich }
                onOk={ this.handleSubmitProject }
            >
                <div>
                    <div className='col-12 px-0 py-3'>
                        <ProjectForm
                            handleInput={ this.formHandleInput }
                            form={ this.state.form }
                        />
                    </div>

                    <div className='col-12 px-0 py-3'>
                        <Radio.Group 
                            value={ this.state.form.type }
                            onChange={ this.handleProjectType } 
                        >
                            <Radio value={'fullstack'}>Full Stack</Radio>
                            <Radio value={'backend'}>Back End</Radio>
                            <Radio value={'frontend'}>Front End</Radio>
                        </Radio.Group>
                    </div>

                    <div className='col-12 px-0 py-3'>
                        <Upload 
                            onChange={ this.handleUpload }
                            customRequest={ this.customRequest }
                        >
                            <div className='col-12 px-0 py-3'>
                                <Button><Icon type='upload' /> Upload</Button>
                            </div>
                        </Upload>
                    </div>
                </div>
            </Modal>
        )
    }
};

const mapPropsToState = dispatch => {
    return {
        handleAddProject: (form)=> dispatch( addProject(form))
    }
};

export default connect( null, mapPropsToState )( AddProjectModal );