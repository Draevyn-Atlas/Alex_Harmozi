import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <img src="https://i.ibb.co/zN2mdfd/Group-2.png" alt="logo." />
      <h3>Sign in</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  img {
    margin-left: 40px;
    width: 30%;
    cursor: pointer;
  }

  h3 {
    margin-right: 30px;
    font-weight: 600;
    color: #0176cc;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    padding: 20px 20px;
    justify-content: space-between;
    line-height: normal;
    img {
      margin-left: 40px;
      width: 40%;
    }

    h3 {
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

export default Navbar;
