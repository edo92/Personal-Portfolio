import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button } from 'antd'
import './style.css'

import SignInForm from './Components/SignInForm'
import { validate } from '../../utility/validations'

import firebase from 'firebase/app';
import app from '../../utility/configs/firebaseConfig'

class AdminLogin extends Component {
    state={
        form: {
            email:'',
            password:''
        },
        status:{}
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
        const onSubmit = async res => {
            this.setState({
                status: res.status,
                message: res.messages
            });
            if( res.validForm ){
                await app.auth().setPersistence(
                    firebase.auth.Auth.Persistence.SESSION
                );
                await app.auth().signInWithEmailAndPassword(
                    form.email, form.password
                );
                this.props.history.push('/admin')
            }
        };

        validate({
            onAction: (res) => onSubmit(res),
            form: this.state.form,
            options: { withPrefix: true }
        });
    };

    render(){
        return (
            <div className='col-12 p-0'>
                <div className='col-12 p-0'>
                    <div id='signin-form-container' className='col-12'>
                        <div id='signin-form-inner' className='col-6'>
                            <SignInForm 
                                status={ this.state.status }
                                handleInput={ this.handleInput }
                            />
                            <Button 
                                onClick={ this.handleSumbit }
                                id='signin-btn'
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter( AdminLogin );