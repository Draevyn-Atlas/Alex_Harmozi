import React from "react";
import Group3 from "./../assets/Group 3.png";

const Offer2 = () => {
  return (
    <div className="w-[600px] flex flex-col gap-y-2  bg-white rounded-2xl m-auto px-1 py-10 relative">
      <div className="absolute -left-[4rem] -top-20">
        <img src={Group3} alt="group3" className="w-[150px]" />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="w-[300px]  text-center m-auto">
          <h2 className="text-2xl font-bold">$100M Offers</h2>
          <p className="text-base font-semibold text-slate-400">
            From idea to Grand Slam Offer
          </p>
        </div>

        <div>
          <p className="text-base font-medium mb-2">
            Are you going to IMPROVE you client health/wealth/relationships?
          </p>

          <div class="flex items-center mb-4">
            <input
              id="health"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer  "
            />
            <label
              for="health"
              class="ml-2 text-sm font-medium text-gray-900 cursor-pointer hover:text-[#0174c8] "
            >
              Health
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              id="wealth"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer "
            />
            <label
              for="wealth"
              class="ml-2 text-sm font-medium text-gray-900 cursor-pointer hover:text-[#0174c8] "
            >
              Wealth
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="relationships"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer "
            />
            <label
              for="relationships"
              class="ml-2 text-sm font-medium text-gray-900 cursor-pointer hover:text-[#0174c8]"
            >
              Relationships
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-3 ">
          <p className="text-base font-medium leading-[140%] ">
            What is your target audience within this market? (e.g. entrepreneurs
            looking to scale their business)
          </p>
          <input
            type="text"
            placeholder="Enter response"
            className="font-normal text-lg w-[100%] border-0 border-b-2 border-blue-400 px-2 outline-none rounded-bl-md rounded-br-md"
          />
        </div>

        <div className="flex flex-col gap-y-3 ">
          <p className="text-base font-medium leading-[140%]">
            What pain point are you solving? (e.g. not knowing how to scale and
            struggling to find talent)
          </p>
          <input
            type="text"
            placeholder="Enter response"
            className="font-normal text-lg w-[100%] border-0 border-b-1 outline-none border-blue-400 px-2 border-b-2 rounded-bl-md rounded-br-md"
          />
        </div>
        <div className="flex flex-col gap-y-3 ">
          <p className="text-base font-medium leading-[140%]">
            What product/service are you planning to provide? (e.g 1:1 coaching
            sessions to help them scale their business step by step)
          </p>

          <input
            type="text"
            placeholder="Enter response"
            className="font-normal text-lg w-[100%] px-2 border-0 border-b-1  border-blue-400 outline-none border-b-2 rounded-bl-md rounded-br-md"
          />
        </div>
        <button className=" bg-[#0174c8] py-2 rounded-full drop-shadow-2xl  font-bold text-slate-100 hover:bg-[#4dabf7] ">
          Try for FREE
        </button>
      </div>
    </div>
  );
};

export default Offer2;
