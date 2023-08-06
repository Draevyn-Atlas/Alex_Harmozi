import React from 'react'
import styled from "styled-components";

const LeftPart = () => {
  return (
    
      <Box>
        <div>
          <h1>Alex-Powered Solutions,</h1>
          <h2>Potential Unleashed</h2>

          <p>
            Discover your $100M offer with our AI-powered tools. Inspired by
            Alex Hormozi's 100M Offers, we help startups and businesses alike
            revolutionize their content and branding strategies.
          </p>
        </div>
      </Box>
    
  );
}

const Box = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 40px;
  padding: 50px 50px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
 div > h1{
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  color: #242424;
 }

 div > h2{
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  color: #242424;
  text-align: right;
  margin-right:57px;

 }

 div > p{
  margin-top: 25px;
  line-height:24px;
  font-size: 18px;
  color:#7E7E7E;
 }
  
  
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    padding: 20px 20px;
    justify-content: space-between;
    line-height: normal;
    
  }
  /* a:hover {
    color: red;
    text-decoration: underline;
  } */
`;
export default LeftPart