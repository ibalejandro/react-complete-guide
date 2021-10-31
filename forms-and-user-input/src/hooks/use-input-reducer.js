import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (prevState, action) => {
    if (action.type === "INPUT_CHANGE") {
        return {...prevState, value: action.value};
    }
    else if (action.type === "INPUT_BLUR") {
        return {...prevState, isTouched: true};
    }
    else if (action.type === "INPUT_RESET") {
        return {value: '', isTouched: false};
    }

    return initialInputState;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: "INPUT_CHANGE", value: event.target.value});
    };
    
    const inputBlurHandler = (event) => {
        dispatch({type: "INPUT_BLUR"});
    };

    const reset = () => {
        dispatch({type: "INPUT_RESET"});
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;