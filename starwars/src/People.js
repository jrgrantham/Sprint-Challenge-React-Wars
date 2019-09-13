import React from 'react';
import Person from './Person';
import styled from 'styled-components';

const StyledPeople = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

function People(props) {
    const { people } = props;
    return (
        <StyledPeople>
            {
                people.map(
                    (person) => (
                        <Person
                            key={person.name}
                            name={person.name}
                            mass={person.mass}
                            height={person.height}
                            hair_color={person.hair_color}
                            skin_color={person.skin_color}
                        />
                    )
                )
            }
        </StyledPeople>
    )
}

export default People;