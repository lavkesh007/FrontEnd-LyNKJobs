import React from 'react'
import LeftSide from './leftSide'
import { Outlet } from 'react-router-dom'

const LeftRight = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-full'>
      
      {/* LEFT SIDE */}
      <div className='w-full md:w-1/2 h-64 md:h-full'>
        <LeftSide/>
      </div>

      {/* RIGHT SIDE */}
      <div className='w-full md:w-1/2 h-full'>
        <Outlet/>
      </div>

    </div>
  )
}

export default LeftRight