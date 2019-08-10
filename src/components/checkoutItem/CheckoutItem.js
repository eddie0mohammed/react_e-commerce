import React from 'react'
import './CheckoutItem.styles.scss';

import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

const CheckoutItem = (props) => {
    const {name, imageUrl, price, quantity} = props.cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div> 
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow"  onClick={() => props.removeItem(props.cartItem)} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => props.addItem(props.cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => props.clearItemFromCart(props.cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(actionCreators.removeItem(item)),
        addItem: (item) => dispatch(actionCreators.addItem(item)),
        clearItemFromCart: (item) => dispatch(actionCreators.clearItemFromCart(item)),
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
