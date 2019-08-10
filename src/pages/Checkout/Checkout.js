import React from 'react'
import './Checkout.styles.scss';

import {connect } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
 
const Checkout = (props) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                props.cartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                })
            }

            <div className="total">
                <span>TOTAL: ${props.total}</span>
            </div>
            <StripeButton price={props.total}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,

        total: state.cart.cartItems.reduce((acc, elem) => {
            return acc + (elem.price * elem.quantity)
        }, 0)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
