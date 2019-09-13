import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    text-align: center;
    color: black;
`;

function DynamicTitle(props) {
    const {subject} = props;
    return (
        <div>
            <StyledHeading>Here is a List of Star Wars {subject}</StyledHeading>
        </div>
    )
}

export default DynamicTitle;