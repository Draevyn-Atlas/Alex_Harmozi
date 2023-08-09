import React from 'react'
import styled from 'styled-components'
import SignIn from './secondPage/SignIn'
import Otp from './secondPage/Otp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-5 border-b'> 
      <Link to="/">
        <div className='w-[80%]'>
          <img className='w-[100%] h-[100%]' src="https://i.ibb.co/zN2mdfd/Group-2.png" alt="logo." />
        </div>{' '}
      </Link>
     {/*  <SignIn /> */}
     <Otp/>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 115px;
  padding: 32px 80px;
  display: flex;
  color: red;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  img {
    width: 30%;
    cursor: pointer;
  }

  button {
    display: flex;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 30px;
    background: #fff;
  }

  h3 {
    cursor: pointer;
    color: var(--primary, #0176cc);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
`

export default Navbar
