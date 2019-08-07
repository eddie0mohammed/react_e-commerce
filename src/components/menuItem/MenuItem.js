import React from 'react'
import {withRouter} from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = (props) => {

    return (
        <div className={`menu-item ${props.size}` } onClick={() => props.history.push(`${props.match.url}${props.link}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${props.img})`}} />
            <div className="content">
                <h1 className="title" style={{textTransform: 'uppercase'}}>{props.title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
