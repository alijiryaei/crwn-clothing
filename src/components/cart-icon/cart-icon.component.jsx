import React from "react";

import {ReactComponent as Shop } from '../../assets/bag.svg'
import './cart-icon.styles.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectItemsCount } from "../../redux/cart/cart.selector";

const ShopIcon = ({toggleCartHidden , checkoutCount}) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <Shop className="shopping-icon"/>
      <span className="item-count">{checkoutCount}</span>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) => ({
  checkoutCount : selectItemsCount(state)
})
export default connect(mapStateToProps , mapDispatchToProps )( ShopIcon)