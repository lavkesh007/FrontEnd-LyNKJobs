import React, { useState } from 'react'
import LeftAdminHome from './LeftAdminHome'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminHomeMain = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen overflow-hidden'>

      {/* Navbar */}
      <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className='flex flex-1 overflow-hidden'>

        {/* Sidebar (Mobile Overlay) */}
        <div className={`fixed inset-0 z-40 bg-black/50 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`} 
             onClick={() => setSidebarOpen(false)}>
        </div>

        {/* Sidebar */}
        <div className={`
          fixed md:static z-50 
          w-64 md:w-1/5 lg:w-1/6 
          h-full bg-white 
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 
          transition-transform duration-300
        `}>
          <LeftAdminHome closeSidebar={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className='flex-1 bg-slate-200 overflow-y-auto p-3'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default AdminHomeMain