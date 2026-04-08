import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from './LeftSide'

const Register = () => {
  return (
    <div className='min-h-screen bg-slate-300 flex items-center justify-center px-4'>

      <div className='flex flex-col md:flex-row w-full max-w-6xl h-auto md:h-[94vh] bg-white rounded-2xl shadow-xl overflow-hidden'>
        <div className='w-full md:w-1/2 h-64 md:h-full'>
          <LeftSide />
        </div>

        <div className='w-full md:w-1/2 h-full'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Register