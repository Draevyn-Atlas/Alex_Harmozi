import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Otp(prop) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [otp,setOtp] = useState("")
    const navigate = useNavigate()

    const {clicked,email} = prop;

    useEffect(()=>{
     clicked && onOpen()
    },[])

    
  function postData(otp){
    console.log("POstDAta", {otp,email})
    axios.post("https://tiny-jade-mussel-hat.cyclic.app/auth/verfiy-email",{email,otp}).then((res)=>console.log(res)).catch((err)=>console.log("err",err))
  }
  

  
    function otpSubmitHanlder(){
      if(!otp){
        alert("Enter Valid Otp ")
      }
      else{
        navigate("/events")
        alert("Otp Submitted Successfully")
        postData(otp)
        console.log(otp)
        onClose()
      }
      
    }
    return (
      <Box>
     {/*    <Button
        borderRadius="12px"
          bg={'none'}
          fontWeight={"700"}
          _hover={{ bg: '#cbd5e1', color: '#016ebd' }}
          onClick={onOpen}
        >
          OTP
        </Button> */}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">OTP</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="bg-[#fffbf0] border border-yellow-300 w-[90%] m-auto rounded-md">
              By Otp you are agreeing with our{' '}
              <span className="text-[#0176cc] cursor-pointer">privacy policies</span>. We take
              privacy seriously. Your data is safe with us!
            </ModalBody>
            <ModalBody>
              <FormLabel>Enter Otp</FormLabel>
              <Input
              onChange={(e)=>setOtp(e.target.value)}
                required
                placeholder="Enter Otp"
                size="md"
              />
              <br />
              <Checkbox >Notify me on full web-launch!</Checkbox>
            </ModalBody>
  
            <ModalFooter className="flex flex-col ">
              <Button
                bg={'#0176cc'}
                px={'24'}
                color="white"
                borderRadius={'50px'}
                _hover={{ bg: '#0d51ab' }}
                className="m-auto"
                onClick={otpSubmitHanlder}
              >
                <span>OTP</span>
              </Button>
              <span className="text-[#0173c7] text-center cursor-pointer mt-2">
                skip for now, with limited access
              </span>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

  export default Otp