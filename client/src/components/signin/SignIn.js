import React, { Component } from 'react';

import './SignIn.styles.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import {signInWithGoogle} from '../../firebase/firebase.utils'; 
import {auth} from '../../firebase/firebase.utils';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            })
        }catch(err){
            console.log(err);
        }
        
        
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                

                <form  onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    {/* <label>Email</label> */}

                    <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    {/* <label>password</label> */}

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;