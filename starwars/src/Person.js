import React from 'react';

function Person(props) {
    const { person, height, mass, hair_color, skin_color } = props;
    return (
        <div>
            <h2>Name: {person}</h2>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair colour: {hair_color}</p>
            <p>Skin colour: {skin_color}</p>
        </div>
    )
}

export default Person;