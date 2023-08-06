import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>
        <span style={{ color: "#00970F", fontWeight: "800" }}>$</span>
        <span style={{ color: "#0176cc", fontWeight: "800" }}>
          1
          <sup
            style={{ color: "#0176cc", fontSize: "24px", fontWeight: "800" }}
          >
            0
          </sup>
          0M{" "}
        </span>
        <span style={{ color: "#0176cc", fontWeight: "800" }}>Offers</span> x
        ATLAS CO
      </h2>
      <h3>Sign in</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  h2 {
    padding-top: 20px;
    margin-left: 40px;
    font-weight: 700;
    font-size: 25px;
  }

  h3 {
    padding-top: 20px;
    margin-right: 30px;
    font-weight: 600;
    color: #0176cc;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    line-height: normal;
    h2 {
      padding-top: 20px;
      margin-left: 40px;
      font-weight: 700;
      font-size: 16px;
    }

    h3 {
      padding-top: 20px;
      margin-right: 30px;
      font-weight: 600;
      color: #0176cc;
      font-size: 14px;
    }
  }
  /* a:hover {
    color: red;
    text-decoration: underline;
  } */
`;


export default Navbar