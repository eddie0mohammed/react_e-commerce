import React from 'react';
import  './app.css';

import {Switch, Route} from 'react-router-dom'; 

import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
