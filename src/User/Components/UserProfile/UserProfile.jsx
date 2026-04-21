import React, { useState } from 'react'
import LeftSide from './LeftSide'
import { Outlet } from 'react-router-dom'

const UserProfile = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='min-h-screen 
                    bg-gradient-to-br from-slate-900 to-slate-700'>

      {/* Mobile Button */}
      <div className='md:hidden p-3'>
        <button 
          onClick={() => setOpenSidebar(true)}
          className='bg-orange-500 text-white px-4 py-2 rounded-lg'
        >
          ☰ Menu
        </button>
      </div>

      {/* Overlay */}
      {openSidebar && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[250px] z-50
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <LeftSide/>
      </div>

      {/* Content */}
      <div className='md:ml-[250px] p-4'>
        <Outlet/>
      </div>

    </div>
  )
}

export default UserProfile