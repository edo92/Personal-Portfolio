import React, { Component } from 'react';

import { Modal, Select, Input } from 'antd';

const { Option, OptGroup } = Select;

class PostModal extends Component {
    state = {
        article: '',
        privacy: 'Public'
    }

    handleInput = e => {
        this.setState({ article: e.target.value });
    }

    handlePrivacy = privacy => {
        this.setState({ privacy });
    }

    render(){
        return(
            <Modal
                title='Post'
                visible={ this.props.visible }
                onOk={() => this.props.postBlog( this.state )}
                onCancel={ this.props.modalSwitch }
            >
                <span className='p-0' style={{height:'200px'}}>
                    <div className='my-3'>
                        <Input.TextArea onChange={ this.handleInput } placeholder='Article'/>
                    </div>
                    <div className='my-3'> 
                        <Select defaultValue='Public' style={{ width: 200 }} onChange={ this.handlePrivacy }>
                            <OptGroup label='Privacy'>
                                <Option value='Public'>Public</Option>
                                <Option value='Private'>Private</Option>
                            </OptGroup>
                        </Select>
                    </div>
                </span>
            </Modal>
        )
    }
};

export default PostModal;