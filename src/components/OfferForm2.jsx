import React, { useEffect, useState } from "react";
import Group3 from "./../assets/Group 3.png";
import SignUp from "./secondPage/SignUp";

const Offer2 = () => {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    timer();
  }, [])

  const countDown = () => {
    const targetDate =  new Date("2023-8-19 24:00");
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    setLeftTime({
      days: days,
      hours: hours,
      mins: minutes,
      secs: seconds
    })
    timer();
  }

  const timer = () => {
    setTimeout(countDown, 1000);
  }

  function handleSignup(){
    SignUp()
  } 

  


  return (
    <div>
      <div className="flex flex-col">
        <div className="text-sm font-[600] text-center m-auto bg-[#6FF] justify-center fit-content w-40 px-4 py-2 rounded-[16px]">
          <label>
            Offer Ends Soon!
          </label>
        </div>
        <div className="flex flex-col mt-2 mb-2 gap-y-2">
          <div className="flex justify-between m-auto text-center w-50">
            <div className="flex flex-col">
              <label id="day" className="text-[16px] font-[500]">{leftTime.days}</label>              
              <label className="text-[10px] font-[500] text-[#0176CC]">DAYS</label>
            </div>
            <div className="flex flex-col">
              <label id="hour">&nbsp;</label>
            </div>
            <div className="flex flex-col">
              <label id="hour" className="text-[16px] font-[500]">{leftTime.hours}</label>
              <label className="text-[10px] font-[500] text-[#0176CC]">HOURS</label>
            </div>
            <div className="flex flex-col">
              <label id="hour">:</label>
            </div>
            <div className="flex flex-col">
              <label id="minute" className="text-[16px] font-[500]">{leftTime.mins}</label>
              <label className="text-[10px] font-[500] text-[#0176CC]">MINUTES</label>
            </div>
            <div className="flex flex-col">
              <label id="hour">:</label>
            </div>
            <div className="flex flex-col">
              <label id="second" className="text-[16px] font-[500]">{leftTime.secs}</label>              
              <label className="text-[10px] font-[500] text-[#0176CC]">SECONDS</label>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center px-1 py-10 m-auto bg-white gap-y-2 rounded-2xl">
        <div className="flex absolute -left-[4rem] -top-20">
          <img src={Group3} alt="group3" />           
        </div>
        <div className="flex flex-col gap-y-5 ">
          <div className="m-auto text-center">
            <p className="text-[24px] font-[600]">$100M Offers</p>
            <p className="text-[14px] font-[600] text-slate-400">
              From idea to Grand Slam Offer
            </p>
          </div>
        </div>
        <div className="flex flex-col px-[32px]">
          <div>
            <p className="text-base font-medium leading-[140%] mb-2 text-[#242424]">
              Are you going to IMPROVE your clients health/wealth/relationships?
            </p>
            <div className="flex items-center mb-4">
              <input
                id="health"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer "
              />
              <label
                htmlFor="health"
                className="ml-2 text-[12px] font-[600] text-[#7E7E7E] cursor-pointer hover:text-[#0174c8] "
              >
                Health
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="health"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer "
              />
              <label
                htmlFor="health"
                className="ml-2 text-[12px] font-[600] text-[#7E7E7E] cursor-pointer hover:text-[#0174c8] "
              >
                Wealth
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="health"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer "
              />
              <label
                htmlFor="health"
                className="ml-2 text-[12px] font-[600] text-[#7E7E7E] cursor-pointer hover:text-[#0174c8] "
              >
                Relationships
              </label>
            </div>
          </div>
          <p className="text-base font-medium leading-[140%] mb-2">
            What is your target audience within this market? (e.g. entrepreneurs
            looking to scale their business)
          </p>
          <input
            type="text"
            placeholder="Enter response"
            className="font-medium text-sm border-0 border-b-2 border-[#C1E4FF] p-2 outline-none mb-2"
          />
          <p className="text-base font-medium leading-[140%] mb-2">
            What pain point are you solving? (e.g. not knowing how to scale and struggling to find talent)
          </p>
          <input
            type="text"
            placeholder="Enter response"
            className="font-medium text-sm border-0 border-b-2 border-[#C1E4FF] p-2 outline-none mb-2"
          />
          <p className="text-base font-medium leading-[140%] mb-2">
            What product/service are you planning to provide? (e.g 1:1 coaching sessions to help them scale their business step by step)
          </p>
          <input
            type="text"
            placeholder="Enter response"
            className="font-medium text-sm border-0 border-b-2 border-[#C1E4FF] p-2 outline-none mb-2"
          />
        
        
         <SignUp title=" Try for FREE" wid="100%" bgCol="#0174c8"  />
     
        </div>
      </div>
    </div>
    
  );
};

export default Offer2;
