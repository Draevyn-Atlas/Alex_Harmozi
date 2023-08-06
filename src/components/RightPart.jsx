import React from "react";
import { styled } from "styled-components";
import OfferForm from "./OfferForm";
import Offer2 from "./OfferForm2";

const RightPart = () => {
  return (
    <Right>
      <div className="right_section_part1"></div>
      <div className="right_section_part2"></div>
      <Offer2 />
    </Right>
  );
};
const Right = styled.div`
  background: #ddf0ff;
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem;
  div {
    /* border: 1px solid black; */
    width: 90%;
    align-self: center;
  }
`;

export default RightPart;
