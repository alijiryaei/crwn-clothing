import React from 'react';
import { useHistory , useLocation } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, id, linkurl, size }) => {
  const history = useHistory();
  const location = useLocation();
  return(
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${location.pathname}${linkurl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">shop now</div>
    </div>
  </div>
)};

export default  MenuItem;
