import React from 'react'

import './customButton.styles.scss';

const CustomButton = (props) => {

    const {children, isGoogleSignin, ...otherProps} = props;
    return (
        <button className={`custom-button ${isGoogleSignin ? 'google-sign-in' : ''}`} {...otherProps}>
            {props.children}
            
        </button>
    )
}

export default CustomButton
