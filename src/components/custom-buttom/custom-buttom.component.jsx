import React from 'react';
import './custom-buttom.styles.scss';

const CustomBtn = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomBtn;
