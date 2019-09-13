import React from 'react';
import Person from './Person';

function People(props) {
    const { people } = props;
    return (
        <div>
            {
                people.map(
                    (person) => (
                        <Person
                            key={person}
                            name={person}
                        />
                    )
                )
            }
        </div>
    )
}

export default People;