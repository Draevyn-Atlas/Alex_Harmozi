import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  
  function handleForgotPasswordLink() {
    onClose()
    alert("Enter Email For New Password")
    // navigate('/events')
  }
  function handlePrivacyPolicies() {
    onClose()
    navigate('/privacy-policy')
  }

  return (
    <Box>
      <Button
        borderRadius="12px"
        bg={'none'}
        fontWeight={'700'}
        _hover={{ bg: '#cbd5e1', color: '#016ebd' }}
        onClick={onOpen}
      >
        Sign In
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">SIGN IN</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="bg-[#fffbf0] border text-justify border-yellow-300 w-[90%] m-auto rounded-md">
            By Signing up you are agreeing with our{' '}

            <span onClick={handlePrivacyPolicies} className="text-[#0176cc] cursor-pointer hover:underline">
            privacy policies
          </span>
         
           
            . We take privacy seriously. Your data is safe with us!
          </ModalBody>
          <ModalBody>
            <FormLabel>Email address / Phone number</FormLabel>
            <Input
              required
              placeholder="Email address / Phone number"
              size="md"
            />
            <br />
            <FormLabel>Password</FormLabel>
            <Input required placeholder="Password" size="md" />
            <div
              onClick={handleForgotPasswordLink}
              className="text-[#0173c7]  hover:underline  cursor-pointer m-auto  text-right"
            >
            Forget Password
            </div>
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
              onClick={onClose}
            >
              <span>SIGN IN</span>
            </Button>

            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default SignIn
