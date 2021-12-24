import React, { useEffect} from 'react';

import './App.css';
import { Route, Switch , Redirect } from 'react-router-dom';
import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import  Header  from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {  useDispatch, useSelector } from 'react-redux';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

const App = () => {
  
  const dispatch = useDispatch()
  const currentUser = useSelector( state => state.user.currentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])



  
  return (
    <div>
        <Header  />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route path="/checkout" component={CheckoutPage} ></Route>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        </Switch>
    </div>
  );
}


export default App;
