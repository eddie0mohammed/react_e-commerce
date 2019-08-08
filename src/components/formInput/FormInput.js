import React from 'react'

import "./FormInput.styles.scss";

const FormInput = (props) => {
    
    const {handleChange, label, ...otherProps } = props;
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>

            {label ?
                <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </label>
                : null
            }
            
        </div>
    )
}

export default FormInput
