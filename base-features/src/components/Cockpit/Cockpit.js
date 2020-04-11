import React, {useEffect, useRef, useContext} from 'react';
import {StyledTogglePersonsButton} from "../../AppStyled";
import authContext from "../../context/AuthContext";

const cockpit = (props) => {
    const togglePersonsButtonRef = useRef(null);
    const authCtx = useContext(authContext);

    console.log(authCtx.authenticated);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect.");
        // HTTP request.
        /*
        setTimeout(() => {
            alert("Save data to cloud!");
        }, 1000);
         */
        togglePersonsButtonRef.current.click();
        return (() => {
           // Clean up function.
            console.log("[Cockpit.js] clean up work in useEffect.");
        });
    }, []);

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <StyledTogglePersonsButton
                ref={togglePersonsButtonRef}
                showStyle={props.showPersons}
                onClick={props.togglePersonsHandler}>Toggle Persons
            </StyledTogglePersonsButton>
            <button onClick={authCtx.login}>Log in</button>
        </div>
    );
};

export default cockpit;