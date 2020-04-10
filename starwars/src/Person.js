import React from "react";
import styled from "styled-components";

const StyledPerson = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 5px;
  width: 250px;
  color: white;
  background-color: rgba(50, 50, 50, 0.4);
`;

const StyledName = styled.h2`
  text-align: center;
`;

function Person(props) {
  const { name, height, mass, hair_color, skin_color } = props;
  return (
    <StyledPerson>
      <StyledName>{name}</StyledName>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair colour: {hair_color}</p>
      <p>Skin colour: {skin_color}</p>
    </StyledPerson>
  );
}

export default Person;
