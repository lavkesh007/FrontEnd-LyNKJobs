import React from 'react'
import LeftRight from './LeftRight'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-orange-100 to-slate-300 flex items-center justify-center px-4">
      
      <div className="w-full max-w-5xl h-auto md:h-[650px] 
                      backdrop-blur-lg bg-white/40 
                      rounded-2xl shadow-2xl overflow-hidden 
                      flex flex-col md:flex-row border border-white/30">

        <LeftRight />

      </div>

    </div>
  )
}

export default Login