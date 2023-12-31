import React, { useState } from 'react'
import diamond from '../../assets/diamond.png'
import logo from '../../assets/100mlogo.png'
import atlascologo from '../../assets/atlas-logo-landscape-1.png'
import { Link, useLocation } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

const SideBar = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex-col rounded-r-lg  flex-none w-[290px]  lg:w-[290px]  md:w-[300px] sm:w-[320px] h-[1050px] shadow-3xl py-6 border-r-2 gap-y-5 bg-white">
      <div className="flex flex-col px-2 gap-y-5">
        {/* $100M Offer Logo */}
        <div className="m-auto ">
          <img className="w-[100%] h-[100%]" src={logo} alt="logo" />
        </div>

        <div className="mt-4 text-xl font-semibold ml-7">$100m Offer</div>

        {/* $100M Offer Top-List */}
        <div className="flex flex-col text-xs font-medium gap-y-1">
          <Link to="/events">
            <div
              className={`flex duration-300  gap-x-5 items-center  cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 px-5 py-2 rounded-xl group ${
                pathname === '/events' && 'bg-slate-300 text-[#016ebd]'
              }`}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 22"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#016ebd] fill-black"
                >
                  <path d="M1.66659 21.6667C1.28881 21.6667 0.972141 21.5389 0.716585 21.2833C0.46103 21.0278 0.333252 20.7111 0.333252 20.3333V17.9333C0.333252 17.1778 0.527696 16.4833 0.916585 15.85C1.30547 15.2167 1.82214 14.7333 2.46659 14.4C3.84436 13.7111 5.24436 13.1945 6.66658 12.85C8.08881 12.5056 9.53325 12.3333 10.9999 12.3333C12.4666 12.3333 13.911 12.5056 15.3333 12.85C16.7555 13.1945 18.1555 13.7111 19.5333 14.4C20.1777 14.7333 20.6944 15.2167 21.0833 15.85C21.4721 16.4833 21.6666 17.1778 21.6666 17.9333V20.3333C21.6666 20.7111 21.5388 21.0278 21.2833 21.2833C21.0277 21.5389 20.711 21.6667 20.3333 21.6667H1.66659ZM23.6999 21.6667C23.8999 21.5111 24.0555 21.3167 24.1666 21.0833C24.2777 20.85 24.3333 20.5889 24.3333 20.3V17.6667C24.3333 16.6889 24.061 15.75 23.5166 14.85C22.9721 13.95 22.1999 13.1778 21.1999 12.5333C22.3333 12.6667 23.3999 12.8945 24.3999 13.2167C25.3999 13.5389 26.3333 13.9333 27.1999 14.4C27.9999 14.8445 28.611 15.3389 29.0332 15.8833C29.4555 16.4278 29.6666 17.0222 29.6666 17.6667V20.3333C29.6666 20.7111 29.5388 21.0278 29.2832 21.2833C29.0277 21.5389 28.711 21.6667 28.3333 21.6667H23.6999ZM10.9999 11C9.53325 11 8.2777 10.4778 7.23325 9.43334C6.18881 8.3889 5.66658 7.13334 5.66658 5.66668C5.66658 4.20001 6.18881 2.94445 7.23325 1.90001C8.2777 0.855566 9.53325 0.333344 10.9999 0.333344C12.4666 0.333344 13.7221 0.855566 14.7666 1.90001C15.811 2.94445 16.3333 4.20001 16.3333 5.66668C16.3333 7.13334 15.811 8.3889 14.7666 9.43334C13.7221 10.4778 12.4666 11 10.9999 11ZM24.3333 5.66668C24.3333 7.13334 23.811 8.3889 22.7666 9.43334C21.7221 10.4778 20.4666 11 18.9999 11C18.7555 11 18.4444 10.9722 18.0666 10.9167C17.6888 10.8611 17.3777 10.8 17.1333 10.7333C17.7333 10.0222 18.1944 9.23334 18.5166 8.36668C18.8388 7.50001 18.9999 6.60001 18.9999 5.66668C18.9999 4.73334 18.8388 3.83334 18.5166 2.96668C18.1944 2.10001 17.7333 1.31112 17.1333 0.60001C17.4444 0.488899 17.7555 0.416677 18.0666 0.383344C18.3777 0.35001 18.6888 0.333344 18.9999 0.333344C20.4666 0.333344 21.7221 0.855566 22.7666 1.90001C23.811 2.94445 24.3333 4.20001 24.3333 5.66668ZM2.99992 19H18.9999V17.9333C18.9999 17.6889 18.9388 17.4667 18.8166 17.2667C18.6944 17.0667 18.5333 16.9111 18.3333 16.8C17.1333 16.2 15.9221 15.75 14.6999 15.45C13.4777 15.15 12.2444 15 10.9999 15C9.75547 15 8.52214 15.15 7.29992 15.45C6.0777 15.75 4.86659 16.2 3.66658 16.8C3.46659 16.9111 3.30547 17.0667 3.18325 17.2667C3.06103 17.4667 2.99992 17.6889 2.99992 17.9333V19ZM10.9999 8.33334C11.7333 8.33334 12.361 8.07223 12.8833 7.55001C13.4055 7.02779 13.6666 6.40001 13.6666 5.66668C13.6666 4.93334 13.4055 4.30557 12.8833 3.78334C12.361 3.26112 11.7333 3.00001 10.9999 3.00001C10.2666 3.00001 9.63881 3.26112 9.11658 3.78334C8.59436 4.30557 8.33325 4.93334 8.33325 5.66668C8.33325 6.40001 8.59436 7.02779 9.11658 7.55001C9.63881 8.07223 10.2666 8.33334 10.9999 8.33334Z" />
                </svg>
              </span>{' '}
              <span>Client Avatar</span>
            </div>
          </Link>
          <Link to="/events/client-pain-points-analysis">
            <div
              className={`flex items-center   gap-x-5 cursor-pointer hover:text-[#016ebd] group  hover:bg-slate-300 px-5 py-2 rounded-xl duration-300 ${
                pathname === '/events/client-pain-points-analysis' &&
                'bg-slate-300 text-[#016ebd]'
              }`}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#016ebd] fill-black"
                >
                  <path d="M23.4773 1.54688C23.4773 1.13662 23.6457 0.743164 23.9453 0.453069C24.245 0.162974 24.6515 0 25.0753 0H30.402C30.8258 0 31.2323 0.162974 31.532 0.453069C31.8316 0.743164 32 1.13662 32 1.54688V6.70312C32 7.11338 31.8316 7.50684 31.532 7.79693C31.2323 8.08703 30.8258 8.25 30.402 8.25C29.9782 8.25 29.5717 8.08703 29.272 7.79693C28.9723 7.50684 28.804 7.11338 28.804 6.70312V5.28L19.2799 14.4994C18.9802 14.7891 18.5741 14.9518 18.1506 14.9518C17.7271 14.9518 17.321 14.7891 17.0213 14.4994L11.7586 9.405L2.76713 18.1087C2.62083 18.2607 2.44441 18.3826 2.24839 18.4672C2.05237 18.5517 1.84076 18.5972 1.6262 18.6008C1.41163 18.6045 1.1985 18.5663 0.999523 18.4885C0.800543 18.4107 0.61979 18.2949 0.468046 18.148C0.316301 18.0011 0.196675 17.8262 0.116304 17.6335C0.0359329 17.4409 -0.00353706 17.2346 0.000248695 17.0269C0.00403445 16.8192 0.0509988 16.6144 0.138339 16.4246C0.22568 16.2349 0.351608 16.0641 0.50861 15.9225L10.6293 6.12562C10.9289 5.83595 11.3351 5.67324 11.7586 5.67324C12.1821 5.67324 12.5882 5.83595 12.8878 6.12562L18.1506 11.22L26.5455 3.09375H25.0753C24.6515 3.09375 24.245 2.93078 23.9453 2.64068C23.6457 2.35059 23.4773 1.95713 23.4773 1.54688ZM1.63787 24.75C2.06169 24.75 2.46815 24.913 2.76783 25.2031C3.06751 25.4932 3.23588 25.8866 3.23588 26.2969V31.4531C3.23588 31.8634 3.06751 32.2568 2.76783 32.5469C2.46815 32.837 2.06169 33 1.63787 33C1.21405 33 0.807591 32.837 0.507907 32.5469C0.208222 32.2568 0.0398615 31.8634 0.0398615 31.4531V26.2969C0.0398615 25.8866 0.208222 25.4932 0.507907 25.2031C0.807591 24.913 1.21405 24.75 1.63787 24.75ZM11.7586 20.1094C11.7586 19.6991 11.5902 19.3057 11.2905 19.0156C10.9908 18.7255 10.5844 18.5625 10.1606 18.5625C9.73675 18.5625 9.33029 18.7255 9.03061 19.0156C8.73093 19.3057 8.56256 19.6991 8.56256 20.1094V31.4531C8.56256 31.8634 8.73093 32.2568 9.03061 32.5469C9.33029 32.837 9.73675 33 10.1606 33C10.5844 33 10.9908 32.837 11.2905 32.5469C11.5902 32.2568 11.7586 31.8634 11.7586 31.4531V20.1094ZM18.6833 22.6875C19.1071 22.6875 19.5136 22.8505 19.8132 23.1406C20.1129 23.4307 20.2813 23.8241 20.2813 24.2344V31.4531C20.2813 31.8634 20.1129 32.2568 19.8132 32.5469C19.5136 32.837 19.1071 33 18.6833 33C18.2595 33 17.853 32.837 17.5533 32.5469C17.2536 32.2568 17.0853 31.8634 17.0853 31.4531V24.2344C17.0853 23.8241 17.2536 23.4307 17.5533 23.1406C17.853 22.8505 18.2595 22.6875 18.6833 22.6875ZM28.804 15.9844C28.804 15.5741 28.6356 15.1807 28.3359 14.8906C28.0363 14.6005 27.6298 14.4375 27.206 14.4375C26.7822 14.4375 26.3757 14.6005 26.076 14.8906C25.7763 15.1807 25.608 15.5741 25.608 15.9844V31.4531C25.608 31.8634 25.7763 32.2568 26.076 32.5469C26.3757 32.837 26.7822 33 27.206 33C27.6298 33 28.0363 32.837 28.3359 32.5469C28.6356 32.2568 28.804 31.8634 28.804 31.4531V15.9844Z" />
                </svg>
              </span>
              <span className="whitespace-nowrap">
                Client Pain Points Analysis
              </span>
            </div>
          </Link>

          <Link to="/events/client-dream-outcome">
            <div
              className={`flex duration-300 items-center  gap-x-5 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 px-5 py-2 group rounded-xl ${
                pathname === '/events/client-dream-outcome' &&
                'bg-slate-300 text-[#016ebd]'
              }`}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="none"
                  className="group-hover:stroke-[#016ebd] stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5V28.5C4.5 30.1569 5.84315 31.5 7.5 31.5H28.5C30.1569 31.5 31.5 30.1569 31.5 28.5V7.5C31.5 5.84315 30.1569 4.5 28.5 4.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 10.5H10.5V24H15V10.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5 10.5H21V18H25.5V10.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="whitespace-nowrap">Client Dream Outcome</span>
            </div>
          </Link>

          <Link to="/events/grand-slam-$100M-offers">
            <div
              className={`flex items-center  gap-x-5 cursor-pointer hover:text-[#016ebd] duration-300 hover:bg-slate-300 group px-5 py-2 rounded-xl group ${
                pathname === '/events/grand-slam-$100M-offers' &&
                'bg-slate-300 text-[#016ebd]'
              }`}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  fill="none"
                  className="group-hover:stroke-[#016ebd] stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1667 3.16669H9.50004C8.66019 3.16669 7.85473 3.50032 7.26087 4.09418C6.667 4.68805 6.33337 5.4935 6.33337 6.33335V31.6667C6.33337 32.5065 6.667 33.312 7.26087 33.9059C7.85473 34.4997 8.66019 34.8334 9.50004 34.8334H28.5C29.3399 34.8334 30.1453 34.4997 30.7392 33.9059C31.3331 33.312 31.6667 32.5065 31.6667 31.6667V12.6667L22.1667 3.16669Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1666 3.16669V12.6667H31.6666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.3333 20.5833H12.6666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.3333 26.9167H12.6666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8333 14.25H14.25H12.6666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              <span className="whitespace-nowrap">Grand Slam $100M Offers</span>
            </div>
          </Link>

          <Link to="/events/client-pain-point-solutions">
            <div
              className={`flex items-center  gap-x-5 cursor-pointer hover:text-[#016ebd] duration-300 hover:bg-slate-300 group px-5 py-2 rounded-xl ${
                pathname === '/events/client-pain-point-solutions' &&
                'bg-slate-300 text-[#016ebd]'
              }`}
            >
              <span>
                <svg
                  className="group-hover:stroke-[#016ebd] stroke-black"
                  width="20"
                  height="20"
                  viewBox="0 0 35 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1667 10L13.125 28.3333L5.83337 20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              <span className="whitespace-nowrap">
                Client Pain Point Solutions
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* comming soon with diamond */}

      <div className="bg-[#016ebd] rounded-lg flex flex-row-reverse gap-x-5 justify-end font-normal  text-xl  text-slate-100  items-center h-[42px] px-2 my-5">
        <p>Coming Soon!</p>
        <div className="w-[80px] ">
          <img className="w-[100%] h-[100%]" src={diamond} alt={diamond} />
        </div>
      </div>

      <div className="flex flex-col px-2 py-5 text-xs font-normal gap-y-3 text-slate-400">
        {/* Tools List */}

        <div>
          <h2 className="mb-5 ml-5">Tools</h2>
          <ul className="leading-[40px] ">
            <li className="flex gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 duration-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 29 25"
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.45 0L27.55 0C27.9346 0 28.3034 0.146329 28.5753 0.406796C28.8472 0.667263 29 1.02053 29 1.38889V23.6111C29 23.9795 28.8472 24.3327 28.5753 24.5932C28.3034 24.8537 27.9346 25 27.55 25H1.45C1.06544 25 0.696623 24.8537 0.424695 24.5932C0.152767 24.3327 0 23.9795 0 23.6111V1.38889C0 1.02053 0.152767 0.667263 0.424695 0.406796C0.696623 0.146329 1.06544 0 1.45 0ZM26.1 11.1111H2.9V22.2222H26.1V11.1111ZM26.1 8.33333V2.77778L2.9 2.77778V8.33333H26.1ZM10.15 4.16667H13.05V6.94444H10.15V4.16667ZM4.35 4.16667H7.25V6.94444H4.35V4.16667Z" />
                </svg>
              </span>
              <span>SWOT Analysis</span>
            </li>
            <li className="flex  gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 duration-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_211_211"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <rect width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_211)">
                    <path d="M14.7917 26.25C14.4965 26.25 14.2491 26.1498 14.0495 25.9495C13.8498 25.7491 13.75 25.5009 13.75 25.2047C13.75 24.9085 13.8498 24.6615 14.0495 24.4636C14.2491 24.2656 14.4965 24.1667 14.7917 24.1667H24.1667V14.875C24.1667 13.6667 23.9167 12.5139 23.4167 11.4167C22.9167 10.3194 22.2431 9.35418 21.3958 8.52084C20.5486 7.68749 19.5729 7.02429 18.4688 6.53125C17.3646 6.03819 16.2083 5.79166 15 5.79166C13.7917 5.79166 12.6354 6.03819 11.5313 6.53125C10.4271 7.02429 9.45139 7.68749 8.60416 8.52084C7.75693 9.35418 7.08331 10.3194 6.58331 11.4167C6.08331 12.5139 5.83331 13.6667 5.83331 14.875V21.6667C5.83331 21.9028 5.75346 22.1007 5.59375 22.2604C5.43402 22.4201 5.2361 22.5 5 22.5C4.3125 22.5 3.72396 22.2552 3.23438 21.7656C2.74479 21.276 2.5 20.6875 2.5 20V17.5C2.5 17.0208 2.61458 16.599 2.84375 16.2344C3.07292 15.8698 3.375 15.5729 3.75 15.3438L3.84375 13.6875C4.03125 12.1667 4.46354 10.7917 5.14063 9.5625C5.81771 8.33333 6.66146 7.29167 7.67188 6.4375C8.68229 5.58333 9.81771 4.92188 11.0781 4.45312C12.3385 3.98438 13.6458 3.75 15 3.75C16.375 3.75 17.6927 3.98438 18.9531 4.45312C20.2135 4.92188 21.3438 5.58854 22.3438 6.45312C23.3438 7.31771 24.1823 8.35938 24.8594 9.57812C25.5365 10.7969 25.9688 12.1562 26.1563 13.6562L26.25 15.2812C26.625 15.4688 26.9271 15.7448 27.1563 16.1094C27.3854 16.474 27.5 16.875 27.5 17.3125V20.1875C27.5 20.6458 27.3854 21.0521 27.1563 21.4062C26.9271 21.7604 26.625 22.0312 26.25 22.2188V24.1667C26.25 24.7396 26.046 25.2301 25.638 25.638C25.2301 26.046 24.7396 26.25 24.1667 26.25H14.7917ZM11.25 17.2917C10.9653 17.2917 10.7205 17.1892 10.5156 16.9844C10.3108 16.7795 10.2083 16.5313 10.2083 16.2396C10.2083 15.9479 10.3108 15.7031 10.5156 15.5052C10.7205 15.3073 10.9687 15.2083 11.2604 15.2083C11.5521 15.2083 11.7969 15.3082 11.9948 15.5078C12.1927 15.7075 12.2917 15.9549 12.2917 16.25C12.2917 16.5347 12.1918 16.7795 11.9922 16.9844C11.7925 17.1892 11.5451 17.2917 11.25 17.2917ZM18.75 17.2917C18.4653 17.2917 18.2205 17.1892 18.0156 16.9844C17.8108 16.7795 17.7083 16.5313 17.7083 16.2396C17.7083 15.9479 17.8108 15.7031 18.0156 15.5052C18.2205 15.3073 18.4687 15.2083 18.7604 15.2083C19.0521 15.2083 19.2969 15.3082 19.4948 15.5078C19.6927 15.7075 19.7917 15.9549 19.7917 16.25C19.7917 16.5347 19.6918 16.7795 19.4922 16.9844C19.2925 17.1892 19.0451 17.2917 18.75 17.2917ZM7.53125 15.5625C7.44792 14.3333 7.61979 13.2188 8.04688 12.2188C8.47396 11.2188 9.04688 10.3698 9.76563 9.67188C10.4844 8.97396 11.3125 8.4375 12.25 8.0625C13.1875 7.6875 14.125 7.5 15.0625 7.5C16.9583 7.5 18.5677 8.09896 19.8906 9.29688C21.2135 10.4948 22.0208 11.9896 22.3125 13.7812C20.3542 13.7604 18.6146 13.2344 17.0938 12.2031C15.5729 11.1719 14.4063 9.83333 13.5938 8.1875C13.2604 9.875 12.5573 11.3698 11.4844 12.6719C10.4115 13.974 9.09375 14.9375 7.53125 15.5625Z" />
                  </g>
                </svg>
              </span>
              <span>Advisory Bot</span>
            </li>

            <li className="flex duration-300 gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_211_215"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <rect width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_215)">
                    <path d="M15 27.5C13.2708 27.5 11.6458 27.1719 10.125 26.5156C8.60417 25.8594 7.28125 24.9688 6.15625 23.8438C5.03125 22.7188 4.14063 21.3958 3.48438 19.875C2.82813 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82813 11.6458 3.48438 10.125C4.14063 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14062 10.125 3.48438C11.6458 2.82812 13.2708 2.5 15 2.5C16.1667 2.5 17.3038 2.65972 18.4115 2.97916C19.5191 3.29861 20.566 3.76737 21.5521 4.38544C21.8091 4.53821 21.9705 4.75348 22.0365 5.03125C22.1024 5.30904 22.0452 5.56599 21.8646 5.80209C21.6841 6.0382 21.4532 6.17708 21.1719 6.21875C20.8907 6.26042 20.6181 6.20486 20.3542 6.05209C19.5486 5.57293 18.6927 5.20833 17.7865 4.95831C16.8802 4.70831 15.9514 4.58331 15 4.58331C12.092 4.58331 9.62891 5.59243 7.61066 7.61066C5.59243 9.62891 4.58331 12.092 4.58331 15C4.58331 17.908 5.59314 20.3711 7.61278 22.3893C9.63241 24.4076 12.0972 25.4167 15.0072 25.4167C15.5718 25.4167 16.1285 25.3715 16.6771 25.2813C17.2257 25.191 17.7674 25.0625 18.3021 24.8958C18.6007 24.8056 18.8854 24.8073 19.1563 24.9011C19.4271 24.9948 19.6285 25.1771 19.7604 25.4479C19.8854 25.7118 19.8941 25.9792 19.7864 26.25C19.6788 26.5208 19.4861 26.7049 19.2083 26.8021C18.5278 27.0451 17.8333 27.2222 17.125 27.3333C16.4167 27.4445 15.7083 27.5 15 27.5ZM23.9583 21.0417H21.25C20.9549 21.0417 20.7075 20.9415 20.5078 20.7411C20.3082 20.5408 20.2083 20.2925 20.2083 19.9963C20.2083 19.7002 20.3082 19.4531 20.5078 19.2552C20.7075 19.0573 20.9549 18.9583 21.25 18.9583H23.9583V16.25C23.9583 15.9549 24.0585 15.7075 24.2589 15.5078C24.4592 15.3082 24.7075 15.2083 25.0037 15.2083C25.2998 15.2083 25.5469 15.3082 25.7448 15.5078C25.9427 15.7075 26.0417 15.9549 26.0417 16.25V18.9583H28.75C29.0451 18.9583 29.2925 19.0585 29.4922 19.2589C29.6918 19.4592 29.7917 19.7075 29.7917 20.0037C29.7917 20.2998 29.6918 20.5469 29.4922 20.7448C29.2925 20.9427 29.0451 21.0417 28.75 21.0417H26.0417V23.75C26.0417 24.0451 25.9415 24.2925 25.7411 24.4922C25.5408 24.6918 25.2925 24.7917 24.9963 24.7917C24.7002 24.7917 24.4531 24.6918 24.2552 24.4922C24.0573 24.2925 23.9583 24.0451 23.9583 23.75V21.0417ZM13.1875 17.6458L25.2292 5.59375C25.4244 5.39235 25.6728 5.29166 25.9745 5.29166C26.2762 5.29166 26.5347 5.39582 26.75 5.60416C26.9653 5.81249 27.0729 6.06597 27.0729 6.36459C27.0729 6.6632 26.9653 6.92014 26.75 7.13541L13.9167 19.9792C13.7083 20.1875 13.4653 20.2917 13.1875 20.2917C12.9097 20.2917 12.6667 20.1875 12.4583 19.9792L8.72916 16.2292C8.52778 16.0278 8.43056 15.7743 8.4375 15.4688C8.44444 15.1632 8.54749 14.9097 8.74666 14.7083C8.9458 14.5069 9.19927 14.4063 9.50706 14.4063C9.81486 14.4063 10.0694 14.5069 10.2708 14.7083L13.1875 17.6458Z" />
                  </g>
                </svg>
              </span>
              <span>100M $ Leads</span>
            </li>

            <li className="flex duration-300  gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5 rounded-xl items-center">
              <span>
                <svg
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  width="20"
                  height="20"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_211_222)">
                    <path d="M24.267 18.3667L25.7194 19.2379C25.809 19.2915 25.8832 19.3675 25.9347 19.4584C25.9862 19.5492 26.0132 19.6519 26.0132 19.7563C26.0132 19.8607 25.9862 19.9634 25.9347 20.0542C25.8832 20.1451 25.809 20.221 25.7194 20.2747L15.1223 26.6329C14.9344 26.7458 14.7193 26.8055 14.5 26.8055C14.2808 26.8055 14.0657 26.7458 13.8777 26.6329L3.28065 20.2747C3.19105 20.221 3.11688 20.1451 3.06538 20.0542C3.01389 19.9634 2.98682 19.8607 2.98682 19.7563C2.98682 19.6519 3.01389 19.5492 3.06538 19.4584C3.11688 19.3675 3.19105 19.2915 3.28065 19.2379L4.73307 18.3667L14.5 24.2271L24.267 18.3667ZM24.267 12.6875L25.7194 13.5587C25.809 13.6124 25.8832 13.6883 25.9347 13.7792C25.9862 13.87 26.0132 13.9727 26.0132 14.0771C26.0132 14.1815 25.9862 14.2842 25.9347 14.375C25.8832 14.4659 25.809 14.5419 25.7194 14.5955L14.5 21.3271L3.28065 14.5955C3.19105 14.5419 3.11688 14.4659 3.06538 14.375C3.01389 14.2842 2.98682 14.1815 2.98682 14.0771C2.98682 13.9727 3.01389 13.87 3.06538 13.7792C3.11688 13.6883 3.19105 13.6124 3.28065 13.5587L4.73307 12.6875L14.5 18.5479L24.267 12.6875ZM15.1211 1.58174L25.7194 7.93999C25.809 7.99363 25.8832 8.06958 25.9347 8.16043C25.9862 8.25129 26.0132 8.35393 26.0132 8.45837C26.0132 8.5628 25.9862 8.66545 25.9347 8.7563C25.8832 8.84715 25.809 8.9231 25.7194 8.97674L14.5 15.7084L3.28065 8.97674C3.19105 8.9231 3.11688 8.84715 3.06538 8.7563C3.01389 8.66545 2.98682 8.5628 2.98682 8.45837C2.98682 8.35393 3.01389 8.25129 3.06538 8.16043C3.11688 8.06958 3.19105 7.99363 3.28065 7.93999L13.8777 1.58174C14.0657 1.46883 14.2808 1.40918 14.5 1.40918C14.7193 1.40918 14.9344 1.46883 15.1223 1.58174H15.1211ZM14.5 4.0262L7.11349 8.45837L14.5 12.8905L21.8866 8.45837L14.5 4.0262Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_222">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="whitespace-nowrap">Content Coppy Bot(s)</span>
            </li>
          </ul>
        </div>

        {/* Analysis List */}

        <div>
          <h2 className="mb-5 ml-5">Analysis</h2>

          <ul className="leading-[40px]  ">
            <li className="flex  duration-300 gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  width="20"
                  height="20"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_211_237)">
                    <path d="M3.08337 6.15588C3.0862 5.751 3.24818 5.36349 3.53433 5.07704C3.82048 4.7906 4.20784 4.62823 4.61271 4.625L32.3874 4.625C33.2322 4.625 33.9167 5.31104 33.9167 6.15588V30.8441C33.9139 31.249 33.7519 31.6365 33.4658 31.923C33.1796 32.2094 32.7922 32.3718 32.3874 32.375H4.61271C4.20696 32.3746 3.81797 32.2131 3.53121 31.9261C3.24445 31.639 3.08337 31.2499 3.08337 30.8441V6.15588ZM6.16671 7.70833V29.2917H30.8334V7.70833H6.16671ZM9.25004 10.7917H18.5V20.0417H9.25004V10.7917ZM12.3334 13.875V16.9583H15.4167V13.875H12.3334ZM9.25004 23.125H27.75V26.2083H9.25004V23.125ZM21.5834 10.7917H27.75V13.875H21.5834V10.7917ZM21.5834 16.9583H27.75V20.0417H21.5834V16.9583Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_237">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Action Plan</span>
            </li>
            <li className="flex gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                >
                  <mask
                    id="mask0_211_241"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="34"
                  >
                    <rect width="34" height="34" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_241)">
                    <path d="M15.3708 30.4937C14.0958 29.5729 12.7323 28.8291 11.2802 28.2625C9.82812 27.6958 8.31111 27.3062 6.72917 27.0937C6.02083 26.9993 5.43056 26.6982 4.95833 26.1906C4.48611 25.6829 4.25 25.0986 4.25 24.4375V14.45C4.25 13.5527 4.55694 12.8149 5.17083 12.2364C5.78472 11.6579 6.50486 11.4395 7.33125 11.5812C9.14931 11.8882 10.8788 12.443 12.5198 13.2458C14.1608 14.0486 15.6542 15.0875 17 16.3625C18.3458 15.0875 19.8392 14.0486 21.4802 13.2458C23.1212 12.443 24.8507 11.8882 26.6687 11.5812C27.4951 11.4395 28.2153 11.6579 28.8292 12.2364C29.4431 12.8149 29.75 13.5527 29.75 14.45V24.4375C29.75 25.0986 29.5139 25.6829 29.0417 26.1906C28.5694 26.6982 27.9792 26.9993 27.2708 27.0937C25.6889 27.3062 24.1719 27.6958 22.7198 28.2625C21.2677 28.8291 19.9042 29.5729 18.6292 30.4937C18.1569 30.8479 17.6139 31.025 17 31.025C16.3861 31.025 15.8431 30.8479 15.3708 30.4937ZM17 28.1916C18.4875 27.0819 20.0694 26.1965 21.7458 25.5354C23.4222 24.8743 25.1458 24.4375 26.9167 24.225V14.45C25.1931 14.7569 23.499 15.3767 21.8344 16.3093C20.1698 17.242 18.5583 18.4875 17 20.0458C15.4417 18.4875 13.8302 17.242 12.1656 16.3093C10.501 15.3767 8.80694 14.7569 7.08333 14.45V24.225C8.85417 24.4375 10.5778 24.8743 12.2542 25.5354C13.9306 26.1965 15.5125 27.0819 17 28.1916ZM17 12.75C15.4417 12.75 14.1076 12.1951 12.9979 11.0854C11.8882 9.97565 11.3333 8.64163 11.3333 7.08329C11.3333 5.52496 11.8882 4.19093 12.9979 3.08121C14.1076 1.97149 15.4417 1.41663 17 1.41663C18.5583 1.41663 19.8924 1.97149 21.0021 3.08121C22.1118 4.19093 22.6667 5.52496 22.6667 7.08329C22.6667 8.64163 22.1118 9.97565 21.0021 11.0854C19.8924 12.1951 18.5583 12.75 17 12.75ZM17 9.91663C17.7792 9.91663 18.4462 9.6392 19.001 9.08433C19.5559 8.52947 19.8333 7.86246 19.8333 7.08329C19.8333 6.30413 19.5559 5.63711 19.001 5.08225C18.4462 4.52739 17.7792 4.24996 17 4.24996C16.2208 4.24996 15.5538 4.52739 14.999 5.08225C14.4441 5.63711 14.1667 6.30413 14.1667 7.08329C14.1667 7.86246 14.4441 8.52947 14.999 9.08433C15.5538 9.6392 16.2208 9.91663 17 9.91663Z" />
                  </g>
                </svg>
              </span>
              <span className="whitespace-nowrap">
                Vertical Outreach (Scale)
              </span>
            </li>
            <li className="flex duration-300 gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5 rounded-xl items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 38 38"
                  fill="none"
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_211_248)">
                    <path d="M19 11.0833C22.3595 11.0833 25.5813 12.4178 27.9567 14.7933C30.3322 17.1687 31.6667 20.3905 31.6667 23.75C31.6667 27.1094 30.3322 30.3312 27.9567 32.7066C25.5813 35.0821 22.3595 36.4166 19 36.4166C15.6406 36.4166 12.4188 35.0821 10.0434 32.7066C7.66789 30.3312 6.33337 27.1094 6.33337 23.75C6.33337 20.3905 7.66789 17.1687 10.0434 14.7933C12.4188 12.4178 15.6406 11.0833 19 11.0833ZM19 14.25C16.4805 14.25 14.0641 15.2508 12.2825 17.0324C10.5009 18.814 9.50004 21.2304 9.50004 23.75C9.50004 26.2695 10.5009 28.6859 12.2825 30.4675C14.0641 32.2491 16.4805 33.25 19 33.25C21.5196 33.25 23.936 32.2491 25.7176 30.4675C27.4992 28.6859 28.5 26.2695 28.5 23.75C28.5 21.2304 27.4992 18.814 25.7176 17.0324C23.936 15.2508 21.5196 14.25 19 14.25ZM19 16.625L21.0948 20.8683L25.7767 21.5491L22.3884 24.8504L23.188 29.5149L19 27.3125L14.8121 29.5133L15.6117 24.8504L12.2234 21.5475L16.9053 20.8667L19 16.625ZM28.5 3.16662V7.91662L26.342 9.71846C24.5511 8.77888 22.5959 8.19344 20.5834 7.99421V3.16662H28.5ZM17.4167 3.16504V7.99421C15.4048 8.19315 13.4502 8.77804 11.6597 9.71687L9.50004 7.91662V3.16662L17.4167 3.16504Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_248">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Feature Generator</span>
            </li>

            <li className="flex duration-300 gap-x-6 cursor-pointer hover:text-[#016ebd] hover:bg-slate-300 group px-5  rounded-xl items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 39 39"
                  fill="none"
                  className="group-hover:fill-[#016ebd] fill-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_211_255)">
                    <path d="M35.75 30.875V34.125H32.5V30.875H6.5V34.125H3.25V30.875C2.81902 30.875 2.4057 30.7038 2.10095 30.3991C1.7962 30.0943 1.625 29.681 1.625 29.25V9.75001C1.625 9.31903 1.7962 8.9057 2.10095 8.60096C2.4057 8.29621 2.81902 8.12501 3.25 8.12501H20.358C21.2715 7.10135 22.3913 6.28256 23.6437 5.72243C24.8962 5.1623 26.253 4.8735 27.625 4.87501C30.5126 4.87501 33.1077 6.13113 34.892 8.12501H35.75C36.181 8.12501 36.5943 8.29621 36.899 8.60096C37.2038 8.9057 37.375 9.31903 37.375 9.75001V29.25C37.375 29.681 37.2038 30.0943 36.899 30.3991C36.5943 30.7038 36.181 30.875 35.75 30.875ZM18.4291 11.375H4.875V27.625H34.125V21.892C32.5116 23.3371 30.4629 24.2038 28.3023 24.3553C26.1417 24.5069 23.9921 23.9347 22.1927 22.7291C20.3934 21.5234 19.0467 19.7529 18.3652 17.697C17.6837 15.6411 17.7062 13.4167 18.4291 11.375ZM27.625 21.125C29.3489 21.125 31.0022 20.4402 32.2212 19.2212C33.4402 18.0022 34.125 16.3489 34.125 14.625C34.125 12.9011 33.4402 11.2478 32.2212 10.0288C31.0022 8.80983 29.3489 8.12501 27.625 8.12501C25.9011 8.12501 24.2478 8.80983 23.0288 10.0288C21.8098 11.2478 21.125 12.9011 21.125 14.625C21.125 16.3489 21.8098 18.0022 23.0288 19.2212C24.2478 20.4402 25.9011 21.125 27.625 21.125ZM8.125 21.125H11.375V24.375H8.125V21.125ZM13 21.125H16.25V24.375H13V21.125Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_255">
                      <rect width="39" height="39" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Pivot Boat</span>
            </li>
          </ul>
        </div>
      </div>

      {/* signup signin Accounts and atlas logo */}

      {/* signup signin Accounts */}

      <div>
        <div className="relative z-10 flex font-bold justify-evenly">
          <SignIn />

          {/*  <p className="text-[#016ebd]  duration-300 hover:bg-slate-400 hover:text-[#016ebd] cursor-pointer  px-4 py-2 rounded-xl">
            Sign Up
          </p> */}

          <SignUp />
          <Link to="/service-form">
            <p className='cursor-pointer duration-300 hover:bg-slate-300 hover:text-[#016ebd] rounded-xl" px-4 py-2   rounded-xl'>
              Accounts
            </p>
          </Link>
        </div>

        {/* atlas logo */}

        <div className="w-[280px]  cursor-pointer relative z-0 bottom-[30px]  ">
          <img
            className="w-[100%] h-[100%]  object-cover"
            src={atlascologo}
            alt="atlaslogo"
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar
