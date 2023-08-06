import React from "react";
import styled from "styled-components";
import { FcRight } from "react-icons/fc";

const LeftPart = () => {
  return (
    <Box>
      <div>
        <div>
          <h1>Alex-Powered Solutions,</h1>
          <h2>Potential Unleashed</h2>

          <p>
            Discover your $100M offer with our AI-powered tools. Inspired by
            Alex Hormozi's 100M Offers, we help startups and businesses alike
            revolutionize their content and branding strategies.
          </p>
        </div>
        <div className="border">
          <h3>Try it out</h3>
          <div>
            <img
              src="https://i.ibb.co/R0jT8pV/Atlas-1-removebg-preview.png"
              alt="atlas logo."
            />
            <div>
              <h3>ATLAS CO</h3>
              <p>
                A mobile app and tracking stick that lets you track how much
                caffeine is in your cup of coffee.
              </p>
            </div>
          </div>
          <div className="demo">
            <div>
              <a href="#" target="_blank">
                Try demo
              </a>
              <a href="#">
                <FcRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  padding: 50px 50px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  div > div:nth-child(1) > h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    color: #242424;
  }

  div > div:nth-child(1) > h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 60px;
    color: #242424;
    text-align: right;
    margin-right: 57px;
  }

  div > div:nth-child(1) > p {
    margin-top: 25px;
    line-height: 24px;
    font-size: 18px;
    color: #7e7e7e;
    text-align: left;
  }
  .border {
    width: 80%;
    border: 1px solid #7e7e7e;
    border-radius: 18px;
    margin-top: 40px;
    padding: 20px 20px 20px 20px;
  }

  div > div:nth-child(2) > h3 {
    font-size: 14px;
    color: #242424;
    font-weight: 600;
  }
  .border > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
  }
  .border > div > img {
    width: 20%;
  }
  .border > div > div > h3 {
    font-size: 14px;
    color: #242424;
    font-weight: 600;
  }
  .border > div > div > p {
    font-size: 13px;
    color: #7e7e7e;
    font-weight: 600;
    padding-top: 10px;
  }
  .demo {
    color: #0176cc;
    line-height: 21px;
    font-weight: 600;
    font-size: 14px;
  }
  .demo > div {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .demo > a {
    margin: auto;
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
export default LeftPart;
