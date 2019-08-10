import React from 'react';
import  './app.css';

import {Switch, Route, Redirect} from 'react-router-dom'; 
import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Auth from './pages/SignIn_SignUp/SignIn_SignUp';
import Checkout from './pages/Checkout/Checkout';

import * as actionCreators from './actions/actionCreators';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: user});
      if (userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }else{
        this.props.setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/signin" exact render={() => this.props.currentUser ? <Redirect to="/" /> : <Auth {...this.props}/> }/>
        
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(actionCreators.setCurrentUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
