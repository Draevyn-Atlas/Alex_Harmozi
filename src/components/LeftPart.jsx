import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const LeftPart = () => {
  return (
    <Box className='bg-slate-50 '>
      <div>
        <div className="left_part_section ">
          <h1>Alex-Powered Solutions,</h1>
          <h2>
            Potential{' '}
            <div className="inline-block">
              <p className="w-[100%] h-[39px]">Unleashed</p>
              <p className="h-[5px] bg-[#a4d7ff]"></p>
            </div>
          </h2>

          <p>
            Discover your $100M offer with our AI-powered tools. Inspired by
            Alex Hormozi's 100M Offers, we help startups and businesses alike
            revolutionize their content and branding strategies.
          </p>
        </div>
        <div className="border border-slate-500">
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
          <Link to="/events">
          <div className='flex items-center gap-x-2'>
          <span>Try demo</span>

          <span className=''>
            <BsArrowRight size={20} />
          </span>
        </div>
          </Link>
           
          </div>
        </div>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  height: auto;
  // display: flex;
  justify-content: space-between;
  line-height: normal;
  div > div:nth-child(1) > h1 {
    width: 644px;
    padding-left: 112px;
    padding-top: 239px;
    color: var(--text, #242424);
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 48px */
  }

  div > div:nth-child(1) > h2 {
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 60px;
    color: #242424;
    padding-left: 254px;
  }

  div > div:nth-child(1) > p {
    width: 632px;
    font-family: 'Inter', sans-serif;
    padding-left: 102px;
    margin-top: 25px;
    line-height: 24px;
    font-size: 18px;
    color: #7e7e7e;
    text-align: justify;
  }
  .border {
    margin-left: 103px;
    width: 438px;
    border: 1px solid #7e7e7e;
    border-radius: 18px;
    margin-top: 40px;
    padding: 16px;
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
    width: 32px;
    height: 32px;
  }
  .border > div > div > h3 {
    font-size: 14px;
    color: #242424;
    font-weight: 600;
  }
  .border > div > div > p {
    font-size: 12px;
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
    padding: 16px 16px;
    justify-content: space-between;
    line-height: normal;
  }
  /* a:hover {
    color: red;
    text-decoration: underline;
  } */
`
export default LeftPart
