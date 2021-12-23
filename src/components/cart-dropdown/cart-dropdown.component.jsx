import React from "react";
import './cart-dropdown.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component'

import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useSelector , useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems );
  const history = useHistory();
  return(
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
)}



export default CartDropdown ;