import React from 'react'
import './cartIcon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/actionCreators';

const cartIcon = (props) => {
    return (
        
        <div className="cart-icon" onClick={props.toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       itemCount: state.cart.cartItems.reduce((acc, elem) => {
           return acc + elem.quantity
       }, 0)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(actionCreators.toggleCartHidden()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon)
