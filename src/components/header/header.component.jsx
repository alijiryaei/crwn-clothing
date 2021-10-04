import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'
import {ReactComponent as Logo} from './../../assets/crown.svg'


export const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link className="option">contact</Link>
        </div>
    </div>
)