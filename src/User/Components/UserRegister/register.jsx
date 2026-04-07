import React from 'react'
import { Outlet } from 'react-router-dom'
import RightSide from './RightSide'
import LeftSide from './LeftSide'

const Register = () => {
  return (
    <div className='min-h-screen bg-slate-300 flex items-center justify-center'>

      <div className='flex w-[1200px] h-[94vh] bg-white rounded-2xl shadow-xl overflow-hidden'>
        <LeftSide />
        {/* <RightSide/> */}
        <Outlet />
      </div>

    </div>
  )
}

export default Register