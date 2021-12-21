import React from "react";
import './cart-dropdown.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component'
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartDropdown = ({cartItems , history , dispatch}) => (
    <div className="cart-dropdown">
      <div className="cart-items">
      {
        cartItems.map((el) => <CartItem {...el} />)
      }
      </div>
      <CustomBtn onClick={() => { 
        history.push("/checkout")
        dispatch(toggleCartHidden())
      }
      }>check out</CustomBtn>
    </div>
)


const mapStateToProps = (state) => ({
  cartItems : state.cart.cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown)) ;