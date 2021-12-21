import React from "react";

import {ReactComponent as Logo} from './../../assets/crown.svg'
import {auth} from '../../assets/firebase/firebase.utils'
import { connect } from "react-redux";
import ShopIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../redux/user/user.action";
// styles
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink  } from "./header.styles";


const Header = ({currentUser , toggleCartHidden , signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionLink to="/shop" className="option">shop</OptionLink>
            <OptionLink className="option">contact</OptionLink>
            { currentUser ?
            <OptionLink as='div' onClick={signOutStart} className="option">sign out</OptionLink>
            :
            <OptionLink to="/signin" className="option">sign in</OptionLink>
            }
            <ShopIcon></ShopIcon>
        </OptionsContainer>
        { toggleCartHidden ? null : 
        <CartDropdown />
        }
    </HeaderContainer>
)
const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser,
    toggleCartHidden : state.cart.isHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);