import React from 'react';
import styled from 'styled-components';

const StyledPerson = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    width: 200px;
`;

function Person(props) {
    const { name, height, mass, hair_color, skin_color } = props;
    return (
        <StyledPerson>
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair colour: {hair_color}</p>
            <p>Skin colour: {skin_color}</p>
        </StyledPerson>
    )
}

export default Person;