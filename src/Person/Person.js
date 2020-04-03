import React from 'react';
import './Person.css';
import {StyledDiv} from './PersonStyled'


const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.deletePersonHandler}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </StyledDiv>
    );
}

export default person;