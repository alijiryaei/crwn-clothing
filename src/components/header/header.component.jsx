import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'
import {ReactComponent as Logo} from './../../assets/crown.svg'
import {auth} from '../../assets/firebase/firebase.utils'
import { connect } from "react-redux";
import ShopIcon from "../cart-icon/cart-icon.component";
const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link className="option">contact</Link>
            { currentUser ?
            <div onClick={() => auth.signOut()} className="option">sign out</div>
            :
            <Link to="/signin" className="option">sign in</Link>
            }
            <ShopIcon></ShopIcon>
        </div>
    </div>
)
const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})
export default connect(mapStateToProps)(Header);