import React from "react";
import './collection-item.styles.scss'

export const CollectionItem = ({id , name , imageUrl , price}) => (
    <div className="collection-item">
        <div style={{
            backgroundImage : `Url(${imageUrl})`
        }} className="image">
        </div>
        <div className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    </div>
)