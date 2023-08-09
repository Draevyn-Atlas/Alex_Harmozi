import React, { useEffect, useState } from 'react'
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

const details = { mobileNumber: '', email: '', password:'' }

function SignUp(prop) {
  const { title, wid, bgCol, clicked, data } = prop
  const [showOtp, setShowOtp] = useState(false)
  const [signupData, setSignupData] = useState(details)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    console.log('signnup', data)
    clicked && onOpen()
  }, [])

  function postData(signupData){
    axios.post("https://tiny-jade-mussel-hat.cyclic.app/details/save",{info:data,email:signupData.email}).then((res)=>console.log("res",res)).catch((err)=>console.log("err",err))
    
    axios.post("https://tiny-jade-mussel-hat.cyclic.app/auth/signup",signupData).then((res)=>console.log("res",res)).catch((err)=>console.log("err",err))
  }

  function handleSignup() {
    if (
      !signupData.email.includes('@gmail.com') ||
      signupData.mobileNumber.length !== 10 || signupData.password.length<=8
    ) {
      alert('Enter Valid Email, Phone mobileNumber, Pssword')
    } else {
      setShowOtp(true)
      
      postData(signupData)
      console.log(signupData)
      onClose()
    }
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
          {title ? title : 'Sign Up'}
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">SIGN UP</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="bg-[#fffbf0] border border-yellow-300 w-[90%] m-auto rounded-md">
            By Signing up you are agreeing with our{' '}
            <span className="text-[#0176cc] cursor-pointer">
              privacy policies
            </span>
            . We take privacy seriously. Your data is safe with us!
          </ModalBody>
          <ModalBody>
            <FormLabel>Phone Number</FormLabel>
            <Input
              onChange={changeHandler}
              placeholder="+1 440-555-1234"
              size="md"
              name="mobileNumber"
              type="number"
            />
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
            <FormLabel>Password</FormLabel>
            <Input
              onChange={changeHandler}
              required
              placeholder="example@gmail.com"
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
            <span className="text-[#0173c7] text-center cursor-pointer mt-2">
              Have you loss your email?
            </span>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {showOtp && <Otp clicked={true} email={signupData.email}/>}
    </Box>
  )
}

export default SignUp
