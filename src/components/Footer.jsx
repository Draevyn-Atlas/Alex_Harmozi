import React from 'react'
import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <Foot>
      <h4>© 2023 ATLAS CO</h4>
      <p>Follow our social media:</p>
      <div>
        <a href="#" target="_blank">
          <BsInstagram />
        </a>
        <a href="#" target="_blank">
          
        </a>
        <a href="#" target="_blank">
          <LuFacebook />
        </a>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px 20px;
  line-height: normal;
  background-color: #000000;
  color: #ffffff;
  h4 {
    font-weight: 500;
    font-size: 16px;
    margin-left: 30px;
  }
  p {
    font-weight: 500;
    margin-left: 65%;
    margin-right: 30px;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    gap: 15px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    line-height: normal;
    background-color: #000000;
    color: #ffffff;
    h4 {
      font-weight: 500;
      font-size: 8.5px;
      margin-left: 5px;
    }
    p {
      font-weight: 500;
      margin-left: 20%;
      font-size: 8.5px;
      margin-right: 5px;
    }
    div {
      display: flex;
      justify-content: space-evenly;
      gap: 15px;
    }
  }
  /* a:hover {
    color: red;
    text-decoration: underline;
  } */
`;


export default Footer