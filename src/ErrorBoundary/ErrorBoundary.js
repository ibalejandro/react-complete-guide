import React, {useState} from 'react';

const errorBoundary = (props) => {
    const [errorState, setErrorState] = useState({
        hasError: false,
        errorMessage: ''
    });

    const componentDidCatch = (error, info) => {
        setErrorState({
            hasError: true,
            errorMessage: error
        });
    };

    let returnContent = props.children;
    if (errorState.hasError) {
        returnContent = (
            <h1>{errorState.errorMessage}</h1>
        );
    }

    return (
        {returnContent}
    );
}

export default errorBoundary;