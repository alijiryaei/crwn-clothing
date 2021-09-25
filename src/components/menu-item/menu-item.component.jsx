import React from "react";
import './menu-item.styles.scss'


export const MenuItem = ({title , imageUrl , id , linkurl , size}) => (
    <div className={`menu-item ${size}`}>
      <div className='background-image' 
      style={{
          backgroundImage : `url(${imageUrl})`
      }} ></div>
      <div className='content'>
         <div className='title'>{title}</div>
         <div className='subtitle'>{linkurl}</div>
      </div>
    </div>
)