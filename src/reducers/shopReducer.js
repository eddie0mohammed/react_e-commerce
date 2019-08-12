// import SHOP_DATA from '../pages/shopPage/shop.data';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    // collections: SHOP_DATA
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.FETCH_COLLECTION_START:
            return  {
                ...state,
                isFetching: true
            }
        
        case actionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case actionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        // case actionTypes.UPDATE_COLLECTIONS:
        //     // console.log(action.payload);
        //     return {
        //         ...state,
        //         collections: action.payload
        //     }

        default:
            return state;
    }
}

export default shopReducer;