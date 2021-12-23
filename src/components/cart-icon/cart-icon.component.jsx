import React from "react";

import {ReactComponent as Shop } from '../../assets/bag.svg'
import './cart-icon.styles.scss'

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectItemsCount } from "../../redux/cart/cart.selector";
import { useDispatch , useSelector } from "react-redux";

const ShopIcon = () => {
  const dispatch = useDispatch();
  const checkoutCount = useSelector(state => selectItemsCount(state));
  return(
  <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <Shop className="shopping-icon"/>
      <span className="item-count">{checkoutCount}</span>
  </div>
)}



export default ShopIcon;