import React, { useContext, useEffect, useState } from 'react'
import Otp from './Otp'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormLabel,
  Checkbox,
  Box,
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ContextApi } from '../../context/ContextApi'

const details = { mobileNumber: '', email: '', password:'' }

function SignUp(prop) {
  const { title, wid, bgCol, clicked, data,removeSignUp } = prop
  const [showOtp, setShowOtp] = useState(false)
  const [signupData, setSignupData] = useState(details)
  const [validation, setValidation] = useState();
  const {postDetailsAndEmailVerification} = useContext(ContextApi)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  
  function handlePrivacyPolicies() {
    onClose()
    navigate('/privacy-policy')
  }
  


  useEffect(() => {
    clicked && onOpen()
  }, [])

  

  

  function handleSignup() {
    if (
      !signupData.email.includes('@gmail.com') ||
      signupData.mobileNumber.length !== 10 || signupData.password.length<=8
    ) {
      alert('Enter Valid Email, Phone mobileNumber, Pssword')
    } else {
      setShowOtp(true)
      postDetailsAndEmailVerification(signupData,data)
     
      onClose()
    }
  }


  function handleSkipLink() {
    onClose()
    navigate('/events')
  }

  function changeHandler(e) {
    const { name, value } = e.target
    setSignupData({ ...signupData, [name]: value })
  }

  return (
    <Box>
      {!clicked && (
        <Button
          w={wid}
          borderRadius="12px"
          onClick={onOpen}
          color={title && 'white'}
          bg={bgCol || 'none'}
          fontWeight={'700'}
          _hover={{ bg: '#cbd5e1', color: '#016ebd' }}
        >
          Sign Up  </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader className="text-center">SIGN UP</ModalHeader>
          <ModalCloseButton onClick={()=>removeSignUp(false)}  />
          <ModalBody className="bg-[#fffbf0] border border-yellow-300 w-[90%] m-auto rounded-md">
            By Signing up you are agreeing with our{' '}
            <span onClick={handlePrivacyPolicies} className="text-[#0176cc] cursor-pointer hover:underline">
            privacy policies
          </span>
            . We take privacy seriously. Your data is safe with us!
          </ModalBody>
          <ModalBody>
            <FormLabel>Phone Number</FormLabel>
            <Input
              onChange={changeHandler}
              placeholder="440-555-1234"
              size="md"
              name="mobileNumber"
              type="number"
            />
            <br />
           { signupData.mobileNumber !==10 && <p className='text-red-500'>Mobile number must be have 10 digits</p> }

            <br />
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={changeHandler}
              required
              placeholder="example@gmail.com"
              size="md"
              type="email"
              name="email"
            />
            <br />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              onChange={changeHandler}
              required
              placeholder="*************"
              size="md"
              type="password"
              name="password"
            />
            <br />
         
            <br />
            <Checkbox>Notify me on full web-launch!</Checkbox>
          </ModalBody>

          <ModalFooter className="flex flex-col ">
            <Button
              bg={'#0176cc'}
              px={'24'}
              color="white"
              borderRadius={'50px'}
              _hover={{ bg: '#0d51ab' }}
              className="m-auto"
              onClick={handleSignup}
            >
              <span>SIGN UP</span>
            </Button>
            <span
            onClick={handleSkipLink}
            className="text-[#0173c7] my-3 hover:underline text-center cursor-pointer mt-2 "
          >
            skip for now, with limited access
          </span>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
      {showOtp && <Otp clicked={true} email={signupData.email}/>}
    </Box>
  )
}

export default SignUp
