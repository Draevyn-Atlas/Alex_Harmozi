import React from "react";
import { styled } from "styled-components";
import OfferForm from "./OfferForm";

const RightPart = () => {
  return (
    <Right>
      <div className="right_section_part1"></div>
      <div className="right_section_part2"></div>
      <OfferForm />
    </Right>
  );
};
const Right = styled.div`
  background: #ddf0ff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  div {
    /* border: 1px solid black; */
    width: 85%;
    align-self: center;
  }
`;

export default RightPart;
