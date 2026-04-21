import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from './LeftSide'

const Register = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-200 via-orange-100 to-slate-300 flex items-center justify-center px-4'>

      <div className='flex flex-col md:flex-row w-full max-w-6xl 
                      bg-white/40 backdrop-blur-lg 
                      rounded-2xl shadow-2xl overflow-hidden border'>

        <div className='w-full md:w-1/2 h-64 md:h-auto'>
          <LeftSide />
        </div>

        <div className='w-full md:w-1/2'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Register