import React, { useState, useRef } from 'react'
import LeftSide from './LeftSide'
import { Outlet } from 'react-router-dom'

const UserProfile = () => {

  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setOpenSidebar(!openSidebar);

    setTimeout(() => {
      sidebarRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className='min-h-screen bg-slate-200'>

      {/* 🔥 Mobile Button */}
      <div className='md:hidden p-3'>
        <button 
          onClick={handleToggle}
          className='bg-slate-600 text-white px-4 py-2 rounded-lg'
        >
          ☰ Menu
        </button>
      </div>

      <div className='flex flex-col md:flex-row min-h-screen'>

        {/* 🔥 Sidebar */}
        <div 
          ref={sidebarRef}
          className={`
            w-full md:w-[250px]
            ${openSidebar ? "block" : "hidden"}
            md:block
          `}
        >
          <LeftSide/>
        </div>

        {/* 🔥 Content */}
        <div className='flex-1 p-4'>
          <Outlet/>
        </div>

      </div>

    </div>
  )
}

export default UserProfile