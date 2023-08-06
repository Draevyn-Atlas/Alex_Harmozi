import React from 'react'
import styled from "styled-components";

const LeftPart = () => {
  return (
    <>
      <box>
        <div>
          <h1>Alex-Powered Solutions,</h1>
          <h2>Potential Unleashed</h2>

          <p>
            Discover your $100M offer with our AI-powered tools. Inspired by
            Alex Hormozi's 100M Offers, we help startups and businesses alike
            revolutionize their content and branding strategies.
          </p>
        </div>
      </box>
    </>
  );
}

const box = styled.div`
  width: 100%;
  height: auto;
  padding: 45px 45px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  img {
    margin-left: 40px;
    width: 20%;
  }

  h3 {
    margin-right: 30px;
    font-weight: 600;
    color: #0176cc;
    font-size: 18px;
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
export default LeftPart