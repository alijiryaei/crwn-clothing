const INITIAL_STATE = {
    cartItems : []
}


const cartReducer = (state = INITIAL_STATE , action) => {
   switch(action.type) {
       case 'ADD_TO_CART' : 
        return {
            ...state,
            cartItems : [...state.cartItems , action.payload]
        }
       default :
        return state
   }
}

export default cartReducer