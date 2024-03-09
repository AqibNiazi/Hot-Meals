import { useReducer } from 'react'
import CartContext from './CartContext'
const InitialCartState =  { 
  items:[],
  totalAmount:0
 }
const cartReducer = (state,action) => { 
  if(action.type==="ADD"){
    const updatedItems=state.items.concat(action.item)
    const UpdateTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    return{
      items:updatedItems,
      totalAmount:UpdateTotalAmount
    }
  }
  return InitialCartState
 }
const CartProvider = ({children}) => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, InitialCartState)
const addItemsToCartHandler = (items) => { 
  dispatchCartAction({type:"ADD",item:items})
 }
const removeItemsFromCart = (id) => { 
  dispatchCartAction({type:"REMOVE",id:id})
 }
const cartContext = { 
  items:cartState.items,
  totalAmount:cartState.totalAmount,
  addItem:addItemsToCartHandler,
  removeItem:removeItemsFromCart
}

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider