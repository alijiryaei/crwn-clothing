export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingItem = cartItems.find( (item) => item.id === cartItemToAdd.id )
    
    if(existingItem){
        return cartItems.map( el => 
        el.id === cartItemToAdd.id ?
        {...el , quantity : el.quantity + 1} :
        el
        )      
    }

    return [...cartItems , {...cartItemToAdd , quantity:1}]
}

export const clearItem = (cartItems , cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id)
}



export const removeItem = (cartItems , cartItemToRemove) => {
    const existingItem = cartItems.find((item) => item.id === cartItemToRemove.id)

    if(existingItem.quantity === 1 ) {
       return clearItem(cartItems , cartItemToRemove)
    }

    return cartItems.map((item) => item.id === cartItemToRemove.id ? {...item , quantity : item.quantity - 1 } : item)
};
