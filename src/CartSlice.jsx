
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {

      } else {

        state.items.push({ name, image, cost, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeItem: (state, action) => {
      const {name} = action.payload;
      let itemsArray = [...state.items];
      const itemToRemove =  state.items.find(item => item.name === name);

      let index = itemsArray.indexOf(itemToRemove);
      itemsArray.splice(index , 1);
      state.items = itemsArray;

      state.totalQuantity -= itemToRemove.quantity;
    },

    updateQuantity: (state, action) => {
      const { name } = action.payload[0]; // First object of the array which is the plant item
      const itemToUpdate = state.items.find(item => item.name === name);

      state.totalQuantity += (action.payload[1] - itemToUpdate.quantity)

      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload[1];  //2nd object of array - new quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
