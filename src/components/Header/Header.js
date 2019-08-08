import React from 'react'
import {Link } from 'react-router-dom';

import './Header.styles.scss';
import Logo from './crown.svg';

import {auth} from '../../firebase/firebase.utils';

const Header = (props) => {
    
    const {user} = props;

    return (
        <div className="header">
            <div>
            <Link className="logo-container" to='/'>
                <img src={Logo} alt="logo"/>
            </Link>
            <Link className="option" to='/'>HOME</Link>
            </div>

            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/contact'>Contact</Link>
                {
                    user ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to='/signin'>Sign In</Link>
                    
                }
            </div>
            
        </div>
    )
}

export default Header
