import userReducer from './userReducer';
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './DirectoryReducer';
import shopReducer from './shopReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({

    directory: directoryReducer,
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer

}
);

export default persistReducer(persistConfig, rootReducer);