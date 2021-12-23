import React from "react";
import './collection-item.styles.scss'
import CustomBtn from "../custom-buttom/custom-buttom.component";
import { addItem } from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux";


const CollectionItem = ({item }) => {
    const dispatch = useDispatch()
    const {name , imageUrl , price} = item
    return (
    <div className="collection-item">
        <div style={{
            backgroundImage : `Url(${imageUrl})`
        }} className="image">
        </div>
        <CustomBtn onClick={ () => dispatch(addItem(item))}  inverted  >ADD TO CART</CustomBtn>
        <div  className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    </div>
    )
}


export default CollectionItem