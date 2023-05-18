import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},

  addCartItem: () => {},
  deleteCartItem: () => {},

  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
