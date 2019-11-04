import React, { Component } from 'react';
import '../styles.css';

import { request } from '../../../requests';

import { Icon, Divider } from 'antd';

import { validate } from '../../../utility/validations';
import firebase from 'firebase/app';
import app from '../../../utility/configs/firebaseConfig'

import Button from '../../../components/CustomButton';
import LoginForm from './Components/LoginForm/LoginForm';

class LoginPage extends Component {
    state = {
        status: {},
        message: {},
        form: {
            email:'',
            password:''
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSumbit = () => {
        let form = this.state.form;
        const onSubmit = async (res) => {
            this.setState({
                status: res.status,
                message: res.messages
            });

            if( res.validForm ){
                try {
                    await app.auth().setPersistence(
                        firebase.auth.Auth.Persistence.SESSION
                    );
                    await app.auth().signInWithEmailAndPassword(
                        form.email, form.password
                    );
                    
                    let user = app.auth().currentUser;
                    let signin = await request.auth.signin( user.uid );

                    if( signin.success ){
                        localStorage.setItem('session_tokan', signin.success.token);
                        this.props.history.push(`/dashboard/${user.uid}`)
                    }
                }
                catch ( error ){
                    this.setState({
                        message: { error: error.message },
                        status: {
                            emailStatus: 'error',
                            passwordStatus: 'error'
                        },
                    });
                };
            };
        };
        validate({
            onAction: (res) => onSubmit(res),
            form: this.state.form,
            options: { withPrefix: true }
        });
    };

    render(){
        return(
            /* --- Side Bar --- */
            <div className='col-12 p-0'>
                <div className='row col-12 auth-container'>
                    <div className='col-4 hidden-sm p-0 m-0'>
                        <div className='col-12 auth-sidebar p-0'>
                            <div className='col-12 p-3 pl-4'>
                                <h2>Hamster</h2>
                            </div>
                            <div className='col-12 sidebar-text'>
                                <div className='col-12'>
                                    <h3>Hey!</h3>
                                    <h4>Not registered yet?</h4>
                                    <a href='/register' className='col-12 sidebar-bttn'>Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --- Login Form --- */}
                    <div className='col-sm-8'>
                        <div className='col-12 form'>
                            <div className='col-12 p-0'>
                                <h2>Login</h2>
                                <div className='col-12 p-0'>
                                    <div className='col-12'>
                                        <LoginForm status={ this.state.status } handleInput={ this.handleInput }/>
                                        <Button className='button-x submit-bttn' onClick={ this.handleSumbit }>Login</Button>
                                    </div>
                                    <div className='col-12 p-3'>
                                        <Divider className='forgot-divider'>Forgot Password?</Divider>
                                    </div>
                                    <div className='col-12'>
                                        <Button className='button-x my-2' color='#1890ff'><Icon type='facebook'/>Facebook</Button>
                                        <Button className='button-x my-2' color='#f5222dd4'><Icon type='google'/>Google</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default LoginPage;