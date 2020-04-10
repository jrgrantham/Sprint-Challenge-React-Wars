import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  color: red;
`;

function AwaitingData() {
  return (
    <div>
      <StyledHeading>Awaiting Data...</StyledHeading>
    </div>
  );
}

export default AwaitingData;
