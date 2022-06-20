import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            // This is how to deep copy an array of objects.
            let itemsCopy = JSON.parse(JSON.stringify(state.items));
            const existingItem = itemsCopy.find(item => item.id === newItem.id); 
            if (!existingItem) {
                itemsCopy.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            }
            return {...state, items: itemsCopy, totalQuantity: state.totalQuantity + 1, changed: true};
        },
        removeItemFromCart(state, action) {
            const id = action.payload.id;
            let itemsCopy = JSON.parse(JSON.stringify(state.items));
            const existingItem = itemsCopy.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                itemsCopy = itemsCopy.filter(item => item.id !== id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
            return {...state, items: itemsCopy, totalQuantity: state.totalQuantity - 1, changed: true};
        },
        replaceCart(state, action) {
            return {
                ...state, 
                items: action.payload.items || [], 
                totalQuantity: action.payload.totalQuantity
            };
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;