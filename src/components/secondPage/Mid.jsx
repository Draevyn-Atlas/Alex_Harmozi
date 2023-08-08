import React from 'react'
import adsImage from '../../assets/image2.png'

import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import BussinessAnalysis from './BussinessAnalysis.jsx'

const Mid = () => {
  return (
    <div className="rounded-md ">
      <div
        className="bg-[#026be5] flex  pt-5 
      flex-col
      items-center
      lg:items-end
      lg:flex-row
      rounded-md
        "
      >
        {/* banner Left side with ads Iamge*/}
        <div className="lg:w-[40%] rounded-bl-md  w-[90%] cursor-pointer overflow-hidden">
          <img src={adsImage} alt="adsIamge" className="w-[100%] h-[100%]" />
        </div>

        {/* banner right side */}

        <div className="flex flex-col h-[100%] m-auto  ">
          {/* timer */}
          <div className="   flex text-center font-semibold gap-x-2 border-2 border-[#242424] rounded-2xl px-2 py-2 items-center">
            <div className="">
              <p className="text-2xl text-[#242424]">00</p>
              <p className="text-sm">DAYS</p>
            </div>
            <div>
              <p className="text-2xl text-[#242424]">00</p>
              <p className="text-sm">HOURS</p>
            </div>
            <span className="text-xl font-semibold mb-5 text-[#242424] ">
              :
            </span>
            <div>
              <p className="text-2xl text-[#242424]">00</p>
              <p className="text-sm">MINUTES</p>
            </div>
            <span className="text-xl font-semibold mb-5 text-[#242424]">:</span>
            <div>
              <p className="text-2xl text-[#242424]">00</p>
              <p className="text-sm">SECONDS</p>
            </div>
          </div>

          {/* Signup --> Here <-- */}

          <div className="flex text-xl items-center justify-evenly font-bold text-[#fec900]">
            <p>Sign up</p>

            <span >
              <HiArrowNarrowRight size={40} />
            </span>

            <div className="text-center">
              <p className="h-20px">HERE</p>
              <p className="w-[80px] h-[4px] bg-[#fec900]"></p>
            </div>

            <span >
              <HiArrowNarrowLeft size={40} />
            </span>
          </div>
        </div>
      </div>

      <BussinessAnalysis/>
    </div>
  )
}

export default Mid
