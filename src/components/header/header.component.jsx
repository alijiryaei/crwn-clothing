import React from "react";

import {ReactComponent as Logo} from './../../assets/crown.svg'
import ShopIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../redux/user/user.action";
// styles
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink  } from "./header.styles";
import { useSelector , useDispatch} from "react-redux";

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const toggleCartHidden = useSelector( state => state.cart.isHidden)
    const dispatch = useDispatch();
    return(
    <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionLink to="/shop" className="option">shop</OptionLink>
            <OptionLink className="option">contact</OptionLink>
            { currentUser ?
            <OptionLink as='div' onClick={() => dispatch(signOutStart())} className="option">sign out</OptionLink>
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
}



export default Header;