import React from 'react'
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

import './cardDropdown.styles.scss';
import * as actionCreators from '../../actions/actionCreators';



const cardDropdown = (props) => {
    // console.log(props.cartItems);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.cartItems.length ? 
                    props.cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem} />
                })
            :
                <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {props.history.push('/checkout'); props.toggleCart()}}>Go To Checkout</CustomButton>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems:  state.cart.cartItems,
    }
}

const mapDispatchToProps = (dispatch ) => {
    return {
        toggleCart: () => dispatch(actionCreators.toggleCartHidden())
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(cardDropdown)
