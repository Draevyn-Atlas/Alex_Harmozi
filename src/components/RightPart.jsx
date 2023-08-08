import React from "react";
import { styled } from "styled-components";
import Offer2 from "./OfferForm2";

const RightPart = () => {
  return (
    <Right>
      <Offer2 />
    </Right>
  );
};
const Right = styled.div`
  background: #ddf0ff;
  display: flex;
  flex-direction: column;
  padding: 8rem 6rem;
`;

export default RightPart;
