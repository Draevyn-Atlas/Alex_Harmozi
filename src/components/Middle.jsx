import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { styled } from "styled-components";

const Middle = () => {
  return (
    <MiddlePart className="box">
      <LeftPart />
      <RightPart />
    </MiddlePart>
  );
};

const MiddlePart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .box:nth-child(1) {
    grid-area: box1;
  }

  .box:nth-child(2) {
    grid-area: box2;
  }

  @media (max-width: 1200px) {
    /* grid-template-columns: 1fr; */
    display: flex;
    flex-direction: column-reverse;
  }
`;

export default Middle;
