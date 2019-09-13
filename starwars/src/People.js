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
                            key={person.name}
                            name={person.name}
                            mass={person.mass}
                            hair_color={person.hair_color}
                            skin_color={person.skin_color}
                        />
                    )
                )
            }
        </div>
    )
}

export default People;