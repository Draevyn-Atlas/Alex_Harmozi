import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
       <img src="https://i.ibb.co/zN2mdfd/Group-2.png" alt="logo." />   
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
  img {
    padding-top: 20px;
    margin-left: 40px;
    width: 20%;
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
    img {
      padding-top: 20px;
      margin-left: 40px;
      width: 40%;
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