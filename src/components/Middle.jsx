import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { styled } from "styled-components";

const Middle = () => {
  return (
    <MiddlePart>
      <LeftPart />
      <RightPart />
    </MiddlePart>
  );
};

const MiddlePart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Middle;
