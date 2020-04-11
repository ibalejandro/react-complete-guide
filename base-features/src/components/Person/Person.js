import React from 'react';
import './Person.css';
import {StyledDiv} from './PersonStyled'
import PropTypes from 'prop-types'


const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.deletePersonHandler}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </StyledDiv>
    );
};

person.propTypes = {
    deletePersonHandler: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChangedHandler: PropTypes.func
};

export default person;