import React from 'react'
import { Input, Text, Button } from '@chakra-ui/react'
import logo from '../assets/100mlogo.png'
const ServiceForm = () => {
  return (
    <div className=" h-[100%]  pb-10   pt-5 rounded-xl   bg-slate-50 mt-7 w-[50%] md:w-[60%] sm:w-[40%] lg:w-[70%]  ml-auto mr-auto">
      <div className="flex justify-between px-20">
        <p></p>
        <div className="w-[30%]   ">
          <img src={logo} alt="logo" className="w-[100%] " />
        </div>
      </div> 

      {/* Form start */}
      <div className="pl-10 lg:pr-28 pr-5 text-[10px] md:text-lg ">
        <div className="">
          <Text mb="8px" className="font-bold">
            Business Name:
          </Text>
          <Input
            placeholder="Enter response"
            size="sm"
            border="none"
            borderBottom="1px"
            borderRadius="none"
            variant="flushed"
          />
        </div>
        <div className="mt-7">
          <Text mb="8px" className="font-bold">
            What is your target audience within this market? (e.g. entrepreneurs
            loo king to scale their business)
          </Text>
          <Input
            placeholder="Enter response"
            size="sm"
            border="none"
            borderBottom="1px"
            borderRadius="none"
            variant="flushed"
          />
        </div>
        <div className="mt-7">
          <Text mb="8px" className="font-bold">
            What pain point are you solving? (e.g. not knowing how to scale and
            struggling to find talent)
          </Text>
          <Input
            placeholder="Enter response"
            size="sm"
            border="none"
            borderBottom="1px"
            borderRadius="none"
            variant="flushed"
          />
        </div>
        <div className="mt-7">
          <Text mb="8px" className="font-bold">
            What product/service are you planning to provide? (e.g 1:1 coaching
            sessions to help them scale their business step by step)
          </Text>
          <Input
            placeholder="Enter response"
            size="sm"
            border="none"
            borderBottom="1px"
            borderRadius="none"
            variant="flushed"
          />
        </div>
        <div className="flex flex-wrap mt-7 gap-x-10">
          <div>
            <Text mb="8px" className="font-bold">
              Business Name:
            </Text>
            <Text mb="8px" className="font-medium ">
              Manage your subscription
            </Text>

            <Button
              mt="8px"
              bg="#0176cc"
              color="white"
              _hover={{ color: 'black', bg: '#76c1f8' }}
            >
              Manage your subscription
            </Button>
          </div>

          <div>
            <Text mb="8px" className="font-bold">
              Change Password
            </Text>
            <Text mb="8px" className="font-medium">
              Change your password
            </Text>

            <Button
              mt="8px"
              bg="#0176cc"
              color="white"
              _hover={{ color: 'black', bg: '#76c1f8' }}
            >
              Change your password
            </Button>
          </div>
        </div>

        {/* Support */}

        <div className="mt-7 ">
          <Text mb="8px" className="font-bold">
            Support
          </Text>
          <Text mb="8px" className="font-medium">
            Please contact support if you have issues or any feedback
          </Text>
          <Button
            mt="8px"
            bg="#0176cc"
            color="white"
            _hover={{ color: 'black', bg: '#76c1f8' }}
          >
            Contact Us
          </Button>
        </div>
        <div className="flex  items-center justify-between mt-16">
          <div>
            <Button
             
              bg="#76c1f8"
              color="white"
              _hover={{ color: 'black' }}
            >
              Log Out
            </Button>
          </div>

          <div className="flex items-center gap-x-2">
            <Button
              
              colorScheme='whatsapp'
              color="white"
              _hover={{ color: 'white' ,bg:"#63e6be"}}
            >
              Save
            </Button>
            <Button colorScheme='red'>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceForm
