import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Upload, Button, Icon, Modal } from 'antd'

import ProjectForm from '../ProjectForm/index'

// Actions 
import { addProject } from '../../../../../../Store/Actions/addProject'

class AddProjectModal extends Component {
    state={
        form: {
            name:'',
            desciption:'',
            summary:'',
            routes:'',
            github:'',
            website:'',
            type:'',
            image: { images:[]}
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
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                image:{
                    ...this.state.form.image,
                    images: image
                }
            }
        });
    }

    onRemove = e => {
        let list = this.state.form.image.images.filter( img => {
            if( img.uid !== e.uid ){
                return this.state.form.image.images
            }
        });
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                image: {
                    ...this.state.form.image,
                    images: list
                }
            }
        })
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
                            projectType={ this.handleProjectType }
                        />
                    </div>
                    <div className='col-12 px-0 py-3'>
                        <Upload 
                            onChange={ this.handleUpload }
                            customRequest={ this.customRequest }
                            onRemove={ this.onRemove }
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