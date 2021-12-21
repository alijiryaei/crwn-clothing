import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectTotalPrice } from '../../redux/cart/cart.selector';
const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map(el => (
      <CheckoutItem cartItems={el}></CheckoutItem>
    ))}
    <div className="total">Total : {totalPrice}$</div>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  totalPrice: selectTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutPage);
