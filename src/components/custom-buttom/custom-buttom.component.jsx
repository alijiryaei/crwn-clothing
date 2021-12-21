import React from 'react';
import './custom-buttom.styles.scss';

const CustomBtn = ({ children, inverted , ...otherProps }) => (
  <button className={`custom-button ${inverted ? 'inverted' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default CustomBtn;
