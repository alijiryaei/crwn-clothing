import React from "react";

import {ReactComponent as Shop } from '../../assets/bag.svg'
import './cart-icon.styles.scss'


const ShopIcon = () => (
  <div className="cart-icon">
      <Shop className="shopping-icon"/>
      <span className="item-count">4</span>
  </div>
)

export default ShopIcon