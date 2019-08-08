import React, { Component } from 'react'

import './SignUp.styles.scss';
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("passwords don't match");
            return ;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email, password
            );
            
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch(err){
            console.log(err);
        }
    }

    render() {
        return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>
            

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" label="Display Name" name="displayName" value={this.state.displayName} handleChange={this.handleChange} required/>
                <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                <FormInput type="text" label="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required/>
                

                
                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignUp;