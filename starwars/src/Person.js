import React from 'react';

function Person(props) {
    const { person } = props;
    return (
        <div>
            <h2>{person}</h2>
        </div>
    )
}

export default Person;