import React, { useContext, useEffect, useState } from 'react'

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
import { useNavigate } from 'react-router-dom'
import { ContextApi } from '../../context/ContextApi'
// password:''
const details = { mobileNumber: '', email: '' }

function SignUp(prop) {
  const { title, wid, bgCol, clicked, data, removeSignUp } = prop

  const [signupData, setSignupData] = useState(details)
  const [validation, setValidation] = useState(false)
  const { postDetailsAndEmailVerification, setShowSignUp } = useContext(
    ContextApi,
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

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
      signupData.mobileNumber.length !== 10
    ) {
      // alert('Enter Valid Email, Phone mobileNumber, Pssword',signupData)
      setValidation(true)
      console.log('Enter Valid Email, Phone mobileNumber', signupData)
    } else {
      // setShowOtp(true)
      postDetailsAndEmailVerification(signupData, data)
      console.log()

      onClose(signupData, data)
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

  // function validatePassword(password) {
  //   // Check the password length
  //   if (password.length < 8) {
  //     return "Password must be at least 8 characters long";
  //   }

  //   // Check for at least one uppercase letter
  //   if (!password.match(/[A-Z]/)) {
  //     return "Password must contain at least one uppercase letter";
  //   }

  //   // Check for at least one lowercase letter
  //   if (!password.match(/[a-z]/)) {
  //     return "Password must contain at least one lowercase letter";
  //   }

  //   // Check for at least one number
  //   if (!password.match(/[0-9]/)) {
  //     return "Password must contain at least one number";
  //   }

  //   // Check for at least one special character
  //   if (!password.match(/[!@#$%^&*()_+-]/)) {
  //     return "Password must contain at least one special character";
  //   }

  //   return "" ; // No errors
  // }

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
          Sign Up{' '}
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">SIGN UP</ModalHeader>
          <ModalCloseButton onClick={() => setShowSignUp(false)} />
          <ModalBody className="bg-[#fffbf0] border border-yellow-300 w-[90%] m-auto rounded-md">
            By Signing up you are agreeing with our{' '}
            <span
              onClick={handlePrivacyPolicies}
              className="text-[#0176cc] cursor-pointer hover:underline"
            >
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
            {validation && signupData.mobileNumber.length !== 10 && (
              <p className="text-red-500">
                Mobile number must be have 10 digits
              </p>
            )}

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

            {validation && !signupData.email.includes('@gmail.com') && (
              <p className="text-red-500">Enter valid email address</p>
            )}
            <br />
            {/*    <FormLabel>Password</FormLabel>
            <Input
              onChange={changeHandler}
              required
              placeholder="*************"
              size="md"
              type="password"
              name="password"
            />
            <br />
            { validation &&  validatePassword(signupData.password) ? <p className='text-red-500'>{validatePassword(signupData.password)}</p> :
            !validatePassword(signupData.password) && <p className='text-green-500'>Password is strong</p>
          }
          
         
            <br /> */}
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
    </Box>
  )
}

export default SignUp
