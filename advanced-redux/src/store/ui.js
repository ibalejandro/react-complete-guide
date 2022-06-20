import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsVisible: false,
    notification: null
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggle(state) {
            return {...state, cartIsVisible: !state.cartIsVisible};
        },
        showNotification(state, action) {
            return {
                ...state, 
                notification: {
                    status: action.payload.status, 
                    title: action.payload.title,
                    message: action.payload.message
                } 
            };
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;