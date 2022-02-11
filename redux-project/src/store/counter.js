import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name:  "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            return {...state, counter: state.counter + 1}
        },
        decrement(state) {
            return {...state, counter: state.counter - 1}
        },
        increase(state, action) {
            // Action is needed here beacuse it contains a payload.
            return {...state, counter: state.counter + action.payload.amount}
        },
        toggleCounter(state) {
            return {...state, showCounter: !state.showCounter}
        } 
    }
});

export const counterActions = counterSlice.actions; // UIDs for the available reducers.

export default counterSlice;