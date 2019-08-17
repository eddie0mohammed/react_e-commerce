import React from 'react'

import './SignIn_SignUp.styles.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

const SignIn_SignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            
        </div>
    )
}

export default SignIn_SignUp
