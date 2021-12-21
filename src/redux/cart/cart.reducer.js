import { clearItem , addItemToCart , removeItem } from "./cart.utils"
import cartActionTypes from "./cart.types"
const INITIAL_STATE = {
    cartItems : [],
    isHidden : true,
}


const cartReducer = (state = INITIAL_STATE , action) => {
   switch(action.type) {
       case cartActionTypes.ADD_ITEM : 
        return {
            ...state,
            cartItems : addItemToCart(state.cartItems , action.payload)
        }
        case cartActionTypes.TOGGLE_CART_HIDDEN : 
        return {
            ...state ,
            isHidden : !state.isHidden
        }
        case cartActionTypes.CLEAR_ITEM_FROM_CHECKOUT : 
        return {
            ...state ,
            cartItems : clearItem(state.cartItems , action.payload)
        }
        case cartActionTypes.REMOVE_ITEM : 
        return {
            ...state ,
            cartItems : removeItem(state.cartItems , action.payload)
        }
        case cartActionTypes.CLEAR_CART : 
        return {
            ...state ,
            cartItems : []
        }
       default :
        return state
   }
}

export default cartReducer;