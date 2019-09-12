import React from 'react'
import { Form, Input, Icon } from 'antd'

const ProjectForm = props => {
    let { TextArea } = Input;
    return(
        <div className='col-12 p-0'>
            <Form>
                <Form.Item
                    hasFeedback
                    className='m-0'
                >
                    <Input 
                        onChange={ props.handleInput } 
                        value={ props.form.name }
                        name='name' 
                        placeholder='Name'
                    />
                </Form.Item>  
                <Form.Item
                    hasFeedback
                    className='m-0'
                >
                    <Input 
                        onChange={ props.handleInput } 
                        value={ props.form.desciption }
                        name='desciption'
                        placeholder='Description'
                    />
                </Form.Item>  
                <Form.Item
                    hasFeedback
                    className='m-0'
                >
                    <TextArea 
                        onChange={ props.handleInput } 
                        value={ props.form.summary }
                        name='summary'
                        placeholder='Project Summary'
                    />
                </Form.Item> 
                <Form.Item
                    hasFeedback
                    className='m-0'
                >
                    <div className='col-12 p-0 display-flex'>
                        <Input 
                            onChange={ props.handleInput } 
                            value={ props.form.website }
                            prefix={ <Icon type='global' /> }
                            className='mx-1' 
                            name='website'
                            placeholder='Website Url'

                        />
                        <Input 
                            onChange={ props.handleInput } 
                            value={ props.form.github }
                            prefix={ <Icon type='github'/> }
                            className='mx-1' 
                            name='github'
                            placeholder='Github Url'
                        />
                    </div>
                </Form.Item> 
            </Form>
        </div>
    )
};

export default ProjectForm;