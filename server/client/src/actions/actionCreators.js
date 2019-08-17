
import * as actionTypes from './actionTypes';
// import { firestore } from 'firebase';
import { firestore ,convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

export const setCurrentUser = (user) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const toggleCartHidden = () => {
    return {
        type: actionTypes.TOGGLE_CART_HIDDEN,
    }
}


export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: actionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const updateCollections = (collectionsMap) => {
    // console.log(collectionsMap);
    return {
        type: actionTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(err => dispatch(fetchCollectionsFailure(err.message))
            )
    }
}

export const fetchCollectionsSuccess = (collectionMap) => {
    return {
        type: actionTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionMap
    }
}


export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: actionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTION_START,
    }
}