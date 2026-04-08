import React from 'react'
import LeftRight from './LeftRight'

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex items-center justify-center px-4">
      
      <div className="w-full max-w-5xl h-auto md:h-[700px] flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden">
        <LeftRight />
      </div>

    </div>
  )
}

export default Login