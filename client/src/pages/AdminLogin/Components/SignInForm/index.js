import React from 'react'
import { Input, Form, Icon } from 'antd'
import './style.css'

const SignInForm = props => {
    return (
        <div id='login-form'>
            <Form>
                <Form.Item
                    hasFeedback
                    validateStatus={ props.status.emailStatus }
                    className='m-0'
                >
                    <Input 
                        onChange={ props.handleInput } 
                        name='email' prefix={ <Icon type='mail'/> } 
                        placeholder='Email'
                    />
                </Form.Item>  
                <Form.Item
                    hasFeedback
                    validateStatus={ props.status.passwordStatus }
                >
                    <Input
                        onChange={ props.handleInput } 
                        prefix={ <Icon type='lock'/> } 
                        name='password' 
                        type='password' 
                        placeholder='Password'
                    />
                </Form.Item> 
            </Form>
        </div>
    )
};

export default SignInForm;