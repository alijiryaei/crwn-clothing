import React from 'react';

import './App.css';
import { Route, Switch , Redirect } from 'react-router-dom';
import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import  Header  from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';
class App extends React.Component {

  closeOnAuth = null;
  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession()
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
          <Route  path="/shop" component={ShopPage}></Route>
          <Route path="/checkout" component={CheckoutPage} ></Route>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser,
    // collectionArray : selectCollectionsForPreview(state)
})
const mapDispatchToProps = dispatch => ({
    checkUserSession : () => dispatch(checkUserSession())
})
export default connect(mapStateToProps , mapDispatchToProps)(App);
