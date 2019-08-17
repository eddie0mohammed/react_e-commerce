import React from 'react'

import './customButton.styles.scss';

const CustomButton = (props) => {

    const {children, isGoogleSignin, inverted, ...otherProps} = props;
    return (
        <button className={`custom-button ${isGoogleSignin ? 'google-sign-in' : ''} ${inverted? 'inverted' : ''}`} {...otherProps}>
            {props.children}
            
        </button>
    )
}

export default CustomButton
