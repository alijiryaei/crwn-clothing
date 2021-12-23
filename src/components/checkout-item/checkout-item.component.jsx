import React from "react";
import './checkout.styles.scss'
import {addItem, cleartItemFromCheckout , removeItem} from '../../redux/cart/cart.action';

import { useDispatch } from "react-redux";


const CheckoutItem = ({cartItems}) => {
    const {imageUrl , price , quantity , name } = cartItems
    const dispatch = useDispatch();
   return (
   <div className="checkout-item">
       <div className="image-container">
           <img src={imageUrl} alt="" />
       </div>
       <span className="name">{name}</span>
       <div className="quantity">
           <span onClick={() => dispatch(removeItem(cartItems))}>&#10094;</span>
           <span>{quantity}</span>
           <span onClick={() => dispatch(addItem(cartItems))}>&#10095;</span>
        </div>
       <span className="price">{price}$</span>
       <span onClick={() => dispatch(cleartItemFromCheckout(cartItems))} className="remove-button">&#10006;</span>
   </div>
)}



export default CheckoutItem;