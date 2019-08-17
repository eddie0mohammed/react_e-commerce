import * as actionTypes from '../actions/actionTypes';
import {addItemToCart} from '../utils/cart.utils';

import {removeItemFromCart} from '../utils/cart.utils';

const initialState = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            }

        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        
        case actionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state
    }
}

export default cartReducer;