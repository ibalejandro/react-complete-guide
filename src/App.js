import React, {useState} from 'react';
import './App.css';
import Person from './components/Person/Person'
import {StyledTogglePersonsButton} from './AppStyled'
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary'
import PersonList from './components/PersonList/PersonList'
import Cockpit from './components/Cockpit/Cockpit'

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
        const personIndex = personsState.persons.findIndex(p => {
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
                <PersonList
                    persons={personsState.persons}
                    nameChangedHandler={nameChangedHandler}
                    deletePersonHandler={deletePersonHandler}/>
            </div>
        );
    }

    return (
        <div className="App">
            <Cockpit
                showPersons={showPersonsState.showPersons}
                togglePersonsHandler={togglePersonsHandler}/>
            {persons}
        </div>
    );
}

export default app;