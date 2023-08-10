import React from 'react'
import History from '../components/secondPage/History'
import Mid from '../components/secondPage/Mid'

const EventPage = () => {
  return (
    <div className='flex justify-between border-4 w-[100%]'>
    <Mid/>
    <History/>
    </div>
  )
}

export default EventPage