import React from 'react'

const historyList = new Array(12).fill(0)

const History = () => {
  return (
    <div className="flex-none lg:w-[300px] w-[200px] mt-5 px-1 py-1  h-[100vh] overflow-auto rounded-md  overflow-y-scroll no-scrollbar ">
      {/* Heading History */}
      <div className="pt-10 shadow-3xl rounded-2xl bg-slate-50">
        <h1 className="mb-5 text-3xl font-bold text-center">History</h1>
        {/* History list */}
        {historyList.map((elem, ind) => {
          return (
            <div
              key={ind}
              className={`  duration-300 font-medium   px-1 w-[90%] m-auto group ${
                ind !== 0 && 'border-t-2'
              } flex flex-col gap-y-1 px-4 py-3 cursor-pointer hover:text-[#016ebd] group  hover:bg-slate-300 hover:rounded-xl `}
            >
              <p
                className="text-slate-400  text-[8px] md:text-sm
            whitespace-nowrap group-hover:text-[#016ebd]"
              >
                08/05/2023
              </p>
              <p className="text-[8px] md:text-sm whitespace-nowrap">
                Conversation with: Founder
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default History
