import { createSelector } from "reselect";


const selectCart = state => state.cart


export const selectCartItems = createSelector(
    [selectCart] ,(cart) => cart.cartItems )



export const selectItemsCount = createSelector(
    [selectCartItems] , (items) => (
        items.reduce( (acc , item) => {
            return acc + item.quantity   
          } , 0)
    )
)

export const selectTotalPrice = createSelector(
    [selectCartItems] ,
    (items) =>   (
        items.reduce((acc , item) => acc + item.quantity * item.price , 0)
    )
)