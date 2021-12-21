import React from "react";
import './checkout.styles.scss'
import {addItem, cleartItemFromCheckout , removeItem} from '../../redux/cart/cart.action';
import { connect } from "react-redux";
const CheckoutItem = ({cartItems ,cleartItemFromCheckout , addItem ,removeItem}) => {
    const {imageUrl , price , quantity , name } = cartItems
   return (
   <div className="checkout-item">
       <div className="image-container">
           <img src={imageUrl} alt="" />
       </div>
       <span className="name">{name}</span>
       <div className="quantity">
           <span onClick={() => removeItem(cartItems)}>&#10094;</span>
           <span>{quantity}</span>
           <span onClick={() => addItem(cartItems)}>&#10095;</span>
        </div>
       <span className="price">{price}$</span>
       <span onClick={() => cleartItemFromCheckout(cartItems)} className="remove-button">&#10006;</span>
   </div>
)}

const mapDispatchToProps = (dispatch) => ({
    cleartItemFromCheckout : (item) => dispatch(cleartItemFromCheckout(item)) ,
    addItem : (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item))
})

export default connect(null , mapDispatchToProps)(CheckoutItem)