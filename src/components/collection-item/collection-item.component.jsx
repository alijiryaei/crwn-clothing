import React from "react";
import './collection-item.styles.scss'
import CustomBtn from "../custom-buttom/custom-buttom.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({item , addItem}) => {
    const {name , imageUrl , price} = item
    return (
    <div className="collection-item">
        <div style={{
            backgroundImage : `Url(${imageUrl})`
        }} className="image">
        </div>
        <CustomBtn onClick={ () => addItem(item)}  inverted  >ADD TO CART</CustomBtn>
        <div  className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item))
})
export default connect(null , mapDispatchToProps)(CollectionItem)