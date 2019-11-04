import React, { Component } from 'react';
import '../styles.css';

import { request } from '../../../requests';
import { validate } from '../../../utility/validations';

import Button from '../../../components/CustomButton';
import RegisterForm from './Components/RegisterForm';

class RegisterPage extends Component {
    state = {
        status: {},
        message: {},
        form: {
            email:'',
            userName:'',
            password:'',
            repPassword:''
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

    handleRegistration = () => {
        const onSubmit = async res => {
            this.setState({
                status: res.status,
                message: res.messages
            });
            if( res.validForm ){
                let register = await request.auth.register( this.state.form );
                if( register.success ){
                    let uid = register.success.uid
                    this.props.history.push(`/dashboard/${uid}`)
                } 
            }
        };
        validate({
            onAction: (res) => onSubmit(res),
            form: this.state.form,
            options: { withPrefix: true }
        });
    }

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
                                    <h3>Welcome</h3>
                                    <h4>Already registered?</h4>
                                    <a href='/login' className='col-12 sidebar-bttn'>Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --- Register Form --- */}
                    <div className='col-sm-8'>
                        <div className='col-12 form'>
                            <div className='col-12 p-0'>
                                <h2>Register</h2>
                                <div className='col-12'>
                                    <RegisterForm status={ this.state.status } handleInput={ this.handleInput }/>
                                    <Button className='button-x submit-bttn' onClick={ this.handleRegistration }>Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default RegisterPage;