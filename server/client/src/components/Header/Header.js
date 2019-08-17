import React from 'react'
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import './Header.styles.scss';
import Logo from './crown.svg';
import CartIcon from '../Header/cart-icon/cartIcon';
import CartDropdown from '../cartDropdown/cardDropdown';

import {auth} from '../../firebase/firebase.utils';

const Header = (props) => {
    
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
                    props.currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to='/signin'>Sign In</Link>
                    
                }
                {props.currentUser && <CartIcon /> }
            </div>
            {!props.cartVisibility && 
                <CartDropdown />
            }
            
        </div>
    )
}

const mapStateToProps = (state ) => {
    return {
        currentUser: state.user.currentUser,
        cartVisibility: state.cart.hidden,
    }
}

export default compose(

    connect(mapStateToProps),
)(Header)
