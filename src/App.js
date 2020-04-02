import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Max", age: 28},
            {name: "Manu", age: 29},
            {name: "Stephanie", age: 26},
        ]
    });

    const [otherState, setOtherState] = useState({
        otherState: "some other value"
    });

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        // console.log("Was Clicked!");
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: "Manu", age: 29},
                {name: "Stephanie", age: 27},
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: event.target.value, age: 28},
                {name: "Manu", age: 29},
                {name: "Stephanie", age: 27},
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button className="SwitchNameButton" onClick={() => {switchNameHandler("Alejo")}}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                switchNameHandler={() => {switchNameHandler("Alejo")}}
                nameChangedHandler={(event) => {nameChangedHandler(event)}}/>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
}

export default app;