import React from "react";
import './collection-preview.styles.scss'
import { CollectionItem } from "../collection-item/collection-item.component";

export const CollectionPreview = ({title , items}) => (
   <div className="collection-preview">
       <p className="title">{title}</p>
       <div className="preview">{
           items.filter( (item , idx) => idx < 4 )
           .map( ({id , ...otherItems}) => <CollectionItem key={id} {...otherItems} />)
       }</div>
   </div>
)