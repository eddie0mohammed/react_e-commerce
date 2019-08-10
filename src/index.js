import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {compose} from 'redux';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

ReactDOM.render(

<Provider store={store} >
<BrowserRouter>
<PersistGate persistor={persistor}>
    <App />
</PersistGate>
</BrowserRouter>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// 4242424242424242
// 01/20
// 123