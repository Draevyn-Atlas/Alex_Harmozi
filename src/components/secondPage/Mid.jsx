import React, { useEffect, useState } from 'react'
import adsImage from '../../assets/image2.png'

import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import BussinessAnalysis from './BussinessAnalysis.jsx'

const Mid = () => {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  })

  useEffect(() => {
    timer()
  }, [])

  const countDown = () => {
    const targetDate = new Date('2023-8-19 24:00')
    const currentDate = new Date()
    const timeRemaining = targetDate - currentDate
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    if (days < 10) {
      days = '0' + days
    }
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    if (hours < 10) {
      hours = '0' + hours
    }
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    setLeftTime({
      days: days,
      hours: hours,
      mins: minutes,
      secs: seconds,
    })
    timer()
  }

  const timer = () => {
    setTimeout(countDown, 1000)
  }

  // https://tiny-jade-mussel-hat.cyclic.app/details/save
  return (
    <div className="rounded-md w-[100%] bg-[#a6cbf6] ">
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
              <p className="text-2xl text-[#242424]">{leftTime.days}</p>
              <p className="text-sm">DAYS</p>
            </div>
            <div>
              <p className="text-2xl text-[#242424]">{leftTime.hours}</p>
              <p className="text-sm">HOURS</p>
            </div>
            <span className="text-xl font-semibold mb-5 text-[#242424] ">
              :
            </span>
            <div>
              <p className="text-2xl text-[#242424]">{leftTime.mins}</p>
              <p className="text-sm">MINUTES</p>
            </div>
            <span className="text-xl font-semibold mb-5 text-[#242424]">:</span>
            <div>
              <p className="text-2xl text-[#242424]">{leftTime.secs}</p>
              <p className="text-sm">SECONDS</p>
            </div>
          </div>

          {/* Signup --> Here <-- */}

          <div className="flex text-xl items-center justify-evenly font-bold text-[#fec900]">
            <p>Sign up</p>

            <span>
              <HiArrowNarrowRight size={40} />
            </span>

            <div className="text-center">
              <p className="h-20px">HERE</p>
              <p className="w-[80px] h-[4px] bg-[#fec900]"></p>
            </div>

            <span>
              <HiArrowNarrowLeft size={40} />
            </span>
          </div>
        </div>
      </div>

      <BussinessAnalysis />
    </div>
  )
}

export default Mid
