import React from 'react';
import Person from "../Person/Person";

const personList = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    nameChangedHandler={(event) => {
                        props.nameChangedHandler(event, person.id)
                    }}
                    deletePersonHandler={() => {
                        props.deletePersonHandler(index)
                    }}/>
            );
        })
    );
};

export default personList;