import React from "react";
import './cart-item.styles.scss'

const CartItem = ({price , name , imageUrl , id , quantity}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="" />
        <div className="item-details">
            <div className="name">
             {name}
            </div>
            <span>{`${quantity}*${price}`}</span>
        </div>
    </div>
)

export default CartItem;