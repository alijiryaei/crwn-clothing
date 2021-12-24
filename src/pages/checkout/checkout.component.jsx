import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectTotalPrice } from '../../redux/cart/cart.selector';
import { useSelector } from 'react-redux';



const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector( state => selectTotalPrice(state))
  
  return(
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
      <CheckoutItem key={el.id} cartItems={el}></CheckoutItem>
    ))}
    <div className="total">Total : {totalPrice}$</div>
  </div>
)};



export default CheckoutPage;
