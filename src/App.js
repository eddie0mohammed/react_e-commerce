import React from 'react';
import  './app.css';

import {Switch, Route} from 'react-router-dom'; 

import Header from './components/Header/Header';
import Homepage from './pages/HomePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Auth from './pages/SignIn_SignUp/SignIn_SignUp';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  state = {
    currentUser: null,

  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: user});
      if (userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }else{
        this.setState({
          currentUser: userAuth
        });
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

  return (
    <div className="App">
      <Header user={this.state.currentUser}/>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/signin" exact component={Auth} />
        
      </Switch>
    </div>
  );
  }
}

export default App;
