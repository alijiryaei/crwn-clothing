import React from 'react';

import './App.css';
import { Route, Switch , Redirect } from 'react-router-dom';
import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import  Header  from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { createUserProfileDocument } from './assets/firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.action';

import { auth } from './assets/firebase/firebase.utils';
class App extends React.Component {

  closeOnAuth = null;
  componentDidMount() {
    this.closeOnAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, doc => {
          this.props.setCurrentUser({
              id: doc.id,
              ...doc.data(),
          });
        });
      } else {
      this.props.setCurrentUser(user)
      }
    });
  }

  componentWillUnmount() {
    this.closeOnAuth();
  }

  render() {
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser : (user) => dispatch(setCurrentUser(user)) 
})

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})
export default connect(mapStateToProps , mapDispatchToProps )(App);
