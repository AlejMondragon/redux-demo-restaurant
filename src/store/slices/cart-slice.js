import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    fetchLocalStorageCart(state, action) {
      state.items.push(action.payload.localStorageCart)
      state.totalQuantity = action.payload.localStorageCartQuantity
      state.totalAmount = action.payload.localStorageCartTotal
    },
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      state.totalQuantity = state.totalQuantity + newItem.quantity
      state.totalAmount = state.totalAmount + (newItem.price * newItem.quantity)

      if(!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: newItem.quantity,
          price: newItem.price
        })
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity
      }
    },
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)

      state.totalQuantity--
      state.totalAmount = state.totalAmount - existingItem.price

      if(existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        state.items = state.items.filter(item => item.id !== id)
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer;