import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
