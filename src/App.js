import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: "p1", name: "Max", age: 28},
            {id: "p2", name: "Manu", age: 29},
            {id: "p3", name: "Stephanie", age: 26},
        ]
    });

    const [otherState, setOtherState] = useState({
        otherState: "some other value"
    });

    const [showPersonsState, setShowPersonsState] = useState({
        showPersons: false
    });

    console.log(personsState, otherState);

    const nameChangedHandler = (event, personId) => {
        let personIndex = personsState.persons.findIndex(p => {
            return p.id === personId;
        });
        let persons = [...personsState.persons];
        persons[personIndex].name = event.target.value;
        setPersonsState({
            persons: persons
        });
    };

    const togglePersonsHandler = () => {
        let showPersons = showPersonsState.showPersons;
        showPersons = !showPersons;
        setShowPersonsState({
            showPersons: showPersons
        });
    };

    const deletePersonHandler = (personIndex) => {
        let persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({
            persons: persons
        });
    };

    let persons = null;
    if (showPersonsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return (
                        <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            nameChangedHandler={(event) => {
                                nameChangedHandler(event, person.id)
                            }}
                            deletePersonHandler={() => {
                                deletePersonHandler(index)
                            }}/>
                    );
                })
                }
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button className="SwitchNameButton"
                    onClick={() => {
                        togglePersonsHandler()
                    }}>Toggle Persons
            </button>
            {persons}
        </div>
    );
}

export default app;