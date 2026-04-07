import React from 'react'
import LeftAdminHome from './LeftAdminHome'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminHomeMain = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div >
        <AdminNavbar />
      </div>

      <div className='flex flex-1 overflow-hidden'>
        <div className='w-1/6 h-full overflow-y-auto'>
          <LeftAdminHome />
        </div>
        <div className='w-5/6 h-full overflow-y-auto bg-slate-200'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default AdminHomeMain